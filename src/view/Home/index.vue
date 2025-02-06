<template>
  <div class="one">
    <div style="width: 100%; display: flex;margin-top: 5%; justify-content: center">
      <el-input
          v-model="input3"
          style="max-width: 600px"
          placeholder="Please input"
          class="input-with-select"
      >
        <template #prepend>
          <el-button  :icon="Search" />
        </template>
        <template #append>
          <el-select v-model="select" placeholder="Select" style="width: 115px">
            <el-option label="Restaurant" value="1" />
            <el-option label="Order No." value="2" />
            <el-option label="Tel" value="3" />
          </el-select>
        </template>
      </el-input>
    </div>
    <div style="width: 80%;display: flex;margin: 5% auto">
      <div style="width: 35%">
        <leftComponent></leftComponent>
      </div>
      <div style="width: 60%;padding-left: 5%">
        <rightComponent @showChat="showChat"></rightComponent>
      </div>
      <div style="padding-left: 15px;margin-top: 40%">
        <el-button type="text" @click="toPublish">点击打开 Dialog</el-button>
<!--        <el-button color="#626aef" lain icon="el-icon-plus" @click="toPublish"></el-button>-->
        <el-dialog
            v-model="dialogVisible"
            title="Tips"
            width="500"
            :before-close="handleClose"
        >
          <span>This is a message</span>
          <template #footer>
            <div class="dialog-footer">
              <el-button @click="dialogVisible = false">Cancel</el-button>
              <el-button type="primary" @click="dialogVisible = false">
                Confirm
              </el-button>
            </div>
          </template>
        </el-dialog>

      </div>
    </div>

<!--    <publish ></publish>-->

  </div>

</template>
<script>
import leftComponent from "@/components/leftComponent.vue"
import rightComponent from "@/components/rightComponent.vue"
import publish from "@/components/publish.vue"

  export default {
    data(){
      return{
        images:[],
        dialogVisible:false,
        showPublish:false,
      }
    },
    methods:{
      toPublish(){
        console.log("toPublish")
        this.dialogVisible = true
        console.log(this.dialogVisible)
      },
      showChat(){

      },
      handleClose(done) {
        this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
      },
      toJob(){
        this.$router.push("/job")
      }
    },
    components:{
      leftComponent,rightComponent,publish
    }
  }
</script>
<style scoped>
.one{
  width: 100%;
  height: 100%;
}
.carousel{
  max-width: 800px;
}
.el-dialog__wrapper {
  z-index: 2000; /* 确保遮罩层的层级高于其他元素 */
}
</style>
