import{u as je,b3 as Ue,b4 as mt,b5 as St,b6 as gt,a5 as Lt,b7 as Rt,a8 as Et,b8 as Ht,c as S,aG as Tt,h as V,Q as Re,b9 as Pt,R as Dt,g as We,M as ue,Y as Nt,r as O,w as ge,ba as $t,aE as Kt,W as Qt,X as jt,E as ht,as as Y,bb as Ut,bc as Wt,bd as Xt,be as Gt,au as $e,P as qe,bf as st,N as Yt,ao as Se,O as Jt,bg as Zt,bh as ct,G as el,bi as tl,_ as ll,H as ul,j as nl,I as ol,J as al,m as Be,d as Le,am as il}from"./index.53dd0972.js";import{a as rl,Q as sl}from"./QItem.4d676661.js";import{a as cl,b as dl,H as fl,Q as vl}from"./HeaderLayout.6b7d2168.js";import{r as Qe}from"./rtl.ecfcc774.js";import{u as ml}from"./use-quasar.189105b0.js";import"./QImg.bce55135.js";import"./QList.3ee63876.js";import"./ClosePopup.6cdb6cac.js";import"./selection.bea15dc0.js";var Sl=je({name:"QField",inheritAttrs:!1,props:Ue,emits:mt,setup(){return St(gt())}});const gl={xs:8,sm:10,md:14,lg:20,xl:24};var hl=je({name:"QChip",props:{...Lt,...Rt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:r,emit:i}){const{proxy:{$q:f}}=We(),A=Et(e,f),a=Ht(e,gl),z=S(()=>e.selected===!0||e.icon!==void 0),g=S(()=>e.selected===!0?e.iconSelected||f.iconSet.chip.selected:e.icon),y=S(()=>e.iconRemove||f.iconSet.chip.remove),I=S(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=S(()=>{const w=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(w?` text-${w} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(I.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(A.value===!0?" q-chip--dark q-dark":"")}),k=S(()=>{const w=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},K={...w,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||f.lang.label.remove};return{chip:w,remove:K}});function _(w){w.keyCode===13&&b(w)}function b(w){e.disable||(i("update:selected",!e.selected),i("click",w))}function H(w){(w.keyCode===void 0||w.keyCode===13)&&(ue(w),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function B(){const w=[];I.value===!0&&w.push(V("div",{class:"q-focus-helper"})),z.value===!0&&w.push(V(Re,{class:"q-chip__icon q-chip__icon--left",name:g.value}));const K=e.label!==void 0?[V("div",{class:"ellipsis"},[e.label])]:void 0;return w.push(V("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Pt(r.default,K))),e.iconRight&&w.push(V(Re,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&w.push(V(Re,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:y.value,...k.value.remove,onClick:H,onKeyup:H})),w}return()=>{if(e.modelValue===!1)return;const w={class:c.value,style:a.value};return I.value===!0&&Object.assign(w,k.value.chip,{onClick:b,onKeyup:_}),Tt("div",w,B(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Dt,e.ripple]])}}});const Q=1e3,bl=["start","center","end","start-force","center-force","end-force"],bt=Array.prototype.filter,yl=window.getComputedStyle(document.body).overflowAnchor===void 0?Nt:function(e,r){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const i=e.children||[];bt.call(i,A=>A.dataset&&A.dataset.qVsAnchor!==void 0).forEach(A=>{delete A.dataset.qVsAnchor});const f=i[r];f&&f.dataset&&(f.dataset.qVsAnchor="")}))};function he(e,r){return e+r}function Ke(e,r,i,f,A,a,z,g){const y=e===window?document.scrollingElement||document.documentElement:e,I=A===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-z-g,scrollMaxSize:0,offsetStart:-z,offsetEnd:-g};if(A===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=y.scrollLeft,c.scrollViewSize+=y.clientWidth),c.scrollMaxSize=y.scrollWidth,a===!0&&(c.scrollStart=(Qe===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=y.scrollTop,c.scrollViewSize+=y.clientHeight),c.scrollMaxSize=y.scrollHeight),i!==null)for(let k=i.previousElementSibling;k!==null;k=k.previousElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=k[I]);if(f!==null)for(let k=f.nextElementSibling;k!==null;k=k.nextElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=k[I]);if(r!==e){const k=y.getBoundingClientRect(),_=r.getBoundingClientRect();A===!0?(c.offsetStart+=_.left-k.left,c.offsetEnd-=_.width):(c.offsetStart+=_.top-k.top,c.offsetEnd-=_.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function dt(e,r,i,f){r==="end"&&(r=(e===window?document.body:e)[i===!0?"scrollWidth":"scrollHeight"]),e===window?i===!0?(f===!0&&(r=(Qe===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-r),window.scrollTo(r,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r):i===!0?(f===!0&&(r=(Qe===!0?e.scrollWidth-e.offsetWidth:0)-r),e.scrollLeft=r):e.scrollTop=r}function _e(e,r,i,f){if(i>=f)return 0;const A=r.length,a=Math.floor(i/Q),z=Math.floor((f-1)/Q)+1;let g=e.slice(a,z).reduce(he,0);return i%Q!==0&&(g-=r.slice(a*Q,i).reduce(he,0)),f%Q!==0&&f!==A&&(g-=r.slice(f,z*Q).reduce(he,0)),g}const wl={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Vl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...wl};function Cl({virtualScrollLength:e,getVirtualScrollTarget:r,getVirtualScrollEl:i,virtualScrollItemSizeComputed:f}){const A=We(),{props:a,emit:z,proxy:g}=A,{$q:y}=g;let I,c,k,_=[],b;const H=O(0),B=O(0),w=O({}),K=O(null),P=O(null),W=O(null),L=O({from:0,to:0}),F=S(()=>a.tableColspan!==void 0?a.tableColspan:100);f===void 0&&(f=S(()=>a.virtualScrollItemSize));const X=S(()=>f.value+";"+a.virtualScrollHorizontal),be=S(()=>X.value+";"+a.virtualScrollSliceRatioBefore+";"+a.virtualScrollSliceRatioAfter);ge(be,()=>{G()}),ge(X,ne);function ne(){Z(c,!0)}function ye(n){Z(n===void 0?c:n)}function J(n,s){const v=r();if(v==null||v.nodeType===8)return;const q=Ke(v,i(),K.value,P.value,a.virtualScrollHorizontal,y.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd);k!==q.scrollViewSize&&G(q.scrollViewSize),oe(v,q,Math.min(e.value-1,Math.max(0,parseInt(n,10)||0)),0,bl.indexOf(s)>-1?s:c>-1&&n>c?"end":"start")}function j(){const n=r();if(n==null||n.nodeType===8)return;const s=Ke(n,i(),K.value,P.value,a.virtualScrollHorizontal,y.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd),v=e.value-1,q=s.scrollMaxSize-s.offsetStart-s.offsetEnd-B.value;if(I===s.scrollStart)return;if(s.scrollMaxSize<=0){oe(n,s,0,0);return}k!==s.scrollViewSize&&G(s.scrollViewSize),we(L.value.from);const R=Math.floor(s.scrollMaxSize-Math.max(s.scrollViewSize,s.offsetEnd)-Math.min(b[v],s.scrollViewSize/2));if(R>0&&Math.ceil(s.scrollStart)>=R){oe(n,s,v,s.scrollMaxSize-s.offsetEnd-_.reduce(he,0));return}let C=0,m=s.scrollStart-s.offsetStart,E=m;if(m<=q&&m+s.scrollViewSize>=H.value)m-=H.value,C=L.value.from,E=m;else for(let h=0;m>=_[h]&&C<v;h++)m-=_[h],C+=Q;for(;m>0&&C<v;)m-=b[C],m>-s.scrollViewSize?(C++,E=m):E=b[C]+m;oe(n,s,C,E)}function oe(n,s,v,q,R){const C=typeof R=="string"&&R.indexOf("-force")>-1,m=C===!0?R.replace("-force",""):R,E=m!==void 0?m:"start";let h=Math.max(0,v-w.value[E]),D=h+w.value.total;D>e.value&&(D=e.value,h=Math.max(0,D-w.value.total)),I=s.scrollStart;const ie=h!==L.value.from||D!==L.value.to;if(ie===!1&&m===void 0){Ce(v);return}const{activeElement:ke}=document,U=W.value;ie===!0&&U!==null&&U!==ke&&U.contains(ke)===!0&&(U.addEventListener("focusout",Ve),setTimeout(()=>{U!==null&&U.removeEventListener("focusout",Ve)})),yl(U,v-h);const ze=m!==void 0?b.slice(h,v).reduce(he,0):0;if(ie===!0){const ee=D>=L.value.from&&h<=L.value.to?L.value.to:D;L.value={from:h,to:ee},H.value=_e(_,b,0,h),B.value=_e(_,b,D,e.value),requestAnimationFrame(()=>{L.value.to!==D&&I===s.scrollStart&&(L.value={from:L.value.from,to:D},B.value=_e(_,b,D,e.value))})}requestAnimationFrame(()=>{if(I!==s.scrollStart)return;ie===!0&&we(h);const ee=b.slice(h,v).reduce(he,0),re=ee+s.offsetStart+H.value,Ie=re+b[v];let pe=re+q;if(m!==void 0){const Ee=ee-ze,N=s.scrollStart+Ee;pe=C!==!0&&N<re&&Ie<N+s.scrollViewSize?N:m==="end"?Ie-s.scrollViewSize:re-(m==="start"?0:Math.round((s.scrollViewSize-b[v])/2))}I=pe,dt(n,pe,a.virtualScrollHorizontal,y.lang.rtl),Ce(v)})}function we(n){const s=W.value;if(s){const v=bt.call(s.children,h=>h.classList&&h.classList.contains("q-virtual-scroll--skip")===!1),q=v.length,R=a.virtualScrollHorizontal===!0?h=>h.getBoundingClientRect().width:h=>h.offsetHeight;let C=n,m,E;for(let h=0;h<q;){for(m=R(v[h]),h++;h<q&&v[h].classList.contains("q-virtual-scroll--with-prev")===!0;)m+=R(v[h]),h++;E=m-b[C],E!==0&&(b[C]+=E,_[Math.floor(C/Q)]+=E),C++}}}function Ve(){W.value!==null&&W.value!==void 0&&W.value.focus()}function Z(n,s){const v=1*f.value;(s===!0||Array.isArray(b)===!1)&&(b=[]);const q=b.length;b.length=e.value;for(let C=e.value-1;C>=q;C--)b[C]=v;const R=Math.floor((e.value-1)/Q);_=[];for(let C=0;C<=R;C++){let m=0;const E=Math.min((C+1)*Q,e.value);for(let h=C*Q;h<E;h++)m+=b[h];_.push(m)}c=-1,I=void 0,H.value=_e(_,b,0,L.value.from),B.value=_e(_,b,L.value.to,e.value),n>=0?(we(L.value.from),Y(()=>{J(n)})):ae()}function G(n){if(n===void 0&&typeof window!="undefined"){const m=r();m!=null&&m.nodeType!==8&&(n=Ke(m,i(),K.value,P.value,a.virtualScrollHorizontal,y.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd).scrollViewSize)}k=n;const s=parseFloat(a.virtualScrollSliceRatioBefore)||0,v=parseFloat(a.virtualScrollSliceRatioAfter)||0,q=1+s+v,R=n===void 0||n<=0?1:Math.ceil(n/f.value),C=Math.max(1,R,Math.ceil((a.virtualScrollSliceSize>0?a.virtualScrollSliceSize:10)/q));w.value={total:Math.ceil(C*q),start:Math.ceil(C*s),center:Math.ceil(C*(.5+s)),end:Math.ceil(C*(1+s)),view:R}}function Ae(n,s){const v=a.virtualScrollHorizontal===!0?"width":"height",q={["--q-virtual-scroll-item-"+v]:f.value+"px"};return[n==="tbody"?V(n,{class:"q-virtual-scroll__padding",key:"before",ref:K},[V("tr",[V("td",{style:{[v]:`${H.value}px`,...q},colspan:F.value})])]):V(n,{class:"q-virtual-scroll__padding",key:"before",ref:K,style:{[v]:`${H.value}px`,...q}}),V(n,{class:"q-virtual-scroll__content",key:"content",ref:W,tabindex:-1},s.flat()),n==="tbody"?V(n,{class:"q-virtual-scroll__padding",key:"after",ref:P},[V("tr",[V("td",{style:{[v]:`${B.value}px`,...q},colspan:F.value})])]):V(n,{class:"q-virtual-scroll__padding",key:"after",ref:P,style:{[v]:`${B.value}px`,...q}})]}function Ce(n){c!==n&&(a.onVirtualScroll!==void 0&&z("virtualScroll",{index:n,from:L.value.from,to:L.value.to-1,direction:n<c?"decrease":"increase",ref:g}),c=n)}G();const ae=$t(j,y.platform.is.ios===!0?120:35);Kt(()=>{G()});let o=!1;return Qt(()=>{o=!0}),jt(()=>{if(o!==!0)return;const n=r();I!==void 0&&n!==void 0&&n!==null&&n.nodeType!==8?dt(n,I,a.virtualScrollHorizontal,y.lang.rtl):J(c)}),ht(()=>{ae.cancel()}),Object.assign(g,{scrollTo:J,reset:ne,refresh:ye}),{virtualScrollSliceRange:L,virtualScrollSliceSizeComputed:w,setVirtualScrollSize:G,onVirtualScrollEvt:ae,localResetVirtualScroll:Z,padVirtualScroll:Ae,scrollTo:J,reset:ne,refresh:ye}}const ft=e=>["add","add-unique","toggle"].includes(e),kl=".*+?^${}()|[]\\",pl=Object.keys(Ue);var vt=je({name:"QSelect",inheritAttrs:!1,props:{...Vl,...Ut,...Ue,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:ft},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...mt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:r,emit:i}){const{proxy:f}=We(),{$q:A}=f,a=O(!1),z=O(!1),g=O(-1),y=O(""),I=O(!1),c=O(!1);let k=null,_,b,H,B=null,w,K,P,W;const L=O(null),F=O(null),X=O(null),be=O(null),ne=O(null),ye=Wt(e),J=tl(nt),j=S(()=>Array.isArray(e.options)?e.options.length:0),oe=S(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:we,virtualScrollSliceSizeComputed:Ve,localResetVirtualScroll:Z,padVirtualScroll:G,onVirtualScrollEvt:Ae,scrollTo:Ce,setVirtualScrollSize:ae}=Cl({virtualScrollLength:j,getVirtualScrollTarget:Ct,getVirtualScrollEl:lt,virtualScrollItemSizeComputed:oe}),o=gt(),n=S(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const l=e.mapOptions===!0&&_!==void 0?_:[],d=u.map(x=>Vt(x,l));return e.modelValue===null&&t===!0?d.filter(x=>x!==null):d}return u}),s=S(()=>{const t={};return pl.forEach(u=>{const l=e[u];l!==void 0&&(t[u]=l)}),t}),v=S(()=>e.optionsDark===null?o.isDark.value:e.optionsDark),q=S(()=>ct(n.value)),R=S(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||n.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),C=S(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),m=S(()=>j.value===0),E=S(()=>n.value.map(t=>$.value(t)).join(", ")),h=S(()=>e.displayValue!==void 0?e.displayValue:E.value),D=S(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ie=S(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||n.value.some(D.value))),ke=S(()=>o.focused.value===!0?e.tabindex:-1),U=S(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":a.value===!0?"true":"false","aria-controls":`${o.targetUid.value}_lb`};return g.value>=0&&(t["aria-activedescendant"]=`${o.targetUid.value}_${g.value}`),t}),ze=S(()=>({id:`${o.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),ee=S(()=>n.value.map((t,u)=>({index:u,opt:t,html:D.value(t),selected:!0,removeAtIndex:wt,toggleOption:te,tabindex:ke.value}))),re=S(()=>{if(j.value===0)return[];const{from:t,to:u}=we.value;return e.options.slice(t,u).map((l,d)=>{const x=se.value(l)===!0,p=t+d,M={clickable:!0,active:!1,activeClass:Ee.value,manualFocus:!0,focused:!1,disable:x,tabindex:-1,dense:e.optionsDense,dark:v.value,role:"option",id:`${o.targetUid.value}_${p}`,onClick:()=>{te(l)}};return x!==!0&&(Pe(l)===!0&&(M.active=!0),g.value===p&&(M.focused=!0),M["aria-selected"]=M.active===!0?"true":"false",A.platform.is.desktop===!0&&(M.onMousemove=()=>{a.value===!0&&ce(p)})),{index:p,opt:l,html:D.value(l),label:$.value(l),selected:M.active,focused:M.focused,toggleOption:te,setOptionIndex:ce,itemProps:M}})}),Ie=S(()=>e.dropdownIcon!==void 0?e.dropdownIcon:A.iconSet.arrow.dropdown),pe=S(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ee=S(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),N=S(()=>Te(e.optionValue,"value")),$=S(()=>Te(e.optionLabel,"label")),se=S(()=>Te(e.optionDisable,"disable")),Me=S(()=>n.value.map(t=>N.value(t))),yt=S(()=>{const t={onInput:nt,onChange:J,onKeydown:tt,onKeyup:Ze,onKeypress:et,onFocus:Ye,onClick(u){b===!0&&Se(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=J,t});ge(n,t=>{_=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&o.innerLoading.value!==!0&&(z.value!==!0&&a.value!==!0||q.value!==!0)&&(H!==!0&&me(),(z.value===!0||a.value===!0)&&de(""))},{immediate:!0}),ge(()=>e.fillInput,me),ge(a,De),ge(j,Bt);function Xe(t){return e.emitValue===!0?N.value(t):t}function He(t){if(t>-1&&t<n.value.length)if(e.multiple===!0){const u=e.modelValue.slice();i("remove",{index:t,value:u.splice(t,1)[0]}),i("update:modelValue",u)}else i("update:modelValue",null)}function wt(t){He(t),o.focus()}function Ge(t,u){const l=Xe(t);if(e.multiple!==!0){e.fillInput===!0&&xe($.value(t),!0,!0),i("update:modelValue",l);return}if(n.value.length===0){i("add",{index:0,value:l}),i("update:modelValue",e.multiple===!0?[l]:l);return}if(u===!0&&Pe(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const d=e.modelValue.slice();i("add",{index:d.length,value:l}),d.push(l),i("update:modelValue",d)}function te(t,u){if(o.editable.value!==!0||t===void 0||se.value(t)===!0)return;const l=N.value(t);if(e.multiple!==!0){u!==!0&&(xe(e.fillInput===!0?$.value(t):"",!0,!0),le()),F.value!==null&&F.value.focus(),(n.value.length===0||qe(N.value(n.value[0]),l)!==!0)&&i("update:modelValue",e.emitValue===!0?l:t);return}if((b!==!0||I.value===!0)&&o.focus(),Ye(),n.value.length===0){const p=e.emitValue===!0?l:t;i("add",{index:0,value:p}),i("update:modelValue",e.multiple===!0?[p]:p);return}const d=e.modelValue.slice(),x=Me.value.findIndex(p=>qe(p,l));if(x>-1)i("remove",{index:x,value:d.splice(x,1)[0]});else{if(e.maxValues!==void 0&&d.length>=e.maxValues)return;const p=e.emitValue===!0?l:t;i("add",{index:d.length,value:p}),d.push(p)}i("update:modelValue",d)}function ce(t){if(A.platform.is.desktop!==!0)return;const u=t>-1&&t<j.value?t:-1;g.value!==u&&(g.value=u)}function Oe(t=1,u){if(a.value===!0){let l=g.value;do l=st(l+t,-1,j.value-1);while(l!==-1&&l!==g.value&&se.value(e.options[l])===!0);g.value!==l&&(ce(l),Ce(l),u!==!0&&e.useInput===!0&&e.fillInput===!0&&Fe(l>=0?$.value(e.options[l]):w))}}function Vt(t,u){const l=d=>qe(N.value(d),t);return e.options.find(l)||u.find(l)||t}function Te(t,u){const l=t!==void 0?t:u;return typeof l=="function"?l:d=>d!==null&&typeof d=="object"&&l in d?d[l]:d}function Pe(t){const u=N.value(t);return Me.value.find(l=>qe(l,u))!==void 0}function Ye(t){e.useInput===!0&&F.value!==null&&(t===void 0||F.value===t.target&&t.target.value===E.value)&&F.value.select()}function Je(t){Yt(t,27)===!0&&a.value===!0&&(Se(t),le(),me()),i("keyup",t)}function Ze(t){const{value:u}=t.target;if(t.keyCode!==void 0){Je(t);return}if(t.target.value="",k!==null&&(clearTimeout(k),k=null),me(),typeof u=="string"&&u.length>0){const l=u.toLocaleLowerCase(),d=p=>{const M=e.options.find(T=>p.value(T).toLocaleLowerCase()===l);return M===void 0?!1:(n.value.indexOf(M)===-1?te(M):le(),!0)},x=p=>{d(N)!==!0&&(d($)===!0||p===!0||de(u,!0,()=>x(!0)))};x()}else o.clearValue(t)}function et(t){i("keypress",t)}function tt(t){if(i("keydown",t),Jt(t)===!0)return;const u=y.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),l=t.shiftKey!==!0&&e.multiple!==!0&&(g.value>-1||u===!0);if(t.keyCode===27){$e(t);return}if(t.keyCode===9&&l===!1){fe();return}if(t.target===void 0||t.target.id!==o.targetUid.value)return;if(t.keyCode===40&&o.innerLoading.value!==!0&&a.value===!1){ue(t),ve();return}if(t.keyCode===8&&e.hideSelected!==!0&&y.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?He(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&i("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof y.value!="string"||y.value.length===0)&&(ue(t),g.value=-1,Oe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&Ve.value!==void 0&&(ue(t),g.value=Math.max(-1,Math.min(j.value,g.value+(t.keyCode===33?-1:1)*Ve.value.view)),Oe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ue(t),Oe(t.keyCode===38?-1:1,e.multiple));const d=j.value;if((P===void 0||W<Date.now())&&(P=""),d>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||P.length>0)){a.value!==!0&&ve(t);const x=t.key.toLocaleLowerCase(),p=P.length===1&&P[0]===x;W=Date.now()+1500,p===!1&&(ue(t),P+=x);const M=new RegExp("^"+P.split("").map(Ne=>kl.indexOf(Ne)>-1?"\\"+Ne:Ne).join(".*"),"i");let T=g.value;if(p===!0||T<0||M.test($.value(e.options[T]))!==!0)do T=st(T+1,-1,d-1);while(T!==g.value&&(se.value(e.options[T])===!0||M.test($.value(e.options[T]))!==!0));g.value!==T&&Y(()=>{ce(T),Ce(T),T>=0&&e.useInput===!0&&e.fillInput===!0&&Fe($.value(e.options[T]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||P!=="")&&(t.keyCode!==9||l===!1))){if(t.keyCode!==9&&ue(t),g.value>-1&&g.value<d){te(e.options[g.value]);return}if(u===!0){const x=(p,M)=>{if(M){if(ft(M)!==!0)return}else M=e.newValueMode;if(p==null)return;xe("",e.multiple!==!0,!0),(M==="toggle"?te:Ge)(p,M==="add-unique"),e.multiple!==!0&&(F.value!==null&&F.value.focus(),le())};if(e.onNewValue!==void 0?i("newValue",y.value,x):x(y.value),e.multiple!==!0)return}a.value===!0?fe():o.innerLoading.value!==!0&&ve()}}function lt(){return b===!0?ne.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function Ct(){return lt()}function kt(){return e.hideSelected===!0?[]:r["selected-item"]!==void 0?ee.value.map(t=>r["selected-item"](t)).slice():r.selected!==void 0?[].concat(r.selected()):e.useChips===!0?ee.value.map((t,u)=>V(hl,{key:"option-"+u,removable:o.editable.value===!0&&se.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:ke.value,onRemove(){t.removeAtIndex(u)}},()=>V("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:$.value(t.opt)}))):[V("span",{[ie.value===!0?"innerHTML":"textContent"]:h.value})]}function ut(){if(m.value===!0)return r["no-option"]!==void 0?r["no-option"]({inputValue:y.value}):void 0;const t=r.option!==void 0?r.option:l=>V(sl,{key:l.index,...l.itemProps},()=>V(rl,()=>V(dl,()=>V("span",{[l.html===!0?"innerHTML":"textContent"]:l.label}))));let u=G("div",re.value.map(t));return r["before-options"]!==void 0&&(u=r["before-options"]().concat(u)),el(r["after-options"],u)}function pt(t,u){const l=u===!0?{...U.value,...o.splitAttrs.attributes.value}:void 0,d={ref:u===!0?F:void 0,key:"i_t",class:R.value,style:e.inputStyle,value:y.value!==void 0?y.value:"",type:"search",...l,id:u===!0?o.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...yt.value};return t!==!0&&b===!0&&(Array.isArray(d.class)===!0?d.class=[...d.class,"no-pointer-events"]:d.class+=" no-pointer-events"),V("input",d)}function nt(t){k!==null&&(clearTimeout(k),k=null),!(t&&t.target&&t.target.qComposing===!0)&&(Fe(t.target.value||""),H=!0,w=y.value,o.focused.value!==!0&&(b!==!0||I.value===!0)&&o.focus(),e.onFilter!==void 0&&(k=setTimeout(()=>{k=null,de(y.value)},e.inputDebounce)))}function Fe(t){y.value!==t&&(y.value=t,i("inputValue",t))}function xe(t,u,l){H=l!==!0,e.useInput===!0&&(Fe(t),(u===!0||l!==!0)&&(w=t),u!==!0&&de(t))}function de(t,u,l){if(e.onFilter===void 0||u!==!0&&o.focused.value!==!0)return;o.innerLoading.value===!0?i("filterAbort"):(o.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&n.value.length>0&&H!==!0&&t===$.value(n.value[0])&&(t="");const d=setTimeout(()=>{a.value===!0&&(a.value=!1)},10);B!==null&&clearTimeout(B),B=d,i("filter",t,(x,p)=>{(u===!0||o.focused.value===!0)&&B===d&&(clearTimeout(B),typeof x=="function"&&x(),c.value=!1,Y(()=>{o.innerLoading.value=!1,o.editable.value===!0&&(u===!0?a.value===!0&&le():a.value===!0?De(!0):a.value=!0),typeof p=="function"&&Y(()=>{p(f)}),typeof l=="function"&&Y(()=>{l(f)})}))},()=>{o.focused.value===!0&&B===d&&(clearTimeout(B),o.innerLoading.value=!1,c.value=!1),a.value===!0&&(a.value=!1)})}function xt(){return V(cl,{ref:X,class:C.value,style:e.popupContentStyle,modelValue:a.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&m.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:v.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:pe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ze.value,onScrollPassive:Ae,onBeforeShow:at,onBeforeHide:qt,onShow:_t},ut)}function qt(t){it(t),fe()}function _t(){ae()}function At(t){Se(t),F.value!==null&&F.value.focus(),I.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function zt(t){Se(t),Y(()=>{I.value=!1})}function It(){const t=[V(Sl,{class:`col-auto ${o.fieldClass.value}`,...s.value,for:o.targetUid.value,dark:v.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:y.value.length>0,...o.splitAttrs.listeners.value,onFocus:At,onBlur:zt},{...r,rawControl:()=>o.getControl(!0),before:void 0,after:void 0})];return a.value===!0&&t.push(V("div",{ref:ne,class:C.value+" scroll",style:e.popupContentStyle,...ze.value,onClick:$e,onScrollPassive:Ae},ut())),V(Zt,{ref:be,modelValue:z.value,position:e.useInput===!0?"top":void 0,transitionShow:K,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:at,onBeforeHide:Mt,onHide:Ot,onShow:Ft},()=>V("div",{class:"q-select__dialog"+(v.value===!0?" q-select__dialog--dark q-dark":"")+(I.value===!0?" q-select__dialog--focused":"")},t))}function Mt(t){it(t),be.value!==null&&be.value.__updateRefocusTarget(o.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),o.focused.value=!1}function Ot(t){le(),o.focused.value===!1&&i("blur",t),me()}function Ft(){const t=document.activeElement;(t===null||t.id!==o.targetUid.value)&&F.value!==null&&F.value!==t&&F.value.focus(),ae()}function fe(){z.value!==!0&&(g.value=-1,a.value===!0&&(a.value=!1),o.focused.value===!1&&(B!==null&&(clearTimeout(B),B=null),o.innerLoading.value===!0&&(i("filterAbort"),o.innerLoading.value=!1,c.value=!1)))}function ve(t){o.editable.value===!0&&(b===!0?(o.onControlFocusin(t),z.value=!0,Y(()=>{o.focus()})):o.focus(),e.onFilter!==void 0?de(y.value):(m.value!==!0||r["no-option"]!==void 0)&&(a.value=!0))}function le(){z.value=!1,fe()}function me(){e.useInput===!0&&xe(e.multiple!==!0&&e.fillInput===!0&&n.value.length>0&&$.value(n.value[0])||"",!0,!0)}function De(t){let u=-1;if(t===!0){if(n.value.length>0){const l=N.value(n.value[0]);u=e.options.findIndex(d=>qe(N.value(d),l))}Z(u)}ce(u)}function Bt(t,u){a.value===!0&&o.innerLoading.value===!1&&(Z(-1,!0),Y(()=>{a.value===!0&&o.innerLoading.value===!1&&(t>u?Z():De(!0))}))}function ot(){z.value===!1&&X.value!==null&&X.value.updatePosition()}function at(t){t!==void 0&&Se(t),i("popupShow",t),o.hasPopupOpen=!0,o.onControlFocusin(t)}function it(t){t!==void 0&&Se(t),i("popupHide",t),o.hasPopupOpen=!1,o.onControlFocusout(t)}function rt(){b=A.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?r["no-option"]!==void 0||e.onFilter!==void 0||m.value===!1:!0),K=A.platform.is.ios===!0&&b===!0&&e.useInput===!0?"fade":e.transitionShow}return Xt(rt),Gt(ot),rt(),ht(()=>{k!==null&&clearTimeout(k)}),Object.assign(f,{showPopup:ve,hidePopup:le,removeAtIndex:He,add:Ge,toggleOption:te,getOptionIndex:()=>g.value,setOptionIndex:ce,moveOptionSelection:Oe,filter:de,updateMenuPosition:ot,updateInputValue:xe,isOptionSelected:Pe,getEmittingOptionValue:Xe,isOptionDisabled:(...t)=>se.value.apply(null,t)===!0,getOptionValue:(...t)=>N.value.apply(null,t),getOptionLabel:(...t)=>$.value.apply(null,t)}),Object.assign(o,{innerValue:n,fieldClass:S(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:L,targetRef:F,hasValue:q,showPopup:ve,floatingLabel:S(()=>e.hideSelected!==!0&&q.value===!0||typeof y.value=="number"||y.value.length>0||ct(e.displayValue)),getControlChild:()=>{if(o.editable.value!==!1&&(z.value===!0||m.value!==!0||r["no-option"]!==void 0))return b===!0?It():xt();o.hasPopupOpen===!0&&(o.hasPopupOpen=!1)},controlEvents:{onFocusin(t){o.onControlFocusin(t)},onFocusout(t){o.onControlFocusout(t,()=>{me(),fe()})},onClick(t){if($e(t),b!==!0&&a.value===!0){fe(),F.value!==null&&F.value.focus();return}ve(t)}},getControl:t=>{const u=kt(),l=t===!0||z.value!==!0||b!==!0;if(e.useInput===!0)u.push(pt(t,l));else if(o.editable.value===!0){const x=l===!0?U.value:void 0;u.push(V("input",{ref:l===!0?F:void 0,key:"d_t",class:"q-select__focus-target",id:l===!0?o.targetUid.value:void 0,value:h.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...x,onKeydown:tt,onKeyup:Je,onKeypress:et})),l===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&u.push(V("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ze}))}if(ye.value!==void 0&&e.disable!==!0&&Me.value.length>0){const x=Me.value.map(p=>V("option",{value:p,selected:!0}));u.push(V("select",{class:"hidden",name:ye.value,multiple:e.multiple},x))}const d=e.useInput===!0||l!==!0?void 0:o.splitAttrs.attributes.value;return V("div",{class:"q-field__native row items-center",...d},u)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[V(Re,{class:"q-select__dropdown-icon"+(a.value===!0?" rotate-180":""),name:Ie.value})]:null}),St(o)}});const xl={name:"LocationRestaurantSelect",components:{HeaderLayout:fl},setup(){return ml(),{fourth:O(!0),modelLocation:O(null),modelRestaurant:O(null),locationOptions:["Magusa","Lefko\u015Fa","Girne","G\xFCzelyurt","Lefke"],restaurantOptions:["Lava\u015F","Cookies"]}},methods:{darkModeFunc(e){this.$q.dark.toggle()}}},ql={class:"fullscreen flex flex-center"},_l={class:"text-left",style:{"background-repeat":"no-repeat","background-image":"url('src/assets/logo/Groupbg-light.png')","min-width":"325px","min-height":"340px"}},Al={class:"q-mt-lg q-pl-lg q-pr-lg"};function zl(e,r,i,f,A,a){const z=ul("header-layout");return nl(),ol(vl,{view:"hHh lpR fFf"},{default:al(()=>[Be("div",ql,[Be("div",null,[Le(z),Be("div",_l,[Be("div",Al,[Le(vt,{color:"dark","label-color":"dark",modelValue:f.modelLocation,"onUpdate:modelValue":r[0]||(r[0]=g=>f.modelLocation=g),options:f.locationOptions,label:"B\xF6lge Se\xE7","input-style":"padding-left:5px",clearable:"","bg-color":"grey-1",dense:"",rounded:"",outlined:""},null,8,["modelValue","options"]),Le(vt,{color:"dark","label-color":"dark",modelValue:f.modelRestaurant,"onUpdate:modelValue":r[1]||(r[1]=g=>f.modelRestaurant=g),options:f.restaurantOptions,label:"Restaurant Se\xE7",class:"q-mt-lg",clearable:"","bg-color":"grey-1",dense:"",rounded:"",outlined:""},null,8,["modelValue","options"]),Le(il,{class:"full-width q-mt-lg",label:"Sonu\xE7lar\u0131 Listele","no-caps":"",color:"red",to:{name:"root"},size:"15px",rounded:""})])])])])]),_:1})}var Tl=ll(xl,[["render",zl]]);export{Tl as default};