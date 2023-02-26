import{u as _,i as z,v as p,x as C,y as M,c as i,h as b,z as S,A,g as V,B as D,C as E,w as f,r as x,D as I,E as O,G as j,_ as K,H as L,j as N,I as U,J as g,d as l}from"./index.4a0b1d79.js";import{u as G,a as J,b as W,Q as X}from"./QTabs.65219e25.js";import{Q as Y}from"./rtl.484df344.js";import{H as Z,Q as ee}from"./HeaderLayout.71fc850a.js";import"./QImg.32d7a5f1.js";import"./QItem.6c2f2bbe.js";import"./QList.9919f425.js";import"./ClosePopup.c29b38d1.js";import"./selection.d4ea5d93.js";var te=_({name:"QPageContainer",setup(a,{slots:c}){const{proxy:{$q:d}}=V(),o=z(C,p);if(o===p)return console.error("QPageContainer needs to be child of QLayout"),p;M(A,!0);const t=i(()=>{const n={};return o.header.space===!0&&(n.paddingTop=`${o.header.size}px`),o.right.space===!0&&(n[`padding${d.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(n.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(n[`padding${d.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),n});return()=>b("div",{class:"q-page-container",style:t.value},S(c.default))}}),y=_({name:"QRouteTab",props:{...D,...G},emits:J,setup(a,{slots:c,emit:d}){const o=E({useDisableForRouterLinkProps:!1}),{renderTab:t,$tabs:n}=W(a,c,d,{exact:i(()=>a.exact),...o});return f(()=>`${a.name} | ${a.exact} | ${(o.resolvedLink.value||{}).href}`,()=>{n.verifyRouteModel()}),()=>t(o.linkTag.value,o.linkAttrs.value)}}),ae=_({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(a,{slots:c,emit:d}){const{proxy:{$q:o}}=V(),t=z(C,p);if(t===p)return console.error("QFooter needs to be child of QLayout"),p;const n=x(parseInt(a.heightHint,10)),s=x(!0),h=x(I.value===!0||t.isContainer.value===!0?0:window.innerHeight),v=i(()=>a.reveal===!0||t.view.value.indexOf("F")>-1||o.platform.is.ios&&t.isContainer.value===!0),$=i(()=>t.isContainer.value===!0?t.containerHeight.value:h.value),w=i(()=>{if(a.modelValue!==!0)return 0;if(v.value===!0)return s.value===!0?n.value:0;const e=t.scroll.value.position+$.value+n.value-t.height.value;return e>0?e:0}),Q=i(()=>a.modelValue!==!0||v.value===!0&&s.value!==!0),T=i(()=>a.modelValue===!0&&Q.value===!0&&a.reveal===!0),k=i(()=>"q-footer q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-bottom"+(a.bordered===!0?" q-footer--bordered":"")+(Q.value===!0?" q-footer--hidden":"")+(a.modelValue!==!0?" q-layout--prevent-focus"+(v.value!==!0?" hidden":""):"")),H=i(()=>{const e=t.rows.value.bottom,r={};return e[0]==="l"&&t.left.space===!0&&(r[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),e[2]==="r"&&t.right.space===!0&&(r[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),r});function u(e,r){t.update("footer",e,r)}function m(e,r){e.value!==r&&(e.value=r)}function q({height:e}){m(n,e),u("size",e)}function P(){if(a.reveal!==!0)return;const{direction:e,position:r,inflectionPoint:F}=t.scroll.value;m(s,e==="up"||r-F<100||t.height.value-$.value-r-n.value<300)}function B(e){T.value===!0&&m(s,!0),d("focusin",e)}f(()=>a.modelValue,e=>{u("space",e),m(s,!0),t.animate()}),f(w,e=>{u("offset",e)}),f(()=>a.reveal,e=>{e===!1&&m(s,a.modelValue)}),f(s,e=>{t.animate(),d("reveal",e)}),f([n,t.scroll,t.height],P),f(()=>o.screen.height,e=>{t.isContainer.value!==!0&&m(h,e)});const R={};return t.instances.footer=R,a.modelValue===!0&&u("size",n.value),u("space",a.modelValue),u("offset",w.value),O(()=>{t.instances.footer===R&&(t.instances.footer=void 0,u("size",0),u("offset",0),u("space",!1))}),()=>{const e=j(c.default,[b(Y,{debounce:0,onResize:q})]);return a.elevated===!0&&e.push(b("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),b("footer",{class:k.value,style:H.value,onFocusin:B},e)}}});const oe={name:"MainLayout",components:{HeaderLayout:Z},setup(){return{mainTabs:x("home")}},mounted(){this.$q.iconSet.arrow.dropdown=""}};function ne(a,c,d,o,t,n){const s=L("header-layout"),h=L("router-view");return N(),U(ee,{view:"hHh lpR fFf"},{default:g(()=>[l(s),l(te,null,{default:g(()=>[l(h)]),_:1}),l(ae,{bordered:"",style:{"border-radius":"20px 20px 0px 0px"},class:"shadow-1"},{default:g(()=>[l(X,{modelValue:o.mainTabs,"onUpdate:modelValue":c[0]||(c[0]=v=>o.mainTabs=v),class:"text-blue-grey-9"},{default:g(()=>[l(y,{"no-caps":"",name:"home",icon:"home",to:{name:"root"},exact:"",label:"Anasayfa",class:"text-blue-grey-9"}),l(y,{"no-caps":"",name:"events",icon:"event",to:{name:"events"},exact:"",label:"Etkinlik",class:"text-blue-grey-9"}),l(y,{"no-caps":"",name:"reservations",to:{name:"Reservations"},icon:"book_online",label:"Reservasyon",class:"text-blue-grey-9"}),l(y,{"no-caps":"",name:"profile",to:{name:"Profile"},icon:"person",label:"Profil",class:"text-blue-grey-9"})]),_:1},8,["modelValue"])]),_:1})]),_:1})}var me=K(oe,[["render",ne]]);export{me as default};
