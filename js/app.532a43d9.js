(function(e){function t(t){for(var s,o,i=t[0],r=t[1],d=t[2],c=0,u=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);p&&p(t);while(u.length)u.shift()();return l.push.apply(l,d||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],s=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(s=!1)}s&&(l.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},o={3:0},a={3:0},l=[];function i(e){return r.p+"js/"+({1:"chunk-common"}[e]||e)+"."+{1:"f2e38954",2:"cbd6e7f4",4:"77291ca0",5:"e62d4179",6:"1208f679",7:"4fa21721"}[e]+".js"}function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n={1:1,2:1,4:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var s="css/"+({1:"chunk-common"}[e]||e)+"."+{1:"73fbc2ae",2:"3610d56f",4:"2c333b44",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0"}[e]+".css",a=r.p+s,l=document.getElementsByTagName("link"),i=0;i<l.length;i++){var d=l[i],c=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(c===s||c===a))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){d=u[i],c=d.getAttribute("data-href");if(c===s||c===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var s=t&&t.target&&t.target.src||a,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=s,delete o[e],p.parentNode.removeChild(p),n(l)},p.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){o[e]=0})));var s=a[e];if(0!==s)if(s)t.push(s[2]);else{var l=new Promise((function(t,n){s=a[e]=[t,n]}));t.push(s[2]=l);var d,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=i(e);var u=new Error;d=function(t){c.onerror=c.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",u.name="ChunkLoadError",u.type=s,u.request=o,n[1](u)}a[e]=void 0}};var p=setTimeout((function(){d({type:"timeout",target:c})}),12e4);c.onerror=c.onload=d,document.head.appendChild(c)}return Promise.all(t)},r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var p=c;l.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("5319"),n("ddb0");var s=n("7a23"),o=(n("7d6e"),n("e54f"),n("985d"),n("0047"),n("b05d")),a=n("14c0"),l=n("b12a"),i={config:{},lang:a["a"],plugins:{AppFullscreen:l["a"]}};function r(e,t,n,o,a,l){const i=Object(s["G"])("router-view");return Object(s["z"])(),Object(s["h"])(i)}n("e01a"),n("2b3d");var d=Object(s["l"])({name:"App",components:{},data(){return{t:"123",scale:1,version:"0.0.3",ifFullscreen:!1,mindMaps:[{id:1,name:"тест",isMap:!0,nodes:[{id:1,nodes:[{id:2,nodes:[{id:4,nodes:[]}]},{id:3,nodes:[]}]},{id:5,nodes:[]}]}],nodesInfos:[{name:"",description:"",isCompleted:!1,cost:null,requirementsIds:[],pathToNode:[],style:{type:"target",isHidden:!1,isTransparent:!1,color:"#35a543",image:null,href:null,size:100,x:0,y:0},time:{start:new Date(2011,0,1,0,0,0,0),durationMins:30,deadlineTime:null,repeatType:null,repeatDays:[0,0,0,0,0,0,0],alarmClockTimes:[],alarmClockPlaces:[]},scrum:{points:1,importance:50,pleasantness:50,easiness:50,readyPercent:0,significance:""},links:{files:[],googleCalendarId:null}},{name:"корень",description:"корневая нода",isCompleted:!1,style:{type:"target",isHidden:!1,isTransparent:!1,color:"#35a543",image:null,href:null,size:100,x:100,y:100},time:{start:new Date(2011,0,1,0,0,0,0),durationMins:30,deadlineTime:null,repeatType:null,repeatDays:[0,0,0,0,0,0,0],alarmClockTimes:[],alarmClockPlaces:[]},scrum:{points:1,importance:50,pleasantness:50,easiness:50,readyPercent:0,significance:""},links:{files:[],googleCalendarId:null},requirementsIds:[]},{name:"ветка 1",description:"ветка 1 описание",isCompleted:!1,style:{type:"target",isHidden:!1,isTransparent:!1,color:"#35a582",image:null,href:null,size:100,x:200,y:100},time:{start:new Date(2011,0,1,0,0,0,0),durationMins:30,deadlineTime:null,repeatType:null,repeatDays:[0,0,0,0,0,0,0],alarmClockTimes:[],alarmClockPlaces:[]},scrum:{points:1,importance:50,pleasantness:50,easiness:50,readyPercent:0,significance:""},links:{files:[],googleCalendarId:null},requirementsIds:[]},{name:"ветка 2",description:"ветка 2 описание",isCompleted:!1,style:{type:"target",isHidden:!1,isTransparent:!1,color:"#35a55a",image:null,href:null,size:100,x:300,y:100},time:{start:new Date(2011,0,1,0,0,0,0),durationMins:30,deadlineTime:null,repeatType:null,repeatDays:[0,0,0,0,0,0,0],alarmClockTimes:[],alarmClockPlaces:[]},scrum:{points:1,importance:50,pleasantness:50,easiness:50,readyPercent:0,significance:""},links:{files:[],googleCalendarId:null},requirementsIds:[]},{name:"лист",description:"ветка 1 описание",isCompleted:!1,style:{type:"target",isHidden:!1,isTransparent:!1,color:"#358fa5",image:null,href:null,size:100,x:200,y:200},time:{start:new Date(2011,0,1,0,0,0,0),durationMins:30,deadlineTime:null,repeatType:null,repeatDays:[0,0,0,0,0,0,0],alarmClockTimes:[],alarmClockPlaces:[]},scrum:{points:1,importance:50,pleasantness:50,easiness:50,readyPercent:0,significance:""},links:{files:[],googleCalendarId:null},requirementsIds:[]},{name:"корень 2",description:"корневая нода",isCompleted:!1,style:{type:"target",isHidden:!1,isTransparent:!1,color:"#6935a5",image:null,href:null,size:100,x:100,y:500},time:{start:new Date(2011,0,1,0,0,0,0),durationMins:30,deadlineTime:null,repeatType:null,repeatDays:[0,0,0,0,0,0,0],alarmClockTimes:[],alarmClockPlaces:[]},scrum:{points:1,importance:50,pleasantness:50,easiness:50,readyPercent:0,significance:""},links:{files:[],googleCalendarId:null},requirementsIds:[]}],finishedTasksHistory:[],selectedMapId:0,editedNodeInfo:null,uploadingFile:null,lastMapsSnapshot:null,auth:{email:null,uploadToCloudFb:null,downloadFromCloudFb:null,isLoading:!1},calendar:{isSignedIn:!1,addEvent:null},newNodeInfoTemplate:{name:"",description:"",isCompleted:!1,cost:null,requirementsIds:[],pathToNode:[],style:{type:"target",isHidden:!1,isTransparent:!1,color:"#35a543",image:null,href:null,size:100,x:200,y:200},time:{start:null,durationMins:null,deadlineTime:null,repeatType:null,repeatPeriod:null,repeatDays:[0,0,0,0,0,0,0],alarmClockTimes:[],alarmClockPlaces:[]},scrum:{points:1,importance:50,pleasantness:50,easiness:50,readyPercent:0,significance:""},links:{files:[],googleCalendarId:null}},newMapTemplate:{id:null,name:null,isMap:!0,nodes:[]},finishedTasksHistoryItemTemplate:{nodesInfosId:null,finishedTime:null,isSuccessfully:!0,nodeInfoDamp:JSON.stringify(" nodeInfo")},dragg:{mouseStartX:0,mouseStartY:0,divStartX:0,divStartY:0}}},computed:{header(){return"/"!==this.$route.path?"Mind Map":this.selectedMap.name},selectedMap(){return console.log(this.mindMaps[0]),this.mindMaps[this.selectedMapId]},mapWidth(){let e=1080;return this.nodesInfos.forEach((t=>{var n;(null===t||void 0===t||null===(n=t.style)||void 0===n?void 0:n.x)>e&&(e=t.style.x)})),Math.round(e+500)},mapHeight(){let e=1080;return this.nodesInfos.forEach((t=>{var n;(null===t||void 0===t||null===(n=t.style)||void 0===n?void 0:n.y)>e&&(e=t.style.y)})),Math.round(e+500)},lines(){let e=[];return this.recursiveMapWalk(this.selectedMap,((t,n)=>{let s=this.nodesInfos[t.id];t.nodes.forEach((t=>{let o=this.nodesInfos[t.id],a=20-2*n;a<5&&(a=5),e.push({type:"parent",start:[s.style.x+100,s.style.y+42],end:[o.style.x+100,o.style.y+42],width:a,fromNodeInfo:s,toNodeInfo:o})}))}),!0),e}},created(){this.initMapsFromLocalStorage();let e=window.localStorage.getItem("scale");e&&(this.scale=Number(e)),setInterval((async()=>null===this.auth.email?null:null===this.lastMapsSnapshot?(this.lastMapsSnapshot=this.getMapsSnapshot(),null):this.lastMapsSnapshot===this.getMapsSnapshot()?null:(console.log("autosave"),this.lastMapsSnapshot=this.getMapsSnapshot(),void await this.uploadMapToCloud())),3e4)},methods:{async addNodeInfoToGoogleCalendar(e){let t=new Date(e.time.start),n=new Date(t.getTime()+6e4*e.time.durationMins),s={summary:e.name,description:e.description,start:{dateTime:t.toISOString()},end:{dateTime:n.toISOString()},reminders:{useDefault:!1,overrides:[{method:"popup",minutes:10}]}};this.calendar.addEvent(s,e)},findNodeToNodesInfos(){return console.log("findNodeToNodesInfos"),this.mindMaps.forEach((e=>{this.recursiveMapWalk(e,(e=>{console.log(e.id),this.nodesInfos[e.id].pathToNode=0}),!0)})),this.mindMaps.forEach((e=>{e.nodes.forEach((t=>{this.nodesInfos[t.id].pathToNode=[e.id,t.id],this.recursiveMapWalk(t,((e,t,n)=>{null!==n&&(this.nodesInfos[e.id].pathToNode=this.nodesInfos[n.id].pathToNode.concat([e.id]))}))}))})),console.log("!!!!!!!!!!! s"),0},getNotUsedNodesInfosIds(e=!1){let t=[],n=[],s=[];this.mindMaps.forEach((e=>{this.recursiveMapWalk(e,(e=>{s.push(e.id)}),!0)})),console.log("usedInfosIds",s),this.nodesInfos.forEach(((o,a)=>{s.includes(a)||(t.push(a),n.push(o),console.log({id:a,name:null===o||void 0===o?void 0:o.name}),e&&(this.nodesInfos[a]=null))})),console.log("notUsedInfosIds",t),console.log("notUsedInfos",n)},isTaskByNodeInfo(e){return null!==e&&("task"===e.type||(null!==e.time.start||null!==e.time.durationMins||null!==e.time.repeatType))},openEditor(e){this.editedNodeInfo=e},recursiveMapWalk(e,t,n=!1,s=0,o=null){n||t(e,s,o),e.nodes.length&&e.nodes.forEach((n=>{this.recursiveMapWalk(n,t,!1,s+1,e)}))},startMove(e,t,n){document.body.style.overflow="hidden",this.dragg.mouseStartX=e,this.dragg.mouseStartY=t,this.dragg.divStartX=n.style.x,this.dragg.divStartY=n.style.y},move(e,t,n){n.style.x=this.dragg.divStartX+(e-this.dragg.mouseStartX)/this.scale,n.style.y=this.dragg.divStartY+(t-this.dragg.mouseStartY)/this.scale},endMove(){document.body.style.overflow="unset",document.ontouchend=null,document.ontouchmove=null,document.onmouseup=null,document.onmousemove=null},startMoveMouse({clientX:e,clientY:t},n){this.startMove(e,t,n),document.onmousemove=({clientX:e,clientY:t})=>{this.move(e,t,n)},document.onmouseup=()=>{this.endMove()}},startMoveTouch({touches:e},t){let n=e[0].clientX,s=e[0].clientY;this.startMove(n,s,t),document.ontouchmove=({touches:e})=>{let n=e[0].clientX,s=e[0].clientY;this.move(n,s,t)},document.ontouchend=()=>{this.endMove()}},saveScale(){console.log("saveScale"),window.localStorage.setItem("scale",JSON.stringify(this.scale))},upScale(){console.log("upScale"),this.scale+=.1,this.scale=Math.round(10*this.scale)/10,this.saveScale()},downScale(){console.log("downScale"),this.scale>.2?this.scale-=.1:this.scale/=2,this.scale=Math.round(100*this.scale)/100,this.saveScale()},deleteNode(e,t,[...n]){console.log(e),console.log("deleteNode",e,t,n),t.map((e=>{this.nodesInfos[e]=null})),e.node.nodes=e.node.nodes.filter((e=>e.id!==parseInt(n[n.length-1])))},addNodeInfo(e){return console.log("addNodeInfo",e),this.nodesInfos.push(Object.assign({},e))-1},createNewNode(e){let t=JSON.parse(JSON.stringify(this.newNodeInfoTemplate));if(e.hasOwnProperty("isMap"))t.name="Новый корневой элемент",t.pathToNode=[e.id,this.nodesInfos.length];else{let n=this.nodesInfos[e.id];t.style.x=n.style.x-50,t.style.y=n.style.y+180,t.style.color=n.style.color,t.name="",t.description="",t.pathToNode=[...this.nodesInfos[e.id].pathToNode,this.nodesInfos.length]}let n=this.addNodeInfo(t);console.log("newNodeId",n),e.nodes.push({id:n,nodes:[]}),this.editedNodeInfo=this.nodesInfos[n]},createNewRootNode(){let e=this.mindMaps[this.selectedMapId];this.createNewNode(e)},selectMap(e){let t=0;this.mindMaps.forEach(((n,s)=>{n.id===e&&(t=s)})),this.selectedMapId=t,this.$router.push("/")},addMap(e){let t=0;this.mindMaps.forEach((e=>{e.id>t&&(t=e.id)})),console.log("bigestMapId",t);let n=JSON.parse(JSON.stringify(this.newMapTemplate));n.id=t+1,n.name=e,console.log(n),this.mindMaps.push(n),this.selectedMapId=this.mindMaps.length-1,this.createNewRootNode()},resetNodeInfo(e){e.isCompleted=!1,e.cost=null,e.requirementsIds=[],e.time=JSON.parse(JSON.stringify(this.newNodeInfoTemplate.time)),e.scrum=JSON.parse(JSON.stringify(this.newNodeInfoTemplate.scrum)),e.requirementsIds=JSON.parse(JSON.stringify(this.newNodeInfoTemplate.requirementsIds))},getMapsSnapshot(){return JSON.stringify({mindMaps:this.mindMaps,nodesInfos:this.nodesInfos,selectedMapId:this.selectedMapId})},removeMap(e){console.log("removeMap");let t=this.mindMaps.find((t=>t.id===e));console.log(t);let n=[],s=[];this.recursiveMapWalk(t,(e=>{n.push(e);let t=this.nodesInfos[e.id];s.push(t)}),!0),console.log("nodesToDelete",n),console.log("nodesInfosToClear",s),n.forEach((e=>{this.nodesInfos[e.id]=null})),this.mindMaps=this.mindMaps.filter((t=>t.id!==e))},initData(e){if(e){let t=JSON.parse(e);this.mindMaps=t.mindMaps,this.nodesInfos=t.nodesInfos,this.finishedTasksHistory=null===t||void 0===t?void 0:t.finishedTasksHistory,this.selectedMapId=t.selectedMapId,this.finishedTasksHistory||(this.finishedTasksHistory=[])}},initMapsFromLocalStorage(){console.log("initMapsFromLocalStorage()");let e=window.localStorage.getItem("saved");this.initData(e)},saveAll(){console.log("saveAll()");const e={mindMaps:this.mindMaps,nodesInfos:this.nodesInfos,finishedTasksHistory:this.finishedTasksHistory,selectedMapId:this.selectedMapId,savedAt:(new Date).getTime()};window.localStorage.setItem("saved",JSON.stringify(e))},resetAll(){window.localStorage.removeItem("saved"),window.location.reload()},downloadAll(){this.saveAll();let e=new Blob([window.localStorage.getItem("saved")],{type:"text/plain"}),t=window.URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download="mind map.txt",n.click(),window.URL.revokeObjectURL(t),document.removeChild(n)},uploadAll(){console.log(this.uploadingFile);const e=new FileReader;e.onload=e=>{window.localStorage.setItem("saved",String(e.target.result)),this.initMapsFromLocalStorage(),console.log(e.target.result),console.log(typeof e.target.result)},e.readAsText(this.uploadingFile)},async uploadMapToCloud(){console.log("uploadMapToCloud"),this.saveAll();let e=window.localStorage.getItem("saved");this.auth.uploadToCloudFb(e),console.log("map uploaded")},async downloadMapFromCloud(){console.log("downloadMapFromCloud");let e=await this.auth.downloadFromCloudFb();this.initData(e)},test(){console.log(this.nodesInfos)}}});n("be59");d.render=r;var c=d,u=n("4bde"),p=n("6c02");const h=[{path:"/",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,"8b24"))}]},{path:"/maps",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"bd52"))}]},{path:"/tasks",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,"71ee"))}]},{path:"/tests",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(1),n.e(7)]).then(n.bind(null,"18aa"))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))}];var m=h,f=Object(u["route"])((function(){const e=p["b"],t=Object(p["a"])({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("/")});return t})),g=async function(e){const t="function"===typeof f?await f({}):f,n=e(c);return n.use(o["a"],i),{app:n,router:t}};const y="/";async function v({app:e,router:t},n){let s=!1;const o=e=>{s=!0;const n=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=n},a=window.location.href.replace(window.location.origin,"");for(let i=0;!1===s&&i<n.length;i++)try{await n[i]({app:e,router:t,ssrContext:null,redirect:o,urlPath:a,publicPath:y})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==s&&(e.use(t),e.mount("#q-app"))}g(s["g"]).then((e=>Promise.all([Promise.resolve().then(n.bind(null,"8847"))]).then((t=>{const n=t.map((e=>e.default)).filter((e=>"function"===typeof e));v(e,n)}))))},8847:function(e,t,n){"use strict";n.r(t),n.d(t,"i18n",(function(){return i}));var s=n("4bde"),o=n("47e2"),a={failed:"Action failed",success:"Action was successful"},l={"en-US":a};const i=Object(o["a"])({locale:"en-US",messages:l});t["default"]=Object(s["boot"])((({app:e})=>{e.use(i)}))},be59:function(e,t,n){"use strict";n("c250")},c250:function(e,t,n){}});