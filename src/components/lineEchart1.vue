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
      yData2: [
        2000,
        3000,
        5000,
        4100,
        1000,
        1100,
        1100,
        1000,
        1000,
        1020,
        1033,
        1000,
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
          text: "折线图-多数据对比",
          left: "center",
        },
        xAxis: {
          type: "category",
          data: this.xData,
          boundaryGap: false,
        },
        yAxis: {
          type: "value",
          scale: true, //从最小最开始
        },
        series: [
          {
            data: this.yData1,
            type: "line",
            stack: "all",
          },
          {
            data: this.yData2,
            type: "line",
            stack: "all",
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