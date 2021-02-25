<template>
  <div id="dashboard-container">
    <el-row type="flex" justify="space-around">
      <el-col>
        <el-card class="box-card"> </el-card>
      </el-col>
      <el-col> <el-card class="box-card"> </el-card></el-col>
      <el-col><el-card class="box-card"> </el-card> </el-col>
      <el-col><el-card class="box-card"> </el-card> </el-col>
      <el-col><el-card class="box-card"> </el-card> </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

  name: "dashboard",
};
</script>

<style scoped>
#dashboard-container {
  height: auto;
  margin: auto;
  max-width: 1920px;
  min-height: 1200px;
}
.text-center {
  text-align: center;
}

.el-row--flex {
  flex-direction: row;
}

@media (max-width: 1000px) {
  .el-row--flex {
    flex-direction: column;
  }
}
</style>
