webpackJsonp([4],{1697:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l,s,r=a(12),u=n(r),o=a(24),i=n(o),d=a(16),c=n(d),h=a(20),p=n(h),f=a(199),m=n(f),g=a(15),k=n(g),C=a(37),v=n(C),y=a(62),L=n(y),w=a(1),E=n(w),A=a(6),b=n(A),S=a(2),I=n(S),N=a(5),_=n(N),M=a(3),x=n(M),R=a(4),G=n(R);a(13),a(25),a(17),a(19),a(200),a(38);var D=a(0),O=n(D),F=a(10),V=a(29),X=a(18),j=n(X),q=a(605),z=n(q),J=a(131),P=n(J),T=m.default.Group,B=u.default.Item,H=(l=(0,F.connect)(function(e){return{usergroup:e.usergroup}}))(s=function(e){function t(e){(0,I.default)(this,t);var a=(0,x.default)(this,(t.__proto__||(0,b.default)(t)).call(this,e));return a.handleSubmit=function(e){e.preventDefault();var t=a,n=a.props.match.params.id;a.props.form.validateFields({force:!0},function(e,l){if(!e){console.log(l);var s=a.isNew?"usergroup/add":"usergroup/edit",r=a.isNew?"\u521b\u5efa\u7528\u6237\u7ec4\u6210\u529f":"\u4fee\u6539\u7528\u6237\u7ec4\u6210\u529f",u=a.isNew?(0,E.default)({permissions:a.state.otherCheckedList.concat(a.state.userManageCheckedList)},l):(0,E.default)({id:n,permissions:a.state.otherCheckedList.concat(a.state.userManageCheckedList)},l);a.props.dispatch({type:s,payload:{data:u},callback:function(){v.default.success(r),t.props.dispatch(V.routerRedux.replace("/system-management/usergroup"))}})}})},a.handleSubmit2=function(e){e.preventDefault();var t=a,n=a.props.match.params.id;a.props.form.validateFields({force:!0},function(e,l){if(!e){console.log(l);var s=a.isNew?"usergroup/add":"usergroup/edit",r=a.isNew?"\u521b\u5efa\u7528\u6237\u7ec4\u6210\u529f":"\u4fee\u6539\u7528\u6237\u7ec4\u6210\u529f",u=[];(0,P.default)(t.state.group,function(e,a){u.push.apply(u,(0,L.default)(t.state[a+"CheckedList"]))}),console.log("permissions",u);var o=a.isNew?(0,E.default)({permissions:u},l):(0,E.default)({id:n,permissions:u},l);a.props.dispatch({type:s,payload:{data:o},callback:function(){v.default.success(r),t.props.dispatch(V.routerRedux.replace("/system-management/usergroup"))}})}})},a.onChange=function(e){a.setState({userManageCheckedList:e,userIndeterminate:!!e.length&&e.length<a.state.userManage.length,checkAll:e.length===a.state.userManage.length})},a.onChange2=function(e,t){var n;console.log(e),console.log(t),a.setState((n={},(0,k.default)(n,t+"CheckedList",e),(0,k.default)(n,t+"Indeterminate",!!e.length&&e.length<a.state[t].length),(0,k.default)(n,t+"CheckAll",e.length===a.state[t].length),n))},a.onCheckAllChange2=function(e,t){var n;a.setState((n={},(0,k.default)(n,t+"CheckedList",e.target.checked?a.state[t].map(function(e,t){return e.value}):[]),(0,k.default)(n,t+"Indeterminate",!1),(0,k.default)(n,t+"CheckAll",e.target.checked),n))},a.onCheckAllChange=function(e){a.setState({userManageCheckedList:e.target.checked?a.state.userManage.map(function(e,t){return e.value}):[],userIndeterminate:!1,checkAll:e.target.checked})},a.onChangeOther=function(e){a.setState({otherCheckedList:e,otherIndeterminate:!!e.length&&e.length<a.state.other.length,otherCheckAll:e.length===a.state.other.length})},a.onCheckAllChangeOther=function(e){a.setState({otherCheckedList:e.target.checked?a.state.other.map(function(e,t){return e.value}):[],otherIndeterminate:!1,otherCheckAll:e.target.checked})},a.renderXheckGroup=function(e){var t=a,n={wrapperCol:{xs:{span:24},sm:{offset:5,span:15}}},l=[];return(0,P.default)(e,function(e,a){l.push(O.default.createElement(B,(0,E.default)({key:a},n),O.default.createElement("div",{className:"checkgroup-title"},O.default.createElement(m.default,{indeterminate:t.state[a+"Indeterminate"],onChange:function(e){return t.onCheckAllChange2(e,a)},checked:t.state[a+"CheckAll"]},a)),O.default.createElement(T,{options:t.state[a],value:t.state[a+"CheckedList"],onChange:function(e){return t.onChange2(e,a)}})))}),l},a.uuid=0,a.isNew="add"===a.props.match.params.id,a.state={userManageCheckedList:[],villageCheckedList:[],otherCheckedList:[],other:[],userManage:[],village:[],userIndeterminate:!1,otherIndeterminate:!1,villageIndeterminate:!1,checkAll:!1,otherCheckAll:!1,villageCheckAll:!1,editRecord:{},"\u4f60\u597d\u8bc4":"234",group:{}},a}return(0,G.default)(t,e),(0,_.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch,t=this.props.match.params.id,a=this;(0,j.default)("/permissions",{method:"GET",params:{return:"all",type:"only_company"}}).then(function(n){console.log("response",n);var l=(0,z.default)(n.data.data,"group");console.log("group",l),(0,P.default)(l,function(e,t){var n;a.setState((0,k.default)({},t,e.reduce(function(e,t){return t.label=t.display_name,t.value=t.name,e.push({label:t.display_name,value:t.name}),e},[]))),a.setState((n={},(0,k.default)(n,t+"CheckedList",[]),(0,k.default)(n,t+"Indeterminate",!1),(0,k.default)(n,t+"CheckAll",!1),n))}),a.setState({group:l},function(){this.isNew?console.log("\u65b0\u5efa\u7528\u6237\u7ec4"):(console.log("\u4fee\u6539\u7528\u6237\u7ec4"),e({type:"usergroup/fetchOneusergroup",payload:{id:t},callback:function(){var e=a.props.usergroup.editRecord,t=(0,z.default)(e.permissions.data,"group");console.log("selectGroup",t),(0,P.default)(t,function(e,t){a.setState((0,k.default)({},t+"CheckedList",e.reduce(function(e,t){return e.push(t.name),e},[])),function(){var e;a.setState((e={},(0,k.default)(e,t+"Indeterminate",!!this.state[t+"CheckedList"].length&&this.state[t+"CheckedList"].length<this.state[t].length),(0,k.default)(e,t+"CheckAll",this.state[t+"CheckedList"].length===this.state[t].length),e))})})}}))})})}},{key:"render",value:function(){var e=this,t={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:15}}},a=this.props.form.getFieldDecorator,n=this.props.usergroup.editRecord;return O.default.createElement("div",null,O.default.createElement(i.default,{bordered:!1},O.default.createElement(u.default,null,O.default.createElement("h3",{className:"form-title"},"\u57fa\u672c\u4fe1\u606f"),O.default.createElement(B,(0,E.default)({},t,{label:"\u540d\u79f0"}),a("display_name",{initialValue:this.isNew?"":n.display_name,rules:[{required:!0,message:"\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}]})(O.default.createElement(p.default,{disabled:!!this.props.editRecord}))),O.default.createElement(B,(0,E.default)({label:"\u63cf\u8ff0"},t),a("description",{initialValue:this.isNew?"":n.description})(O.default.createElement(p.default,{type:"textarea",autosize:{minRows:2,maxRows:6}}))),O.default.createElement("h3",{className:"form-title"},"\u6743\u9650\u4fe1\u606f"),this.renderXheckGroup(this.state.group),O.default.createElement(B,{wrapperCol:{offset:7,span:10}},O.default.createElement(c.default,{style:{marginRight:"10px",width:"40%"},onClick:function(){e.props.dispatch(V.routerRedux.replace("/system-management/usergroup"))}},"\u53d6\u6d88"),O.default.createElement(c.default,{style:{width:"40%"},type:"primary",onClick:this.handleSubmit2},"\u786e\u5b9a")))))}}]),t}(D.Component))||s,K=u.default.create()(H);t.default=(0,F.connect)()(K),e.exports=t.default}});