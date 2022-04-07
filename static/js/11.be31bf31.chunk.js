(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[11],{282:function(e,t,n){"use strict";var i=n(5),r=Object(i.a)("div")((function(e){return{backgroundColor:e.theme.palette.primary.light,minHeight:"100vh"}}));t.a=r},283:function(e,t,n){"use strict";var i=n(12),r=n(45),a=n(259),c=n(83),s=n(1),o=["children"];t.a=function(e){var t=e.children,n=Object(r.a)(e,o);return Object(s.jsx)(c.a,Object(i.a)(Object(i.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(s.jsx)(a.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},285:function(e,t,n){"use strict";var i=n(0);t.a=function(){var e=Object(i.useRef)(!0);return Object(i.useEffect)((function(){return function(){e.current=!1}}),[]),e}},286:function(e,t,n){"use strict";var i=n(234),r=n(64),a=n(298),c=n(1);t.a=function(){return Object(c.jsxs)(i.a,{direction:"row",justifyContent:"space-between",children:[Object(c.jsx)(r.a,{variant:"subtitle2",component:a.a,href:"https://qiqad.github.io",target:"_blank",underline:"hover",children:"qiqad.github.io"}),Object(c.jsx)(r.a,{variant:"subtitle2",component:a.a,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 qiqad.github.io"})]})}},515:function(e,t,n){"use strict";n.r(t);var i=n(32),r=n(21),a=n(239),c=n(251),s=n(234),o=n(64),l=n(143),j=n(282),d=n(283),b=n(123),u=n(12),x=n(103),m=n.n(x),h=n(122),O=n(13),p=n(0),f=n(18),g=n(27),v=n(289),y=n.n(v),w=n(259),S=n(262),C=n(268),E=n(250),k=n(252),I=n(269),q=n(309),R=n(308),z=n(285),B=n(85),P=n(1),W=function(e){var t=Object.assign({},e),n=Object(r.a)(),i=Object(z.a)(),j=Object(a.a)(n.breakpoints.down("md")),d=Object(g.c)((function(e){return e.customization})),b=(Object(f.f)(),Object(p.useState)(!0)),x=Object(O.a)(b,2),v=x[0],W=x[1];return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(c.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(P.jsx)(c.a,{item:!0,xs:12,children:Object(P.jsxs)(w.a,{sx:{alignItems:"center",display:"flex"},children:[Object(P.jsx)(l.a,{sx:{flexGrow:1},orientation:"horizontal"}),Object(P.jsx)(S.a,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:"".concat(n.palette.grey[100]," !important"),color:"".concat(n.palette.grey[900],"!important"),fontWeight:500,borderRadius:"".concat(d.borderRadius,"px")},disableRipple:!0,disabled:!0,children:"REQUEST PASSWORD RESET"}),Object(P.jsx)(l.a,{sx:{flexGrow:1},orientation:"horizontal"})]})}),Object(P.jsx)(c.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(P.jsx)(w.a,{sx:{mb:2},children:Object(P.jsx)(o.a,{variant:"subtitle1",children:"Please input registered email."})})})]}),v?Object(P.jsx)(R.a,{initialValues:{email:""},validationSchema:q.a().shape({email:q.b().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=Object(h.a)(m.a.mark((function e(t,n){var r,a,c,s,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setErrors,a=n.setStatus,c=n.setSubmitting,s={header:{"Content-Type":"application/json"}},o=t.email,alert(o),e.prev=4,e.next=7,y.a.post("/api/auth/forgotpassword",{email:o},s);case 7:i.current&&(a({success:!0}),c(!0)),W(!v),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0),i.current&&(a({success:!1}),r({submit:e.t0.response.data.error}),c(!1));case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var i=e.errors,r=e.handleBlur,a=e.handleChange,c=e.handleSubmit,s=e.isSubmitting,o=e.touched,l=e.values;return Object(P.jsxs)("form",Object(u.a)(Object(u.a)({noValidate:!0,onSubmit:c},t),{},{children:[Object(P.jsxs)(C.a,{fullWidth:!0,error:Boolean(o.email&&i.email),sx:Object(u.a)({},n.typography.customInput),children:[Object(P.jsx)(E.a,{htmlFor:"outlined-adornment-email-register",children:"Email Address"}),Object(P.jsx)(k.a,{id:"outlined-adornment-email-register",type:"email",value:l.email,name:"email",onBlur:r,onChange:a,inputProps:{}}),o.email&&i.email&&Object(P.jsx)(I.a,{error:!0,id:"standard-weight-helper-text--register",children:i.email})]}),i.submit&&Object(P.jsx)(w.a,{sx:{mt:3},children:Object(P.jsx)(I.a,{error:!0,children:i.submit})}),Object(P.jsx)(w.a,{sx:{mt:2},children:Object(P.jsx)(B.a,{children:Object(P.jsx)(S.a,{disableElevation:!0,disabled:s,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Send Email"})})})]}))}}):Object(P.jsx)(c.a,{item:!0,xs:12,children:Object(P.jsx)(c.a,{container:!0,direction:j?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(P.jsx)(c.a,{item:!0,children:Object(P.jsxs)(s.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(P.jsx)(o.a,{color:"#4ad64f",gutterBottom:!0,variant:j?"h3":"h2",children:"Email Sent"}),Object(P.jsx)(o.a,{variant:"caption",fontSize:"16px",textAlign:j?"center":"inherit",children:"Please check your email inbox for password reset instructions."})]})})})})]})},A=n(286);t.default=function(){var e=Object(r.a)(),t=Object(a.a)(e.breakpoints.down("md"));return Object(P.jsx)(j.a,{children:Object(P.jsxs)(c.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(P.jsx)(c.a,{item:!0,xs:12,children:Object(P.jsx)(c.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(P.jsx)(c.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(P.jsx)(d.a,{children:Object(P.jsxs)(c.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(P.jsx)(c.a,{item:!0,sx:{mb:3},children:Object(P.jsx)(i.b,{to:"#",children:Object(P.jsx)(b.a,{})})}),Object(P.jsx)(c.a,{item:!0,xs:12,children:Object(P.jsx)(c.a,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(P.jsx)(c.a,{item:!0,children:Object(P.jsxs)(s.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(P.jsx)(o.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Forgot Password"}),Object(P.jsx)(o.a,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"Enter your registered email to continue."})]})})})}),Object(P.jsx)(c.a,{item:!0,xs:12,children:Object(P.jsx)(W,{})}),Object(P.jsx)(c.a,{item:!0,xs:12,children:Object(P.jsx)(l.a,{})}),Object(P.jsx)(c.a,{item:!0,xs:12,children:Object(P.jsxs)(c.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:[Object(P.jsx)(o.a,{component:i.b,to:"/login",variant:"subtitle1",sx:{textDecoration:"none"},children:"Login"}),Object(P.jsx)(o.a,{component:i.b,to:"/register",variant:"subtitle1",sx:{textDecoration:"none"},children:"Sign Up"})]})})]})})})})}),Object(P.jsx)(c.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(P.jsx)(A.a,{})})]})})}}}]);
//# sourceMappingURL=11.be31bf31.chunk.js.map