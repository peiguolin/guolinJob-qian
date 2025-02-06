<template>
  <div class="content">
    <!-- 用来显示地图 -->
    <!-- 可以不写宽度，但一定要有高度 -->
    <h6 style="margin-top: 5px;margin-bottom: 5px"><i class="el-icon-location-outline"></i>芜湖市外包产业园</h6>
    <div id="Map" style="height: 50vh;">
    </div>
  </div>

</template>
<script>
import AMapLoader from '@amap/amap-jsapi-loader'
export default {
  name: 'IndexMap',
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
        key: "6efac4f43ce352c634fcdd363ee6ea00", // 申请好的Web端开发者Key，首次调用 load 时必填
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
            center: [118.363077,31.271517], //初始化地图中心点位置
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
