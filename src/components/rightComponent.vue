<template>
  <el-card class="one">
      <div>
        <div style="display: flex;justify-content: space-between">
          <div>
            <div style="display: flex;justify-content: left;height: 30px">
              <h3 style="margin-top: 0px">Java开发</h3>
              <h3 style="margin-top: 0px;padding-left: 20px;color: #FF4E4E">4000</h3>
            </div>
            <div style="display: flex;justify-content: left">
              <h5><i class="el-icon-location-information"></i>芜湖</h5>
              <h5 style="padding-left: 12px"><i class="el-icon-suitcase-1"></i>1-3年</h5>
              <h5 style="padding-left: 12px"><i class="el-icon-postcard"></i>本科</h5>
            </div>
          </div>
          <div style="height: 90px;padding-top: 20px">
            <el-button>感兴趣</el-button>
            <el-button type="success" @cilck="sendMessage">立即沟通</el-button>
          </div>
        </div>

        <div>
          <h3 style="margin-top: 0px">职位描述</h3>
          <div>
            <el-tag class="tag-spacing">全职</el-tag>
            <el-tag class="tag-spacing">全栈开发</el-tag>
            <el-tag class="tag-spacing">抗压</el-tag>
          </div>
          <div>
            <h6>1.需要开发实力强劲的开发者</h6>
            <h6>2.需要开发实力强劲的开发者</h6>
            <h6>3.需要开发实力强劲的开发者</h6>
            <h6>4.需要开发实力强劲的开发者</h6>
          </div>
        </div>

        <div style="display: flex;justify-content: left">
          <div style="width: 60px;height: 60px"><img style="border-radius: 60%;width: 100%;height: 100%" src="../assets/vue.svg" alt=""></div>
          <div>
            <h4 style="padding-left: 10px;margin-bottom: 0px">余胜军</h4>
            <h6 style="padding-left: 10px;margin-top: 0px;margin-bottom: 0px">阿里巴巴首席Java技术主管</h6>
          </div>
        </div>

        <div style="margin-top: 35px">
          <h3>工作地址</h3>
          <div style="width: 100%;">
            <jmap></jmap>
          </div>
        </div>
      </div>
  </el-card>
</template>
<script>
import jmap from "@/components/map.vue"
export default {
  data(){
    return{

    }
  },
  components:{
    jmap
  },
  mounted() {
    this.getMap()
  },
  methods:{
    getMap() {
      // var map = new AMap.Map("container", {
      //   viewMode: "2D", // 默认使用 2D 模式，如果希望使用带有俯仰角的 3D 模式，请设置 viewMode: '3D',
      //   zoom: 11, //初始化地图层级
      //   center: [116.397428, 39.90923], //初始化地图中心点
      // });
    },
    sendMessage(){

    }
  }
}
</script>
<style scoped>
.one{
  width: 100%;
  height: 100%;
}
.tag-spacing {
  margin-left: 10px;
}
/* 第一个标签不需要左边距，可以单独设置 */
.tag-spacing:first-child {
  margin-left: 0;
}
</style>
