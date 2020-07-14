<template>
  <div class="main">
    <div class="header">
      <div class="title-box">
        <span class="left-arrow" @click="goBack">
          <i class="iconfont">&#xe605;</i>
        </span>
        <h3 class="title">债权分配确认</h3>
      </div>
    </div>
    <div class="jm-panel">
      <div class="prompt">
        <div class="prompt-icon">
          <img src="../assets/icon_success.png" alt />
        </div>
        <div class="prompt-text">债权分配申请提交成功！</div>
      </div>
    </div>
     <span class="jm-btn-lg" @click="goIndex">返回债权认领中心</span>
  </div>
</template>
<script>
export default {
  name: "DebtDstbtRst",
  components: {},
  methods: {
    goIndex() {
      this.$router.push("/");
    },
    goBack() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  background: #fff;
}

.header {
  position: relative;
  width: 100%;
  padding-top: 0.34rem;
  padding-bottom: 0.26rem;
  background: #fff;
  border-bottom: 1px solid #eee;
}

.title-box {
  position: relative;
  .left-arrow {
    position: absolute;
    left: 0.3rem;
    top: 50%;
    transform: translateY(-50%);
    .iconfont {
      font-size: 0.36rem;
      color: #89909d;
    }
  }
  .title {
    font-size: 0.36rem;
    color: #000;
    font-weight: normal;
  }
}

.jm-panel {
  margin-top: 2rem;
}

.prompt-icon {
  margin-bottom: 0.7rem;
  img {
    width: 1.2rem;
    height: 1.2rem;
  }
}

.prompt-text {
  font-size: 0.24rem;
  color: #8b8e93;
}

.jm-btn-lg {
  display: block;
  margin: 2.1rem auto;
  width: 6.3rem;
  height: 0.86rem;
  font-size: 0.36rem;
  color: #1a99f5;
  text-align: center;
  line-height: 0.86rem;
  border: 1px solid #1791f1;
  border-radius: 0.5rem;
}

</style>
