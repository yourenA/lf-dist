webpackJsonp([58],{1538:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i,l,d=a(337),c=n(d),A=a(1),o=n(A),M=a(23),m=n(M),r=a(6),u=n(r),I=a(14),s=n(I),b=a(8),N=n(b),p=a(9),Z=n(p),h=a(167),g=n(h);a(338),a(168);var T=a(0),D=n(T),w=a(217),Y=n(w),G=a(1670),E=n(G),R=a(41),z=a(169),S=n(z),v=a(2452),W=n(v),j=a(2453),O=n(j),Q=a(2454),L=n(Q),B=a(55),k=g.default.Content,C=(i=(0,R.connect)(function(e){return{concentrator_maps:e.concentrator_maps}}),(0,B.injectIntl)(l=i(l=function(e){function t(e){(0,u.default)(this,t);var a=(0,N.default)(this,(t.__proto__||(0,m.default)(t)).call(this,e));return a.changeArea=function(e){a.setState({showAddBtnByCon:!1,village_id:e},function(){this.handleSearch({return:"all"})})},a.changeConcentrator=function(e,t){a.setState({query:e,village_id:t},function(){this.handleSearch({return:"all"})})},a.handleSearch=function(e){console.log("handleSearch",e);var t=a;(0,a.props.dispatch)({type:"concentrator_maps/fetch",payload:(0,o.default)({},e),callback:function(){for(var e=t.props.concentrator_maps.data,a=[],n=0;n<e.length;n++)if(0!==e[n].meters.length)for(var i=0;i<e[n].meters.length;i++){var l=e[n],d={};d.concentrator_number=l.concentrator_number,d.longitude=l.longitude,d.latitude=l.latitude,d.meter_number=l.meters[i].meter_number,d.status=l.meters[i].status,d.value=l.meters[i].value,a.push(d)}console.log("meters",a),t.renderMap(a,!0)}})},a.renderMap=function(e,t){var n=[],i=null,l=a;a.map.clearOverlays();for(var d=0;d<e.length;d++){(function(t){if(!e[t].longitude||!e[t].latitude)return console.log("\u4e0d\u662f\u7ecf\u7eac\u5ea6"),"continue";i=new a.BMap.Point(e[t].longitude,e[t].latitude),n.push(i);var d=(W.default,"blue");console.log("data[i] .status",e[t].status);var c="";switch(e[t].status){case 1:c=new BMap.Icon(W.default,new BMap.Size(18,24),{anchor:new BMap.Size(10,25)}),d="blue";break;case-1:d="#faad14",c=new BMap.Icon(O.default,new BMap.Size(18,24),{anchor:new BMap.Size(10,25)});break;case-2:d="red",c=new BMap.Icon(L.default,new BMap.Size(18,24),{anchor:new BMap.Size(10,25)})}var A=new a.BMap.Marker(i,{icon:c});A.addEventListener("click",function(a){l.showInfo(e[t])});var o=new a.BMap.Label(e[t].meter_number,{offset:new BMap.Size(-20,25)});o.setStyle({borderColor:d,color:d}),A.setLabel(o),a.markers.push(A),a.map.addOverlay(A)})(d)}console.log("points",n),t&&a.map.setViewport(n),a.timer=setTimeout(a.getPoint,1e4)},a.showInfo=function(e){var t=a.props.intl.formatMessage,n=new a.BMap.Point(e.longitude,e.latitude),i="\u6b63\u5e38";switch(e.status){case 1:i=t({id:"intl.only_normal"});break;case-1:i=t({id:"intl.missing"});break;case-2:i=t({id:"intl.error"})}var l='<div class="table-content">\n<table class="custom-table">\n                    <thead> <tr><th class="table-header-1">'+t({id:"intl.big_meter_info"})+"&nbsp&nbsp&nbsp</th><th  ></th></tr></thead>\n                    <tbody>\n                    <tr><td >"+t({id:"intl.big_meter_number"})+" : </td><td>"+e.meter_number+"</td></tr>\n                    <tr><td >"+t({id:"intl.concentrator_number"})+" : </td><td>"+e.concentrator_number+"</td></tr>\n                    <tr><td >"+t({id:"intl.status"})+" : </td><td>"+i+"</td></tr>\n                    <tr><td >"+t({id:"intl.value"})+" : </td><td>"+e.value+"</td></tr>\n                    </tbody>\n                    </table>\n";l=l.concat("</div>");var d=new a.BMap.InfoWindow(l,{title:e.number});a.map.openInfoWindow(d,n)},a.permissions=JSON.parse(sessionStorage.getItem("permissions")),a.BMap=window.BMap,a.markers=[],a.windowInfo=null,a.timer=null,a.state={showAddBtn:(0,S.default)(a.permissions,{name:"concentrator_add_and_edit"}),showdelBtn:(0,S.default)(a.permissions,{name:"concentrator_delete"}),commandBtn:(0,S.default)(a.permissions,{name:"user_send_command"}),showSiderCon:!0,tableY:0,query:"",page:1,initPage:1,editModal:!1,addModal:!1,orderModal:!1,mapModal:!1,village_id:"",showArea:!0,editRecord:null,refreshSider:0,canAdd:!0,per_page:30,canLoadByScroll:!0,size_type:""},a}return(0,Z.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.handleSearch(),this.map=new this.BMap.Map("mapData",{enableMapClick:!1}),this.map.centerAndZoom(new BMap.Point(112.159141,26.269442),5),this.map.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]})),this.map.enableScrollWheelZoom()}},{key:"render",value:function(){var e=this.props.intl.formatMessage;return D.default.createElement(g.default,{className:"layout"},D.default.createElement(E.default,{refreshSider:this.state.refreshSider,showSiderCon:this.state.showSiderCon,changeArea:this.changeArea,changeConcentrator:this.changeConcentrator,showArea:this.state.showArea}),D.default.createElement(k,{style:{background:"#fff"}},D.default.createElement("div",{className:"content"},D.default.createElement(Y.default,{title:"\u5b9e\u65f6\u6570\u636e\u5206\u6790",breadcrumb:[{name:e({id:"intl.data_analysis"})},{name:e({id:"intl.big_meter_analysis_map"})}]},D.default.createElement("div",{style:{position:"relative"}},D.default.createElement("div",{id:"mapData",className:"mapData",style:{margin:"-16px"}}),D.default.createElement("div",{className:"map-tip"},D.default.createElement(c.default,{status:"processing",text:e({id:"intl.only_normal"})}),D.default.createElement("br",null),D.default.createElement(c.default,{status:"warning",text:e({id:"intl.missing"})}),D.default.createElement("br",null),D.default.createElement(c.default,{status:"error",text:e({id:"intl.error"})})))))))}}]),t}(T.PureComponent))||l)||l);t.default=C,e.exports=t.default},1670:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i,l,d=a(17),c=n(d),A=a(23),o=n(A),M=a(6),m=n(M),r=a(14),u=n(r),I=a(8),s=n(I),b=a(9),N=n(b),p=a(167),Z=n(p);a(83),a(168);var h=a(0),g=n(h),T=(a(36),a(41)),D=a(55),w=Z.default.Sider,Y=(i=(0,T.connect)(function(e){return{global:e.global}}))(l=(0,D.injectIntl)(l=function(e){function t(e){(0,m.default)(this,t);var a=(0,s.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));a.onCollapse=function(){a.setState({collapsed:!a.state.collapsed})};var n=a.props.global.isMobile;return a.state={collapsed:n},a}return(0,N.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.intl.formatMessage;return g.default.createElement(w,{collapsed:this.state.collapsed,collapsedWidth:0,className:"sider",width:"210"},g.default.createElement("div",{className:"sider-title"},e({id:"intl.option"})),g.default.createElement("div",{className:"showToggle",onClick:this.onCollapse},g.default.createElement(c.default,{type:this.state.collapsed?"right":"left"})))}}]),t}(h.PureComponent))||l)||l;t.default=Y,e.exports=t.default},2452:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGqGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOC0wOS0wNVQxNjozMjoxMSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTgtMTItMTdUMTY6MDc6MTgrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMTItMTdUMTY6MDc6MTgrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZGE2ODhlMWQtMDQ3My1mNTQ4LWI5ZDMtNzkwN2Q5YWYwMGE1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRmOTQxY2ExLTU3MTEtOWI0Mi1hN2E0LTczMGQ2YmM5NjQ1NSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjRmOTQxY2ExLTU3MTEtOWI0Mi1hN2E0LTczMGQ2YmM5NjQ1NSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGY5NDFjYTEtNTcxMS05YjQyLWE3YTQtNzMwZDZiYzk2NDU1IiBzdEV2dDp3aGVuPSIyMDE4LTA5LTA1VDE2OjMyOjExKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplYjIxODYwZS04YmFhLWU4NDgtYTJjMC1iMzQzNWQxNWIyMjYiIHN0RXZ0OndoZW49IjIwMTgtMDktMDVUMTY6NDA6MzArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmRhNjg4ZTFkLTA0NzMtZjU0OC1iOWQzLTc5MDdkOWFmMDBhNSIgc3RFdnQ6d2hlbj0iMjAxOC0xMi0xN1QxNjowNzoxOCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7eDe0FAAACwElEQVRIiZWVv4sfVRTFP+e+SaNFMEjAQhO2EEwqoxHBIgZilyblplpsDYt/gim2MFhtlRQ2AYnpUkhYswiJ4A8kG7AQTEAkBJttEkhEiN93j8V8v/Oddb7zdX3DGWbu3HvPOe+9mdHRD+8RAZok9XkFiXIgPkA660m+q+BVACeP1MSP2F/V6m1lJQ40uAky4ffP32TRaPo3kl5WiU3sVWVCaP4seEW1vmNpXXAN85Htxwu79kZEAG2flVLYCnkVwNIgeRYLWC1N3JK0giBiCYGrcaoAV4C3PMz5bYpeFQBvA1ecKs4FVZ0DG2WuKfPMXtXayfQ5m5M2JzN9DrTTd6PMM8pci2UErj6ozDV73tzmtiungRvA4yluuHLa5s48TyhzzZkHRwkUep/kOPN5nIAvEvl0T6YB+SmwAVQABZC8kcl7owSZuULwQten+qHEzwIkkNRiag18F3g478CLgteXOfhzpghARY0dZAZStDtMoBLYgnYqY2YKSIX+GiWIUr4D/ujFXjMc80zwzJnbhbV0DDjSxZNHaL4uAwLX/MXJrV5MwpslONRpbFtRgkPCm8zeHEDS11i/LiEwtq8Cf6sr4gTyt5LOAy9Ncb6NcYKOwc8tXx1rDtBkq/Inm+8Rp3rPjoO/wOxOSQ/3C9sp1A+Z3tnr9F8O2p0Cti+N5ByeYjBsX5rVjxL0rm/a3hpPHTTfAm7+V17nYKris/0SIH2qEDOMEmQ1HZJvXP3lEseoVX8tq2/3a8cJEjpMkmo+QTxbRKL29KxWLuYk2RfB0Dn3M7nsHCa7FXJZ4v4Sk3sJ+vPYfg6gTnKD4MECOQ/qJDfs9tOxrzUIzADiiWteGDioeSHEk0U14wQyA2Bstm1dl0EGW9dttlsBQ4wSZDQsAqVgad1MD2mdUhbmZjSjBM3SPzbeTcrHAIjd9g/z/8Y/uNeCu/PEdHgAAAAASUVORK5CYII="},2453:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGqGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOC0wOS0wNVQxNjozMjoxMSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTgtMTItMTdUMTY6NDc6NDYrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMTItMTdUMTY6NDc6NDYrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NGQ5NTA1ZjEtZmY0Mi1iOTQ5LThhNzUtMzQ1MzdlY2YwYjc1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRmOTQxY2ExLTU3MTEtOWI0Mi1hN2E0LTczMGQ2YmM5NjQ1NSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjRmOTQxY2ExLTU3MTEtOWI0Mi1hN2E0LTczMGQ2YmM5NjQ1NSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGY5NDFjYTEtNTcxMS05YjQyLWE3YTQtNzMwZDZiYzk2NDU1IiBzdEV2dDp3aGVuPSIyMDE4LTA5LTA1VDE2OjMyOjExKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplYjIxODYwZS04YmFhLWU4NDgtYTJjMC1iMzQzNWQxNWIyMjYiIHN0RXZ0OndoZW49IjIwMTgtMDktMDVUMTY6NDA6MzArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjRkOTUwNWYxLWZmNDItYjk0OS04YTc1LTM0NTM3ZWNmMGI3NSIgc3RFdnQ6d2hlbj0iMjAxOC0xMi0xN1QxNjo0Nzo0NiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4fw5zuAAACuElEQVRIiY2UvYseZRTFf+fOaKFFMMiCRSJsIZh00YhgoULS2aTcVNsnBP8EU2xhsAoWsQ1ITJdCZM0ixIAfiFtYCCZgocHCbRJIRMjO3GMx885M3neeF+9wYOZ+nXvm+dCfn24gw9PnalKJSKT6rMwHLbwNHKOzBxX8aPGls91rCWrE84cNFhy78DdzVk8/LL0cVFfTbFlC9jT8SiO9JfuSQjcwF9I8nO06sdDYYxNiN4ktYLk5U58VW1LcDtjs/GsIshKIiuAzxBusNv69x2gJiDf7miqlMkFTVzRVbLfojHJsHsG+7XOST0s+bftcBPuDmjQtOtNEbDd1tUaBOdJEbOtZnXfA7wO3gIc9bvW+bwcSuR+OI0WCEO8RnCQHX2NzuW31eDnZ5rHkHaDtHILgddG+UyRo05skLwxN4A/gFwSg4UEiLTL1M11OZ8mLSK+VCGpJ/wwTAYI6wt3WcAyJlcAkSNiKhSQgIf4tKqiD74C/Jr7j4BPgTs/4g5CM8Ang1UngAZN1WSFI8ytwe+JTOq5CdTQ9br/uvTraxRgCEXwd8m9FAmMgrwOHjPv5VCZ3Q5wHXupxPpO7wKluDGHz1OnrpeYAtTMBfkJ8j/3uJHYyzefAQf+98UyljcQPdu7PHPpRAVI/ja8UcjZWmg8cvrKoLxLYwt2//spmtzzLcnN2u5qhvqAAMYJP/i+BxMeSWKBIILUMoP3G8MU6yf3i3sDtne74LFBUkCxgErn5CPNklkQC80Q0lz2pY3LPzBBMG4DMPfC12UteBnxN5h5rRC4RjGsg1N0OPtwhub+SndzHhzuOLntp/eYJ7IoVUD8yXFxONlw09aO5mjJBiDlg74V8kxCECPkm9l4xv0RQk6xASSUj+5LTOLv3SqbWTP6aRa6rtnzObQ7qKj8EUOuDEOs2zKz9B+QQZNp6Y3lBAAAAAElFTkSuQmCC"},2454:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGqGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOC0wOS0wNVQxNjozMjoxMSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTgtMDktMDVUMTY6NDI6NTErMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMDktMDVUMTY6NDI6NTErMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZWFkNjZlNmEtMTY1Yy1mZTQyLTkxYWQtMjAwZjY5NjNlN2I0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRmOTQxY2ExLTU3MTEtOWI0Mi1hN2E0LTczMGQ2YmM5NjQ1NSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjRmOTQxY2ExLTU3MTEtOWI0Mi1hN2E0LTczMGQ2YmM5NjQ1NSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGY5NDFjYTEtNTcxMS05YjQyLWE3YTQtNzMwZDZiYzk2NDU1IiBzdEV2dDp3aGVuPSIyMDE4LTA5LTA1VDE2OjMyOjExKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplYjIxODYwZS04YmFhLWU4NDgtYTJjMC1iMzQzNWQxNWIyMjYiIHN0RXZ0OndoZW49IjIwMTgtMDktMDVUMTY6NDA6MzArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVhZDY2ZTZhLTE2NWMtZmU0Mi05MWFkLTIwMGY2OTYzZTdiNCIgc3RFdnQ6d2hlbj0iMjAxOC0wOS0wNVQxNjo0Mjo1MSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4p9PirAAAC0ElEQVRIiY2VsYseVRTFf+e+SRZiEVxkhYiKWwSNXTQgWJhA7GxSbqrtTeGfYIotFKutkjZNTJdCwppF2A0ELExhIboBhRBTuCAJJCpk591jMd/uNx/fTLJ3OMzMffedc+99b97oj0Uhw/NjDTWSqImi+VTmsyx8BHoTAPwwKj9afOdaN2sTNCmO/ttiwTt/J0OmvkAWvxbJuiNWLCF7JvjAl/V6DX1eqh4vvEQgZKDjWUZlw6WsAHPkM75SVkLltmAZg+ZDpwLZCIKCuIr4gHni3yfolQKIDxFXCUoWjQu0C4X2aKxmifPKKbngnjMvkHmGzDPOvCC4dzCeJkucb4/EartQxgUcHK9HyqroZW5vQZ4DbgKPJ7gJeQ57e5qEqQtlNcXxUQGZswTv9/hbm8tpPZ2JFNg8xV4D6oFTvEfWj0cF0l7GHDtIHj9A+hkJJDQBEu7wE/BgWi2vEDo5JtAI/TPNCIQakXSLHV2WQNiYnLwrOnIDpBT/jVZQ0F3gUc/3FulT2MzsKBvZKH0KeLs38BCzzYhFyr+Ab/d8csQ6URat6fazBFEWHbF+UFb38L3k30YFLOPMa8Ae+4TSaaM7govAqxNcNLqDdHoSg81zV18bIwfQrye6dqqULaRPBmJ2J/eluRF727WeBXj3UZ0bBoj93WL765EklgbJoZszmT9m0Qu4ZXtjNHKefAO49XKBbtt1MN8cVkDmKzG9RgXsyj7I+oPxty/KaNLO6866NTN3tAIn+0gn7LVfYp4NikhgntG2l9OJexgXmCEAmR2cV2DokDc4r8jsvKArswL9PgbCAW731jD3B/jvu91bc0AgDrMGjcvgWf7E+FKg/hdO4ks0zZPD5T6pwBHMoQTYm8q8QairM/MG9qbLQHzEqIB23hioQECCYKk25S+A0tbXDbsEg8tz8s92UKAp7fgf27BbqF8AqHo3oHewH87+BzwOcqYVZGtxAAAAAElFTkSuQmCC"}});