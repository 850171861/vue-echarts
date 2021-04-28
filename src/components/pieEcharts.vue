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
        { age: "0-18岁", count: "800" },
        { age: "18-25岁", count: "990" },
        { age: "26-35岁", count: "778" },
        { age: "36-45岁", count: "900" },
        { age: "46-55岁", count: "700" },
        { age: "56-65岁", count: "1080" },
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
          text: "echarts饼图使用-年龄分布",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}的人数有{c}人<br>占比{d}", // 提示内容 b代表当前图名称，c代表图数值
        },
        legend: {
          bottom: 10,
        },
        series: [
          {
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            roseType: "area",
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