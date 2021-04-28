<template>
  <div class="bar-container">
    <div class="bar" ref="bar"></div>
  </div>
</template>

<script>
import { myEcharts } from "@/utils/echarts.js";
export default {
  data() {
    return {};
  },
  mounted() {
    this.barEcharts();
  },
  methods: {
    barEcharts() {
      // 1、获取呈现图表的div
      let bar = this.$refs.bar;
      // 2、配置选项option
      var option = {
        title: {
          // 标题相关配置
          text: "成绩比对",
          left: "center",
        },
        tooltip: {
          // 引入柱状图的显示
          // trigger: 'item'
          trigger: "axis", // hover事件
          triggerOn: "click", // 点击事件
          // formatter: '{b}的成绩是{c}' // 提示内容 b代表当前柱状图名称，c代表柱状图数值
          formatter: function (arg) {
            return `${arg[0].name}的分数是${arg[0].data} `;
          },
        },
        toolbox: {
          // 图标右上角通用配置
          feature: {
            saveAsImage: {}, // 导出图片
            dataView: {}, // 数据视图（修改原始数据查看）
            restore: {}, // 重置数据
            dataZoom: {}, // 区域缩放
            magicType: {
              // 动态图表切换
              type: ["bar", "line"],
            },
          },
        },
        legend: {
          //图标筛选 对应series数组中的name
          data: ["小明", "小东"],
          bottom: "10",
        },
        xAxis: {
          type: "category",
          data: ["语文", "数学", "英语"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "小明",
            type: "bar",
            data: [99, 95, 85],
          },
          {
            name: "小东",
            type: "bar",
            data: [70, 90, 98],
          },
        ],
      };
      myEcharts(bar, option);
    },
  },
};
</script>

<style>
.bar-container .bar {
  width: 37.5rem;
  height: 37.5rem;
}
</style>