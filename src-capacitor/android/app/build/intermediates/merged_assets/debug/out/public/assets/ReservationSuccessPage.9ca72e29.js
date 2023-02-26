import{_ as p,H as h,j as l,k as x,d as e,J as t,aY as D,m as f,Q as d,aW as n,L as c,I as o,aq as i,aJ as m,R as u}from"./index.53dd0972.js";import{Q as v}from"./QImg.bce55135.js";import{a as r,Q as _}from"./QItem.4d676661.js";import{Q as b}from"./QList.3ee63876.js";import{d as g}from"./date.c6fc7324.js";import{C as Q}from"./Constants.d9930072.js";const q={name:"ReservationSuccessPage",setup(){return{Constants:Q,date:g}},created(){this.$store.dispatch("MainModule/getAllEvents")},computed:{event(){return this.$store.getters["MainModule/eventById"](Number(this.$route.params.id))}}},S={class:"absolute-top-left bg-transparent"},B=f("div",{class:"text-h6 q-pl-md q-pr-md text-center"},"Rezervasyon ba\u015Far\u0131yla olu\u015Fturuldu.",-1),E=f("div",{class:"text-subtitle2 text-grey-8 q-pl-md q-pr-md text-center"},"Rezervasyon ba\u015Far\u0131yla olu\u015Fturuldu.",-1),M=f("div",{class:"text-h6 text-dark q-pb-lg"},"Etkinlik Bilgileri",-1);function y(C,I,R,s,T,a){const k=h("router-link");return l(),x("div",null,[e(v,{src:s.Constants.FILE_URL+"/eventBanners/"+a.event.Banner,class:"q-card--bordered",height:"250px"},{default:t(()=>[f("div",S,[e(k,{to:{name:"events"}},{default:t(()=>[e(d,{name:"arrow_back",size:"md",color:"white",class:"cursor-pointer"})]),_:1})])]),_:1},8,["src"]),e(D,{class:"no-shadow"},{default:t(()=>[e(n,{class:"q-pb-none"},{default:t(()=>[B]),_:1}),e(n,null,{default:t(()=>[e(v,{src:"/public/icons/success.png",fit:"contain",height:"150px"})]),_:1}),e(n,{class:"q-pt-none"},{default:t(()=>[E]),_:1}),e(n,{class:"text-dark bg-white"},{default:t(()=>[M,e(b,null,{default:t(()=>[c((l(),o(_,{clickable:""},{default:t(()=>[e(r,{avatar:""},{default:t(()=>[e(d,{color:"dark",name:"phone"})]),_:1}),e(r,{class:"text-dark"},{default:t(()=>[i(m(a.event.EventName),1)]),_:1})]),_:1})),[[u]]),c((l(),o(_,{clickable:""},{default:t(()=>[e(r,{avatar:""},{default:t(()=>[e(d,{color:"dark",name:"description"})]),_:1}),e(r,{class:"text-dark"},{default:t(()=>[i(m(a.event.EventDescription),1)]),_:1})]),_:1})),[[u]]),c((l(),o(_,{clickable:""},{default:t(()=>[e(r,{avatar:""},{default:t(()=>[e(d,{color:"dark",name:"event"})]),_:1}),e(r,{class:"text-dark"},{default:t(()=>[i(m(s.date.formatDate(a.event.StartDateTime,"D")+" - "+s.date.formatDate(a.event.EndDateTime,"D")+" "+s.date.formatDate(a.event.StartDateTime,"MMMM")+", "+s.date.formatDate(a.event.StartDateTime,"YYYY")),1)]),_:1})]),_:1})),[[u]]),c((l(),o(_,{clickable:""},{default:t(()=>[e(r,{avatar:""},{default:t(()=>[e(d,{color:"dark",name:"schedule"})]),_:1}),e(r,{class:"text-dark"},{default:t(()=>[i(m(s.date.formatDate(a.event.StartDateTime,"HH:mm")+" - "+s.date.formatDate(a.event.EndDateTime,"HH:mm")),1)]),_:1})]),_:1})),[[u]])]),_:1})]),_:1})]),_:1})])}var V=p(q,[["render",y]]);export{V as default};
