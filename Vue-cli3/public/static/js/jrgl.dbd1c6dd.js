(window.webpackJsonp=window.webpackJsonp||[]).push([["jrgl"],{"0f89":function(e,t,a){},"58bf":function(e,t,a){"use strict";a.r(t),a("28a5");var n={name:"App",components:{Calendar:a("6672").a},data:function(){return{value:new Date,textarea:"",year:"",holiday:["2018-01-18","2018-01-19","2018-01-28","2018-02-18","2018-03-18"],remarks:""}},watch:{year:"yearChange"},methods:{yearChange:function(e,t){},changeDate:function(e){var t=e.split("-");this.year=t[0],this.$refs.calendar.renderThisMonth(t[0],t[1])},renderMonthChange:function(e,t){this.$refs.calendar.getRenderedMonth()},beforeRender:function(e,t,a){a()},twoDigit:function(e){return("000"+e).slice(-2)},renderContent:function(e,t){var a=t.isToday,n=(t.isHoliday,t.isWeekend),r=t.isOtherMonthDay,i=t.year,s=t.day,o=t.month,l=(t.renderYear,t.renderMonth,t.lunar),c=(t.weekDay,t.festival),d=t.term,h=l.lunarDayChiness,u=c||d||h||"",f="".concat(i,"-").concat(this.twoDigit(o),"-").concat(this.twoDigit(s));return e("div",{class:{"date-box":!0,today:a,weekend:n=n,holiday:!!~this.holiday.indexOf(f),"other-month":r}},[e("div",{class:{"first-info":!0}},s),e("div",{class:{"second-info":!0,festival:c}},u)])},dateFormat:function(e){var t=new Date(e);return t.getFullYear()+"-"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+(t.getDate()<10?"0"+t.getDate():t.getDate())},dateClick:function(e){var t=this.dateFormat(e.date),a=this.holiday.indexOf(t);-1<a?this.holiday.splice(a,1):this.holiday.push(t)}}},r=(a("a25c"),a("2877")),i=Object(r.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"jrgl"},[a("div",{staticClass:"ui-option"},[a("div",{staticClass:"option-left"},[a("div",{staticClass:"option-item"},[a("el-button",{attrs:{size:"small"}},[e._v("新增假日通知")])],1)]),a("div",{staticClass:"option-right"},[a("div",{staticClass:"option-item"},[a("el-date-picker",{attrs:{size:"small",type:"month","value-format":"yyyy-MM",clearable:!1,placeholder:"选择月"},on:{change:e.changeDate},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)])]),a("div",{staticClass:"ui-wrap"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:16}},[a("calendar",{ref:"calendar",attrs:{height:"100%",width:"100%","before-render":e.beforeRender,"render-content":e.renderContent,"week-title-align":"center","show-title":!1},on:{"month-change":e.renderMonthChange,"year-change":e.renderMonthChange,"date-click":e.dateClick}})],1),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"remarks"},[a("div",{staticClass:"remarks-title"},[e._v("备注信息")]),a("div",{staticClass:"remarks-content"},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.remarks,callback:function(t){e.remarks=t},expression:"remarks"}})],1)])])],1)],1)])},[],!1,null,null,null);t.default=i.exports},a25c:function(e,t,a){"use strict";var n=a("0f89");a.n(n).a}}]);