webpackJsonp([4],{2063:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d,n,l,u=a(31),s=r(u),i=a(241),o=r(i),p=a(89),c=r(p),f=a(17),m=r(f),h=a(66),g=r(h),y=a(76),_=r(y),v=a(86),E=r(v),b=a(26),R=r(b),S=a(1),q=r(S),k=a(6),V=r(k),x=a(2),F=r(x),M=a(5),C=r(M),D=a(3),P=r(D),Y=a(4),N=r(Y),T=a(14),I=r(T);a(32),a(242),a(90),a(18),a(67),a(77),a(92),a(27),a(15);var w=a(0),j=r(w),L=a(8),A=a(47),O=a(2065),J=r(O),z=a(19),K=(d=(0,L.connect)(function(e){return{usergroup:e.usergroup}}),n=I.default.create(),d(l=n(l=function(e){function t(){var e,a,r,d;(0,F.default)(this,t);for(var n=arguments.length,l=Array(n),u=0;u<n;u++)l[u]=arguments[u];return a=r=(0,P.default)(this,(e=t.__proto__||(0,V.default)(t)).call.apply(e,[this].concat(l))),r.state={modalVisible:!1,modalEditVisible:!1,editRecord:{},query:"",page:1,started_at:"",ended_at:""},r.handleFormReset=function(){(0,r.props.dispatch)({type:"usergroup/fetch",payload:{}}),r.setState({page:1,query:"",started_at:"",ended_at:""})},r.handleSearch=function(e){(0,r.props.dispatch)({type:"usergroup/fetch",payload:(0,q.default)({},e)}),r.setState({query:e.query,started_at:e.started_at,ended_at:e.ended_at,page:e.page})},r.handleModalVisible=function(e){r.setState({modalVisible:!!e})},r.handleModalEditVisible=function(e){r.setState({modalEditVisible:!!e})},r.handleAddInput=function(e){r.setState({addInputValue:e.target.value})},r.handleAdd=function(){var e=r,t=(0,z.convertPoliciesTopic)(r.formRef.props.form.getFieldsValue());console.log("formValues",t),r.props.dispatch({type:"usergroup/add",payload:{data:(0,q.default)({},t)},callback:function(){R.default.success("\u6dfb\u52a0\u89c4\u5219\u6210\u529f"),e.setState({modalVisible:!1}),e.props.dispatch({type:"usergroup/fetch",payload:{query:e.state.query,started_at:e.state.started_at,ended_at:e.state.ended_at,page:e.state.page}})}})},r.handleEdit=function(){var e=r,t=(0,z.convertPoliciesTopic)(r.editFormRef.props.form.getFieldsValue());console.log("formValues",t),r.props.dispatch({type:"usergroup/edit",payload:{data:(0,q.default)({id:r.state.editRecord.id},t)},callback:function(){R.default.success("\u4fee\u6539\u89c4\u5219\u6210\u529f"),e.setState({modalEditVisible:!1}),e.props.dispatch({type:"usergroup/fetch",payload:{endpoint_id:e.props.match.params.id,query:e.state.query,started_at:e.state.started_at,ended_at:e.state.ended_at,page:e.state.page}})}})},r.handleEditStatus=function(e,t){var a=0;a=1===t?-1:1;var d=r;r.props.dispatch({type:"usergroup/editStatus",payload:{data:{id:e,status:a}},callback:function(){R.default.success("\u4fee\u6539\u72b6\u6001\u6210\u529f"),d.props.dispatch({type:"usergroup/fetch",payload:{query:d.state.query,started_at:d.state.started_at,ended_at:d.state.ended_at,page:d.state.page}})}})},r.handleRemove=function(e){var t=r;r.props.dispatch({type:"usergroup/remove",payload:{id:e},callback:function(){R.default.success("\u5220\u9664\u7528\u6237\u7ec4\u6210\u529f"),t.props.dispatch({type:"usergroup/fetch",payload:{query:t.state.query,started_at:t.state.started_at,ended_at:t.state.ended_at,page:t.state.page}})}})},r.handPageChange=function(e){r.handleSearch({page:e,query:r.state.query,ended_at:r.state.ended_at,started_at:r.state.started_at})},d=a,(0,P.default)(r,d)}return(0,N.default)(t,e),(0,C.default)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)({type:"usergroup/fetch",payload:{page:1}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.usergroup,r=a.data,d=a.meta,n=a.loading,l=t.dispatch,u=[{title:"\u540d\u79f0",dataIndex:"display_name"},{title:"\u63cf\u8ff0",dataIndex:"description",className:"description",render:function(e,t,a){return j.default.createElement(E.default,{title:e},e&&e.length>20?e.substring(0,20)+"...":e)}},{title:"\u72b6\u6001",dataIndex:"status",render:function(e,t,a){return j.default.createElement("span",null,j.default.createElement(_.default,{status:-1===e?"error":"success"}),t.status_explain)}},{title:"\u64cd\u4f5c",width:150,render:function(t,a,r){return j.default.createElement("p",null,j.default.createElement("a",{href:"javascript:;",onClick:function(){l(A.routerRedux.push("/system-management/usergroup/"+a.id))}},"\u7f16\u8f91"),j.default.createElement("span",{className:"ant-divider"}),j.default.createElement(g.default,{placement:"topRight",title:"\u786e\u5b9a\u8981"+(1===a.status?"\u7981\u7528":"\u542f\u7528")+"\u5417?",onConfirm:function(){return e.handleEditStatus(a.id,a.status)}},j.default.createElement("a",{href:"javascript:;"},1===a.status?"\u7981\u7528":"\u542f\u7528")),j.default.createElement("span",{className:"ant-divider"}),j.default.createElement(g.default,{placement:"topRight",title:"\u786e\u5b9a\u8981\u5220\u9664\u5417?",onConfirm:function(){return e.handleRemove(a.id)}},j.default.createElement("a",{href:""},"\u5220\u9664")))}}];return j.default.createElement("div",null,j.default.createElement(s.default,{bordered:!1},j.default.createElement("div",{className:"tableList"},j.default.createElement("div",{className:"tableListForm"},j.default.createElement(J.default,{handleSearch:this.handleSearch,handleFormReset:this.handleFormReset})),j.default.createElement("div",{className:"tableListOperator"},j.default.createElement(m.default,{icon:"plus",type:"primary",onClick:function(){return l(A.routerRedux.push("/system-management/usergroup/add"))}},"\u521b\u5efa\u7528\u6237\u7ec4")),j.default.createElement(c.default,{loading:n,rowKey:function(e){return e.id},dataSource:r,columns:u,pagination:!1}),j.default.createElement(o.default,{showQuickJumper:!0,className:"pagination",total:d.pagination.total,current:d.pagination.current_page,pageSize:d.pagination.per_page,onChange:this.handPageChange}))))}}]),t}(w.PureComponent))||l)||l);t.default=K,e.exports=t.default},2065:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var d=a(35),n=r(d),l=a(17),u=r(l),s=a(24),i=r(s),o=a(1),p=r(o),c=a(6),f=r(c),m=a(2),h=r(m),g=a(5),y=r(g),_=a(3),v=r(_),E=a(4),b=r(E),R=a(14),S=r(R),q=a(45),k=r(q);a(36),a(18),a(23),a(15),a(46);var V=a(0),x=r(V),F=a(16),M=r(F),C=k.default.RangePicker,D=S.default.Item,P=function(e){function t(e){(0,h.default)(this,t);var a=(0,v.default)(this,(t.__proto__||(0,f.default)(t)).call(this,e));return a.handleSubmit=function(e){e.preventDefault();var t=a.props;t.dispatch;t.form.validateFields(function(e,t){if(!e){var r=t["range-time-picker"],d={query:t.query,started_at:r?(0,M.default)(r[0]).format("YYYY-MM-DD"):"",ended_at:r?(0,M.default)(r[1]).format("YYYY-MM-DD"):""};a.props.handleSearch((0,p.default)({},d,{page:1}))}})},a.handleFormReset=function(){a.props.form.resetFields(),a.props.handleFormReset()},a.state={},a}return(0,b.default)(t,e),(0,y.default)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return x.default.createElement(S.default,{onSubmit:this.handleSubmit,layout:"inline"},x.default.createElement(n.default,{gutter:{md:8,lg:24,xl:48}},x.default.createElement(D,{label:this.props.inputText?this.props.inputText:"\u540d\u79f0"},e("query")(x.default.createElement(i.default,{placeholder:"\u8bf7\u8f93\u5165"}))),x.default.createElement(D,{label:this.props.dateText?this.props.dateText:"\u521b\u5efa\u65f6\u95f4"},e("range-time-picker",{initialValue:this.props.initRange?this.props.initRange:""})(x.default.createElement(C,{allowClear:!this.props.initRange}))),x.default.createElement(D,null,x.default.createElement(u.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),x.default.createElement(u.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"))))}}]),t}(V.Component),Y=S.default.create()(P);t.default=Y,e.exports=t.default}});