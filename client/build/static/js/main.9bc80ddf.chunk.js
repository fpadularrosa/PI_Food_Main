(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,a){e.exports={initial:"css_initial__2e0Hr",back:"css_back__3oSKK",name:"css_name__2x9jh",details:"css_details__1mUoY",container:"css_container__3IKa0",details2:"css_details2__3aKyq",landing:"css_landing__ij8sX",lanTitle:"css_lanTitle__2bFYX",imageDetail:"css_imageDetail__fmbo5",containerDetail1:"css_containerDetail1__ckM_f",image:"css_image__V2s6S",containerDetail2:"css_containerDetail2__2JHPx",leftContainer:"css_leftContainer__1jdv1",rightContainer:"css_rightContainer__2L2Nn",middleContainer:"css_middleContainer__qgJ7e",title:"css_title__SP1cZ",instr:"css_instr__1fKD-",diets:"css_diets__1lxvp"}},159:function(e,t,a){e.exports={btn:"Pagination_btn__BjLmR"}},160:function(e,t,a){e.exports={container:"Recipes_container__2BSdj"}},169:function(e,t,a){},170:function(e,t,a){},197:function(e,t,a){},21:function(e,t,a){e.exports={searchBar:"SearchBar_searchBar__17xyT",input:"SearchBar_input__cys8S",btn:"SearchBar_btn__IJmou",filters:"SearchBar_filters__2mfJ_",formBar:"SearchBar_formBar__ZHN1s",label:"SearchBar_label__3CRji",select:"SearchBar_select__17pPU"}},211:function(e,t){},212:function(e,t){},213:function(e,t){},216:function(e,t){},218:function(e,t){},228:function(e,t){},230:function(e,t){},257:function(e,t){},259:function(e,t){},260:function(e,t){},265:function(e,t){},267:function(e,t){},273:function(e,t){},275:function(e,t){},294:function(e,t){},3:function(e,t,a){e.exports={form:"CreateRecipe_form__32g96",inputs:"CreateRecipe_inputs__3S6Bt",inputStep:"CreateRecipe_inputStep__1c8CR",danger:"CreateRecipe_danger__q1Rz4",p1:"CreateRecipe_p1__1W1Nx",back:"CreateRecipe_back__wwcUZ",create:"CreateRecipe_create__2xAH0",fondo:"CreateRecipe_fondo__1Hiwd",minion:"CreateRecipe_minion__1uWYI",btn:"CreateRecipe_btn__3sFTo",label:"CreateRecipe_label__37MCr"}},306:function(e,t){},309:function(e,t){},313:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(58),r=a.n(s),i=(a(169),a(170),a(10)),l=a.n(i),o=a(19),j=a(0),d=function(){return Object(j.jsxs)("div",{className:l.a.initial,children:[Object(j.jsx)("h1",{className:l.a.lanTitle,children:"Food App"}),Object(j.jsx)(o.b,{to:"/home",children:Object(j.jsx)("button",{className:l.a.landing,children:"Ingresar"})})]})},u=a(26),b=a(155),p=a(156),h=a(157),m=a(164),O=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e;return Object(j.jsxs)("div",{className:l.a.container,children:[Object(j.jsx)("h3",{className:l.a.details,children:this.props.name}),Object(j.jsxs)("div",{className:l.a.details2,children:[Object(j.jsxs)("p",{children:["Diets: ",null===(e=this.props.diets)||void 0===e?void 0:e.map((function(e,t){return 0===t?" ".concat(e):", ".concat(e)}))]}),Object(j.jsxs)("p",{children:["Dish Types: ",this.props.dish]}),Object(j.jsxs)("p",{children:["Healthy ",this.props.healthScore]}),Object(j.jsxs)("p",{children:["Likes ",this.props.score]})]}),Object(j.jsx)("img",{className:l.a.image,src:this.props.img,alt:"imgFood_notfound"})]})}}]),a}(c.Component),f=a(11),x=a(22),_=a(42),v="GET_RECIPES",g="GET_DIETS",y="POST_RECIPE",N="GET_DETAIL",S="GET_RECIPES_BY_NAME",C="FILTER_RECIPES",w="ALPHABETICAL_SORT",E="SCORE_SORT",D="HEALTH_SORT",R="CLEAR_STORE",k=a(29),T=a.n(k);function L(){return function(){var e=Object(_.a)(Object(x.a)().mark((function e(t){var a;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("/types");case 3:null!==(a=e.sent)&&void 0!==a&&a.data&&t({type:g,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:g,payload:e.t0.toString()});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}var I=a(159),A=a.n(I),F=function(e){for(var t=e.totalrecipes,a=e.recipesPerPage,c=e.paginate,n=[],s=1;s<=Math.ceil(t/a);s++)n.push(s);return Object(j.jsx)("div",{children:null===n||void 0===n?void 0:n.map((function(e){return Object(j.jsx)("button",{className:A.a.btn,onClick:function(t){return c(e)},children:e},e)}))})},B=a(160),P=a.n(B);var H=Object(f.b)((function(e){return{recipes:e.recipes}}),(function(e){return{getRecipes:function(){e(function(){var e=Object(_.a)(Object(x.a)().mark((function e(t){var a;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("/recipes");case 3:null!==(a=e.sent)&&void 0!==a&&a.data&&t({type:v,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:v,payload:e.t0.toString()});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t,a,n=Object(c.useState)(1),s=Object(u.a)(n,2),r=s[0],i=s[1],l=9*r,d=l-9,b=null===(t=e.recipes)||void 0===t?void 0:t.slice(d,l);return Object(c.useEffect)((function(){e.getRecipes()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:P.a.container,children:null===b||void 0===b?void 0:b.map((function(e){return Object(j.jsxs)(o.b,{style:{textDecoration:"none"},to:"recipe/".concat(e.id),children:[" ",Object(j.jsx)(O,{name:e.name,diets:e.diets,img:e.image,score:e.score,summary:e.summary,steps:e.steps,dish:e.dish,healthScore:e.healthScore},e.id)," "]},e.id)}))}),Object(j.jsx)(F,{totalrecipes:null===(a=e.recipes)||void 0===a?void 0:a.length,recipesPerPage:9,paginate:function(e){i(e)}})]})})),M=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(H,{})})},q=a(7),z=Object(f.b)((function(e){return{detail:e.detail}}),(function(e){return{getDetails:function(t){e(function(e){return function(){var t=Object(_.a)(Object(x.a)().mark((function t(a){var c;return Object(x.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get("/recipes/".concat(e));case 3:null!==(c=t.sent)&&void 0!==c&&c.data&&a({type:N,payload:c.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:N,payload:t.t0.toString()});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t,a=Object(f.c)();return Object(c.useEffect)((function(){e.getDetails(e.recipeId)}),[]),Object(c.useEffect)((function(){return function(){a({type:R,payload:"detail"})}}),[]),Object(j.jsx)("div",{className:l.a.containerDetail1,children:e.detail?Object(j.jsxs)("div",{className:l.a.containerDetail2,children:[Object(j.jsx)("h2",{className:l.a.title,children:e.detail.name}),Object(j.jsxs)("div",{className:l.a.diets,children:[Object(j.jsxs)("h4",{children:["Dish Type:"," ".concat(e.detail.dish)]}),Object(j.jsxs)("h4",{children:["Diets types:",null===(t=e.detail.diets)||void 0===t?void 0:t.map((function(e,t){return 0===t?" ".concat(e.name||e):", ".concat(e.name||e)}))]}),Object(j.jsxs)("h4",{children:["Score: ",e.detail.score]}),Object(j.jsxs)("h4",{children:["Health Score: ",e.detail.healthScore]})]}),Object(j.jsxs)("div",{className:l.a.leftContainer,children:[Object(j.jsx)("h4",{children:"Steps:"}),Object(j.jsx)("p",{children:e.detail.steps})]}),Object(j.jsx)("div",{className:l.a.middleContainer,children:Object(j.jsx)("img",{className:l.a.imageDetail,src:e.detail.image,alt:"foodNotFound"})}),Object(j.jsxs)("div",{className:l.a.rightContainer,children:[Object(j.jsx)("h4",{children:"Summary:"}),Object(j.jsx)("p",{children:e.detail.summary})]})]}):"No existe la receta"})})),Z=(a(197),function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("div",{className:"container-footer",children:[Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://padularrosa-franco.vercel.app/",children:"Portfolio Full Stack"}),Object(j.jsxs)("p",{children:["Desarrollado con \u2764 por Franco Padularrosa",Object(j.jsx)("br",{}),"\xa92022"]}),Object(j.jsxs)("div",{className:"contact",children:[Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/padularrosa-franco-fullstack",children:"LinkedIn "}),Object(j.jsx)("a",{href:"mailto:fpadularrosa22@gmail.com",children:"fpadularrosa22@gmail.com"}),Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/francorrosa",children:"Facebook"})]})]})})})}),J=a(21),U=a.n(J),V=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(f.c)(),r=Object(f.d)((function(e){return null===e||void 0===e?void 0:e.diets}));Object(c.useEffect)((function(){console.log(r)}),[]),Object(c.useEffect)((function(){s(function(e){return{type:w,payload:e}}(a))}),[a,s]),Object(c.useEffect)((function(){s(L())}),[s]);return Object(j.jsxs)("div",{className:U.a.filters,children:[Object(j.jsx)("label",{className:U.a.label,children:"Sort:"}),Object(j.jsxs)("select",{className:U.a.select,defaultValue:"none",name:"alphabetical",onChange:function(e){n(e.target.value),e.preventDefault()},children:[Object(j.jsx)("option",{disabled:!0,hidden:!0,value:"none",children:"Alphabetical"}),Object(j.jsx)("option",{value:"atoz",children:"A to Z"}),Object(j.jsx)("option",{value:"ztoa",children:"Z to A"})]}),Object(j.jsxs)("select",{className:U.a.select,name:"numerical",defaultValue:"none",onChange:function(e){var t;e.preventDefault(),s((t=e.target.value,{type:E,payload:t}))},children:[Object(j.jsx)("option",{disabled:!0,hidden:!0,value:"none",children:"Likes"}),Object(j.jsx)("option",{value:"asc",children:"From Min to Max"}),Object(j.jsx)("option",{value:"desc",children:"From Max to Min"})]}),Object(j.jsxs)("select",{className:U.a.select,name:"healthy",defaultValue:"none",onChange:function(e){var t;e.preventDefault(),s((t=e.target.value,{type:D,payload:t}))},children:[Object(j.jsx)("option",{disabled:!0,hidden:!0,value:"none",children:"Health Score"}),Object(j.jsx)("option",{value:"asc",children:"From Min to Max"}),Object(j.jsx)("option",{value:"desc",children:"From Max to Min"})]})]})},X=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(f.c)(),r=function(e){var t;e.preventDefault(),s((t=a,function(){var e=Object(_.a)(Object(x.a)().mark((function e(a){var c;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("/recipes?name=".concat(t));case 3:null!==(c=e.sent)&&void 0!==c&&c.data&&a({type:S,payload:c.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({type:S,payload:e.t0.toString()});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),e.target.reset()};return Object(j.jsxs)("div",{className:U.a.searchBar,children:[Object(j.jsxs)("form",{className:U.a.formBar,onSubmit:function(e){return r(e)},children:[Object(j.jsx)("input",{type:"text",className:U.a.input,name:"name",id:"input",placeholder:"Recipes",value:a,onChange:function(e){n(e.target.value)}}),Object(j.jsx)("button",{type:"submit",className:U.a.btn,children:"Search"})]}),Object(j.jsx)(V,{}),Object(j.jsx)(o.b,{to:"/new-recipe",children:Object(j.jsx)("button",{className:U.a.btn,children:"New Recipe"})})]})},G=a(27),K=a(34),Y=a(6),W={recipes:[],diets:[],detail:{}};var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:case S:return Object(Y.a)(Object(Y.a)({},e),{},{recipes:t.payload});case R:return Object(Y.a)(Object(Y.a)({},e),{},Object(K.a)({},t.payload,{}));case g:return Object(Y.a)(Object(Y.a)({},e),{},{diets:t.payload});case N:return Object(Y.a)(Object(Y.a)({},e),{},{detail:t.payload});case C:var a=e.recipes.filter((function(e){var a;return null===(a=e.diets)||void 0===a?void 0:a.some((function(e){return e.toLowerCase()===t.payload.toLowerCase()}))}));return Object(Y.a)(Object(Y.a)({},e),{},{recipes:a});case w:var c;return"atoz"===t.payload?c=Object(G.a)(e.recipes).sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:e.name.toLowerCase()<t.name.toLowerCase()?-1:0})):"ztoa"===t.payload&&(c=Object(G.a)(e.recipes).sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?1:e.name.toLowerCase()>t.name.toLowerCase()?-1:0}))),Object(Y.a)(Object(Y.a)({},e),{},{recipes:c});case E:var n;return"asc"===t.payload?n=Object(G.a)(e.recipes).sort((function(e,t){return e.score>t.score?1:e.score<t.score?-1:0})):"desc"===t.payload&&(n=Object(G.a)(e.recipes).sort((function(e,t){return e.score<t.score?1:e.score>t.score?-1:0}))),Object(Y.a)(Object(Y.a)({},e),{},{recipes:n});case y:return Object(Y.a)({},e);case D:var s;return"asc"===t.payload?s=Object(G.a)(e.recipes).sort((function(e,t){return e.healthScore>t.healthScore?1:e.healthScore<t.healthScore?-1:0})):"desc"===t.payload&&(s=Object(G.a)(e.recipes).sort((function(e,t){return e.healthScore<t.healthScore?1:e.healthScore>t.healthScore?-1:0}))),Object(Y.a)(Object(Y.a)({},e),{},{recipes:s});default:return e}},$=a(62),ee=a(161),te=Object($.c)(Q,Object($.b)(Object($.a)(ee.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),ae=a(3),ce=a.n(ae),ne=function(e){var t=e.name,a=e.summary,c=e.score,n=e.healthScore,s=e.steps,r=e.diets,i=e.image,l=e.dishtype,o={};return t&&""!==t||(o.name=Object(j.jsx)("p",{className:ce.a.p1,children:"A name is required"})),Number(t)&&(o.name=Object(j.jsx)("p",{className:ce.a.p1,children:"Name must be a string"})),l&&""!==l||(o.dishtype=Object(j.jsx)("p",{className:ce.a.p1,children:"A dish type is required"})),Number(l)&&(o.dishtype=Object(j.jsx)("p",{className:ce.a.p1,children:"Dish type must be a string"})),/[a-zA-Z]+:\/\/([a-zA-Z]+(.[a-zA-Z]+)+)/i.test(i)||(o.image=Object(j.jsx)("p",{className:ce.a.p1,children:"The url is wrong"})),a&&""!==a||(o.summary=Object(j.jsx)("p",{className:ce.a.p1,children:"A summary is required"})),c&&""!==c?isNaN(Number(c))?o.score=Object(j.jsx)("p",{className:ce.a.p1,children:"Score must be a number"}):(c>1e3||c<0)&&(o.score=Object(j.jsx)("p",{className:ce.a.p1,children:"Score must be between 0 and 100"})):o.score=Object(j.jsx)("p",{className:ce.a.p1,children:"A score is required"}),n&&""!==n?isNaN(Number(n))?o.healthScore=Object(j.jsx)("p",{className:ce.a.p1,children:"Health score must be a number"}):(n>100||n<0)&&(o.healthScore=Object(j.jsx)("p",{className:ce.a.p1,children:"Health score must be between 0 and 100"})):o.healthScore=Object(j.jsx)("p",{className:ce.a.p1,children:"A health score is required"}),s&&""!==s||(o.steps=Object(j.jsx)("p",{className:ce.a.p1,children:"Instructions are required"})),0===r.length&&(o.diets=Object(j.jsx)("p",{className:ce.a.p1,children:"Pick at least one diet"})),o},se=a(162),re=a.n(se),ie=Object(f.b)((function(e){return{diets:e.diets}}),(function(e){return{getDiets:function(){e(L())}}}))((function(e){var t,a=Object(c.useState)({name:"",image:"",summary:"",score:"",healthScore:"",steps:"",dishtype:"",diets:[]}),n=Object(u.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)({}),l=Object(u.a)(i,2),o=l[0],d=l[1],b=Object(f.c)();function p(e){e.preventDefault(),r(Object(Y.a)(Object(Y.a)({},s),{},Object(K.a)({},e.target.name,e.target.value)))}return Object(c.useEffect)((function(){b(L())}),[b]),Object(c.useEffect)((function(){d(ne(s))}),[s.name,s.summary,s.score,s.healthScore,s.steps,s.diets,s.dishtype,s]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:ce.a.fondo,children:Object(j.jsxs)("form",{className:ce.a.form,onSubmit:function(e){var t;e.preventDefault(),!Object.keys(o).length>0&&(b((t=s,function(){var e=Object(_.a)(Object(x.a)().mark((function e(a){var c;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.post("/recipe",t,{headers:{"content-type":"application/json"}});case 3:null!==(c=e.sent)&&void 0!==c&&c.data&&a({type:y,payload:c.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({type:y,payload:e.t0.toString()});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),re.a.fire("Good Job!","Recipe has been created!","success")),r({name:"",image:"",summary:"",score:"",healthScore:"",steps:"",dishtype:""})},children:[Object(j.jsxs)("div",{className:"containerWithoutSteps",children:[Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsx)("label",{className:ce.a.label,children:"Name:"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"".concat(ce.a.inputs," ").concat(o.name&&ce.a.danger),name:"name",value:s.name,onChange:p}),o.name&&Object(j.jsx)("span",{children:o.name})]}),Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsx)("label",{className:ce.a.label,children:"Dish type:"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"".concat(ce.a.inputs," ").concat(o.dishtype&&ce.a.danger),name:"dishtype",value:s.dishtype,placeholder:"dish type...",onChange:p})," ",Object(j.jsx)("br",{}),o.dishtype&&Object(j.jsx)("span",{children:o.dishtype})]}),Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsx)("label",{className:ce.a.label,children:"Summary:"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"".concat(ce.a.inputs," ").concat(o.summary&&ce.a.danger),name:"summary",value:s.summary,placeholder:"overview...",onChange:p}),o.summary&&Object(j.jsx)("span",{children:o.summary})]}),Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsx)("label",{className:ce.a.label,children:"Score:"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"".concat(ce.a.inputs," ").concat(o.score&&ce.a.danger),name:"score",value:s.score,placeholder:"food rating...",onChange:p})," ",Object(j.jsx)("br",{}),o.score&&Object(j.jsx)("span",{children:o.score})]}),Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsx)("label",{className:ce.a.label,children:"Health score:"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"".concat(ce.a.inputs," ").concat(o.healthScore&&ce.a.danger),name:"healthScore",value:s.healthScore,placeholder:"healthy...",onChange:p})," ",Object(j.jsx)("br",{}),o.healthScore&&Object(j.jsx)("span",{children:o.healthScore})]}),Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsx)("label",{className:ce.a.label,children:"Image:"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"".concat(ce.a.inputs," ").concat(o.image&&ce.a.danger),name:"image",value:s.image,placeholder:"url...",onChange:p})," ",Object(j.jsx)("br",{}),o.image&&Object(j.jsx)("span",{children:o.image})]}),Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsx)("label",{className:ce.a.label,children:"Diets:"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("select",{className:ce.a.inputs,name:"diets",onChange:function(e){r(Object(Y.a)(Object(Y.a)({},s),{},Object(K.a)({},e.target.name,[].concat(Object(G.a)(s.diets),[e.target.value]))))},children:null===(t=e.diets)||void 0===t?void 0:t.map((function(e){return Object(j.jsx)("option",{value:e.name,children:e.name},e.id)}))}),o.diets&&Object(j.jsx)("span",{children:o.diets})]})]}),Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsx)("label",{className:ce.a.label,children:"Steps:"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("textarea",{className:"".concat(ce.a.inputStep," ").concat(o.steps&&ce.a.danger),name:"steps",value:s.steps,placeholder:"steps...",onChange:p})," ",Object(j.jsx)("br",{}),o.steps&&Object(j.jsx)("span",{children:o.steps})]}),Object(j.jsx)("button",{className:ce.a.btn,type:"submit",disabled:Object.keys(o).length>0,children:"Create recipe!"})]})})})}));var le=function(){return Object(j.jsx)(f.a,{store:te,children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o.b,{style:{textDecoration:"none"},to:"/home",children:Object(j.jsx)("h1",{className:"henry",children:"Henry Food"})}),Object(j.jsxs)(q.c,{children:[Object(j.jsx)(q.a,{exact:!0,path:"/",children:Object(j.jsx)(d,{})}),Object(j.jsx)(q.a,{exact:!0,path:"/recipe/:recipeId",render:function(e){var t=e.match;return Object(j.jsx)(z,{recipeId:t.params.recipeId})}}),Object(j.jsx)(q.a,{exact:!0,path:"/new-recipe",children:Object(j.jsx)(ie,{})})]}),Object(j.jsx)("div",{className:"home",children:Object(j.jsx)(q.c,{children:Object(j.jsxs)(q.a,{path:"/home",children:[Object(j.jsx)(X,{}),Object(j.jsx)(M,{}),Object(j.jsx)(Z,{})]})})})]})})},oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,314)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))},je=a(163);a.n(je).a.config(),T.a.defaults.baseURL="https://pifood-production-ec08.up.railway.app/",r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(le,{})})}),document.getElementById("root")),oe()}},[[313,1,2]]]);
//# sourceMappingURL=main.9bc80ddf.chunk.js.map