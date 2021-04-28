<template>
  <div class="cantainer">
    <div class="bar">
      <barEcharts />
      <barEcharts1 />
        <pieEcharts />
    </div>
    <div class="pie">
       <lineEchart />
      <lineEchart1 />
      <pieEcharts1 />
    </div>
    <div class="line">
    </div>
  </div>
</template>

<script>
import pieEcharts from "@/components/pieEcharts";
import pieEcharts1 from "@/components/pieEcharts1";
import lineEchart from "@/components/lineEchart";
import lineEchart1 from "@/components/lineEchart1";
import barEcharts from "@/components/barEcharts";
import barEcharts1 from "@/components/barEcharts1";
export default {
  components: {
    pieEcharts,
    pieEcharts1,
    lineEchart,
    lineEchart1,
    barEcharts,
    barEcharts1,
  },
};
</script>

<style>
.cantainer .pie {
  display: flex;
}
.cantainer .line {
  display: flex;
}
.cantainer .bar {
  display: flex;
}
</style>