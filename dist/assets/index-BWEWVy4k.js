var oe=Object.defineProperty;var re=(e,t,n)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var M=(e,t,n)=>(re(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function L(){}function Z(e){return e()}function P(){return Object.create(null)}function C(e){e.forEach(Z)}function q(e){return typeof e=="function"}function F(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function le(e){return Object.keys(e).length===0}function m(e,t){e.appendChild(t)}function K(e,t,n){e.insertBefore(t,n||null)}function V(e){e.parentNode&&e.parentNode.removeChild(e)}function se(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function Q(e){return document.createTextNode(e)}function E(){return Q(" ")}function I(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function k(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ce(e){return Array.from(e.childNodes)}function ie(e,t){t=""+t,e.data!==t&&(e.data=t)}let H;function S(e){H=e}const b=[],J=[];let x=[];const G=[],ue=Promise.resolve();let T=!1;function fe(){T||(T=!0,ue.then(W))}function j(e){x.push(e)}const N=new Set;let $=0;function W(){if($!==0)return;const e=H;do{try{for(;$<b.length;){const t=b[$];$++,S(t),de(t.$$)}}catch(t){throw b.length=0,$=0,t}for(S(null),b.length=0,$=0;J.length;)J.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];N.has(n)||(N.add(n),n())}x.length=0}while(b.length);for(;G.length;)G.pop()();T=!1,N.clear(),S(e)}function de(e){if(e.fragment!==null){e.update(),C(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}function ae(e){const t=[],n=[];x.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),x=t}const z=new Set;let y;function he(){y={r:0,c:[],p:y}}function ge(){y.r||C(y.c),y=y.p}function O(e,t){e&&e.i&&(z.delete(e),e.i(t))}function A(e,t,n,o){if(e&&e.o){if(z.has(e))return;z.add(e),y.c.push(()=>{z.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function R(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function pe(e){e&&e.c()}function X(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),j(()=>{const s=e.$$.on_mount.map(Z).filter(q);e.$$.on_destroy?e.$$.on_destroy.push(...s):C(s),e.$$.on_mount=[]}),r.forEach(j)}function Y(e,t){const n=e.$$;n.fragment!==null&&(ae(n.after_update),C(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function me(e,t){e.$$.dirty[0]===-1&&(b.push(e),fe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ee(e,t,n,o,r,s,h=null,a=[-1]){const f=H;S(e);const l=e.$$={fragment:null,ctx:[],props:s,update:L,not_equal:r,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:P(),dirty:a,skip_bound:!1,root:t.target||f.$$.root};h&&h(l.root);let d=!1;if(l.ctx=n?n(e,t.props||{},(g,_,...p)=>{const c=p.length?p[0]:_;return l.ctx&&r(l.ctx[g],l.ctx[g]=c)&&(!l.skip_bound&&l.bound[g]&&l.bound[g](c),d&&me(e,g)),_}):[],l.update(),d=!0,C(l.before_update),l.fragment=o?o(l.ctx):!1,t.target){if(t.hydrate){const g=ce(t.target);l.fragment&&l.fragment.l(g),g.forEach(V)}else l.fragment&&l.fragment.c();t.intro&&O(e.$$.fragment),X(e,t.target,t.anchor),W()}S(f)}class te{constructor(){M(this,"$$");M(this,"$$set")}$destroy(){Y(this,1),this.$destroy=L}$on(t,n){if(!q(n))return L;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!le(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const _e="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(_e);const ve="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.5%2012.5L10.5%2014.5L15.5%209.5'%20stroke='%23000000'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22%2012C22%2016.714%2022%2019.0711%2020.5355%2020.5355C19.0711%2022%2016.714%2022%2012%2022C7.28595%2022%204.92893%2022%203.46447%2020.5355C2%2019.0711%202%2016.714%202%2012C2%207.28595%202%204.92893%203.46447%203.46447C4.92893%202%207.28595%202%2012%202C16.714%202%2019.0711%202%2020.5355%203.46447C21.5093%204.43821%2021.8356%205.80655%2021.9449%208'%20stroke='%23000000'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e",ke="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%2011V17'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14%2011V17'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4%207H20'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6%207H12H18V18C18%2019.6569%2016.6569%2021%2015%2021H9C7.34315%2021%206%2019.6569%206%2018V7Z'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%205C9%203.89543%209.89543%203%2011%203H13C14.1046%203%2015%203.89543%2015%205V7H9V5Z'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";function we(e){let t,n,o=e[0].title+"",r,s,h,a,f,l,d,g;return{c(){t=w("li"),n=w("p"),r=Q(o),h=E(),a=w("button"),a.innerHTML=`<img src="${ve}" alt="Иконка галочки" class="svelte-19579fz"/>`,f=E(),l=w("button"),l.innerHTML=`<img src="${ke}" alt="Иконка удаления" class="svelte-19579fz"/>`,k(n,"class",s="list__title "+(e[0].checked?"active":"")+" svelte-19579fz"),k(a,"class","list__checked svelte-19579fz"),k(l,"class","list__delete svelte-19579fz"),k(t,"class","list svelte-19579fz")},m(_,p){K(_,t,p),m(t,n),m(n,r),m(t,h),m(t,a),m(t,f),m(t,l),d||(g=[I(a,"click",e[1]),I(l,"click",e[2])],d=!0)},p(_,[p]){p&1&&o!==(o=_[0].title+"")&&ie(r,o),p&1&&s!==(s="list__title "+(_[0].checked?"active":"")+" svelte-19579fz")&&k(n,"class",s)},i:L,o:L,d(_){_&&V(t),d=!1,C(g)}}}function ye(e,t,n){let{todo:o}=t,{toggleChecked:r}=t,{deleteTodo:s}=t;const h=()=>r(o),a=()=>s(o);return e.$$set=f=>{"todo"in f&&n(0,o=f.todo),"toggleChecked"in f&&n(3,r=f.toggleChecked),"deleteTodo"in f&&n(4,s=f.deleteTodo)},[o,h,a,r,s]}class Ce extends te{constructor(t){super(),ee(this,t,ye,we,F,{todo:0,toggleChecked:3,deleteTodo:4})}}function D(e,t,n){const o=e.slice();return o[6]=t[n],o}function U(e){let t,n;return t=new Ce({props:{toggleChecked:e[3],deleteTodo:e[4],todo:e[6]}}),{c(){pe(t.$$.fragment)},m(o,r){X(t,o,r),n=!0},p(o,r){const s={};r&1&&(s.todo=o[6]),t.$set(s)},i(o){n||(O(t.$$.fragment,o),n=!0)},o(o){A(t.$$.fragment,o),n=!1},d(o){Y(t,o)}}}function $e(e){let t,n,o,r,s,h,a,f,l,d,g,_,p=R(e[0]),c=[];for(let i=0;i<p.length;i+=1)c[i]=U(D(e,p,i));const ne=i=>A(c[i],1,1,()=>{c[i]=null});return{c(){t=w("main"),n=w("div"),o=w("div"),r=w("form"),s=w("input"),h=E(),a=w("button"),a.textContent="Добавить",f=E(),l=w("ul");for(let i=0;i<c.length;i+=1)c[i].c();k(s,"class","todo__input svelte-bpn93z"),k(s,"placeholder","Новая задача"),k(a,"class","todo__button svelte-bpn93z"),k(r,"class","todo__form svelte-bpn93z"),k(l,"class","todo__lists"),k(o,"class","todo__container svelte-bpn93z"),k(n,"class","todo svelte-bpn93z")},m(i,v){K(i,t,v),m(t,n),m(n,o),m(o,r),m(r,s),m(r,h),m(r,a),m(o,f),m(o,l);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(l,null);d=!0,g||(_=[I(s,"change",e[1]),I(a,"click",e[2])],g=!0)},p(i,[v]){if(v&25){p=R(i[0]);let u;for(u=0;u<p.length;u+=1){const B=D(i,p,u);c[u]?(c[u].p(B,v),O(c[u],1)):(c[u]=U(B),c[u].c(),O(c[u],1),c[u].m(l,null))}for(he(),u=p.length;u<c.length;u+=1)ne(u);ge()}},i(i){if(!d){for(let v=0;v<p.length;v+=1)O(c[v]);d=!0}},o(i){c=c.filter(Boolean);for(let v=0;v<c.length;v+=1)A(c[v]);d=!1},d(i){i&&V(t),se(c,i),g=!1,C(_)}}}function be(e,t,n){let o=JSON.parse(localStorage.getItem("todos"))||[],r="";return[o,l=>{r=l.target.value},l=>{l.preventDefault(),n(0,o=[...o,{title:r,checked:!1}]),localStorage.setItem("todos",JSON.stringify(o))},l=>{n(0,o=o.map(d=>d===l?{...d,checked:!d.checked}:d)),localStorage.setItem("todos",JSON.stringify(o))},l=>{n(0,o=o.filter(d=>d!==l)),localStorage.setItem("todos",JSON.stringify(o))}]}class xe extends te{constructor(t){super(),ee(this,t,be,$e,F,{})}}new xe({target:document.getElementById("app")});
