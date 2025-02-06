<template>
  <div>
    3423

  </div>
<!--  <el-dialog v-model="dialogVisible" title="Tips" width="500" draggable>-->
<!--    <span>It's a draggable Dialog</span>-->
<!--    <template #footer>-->
<!--      <div class="dialog-footer">-->
<!--        <el-button @click="dialogVisible = false">Cancel</el-button>-->
<!--        <el-button type="primary" @click="dialogVisible = false">-->
<!--          Confirm-->
<!--        </el-button>-->
<!--      </div>-->
<!--    </template>-->
<!--  </el-dialog>-->
</template>
<script>
  export default {
    data() {
      return {
        dialogVisible: true
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_)
      }
    }
  }
</script>
<style scoped>

</style>
