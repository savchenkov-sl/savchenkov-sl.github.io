(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"713b":function(e,t,a){"use strict";a.r(t);var l=a("7a23");const c=Object(l["j"])(" Mind map "),b=Object(l["j"])(" Меню "),o=Object(l["j"])("Добавить элемент"),n=Object(l["j"])(" создать новый корневой элемент на этой карте "),j=Object(l["j"])("Карта"),O=Object(l["j"])(" перейти к выбранной карте "),u=Object(l["j"])("Карты"),d=Object(l["j"])(" перейти к списку карт "),i=Object(l["j"])("Сохранить"),s=Object(l["j"])(" сохранить карту на этом устройстве "),r=Object(l["j"])("Откатить"),f=Object(l["j"])(" Сбросить все карты и настройки "),k=Object(l["j"])("Сохранить в облако"),p=Object(l["j"])(" карту можно будет открыть на другом устройстве "),m=Object(l["j"])("Загрузить из облака"),_=Object(l["j"])(" скачать и восстановить карту из облака "),N=Object(l["j"])("Экспорт в файл"),h=Object(l["j"])(" сохранить карту на этом устройстве "),g=Object(l["j"])("Импорт из файла");function w(e,t,a,w,C,v){const y=Object(l["G"])("q-btn"),q=Object(l["G"])("q-toolbar-title"),G=Object(l["G"])("q-space"),I=Object(l["G"])("fb"),D=Object(l["G"])("q-toolbar"),Q=Object(l["G"])("q-header"),U=Object(l["G"])("q-item-label"),A=Object(l["G"])("q-icon"),$=Object(l["G"])("q-item-section"),V=Object(l["G"])("q-item"),L=Object(l["G"])("q-file"),F=Object(l["G"])("q-list"),M=Object(l["G"])("q-drawer"),x=Object(l["G"])("router-view"),T=Object(l["G"])("q-page-container"),z=Object(l["G"])("q-layout");return Object(l["z"])(),Object(l["h"])(z,{view:"lHh Lpr lFf"},{default:Object(l["N"])((()=>[Object(l["k"])(Q,{elevated:""},{default:Object(l["N"])((()=>[Object(l["k"])(D,{class:"q-gutter-sm-x-sm "},{default:Object(l["N"])((()=>[Object(l["k"])(y,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),Object(l["k"])(q,{class:"gt-sm"},{default:Object(l["N"])((()=>[c])),_:1}),Object(l["k"])(G),Object(l["k"])(I,{class:"lt-md"})])),_:1})])),_:1}),Object(l["k"])(M,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[4]||(t[4]=t=>e.leftDrawerOpen=t),bordered:"",class:"bg-grey-1"},{default:Object(l["N"])((()=>[Object(l["k"])(F,null,{default:Object(l["N"])((()=>[Object(l["k"])(U,{header:"",class:"text-grey-8"},{default:Object(l["N"])((()=>[b])),_:1}),Object(l["k"])(V,{clickable:"",onClick:e.$root.createNewRootNode},{default:Object(l["N"])((()=>[Object(l["k"])($,{avatar:""},{default:Object(l["N"])((()=>[Object(l["k"])(A,{name:"add"})])),_:1}),Object(l["k"])($,null,{default:Object(l["N"])((()=>[Object(l["k"])(U,null,{default:Object(l["N"])((()=>[o])),_:1}),Object(l["k"])(U,{caption:""},{default:Object(l["N"])((()=>[n])),_:1})])),_:1})])),_:1},8,["onClick"]),Object(l["k"])(V,{clickable:"",onClick:t[1]||(t[1]=t=>e.$router.push("/"))},{default:Object(l["N"])((()=>[Object(l["k"])($,{avatar:""},{default:Object(l["N"])((()=>[Object(l["k"])(A,{name:"grid_view"})])),_:1}),Object(l["k"])($,null,{default:Object(l["N"])((()=>[Object(l["k"])(U,null,{default:Object(l["N"])((()=>[j])),_:1}),Object(l["k"])(U,{caption:""},{default:Object(l["N"])((()=>[O])),_:1})])),_:1})])),_:1}),Object(l["k"])(V,{clickable:"",onClick:t[2]||(t[2]=t=>e.$router.push("/maps"))},{default:Object(l["N"])((()=>[Object(l["k"])($,{avatar:""},{default:Object(l["N"])((()=>[Object(l["k"])(A,{name:"view_list"})])),_:1}),Object(l["k"])($,null,{default:Object(l["N"])((()=>[Object(l["k"])(U,null,{default:Object(l["N"])((()=>[u])),_:1}),Object(l["k"])(U,{caption:""},{default:Object(l["N"])((()=>[d])),_:1})])),_:1})])),_:1}),Object(l["k"])(V,{clickable:"",onClick:e.$root.saveAll},{default:Object(l["N"])((()=>[Object(l["k"])($,{avatar:""},{default:Object(l["N"])((()=>[Object(l["k"])(A,{name:"save"})])),_:1}),Object(l["k"])($,null,{default:Object(l["N"])((()=>[Object(l["k"])(U,null,{default:Object(l["N"])((()=>[i])),_:1}),Object(l["k"])(U,{caption:""},{default:Object(l["N"])((()=>[s])),_:1})])),_:1})])),_:1},8,["onClick"]),Object(l["k"])(V,{clickable:"",onClick:e.$root.resetAll},{default:Object(l["N"])((()=>[Object(l["k"])($,{avatar:""},{default:Object(l["N"])((()=>[Object(l["k"])(A,{name:"history"})])),_:1}),Object(l["k"])($,null,{default:Object(l["N"])((()=>[Object(l["k"])(U,null,{default:Object(l["N"])((()=>[r])),_:1}),Object(l["k"])(U,{caption:""},{default:Object(l["N"])((()=>[f])),_:1})])),_:1})])),_:1},8,["onClick"]),Object(l["k"])(V,{clickable:"",onClick:e.$root.uploadMapToCloud},{default:Object(l["N"])((()=>[Object(l["k"])($,{avatar:""},{default:Object(l["N"])((()=>[Object(l["k"])(A,{name:"cloud_upload"})])),_:1}),Object(l["k"])($,null,{default:Object(l["N"])((()=>[Object(l["k"])(U,null,{default:Object(l["N"])((()=>[k])),_:1}),Object(l["k"])(U,{caption:""},{default:Object(l["N"])((()=>[p])),_:1})])),_:1})])),_:1},8,["onClick"]),Object(l["k"])(V,{clickable:"",onClick:e.$root.downloadMapFromCloud},{default:Object(l["N"])((()=>[Object(l["k"])($,{avatar:""},{default:Object(l["N"])((()=>[Object(l["k"])(A,{name:"cloud_download"})])),_:1}),Object(l["k"])($,null,{default:Object(l["N"])((()=>[Object(l["k"])(U,null,{default:Object(l["N"])((()=>[m])),_:1}),Object(l["k"])(U,{caption:""},{default:Object(l["N"])((()=>[_])),_:1})])),_:1})])),_:1},8,["onClick"]),Object(l["k"])(V,{clickable:"",onClick:e.$root.downloadAll},{default:Object(l["N"])((()=>[Object(l["k"])($,{avatar:""},{default:Object(l["N"])((()=>[Object(l["k"])(A,{name:"sim_card_download"})])),_:1}),Object(l["k"])($,null,{default:Object(l["N"])((()=>[Object(l["k"])(U,null,{default:Object(l["N"])((()=>[N])),_:1}),Object(l["k"])(U,{caption:""},{default:Object(l["N"])((()=>[h])),_:1})])),_:1})])),_:1},8,["onClick"]),Object(l["k"])(V,null,{default:Object(l["N"])((()=>[Object(l["k"])($,{avatar:""},{default:Object(l["N"])((()=>[Object(l["k"])(A,{name:"file_present"})])),_:1}),Object(l["k"])($,null,{default:Object(l["N"])((()=>[Object(l["k"])(U,null,{default:Object(l["N"])((()=>[g])),_:1}),Object(l["k"])(U,{caption:""},{default:Object(l["N"])((()=>[Object(l["k"])(L,{outlined:"",style:{"max-width":"200px"},modelValue:e.$root.uploadingFile,"onUpdate:modelValue":[t[3]||(t[3]=t=>e.$root.uploadingFile=t),e.$root.uploadAll],label:"Открыть"},{prepend:Object(l["N"])((()=>[Object(l["k"])(A,{name:"attach_file"})])),_:1},8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),Object(l["k"])(T,null,{default:Object(l["N"])((()=>[Object(l["k"])(x)])),_:1})])),_:1})}function C(e,t,a,c,b,o){const n=Object(l["G"])("q-icon"),j=Object(l["G"])("q-input");return Object(l["z"])(),Object(l["h"])(l["a"],null,[Object(l["O"])(Object(l["k"])(j,{dark:"",dense:"",standout:"",modelValue:b.email,"onUpdate:modelValue":t[1]||(t[1]=e=>b.email=e),class:"q-ml-md",placeholder:"Email"},{prepend:Object(l["N"])((()=>[Object(l["k"])(n,{name:"person"})])),_:1},8,["modelValue"]),[[l["L"],null==b.fbUser]]),Object(l["O"])(Object(l["k"])(j,{dark:"",dense:"",standout:"",modelValue:b.password,"onUpdate:modelValue":t[2]||(t[2]=e=>b.password=e),class:"q-ml-md",type:"password",placeholder:"Пароль"},{prepend:Object(l["N"])((()=>[Object(l["k"])(n,{name:"lock"})])),_:1},8,["modelValue"]),[[l["L"],null==b.fbUser]]),Object(l["O"])(Object(l["k"])(n,{name:"login",onClick:o.logIn,style:{cursor:"pointer","font-size":"32px","padding-left":"10px"}},null,8,["onClick"]),[[l["L"],null==b.fbUser]]),Object(l["O"])(Object(l["k"])(n,{name:"logout",onClick:o.logOut,style:{cursor:"pointer","font-size":"32px","padding-left":"10px"}},null,8,["onClick"]),[[l["L"],null!=b.fbUser]])],64)}a("e6cf");var v=a("260b"),y=(a("e71f"),a("ea7b"),{name:"Fb",data(){return{idToDelete:"",email:"",password:"",fb:null,fbDb:null,fbAuth:null,fbUser:null,firebaseConfig:{apiKey:"AIzaSyArYm7jjrwBElTpA4h_CHDihFO6hWc2Ij8",authDomain:"vue-mm.firebaseapp.com",projectId:"vue-mm",storageBucket:"vue-mm.appspot.com",messagingSenderId:"910034929083",appId:"1:910034929083:web:7187260c798b2c76e9f09e",measurementId:"G-V1L9ZK0D05"}}},methods:{async logIn(){console.log("logIn");let e=await this.fbAuth.signInWithEmailAndPassword(this.email,this.password);this.password="",console.log("loged in",e)},async logOut(){console.log("logOut"),await this.fbAuth.signOut(),this.fbUser=null},async storeMap(e){if(console.log("storeMap"),!this.fbUser.hasOwnProperty("uid"))return"нужно войти";await this.fbDb.collection(`maps/${this.fbUser.uid}/maps`).doc("1").set(e)},async getMap(){if(console.log("getMap"),!this.fbUser.hasOwnProperty("uid"))return"нужно войти";let e=await this.fbDb.collection(`maps/${this.fbUser.uid}/maps`).doc("1").get();return console.log(e.data().map),await e.data().map}},mounted(){this.fb=v["a"].initializeApp(this.firebaseConfig),this.fbDb=this.fb.firestore(),this.fbAuth=this.fb.auth(),this.fbDb.settings({timestampsInSnapshots:!0}),this.fbAuth.onAuthStateChanged((e=>{e?(console.log("user logged in: ",e),this.fbUser=e):console.log("user logged out")})),this.$root.auth.uploadToCloudFb=async e=>{await this.storeMap({map:e})},this.$root.auth.downloadFromCloudFb=async()=>await this.getMap()}}),q=a("27f9"),G=a("0016"),I=a("eebe"),D=a.n(I);y.render=C;var Q=y;D()(y,"components",{QInput:q["a"],QIcon:G["a"]});var U=Object(l["l"])({name:"MainLayout",components:{Fb:Q},setup(){const e=Object(l["E"])(!1),t=Object(l["E"])(!1);return{leftDrawerOpen:e,leftDrawerOpen1:t,toggleLeftDrawer(){e.value=!e.value}}}}),A=a("4d5a"),$=a("e359"),V=a("65c6"),L=a("9c40"),F=a("6ac5"),M=a("2c91"),x=a("9404"),T=a("1c1c"),z=a("0170"),S=a("66e5"),E=a("4074"),P=a("7d53"),B=a("09e3");U.render=w;t["default"]=U;D()(U,"components",{QLayout:A["a"],QHeader:$["a"],QToolbar:V["a"],QBtn:L["a"],QToolbarTitle:F["a"],QSpace:M["a"],QDrawer:x["a"],QList:T["a"],QItemLabel:z["a"],QItem:S["a"],QItemSection:E["a"],QIcon:G["a"],QFile:P["a"],QPageContainer:B["a"]})}}]);