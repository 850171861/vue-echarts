<template>
  <div class="line-container">
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
import { myEcharts } from "@/utils/echarts.js";
export default {
  data() {
    return {
      xData: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ], // x轴数据
      yData1: [
        5000,
        4000,
        3000,
        4500,
        5000,
        6900,
        6100,
        8000,
        4000,
        6000,
        100,
        12000,
      ], // y轴数据
    };
  },
  mounted() {
    this.lineEcharts();
  },
  methods: {
    lineEcharts() {
      // 1、获取呈现图表的div
      let line = this.$refs.line;
      // 2、配置选项option
      let option = {
        title: {
          text: "折线图",
          left: "center",
        },
        xAxis: {
          type: "category",
          data: this.xData,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.yData1,
            type: "line",
          },
        ],
      };
      myEcharts(line, option);
    },
  },
};
</script>

<style>
.line-container .line {
  width: 37.5rem;
  height: 37.5rem;
}
</style>