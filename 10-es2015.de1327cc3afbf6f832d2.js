(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{JXV5:function(e,t,a){"use strict";a.r(t),a.d(t,"GenresModule",(function(){return w}));var n=a("ofXK"),s=a("mrSG"),r=a("PjjI"),i=a("0iDv"),o=a("lTCR"),c=a.n(o);const u=c.a`
  fragment GenreObject on Genre {
    id
    name
    slug
    active
  }
`;var l=a("I6Jw");const d=c.a`
  query genresList($page: Int, $itemsPage: Int, $active: ActiveFilterEnum) {
    genres(page: $page, itemsPage: $itemsPage, active: $active) {
      info {
        ...ResultInfoObject
      }
      status
      message
      genres {
        ...GenreObject
      }
    }
  }
  ${u}
  ${l.a}
`;var b=a("b1el"),m=a("sYSY"),p=a("fXoL"),g=a("0nJ8");const v=c.a`
  mutation insertarGenero($genre: String!) {
    addGenre(genre: $genre) {
      status
      message
      genre {
        ...GenreObject
      }
    }
  }
  ${u}
`,f=c.a`
  mutation modificarGenero($id: ID!, $genre: String!) {
    updateGenre(id: $id, genre: $genre) {
      status
      message
      genre {
        ...GenreObject
      }
    }
  }
  ${u}
`,h=c.a`
  mutation bloquearGenero($id: ID!, $unblock: Boolean) {
    blockGenre(id: $id, unblock: $unblock) {
      status
      message
    }
  }
`;var j=a("q3Kh"),k=a("/IUn");let y=(()=>{class e extends g.a{constructor(e){super(e)}add(e){return this.set(v,{genre:e},{}).pipe(Object(j.map)(e=>e.addGenre))}update(e,t){return this.set(f,{id:e,genre:t},{}).pipe(Object(j.map)(e=>e.updateGenre))}unblock(e,t){return this.set(h,{id:e,unblock:t},{}).pipe(Object(j.map)(e=>e.blockGenre))}}return e.\u0275fac=function(t){return new(t||e)(p.Zb(k.a))},e.\u0275prov=p.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var G=a("hrBI");let O=(()=>{class e{constructor(e){this.service=e,this.query=d,this.filterActiveValues=r.a.ALL}ngOnInit(){this.context={},this.itemsPage=10,this.resultData={listKey:"genres",definitionKey:"genres"},this.include=!1,this.columns=[{property:"id",label:"#"},{property:"name",label:"Nombre del g\xe9nero"},{property:"slug",label:"Slug"},{property:"active",label:"\xbfActivo?"}]}takeAction(e){return Object(s.b)(this,void 0,void 0,(function*(){const t=e[1],a=`<input id="name" value="${void 0!==t.name&&""!==t.name?t.name:""}" class="swal2-input" required>`;switch(e[0]){case"add":this.addForm(a);break;case"edit":this.updateForm(a,t);break;case"info":const e=yield Object(b.e)("Detalles",`${t.name} (${t.slug})`,!1!==t.active?375:400,'<i class="fas fa-edit"></i> Editar',!1!==t.active?'<i class="fas fa-lock"></i> Bloquear':'<i class="fas fa-lock-open"></i> Desbloquear');e?this.updateForm(a,t):!1===e&&this.unblockForm(t,!1===t.active);break;case"block":this.unblockForm(t,!1);break;case"unblock":this.unblockForm(t,!0)}}))}addForm(e){return Object(s.b)(this,void 0,void 0,(function*(){const t=yield Object(b.b)("A\xf1adir g\xe9nero",e,"name");this.addGenre(t)}))}addGenre(e){e.value&&this.service.add(e.value).subscribe(e=>{e.status?Object(i.a)(m.a.SUCCESS,e.message):Object(i.a)(m.a.WARNING,e.message)})}updateForm(e,t){return Object(s.b)(this,void 0,void 0,(function*(){const a=yield Object(b.b)("Modificar g\xe9nero",e,"name");this.updateGenre(t.id,a)}))}updateGenre(e,t){t.value&&this.service.update(e,t.value).subscribe(e=>{e.status?Object(i.a)(m.a.SUCCESS,e.message):Object(i.a)(m.a.WARNING,e.message)})}blockGenre(e,t){this.service.unblock(e,t).subscribe(e=>{e.status?Object(i.a)(m.a.SUCCESS,e.message):Object(i.a)(m.a.WARNING,e.message)})}unblockForm(e,t){return Object(s.b)(this,void 0,void 0,(function*(){!1===(t?yield Object(b.e)("\xbfDesbloquear?","Si desbloqueas el g\xe9nero seleccionado, se mostrar\xe1 en la lista y podr\xe1s hacer compras y ver toda la informaci\xf3n",500,"No, no desbloquear","Si, desbloquear"):yield Object(b.e)("\xbfBloquear?","Si bloqueas el g\xe9nero seleccionado, no se mostrar\xe1 en la lista",430,"No, no bloquear","Si, bloquear"))&&this.blockGenre(e.id,t)}))}}return e.\u0275fac=function(t){return new(t||e)(p.Mb(y))},e.\u0275cmp=p.Gb({type:e,selectors:[["app-genres"]],decls:1,vars:7,consts:[[3,"query","context","itemsPage","resultData","include","tableColumns","filterActiveValues","manageItem"]],template:function(e,t){1&e&&(p.Rb(0,"app-table-pagination",0),p.dc("manageItem",(function(e){return t.takeAction(e)})),p.Qb()),2&e&&p.lc("query",t.query)("context",t.context)("itemsPage",t.itemsPage)("resultData",t.resultData)("include",t.include)("tableColumns",t.columns)("filterActiveValues",t.filterActiveValues)},directives:[G.a],styles:[""]}),e})();var $=a("tyNb");const q=[{path:"",component:O}];let S=(()=>{class e{}return e.\u0275mod=p.Kb({type:e}),e.\u0275inj=p.Jb({factory:function(t){return new(t||e)},imports:[[$.e.forChild(q)],$.e]}),e})();var I=a("OwPx");let w=(()=>{class e{}return e.\u0275mod=p.Kb({type:e}),e.\u0275inj=p.Jb({factory:function(t){return new(t||e)},imports:[[n.c,S,I.a]]}),e})()}}]);