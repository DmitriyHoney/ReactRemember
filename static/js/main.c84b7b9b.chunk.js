(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{130:function(t,e,n){},131:function(t,e,n){t.exports={ldsLoader:"Preloader_ldsLoader__Ym4f-"}},133:function(t,e,n){t.exports={header:"Header_header__2sBA5"}},134:function(t,e,n){t.exports={common_error:"Login_common_error__2X3Fe"}},22:function(t,e,n){t.exports={wrap:"Dialogs_wrap__1erZA",users:"Dialogs_users__RyAFy",dialogs:"Dialogs_dialogs__38ve4",msg:"Dialogs_msg__2Lwik",mine:"Dialogs_mine__3q2CZ",them:"Dialogs_them__2qAIo"}},245:function(t,e,n){},288:function(t,e,n){},289:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(1),i=n.n(r),c=n(60),s=n.n(c),o=n(17),u=n(7),l=n(27),d=n(3),j=n(126),b=n.n(j).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"2aa95529-03f3-4e18-bb22-995bc7fdf5db"}}),p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return b.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))},f=function(t){return b.post("follow/".concat(t)).then((function(t){return t.data}))},h=function(t){return b.delete("follow/".concat(t)).then((function(t){return t.data}))},O=function(t){return b.get("profile/".concat(t)).then((function(t){return t.data}))},m=function(t){return b.put("profile/status",{status:t}).then((function(t){return t.data}))},g=function(t){return b.get("profile/status/".concat(t)).then((function(t){return t.data}))},v=function(){return b.get("auth/me").then((function(t){return t.data}))},x=function(t){return b.post("/auth/login",t).then((function(t){return t.data}))},_=function(){return b.delete("/auth/login").then((function(t){return t.data}))},k="ADD_POST",w="SET_PROFILE",y="SET_PROFILE_STATUS",P="DELETE_POST",C={posts:[{username:"dimka",content:"something text",avatar:"https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png",likes:3,id:1},{username:"dimka",content:"something text",avatar:"https://apps.shopifycdn.com/listing_images/e8c7c2fb54b0b2b65bde115e60c3a9e9/icon/97093c0683cfe748e413a8b6bd496a10.png",likes:2,id:2},{username:"dimka",content:"hello! how are you?",avatar:"https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png",likes:5,id:3}],profile:null,status:""},S=function(t){return{type:y,text:t}},N="ADD_MESSAGE_TO_DIALOG",A={dialogsItem:[{username:"dimka",avatar:"https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png",id:"1"},{username:"maria",avatar:"https://apps.shopifycdn.com/listing_images/e8c7c2fb54b0b2b65bde115e60c3a9e9/icon/97093c0683cfe748e413a8b6bd496a10.png",id:"2"}],messages:[{isMine:!1,text:"Hello!"},{isMine:!0,text:"Hello, how are you?"}]},T={links:[{name:"Profile",path:"/profile/6722"},{name:"Users",path:"/users"},{name:"Dialogs",path:"/dialogs"},{name:"News",path:"/news"}],activeFiends:[{name:"Marina",id:"2",avatar:"https://apps.shopifycdn.com/listing_images/e8c7c2fb54b0b2b65bde115e60c3a9e9/icon/97093c0683cfe748e413a8b6bd496a10.png"},{name:"Dimka",id:"1",avatar:"https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png"}]},I="SET_USERS",E="TOGGLE_FOLLOW_USER",D="SET_CURRENT_PAGE_USERS",F="SET_TOTAL_COUNT_USERS",L="SET_IS_LOADING",U="SET_FOLLOWING_PROCESS_STACK",M={users:[],followingProcessStack:[],paginate:{page:1,count:10,totalCount:0},isLoading:!1},R=function(t){return{type:E,userId:t}},z=function(t){return{type:L,bool:t}},G=function(t){return{type:U,id:t}},q=n(34),H="SET_AUTH",B="SET_AUTH_DATA",J={id:null,login:null,email:null,isAuth:!1},K=function(t){return{type:B,data:{email:t.email,login:t.login,id:t.id}}},X=function(t){return{type:H,bool:t}},Y=function(){return function(t){return v().then((function(e){t(K(e.data)),0===e.resultCode&&t(X(!0))}))}},Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case B:return Object(d.a)(Object(d.a)({},t),e.data);case H:return Object(d.a)(Object(d.a)({},t),{},{isAuth:e.bool});default:return t}},W="SET_INITIALIZE_APP",Q="FAKE",V={isAppInitialize:!1,fake:0},$=n(127),tt=n(125),et=Object(u.c)({dialogsPage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case N:return Object(d.a)(Object(d.a)({},t),{},{messages:[].concat(Object(l.a)(t.messages),[{isMine:!0,text:e.text}])});default:return t}},profilePage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k:var n={username:"dimka",content:e.text,avatar:"https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png",likes:0};return Object(d.a)(Object(d.a)({},t),{},{posts:[].concat(Object(l.a)(t.posts),[n])});case y:return Object(d.a)(Object(d.a)({},t),{},{status:e.text});case P:return Object(d.a)(Object(d.a)({},t),{},{posts:t.posts.filter((function(t){return t.id!==e.id}))});case w:return Object(d.a)(Object(d.a)({},t),{},{profile:e.profile});default:return t}},sidebarPage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;return e.type,t},usersPage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case I:return Object(d.a)(Object(d.a)({},t),{},{users:Object(l.a)(e.users)});case U:var n=t.followingProcessStack.includes(e.id);return Object(d.a)(Object(d.a)({},t),{},{followingProcessStack:n?t.followingProcessStack.filter((function(t){return Number(t)!==Number(e.id)})):[].concat(Object(l.a)(t.followingProcessStack),[e.id])});case D:return Object(d.a)(Object(d.a)({},t),{},{paginate:Object(d.a)(Object(d.a)({},t.paginate),{},{page:e.page})});case F:return Object(d.a)(Object(d.a)({},t),{},{paginate:Object(d.a)(Object(d.a)({},t.paginate),{},{totalCount:e.totalCount})});case L:return Object(d.a)(Object(d.a)({},t),{},{isLoading:e.bool});case E:return Object(d.a)(Object(d.a)({},t),{},{users:t.users.map((function(t){return t.id===e.userId?Object(d.a)(Object(d.a)({},t),{},{followed:!t.followed}):Object(d.a)({},t)}))});default:return t}},auth:Z,form:tt.a,app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case W:return Object(d.a)(Object(d.a)({},t),{},{isAppInitialize:e.bool});case Q:return Object(d.a)(Object(d.a)({},t),{},{fake:t.fake+1})}return t}}),nt=Object(u.e)(et,Object(u.a)($.a));window.store=nt,window.state=nt.getState();var at,rt=nt,it=n(12),ct=n(13),st=n(15),ot=n(14),ut=n(10),lt=(n(245),n(11)),dt=n(85),jt=n.n(dt),bt=function(t){var e="";return t.username&&(e=Object(a.jsx)("h3",{children:t.username})),Object(a.jsxs)("div",{className:jt.a.wrap,children:[Object(a.jsx)("div",{className:jt.a.avatar,children:Object(a.jsx)("img",{src:t.avatar,alt:"avatar"})}),e]})},pt=function(t){var e=t.id,n=t.username,r=t.avatar,i="/dialogs/".concat(e);return Object(a.jsx)(o.b,{to:i,children:Object(a.jsx)(bt,{username:n,avatar:r})})},ft=n(22),ht=n.n(ft),Ot=function(t){var e=t.isMine,n=t.text;return Object(a.jsx)("div",{className:"".concat(e?ht.a.mine:ht.a.them," ").concat(ht.a.msg),children:n})},mt=n(123),gt=n(124),vt=Object(gt.a)({form:"addMessageDialog"})((function(t){return Object(a.jsxs)("form",{className:ht.a.wrap,onSubmit:t.handleSubmit,children:[Object(a.jsx)(mt.a,{placeholder:"add message",name:"text",className:ht.a.textarea,component:"textarea",type:"text"}),Object(a.jsx)("button",{className:ht.a.wrapBtn,children:"Send message"})]})})),xt=function(t){var e=t.dialogsPage,n=t.addDialogMessageActionCreator;return Object(a.jsxs)("div",{className:ht.a.content,children:[Object(a.jsxs)("div",{className:ht.a.wrap,children:[Object(a.jsx)("div",{className:ht.a.users,children:e.dialogsItem.map((function(t){return Object(a.jsx)(pt,{username:t.username,avatar:t.avatar,id:t.id},t.id)}))}),Object(a.jsx)("div",{className:ht.a.dialogs,children:e.messages.map((function(t,e){return Object(a.jsx)(Ot,{isMine:t.isMine,text:t.text},e)}))})]}),Object(a.jsx)(vt,{onSubmit:function(t){n(t.text)}})]})},_t=n(11).connect,kt=function(t){Object(st.a)(n,t);var e=Object(ot.a)(n);function n(t){return Object(it.a)(this,n),e.call(this,t)}return Object(ct.a)(n,[{key:"render",value:function(){return Object(a.jsx)(xt,Object(d.a)({},this.props))}}]),n}(i.a.Component),wt=_t((function(t){return{dialogsPage:t.dialogsPage}}),{addDialogMessageActionCreator:function(t){return{type:N,text:t}}})(kt),yt=n(90),Pt=n.n(yt),Ct=n.p+"static/media/defaultUser.a0d560fc.jpg",St=n(93),Nt=function(t){var e=Object(r.useState)(!1),n=Object(St.a)(e,2),i=n[0],c=n[1],s=Object(r.useState)(t.status),o=Object(St.a)(s,2),u=o[0],l=o[1];return Object(r.useEffect)((function(){l(t.status)}),[t.status]),Object(a.jsxs)("div",{children:[i&&Object(a.jsx)("div",{children:Object(a.jsx)("input",{autoFocus:!0,type:"text",value:u,onBlur:function(){c(!1),t.status!==u&&t.updateStatus(u)},onInput:function(t){l(t.target.value)}})}),!i&&Object(a.jsx)("div",{onDoubleClick:function(){return c(!0)},children:t.status})]})},At=function(t){if(!t.profile)return!1;var e=t.profile,n=e.lookingForAJob,r=e.lookingForAJobDescription,i=e.fullName,c=e.photos;return Object(a.jsxs)("div",{className:Pt.a.content,children:["main content",Object(a.jsx)("div",{className:Pt.a.image,children:Object(a.jsx)("img",{src:c.large||Ct,alt:"main-avatar"})}),Object(a.jsx)(Nt,{updateStatus:t.updateStatus,status:t.status}),Object(a.jsx)("div",{children:i}),Object(a.jsxs)("div",{children:["\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043d\u044f\u0442\u043e\u0441\u0442\u0438: ",n?"\u0433\u043e\u0442\u043e\u0432 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u0438\u0435 \u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c":"\u0423\u0436\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u044e"]}),Object(a.jsxs)("div",{children:["\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0434\u0430\u0442\u0435\u043b\u044e: ",r]}),Object(a.jsx)("div",{children:"ava + descr"})]})},Tt=n(91),It=n.n(Tt),Et=function(t){return Object(a.jsxs)("div",{className:It.a.item,children:[Object(a.jsx)(bt,{avatar:t.avatar,username:t.username}),Object(a.jsx)("div",{className:It.a.info,children:Object(a.jsx)("div",{children:t.content})})]})},Dt=n(130),Ft=n.n(Dt),Lt=function(t){return t?void 0:"required"},Ut=n(136),Mt=n(65),Rt=n.n(Mt),zt=function(t){var e=t.input,n=t.meta,r=Object(Ut.a)(t,["input","meta"]),i=n.touched&&!n.valid;return Object(a.jsxs)("div",{className:Rt.a.form_control,children:[Object(a.jsx)("div",{children:Object(a.jsx)("textarea",Object(d.a)(Object(d.a)(Object(d.a)({},r),e),{},{className:i?Rt.a.form_control_error:""}))}),i&&Object(a.jsx)("div",{children:Object(a.jsx)("span",{className:Rt.a.error,children:n.error})})]})},Gt=(at=5,function(t){return t&&t.length<at?"min length ".concat(at,", your str ").concat(t.length):void 0}),qt=i.a.memo((function(t){var e=t.posts,n=t.addPost;return console.log("render"),Object(a.jsxs)("div",{children:["My postsupdateTextareaField",Object(a.jsx)(Ht,{onSubmit:function(t){n(t.text)}}),Object(a.jsx)("div",{className:Ft.a.posts,children:e.map((function(t,e){return Object(a.jsx)(Et,{username:t.username,content:t.content,avatar:t.avatar},e)}))})]})})),Ht=Object(gt.a)({form:"addPost",onSubmitSuccess:function(t,e){return e(Object(q.a)("addPost"))}})((function(t){return Object(a.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(a.jsx)(mt.a,{name:"text",component:zt,type:"text",validate:[Lt,Gt],placeholder:"add your post"}),Object(a.jsx)("button",{children:"add post"})]})})),Bt=qt,Jt=function(t){var e=t.profilePage,n=t.addPostActionCreator,r=t.updateProfileStatusThunkCreator;return Object(a.jsxs)("div",{children:[Object(a.jsx)(At,{profile:e.profile,updateStatus:r,status:e.status}),Object(a.jsx)(Bt,{posts:e.posts,textareaInput:e.textareaInput,addPost:n})]})},Kt=function(t){return{isAuth:t.auth.isAuth}},Xt=function(t){var e=function(e){Object(st.a)(r,e);var n=Object(ot.a)(r);function r(){return Object(it.a)(this,r),n.apply(this,arguments)}return Object(ct.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(a.jsx)(t,Object(d.a)({},this.props)):Object(a.jsx)(ut.a,{to:"/login"})}}]),r}(i.a.Component);return Object(lt.connect)(Kt,{})(e)},Yt=n(11).connect,Zt=function(t){Object(st.a)(n,t);var e=Object(ot.a)(n);function n(){return Object(it.a)(this,n),e.apply(this,arguments)}return Object(ct.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.id||this.props.currentUserId;this.props.getProfileThunkCreator(t),this.props.getUserStatusThunkCreator(t)}},{key:"render",value:function(){return Object(a.jsx)(Jt,Object(d.a)({},this.props))}}]),n}(i.a.Component),Wt=Object(u.d)(Xt,ut.f,Yt((function(t){return{profilePage:t.profilePage,currentUserId:t.auth.id}}),{addPostActionCreator:function(t){return{type:k,text:t}},getProfileThunkCreator:function(t){return function(e){O(t).then((function(t){return e({type:w,profile:t})}))}},updateProfileStatusThunkCreator:function(t){return function(e){m(t).then((function(n){0===n.resultCode&&e(S(t))}))}},getUserStatusThunkCreator:function(t){return function(e){g(t).then((function(t){e(S(t))}))}}}))(Zt),Qt=function(t){return t.activeFiends?t.activeFiends.map((function(t){return Object(a.jsx)(o.b,{to:"/profile/".concat(t.id),children:Object(a.jsx)(bt,{avatar:t.avatar})},t.id)})):""},Vt=n(51),$t=n.n(Vt),te=function(t){var e=t.sidebarPage,n=e.links,r=e.activeFiends;return Object(a.jsxs)("nav",{className:$t.a.nav,children:[Object(a.jsx)("ul",{className:"list",children:n.map((function(t){return Object(a.jsx)("li",{className:$t.a.item,children:Object(a.jsx)(o.b,{to:t.path,activeClassName:$t.a.active,children:t.name})},t.path)}))}),Object(a.jsx)("div",{className:$t.a.friends,children:Object(a.jsx)(Qt,{activeFiends:r})})]})},ee=(0,n(11).connect)((function(t){return{sidebarPage:t.sidebarPage}}),(function(t){return{}}))(te),ne=n(66),ae=n.n(ne),re=function(t){Object(st.a)(n,t);var e=Object(ot.a)(n);function n(){return Object(it.a)(this,n),e.apply(this,arguments)}return Object(ct.a)(n,[{key:"handleClickPaginate",value:function(t){t!==this.props.currentPage&&this.props.click(t)}},{key:"generateArrayNumbers",value:function(t,e){for(var n=[],a=t;a<=e;a++)n.push(a);return n}},{key:"render",value:function(){var t=this;if(!this.props.quantity||this.props.quantity<=0)return!1;var e=this.generateArrayNumbers(1,this.props.quantity);return Object(a.jsx)("div",{className:ae.a.wrap,children:e.map((function(e){return Object(a.jsx)("div",{className:"".concat(ae.a.item," ").concat(Number(t.props.currentPage)===Number(e)?ae.a.active:""),onClick:function(){return t.handleClickPaginate(e)},children:e},e)}))})}}]),n}(i.a.Component),ie=n(36),ce=n.n(ie),se=function(t){var e=t.changePage,n=t.followThunk,r=t.unfollowThunk,i=t.followingProcessStack,c=t.users,s=t.paginate,u=Math.ceil(s.totalCount/s.count);return Object(a.jsxs)("div",{children:[Object(a.jsx)(re,{currentPage:s.page,quantity:u,click:function(t){return e(t)}}),c.map((function(t,e){return Object(a.jsxs)("div",{className:ce.a.wrap,children:[Object(a.jsx)(o.b,{to:"/profile/".concat(t.id),className:ce.a.avatar,children:Object(a.jsx)("img",{src:t.photos.small?t.photos.small:Ct,alt:"user-".concat(e)})}),Object(a.jsxs)("div",{className:ce.a.userInfo,children:[Object(a.jsx)("div",{className:ce.a.name,children:t.name}),Object(a.jsx)("div",{className:ce.a.status,children:t.status}),Object(a.jsx)("div",{className:ce.a.city,children:t.city}),t.followed?Object(a.jsx)("button",{disabled:i.includes(t.id),onClick:function(){return r(t.id)},children:"Unfollow"}):Object(a.jsx)("button",{disabled:i.includes(t.id),onClick:function(){return n(t.id)},children:"Follow"})]})]},e)}))]})},oe=n(131),ue=n.n(oe),le=function(t){return Object(a.jsxs)("div",{className:ue.a.ldsLoader,children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})},de=n(132),je=Object(de.a)((function(t){return t.usersPage.users}),(function(t){return t.filter((function(t){return!0}))})),be=function(t){Object(st.a)(n,t);var e=Object(ot.a)(n);function n(t){var a;return Object(it.a)(this,n),(a=e.call(this,t)).handlePaginateClick=function(t){a.props.getUsersThunkCreator(t,a.props.paginate.count)},a}return Object(ct.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.paginate.page,this.props.paginate.count)}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[this.props.isLoading?Object(a.jsx)(le,{}):"",Object(a.jsx)(se,{paginate:this.props.paginate,followingProcessStack:this.props.followingProcessStack,users:this.props.users,changePage:this.handlePaginateClick,followThunk:this.props.followThunkCreator,unfollowThunk:this.props.unfollowThunkCreator})]})}}]),n}(i.a.Component),pe=Object(u.d)(Object(lt.connect)((function(t){return{followingProcessStack:t.usersPage.followingProcessStack,users:je(t),paginate:t.usersPage.paginate,isLoading:t.usersPage.isLoading}}),{getUsersThunkCreator:function(t,e){return function(n){n(function(t){return{type:D,page:t}}(t)),n(z(!0)),p(t,e).then((function(t){var e,a;n((e=t.items,{type:I,users:e})),n((a=t.totalCount,{type:F,totalCount:a}))})).finally((function(){n(z(!1))}))}},followThunkCreator:function(t){return function(e){e(G(t)),f(t).then((function(n){0===n.resultCode&&(e(R(t)),e(G(t)))}))}},unfollowThunkCreator:function(t){return function(e){e(G(t)),h(t).then((function(n){0===n.resultCode&&(e(R(t)),e(G(t)))}))}}}))(be),fe=n(133),he=n.n(fe),Oe=function(t){return Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:t.login}),Object(a.jsx)("button",{onClick:t.logout,children:"logout"})]})},me=function(t){return Object(a.jsxs)("header",{className:he.a.header,children:[Object(a.jsx)("img",{src:"https://forexdengi.com/attachment.php?attachmentid=2690756",alt:"logotype"}),t.isAuth?Object(a.jsx)(Oe,{login:t.login,logout:t.logoutThunkCreator}):"login"]})},ge=function(t){Object(st.a)(n,t);var e=Object(ot.a)(n);function n(){return Object(it.a)(this,n),e.apply(this,arguments)}return Object(ct.a)(n,[{key:"render",value:function(){return Object(a.jsx)(me,Object(d.a)({},this.props))}}]),n}(i.a.Component),ve=Object(u.d)(Object(lt.connect)((function(t){return{isAuth:t.auth.isAuth,login:t.auth.login}}),{logoutThunkCreator:function(){return function(t){_().then((function(e){0===e.resultCode&&(t(X(!1)),t(K({email:null,login:null,id:null})))}))}}}))(ge),xe=n(134),_e=n.n(xe),ke=Object(gt.a)({form:"login"})((function(t){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Sign In"}),Object(a.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"login-email",children:"Email:"}),Object(a.jsx)(mt.a,{id:"login-email",name:"email",component:"input",type:"text",placeholder:"email"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"login-password",children:"Password:"}),Object(a.jsx)(mt.a,{id:"login-password",name:"password",component:"input",type:"password",placeholder:"password"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"login-remember",children:"RememberMe:"}),Object(a.jsx)(mt.a,{id:"login-remember",name:"rememberMe",component:"input",type:"checkbox"})]}),t.error?Object(a.jsx)("div",{className:_e.a.common_error,children:t.error}):"",Object(a.jsx)("button",{children:"Sign In"})]})]})})),we=function(t){return Object(a.jsx)("div",{children:Object(a.jsx)(ke,{onSubmit:function(e){t.signIn(e)}})})},ye=function(t){Object(st.a)(n,t);var e=Object(ot.a)(n);function n(t){var a;return Object(it.a)(this,n),(a=e.call(this,t)).signIn=function(t){a.props.signInThunkCreator(t)},a}return Object(ct.a)(n,[{key:"render",value:function(){return this.props.isAuth?Object(a.jsx)(ut.a,{to:"/profile"}):Object(a.jsx)(we,{signIn:this.signIn})}}]),n}(i.a.Component),Pe=Object(lt.connect)((function(t){return{isAuth:t.auth.isAuth}}),{signInThunkCreator:function(t){return function(e){x(t).then((function(t){0===t.resultCode?e(Y()):1===t.resultCode&&e(Object(q.b)("login",{_error:"incorrect email or password"}))}))}}})(ye),Ce=n(92),Se=n.n(Ce),Ne=n(135),Ae=function(t){Object(st.a)(n,t);var e=Object(ot.a)(n);function n(t){var a;return Object(it.a)(this,n),(a=e.call(this,t)).addItem=function(){a.setState({list:[].concat(Object(l.a)(a.state.list),[{id:a.state.id,name:"name_".concat(a.state.id)}]),id:a.state.id+1})},a.add=Object(Ne.a)(Se.a.mark((function t(){return Se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.addItem();case 2:case"end":return t.stop()}}),t)}))),a.state={list:[{id:1,name:"hello_1"},{id:2,name:"hello_2"},{id:3,name:"hello_3"}],id:4},a}return Object(ct.a)(n,[{key:"transformName",value:function(t){return console.log("tramsform name"),t+" !)"}},{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:this.add,children:"Add new item"}),"id ",this.state.list.map((function(e){return Object(a.jsxs)("div",{children:[e.id,": ",t.transformName(e.name)]},e.id)}))]})}}]),n}(i.a.Component),Te=Object(u.d)(Object(lt.connect)((function(t){return{}}),{}))(Ae),Ie=function(t){Object(st.a)(n,t);var e=Object(ot.a)(n);function n(){return Object(it.a)(this,n),e.apply(this,arguments)}return Object(ct.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeAppThunkCreator()}},{key:"render",value:function(){return this.props.isAppInitialize?Object(a.jsx)(lt.Provider,{store:this.props.store,children:Object(a.jsxs)("div",{className:"app-wrapper",children:[Object(a.jsx)(ve,{}),Object(a.jsx)(ee,{}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)(ut.b,{path:"/profile/:id?",component:function(){return Object(a.jsx)(Wt,{})}}),Object(a.jsx)(ut.b,{path:"/dialogs",component:function(){return Object(a.jsx)(wt,{})}}),Object(a.jsx)(ut.b,{path:"/users",component:function(){return Object(a.jsx)(pe,{})}}),Object(a.jsx)(ut.b,{path:"/login",component:function(){return Object(a.jsx)(Pe,{})}}),Object(a.jsx)(ut.b,{path:"/news",component:function(){return Object(a.jsx)(Te,{})}})]})]})}):Object(a.jsx)(le,{})}}]),n}(i.a.Component),Ee=Object(u.d)(ut.f,Object(lt.connect)((function(t){return{isAppInitialize:t.app.isAppInitialize}}),{initializeAppThunkCreator:function(){return function(t){Promise.all([t(Y())]).then((function(){t({type:W,bool:!0})}))}}}))(Ie);n(288);setInterval((function(){rt.dispatch({type:"FAKE"})}),1e3),s.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(Ee,{store:rt})}),document.getElementById("root"))},36:function(t,e,n){t.exports={wrap:"Users_wrap__EQ-qK",avatar:"Users_avatar__4yLem"}},51:function(t,e,n){t.exports={nav:"Navbar_nav__3e1wD",item:"Navbar_item__2BtOH",active:"Navbar_active__2XuVG",friends:"Navbar_friends__h9NHz"}},65:function(t,e,n){t.exports={form_control_error:"FormControls_form_control_error__1X840",error:"FormControls_error__2PHMI"}},66:function(t,e,n){t.exports={wrap:"Paginate_wrap__2mS1A",item:"Paginate_item__2D906",active:"Paginate_active__UN2hl"}},85:function(t,e,n){t.exports={avatar:"Avatar_avatar__2sbYX",wrap:"Avatar_wrap__wUfdi"}},90:function(t,e,n){t.exports={image:"ProfileInfo_image__1zDBT"}},91:function(t,e,n){t.exports={item:"Post_item__3grwG",info:"Post_info__2C3CJ"}}},[[289,1,2]]]);
//# sourceMappingURL=main.c84b7b9b.chunk.js.map