(window.webpackJsonp=window.webpackJsonp||[]).push([["jrgl~rbgl"],{"11e9":function(e,t,n){var r=n("52a7"),a=n("4630"),o=n("6821"),i=n("6a99"),u=n("69a8"),l=n("c69a"),s=Object.getOwnPropertyDescriptor;t.f=n("9e1e")?s:function(e,t){if(e=o(e),t=i(t,!0),l)try{return s(e,t)}catch(e){}if(u(e,t))return a(!r.f.call(e,t),e[t])}},"1a00":function(e,t,n){},"28a5":function(e,t,n){"use strict";var r=n("aae3"),a=n("cb7c"),o=n("ebd6"),i=n("0390"),u=n("9def"),l=n("5f1b"),s=n("520a"),c=n("79e5"),h=Math.min,f=[].push,d="split",g="length",v="lastIndex",y=4294967295,p=!c(function(){RegExp(y,"y")});n("214f")("split",2,function(e,t,n,c){var m;return m="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[g]||2!="ab"[d](/(?:ab)*/)[g]||4!="."[d](/(.?)(.?)/)[g]||1<"."[d](/()()/)[g]||""[d](/.?/)[g]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!r(e))return n.call(a,e,t);for(var o,i,u,l=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,d=void 0===t?y:t>>>0,p=new RegExp(e.source,c+"g");(o=s.call(p,a))&&!(h<(i=p[v])&&(l.push(a.slice(h,o.index)),1<o[g]&&o.index<a[g]&&f.apply(l,o.slice(1)),u=o[0][g],h=i,l[g]>=d));)p[v]===o.index&&p[v]++;return h===a[g]?!u&&p.test("")||l.push(""):l.push(a.slice(h)),l[g]>d?l.slice(0,d):l}:"0"[d](void 0,0)[g]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,r){var a=e(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,a,r):m.call(String(a),n,r)},function(e,t){var r=c(m,e,this,t,m!==n);if(r.done)return r.value;var s=a(e),f=String(this),d=o(s,RegExp),g=s.unicode,v=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(p?"y":"g"),D=new d(p?s:"^(?:"+s.source+")",v),M=void 0===t?y:t>>>0;if(0==M)return[];if(0===f.length)return null===l(D,f)?[f]:[];for(var w=0,b=0,T=[];b<f.length;){D.lastIndex=p?b:0;var Y,F=l(D,p?f:f.slice(b));if(null===F||(Y=h(u(D.lastIndex+(p?0:b)),f.length))===w)b=i(f,b,g);else{if(T.push(f.slice(w,b)),T.length===M)return T;for(var _=1;_<=F.length-1;_++)if(T.push(F[_]),T.length===M)return T;b=w=Y}}return T.push(f.slice(w)),T}]})},"28c2":function(e,t,n){"use strict";var r=n("1a00");n.n(r).a},4917:function(e,t,n){"use strict";var r=n("cb7c"),a=n("9def"),o=n("0390"),i=n("5f1b");n("214f")("match",1,function(e,t,n,u){return[function(n){var r=e(this),a=null==n?void 0:n[t];return void 0!==a?a.call(n,r):new RegExp(n)[t](String(r))},function(e){var t=u(n,e,this);if(t.done)return t.value;var l=r(e),s=String(this);if(!l.global)return i(l,s);for(var c,h=l.unicode,f=[],d=l.lastIndex=0;null!==(c=i(l,s));){var g=String(c[0]);""===(f[d]=g)&&(l.lastIndex=o(s,a(l.lastIndex),h)),d++}return 0===d?null:f}]})},"5dbc":function(e,t,n){var r=n("d3f4"),a=n("8b97").set;e.exports=function(e,t,n){var o,i=t.constructor;return i!==n&&"function"==typeof i&&(o=i.prototype)!==n.prototype&&r(o)&&a&&a(e,o),e}},6672:function(e,t,n){"use strict";n("7f7f"),n("c5f6"),n("28a5"),n("4917");var r={lunarInfo:[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,28309,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42416,83315,21168,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46752,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,23232,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,41696,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],Gan:["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],Zhe:["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],Animals:["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"],solarTerm:["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"],weekend:["日","一","二","三","四","五","六","七","八","九","十"],lunarStr:["初","十","廿","卅"],lunarMonStr:["正","二","三","四","五","六","七","八","九","十","冬","腊"],sTermInfo:[0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758],wFestive:["0520-母亲节","0630-父亲节","1144-感恩节"],cFestive:["0101-元旦","0214-情人节","0305#1963-雷锋日","0308-妇女节","0312-植树节","0401-愚人节","0501-劳动日","0504-青年节","0512-护士节","0601#1925-儿童节","0701#1997-建党节","0801#1927-建军节","0910-教师节","1001#1949-国庆节","1224-平安夜","1225-圣诞节"],lFestive:["1230-除夕","0101-春节","0102-正月初二","0115-元宵节","0505-端午节","0707-七夕节","0715-中元节","0815-中秋节","0909-重阳节","1208-腊八节","1224-小年"],lunarYearLength:function(e){for(var t=348,n=32768;8<n;n>>=1)t+=r.lunarInfo[e-1900]&n?1:0;return t+r.leapMonthLengths(e)},lunarMonthLength:function(e,t){return r.lunarInfo[e-1900]&65536>>t?30:29},isLeapMonth:function(e){return!!(15&r.lunarInfo[e-1900])},leapMonth:function(e){return r.isLeapMonth(e)?15&r.lunarInfo[e-1900]:0},leapMonthLengths:function(e){return r.isLeapMonth(e)?65536&r.lunarInfo[e-1900]?30:29:0},year2GanZhe:function(e){var t=(e-3)%10;0===t&&(t=10);var n=(e-3)%12;return 0===n&&(n=12),r.Gan[t-1]+r.Zhe[n-1]},month2GanZhe:function(e,t){var n=(e-3)%10;0===n&&(n=10);var a=(n-1)%5*12+t+1;return r.Gan[a%10]+r.Zhe[a%12]},day2GanZhe:function(e){var t=40+e;return r.Gan[t%10]+r.Zhe[t%12]},sTerm:function(e,t){var n=31556925974.7*(e-1900)+6e4*r.sTermInfo[t],a=Date.UTC(1900,0,6,2,5);return new Date(n+a)},isTerm:function(e,t,n){var a=new Date(e,t-1,n),o=2*(t-1),i=r.sTerm(e,o);return r.isSameDay(i,a)?r.solarTerm[o]:(o+=1,i=r.sTerm(e,o),!!r.isSameDay(i,a)&&r.solarTerm[o])},isSameDay:function(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()},getStar:function(e,t){return["魔羯","水瓶","双鱼","白羊","金牛","双子","巨蟹","狮子","处女","天秤","天蝎","射手","魔羯"][e-1+([20,19,21,21,21,22,23,23,23,23,22,22][e-1]<t?1:0)]+"座"},toLunarMonth:function(e,t){return t?"闰"+r.lunarMonStr[e-1]+"月":r.lunarMonStr[e-1]+"月"},toLunarDay:function(e){return 10===e?"初十":r.lunarStr[Math.floor(e/10)]+(e%10==0?"十":r.weekend[e%10])},getAnimal:function(e){return r.Animals[(e-4)%12]},isTody:function(e){var t=new Date;return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()},isFestive:function(e,t,n,a,o,i){var u=9<o?o+"":"0"+o;u+=9<i?i+"":"0"+i;var l=9<t?t+"":"0"+t;l+=9<n?n+"":"0"+n;for(var s=r.lFestive,c=0,h=s.length;c<h;c+=1)if((g=s[c].match(/(\d*)-(.*)/))[1]===u)return g[2];for(c=0,h=(s=r.cFestive).length;c<h;c+=1){var f=(g=s[c].match(/(\d*#?\d*)-(.*)/))[1].split("#");if(f[1]&&e>f[1]){if(f[0]===l)return g[2]}else if(!f[1]&&g[1]===l)return g[2]}s=r.wFestive;var d=new Date(e,t-1,n);for(c=0,h=s.length;c<h;c+=1){var g,v=(g=s[c].match(/(\d*)-(.*)/))[1].substring(0,2),y=g[1].substring(3,4),p=g[1].substring(2,3);if((9<t?t+"":"0"+t)===v&&d.getDay()===parseInt(y)&&r.theNoWeek(e,t,n)===parseInt(p))return g[2]}return!1},theNoWeek:function(e,t,n){var r=new Date(e,t-1,n);r.setDate(1);var a=new Date(e,t-1,n),o=r.getDay(),i=a.getDate();0===o&&(o=7);for(var u=1,l=8-o,s=1;;){if(u<=i&&i<=l)return s;s+=1,l=(u=l+1)+6}},isRunYear:function(e){return e%400==0||e%4==0&&e%100!=0},getlunarYMD:function(e){for(var t={year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate()},n=(Date.UTC(t.year,t.month-1,t.day)-Date.UTC(1900,0,31))/864e5,a=0,o=1900;o<2101&&0<n;o++)n-=a=r.lunarYearLength(o);n<0&&(n+=a,o--),t.lunarYear=o;var i=!1,u=r.leapMonth(t.lunarYear);for(o=1;o<13&&0<=n;o++)n-=a=r.lunarMonthLength(t.lunarYear,o),i=!1,o===u&&(n<0?(o--,i=!0):n-=a=r.leapMonthLengths(t.lunarYear));return n<0&&(o===u&&i?(n+=a,i=!1):(o===u+1?(n+=a,i=!0):n+=a,o--)),t.lunarMonth=o,t.lunarMonthChiness=r.toLunarMonth(t.lunarMonth,i),t.lunarDay=n+1,t.lunarDayChiness=r.toLunarDay(t.lunarDay),t},lunarFestival:function(e){var t=r.getlunarYMD(e),n=r.isFestive(t.year,t.month,t.day,t.lunarYear,t.lunarMonth,t.lunarDay);if(r.isTerm(t.year,t.month,t.day),n)return n},lunarTerm:function(e){var t=r.getlunarYMD(e),n=r.isTerm(t.year,t.month,t.day);if(n)return n},lunarTime:function(e){return r.getlunarYMD(e).lunarDayChiness},date2lunar:function(e){var t={year:(e=e||new Date).getFullYear(),month:e.getMonth()+1,day:e.getDate()},n=(Date.UTC(t.year,t.month-1,t.day)-Date.UTC(1900,0,31))/864e5,a=0;t.gzD=r.day2GanZhe(n);for(var o=1900;o<2101&&0<n;o++)n-=a=r.lunarYearLength(o);n<0&&(n+=a,o--),t.lunarYear=o;var i=!1,u=r.leapMonth(t.lunarYear);for(o=1;o<13&&0<=n;o++)n-=a=r.lunarMonthLength(t.lunarYear,o),i=!1,o===u&&(n<0?(o--,i=!0):n-=a=r.leapMonthLengths(t.lunarYear));return n<0&&(o===u&&i?(n+=a,i=!1):(o===u+1?(n+=a,i=!0):n+=a,o--)),t.lunarMonth=o,t.lunarMonthChiness=r.toLunarMonth(t.lunarMonth,i),t.lunarDay=n+1,t.lunarDayChiness=r.toLunarDay(t.lunarDay),t.animal=r.getAnimal(t.year),t.week="星期"+r.weekend[e.getDay()],t.start=r.getStar(t.month,t.day),t.gzY=r.year2GanZhe(t.lunarYear),t.isTody=r.isTody(e),t.gzM=r.month2GanZhe(t.lunarYear,t.lunarMonth),t.isTerm=r.isTerm(t.year,t.month,t.day),t.isTerm&&(t.term=t.isTerm,t.isTerm=!0),t.isFestive=r.isFestive(t.year,t.month,t.day,t.lunarYear,t.lunarMonth,t.lunarDay),t.isFestive&&(t.festive=t.isFestive,t.isFestive=!0),t}},a=r,o={name:"item",props:{source:Object},render:function(e){var t=this.$parent,n=t.renderContent,r=t._renderProxy;return n.call(r,e,this.source)}},i=n("2877"),u=Object(i.a)(o,void 0,void 0,!1,null,null,null).exports,l={name:"TitleBar",props:{year:[Number,String],month:[Number,String]},render:function(e){var t=this.$parent,n=t.renderTitle,r=t._renderProxy;return n.call(r,e,this.year,this.month)}},s={name:"KlCalendar",components:{Item:u,TitleBar:Object(i.a)(l,void 0,void 0,!1,null,null,null).exports},props:{width:{type:String,default:"100%"},height:{type:String,default:"100%"},defaultDate:{type:[Date,String],default:function(){return new Date}},showTitle:{type:Boolean,default:!0},showControlBtn:{type:Boolean,default:!0},renderTitle:{type:Function,default:function(e,t,n){var r=this;return e("div",{class:"mc-calendar_title-bar"},[e("div",{class:"mc-calendar_render-info"},[e("span",{class:"mc-calendar_year"},[t,"年"]),e("span",{class:"mc-calendar_month"},[n,"月"])]),this.showControlBtn?e("div",{class:"mc-calendar_tool"},[e("div",{class:"mc-calendar_tool-btn",on:{click:function(){return r.turn(-12)}}},["<<"]),e("div",{class:"mc-calendar_tool-btn",on:{click:function(){return r.turn(-1)}}},["<"]),e("div",{class:"mc-calendar_tool-btn",on:{click:function(){return r.turnNow()}}},["本月"]),e("div",{class:"mc-calendar_tool-btn",on:{click:function(){return r.turn(1)}}},[">"]),e("div",{class:"mc-calendar_tool-btn",on:{click:function(){return r.turn(12)}}},[">>"])]):null])}},showLunar:{type:Boolean,default:!0},showFestival:{type:Boolean,default:!0},showTerm:{type:Boolean,default:!0},weekTitleAlign:{type:String,default:"right"},weekCount:{type:Number,default:6},border:{type:Boolean,default:!0},weekTitle:{type:Array,default:function(){return["周一","周二","周三","周四","周五","周六","周日"]}},renderContent:{type:Function,default:function(e,t){var n=t.isToday,r=t.isHoliday,a=t.isWeekend,o=t.isread,i=t.unread,u=t.isOtherMonthDay,l=(t.date,t.year,t.month,t.day),s=(t.weekDay,t.lunar),c=t.festival,h=t.term,f=(t.renderMonth,1==s.lunarDay),d="day-box\n          ".concat(r?"holiday":"","\n          ").concat(a?"weekend":"","\n          ").concat(o?"isread":"","\n          ").concat(i?"unread":"","\n          \n          ").concat(u?"other-month-day":""," "),g="info-lunar ".concat(f?"lunar-first":""),v=f?s.lunarMonthChiness+s.lunarDayChiness:s.lunarDayChiness,y=c?e("div",{class:"festival"},[c]):null,p=h?e("div",{class:"term"},[h]):null,m=n?e("span",{class:"today"},[l]):e("span",[l]);return e("div",{class:d},[this.showLunar?e("div",{class:g},[v]):null,e("div",{class:"info-date"},[m,"日"]),this.showFestival?y:null,this.showTerm?p:null])}},beforeRender:Function},created:function(){this.render(this.renderYear,this.renderMonth)},data:function(){var e=new Date(this.defaultDate);return{renderYear:e.getFullYear(),renderMonth:e.getMonth()+1,currentMonthDays:[]}},methods:{dateClick:function(e){this.$emit("date-click",e)},getRenderedMonth:function(){return{year:this.renderYear,month:this.renderMonth,days:this.currentMonthDays}},renderThisMonth:function(e,t){this.render(e,t)},render:function(e,t,n){function r(){a.currentMonthDays=i,a.renderYear=e,a.renderMonth=t}var a=this,o=2<arguments.length&&void 0!==n?n:this.weekCount,i=this.monthDetail(e,t,o),u=this.beforeRender;u&&"function"==typeof u?u(e,t,r):r()},monthDetail:function(e,t,n){var r=new Date(e,t-1),o=r.getDay();r.setDate(1-o-6);for(var i=[],u=new Date,l=0,s=r;l<7*n;l++){var c=s.getDate(),h=new Date(s),f=u.getFullYear()==h.getFullYear()&&u.getMonth()==h.getMonth()&&u.getDate()==h.getDate(),d=new Date(this.defaultDate),g=d.getFullYear()==d.getFullYear()&&d.getMonth()==d.getMonth()&&d.getDate()==d.getDate();i.push({date:h,year:h.getFullYear(),month:h.getMonth()+1,day:h.getDate(),weekDay:h.getDay(),lunar:a.date2lunar(h),festival:a.lunarFestival(h),term:a.lunarTerm(h),isToday:f,isDefaultDate:g,isWeekend:0==h.getDay()||6==h.getDay(),isHoliday:!1,isOtherMonthDay:h.getMonth()+1!==t,renderYear:e,renderMonth:t}),s.setDate(c+1)}return i},currentDate:function(e,t){var n=7*(e-1)+t-1;return this.currentMonthDays[n]},turn:function(e){var t=this.renderYear,n=this.renderMonth-1,r=new Date(t,n);r.setMonth(r.getMonth()+e);var a=r.getFullYear(),o=r.getMonth()+1;this.render(a,o)},turnNow:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1;this.render(t,n)}},watch:{renderYear:function(e,t){this.$emit("year-change",e,this.renderMonth)},renderMonth:function(e,t){this.$emit("month-change",this.renderYear,e)},defaultDate:function(e){var t=(e=new Date(e)).getFullYear(),n=e.getMonth()+1;this.render(t,n)}}},c=(n("28c2"),Object(i.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mc-calendar",style:{width:e.width,height:e.height}},[e.showTitle?n("title-bar",{attrs:{year:e.renderYear,month:e.renderMonth}}):e._e(),n("div",{staticClass:"mc-calendar_body"},[n("table",{attrs:{width:"100%",cellspacing:"0",cellpadding:"0"}},[n("thead",[n("tr",e._l(e.weekTitle,function(t,r){return n("th",{key:r},[e._v(e._s(t))])}),0)]),n("tbody",e._l(e.weekCount,function(t,r){return n("tr",{key:r,class:{"no-left-border":!e.border}},e._l(7,function(r,a){return n("td",{key:a,on:{click:function(n){e.dateClick(e.currentDate(t,r))}}},[n("Item",{attrs:{source:e.currentDate(t,r)}})],1)}),0)}),0)])])],1)},[],!1,null,null,null).exports);c.install=function(e){e.component(c.name,c)},"undefined"!=typeof window&&window.Vue&&(window.Calendar=c,window.Vue.use(c)),t.a=c},"7f7f":function(e,t,n){var r=n("86cc").f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n("9e1e")&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},"8b97":function(e,t,n){function r(e,t){if(o(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")}var a=n("d3f4"),o=n("cb7c");e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return r(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:r}},9093:function(e,t,n){var r=n("ce10"),a=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},aa77:function(e,t,n){function r(e,t,n){var r={},o=i(function(){return!!u[e]()||"​"!="​"[e]()}),l=r[e]=o?t(h):u[e];n&&(r[n]=l),a(a.P+a.F*o,"String",r)}var a=n("5ca1"),o=n("be13"),i=n("79e5"),u=n("fdef"),l="["+u+"]",s=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),h=r.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(c,"")),e};e.exports=r},c5f6:function(e,t,n){"use strict";function r(e){var t=l(e,!1);if("string"==typeof t&&2<t.length){var n,r,a,o=(t=D?t.trim():d(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var i,u=t.slice(2),s=0,c=u.length;s<c;s++)if((i=u.charCodeAt(s))<48||a<i)return NaN;return parseInt(u,r)}}return+t}var a=n("7726"),o=n("69a8"),i=n("2d95"),u=n("5dbc"),l=n("6a99"),s=n("79e5"),c=n("9093").f,h=n("11e9").f,f=n("86cc").f,d=n("aa77").trim,g="Number",v=a[g],y=v,p=v.prototype,m=i(n("2aeb")(p))==g,D="trim"in String.prototype;if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof v&&(m?s(function(){p.valueOf.call(n)}):i(n)!=g)?u(new y(r(t)),n,v):r(t)};for(var M,w=n("9e1e")?c(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;w.length>b;b++)o(y,M=w[b])&&!o(v,M)&&f(v,M,h(y,M));(v.prototype=p).constructor=v,n("2aba")(a,g,v)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);