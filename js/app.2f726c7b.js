(function(t){function e(e){for(var n,i,s=e[0],r=e[1],l=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);b&&b(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,s=1;s<o.length;s++){var r=o[s];0!==a[r]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},a={app:0},c=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/Portfolio/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var b=r;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0402":function(t,e,o){t.exports=o.p+"img/films_screen.5a799df4.jpg"},"0f4d":function(t,e,o){t.exports=o.p+"img/omnia.ce7f1b79.jpg"},"13af":function(t,e,o){"use strict";o("77de")},1504:function(t,e,o){},1820:function(t,e,o){t.exports=o.p+"img/main-min.ac39f776.jpg"},"2cf4":function(t,e,o){t.exports=o.p+"img/book.20075204.jpg"},"2d2d":function(t,e,o){"use strict";o("9b3c")},3242:function(t,e,o){t.exports=o.p+"img/hockey.99c76561.jpg"},"335f":function(t,e,o){"use strict";o("68bb")},4163:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);var n=o("7a23"),a=o("6605");function c(t,e,o,a,c,i){const s=Object(n["z"])("navigation"),r=Object(n["z"])("router-view"),l=Object(n["z"])("top-button");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(s),Object(n["f"])("main",null,[Object(n["i"])(r),Object(n["G"])(Object(n["i"])(l,{onTop:i.moveTop},null,8,["onTop"]),[[n["D"],c.isTopButtonVisible]])])],64)}const i={class:"wrapper"};function s(t,e,o,a,c,s){const r=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["e"])("header",null,[Object(n["f"])("nav",null,[Object(n["f"])("div",i,[Object(n["f"])("button",{class:Object(n["o"])(["nav-toggle",{"nav-toggle--close":c.isNavVisible}]),"aria-label":"Open the menu",type:"button",onClick:e[0]||(e[0]=(...t)=>s.openTheNav&&s.openTheNav(...t))},null,2)]),Object(n["f"])("ul",{onClick:e[1]||(e[1]=(...t)=>s.closeTheNav&&s.closeTheNav(...t)),class:Object(n["o"])(["menu",{"class-open":c.isNavVisible}])},[Object(n["f"])("li",null,[Object(n["i"])(r,{to:"/"},{default:Object(n["F"])(()=>[Object(n["h"])("Home")]),_:1})]),Object(n["f"])("li",null,[Object(n["i"])(r,{to:"/projects"},{default:Object(n["F"])(()=>[Object(n["h"])("Projects")]),_:1})]),Object(n["f"])("li",null,[Object(n["i"])(r,{to:"/contacts"},{default:Object(n["F"])(()=>[Object(n["h"])("Contacts")]),_:1})])],2)])])}var r={data(){return{isNavVisible:!1}},methods:{openTheNav(){this.isNavVisible=!this.isNavVisible},closeTheNav(){this.isNavVisible=!this.isNavVisible}}},l=(o("b3e5"),o("6b0d")),b=o.n(l);const p=b()(r,[["render",s],["__scopeId","data-v-5aceadc4"]]);var d=p;function u(t,e,o,a,c,i){return Object(n["s"])(),Object(n["e"])("button",{type:"button",onClick:e[0]||(e[0]=(...t)=>i.moveOnTop&&i.moveOnTop(...t))})}var f={methods:{moveOnTop(){this.$emit("top")}}};o("13af");const h=b()(f,[["render",u],["__scopeId","data-v-f100c7a4"]]);var v=h,m={components:{Navigation:d,TopButton:v},data(){return{isTopButtonVisible:!1}},methods:{moveTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0},scrollFunction(){document.body.scrollTop>20||document.documentElement.scrollTop>20?this.isTopButtonVisible=!0:this.isTopButtonVisible=!1}},mounted(){window.addEventListener("scroll",this.scrollFunction)}};o("b9cd");const j=b()(m,[["render",c]]);var g=j;function O(t,e,o,a,c,i){const s=Object(n["z"])("intro"),r=Object(n["z"])("story"),l=Object(n["z"])("skills");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(s),Object(n["i"])(r),Object(n["i"])(l)],64)}var y=o("1820"),S=o.n(y);const w=t=>(Object(n["v"])("data-v-d1f94ee0"),t=t(),Object(n["t"])(),t),k={class:"intro"},T=w(()=>Object(n["f"])("div",null,[Object(n["f"])("h2",null,"Hello!"),Object(n["f"])("p",null," My name is Evgeniya. I am a front-end developer. Welcome to my portfolio site! Here I would like to tell a little about myself, and show my projects. ")],-1)),_=w(()=>Object(n["f"])("img",{alt:"portrait",src:S.a},null,-1)),C=[T,_];function x(t,e){return Object(n["s"])(),Object(n["e"])("div",k,C)}o("335f");const I={},M=b()(I,[["render",x],["__scopeId","data-v-d1f94ee0"]]);var V=M,L=o("a1b8"),J=o.n(L);const N=t=>(Object(n["v"])("data-v-05d2ccd8"),t=t(),Object(n["t"])(),t),z={class:"story"},H=N(()=>Object(n["f"])("div",{class:"story-text"},[Object(n["f"])("h2",null,"My story:"),Object(n["f"])("p",null,[Object(n["h"])(" My developer's story began in 2019, the moment I opened the code editor for the first time. After that I found my first job as a frontend-developer. There I've got the opportunity to work with other front-end and back-end developers, to build few websites from scratch, to work on big project, to implement new components, and to learn a lot of new things. "),Object(n["f"])("br"),Object(n["h"])("I like front-end because it's the mix of design and technologies. ")]),Object(n["f"])("p")],-1)),B=N(()=>Object(n["f"])("div",{class:"story-img"},[Object(n["f"])("img",{alt:"sreenshot of the si te",src:J.a})],-1)),E=[H,B];function F(t,e){return Object(n["s"])(),Object(n["e"])("div",z,E)}o("2d2d");const P={},R=b()(P,[["render",F],["__scopeId","data-v-05d2ccd8"]]);var A=R,W=o("2cf4"),G=o.n(W);const D={class:"skills"},q=Object(n["g"])('<div class="skills-text" data-v-77043a7b><h2 data-v-77043a7b>My skills:</h2><ul data-v-77043a7b><li data-v-77043a7b><p class="tech" data-v-77043a7b>JavaScript ES6.</p></li><li data-v-77043a7b><b data-v-77043a7b>Vue.js.</b> The core framework I use on my current position. I build and implement new components and work with legacy code.</li><li data-v-77043a7b><b data-v-77043a7b>React.js.</b> Framework I&#39;m currently studying. I built few pet projects with React.js</li><li data-v-77043a7b><b data-v-77043a7b>HTML5. </b> Valid and semantic mark-up and BEM methodology. </li><li data-v-77043a7b><b data-v-77043a7b>CSS3. </b> I really enjoy creating layouts. I also use SCSS, Sass, Less and Talwind CSS. </li><li data-v-77043a7b><b data-v-77043a7b>Jekyll.</b></li><li data-v-77043a7b><b data-v-77043a7b>No code technologies.</b> I created few websites with Webflow.</li><li data-v-77043a7b><b data-v-77043a7b>Gulp, Webpack.</b></li><li data-v-77043a7b><b data-v-77043a7b>Git.</b></li><li data-v-77043a7b><b data-v-77043a7b>Languages: Russian (native), English (fluent), Serbian (fluent).</b></li></ul><p data-v-77043a7b></p></div><div class="skills-img" data-v-77043a7b><img alt="sreenshot of the site" src="'+G.a+'" data-v-77043a7b></div>',2),X=[q];function Y(t,e){return Object(n["s"])(),Object(n["e"])("div",D,X)}o("ec71");const Z={},$=b()(Z,[["render",Y],["__scopeId","data-v-77043a7b"]]);var K=$,Q={components:{Intro:V,Story:A,Skills:K}};const U=b()(Q,[["render",O]]);var tt=U;const et={class:"contact"},ot=Object(n["g"])('<h2 data-v-1ea86f93>Let&#39;s Chat:</h2><div class="contact-block" data-v-1ea86f93><div class="contact-text" data-v-1ea86f93><p data-v-1ea86f93> You can reach me here. Feel free to write in English, Russian or Serbian. </p></div><ul class="contact-list" data-v-1ea86f93><li class="contact-item" data-v-1ea86f93><a href="https://github.com/evnayd" data-v-1ea86f93>Github</a></li><li class="contact-item" data-v-1ea86f93><a href="https://www.linkedin.com/in/evgeniya-naydenisheva/" data-v-1ea86f93>LinkedIn</a></li><li class="contact-item" data-v-1ea86f93><a href="https://www.facebook.com/jane.tikhonova/" data-v-1ea86f93>Facebook</a></li></ul></div>',2),nt=[ot];function at(t,e){return Object(n["s"])(),Object(n["e"])("div",et,nt)}o("5d06");const ct={},it=b()(ct,[["render",at],["__scopeId","data-v-1ea86f93"]]);var st=it;const rt=t=>(Object(n["v"])("data-v-d0d00756"),t=t(),Object(n["t"])(),t),lt=["projects"],bt=rt(()=>Object(n["f"])("h1",null,"Here you can see some of my projects:",-1)),pt={class:"wrapper"};function dt(t,e,o,a,c,i){const s=Object(n["z"])("project");return Object(n["s"])(),Object(n["e"])("div",{projects:c.projects,class:"container"},[bt,Object(n["f"])("div",pt,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(c.projects,t=>(Object(n["s"])(),Object(n["d"])(s,{key:t.id,project:t},null,8,["project"]))),128))])],8,lt)}const ut={class:"project-item"},ft={class:"project-img"},ht=["src"],vt={class:"project-info"},mt={class:"project-details project-name"},jt={class:"project-details project-tech"},gt=["href"],Ot=["href"];function yt(t,e,o,a,c,i){return Object(n["s"])(),Object(n["e"])("div",ut,[Object(n["f"])("div",ft,[Object(n["f"])("img",{src:o.project.img,alt:"sreenshot of the site"},null,8,ht)]),Object(n["f"])("div",vt,[Object(n["f"])("h3",mt,Object(n["B"])(o.project.name),1),Object(n["f"])("p",jt,Object(n["B"])(o.project.tech),1)]),Object(n["f"])("a",{target:"_blank",class:"project-btn",href:o.project.site},"See the site",8,gt),Object(n["f"])("a",{target:"_blank",class:"project-btn",href:o.project.github},"See the code",8,Ot)])}var St={props:{project:Object,name:String,tech:String,id:Number,img:String,site:String,github:String}};o("8dff");const wt=b()(St,[["render",yt],["__scopeId","data-v-89d1321e"]]);var kt=wt,Tt={components:{Project:kt},data(){return{projects:[{name:"Tourist Organization of Zemun, Belgrade",tech:"HTML, CSS, TailwindCSS, JavaScript, Jekyll, Tina CMS, Vercel",img:o("bc61"),site:"https://www.turistickaorganizacijazemun.rs",github:"https://github.com/tkzzemun/zemuncenter"},{name:"Omnia Bistro & Bar in Australia",tech:"HTML, CSS, TailwindCSS, JavaScript, Jekyll, Tina CMS, Vercel",img:o("0f4d"),site:"https://www.omniabistro.com.au",github:"https://github.com/ultimatemovers/omnia"},{name:"Flower shop",tech:"Weblow",img:o("9357"),site:"https://palisadnik.webflow.io/",github:""},{name:"Event Center in Australia",tech:"HTML, CSS, TailwindCSS, JavaScript, Jekyll",img:o("8c71"),site:"https://www.lkhevents.com.au/"},{name:"Site for children hockey team (in progress)",tech:"Weblow",img:o("3242"),site:"https://sport-f5172e.webflow.io/",github:""},{name:"Long Distance Moving Soft",tech:"CSS, TailwindCSS, Vue.js, Laravel on backend",img:o("f226")},{name:"Ecommerce project for studying purposes",tech:"CSS, TailwindCSS, React.js",img:o("a9d1"),site:"https://6332f2cd83d7ed37cb895fc9--clinquant-boba-fc5a2e.netlify.app",github:"https://github.com/evnayd/React-shop-app"},{id:"04",name:"Frontend developer portfolio ",tech:"CSS, Vue.js, Vue CLI, Vue Router",img:o("f573"),site:"https://evnayd.github.io/portfolio",github:"https://github.com/evnayd/portfolio"},{name:"Recipe app",tech:"HTML, CSS, JavaScript, Vue.js, Vue CLI, fetch API",img:o("a8ec"),github:"https://github.com/evnayd/Recipesapp",site:"https://evnayd.github.io/Recipesapp/"},{name:"Films & cartoons app",tech:"HTML, SCSS, JavaScript",img:o("0402"),github:"https://github.com/evnayd/familyfilms",site:"https://evnayd.github.io/familyfilms/"},{name:"Booking the apartment app",tech:"HTML, CSS, JavaScript, AJAX",img:o("bf96"),github:"https://github.com/evnayd/1033021-keksobooking-20",site:"https://github.com/evnayd"},{name:"Сatalog of sports nutrition for cats ",tech:"HTML, SCSS, JavaScript",img:o("b1df"),github:"https://github.com/evnayd/Energy",site:"https://evnayd.github.io/Energy/"},{name:"To-do list",tech:"HTML, CSS, CSS-animation, JavaScript",img:o("c86f"),github:"https://github.com/evnayd/To-do_list",site:"https://evnayd.github.io/To-do_list/"}]}}};o("fbb4");const _t=b()(Tt,[["render",dt],["__scopeId","data-v-d0d00756"]]);var Ct=_t;const xt=Object(a["a"])({base:"/portfolio/",mode:"hash",history:Object(a["b"])("/portfolio/"),routes:[{path:"/contacts",component:st},{path:"/projects",component:Ct,props:!0},{path:"/home",component:tt},{path:"/",redirect:"/home"}]}),It=Object(n["c"])(g);It.use(xt),It.mount("#app")},"5d06":function(t,e,o){"use strict";o("8278")},"68bb":function(t,e,o){},"77de":function(t,e,o){},8278:function(t,e,o){},"8c71":function(t,e,o){t.exports=o.p+"img/eventcenter.a5158edb.jpg"},"8dff":function(t,e,o){"use strict";o("4163")},9357:function(t,e,o){t.exports=o.p+"img/flowers.5dc1a1ba.jpg"},9407:function(t,e,o){},"9b3c":function(t,e,o){},a1b8:function(t,e,o){t.exports=o.p+"img/laptop.4b8a1ce8.jpg"},a8ec:function(t,e,o){t.exports=o.p+"img/recipes_screen.448a068b.jpg"},a9d1:function(t,e,o){t.exports=o.p+"img/reactshop.31b85f32.jpg"},b1df:function(t,e,o){t.exports=o.p+"img/cat_screen.b8b77929.jpg"},b3e5:function(t,e,o){"use strict";o("c94b")},b9cd:function(t,e,o){"use strict";o("1504")},bc61:function(t,e,o){t.exports=o.p+"img/zemun.a3628096.jpg"},bf96:function(t,e,o){t.exports=o.p+"img/keksobooking_screen.809511f4.jpg"},c86f:function(t,e,o){t.exports=o.p+"img/todo_screen.0d8b3d6a.jpg"},c94b:function(t,e,o){},cc27:function(t,e,o){},ec71:function(t,e,o){"use strict";o("cc27")},f226:function(t,e,o){t.exports=o.p+"img/longdistance.34e1437f.jpg"},f573:function(t,e,o){t.exports=o.p+"img/portfolio.429b9fd0.jpg"},fbb4:function(t,e,o){"use strict";o("9407")}});
//# sourceMappingURL=app.2f726c7b.js.map