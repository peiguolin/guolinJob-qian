<template>
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
    <div style="padding-top: 20px">
      <el-card >
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
    </div>

  </div>
</template>
<script setup>

</script>
<style scoped>

</style>
