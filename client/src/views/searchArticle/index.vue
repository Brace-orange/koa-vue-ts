<template>
  <div>
    <div>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入文章链接"
        v-model="textarea">
      </el-input><button>搜索</button>
    </div>
    <div>
      <el-input v-model="input" placeholder="请输入标题"></el-input>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入文章链接"
        v-model="textlink">
      </el-input>
      <button>添加</button>
    </div>
    <div>
      
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      textarea: '',
      input: '',
      textlink: ''
    }
  }
}
</script>
<style scoped>

</style>