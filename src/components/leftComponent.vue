<template>
  <div>
    <div v-for="(item,index) in 4" :key="index" :style="{marginTop: index === 0 ? '0px' : '20px'}">
      <el-card>
        <div>
          <div class="itemBox">
            <div>
              <h4 style="margin-top: 0px">java开发</h4>
              <h6 style="padding: 0px;margin: 0px">8000</h6>
            </div>
            <div style="text-align: center">
              <img src="../assets/vue.svg">
              <h6 style="padding: 0px;margin: 0px">北京Vue跳动</h6>
            </div>

          </div>
          <div style="display: flex;margin-top: 20px">
            <el-tag>java</el-tag>
            <el-tag>不接受居家办公</el-tag>
          </div>
        </div>
      </el-card>
    </div>

  </div>
</template>
<script>

</script>
<style scoped>
.itemBox{
  display: flex;
  justify-content: space-between;
}
.card-spacing {
  padding-top: 20px;
  //margin-top: 10px;
}
/* 第一个标签不需要左边距，可以单独设置 */
.card-spacing:first-child {
  margin-left: 0;
}
</style>