<template>
  <div class="Modalbox2">
    <!-- 取消蒙尘 -->
    <h1 class="mc" @click="hideDetail">x</h1>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
  methods: {
    hideDetail() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="less" scoped>
.Modalbox2 {
  overflow-y: auto;
  width: 100%;
  height: 50%;
  position: fixed;
  top: 0;
  z-index: 9999999999;
  background: #fff;
}
</style>