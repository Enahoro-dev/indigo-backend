(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{6896:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return c(1523)}])},1523:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return v}});var d,e=c(5893),f=c(7294),g=c(7568),h=c(4051),i=c.n(h),j=c(1163),k=c.n(j),l=[{id:1,name:"first_name",label:"First Name",type:"text"},{id:2,name:"last_name",label:"Last Name",type:"text"},{id:3,name:"sex",label:"Sex",type:"text"},{id:4,name:"age",label:"Age",type:"number"},{id:5,name:"patient_number",label:"Hospital Id",type:"number"},{id:6,name:"phone_number",label:"Phone Number",type:"number"},{id:7,name:"address",label:"Address",type:"text"}],m=function(a){var b=a.onInputChange,c=a.formData;a.initialFormData;var d,h=(0,f.useState)({}),j=h[0],m=h[1],n=(0,f.useState)(!1),o=n[0],p=n[1],q=(0,f.useState)("hidden"),r=(q[0],q[1]),s={patient_record:[],first_name:c.user.first_name,last_name:c.user.last_name,age:c.user.age,sex:c.user.sex,patient_number:c.user.patient_number,address:c.user.address,phone_number:c.user.phone_number},t=function(a){a.preventDefault(),m(v(s)),p(!0)},u=(d=(0,g.Z)(i().mark(function a(){return i().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:fetch("http://127.0.0.1:8000/api/patient/new/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),setTimeout(function(){k().push("/")},2e3);case 2:case"end":return a.stop()}},a)})),function(){return d.apply(this,arguments)});(0,f.useEffect)(function(){0===Object.keys(j).length&&o&&(u(),r(""))},[j,o]);var v=function(a){var b={};return(""===a.first_name||0===a.age||""===a.last_name||""===a.address||""===a.sex||0===a.patient_number||0===a.phone_number)&&(b.field="Please fill all fields"),b};return(0,e.jsxs)("form",{onSubmit:t,className:"w-5/6 mt-4",children:[(0,e.jsx)("div",{className:" flex flex-wrap",children:l.map(function(a,c){return(0,e.jsxs)("div",{className:"flex flex-col my-2 w-2/5 mr-10",children:[(0,e.jsx)("label",{className:"my-2 font-semibold text-xs",children:a.label}),(0,e.jsx)("input",{onChange:b,className:"focus:outline-none focus:ring focus:border-blue-300 h-8 pl-2 text-sm border border-gray-400",type:a.type,name:a.name})]},c)})}),(0,e.jsx)("p",{className:"text-red-500 mt-2 text-xs",children:j.field}),(0,e.jsx)("button",{type:"submit",className:"bg-main mt-4 p-1 h-8 w-16 rounded text-xs text-white hover:text-blue-300",children:"Save"})]})},n=m,o=c(4924),p=c(6042);function q(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}(r=d||(d={})).USER="user";var r,s=function(a,b){var c=b.type,e=b.payload,f=e.field,g=e.value;return c===d.USER?q((0,p.Z)({},a),{user:q((0,p.Z)({},a.user),(0,o.Z)({},f,g))}):a},t={user:{first_name:"",last_name:"",age:0,sex:"",patient_number:0,address:"",phone_number:0}},u=function(){var a=(0,f.useReducer)(s,t),b=a[0],c=a[1],g=function(a){c({type:d.USER,payload:{field:a.target.name,value:a.target.value}})};return(0,e.jsx)(n,{onInputChange:g,formData:b,initialFormData:t})},v=function(){return(0,e.jsxs)("div",{className:"ml-8",children:[(0,e.jsx)("div",{className:"mt-4 flex items-center",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-semibold",children:"Add New Patient"}),(0,e.jsx)("p",{className:"text-xs",children:"Fill out the form below to add a new patient to the system."})]})}),(0,e.jsx)(u,{})]})}}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=6896)}),_N_E=a.O()}])