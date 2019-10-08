<template>
  <!-- 假日管理 -->
  <div class="jrgl">
    <div class="ui-option">
      <div class="option-left">
        <div class="option-item">
          <el-button size="small">新增假日通知</el-button>
        </div>
      </div>
      <div class="option-right">
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
      <el-row :gutter="0">
        <el-col :span="16">
          <calendar
            height="100%"
            width="100%"
            ref="calendar"
            @month-change="renderMonthChange"
            @year-change="renderMonthChange"
            :before-render="beforeRender"
            @date-click="dateClick"
            :render-content="renderContent"
            week-title-align="center"
            :show-title="false"
          />
        </el-col>
        <el-col :span="8">
          <div class="remarks">
            <div class="remarks-title">备注信息</div>
            <div class="remarks-content">
              <el-input type="textarea" placeholder="请输入内容" v-model="remarks"></el-input>
            </div>
          </div>
        </el-col>
      </el-row>
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
      textarea: "",
      year:"",
      holiday: [
        "2018-01-18",
        "2018-01-19",
        "2018-01-28",
        "2018-02-18",
        "2018-03-18"
      ],
      remarks:""
    };
  },
  watch: {
    year:'yearChange'
  },
  methods: {
    yearChange(newyear, oldyear){
      if(oldyear != '' && (newyear != oldyear)){
        console.log("切换年了，提交一下")
      }
    },
    changeDate(val) {
      var dateArr = val.split("-");
      this.year = dateArr[0];
      this.$refs.calendar.renderThisMonth(dateArr[0], dateArr[1]);
      console.log(this.year,this.holiday)
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

      var isHoliday = !!~this.holiday.indexOf(dateStr);
      var isWeekend = isWeekend;

      return h(
        "div",
        {
          class: {
            "date-box": true,
            today: isToday,
            weekend: isWeekend,
            holiday: isHoliday,
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
    dateClick(date) {
      var currentDate = this.dateFormat(date.date);
      var index = this.holiday.indexOf(currentDate);
      if (index > -1) {
        this.holiday.splice(index, 1);
      } else {
        this.holiday.push(currentDate);
      }
      // console.log("this.holiday",this.holiday);
    }
  }
};
</script>

<style lang="scss">
.jrgl{
  .remarks{
    margin: 10px 10px 10px 0;
    background-color: #fff;
    border: 1px solid $line;
    .remarks-title{
      height: 55px;
      line-height: 55px;
      text-align: center;
      background-color: #3C394A;
      color: #fff;
      font-size: 18px
    }
    .remarks-content{
      padding: 10px;
      height: 478px;
      .el-textarea{
        height: 100%;
      }
      textarea{
        height: 100%;
      }
    }
  }
}

</style>
