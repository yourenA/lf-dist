webpackJsonp([2],{2059:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,r,d,i=a(40),s=n(i),u=a(31),o=n(u),p=a(240),c=n(p),f=a(17),m=n(f),h=a(89),y=n(h),g=a(66),v=n(g),_=a(86),b=n(_),E=a(26),R=n(E),k=a(1),C=n(k),w=a(6),V=n(w),S=a(2),x=n(S),F=a(5),q=n(F),M=a(3),D=n(M),I=a(4),P=n(I),T=a(14),Y=n(T);a(41),a(32),a(241),a(18),a(90),a(67),a(92),a(27),a(15);var N=a(0),O=n(N),z=a(8),j=a(45),A=a(2066),L=n(A),K=a(2065),J=n(K),Q=a(19),W=(l=(0,z.connect)(function(e){return{endpoints:e.endpoints,strategy:e.strategy}}),r=Y.default.create(),l(d=r(d=function(e){function t(){var e,a,n,l;(0,x.default)(this,t);for(var r=arguments.length,d=Array(r),i=0;i<r;i++)d[i]=arguments[i];return a=n=(0,D.default)(this,(e=t.__proto__||(0,V.default)(t)).call.apply(e,[this].concat(d))),n.state={addInputValue:"",modalVisible:!1,modalEditVisible:!1,editRecord:{},query:"",page:1,started_at:"",ended_at:""},n.handleFormReset=function(){(0,n.props.dispatch)({type:"strategy/fetch",payload:{endpoint_id:n.props.match.params.id}}),n.setState({page:1,query:"",started_at:"",ended_at:""})},n.handleSearch=function(e){(0,n.props.dispatch)({type:"strategy/fetch",payload:(0,C.default)({endpoint_id:n.props.match.params.id},e)}),n.setState({query:e.query,started_at:e.started_at,ended_at:e.ended_at,page:e.page})},n.handleModalVisible=function(e){n.setState({modalVisible:!!e})},n.handleModalEditVisible=function(e){n.setState({modalEditVisible:!!e})},n.handleAddInput=function(e){n.setState({addInputValue:e.target.value})},n.handleAdd=function(){var e=n,t=(0,Q.convertPoliciesTopic)(n.formRef.props.form.getFieldsValue());console.log("formValues",t),n.props.dispatch({type:"strategy/add",payload:{data:(0,C.default)({},t,{endpoint_id:n.props.match.params.id})},callback:function(){R.default.success("\u6dfb\u52a0\u7b56\u7565\u6210\u529f"),e.setState({modalVisible:!1}),e.props.dispatch({type:"strategy/fetch",payload:{endpoint_id:e.props.match.params.id,query:e.state.query,started_at:e.state.started_at,ended_at:e.state.ended_at,page:e.state.page}})}})},n.handleEdit=function(){var e=n,t=(0,Q.convertPoliciesTopic)(n.editFormRef.props.form.getFieldsValue());console.log("formValues",t),n.props.dispatch({type:"strategy/edit",payload:{data:(0,C.default)({endpoint_id:n.props.match.params.id,id:n.state.editRecord.id},t)},callback:function(){R.default.success("\u4fee\u6539\u7b56\u7565\u6210\u529f"),e.setState({modalEditVisible:!1}),e.props.dispatch({type:"strategy/fetch",payload:{endpoint_id:e.props.match.params.id,query:e.state.query,started_at:e.state.started_at,ended_at:e.state.ended_at,page:e.state.page}})}})},n.handleRemove=function(e){var t=n;n.props.dispatch({type:"strategy/remove",payload:{endpoint_id:n.props.match.params.id,id:e},callback:function(){R.default.success("\u5220\u9664\u7b56\u7565\u6210\u529f"),t.props.dispatch({type:"strategy/fetch",payload:{endpoint_id:t.props.match.params.id,query:t.state.query,started_at:t.state.started_at,ended_at:t.state.ended_at,page:t.state.page}})}})},n.handPageChange=function(e){n.handleSearch({page:e,query:n.state.query,ended_at:n.state.ended_at,started_at:n.state.started_at})},n.handleTabChange=function(e){var t=n.props.dispatch;switch(e){case"device":t(j.routerRedux.push("/access-management/endpoints/"+n.props.match.params.id+"/device"));break;case"identify":n.props.match.path.split("/")[4]!==e&&t({type:"identify/reset"}),t(j.routerRedux.push("/access-management/endpoints/"+n.props.match.params.id+"/identify"));break;case"strategy":n.props.match.path.split("/")[4]!==e&&t({type:"strategy/reset"}),t(j.routerRedux.push("/access-management/endpoints/"+n.props.match.params.id+"/strategy"));break;case"rule":n.props.match.path.split("/")[4]!==e&&t({type:"rule/reset"}),t(j.routerRedux.push("/access-management/endpoints/"+n.props.match.params.id+"/rule"))}},l=a,(0,D.default)(n,l)}return(0,P.default)(t,e),(0,q.default)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)({type:"strategy/fetch",payload:{endpoint_id:this.props.match.params.id,page:1}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.strategy,n=a.data,l=a.meta,r=a.loading,d=(t.endpoints.name,this.state),i=d.modalVisible,u=(d.selectedRowKeys,d.modalEditVisible),p=d.editRecord,f=[{title:"\u540d\u79f0",dataIndex:"name"},{title:"\u8bbe\u5907\u6570",dataIndex:"things_count"},{title:"\u4e3b\u9898",dataIndex:"description",render:function(e,t,a){var n="";return t.permissions.data.map(function(e,t){n=n+e.topic+"\t"}),O.default.createElement(b.default,{title:n},n&&n.length>30?n.substring(0,30)+"...":n)}},{title:"\u64cd\u4f5c",width:120,render:function(t,a,n){return O.default.createElement("p",null,O.default.createElement("a",{href:"javascript:;",onClick:function(){e.setState({editRecord:a,modalEditVisible:!0})}},"\u7f16\u8f91"),O.default.createElement("span",{className:"ant-divider"}),O.default.createElement(v.default,{placement:"topRight",title:"\u786e\u5b9a\u8981\u5220\u9664\u5417?",onConfirm:function(){return e.handleRemove(a.id)}},O.default.createElement("a",{href:""},"\u5220\u9664")))}}],h=[{title:"\u4e3b\u9898",dataIndex:"topic",key:"topic"},{title:"\u6743\u9650",dataIndex:"allow_publish",key:"allow_publish",render:function(e,t,a){return 1===t.allow_publish&&1===t.allow_subscribe?O.default.createElement("span",null,"\u8ba2\u9605+\u53d1\u5e03"):1===t.allow_publish?O.default.createElement("span",null,"\u53d1\u5e03"):1===t.allow_subscribe?O.default.createElement("span",null,"\u8ba2\u9605"):void 0}}],g=function(e){return O.default.createElement(y.default,{style:{width:"300px"},size:"small",rowKey:function(e){return e.id},columns:h,dataSource:e.permissions.data,bordered:!0,pagination:!1})};return O.default.createElement("div",null,O.default.createElement(o.default,{bordered:!1},O.default.createElement("div",{className:"tableList"},O.default.createElement("div",{className:"tableListForm"},O.default.createElement(J.default,{handleSearch:this.handleSearch,handleFormReset:this.handleFormReset})),O.default.createElement("div",{className:"tableListOperator"},O.default.createElement(m.default,{icon:"plus",type:"primary",onClick:function(){return e.handleModalVisible(!0)}},"\u521b\u5efa\u7b56\u7565")),O.default.createElement(y.default,{expandedRowRender:function(e){return g(e)},loading:r,rowKey:function(e){return e.id},dataSource:n,columns:f,pagination:!1}),O.default.createElement(c.default,{showQuickJumper:!0,className:"pagination",total:l.pagination.total,current:l.pagination.current_page,pageSize:l.pagination.per_page,onChange:this.handPageChange}))),O.default.createElement(s.default,{title:"\u521b\u5efa\u7b56\u7565",visible:i,onOk:this.handleAdd,onCancel:function(){return e.handleModalVisible()}},O.default.createElement(L.default,{wrappedComponentRef:function(t){return e.formRef=t}})),O.default.createElement(s.default,{key:Date.parse(new Date),title:"\u4fee\u6539\u7b56\u7565",visible:u,onOk:this.handleEdit,onCancel:function(){return e.handleModalEditVisible()}},O.default.createElement(L.default,{wrappedComponentRef:function(t){return e.editFormRef=t},editRecord:p})))}}]),t}(N.PureComponent))||d)||d);t.default=W,e.exports=t.default},2065:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(36),r=n(l),d=a(17),i=n(d),s=a(24),u=n(s),o=a(1),p=n(o),c=a(6),f=n(c),m=a(2),h=n(m),y=a(5),g=n(y),v=a(3),_=n(v),b=a(4),E=n(b),R=a(14),k=n(R),C=a(46),w=n(C);a(37),a(18),a(23),a(15),a(47);var V=a(0),S=n(V),x=a(16),F=n(x),q=w.default.RangePicker,M=k.default.Item,D=function(e){function t(e){(0,h.default)(this,t);var a=(0,_.default)(this,(t.__proto__||(0,f.default)(t)).call(this,e));return a.handleSubmit=function(e){e.preventDefault();var t=a.props;t.dispatch;t.form.validateFields(function(e,t){if(!e){var n=t["range-time-picker"],l={query:t.query,started_at:n?(0,F.default)(n[0]).format("YYYY-MM-DD"):"",ended_at:n?(0,F.default)(n[1]).format("YYYY-MM-DD"):""};a.props.handleSearch((0,p.default)({},l,{page:1}))}})},a.handleFormReset=function(){a.props.form.resetFields(),a.props.handleFormReset()},a.state={},a}return(0,E.default)(t,e),(0,g.default)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return S.default.createElement(k.default,{onSubmit:this.handleSubmit,layout:"inline"},S.default.createElement(r.default,{gutter:{md:8,lg:24,xl:48}},S.default.createElement(M,{label:this.props.inputText?this.props.inputText:"\u540d\u79f0"},e("query")(S.default.createElement(u.default,{placeholder:"\u8bf7\u8f93\u5165"}))),S.default.createElement(M,{label:this.props.dateText?this.props.dateText:"\u521b\u5efa\u65f6\u95f4"},e("range-time-picker",{initialValue:this.props.initRange?this.props.initRange:""})(S.default.createElement(q,{allowClear:!this.props.initRange}))),S.default.createElement(M,null,S.default.createElement(i.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),S.default.createElement(i.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"))))}}]),t}(V.Component),I=k.default.create()(D);t.default=I,e.exports=t.default},2066:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(306),r=n(l),d=a(17),i=n(d),s=a(24),u=n(s),o=a(86),p=n(o),c=a(1),f=n(c),m=a(20),h=n(m),y=a(6),g=n(y),v=a(2),_=n(v),b=a(5),E=n(b),R=a(3),k=n(R),C=a(4),w=n(C),V=a(38),S=n(V),x=a(14),F=n(x);a(18),a(23),a(92),a(49),a(39),a(15);var q=a(0),M=n(q),D=a(19),I=F.default.Item,P=S.default.Option,T=function(e){function t(e){(0,_.default)(this,t);var a=(0,k.default)(this,(t.__proto__||(0,g.default)(t)).call(this,e));return a.add=function(){a.uuid++;var e=a.props.form,t=e.getFieldValue("keys"),n=t.concat(a.uuid);e.setFieldsValue({keys:n})},a.remove=function(e){var t=a.props.form,n=t.getFieldValue("keys");t.setFieldsValue({keys:n.filter(function(t){return t!==e})})},a.handleSubmit=function(e){e.preventDefault();a.state.type;a.props.form.validateFields({force:!0},function(e,t){e||a.props.cb((0,D.convertPoliciesTopic)(t))})},a.uuid=a.props.editRecord?a.props.editRecord.permissions.data.length-1:0,a.state={},a}return(0,w.default)(t,e),(0,E.default)(t,[{key:"render",value:function(){var e=this,t=this.props.editRecord,a={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:15}}},n={wrapperCol:{xs:{span:24,offset:0},sm:{span:15,offset:5}}},l=this.props.form,r=l.getFieldDecorator,d=l.getFieldValue,s=[],o=t?t.permissions.data.length:0;if(t)for(var c in t.permissions.data)s.push(parseInt(c));r("keys",{initialValue:s});var m=d("keys"),y=m.map(function(l,d){var i=0===d?a:n,s="0";return t&&o>l&&(1===t.permissions.data[l].allow_publish&&1===t.permissions.data[l].allow_subscribe?s="2":1===t.permissions.data[l].allow_publish?s="1":1===t.permissions.data[l].allow_subscribe&&(s="0")),M.default.createElement(I,(0,f.default)({},i,{label:0===d?"\u4e3b\u9898":"",required:!0,key:l}),r("topics-"+l,{initialValue:t&&o>l?{name:t.permissions.data[l].topic,id:t.permissions.data[l].id,authority:s}:{name:"",authority:"0",id:null}})(M.default.createElement(Y,null)),M.default.createElement(h.default,{style:{cursor:"pointer"},type:"minus-circle-o",onClick:function(){return e.remove(l)}}))});return M.default.createElement(F.default,{onSubmit:this.handleSubmit},M.default.createElement(I,(0,f.default)({},a,{label:M.default.createElement("span",null,"\u540d\u79f0\xa0",M.default.createElement(p.default,{title:"\u540d\u79f0\u7531\u82f1\u6587\u5b57\u6bcd\uff08a-z\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff09\u3001\u6570\u5b57\uff080-9\uff09\u3001\u4e0b\u5212\u7ebf\u201c_\u201d\u4ee5\u53ca\u8fde\u5b57\u7b26\u201c-\u201d\uff08\u5373\u4e2d\u6a2a\u7ebf\uff09\u6784\u6210\uff0c\u4e0d\u80fd\u4f7f\u7528\u7a7a\u683c\u53ca\u7279\u6b8a\u5b57\u7b26\uff08\u5982\uff01\u3001$\u3001&\u3001?\u7b49\uff09\u3002\u201c-\u201d \u4e0d\u80fd\u5355\u72ec\u6216\u8fde\u7eed\u4f7f\u7528\uff0c\u4e0d\u80fd\u653e\u5728\u5f00\u5934\u6216\u7ed3\u5c3e\u3002"},M.default.createElement(h.default,{type:"question-circle-o"})))}),r("name",{initialValue:this.props.editRecord?this.props.editRecord.name:"",rules:[{required:!0,message:"\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}]})(M.default.createElement(u.default,{disabled:!!this.props.editRecord}))),y,M.default.createElement(I,n,M.default.createElement(i.default,{type:"primary",onClick:this.add,style:{width:"100%"}},M.default.createElement(h.default,{type:"plus"})," \u589e\u52a0\u4e3b\u9898")),this.props.addInDevice?M.default.createElement(I,{wrapperCol:{offset:13}},M.default.createElement(i.default,{style:{marginRight:"10px"},onClick:this.props.cancel},"\u53d6\u6d88"),M.default.createElement(i.default,{type:"primary",htmlType:"submit"},"\u786e\u5b9a")):null)}}]),t}(q.Component),Y=function(e){function t(e){(0,_.default)(this,t);var a=(0,k.default)(this,(t.__proto__||(0,g.default)(t)).call(this,e));a.handleNumberChange=function(e){var t=e.target.value;"value"in a.props||a.setState({name:t}),a.triggerChange({name:t})},a.handleCurrencyChange=function(e){"value"in a.props||a.setState({authority:e}),a.triggerChange({authority:e})},a.triggerChange=function(e){var t=a.props.onChange;t&&t((0,r.default)({},a.state,e))};var n=a.props.value||{};return a.state={name:n.name||"",authority:n.authority||"0"},a}return(0,w.default)(t,e),(0,E.default)(t,[{key:"componentWillReceiveProps",value:function(e){if("value"in e){var t=e.value;this.setState(t)}}},{key:"render",value:function(){var e=this.props.size,t=this.state;return M.default.createElement("span",null,M.default.createElement(u.default,{type:"text",size:e,value:t.name,onChange:this.handleNumberChange,style:{width:"45%",marginRight:"3%"}}),M.default.createElement(u.default,{type:"hidden"}),M.default.createElement(S.default,{value:t.authority,size:e,style:{width:"45%",marginRight:"2%"},onChange:this.handleCurrencyChange},M.default.createElement(P,{value:"0"},"\u8ba2\u9605"),M.default.createElement(P,{value:"1"},"\u53d1\u5e03"),M.default.createElement(P,{value:"2"},"\u8ba2\u9605+\u53d1\u5e03")))}}]),t}(M.default.Component),N=F.default.create()(T);t.default=N,e.exports=t.default}});