<template>
  <!-- 日报管理 -->
  <div class="rbgl-calendar">
    <div class="ui-option">
      <div class="option-left">
        <div class="option-item">
          <el-date-picker
            v-model="value"
            size="small"
            type="month"
            value-format="yyyy-MM"
            @change="changeDate"
            :clearable="false"
            placeholder="选择月"
          ></el-date-picker>
        </div>
      </div>
    </div>
    <div class="ui-wrap">
      <calendar
        class="dailycalendar"
        height="100%"
        width="100%"
        ref="calendar"
        @month-change="renderMonthChange"
        @year-change="renderMonthChange"
        :before-render="beforeRender"
        :render-content="renderContent"
        @date-click="dateClick($event)"
        week-title-align="center"
        :show-title="false"
      />
    </div>
  </div>
</template>

<script>
import Calendar from "../../components/calendar/main.js";
export default {
  name: "App",
  components: { Calendar },
  data() {
    return {
      value: new Date(),
      isread: [
        "2019-08-18",
        "2019-08-19",
        "2019-08-20",
        "2019-08-21",
        "2019-08-22",
        "2019-08-26",
        "2019-08-27",
      ],
      unread:[
        "2019-08-23",
        "2019-08-24",
        "2019-08-25"
      ]
    };
  },
  methods: {
    changeDate(val) {
      var dateArr = val.split("-");
      this.$refs.calendar.renderThisMonth(dateArr[0], dateArr[1]);
      // this.$refs.calendar.render(dateArr[0], dateArr[1]);
    },
    renderMonthChange(year, month) {
      this.$refs.calendar.getRenderedMonth();
    },
    beforeRender(year, month, next) {
      next();
    },
    twoDigit: function(num) {
      return ("000" + num).slice(-2);
    },
    renderContent(h, data) {
      var {
        isToday,
        isHoliday,
        isWeekend,
        isRead,
        unRead,
        isOtherMonthDay,
        year,
        day,
        month,
        renderYear,
        renderMonth,
        lunar,
        weekDay,
        festival,
        term
      } = data;

      // lunar对象中存有农历数据
      var { lunarDayChiness } = lunar;

      //第二行展示的数据的优先级为 节日>节气>农历日
      var secondInfo = festival
        ? festival
        : term
        ? term
        : lunarDayChiness || "";

      var dateStr = `${year}-${this.twoDigit(month)}-${this.twoDigit(day)}`;

      // var isHoliday = !!~this.holiday.indexOf(dateStr);
      var isRead = !!~this.isread.indexOf(dateStr);
      var unRead = !!~this.unread.indexOf(dateStr);
      var isWeekend = isWeekend;

      return h(
        "div",
        {
          class: {
            "date-box": true,
            "daily-today": isToday,
            weekend: isWeekend,
            daily: isHoliday,
            "isread":isRead,
            "unread":unRead,
            "other-month": isOtherMonthDay
          }
        },
        [
          h(
            "div",
            {
              class: {
                "first-info": true
              }
            },
            day
          ),
          h(
            "div",
            {
              class: {
                "second-info": true,
                festival: festival
              }
            },
            secondInfo
          )
        ]
      );
    },
    dateFormat: function(time) {
      var date = new Date(time);
      var year = date.getFullYear();
      /* 在日期格式中，月份是从0开始的，因此要加0
       * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
       * */
      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      // 拼接
      return year + "-" + month + "-" + day;
    },
    dateClick(date, $event) {
      // this.removeActive();
      // Dom().addClass(event.target, "active");
      console.log("date", this.dateFormat(date.date));
      localStorage.setItem("rbgl-date",this.dateFormat(date.date))
      this.$router.push({ name: 'rbgl-list'})
    },
  }
};
</script>

<style lang="scss">
.rbgl-calendar{
  .dailycalendar{
    .first-info,.second-info{
      pointer-events: none;
    }
    .isread{
      background-color: #f4fff6;
    }
    .unread{
      color: #fff;
      background-image:linear-gradient(180deg, #9BFFDA,#25CFB2)
    }
    .daily-today{
      outline: 1px solid #26D0B3;
    }
  }
  
}
</style>