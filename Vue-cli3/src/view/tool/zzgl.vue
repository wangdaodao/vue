<template>
  <!-- 下面的class="zzgl"，最好按照模块来命名，这样后期针对模块方便修改 -->
  <div class="zzgl">
    <div class="ui-option">
      <div class="option-left">
        <div class="option-item">
          <el-button size="small" @click="dialogVisible = true">新增资质</el-button>
        </div>
        <div class="option-item">
          <el-button size="small">资质基本信息维护</el-button>
        </div>
      </div>
      <div class="option-right">
        <div class="option-item">
          资质序列：
          <el-select size="small" class="ui-w160" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="option-item">
          资质行业：
          <el-select size="small" class="ui-w160" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="option-item">
          资质专业：
          <el-select size="small" class="ui-w160" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="option-item">
          <el-input size="small" class="ui-w160" placeholder="请输入内容" v-model="search">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </div>
    </div>
    <div class="ui-wrap">
      <div class="ui-table">
        <el-table class="table-card" :data="tableData" height="100%" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </div>
      <div class="ui-pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout=" prev, pager, next,total, sizes"
          :total="400"
        ></el-pagination>
      </div>
    </div>
    <el-dialog v-drag title="提示" :visible.sync="dialogVisible" custom-class="dialog-middle">
      <div>
        <el-form ref="form" size="small" :model="form" label-width="auto">
          <div>
            <el-form-item label="活动名称：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动名称：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </div>
          <div class="form-col2">
            <el-form-item label="活动名称：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动名称：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="medium" @click="dialogVisible = false">确 定</el-button>
        <el-button size="medium" @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      search: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      currentPage: 1,
      dialogVisible: false,
      form: {
        name: ""
      }
    };
  },
  mounted: function() {},
  components: {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

