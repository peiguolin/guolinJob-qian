<template>
  <!--判断用户实名状态，为企业则发布岗位，未实名则发布兼职岗位-->
  <!--公司-->
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="职位名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="岗位大类">
        <el-select v-model="form.region" placeholder="请选择岗位大类">
          <el-option label="大类一" value="shanghai"></el-option>
          <el-option label="大类二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学历要求">
        <el-select v-model="form.region" placeholder="请选择岗位大类">
          <el-option label="小学" value="shanghai"></el-option>
          <el-option label="幼儿园" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="招聘时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="开始日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="结束时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="是否有效">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="福利待遇">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="休假类型">
        <el-radio-group v-model="form.resource">
          <el-radio label="单休"></el-radio>
          <el-radio label="双休"></el-radio>
          <el-radio label="单双休"></el-radio>
          <el-radio label="无休"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="岗位描述">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="handleClose">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
  <!--个人-->
  <div>

  </div>

</template>
<script>
import { ElMessage } from 'element-plus'
  export default {
    data(){
      return{
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    created() {
      this.demo();
    },
    methods:{
      handleClose(){
        this.$emit('handleClose')
      },
      demo(){
        ElMessage({
          message: '未完善企业信息，只能创建兼职信息',
          type: 'warning',
        })
      }
    }
  }
</script>
<style scoped>

</style>
