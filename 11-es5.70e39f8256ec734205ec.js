function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _createSuper(e){return function(){var t,n=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var a=_getPrototypeOf(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _templateObject5(){var e=_taggedTemplateLiteral(["\n  mutation bloquearTag($id: ID!, $unblock: Boolean!) {\n    blockTag(id: $id, unblock: $unblock) {\n      status\n      message\n    }\n  }\n"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral(["\n  mutation modificarTag($id: ID!, $tag: String!) {\n    updateTag(id: $id, tag: $tag) {\n      status\n      message\n      tag {\n        ...TagObject\n      }\n    }\n  }\n  ","\n"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral(["\n  mutation insertarTag($tag: String!) {\n    addTag(tag: $tag) {\n      status\n      message\n      tag {\n        ...TagObject\n      }\n    }\n  }\n  ","\n"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral(["\n    query tagsList($page: Int, $itemsPage: Int, $active: ActiveFilterEnum) {\n        tags(page: $page, itemsPage: $itemsPage, active: $active) {\n            info {\n                ...ResultInfoObject\n            }\n            status\n            message\n            tags {\n                ...TagObject\n            }\n        }\n    }\n    ","\n    ","\n"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral(["\n  fragment TagObject on Tag {\n    id\n    name\n    slug\n    active\n  }\n"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{h9nd:function(e,t,n){"use strict";n.r(t),n.d(t,"TagsModule",(function(){return I}));var a,r,i,c,o=n("ofXK"),s=n("tyNb"),u=n("mrSG"),l=n("lTCR"),f=n.n(l),p=f.a(_templateObject()),b=n("I6Jw"),d=f.a(_templateObject2(),p,b.a),g=n("b1el"),m=n("0iDv"),v=n("sYSY"),h=n("PjjI"),O=n("fXoL"),y=f.a(_templateObject3(),p),_=f.a(_templateObject4(),p),j=f.a(_templateObject5()),k=n("0nJ8"),T=n("q3Kh"),w=n("/IUn"),C=((a=function(e){_inherits(n,e);var t=_createSuper(n);function n(e){return _classCallCheck(this,n),t.call(this,e)}return _createClass(n,[{key:"add",value:function(e){return this.set(y,{tag:e},{}).pipe(Object(T.map)((function(e){return e.addTag})))}},{key:"update",value:function(e,t){return this.set(_,{id:e,tag:t},{}).pipe(Object(T.map)((function(e){return e.updateTag})))}},{key:"unblock",value:function(e,t){return this.set(j,{id:e,unblock:t},{}).pipe(Object(T.map)((function(e){return e.blockTag})))}}]),n}(k.a)).\u0275fac=function(e){return new(e||a)(O.Zb(w.a))},a.\u0275prov=O.Ib({token:a,factory:a.\u0275fac,providedIn:"root"}),a),P=n("hrBI"),R=[{path:"",component:(r=function(){function e(t){_classCallCheck(this,e),this.service=t,this.query=d,this.filterActiveValues=h.a.ALL}return _createClass(e,[{key:"ngOnInit",value:function(){this.context={},this.itemsPage=10,this.resultData={listKey:"tags",definitionKey:"tags"},this.include=!1,this.columns=[{property:"id",label:"#"},{property:"name",label:"Tag"},{property:"slug",label:"Slug"},{property:"active",label:"\xbfActivo?"}]}},{key:"takeAction",value:function(e){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e[1],a='<input id="name" value="'.concat(void 0!==n.name&&""!==n.name?n.name:"",'" class="swal2-input" required>'),t.t0=e[0],t.next="add"===t.t0?4:"edit"===t.t0?6:"info"===t.t0?8:"block"===t.t0?13:"unblock"===t.t0?15:16;break;case 4:return this.addForm(a),t.abrupt("break",16);case 6:return this.updateForm(a,n),t.abrupt("break",16);case 8:return t.next=10,Object(g.e)("Detalles","".concat(n.name," (").concat(n.slug,")"),!1!==n.active?375:400,'<i class="fas fa-edit"></i> Editar',!1!==n.active?'<i class="fas fa-lock"></i> Bloquear':'<i class="fas fa-lock-open"></i> Desbloquear');case 10:return(r=t.sent)?this.updateForm(a,n):!1===r&&this.unblockForm(n,!1===n.active),t.abrupt("break",16);case 13:return this.unblockForm(n,!1),t.abrupt("break",16);case 15:this.unblockForm(n,!0);case 16:case"end":return t.stop()}}),t,this)})))}},{key:"addForm",value:function(e){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(g.b)("A\xf1adir tag",e,"name");case 2:n=t.sent,this.addtag(n);case 4:case"end":return t.stop()}}),t,this)})))}},{key:"addtag",value:function(e){e.value&&this.service.add(e.value).subscribe((function(e){e.status?Object(m.a)(v.a.SUCCESS,e.message):Object(m.a)(v.a.WARNING,e.message)}))}},{key:"updateForm",value:function(e,t){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(g.b)("Modificar tag",e,"name");case 2:a=n.sent,this.updateTag(t.id,a);case 4:case"end":return n.stop()}}),n,this)})))}},{key:"updateTag",value:function(e,t){t.value&&this.service.update(e,t.value).subscribe((function(e){e.status?Object(m.a)(v.a.SUCCESS,e.message):Object(m.a)(v.a.WARNING,e.message)}))}},{key:"unblockTag",value:function(e,t){this.service.unblock(e,t).subscribe((function(e){e.status?Object(m.a)(v.a.SUCCESS,e.message):Object(m.a)(v.a.WARNING,e.message)}))}},{key:"unblockForm",value:function(e,t){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=!1,!t){n.next=7;break}return n.next=4,Object(g.e)("\xbfDesbloquear?","Si desbloqueas el tag seleccionado, se mostrar\xe1 en la lista y podr\xe1s hacer compras y ver toda la informaci\xf3n",500,"No, no desbloquear","Si, desbloquear");case 4:n.t1=n.sent,n.next=10;break;case 7:return n.next=9,Object(g.e)("\xbfBloquear?","Si bloqueas el tag seleccionado, no se mostrar\xe1 en la lista",430,"No, no bloquear","Si, bloquear");case 9:n.t1=n.sent;case 10:if(n.t2=n.t1,n.t3=n.t0===n.t2,!n.t3){n.next=14;break}this.unblockTag(e.id,t);case 14:case"end":return n.stop()}}),n,this)})))}}]),e}(),r.\u0275fac=function(e){return new(e||r)(O.Mb(C))},r.\u0275cmp=O.Gb({type:r,selectors:[["app-tags"]],decls:1,vars:7,consts:[[3,"query","context","itemsPage","resultData","include","tableColumns","filterActiveValues","manageItem"]],template:function(e,t){1&e&&(O.Rb(0,"app-table-pagination",0),O.dc("manageItem",(function(e){return t.takeAction(e)})),O.Qb()),2&e&&O.lc("query",t.query)("context",t.context)("itemsPage",t.itemsPage)("resultData",t.resultData)("include",t.include)("tableColumns",t.columns)("filterActiveValues",t.filterActiveValues)},directives:[P.a],styles:[""]}),r)}],S=((i=function e(){_classCallCheck(this,e)}).\u0275mod=O.Kb({type:i}),i.\u0275inj=O.Jb({factory:function(e){return new(e||i)},imports:[[s.e.forChild(R)],s.e]}),i),x=n("OwPx"),I=((c=function e(){_classCallCheck(this,e)}).\u0275mod=O.Kb({type:c}),c.\u0275inj=O.Jb({factory:function(e){return new(e||c)},imports:[[o.c,S,x.a]]}),c)}}]);