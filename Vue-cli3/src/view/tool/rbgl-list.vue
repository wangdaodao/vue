<template>
  <!-- 日报管理 -->
  <div class="rbgl-list">
    <div class="ui-option">
      <div class="option-left">
        <div class="option-item">
          <el-button size="small" @click="back">返回</el-button>
        </div>
        <div class="option-item">
          <el-button size="small">导出Excel</el-button>
        </div>
      </div>
      <div class="option-right">
        <div class="option-item">
          <el-date-picker
            v-model="value"
            size="small"
            value-format="yyyy-MM-dd"
            @change="changeDate"
            :clearable="false"
            placeholder="选择日期"
          ></el-date-picker>
        </div>
      </div>
    </div>
    <div class="ui-wrap">
      <p class="rbgl-title">数据推送对照表（国家&网站）{{value}}</p>
      <div class="ui-table">
        <el-table
          :data="tableData"
          :span-method="objectSpanMethod"
          border
          class="table-list"
          stripe
          height="100%"
          style="width: 100%;"
        >
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column prop="id" label="ID" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: this.$route.query.date,
      tableData: [
        { id: "1", name: "1" },
        { id: "1", name: "1" },
        { id: "3", name: "3" },
        { id: "3", name: "3" },
        { id: "2", name: "2" }
      ],
      spanArr: []
    };
  },
  mounted: function() {
    let contactDot = 0;
    this.tableData.forEach((item, index) => {
      if (index === 0) {
        this.spanArr.push(1);
      } else {
        if (item.id === this.tableData[index - 1].id) {
          this.spanArr[contactDot] += 1;
          this.spanArr.push(0);
        } else {
          contactDot = index;
          this.spanArr.push(1);
        }
      }
    });
    this.value = localStorage.getItem("rbgl-date");
  },
  components: {},
  methods: {
    changeDate(val) {
      // this.$route.query.date = val
      // this.$refs.calendar.render(dateArr[0], dateArr[1]);
    },
    back(){
      this.$router.go(-1)
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 1) {
        if (this.spanArr[rowIndex]) {
          return {
            rowspan: this.spanArr[rowIndex],
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    }
  }
};
</script>
<style lang="scss">
.rbgl-list{
    .rbgl-title{
      font-size: 20px;
      text-align: center;
      margin: 20px 0;
    }
  }
</style>