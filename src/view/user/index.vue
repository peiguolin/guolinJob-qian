<template>
  <div style="display: flex">
    <div style="width:1200px;margin: 0 auto;">
      <el-card>
        <el-descriptions title="" border>
          <el-descriptions-item
              :rowspan="2"
              :width="140"
              label="头像"
              align="center"
          >
            <el-image
                style="width: 100px; height: 100px"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
          </el-descriptions-item>
          <el-descriptions-item label="昵称">kooriookami</el-descriptions-item>
          <el-descriptions-item label="电话号">18100000000</el-descriptions-item>
          <el-descriptions-item label="角色信息">Hr</el-descriptions-item>
          <el-descriptions-item label="角色信息">
            <el-tag size="small">求职者</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="地址">
            伊拉克 和平市 战争区 反动分子街道38号
          </el-descriptions-item>
        </el-descriptions>
      </el-card>
      <div style="width: 1260px; padding-top: 20px; display: flex; align-items: flex-start;">
        <el-card style="flex: 1;">
          <el-descriptions
              title="个人简历"
              :column="4"
              :size="size"
              direction="vertical"
              :style="blockMargin"
          >
            <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
            <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
            <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>
            <el-descriptions-item label="Remarks">
              <el-tag size="small">School</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="Address">
              No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
            </el-descriptions-item>
          </el-descriptions>
        </el-card>
        <div style="margin-left: 20px;">
          <el-button :icon="Edit" size="large" circle @click="toEdit"></el-button>

          <el-dialog v-model="dialogVisible" :modal="false">
<!--            <span>修改简历</span>-->
            <div>
              <editResume></editResume>
            </div>
            <template #footer>
              <div class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogVisible = false">
                  确认修改
                </el-button>
              </div>
            </template>
          </el-dialog>
        </div>
      </div>
    </div>

  </div>

</template>
<script>
  import {Edit} from "@element-plus/icons-vue";
  import editResume from "@/components/resume/editResume.vue"
  import EditResume from "@/components/resume/editResume.vue";
  export default {
    components: {EditResume},
    computed: {
      Edit() {
        return Edit
      },
    },
    data(){
      return{
        dialogVisible:false,
      }
    },
    methods:{
      toEdit(){
        this.dialogVisible = true;
      }
    }
  }
</script>
<style scoped>

</style>
