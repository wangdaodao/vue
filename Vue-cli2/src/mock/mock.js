// 引入mockjs
const Mock = require('mockjs')

var arr=['aa','bb','cc']

var obj={
  'host':'www.baidu.com',
  'port':'12345',
  'node':'selector'
}

Mock.mock(process.env.API_HOST + 'test',{
  'list|100':[{
    'img':'@image(100x100)',
    'name':'@cname',//重复fei这个字符串 3 次，打印出来就是'feifeifei'。
    'value|+1':0, //属性值自动加 1，初始值为 0
    'age|20-30':25,//生成一个大于等于 20、小于等于 30 的整数，属性值 25 只是用来确定类型
    'weight|100-120.2-5':110.24,//生成一个浮点数,整数部分大于等于 100、小于等于 120，小数部分保留 2 到 5 位。
    'likeMovie|1':Boolean,//随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。
    'friend1|1':arr,//从数组 arr 中随机选取 1 个元素，作为最终值。
    'friend2|+1':arr,//从属性值 arr 中顺序选取 1 个元素，作为最终值
    'friend3|2-3':arr,//通过重复属性值 arr 生成一个新数组，重复次数大于等于 2，小于等于 3。
    'life1|2':obj,//从属性值 obj 中随机选取 2 个属性
    'life1|1-2':obj,//从属性值 obj 中随机选取 1 到 2 个属性。
    'regexp1':/^[a-z][A-Z][0-9]$/,//生成的符合正则表达式的字符串
    'color': '@color',  // 16进制颜色
    'city': '@city(true)',   // 中国城市
    'birthday': '@date("yyyy-MM-dd")',  // 日期
  }]
})