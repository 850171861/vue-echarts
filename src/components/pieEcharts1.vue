<template>
  <div class="pie-container">
    <div class="pie" ref="pie"></div>
  </div>
</template>

<script>
import { myEcharts } from "@/utils/echarts.js";
export default {
  data() {
    return {
      data: [
        { age: "北京", count: "800" },
        { age: "上海", count: "990" },
        { age: "江苏", count: "554" },
        { age: "广东", count: "633" },
        { age: "广西", count: "700" },
        { age: "四川", count: "1500" },
      ],
    };
  },
  mounted() {
    this.pieEcharts();
  },
  methods: {
    pieEcharts() {
      // 1、获取呈现图表的div
      let pie = this.$refs.pie;
      // 2、配置选项option
      let option = {
        title: {
          // 标题相关配置
          text: "echarts饼图使用-地区分布",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "统计占比{d}",
        },
        legend: {
          bottom: 10,
        },
        series: [
          {
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: [
              { value: this.data[0].count, name: this.data[0].age },
              { value: this.data[1].count, name: this.data[1].age },
              { value: this.data[2].count, name: this.data[2].age },
              { value: this.data[3].count, name: this.data[3].age },
              { value: this.data[4].count, name: this.data[4].age },
              { value: this.data[5].count, name: this.data[5].age },
            ],
          },
        ],
      };
      myEcharts(pie, option);
    },
  },
};
</script>

<style>
.pie-container .pie {
  width: 37.5rem;
  height: 37.5rem;
}
</style>