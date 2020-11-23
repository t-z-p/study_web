<template>
  <div class="webflux">
    <el-row>
      <el-button type="primary" @click="start_btn">Start</el-button>
      <el-button type="primary" @click="stop_btn">Stop</el-button>
    </el-row>
    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [],
      eveSource: null
    }
  },
  methods: {
    initEvenSource (url) {
      if (this.eveSource != null) {
        this.eveSource.close()
      }
      this.eveSource = new EventSource(url)
      this.funEvenSource(this.eveSource)
    },
    funEvenSource () {
      this.eveSource.onopen = ev => {
        this.$message.info('连接已开始')
      }
      this.eveSource.onerror = ev => {
        this.$message.info('错误连接')
      }
      this.eveSource.addEventListener('ing', ev => {
        this.list.push(JSON.parse(ev.data))
      })
      this.eveSource.addEventListener('end', ev => {
        this.eveSource.close()
        this.$message.info('数据传输完毕')
      })
    },
    start_btn (url) {
      this.initEvenSource('/user/list2')
      this.eveSource.onopen()
      this.$message.info('数据传输开始')
      this.list = []
    },
    stop_btn () {
      this.eveSource.close()
      this.$message.info('数据传输停止')
    }
  }
}
</script>
