"use strict";(self.webpackChunkHelpDesk_FrontEnd=self.webpackChunkHelpDesk_FrontEnd||[]).push([[879],{7879:(Y,h,l)=>{l.r(h),l.d(h,{FeedbackModule:()=>Q});var k=l(6895),i=l(7337),a=l(4006),C=l(7772),y=l(5861),A=l(1954),e=l(4650);var v=l(7392);let M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-send-modal"]],decls:4,vars:0,consts:[[1,"send-message"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e._uU(1," Mensaje Enviado "),e.TgZ(2,"mat-icon"),e._uU(3,"done_outline"),e.qZA()())},dependencies:[v.Hw],styles:[".send-message[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-around}mat-icon[_ngcontent-%COMP%]{color:#4caf50}"]}),n})();var U=l(529),I=l(7009);let x=(()=>{class n{constructor(t,o){this.http=t,this._snackBar=o,this.apiUrl="http://vps-3308536-x.dattaweb.com/api/v1"}sendFeedback(t){return this.http.post(`${this.apiUrl}/contact`,t)}showConfirmationMessage(){this._snackBar.openFromComponent(M,{duration:2e3})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(U.eN),e.LFG(I.ux))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var N=l(4859),F=l(3546),J=l(4144),s=l(9549),E=l(3683);function O(n,r){1&n&&(e.TgZ(0,"small"),e._uU(1,"El nombre es requerido"),e.qZA())}function S(n,r){1&n&&(e.TgZ(0,"small"),e._uU(1,"El email es requerido"),e.qZA())}function q(n,r){1&n&&(e.TgZ(0,"small"),e._uU(1,"El email debe ser v\xe1lido"),e.qZA())}function j(n,r){1&n&&(e.TgZ(0,"small"),e._uU(1,"El asunto es requerido"),e.qZA())}function P(n,r){1&n&&(e.TgZ(0,"small"),e._uU(1,"El mensaje es requerido"),e.qZA())}const w=[{path:"",component:(()=>{class n{constructor(t,o){this.router=t,this.feedbackService=o,this.feedbackForm=new a.cw({name:new a.NI("",[a.kI.required]),email:new a.NI("",[a.kI.required,A.d.checkEmail]),subject:new a.NI("",[a.kI.required,a.kI.maxLength(50)]),message:new a.NI("",[a.kI.required,a.kI.maxLength(500)])})}get form(){return this.feedbackForm}sendFeedback(){var t=this;return(0,y.Z)(function*(){const o=t.form.value;t.form.valid&&(yield t.feedbackService.sendFeedback(o).subscribe({next:()=>{t.feedbackService.showConfirmationMessage()},error:m=>console.error(m),complete:()=>t.router.navigate(["/"])}))})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(i.F0),e.Y36(x))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-feedback"]],decls:41,vars:11,consts:[[1,"feedback-container"],[1,"feedback-content"],["color","primary",1,"feedback-toolbar"],[1,"feedbackForm",3,"formGroup","ngSubmit"],["appearance","outline",1,"mat-form-field-invalid"],["matPrefix",""],["autofocus","","type","text","matInput","","placeholder","Nombre","formControlName","name"],[3,"hidden"],[4,"ngIf"],["type","email","matInput","","placeholder","Escriba su email","formControlName","email"],["type","text","matInput","","placeholder","Escriba su nombre","formControlName","subject"],["matInput","","placeholder","Escriba su nombre","rows","5","formControlName","message"],[1,"btn-feedback-container"],["type","submit","mat-raised-button","","color","primary",2,"width","50%",3,"disabled"]],template:function(t,o){if(1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"mat-card")(3,"mat-toolbar",2),e._uU(4,"AY\xdaDANOS A MEJORAR"),e.qZA(),e.TgZ(5,"mat-card-content")(6,"form",3),e.NdJ("ngSubmit",function(){return o.sendFeedback()}),e.TgZ(7,"mat-form-field",4)(8,"mat-label"),e._uU(9,"Nombre y Apellido"),e.qZA(),e.TgZ(10,"mat-icon",5),e._uU(11,"person_outline"),e.qZA(),e._UZ(12,"input",6),e.TgZ(13,"mat-error",7),e.YNc(14,O,2,0,"small",8),e.qZA()(),e.TgZ(15,"mat-form-field",4)(16,"mat-label"),e._uU(17,"Email"),e.qZA(),e.TgZ(18,"mat-icon",5),e._uU(19,"email"),e.qZA(),e._UZ(20,"input",9),e.TgZ(21,"mat-error",7),e.YNc(22,S,2,0,"small",8),e.YNc(23,q,2,0,"small",8),e.qZA()(),e.TgZ(24,"mat-form-field",4)(25,"mat-label"),e._uU(26,"Asunto"),e.qZA(),e.TgZ(27,"mat-icon",5),e._uU(28,"subject"),e.qZA(),e._UZ(29,"input",10),e.TgZ(30,"mat-error",7),e.YNc(31,j,2,0,"small",8),e.qZA()(),e.TgZ(32,"mat-form-field",4)(33,"mat-label"),e._uU(34,"Mensaje"),e.qZA(),e._UZ(35,"textarea",11),e.TgZ(36,"mat-error",7),e.YNc(37,P,2,0,"small",8),e.qZA()(),e.TgZ(38,"div",12)(39,"button",13),e._uU(40,"Enviar"),e.qZA()()()()()()()),2&t){let m,f,d,p,g,c,b,u,Z;e.xp6(6),e.Q6J("formGroup",o.feedbackForm),e.xp6(7),e.Q6J("hidden",(null==(m=o.form.get("name"))?null:m.valid)||(null==(m=o.form.get("name"))?null:m.pristine)),e.xp6(1),e.Q6J("ngIf",null==(f=o.form.get("name"))||null==f.errors?null:f.errors.required),e.xp6(7),e.Q6J("hidden",(null==(d=o.form.get("email"))?null:d.valid)||(null==(d=o.form.get("email"))?null:d.pristine)),e.xp6(1),e.Q6J("ngIf",null==(p=o.form.get("email"))||null==p.errors?null:p.errors.required),e.xp6(1),e.Q6J("ngIf",null==(g=o.form.get("email"))||null==g.errors?null:g.errors.email),e.xp6(7),e.Q6J("hidden",(null==(c=o.form.get("subject"))?null:c.valid)||(null==(c=o.form.get("subject"))?null:c.pristine)),e.xp6(1),e.Q6J("ngIf",null==(b=o.form.get("subject"))||null==b.errors?null:b.errors.required),e.xp6(5),e.Q6J("hidden",(null==(u=o.form.get("message"))?null:u.valid)||(null==(u=o.form.get("message"))?null:u.pristine)),e.xp6(1),e.Q6J("ngIf",null==(Z=o.form.get("message"))||null==Z.errors?null:Z.errors.required),e.xp6(2),e.Q6J("disabled",o.feedbackForm.invalid)}},dependencies:[k.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,N.lW,F.a8,F.dn,v.Hw,J.Nt,s.KE,s.hX,s.TO,s.qo,E.Ye],styles:[".feedback-container[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 64px);align-items:center;display:flex;flex-wrap:wrap}mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:.4rem}.feedback-content[_ngcontent-%COMP%]{width:80%;max-width:350px;display:block;margin:0 auto}.feedback-toolbar[_ngcontent-%COMP%]{justify-content:center}mat-toolbar[_ngcontent-%COMP%]{margin-bottom:1rem}textarea[_ngcontent-%COMP%]{resize:none}.btn-feedback-container[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.mat-mdc-form-field-flex[_ngcontent-%COMP%]{display:inline-block}@media screen and (max-width: 600px){mat-toolbar[_ngcontent-%COMP%]{font-size:medium}mat-label[_ngcontent-%COMP%]{font-size:.9rem}mat-error[_ngcontent-%COMP%]{font-size:.8rem}}"]}),n})()}];let _=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[i.Bz.forChild(w),i.Bz]}),n})(),Q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[k.ez,_,a.u5,a.UX,C.h,i.Bz]}),n})()}}]);