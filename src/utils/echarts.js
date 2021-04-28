import * as echarts from 'echarts'

const myEcharts = (ref, option) => {
  const pieViews = echarts.init(ref)
  pieViews.setOption(option)
}
export {
  myEcharts
}
