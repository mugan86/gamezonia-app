(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{h9nd:function(e,t,a){"use strict";a.r(t),a.d(t,"TagsModule",(function(){return I}));var s=a("ofXK"),i=a("tyNb"),n=a("mrSG"),c=a("lTCR"),o=a.n(c);const r=o.a`
  fragment TagObject on Tag {
    id
    name
    slug
    active
  }
`;var u=a("I6Jw");const l=o.a`
    query tagsList($page: Int, $itemsPage: Int, $active: ActiveFilterEnum) {
        tags(page: $page, itemsPage: $itemsPage, active: $active) {
            info {
                ...ResultInfoObject
            }
            status
            message
            tags {
                ...TagObject
            }
        }
    }
    ${r}
    ${u.a}
`;var d=a("b1el"),b=a("0iDv"),g=a("sYSY"),m=a("PjjI"),p=a("fXoL");const v=o.a`
  mutation insertarTag($tag: String!) {
    addTag(tag: $tag) {
      status
      message
      tag {
        ...TagObject
      }
    }
  }
  ${r}
`,f=o.a`
  mutation modificarTag($id: ID!, $tag: String!) {
    updateTag(id: $id, tag: $tag) {
      status
      message
      tag {
        ...TagObject
      }
    }
  }
  ${r}
`,h=o.a`
  mutation bloquearTag($id: ID!, $unblock: Boolean!) {
    blockTag(id: $id, unblock: $unblock) {
      status
      message
    }
  }
`;var j=a("0nJ8"),k=a("q3Kh"),y=a("/IUn");let O=(()=>{class e extends j.a{constructor(e){super(e)}add(e){return this.set(v,{tag:e},{}).pipe(Object(k.map)(e=>e.addTag))}update(e,t){return this.set(f,{id:e,tag:t},{}).pipe(Object(k.map)(e=>e.updateTag))}unblock(e,t){return this.set(h,{id:e,unblock:t},{}).pipe(Object(k.map)(e=>e.blockTag))}}return e.\u0275fac=function(t){return new(t||e)(p.Zb(y.a))},e.\u0275prov=p.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var $=a("hrBI");const T=[{path:"",component:(()=>{class e{constructor(e){this.service=e,this.query=l,this.filterActiveValues=m.a.ALL}ngOnInit(){this.context={},this.itemsPage=10,this.resultData={listKey:"tags",definitionKey:"tags"},this.include=!1,this.columns=[{property:"id",label:"#"},{property:"name",label:"Tag"},{property:"slug",label:"Slug"},{property:"active",label:"\xbfActivo?"}]}takeAction(e){return Object(n.b)(this,void 0,void 0,(function*(){const t=e[1],a=`<input id="name" value="${void 0!==t.name&&""!==t.name?t.name:""}" class="swal2-input" required>`;switch(e[0]){case"add":this.addForm(a);break;case"edit":this.updateForm(a,t);break;case"info":const e=yield Object(d.e)("Detalles",`${t.name} (${t.slug})`,!1!==t.active?375:400,'<i class="fas fa-edit"></i> Editar',!1!==t.active?'<i class="fas fa-lock"></i> Bloquear':'<i class="fas fa-lock-open"></i> Desbloquear');e?this.updateForm(a,t):!1===e&&this.unblockForm(t,!1===t.active);break;case"block":this.unblockForm(t,!1);break;case"unblock":this.unblockForm(t,!0)}}))}addForm(e){return Object(n.b)(this,void 0,void 0,(function*(){const t=yield Object(d.b)("A\xf1adir tag",e,"name");this.addtag(t)}))}addtag(e){e.value&&this.service.add(e.value).subscribe(e=>{e.status?Object(b.a)(g.a.SUCCESS,e.message):Object(b.a)(g.a.WARNING,e.message)})}updateForm(e,t){return Object(n.b)(this,void 0,void 0,(function*(){const a=yield Object(d.b)("Modificar tag",e,"name");this.updateTag(t.id,a)}))}updateTag(e,t){t.value&&this.service.update(e,t.value).subscribe(e=>{e.status?Object(b.a)(g.a.SUCCESS,e.message):Object(b.a)(g.a.WARNING,e.message)})}unblockTag(e,t){this.service.unblock(e,t).subscribe(e=>{e.status?Object(b.a)(g.a.SUCCESS,e.message):Object(b.a)(g.a.WARNING,e.message)})}unblockForm(e,t){return Object(n.b)(this,void 0,void 0,(function*(){!1===(t?yield Object(d.e)("\xbfDesbloquear?","Si desbloqueas el tag seleccionado, se mostrar\xe1 en la lista y podr\xe1s hacer compras y ver toda la informaci\xf3n",500,"No, no desbloquear","Si, desbloquear"):yield Object(d.e)("\xbfBloquear?","Si bloqueas el tag seleccionado, no se mostrar\xe1 en la lista",430,"No, no bloquear","Si, bloquear"))&&this.unblockTag(e.id,t)}))}}return e.\u0275fac=function(t){return new(t||e)(p.Mb(O))},e.\u0275cmp=p.Gb({type:e,selectors:[["app-tags"]],decls:1,vars:7,consts:[[3,"query","context","itemsPage","resultData","include","tableColumns","filterActiveValues","manageItem"]],template:function(e,t){1&e&&(p.Rb(0,"app-table-pagination",0),p.dc("manageItem",(function(e){return t.takeAction(e)})),p.Qb()),2&e&&p.lc("query",t.query)("context",t.context)("itemsPage",t.itemsPage)("resultData",t.resultData)("include",t.include)("tableColumns",t.columns)("filterActiveValues",t.filterActiveValues)},directives:[$.a],styles:[""]}),e})()}];let q=(()=>{class e{}return e.\u0275mod=p.Kb({type:e}),e.\u0275inj=p.Jb({factory:function(t){return new(t||e)},imports:[[i.e.forChild(T)],i.e]}),e})();var S=a("OwPx");let I=(()=>{class e{}return e.\u0275mod=p.Kb({type:e}),e.\u0275inj=p.Jb({factory:function(t){return new(t||e)},imports:[[s.c,q,S.a]]}),e})()}}]);