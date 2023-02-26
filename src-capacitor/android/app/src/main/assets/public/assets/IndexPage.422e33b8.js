import{u as H,c as d,h as c,z as te,r as k,aD as ne,w as x,aE as ae,o as U,E as z,aF as R,g as O,a5 as oe,a8 as le,aG as re,aH as se,am as P,G as ie,_ as B,j as f,k as y,d as b,J as E,F as j,aI as G,I as ue,m as $,aJ as J,aK as ce,H as A}from"./index.4a0b1d79.js";import{u as de,a as ve,b as me,c as ge}from"./use-panel.89ec52db.js";import{C as K}from"./Constants.a9044827.js";import{Q as _e}from"./QImg.32d7a5f1.js";import"./selection.d4ea5d93.js";var fe=H({name:"QCarouselSlide",props:{...de,imgSrc:String},setup(e,{slots:n}){const s=d(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>c("div",{class:"q-carousel__slide",style:s.value},te(n.default))}});let p=0;const he={fullscreen:Boolean,noRouteFullscreenExit:Boolean},pe=["update:fullscreen","fullscreen"];function xe(){const e=O(),{props:n,emit:s,proxy:t}=e;let a,i,o;const l=k(!1);ne(e)===!0&&x(()=>t.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&v()}),x(()=>n.fullscreen,m=>{l.value!==m&&g()}),x(l,m=>{s("update:fullscreen",m),s("fullscreen",m)});function g(){l.value===!0?v():_()}function _(){l.value!==!0&&(l.value=!0,o=t.$el.parentNode,o.replaceChild(i,t.$el),document.body.appendChild(t.$el),p++,p===1&&document.body.classList.add("q-body--fullscreen-mixin"),a={handler:v},R.add(a))}function v(){l.value===!0&&(a!==void 0&&(R.remove(a),a=void 0),o.replaceChild(t.$el,i),l.value=!1,p=Math.max(0,p-1),p===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),t.$el.scrollIntoView!==void 0&&setTimeout(()=>{t.$el.scrollIntoView()})))}return ae(()=>{i=document.createElement("span")}),U(()=>{n.fullscreen===!0&&_()}),z(v),Object.assign(t,{toggleFullscreen:g,setFullscreen:_,exitFullscreen:v}),{inFullscreen:l,toggleFullscreen:g}}const ye=["top","right","bottom","left"],Ce=["regular","flat","outline","push","unelevated"];var be=H({name:"QCarousel",props:{...oe,...ve,...he,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Ce.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>ye.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...pe,...me],setup(e,{slots:n}){const{proxy:{$q:s}}=O(),t=le(e,s);let a=null,i;const{updatePanelsList:o,getPanelContent:l,panelDirectives:g,goToPanel:_,previousPanel:v,nextPanel:m,getEnabledPanels:W,panelIndex:C}=ge(),{inFullscreen:F}=xe(),X=d(()=>F.value!==!0&&e.height!==void 0?{height:e.height}:{}),q=d(()=>e.vertical===!0?"vertical":"horizontal"),Y=d(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(F.value===!0?" fullscreen":"")+(t.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${q.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${N.value}`:"")),M=d(()=>{const r=[e.prevIcon||s.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||s.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&s.lang.rtl===!0?r.reverse():r}),T=d(()=>e.navigationIcon||s.iconSet.carousel.navigationIcon),Z=d(()=>e.navigationActiveIcon||T.value),N=d(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),I=d(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));x(()=>e.modelValue,()=>{e.autoplay&&S()}),x(()=>e.autoplay,r=>{r?S():a!==null&&(clearTimeout(a),a=null)});function S(){const r=se(e.autoplay)===!0?Math.abs(e.autoplay):5e3;a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,r>=0?m():v()},r)}U(()=>{e.autoplay&&S()}),z(()=>{a!==null&&clearTimeout(a)});function L(r,h){return c("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${r} q-carousel__navigation--${N.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[c("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},W().map(h))])}function ee(){const r=[];if(e.navigation===!0){const h=n["navigation-icon"]!==void 0?n["navigation-icon"]:u=>c(P,{key:"nav"+u.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${u.active===!0?"":"in"}active`,...u.btnProps,onClick:u.onClick}),w=i-1;r.push(L("buttons",(u,V)=>{const D=u.props.name,Q=C.value===V;return h({index:V,maxIndex:w,name:D,active:Q,btnProps:{icon:Q===!0?Z.value:T.value,size:"sm",...I.value},onClick:()=>{_(D)}})}))}else if(e.thumbnails===!0){const h=e.controlColor!==void 0?` text-${e.controlColor}`:"";r.push(L("thumbnails",w=>{const u=w.props;return c("img",{key:"tmb#"+u.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${u.name===e.modelValue?"":"in"}active`+h,src:u.imgSrc||u["img-src"],onClick:()=>{_(u.name)}})}))}return e.arrows===!0&&C.value>=0&&((e.infinite===!0||C.value>0)&&r.push(c("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${q.value} absolute flex flex-center`},[c(P,{icon:M.value[0],...I.value,onClick:v})])),(e.infinite===!0||C.value<i-1)&&r.push(c("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${q.value} absolute flex flex-center`},[c(P,{icon:M.value[1],...I.value,onClick:m})]))),ie(n.control,r)}return()=>(i=o(n),c("div",{class:Y.value,style:X.value},[re("div",{class:"q-carousel__slides-container"},l(),"sl-cont",e.swipeable,()=>g.value)].concat(ee())))}});const $e={name:"CarouselEvents",setup(){return{slide:k(1),autoplay:k(2500),Constants:K}},mounted(){this.$store.dispatch("MainModule/getAllSlides")},computed:{slides(){return this.$store.getters["MainModule/sliders"]}}},qe={class:"q-pa-xs"},Ie={class:"absolute-top text-center"},Se={class:"text-h6 text-white text-shadow"};function we(e,n,s,t,a,i){return f(),y("div",qe,[b(be,{animated:"",modelValue:t.slide,"onUpdate:modelValue":n[0]||(n[0]=o=>t.slide=o),infinite:"",navigation:"",autoplay:t.autoplay,swipeable:"","transition-prev":"slide-right","transition-next":"slide-left",onMouseenter:n[1]||(n[1]=o=>t.autoplay=!1),onMouseleave:n[2]||(n[2]=o=>t.autoplay=!0),style:{"border-radius":"10px"},height:"220px","transition-duration":"500"},{default:E(()=>[(f(!0),y(j,null,G(i.slides,(o,l)=>(f(),ue(fe,{name:l,"img-src":t.Constants.FILE_URL+"/sliders/"+o.SliderImage},{default:E(()=>[$("div",Ie,[$("div",Se,J(o.SliderName),1)])]),_:2},1032,["name","img-src"]))),256))]),_:1},8,["modelValue","autoplay"])])}var Pe=B($e,[["render",we],["__scopeId","data-v-b05560ba"]]);const ke={name:"EventCategory",props:["eventCategories"],setup(){return{Constants:K}},methods:{onSubmit(e){localStorage.setItem("itemId",e.id),this.$router.push({name:"places"})}}},Ee={class:"absolute-bottom-left text-h5 text-center q-pa-xs text-shadow bg-transparent"};function Be(e,n,s,t,a,i){return f(!0),y(j,null,G(s.eventCategories,(o,l)=>(f(),y("div",{key:l},[b(_e,{class:"q-mt-sm",src:t.Constants.FILE_URL+"/restTypeBanners/"+o.Banner,"spinner-color":"white",style:{height:"120px","min-width":"100%","border-radius":"10px"},onClick:g=>i.onSubmit(o)},{default:E(()=>[$("div",Ee,J(o.RestName),1)]),_:2},1032,["src","onClick"])]))),128)}var Fe=B(ke,[["render",Be],["__scopeId","data-v-9292d816"]]);const Me=ce({name:"IndexPage",setup(){return{}},components:{CarouselEvents:Pe,EventCategory:Fe},mounted(){this.$store.dispatch("MainModule/getRestaurantType")},computed:{eventCategories(){return this.$store.getters["MainModule/restaurantTypes"]}}}),Te={class:"q-pa-xs q-pt-sm"},Ne={class:"q-pa-md q-pt-md-md"};function Le(e,n,s,t,a,i){const o=A("CarouselEvents"),l=A("EventCategory");return f(),y("div",Te,[b(o),$("div",Ne,[b(l,{"event-categories":e.eventCategories},null,8,["event-categories"])])])}var He=B(Me,[["render",Le]]);export{He as default};