webpackJsonp([0],{2058:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,d,i,r=a(40),u=l(r),s=a(31),o=l(s),p=a(241),c=l(p),f=a(17),m=l(f),h=a(89),y=l(h),g=a(66),_=l(g),v=a(76),E=l(v),b=a(86),R=l(b),k=a(26),S=l(k),C=a(1),w=l(C),x=a(6),V=l(x),I=a(2),q=l(I),F=a(5),M=l(F),D=a(3),Y=l(D),O=a(4),P=l(O),T=a(14),z=l(T);a(41),a(32),a(242),a(18),a(90),a(67),a(77),a(92),a(27),a(15);var N=a(0),j=l(N),L=a(8),A=a(16),$=l(A),H=a(45),J=a(2065),K=l(J),Q=a(2068),W=l(Q),B=(n=(0,L.connect)(function(e){return{endpoints:e.endpoints,device:e.device,strategy:e.strategy,identify:e.identify}}),d=z.default.create(),n(i=d(i=function(e){function t(){var e,a,l,n;(0,q.default)(this,t);for(var d=arguments.length,i=Array(d),r=0;r<d;r++)i[r]=arguments[r];return a=l=(0,Y.default)(this,(e=t.__proto__||(0,V.default)(t)).call.apply(e,[this].concat(i))),l.state={modalVisible:!1,modalEditVisible:!1,editRecord:{},query:"",page:1,started_at:"",ended_at:"",endpointName:""},l.handleFormReset=function(){(0,l.props.dispatch)({type:"device/fetch",payload:{endpoint_id:l.props.match.params.id}}),l.setState({page:1,query:"",started_at:"",ended_at:""})},l.handleSearch=function(e){(0,l.props.dispatch)({type:"device/fetch",payload:(0,w.default)({endpoint_id:l.props.match.params.id},e)}),l.setState({query:e.query,started_at:e.started_at,ended_at:e.ended_at})},l.handleModalVisible=function(e){l.setState({modalVisible:!!e})},l.handleModalEditVisible=function(e){l.setState({modalEditVisible:!!e})},l.handleAdd=function(){var e=l,t=l.formRef.props.form.getFieldsValue();console.log("formValues",t),l.props.dispatch({type:"device/add",payload:{name:t.name,description:t.description,principal_id:t.identify.key,endpoint_id:l.props.match.params.id},callback:function(){S.default.success("\u6dfb\u52a0\u5b9e\u4f8b\u6210\u529f"),e.setState({modalVisible:!1}),e.props.dispatch({type:"device/fetch",payload:{endpoint_id:e.props.match.params.id,query:e.state.query,started_at:e.state.started_at,ended_at:e.state.ended_at,page:e.state.page}})}})},l.handleEdit=function(){var e=l.editFormRef.props.form.getFieldsValue();console.log("formValues",e);var t=l;l.props.dispatch({type:"device/edit",payload:{id:l.state.editRecord.id,name:e.name,description:e.description,principal_id:e.identify.key,endpoint_id:l.props.match.params.id},callback:function(){S.default.success("\u4fee\u6539\u5b9e\u4f8b\u6210\u529f"),t.setState({modalEditVisible:!1}),t.props.dispatch({type:"device/fetch",payload:{endpoint_id:t.props.match.params.id,query:t.state.query,started_at:t.state.started_at,ended_at:t.state.ended_at,page:t.state.page}})}})},l.handleRemove=function(e){var t=l;l.props.dispatch({type:"device/remove",payload:{endpoint_id:l.props.match.params.id,id:e},callback:function(){S.default.success("\u5220\u9664\u8bbe\u5907\u6210\u529f"),t.props.dispatch({type:"device/fetch",payload:{endpoint_id:t.props.match.params.id,query:t.state.query,started_at:t.state.started_at,ended_at:t.state.ended_at,page:t.state.page}})}})},l.handPageChange=function(e){l.handleSearch({page:e,query:l.state.query,ended_at:l.state.ended_at,started_at:l.state.started_at})},l.handleTabChange=function(e){var t=l.props.dispatch;switch(e){case"device":t(H.routerRedux.push("/access-management/endpoints/"+l.props.match.params.id+"/device"));break;case"identify":l.props.match.path.split("/")[4]!==e&&t({type:"identify/reset"}),t(H.routerRedux.push("/access-management/endpoints/"+l.props.match.params.id+"/identify"));break;case"strategy":l.props.match.path.split("/")[4]!==e&&t({type:"strategy/reset"}),t(H.routerRedux.push("/access-management/endpoints/"+l.props.match.params.id+"/strategy"));break;case"rule":l.props.match.path.split("/")[4]!==e&&t({type:"rule/reset"}),t(H.routerRedux.push("/access-management/endpoints/"+l.props.match.params.id+"/rule"))}},n=a,(0,Y.default)(l,n)}return(0,P.default)(t,e),(0,M.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch,t=this.props.match.params.id;e({type:"device/fetch",payload:{endpoint_id:t,page:1}}),e({type:"strategy/fetch",payload:{endpoint_id:t,return:"all"}}),e({type:"identify/fetch",payload:{endpoint_id:t,return:"all"}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.device,l=a.data,n=a.meta,d=a.loading,i=(t.endpoints.name,t.strategy),r=t.identify,s=this.state,p=s.modalVisible,f=s.modalEditVisible,h=s.editRecord,g=this.props.match.params.id,v=[{title:"\u8bbe\u5907\u540d\u79f0",dataIndex:"name"},{title:"\u7528\u6237\u540d",dataIndex:"username",render:function(e){return j.default.createElement(R.default,{title:e},j.default.createElement("p",null," ",e&&e.length>20?e.substring(0,20)+"...":e))}},{title:"\u8eab\u4efd",dataIndex:"principal_name"},{title:"\u7b56\u7565",dataIndex:"policy_name"},{title:"\u72b6\u6001",dataIndex:"status",render:function(e,t,a){return j.default.createElement("span",null,j.default.createElement(E.default,{status:-1===e?"error":"success"}),t.status_explain)}},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"created_at",render:function(e){return j.default.createElement("span",null,(0,$.default)(e).format("YYYY-MM-DD HH:mm:ss"))}},{title:"\u64cd\u4f5c",width:120,render:function(t,a,l){return j.default.createElement("p",null,j.default.createElement("a",{href:"javascript:;",onClick:function(){e.setState({editRecord:a,modalEditVisible:!0})}},"\u7f16\u8f91"),j.default.createElement("span",{className:"ant-divider"}),j.default.createElement(_.default,{placement:"topRight",title:"\u786e\u5b9a\u8981\u5220\u9664\u5417?",onConfirm:function(){return e.handleRemove(a.id)}},j.default.createElement("a",{href:""},"\u5220\u9664")))}}],b=[{title:"\u4e3b\u9898",dataIndex:"topic",key:"topic"},{title:"\u6743\u9650",dataIndex:"allow_publish",key:"allow_publish",render:function(e,t,a){return 1===t.allow_publish&&1===t.allow_subscribe?j.default.createElement("span",null,"\u8ba2\u9605+\u53d1\u5e03"):1===t.allow_publish?j.default.createElement("span",null,"\u53d1\u5e03"):1===t.allow_subscribe?j.default.createElement("span",null,"\u8ba2\u9605"):void 0}}],k=function(e){return j.default.createElement("div",null,j.default.createElement("p",{className:"small-table-desc"},j.default.createElement("span",null,"\u63cf\u8ff0:"),e.description),j.default.createElement(y.default,{style:{width:"300px"},size:"small",rowKey:function(e){return e.id},columns:b,dataSource:e.permissions.data,bordered:!0,pagination:!1}))};return j.default.createElement("div",null,j.default.createElement(o.default,{bordered:!1},j.default.createElement("div",{className:"tableList"},j.default.createElement("div",{className:"tableListForm"},j.default.createElement(K.default,{handleSearch:this.handleSearch,handleFormReset:this.handleFormReset})),j.default.createElement("div",{className:"tableListOperator"},j.default.createElement(m.default,{icon:"plus",type:"primary",onClick:function(){return e.handleModalVisible(!0)}},"\u6dfb\u52a0\u8bbe\u5907"),j.default.createElement(m.default,{icon:"plus",type:"primary"},"\u6279\u91cf\u6dfb\u52a0\u8bbe\u5907")),j.default.createElement(y.default,{expandedRowRender:function(e){return k(e)},loading:d,rowKey:function(e){return e.id},dataSource:l,columns:v,pagination:!1}),j.default.createElement(c.default,{showQuickJumper:!0,className:"pagination",total:n.pagination.total,current:n.pagination.current_page,pageSize:n.pagination.per_page,style:{marginTop:"10px"},onChange:this.handPageChange}))),j.default.createElement(u.default,{title:"\u521b\u5efa\u8bbe\u5907",visible:p,onOk:this.handleAdd,onCancel:function(){return e.handleModalVisible()}},j.default.createElement(W.default,{endpoint_id:g,strategy:i.data,identify:r.data,wrappedComponentRef:function(t){return e.formRef=t}})),j.default.createElement(u.default,{title:"\u4fee\u6539\u8bbe\u5907",visible:f,onOk:this.handleEdit,onCancel:function(){return e.handleModalEditVisible()}},j.default.createElement(W.default,{editRecord:h,endpoint_id:g,strategy:i.data,identify:r.data,wrappedComponentRef:function(t){return e.editFormRef=t}})))}}]),t}(N.PureComponent))||i)||i);t.default=B,e.exports=t.default},2065:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(36),d=l(n),i=a(17),r=l(i),u=a(24),s=l(u),o=a(1),p=l(o),c=a(6),f=l(c),m=a(2),h=l(m),y=a(5),g=l(y),_=a(3),v=l(_),E=a(4),b=l(E),R=a(14),k=l(R),S=a(46),C=l(S);a(37),a(18),a(23),a(15),a(47);var w=a(0),x=l(w),V=a(16),I=l(V),q=C.default.RangePicker,F=k.default.Item,M=function(e){function t(e){(0,h.default)(this,t);var a=(0,v.default)(this,(t.__proto__||(0,f.default)(t)).call(this,e));return a.handleSubmit=function(e){e.preventDefault();var t=a.props;t.dispatch;t.form.validateFields(function(e,t){if(!e){var l=t["range-time-picker"],n={query:t.query,started_at:l?(0,I.default)(l[0]).format("YYYY-MM-DD"):"",ended_at:l?(0,I.default)(l[1]).format("YYYY-MM-DD"):""};a.props.handleSearch((0,p.default)({},n,{page:1}))}})},a.handleFormReset=function(){a.props.form.resetFields(),a.props.handleFormReset()},a.state={},a}return(0,b.default)(t,e),(0,g.default)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return x.default.createElement(k.default,{onSubmit:this.handleSubmit,layout:"inline"},x.default.createElement(d.default,{gutter:{md:8,lg:24,xl:48}},x.default.createElement(F,{label:this.props.inputText?this.props.inputText:"\u540d\u79f0"},e("query")(x.default.createElement(s.default,{placeholder:"\u8bf7\u8f93\u5165"}))),x.default.createElement(F,{label:this.props.dateText?this.props.dateText:"\u521b\u5efa\u65f6\u95f4"},e("range-time-picker",{initialValue:this.props.initRange?this.props.initRange:""})(x.default.createElement(q,{allowClear:!this.props.initRange}))),x.default.createElement(F,null,x.default.createElement(r.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),x.default.createElement(r.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"))))}}]),t}(w.Component),D=k.default.create()(M);t.default=D,e.exports=t.default},2066:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(306),d=l(n),i=a(17),r=l(i),u=a(24),s=l(u),o=a(86),p=l(o),c=a(1),f=l(c),m=a(20),h=l(m),y=a(6),g=l(y),_=a(2),v=l(_),E=a(5),b=l(E),R=a(3),k=l(R),S=a(4),C=l(S),w=a(38),x=l(w),V=a(14),I=l(V);a(18),a(23),a(92),a(49),a(39),a(15);var q=a(0),F=l(q),M=a(19),D=I.default.Item,Y=x.default.Option,O=function(e){function t(e){(0,v.default)(this,t);var a=(0,k.default)(this,(t.__proto__||(0,g.default)(t)).call(this,e));return a.add=function(){a.uuid++;var e=a.props.form,t=e.getFieldValue("keys"),l=t.concat(a.uuid);e.setFieldsValue({keys:l})},a.remove=function(e){var t=a.props.form,l=t.getFieldValue("keys");t.setFieldsValue({keys:l.filter(function(t){return t!==e})})},a.handleSubmit=function(e){e.preventDefault();a.state.type;a.props.form.validateFields({force:!0},function(e,t){e||a.props.cb((0,M.convertPoliciesTopic)(t))})},a.uuid=a.props.editRecord?a.props.editRecord.permissions.data.length-1:0,a.state={},a}return(0,C.default)(t,e),(0,b.default)(t,[{key:"render",value:function(){var e=this,t=this.props.editRecord,a={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:15}}},l={wrapperCol:{xs:{span:24,offset:0},sm:{span:15,offset:5}}},n=this.props.form,d=n.getFieldDecorator,i=n.getFieldValue,u=[],o=t?t.permissions.data.length:0;if(t)for(var c in t.permissions.data)u.push(parseInt(c));d("keys",{initialValue:u});var m=i("keys"),y=m.map(function(n,i){var r=0===i?a:l,u="0";return t&&o>n&&(1===t.permissions.data[n].allow_publish&&1===t.permissions.data[n].allow_subscribe?u="2":1===t.permissions.data[n].allow_publish?u="1":1===t.permissions.data[n].allow_subscribe&&(u="0")),F.default.createElement(D,(0,f.default)({},r,{label:0===i?"\u4e3b\u9898":"",required:!0,key:n}),d("topics-"+n,{initialValue:t&&o>n?{name:t.permissions.data[n].topic,id:t.permissions.data[n].id,authority:u}:{name:"",authority:"0",id:null}})(F.default.createElement(P,null)),F.default.createElement(h.default,{style:{cursor:"pointer"},type:"minus-circle-o",onClick:function(){return e.remove(n)}}))});return F.default.createElement(I.default,{onSubmit:this.handleSubmit},F.default.createElement(D,(0,f.default)({},a,{label:F.default.createElement("span",null,"\u540d\u79f0\xa0",F.default.createElement(p.default,{title:"\u540d\u79f0\u7531\u82f1\u6587\u5b57\u6bcd\uff08a-z\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff09\u3001\u6570\u5b57\uff080-9\uff09\u3001\u4e0b\u5212\u7ebf\u201c_\u201d\u4ee5\u53ca\u8fde\u5b57\u7b26\u201c-\u201d\uff08\u5373\u4e2d\u6a2a\u7ebf\uff09\u6784\u6210\uff0c\u4e0d\u80fd\u4f7f\u7528\u7a7a\u683c\u53ca\u7279\u6b8a\u5b57\u7b26\uff08\u5982\uff01\u3001$\u3001&\u3001?\u7b49\uff09\u3002\u201c-\u201d \u4e0d\u80fd\u5355\u72ec\u6216\u8fde\u7eed\u4f7f\u7528\uff0c\u4e0d\u80fd\u653e\u5728\u5f00\u5934\u6216\u7ed3\u5c3e\u3002"},F.default.createElement(h.default,{type:"question-circle-o"})))}),d("name",{initialValue:this.props.editRecord?this.props.editRecord.name:"",rules:[{required:!0,message:"\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}]})(F.default.createElement(s.default,{disabled:!!this.props.editRecord}))),y,F.default.createElement(D,l,F.default.createElement(r.default,{type:"primary",onClick:this.add,style:{width:"100%"}},F.default.createElement(h.default,{type:"plus"})," \u589e\u52a0\u4e3b\u9898")),this.props.addInDevice?F.default.createElement(D,{wrapperCol:{offset:13}},F.default.createElement(r.default,{style:{marginRight:"10px"},onClick:this.props.cancel},"\u53d6\u6d88"),F.default.createElement(r.default,{type:"primary",htmlType:"submit"},"\u786e\u5b9a")):null)}}]),t}(q.Component),P=function(e){function t(e){(0,v.default)(this,t);var a=(0,k.default)(this,(t.__proto__||(0,g.default)(t)).call(this,e));a.handleNumberChange=function(e){var t=e.target.value;"value"in a.props||a.setState({name:t}),a.triggerChange({name:t})},a.handleCurrencyChange=function(e){"value"in a.props||a.setState({authority:e}),a.triggerChange({authority:e})},a.triggerChange=function(e){var t=a.props.onChange;t&&t((0,d.default)({},a.state,e))};var l=a.props.value||{};return a.state={name:l.name||"",authority:l.authority||"0"},a}return(0,C.default)(t,e),(0,b.default)(t,[{key:"componentWillReceiveProps",value:function(e){if("value"in e){var t=e.value;this.setState(t)}}},{key:"render",value:function(){var e=this.props.size,t=this.state;return F.default.createElement("span",null,F.default.createElement(s.default,{type:"text",size:e,value:t.name,onChange:this.handleNumberChange,style:{width:"45%",marginRight:"3%"}}),F.default.createElement(s.default,{type:"hidden"}),F.default.createElement(x.default,{value:t.authority,size:e,style:{width:"45%",marginRight:"2%"},onChange:this.handleCurrencyChange},F.default.createElement(Y,{value:"0"},"\u8ba2\u9605"),F.default.createElement(Y,{value:"1"},"\u53d1\u5e03"),F.default.createElement(Y,{value:"2"},"\u8ba2\u9605+\u53d1\u5e03")))}}]),t}(F.default.Component),T=I.default.create()(O);t.default=T,e.exports=t.default},2067:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(17),d=l(n),i=a(24),r=l(i),u=a(86),s=l(u),o=a(20),p=l(o),c=a(26),f=l(c),m=a(1),h=l(m),y=a(6),g=l(y),_=a(2),v=l(_),E=a(5),b=l(E),R=a(3),k=l(R),S=a(4),C=l(S),w=a(38),x=l(w),V=a(14),I=l(V);a(18),a(23),a(92),a(49),a(27),a(39),a(15);var q=a(0),F=l(q),M=a(2066),D=l(M),Y=a(8),O=I.default.Item,P=x.default.Option,T=function(e){function t(e){(0,v.default)(this,t);var a=(0,k.default)(this,(t.__proto__||(0,g.default)(t)).call(this,e));return a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields({force:!0},function(e,t){e||a.props.cb({name:t.name,policy_id:t.policy_id.key})})},a.handleChange=function(e){console.log(e),"newStrategy"===(e?e.key:"")?a.setState({newStrategy:!0}):a.setState({newStrategy:!1})},a.addStrategy=function(e){var t=a,l=a.props,n=l.form,d=l.dispatch,i=l.endpoint_id;d({type:"strategy/add",payload:{data:(0,h.default)({},e,{endpoint_id:i})},callback:function(e){f.default.success("\u6dfb\u52a0\u7b56\u7565\u6210\u529f"),d({type:"strategy/fetch",payload:{endpoint_id:i,return:"all"}}),n.setFieldsValue({policy_id:{key:e.id.toString(),label:e.name}}),t.setState({newStrategy:!1})}})},a.cancel=function(){a.setState({newStrategy:!1})},a.state={newStrategy:!1},a}return(0,C.default)(t,e),(0,b.default)(t,[{key:"render",value:function(){var e=this,t={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:15}}},a=this.props.form,l=a.getFieldDecorator;a.getFieldValue;return console.log("addInDevice",this.props.addInDevice),F.default.createElement("div",null,F.default.createElement(I.default,{onSubmit:this.handleSubmit},F.default.createElement(O,(0,h.default)({},t,{label:F.default.createElement("span",null,"\u540d\u79f0\xa0",F.default.createElement(s.default,{title:"\u540d\u79f0\u7531\u82f1\u6587\u5b57\u6bcd\uff08a-z\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff09\u3001\u6570\u5b57\uff080-9\uff09\u3001\u4e0b\u5212\u7ebf\u201c_\u201d\u4ee5\u53ca\u8fde\u5b57\u7b26\u201c-\u201d\uff08\u5373\u4e2d\u6a2a\u7ebf\uff09\u6784\u6210\uff0c\u4e0d\u80fd\u4f7f\u7528\u7a7a\u683c\u53ca\u7279\u6b8a\u5b57\u7b26\uff08\u5982\uff01\u3001$\u3001&\u3001?\u7b49\uff09\u3002\u201c-\u201d \u4e0d\u80fd\u5355\u72ec\u6216\u8fde\u7eed\u4f7f\u7528\uff0c\u4e0d\u80fd\u653e\u5728\u5f00\u5934\u6216\u7ed3\u5c3e\u3002"},F.default.createElement(p.default,{type:"question-circle-o"})))}),l("name",{initialValue:this.props.editRecord?this.props.editRecord.name:"",rules:[{required:!0,message:"\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}]})(F.default.createElement(r.default,{disabled:!!this.props.editRecord}))),this.props.addInDevice?F.default.createElement(O,(0,h.default)({label:"\u7b56\u7565"},t),l("policy_id",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7b56\u7565"}],onChange:this.handleChange})(F.default.createElement(x.default,{labelInValue:!0},F.default.createElement(P,{value:"newStrategy"},"\u65b0\u5efa"),this.props.strategy.map(function(e,t){return F.default.createElement(P,{key:e.id,value:e.id.toString()},e.name)})))):F.default.createElement(O,(0,h.default)({label:"\u7b56\u7565"},t),l("policy_id",{initialValue:this.props.editRecord?{key:this.props.editRecord.policy_id.toString(),label:this.props.editRecord.policy_name}:{key:"",label:""},rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7b56\u7565"}]})(F.default.createElement(x.default,{labelInValue:!0},this.props.strategy.map(function(e,t){return F.default.createElement(P,{key:e.id,value:e.id.toString()},e.name)})))),this.props.addInDevice&&!this.state.newStrategy?F.default.createElement(O,{wrapperCol:{offset:13}},F.default.createElement(d.default,{style:{marginRight:"10px"},onClick:this.props.cancel},"\u53d6\u6d88"),F.default.createElement(d.default,{type:"primary",htmlType:"submit"},"\u786e\u5b9a")):null),function(){return e.state.newStrategy?F.default.createElement("fieldset",null,F.default.createElement("legend",null,F.default.createElement(p.default,{type:"plus-square"}),"\u65b0\u5efa\u7b56\u7565"),F.default.createElement(D.default,{cancel:e.cancel,cb:e.addStrategy,addInDevice:!0})):null}())}}]),t}(q.Component),z=I.default.create()(T);t.default=(0,Y.connect)()(z),e.exports=t.default},2068:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(24),d=l(n),i=a(86),r=l(i),u=a(20),s=l(u),o=a(26),p=l(o),c=a(1),f=l(c),m=a(6),h=l(m),y=a(2),g=l(y),_=a(5),v=l(_),E=a(3),b=l(E),R=a(4),k=l(R),S=a(38),C=l(S),w=a(14),x=l(w);a(23),a(92),a(49),a(27),a(39),a(15);var V=a(0),I=l(V),q=a(2067),F=l(q),M=a(8),D=x.default.Item,Y=C.default.Option,O=function(e){function t(e){(0,g.default)(this,t);var a=(0,b.default)(this,(t.__proto__||(0,h.default)(t)).call(this,e));return a.handleChange=function(e){"newIdentify"===(e?e.key:"")?a.setState({newIdentify:!0}):a.setState({newIdentify:!1})},a.addIdentify=function(e){console.log("values",e);var t=a,l=a.props,n=l.form,d=l.dispatch,i=l.endpoint_id;d({type:"identify/add",payload:{data:(0,f.default)({},e,{endpoint_id:i})},callback:function(e){p.default.success("\u6dfb\u52a0\u8eab\u4efd\u6210\u529f"),d({type:"identify/fetch",payload:{endpoint_id:i,return:"all"}}),n.setFieldsValue({identify:{key:e.id.toString(),label:e.name}}),t.setState({newIdentify:!1})}})},a.cancel=function(){a.setState({newIdentify:!1})},a.state={newIdentify:!1},a}return(0,k.default)(t,e),(0,v.default)(t,[{key:"render",value:function(){var e=this,t={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:15}}},a=this.props.form.getFieldDecorator;return I.default.createElement("div",null,I.default.createElement(x.default,{onSubmit:this.handleSubmit},I.default.createElement(D,(0,f.default)({label:I.default.createElement("span",null,"\u540d\u79f0\xa0",I.default.createElement(r.default,{title:"\u540d\u79f0\u7531\u82f1\u6587\u5b57\u6bcd\uff08a-z\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff09\u3001\u6570\u5b57\uff080-9\uff09\u3001\u4e0b\u5212\u7ebf\u201c_\u201d\u4ee5\u53ca\u8fde\u5b57\u7b26\u201c-\u201d\uff08\u5373\u4e2d\u6a2a\u7ebf\uff09\u6784\u6210\uff0c\u4e0d\u80fd\u4f7f\u7528\u7a7a\u683c\u53ca\u7279\u6b8a\u5b57\u7b26\uff08\u5982\uff01\u3001$\u3001&\u3001?\u7b49\uff09\u3002\u201c-\u201d \u4e0d\u80fd\u5355\u72ec\u6216\u8fde\u7eed\u4f7f\u7528\uff0c\u4e0d\u80fd\u653e\u5728\u5f00\u5934\u6216\u7ed3\u5c3e\u3002"},I.default.createElement(s.default,{type:"question-circle-o"})))},t),a("name",{rules:[{required:!0,message:"\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}],initialValue:this.props.editRecord?this.props.editRecord.name:""})(I.default.createElement(d.default,{disabled:!!this.props.editRecord}))),I.default.createElement(D,(0,f.default)({label:"\u63cf\u8ff0"},t),a("description",{initialValue:this.props.editRecord?this.props.editRecord.description:""})(I.default.createElement(d.default,{type:"textarea",autosize:{minRows:2,maxRows:6}}))),I.default.createElement(D,(0,f.default)({},t,{label:"\u8eab\u4efd"}),a("identify",{onChange:this.handleChange,initialValue:this.props.editRecord?{key:this.props.editRecord.principal_id.toString(),label:this.props.editRecord.principal_name}:{key:"",label:""},rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8eab\u4efd"}]})(I.default.createElement(C.default,{labelInValue:!0},I.default.createElement(Y,{value:"newIdentify"},"\u65b0\u5efa"),this.props.identify.map(function(e){return I.default.createElement(Y,{key:e.id,value:e.id},e.name)}))))),function(){return e.state.newIdentify?I.default.createElement("fieldset",null,I.default.createElement("legend",null,I.default.createElement(s.default,{type:"plus-square"}),"\u65b0\u5efa\u8eab\u4efd"),I.default.createElement(F.default,{cancel:e.cancel,cb:e.addIdentify,endpoint_id:e.props.endpoint_id,strategy:e.props.strategy,addInDevice:!0})):null}())}}]),t}(V.Component),P=x.default.create()(O);t.default=(0,M.connect)()(P),e.exports=t.default}});