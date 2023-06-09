// Node Modules
import jwt from 'jsonwebtoken'
import HttpStatus from 'http-status-codes'
import User from '../models/user.model.js'
import { hash } from 'argon2'

export async function createUser (user) {
  const { email } = user
  try {
    const userDB = await User.findOne({ email })
    if (!userDB) {
      const newUser = await new User(user)
      return newUser
    }
  } catch (error) {
    return error
  }
}

export async function signIn (req, res) {
  const { email, password } = req.body
  try {
    const userDB = await User.findOne({ email })
    if (!userDB) {
      return res.status(HttpStatus.FORBIDDEN).json({
        message: 'Authentication fail. Incorrect email or password.'
      })
    }
    const passwordMatch = await userDB.comparePassword(password)
    if (!password || !passwordMatch) {
      return res.status(HttpStatus.FORBIDDEN).json({
        message: 'Authentication fail. Incorrect email or password.'
      })
    }
    const token = await getToken(userDB._id)
    const userToken = {
      id: userDB.id,
      token
    }
    return userToken
  } catch (error) {
    return error
  }
}

export async function signOut (req, res) {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token
    })
    await req.user.save()
    res.status(HttpStatus.OK).send()
  } catch (error) {
    return error
  }
}

export async function userId (req, res) {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(HttpStatus.NOT_FOUND).send()
    }
    return user
  } catch (error) {
    return error
  }
}

export async function updateUser (req, res) {
  if (!req.body) {
    return res.status(HttpStatus.FORBIDDEN).send('Cannot update user with empty files')
  }
  const id = req.params.id
  const { firstname, lastname, password, newpassword } = req.body

  if (!firstname || !lastname || !password || !newpassword) {
    return res.status(HttpStatus.FORBIDDEN).send('You cannot update user with empty fields')
  }
  const userDB = await User.findById(id)
  const passwordMatch = await userDB.comparePassword(password)
  if (!passwordMatch) {
    return res.status(HttpStatus.FORBIDDEN).send('Passwords do not match')
  }
  const hashPassword = await hash(newpassword)
  const userDetail = { firstname, lastname, password: hashPassword }

  await User.findByIdAndUpdate(id, userDetail, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(HttpStatus.FORBIDDEN).send('User not found')
      } else {
        return res.status(HttpStatus.OK).send('User updated successfully')
      }
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message })
    })
}

export async function getToken (uuid) {
  return await jwt.sign(
    {
      uuid,
      exp: Math.floor(Date.now() / 1000) + 60 * 15
    },
    process.env.SECRET_KEY
  )
}

export function jwtVerifyToken (token) {
  try {
    return jwt.verify(token, process.env.SECRET_KEY)
  } catch (error) {
    return error
  }
}

export function authVerifyToken (token) {
  return jwt.verify(token, process.env.SECRET_KEY, (err, account) => {
    if (err) {
      const message = {
        message: 'Invalid Token',
        status: false
      }
      return message
    } else {
      const message = {
        message: 'Invalid Token',
        account
      }
      return message
    }
  })
}

export function verifyAccount (token, usr) {
  const tokenAccount = { ...token.account }
  if (tokenAccount.Email !== usr.Email) {
    const message = {
      message: 'Invalid Email',
      status: false
    }
    return message
  } else {
    const message = {
      message: 'Account Verified'
    }
    return message
  }
}
