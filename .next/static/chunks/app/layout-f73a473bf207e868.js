(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1949:function(e,t,n){Promise.resolve().then(n.bind(n,5967)),Promise.resolve().then(n.t.bind(n,8392,23)),Promise.resolve().then(n.t.bind(n,3378,23)),Promise.resolve().then(n.t.bind(n,4356,23))},5967:function(e,t,n){"use strict";n.d(t,{AuthProvider:function(){return u},a:function(){return _}});var a=n(7437),o=n(2265),r=n(5186);let s=(0,n(5236).ZF)({apiKey:"AIzaSyABFhA56f4Jt4Zt5mWGCfUE-i8t0NG3ZQ0",authDomain:"apka-mitra.firebaseapp.com",projectId:"apka-mitra",storageBucket:"apka-mitra.firebasestorage.app",messagingSenderId:"858727056315",appId:"1:858727056315:web:c803f516b2cd365f8bba9e"}),i=(0,r.v0)(s);var l=n(6463);let c=(0,o.createContext)({user:null,loading:!0,error:null,isPhoneVerified:!1,signInWithGoogle:async()=>{},logout:async()=>{},setPhoneVerified:()=>{}});function u(e){let{children:t}=e,[n,s]=(0,o.useState)(null),[u,_]=(0,o.useState)(!0),[d,h]=(0,o.useState)(null),[f,m]=(0,o.useState)(!1),p=(0,l.useRouter)();(0,o.useEffect)(()=>{let e=i.onAuthStateChanged(e=>{s(e),_(!1),e?document.cookie="auth=true; path=/":(document.cookie="auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT",m(!1))});return()=>e()},[]);let g=async()=>{try{h(null);let e=new r.hJ;e.setCustomParameters({prompt:"select_account"}),(await (0,r.rh)(i,e)).user&&m(!1)}catch(e){console.error("Error signing in with Google:",e),h(e.message||"Failed to sign in with Google")}},b=async()=>{try{h(null),await (0,r.w7)(i),p.push("/login")}catch(e){console.error("Error signing out:",e),h(e.message||"Failed to sign out")}};return(0,a.jsx)(c.Provider,{value:{user:n,loading:u,error:d,isPhoneVerified:f,signInWithGoogle:g,logout:b,setPhoneVerified:e=>{m(e),e&&p.push("/")}},children:t})}let _=()=>(0,o.useContext)(c)},4356:function(){},8392:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78",variable:"__variable_d65c78"}},3378:function(e){e.exports={style:{fontFamily:"'__Space_Mono_7dd02c', '__Space_Mono_Fallback_7dd02c'",fontStyle:"normal"},className:"__className_7dd02c",variable:"__variable_7dd02c"}}},function(e){e.O(0,[498,400,638,971,23,744],function(){return e(e.s=1949)}),_N_E=e.O()}]);