<template>
  <div style="display: flex">
    <!--侧边组件-->
    <div style="width: 450px">
      <leftA></leftA>
    </div>
    <div style="display: flex;flex-direction: row-reverse;">
      <!--顶部组件-->
      <div>
        <headA></headA>
      </div>
      <!--中间组件-->
      <div>
        <bodyA></bodyA>
      </div>
    </div>
  </div>



</template>
<script>
import headA from "@/components/admin/head.vue"
import bodyA from "@/components/admin/body.vue"
import leftA from "@/components/admin/left.vue"
  export default {
    components: {
      headA,
      bodyA,
      leftA
    },
    data() {
      return {

      }
    },
    methods: {

    },
    mounted() {

    }
  }
</script>
<style scoped>

</style>
