import{r as k,o as u,c as h,a as e,w as m,n as b,b as s,d as L,F as S,e as O,u as y,f as C,t as N,g as r,h as v,i as T,j as l,k as j}from"./vendor.735753dd.js";const I=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))i(_);new MutationObserver(_=>{for(const o of _)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function c(_){const o={};return _.integrity&&(o.integrity=_.integrity),_.referrerpolicy&&(o.referrerPolicy=_.referrerpolicy),_.crossorigin==="use-credentials"?o.credentials="include":_.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(_){if(_.ep)return;_.ep=!0;const o=c(_);fetch(_.href,o)}};I();const E=e("div",{class:"header__heading"},[e("h1",{class:"header__heading-title"},[s("PORTFOLIO BY"),e("br"),s("RYOTA OHASHI")]),e("h2",{class:"header__heading-subtitle"},"WEB ENGINEER")],-1),A={class:"header__gnav"},B={class:"header__gnav-list"},H={class:"header__gnav-item"},W={class:"header__gnav-item"},M={class:"header__gnav-item"},P={class:"header__gnav-item"},R=e("span",{class:"header__menu--1"},null,-1),V=e("span",{class:"header__menu--2"},null,-1),F=e("span",{class:"header__menu--3"},null,-1),K=[R,V,F],Y=e("div",{class:"header__bg"},null,-1),D={setup(n){const t=k(!1),c=()=>{window.scrollY>50?t.value=!0:t.value=!1};window.addEventListener("scroll",c);const i=document.body,_=()=>{i.classList.toggle("open")},o=a=>{let d=a.target.getAttribute("href");d==="#"&&(d="html");const x=document.querySelector(d).getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:x,behavior:"smooth"})};return(a,d)=>(u(),h("header",{class:b(["header js-observe-header",{"fixed-top":t.value}])},[E,e("nav",A,[e("ul",B,[e("li",H,[e("a",{href:"#",onClick:d[0]||(d[0]=m(p=>o(p),["prevent"]))},"TOP")]),e("li",W,[e("a",{href:"#about",onClick:d[1]||(d[1]=m(p=>o(p),["prevent"]))},"ABOUT")]),e("li",M,[e("a",{href:"#skills",onClick:d[2]||(d[2]=m(p=>o(p),["prevent"]))},"SKILLS")]),e("li",P,[e("a",{href:"#works",onClick:d[3]||(d[3]=m(p=>o(p),["prevent"]))},"WORKS")])])]),e("button",{class:"header__menu",onClick:_},K),Y],2))}};var g=(n,t)=>{const c=n.__vccOpts||n;for(const[i,_]of t)c[i]=_;return c};const q={},G=e("p",null,"copyright 2021 RYOTA OHASHI",-1),J=[G];function U(n,t){return u(),h("footer",null,J)}var z=g(q,[["render",U]]),X="/assets/slide_01.7aadbcb1.jpg",Q="/assets/slide_02.b770bde7.jpg",Z="/assets/slide_03.4f5d0b11.jpg",ee="/assets/slide_04.c90e920b.jpg",te="/assets/slide_05.613c6067.jpg";const se={class:"kv"},oe=C('<div class="kv__text"><h3 class="kv__catch">I believe <br class="return1">in <br class="return2">what I see.</h3><div class="kv__keyword"><h4 class="kv__lead">my keywords</h4><p class="kv__list m-text">web : HTML5, CSS3, JavaScript</p><p class="kv__list m-text">\u8DA3\u5473 : \u5C0F\u8AAC\u3084\u8A69\u6B4C</p></div></div>',1),ne={ref:"bg",class:"kv__slide"},_e=["src"],le={setup(n){const t=L({currentNumber:0,imgPath:[X,Q,Z,ee,te]});function c(){t.currentNumber===t.imgPath.length-1?t.currentNumber=0:t.currentNumber++}return setInterval(c,5e3),(i,_)=>(u(),h("section",se,[oe,e("ul",ne,[(u(!0),h(S,null,O(y(t).imgPath,(o,a)=>(u(),h("li",{key:o,class:b({"is-show":a===y(t).currentNumber})},[e("img",{src:o,alt:""},null,8,_e)],2))),128))],512)]))}};const re={props:["title","color"],setup(n){const{title:t,color:c}=n,i=k("bb-"+c);return(_,o)=>(u(),h("h2",{class:b(["hdg2",i.value])},N(n.title),3))}};const ce={class:"content"},$={props:["title","color"],setup(n){const{title:t,color:c}=n,i=k("font-"+c);return(_,o)=>(u(),h("section",{class:b(i.value)},[r(re,{title:n.title,color:n.color},null,8,["title","color"]),e("div",ce,[v(_.$slots,"content")])],2))}};const ie={},ae={class:"section-desc"};function de(n,t){return u(),h("p",ae,[v(n.$slots,"default")])}var w=g(ie,[["render",de]]);const ue={},he={class:"skill-list"};function ve(n,t){return u(),h("ul",he,[v(n.$slots,"default")])}var pe=g(ue,[["render",ve]]);const fe={},ge={class:"skill-item"},me={class:"skill-item__order"},be={class:"skill-item__hdg"},$e={class:"skill-item__text"};function ye(n,t){return u(),h("li",ge,[e("p",me,[v(n.$slots,"order")]),e("p",be,[v(n.$slots,"hdg")]),e("p",$e,[v(n.$slots,"text")])])}var f=g(fe,[["render",ye]]);const ke={},we={class:"works-list"};function Se(n,t){return u(),h("ul",we,[v(n.$slots,"default")])}var xe=g(ke,[["render",Se]]);const Le={class:"work-item"},Oe=["src"],Ce={class:"work-item__title"},Ne={class:"work-item__desc"},Te={class:"work-item__date"},je={props:["path"],setup(n){return(t,c)=>(u(),h("li",Le,[e("img",{class:"work-item__img",src:n.path,alt:""},null,8,Oe),e("h3",Ce,[v(t.$slots,"title")]),e("p",Ne,[v(t.$slots,"desc")]),e("p",Te,[v(t.$slots,"date")])]))}};var Ie="/assets/work_01.33ccd627.jpg";const Ee={class:"cont"},Ae=s(" 1996\u5E74\u751F\u307E\u308C\u3002"),Be=e("br",null,null,-1),He=s(" 2021\u5E74\u3088\u308A\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u30A8\u30F3\u30B8\u30CB\u30A2\u3068\u3057\u3066\u304A\u4ED5\u4E8B\u3092\u59CB\u3081\u305F\u3002"),We=e("br",null,null,-1),Me=s(" \u4E3B\u306BWEB\u30B5\u30A4\u30C8\u306E\u69CB\u7BC9\u7B49\u3092\u3057\u3066\u3044\u308B\u3002"),Pe=e("br",null,null,-1),Re=s(" \u8DA3\u5473\u306F\u6587\u5B66\u5168\u822C\u3067\u3001\u5C0F\u8AAC\u3084\u8A69\u6B4C\u304C\u597D\u304D\u3002"),Ve=e("br",null,null,-1),Fe=e("br",null,null,-1),Ke=s(" \u6700\u8FD1\u306F\u3001Vue\u306B\u89E6\u308C\u305F\u308A\u3057\u3066\u3044\u308B\u3002"),Ye=e("br",null,null,-1),De=s(" \u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u3084\u30CF\u30A4\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u8FBA\u308A\u306B\u3082\u8208\u5473\u3002 "),qe=s("01"),Ge=s("HTML"),Je=s("\u30AF\u30E9\u30B9\u306E\u547D\u540D\u898F\u5247\u306F\u57FA\u672C\u7684\u306B\u306FBEM\u3067\u3059\u3002"),Ue=s("02"),ze=s("CSS"),Xe=s("SCSS\u8A18\u6CD5\u3067\u66F8\u3044\u3066\u304A\u308A\u307E\u3059\u3002\u30EC\u30B9\u30DD\u30F3\u30B7\u30D6\u3082\u5BFE\u5FDC\u53EF\u80FD\u3002"),Qe=s("03"),Ze=s("JavaScript"),et=s("WEB\u30B5\u30A4\u30C8\u69CB\u7BC9\u306B\u5FC5\u8981\u306A\u57FA\u790E\u77E5\u8B58\u306F\u3042\u308A\u3002"),tt=s("04"),st=s("PhotoShop"),ot=s("\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306E\u305F\u3081\u306B\u5FC5\u8981\u306A\u60C5\u5831\u3092\u53D6\u5F97\u3067\u304D\u308B\u3002"),nt=s("05"),_t=s("XD"),lt=s("\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306E\u305F\u3081\u306B\u5FC5\u8981\u306A\u60C5\u5831\u3092\u53D6\u5F97\u3067\u304D\u308B\u3002"),rt=s(" \u3053\u308C\u307E\u3067\u306B\u81EA\u4E3B\u5236\u4F5C\u3057\u3066\u304D\u305F\u3082\u306E\u3092\u63B2\u8F09\u3057\u3066\u3044\u307E\u3059\u3002"),ct=e("br",null,null,-1),it=s("GitHub\uFF1A "),at=e("a",{href:"https://github.com/ryota-ohashi"},"https://github.com/ryota-ohashi",-1),dt=s("\u672C\u30B5\u30A4\u30C8"),ut=s("Vue\u3067\u66F8\u304D\u63DB\u3048\u307E\u3057\u305F\u3002"),ht=e("br",null,null,-1),vt=s("\u4ECA\u56DE\u306FVite\u3092\u4F7F\u3063\u3066\u901F\u3055\u3092\u4F53\u611F\u3057\u3064\u3064\u306E\u69CB\u7BC9\u3002"),pt=s("\uFF08\u5236\u4F5C\u65E5\uFF1A2022-03\uFF09"),ft={setup(n){const t={root:null,rootMargin:"-50% 0px",threshold:0},c=o=>{o.forEach(a=>{a.isIntersecting&&_(a.target)})},i=document.body,_=o=>{o.classList.contains("font-black")?i.classList.add("bg-white"):i.classList.remove("bg-white")};return T(()=>{const o=new IntersectionObserver(c,t);document.querySelectorAll(".js-observe-section").forEach(d=>{o.observe(d)})}),(o,a)=>(u(),h("main",Ee,[r(le,{class:"js-observe-section"}),r($,{class:"section js-observe-section",id:"about",title:"ABOUT",color:"black"},{content:l(()=>[r(w,null,{default:l(()=>[Ae,Be,He,We,Me,Pe,Re,Ve,Fe,Ke,Ye,De]),_:1})]),_:1}),r($,{class:"section js-observe-section",id:"skills",title:"SKILLS",color:"white"},{content:l(()=>[r(pe,null,{default:l(()=>[r(f,null,{order:l(()=>[qe]),hdg:l(()=>[Ge]),text:l(()=>[Je]),_:1}),r(f,null,{order:l(()=>[Ue]),hdg:l(()=>[ze]),text:l(()=>[Xe]),_:1}),r(f,null,{order:l(()=>[Qe]),hdg:l(()=>[Ze]),text:l(()=>[et]),_:1}),r(f,null,{order:l(()=>[tt]),hdg:l(()=>[st]),text:l(()=>[ot]),_:1}),r(f,null,{order:l(()=>[nt]),hdg:l(()=>[_t]),text:l(()=>[lt]),_:1})]),_:1})]),_:1}),r($,{class:"section js-observe-section",id:"works",title:"WORKS",color:"black"},{content:l(()=>[r(w,null,{default:l(()=>[rt,ct,it,at]),_:1}),r(xe,null,{default:l(()=>[r(je,{path:y(Ie)},{title:l(()=>[dt]),desc:l(()=>[ut,ht,vt]),date:l(()=>[pt]),_:1},8,["path"])]),_:1})]),_:1})]))}};const gt={setup(n){return(t,c)=>(u(),h(S,null,[r(D),r(ft),r(z)],64))}};j(gt).mount("#app");
