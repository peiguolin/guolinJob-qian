<template>
  3433555
  <div id="Map">
    34433
  </div>
</template>
<script>
// import map from "@/components/"
export default {
  data(){
    return{
      map: null, //地图实例
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: "输入你的Key", // 申请好的Web端开发者Key，首次调用 load 时必填
        //2.0版本太卡了 ，所以使用的1.4.0版本  其插件也有不同  如：ToolBar
        version: "1.4.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        resizeEnable: true,
        plugins: [
          "AMap.ToolBar", //工具条
          "AMap.Scale", // 比例尺
          "AMap.Geolocation", //定位
        ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        console.log(AMap);
        this.map = new AMap.Map("Map", {
          //设置地图容器id
          //这里的参数有许多可根据需要添加  点击下面《map地图参数》跳转
          viewMode: "3D", //是否为3D地图模式
          zoom: 14, //初始化地图级别
          center: [116.397128, 39.916527], //初始化地图中心点位置
        });
      }).catch(e => {
        console.log(e);
      })
    }
  },
};
</script>
<style scoped>

</style>