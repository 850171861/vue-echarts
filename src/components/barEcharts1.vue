<template>
  <div class="bar-container">
    <div class="bar" ref="bar"></div>
  </div>
</template>

<script>
import { myEcharts } from "@/utils/echarts.js";
export default {
  data() {
    return {
      data: [70, 34, 60, 78, 69],
      titlename: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
      valdata: [702, 350, 610, 793, 664],
      myColor: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    };
  },
  mounted() {
    this.barEcharts();
  },
  methods: {
    barEcharts() {
      let _this = this;
      let bar = this.$refs.bar;
      let option = {
        //图标位置
        grid: {
          top: "10%",
          left: "22%",
          bottom: "10%",
        },
        xAxis: {
          show: false,
        },
        yAxis: [
          {
            show: true,
            data: _this.titlename,
            inverse: true,
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "#000",

              rich: {
                lg: {
                  backgroundColor: "#339911",
                  color: "#fff",
                  borderRadius: 15,
                  align: "center",
                  width: 15,
                  height: 15,
                },
              },
            },
          },
          {
            show: true,
            inverse: true,
            data: this.valdata,
            axisLabel: {
              textStyle: {
                fontSize: 12,
                color: "#fff",
              },
            },
          },
        ],
        series: [
          {
            name: "条",
            type: "bar",
            yAxisIndex: 0,
            data: this.data,
            barCategoryGap: 50,
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 20,
                color: function (params) {
                  var num = _this.myColor.length;
                  return _this.myColor[params.dataIndex % num];
                },
              },
            },
            label: {
              normal: {
                show: true,
                position: "inside",
                formatter: "{c}%",
              },
            },
          },
          {
            name: "框",
            type: "bar",
            yAxisIndex: 1,
            barCategoryGap: 50,
            data: [100, 100, 100, 100, 100],
            barWidth: 15,
            itemStyle: {
              normal: {
                color: "none",
                borderColor: "#00c1de",
                borderWidth: 3,
                barBorderRadius: 15,
              },
            },
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