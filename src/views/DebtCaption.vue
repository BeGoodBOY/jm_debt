<template>
  <div class="main">
    <div class="header">
      <div class="title-box">
        <span @click="goBack" class="left-arrow">
          <i class="iconfont">&#xe605;</i>
        </span>
        <h3 class="title">债权分配确认</h3>
      </div>
    </div>
    <div class="jm-panel jm-flow-panel">
      <div class="jm-flow-box">
        <div class="flow-item">
          <i class="iconfont flow-item-arrow">&#xe603;</i>
        </div>
        <div class="flow-item">
          <i class="iconfont flow-item-arrow">&#xe603;</i></div>
        <div class="flow-item">
          <i class="iconfont flow-item-arrow">&#xe603;</i></div>
        <div class="flow-item">
          <i class="iconfont flow-item-arrow">&#xe603;</i></div>
      </div>
      <div class="jm-flow-text-box">
        <div class="flow-text-item">发起债权<br />认领申请</div>
        <div class="flow-text-item">待系统分配<br />债权</div>
        <div class="flow-text-item">债权分配<br />确认</div>
        <div class="flow-text-item">查看债权<br />信息</div>
      </div>
    </div>
    <div class="jm-panel">
      <h3 class="jm-h3">债权分配说明</h3>
      <div class="jm-para-box">
        <p>1.债权认领申请一旦发起即不可撤销</p>
        <p>
          2.系统按分配规则统一进行分配，分配后请用户及时登录认领系统进行确认，一旦确认即不可撤销
        </p>
        <p>3.确认债权分配后，可查看债权详情、债权认领协议</p>
      </div>
    </div>
    <span @click="goDebtDstbtCfm" class="jm-btn-btm-lg">
      已阅读，进入下一步
    </span>
  </div>
</template>
<script>
export default {
  name: "DebtCaption",
  components: {},
  methods: {
    goDebtDstbtCfm() {
      this.$router.push('debt_dstbt_cfm')
    },
    goBack() {
      this.$router.back()
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  background: #f3f3f3;
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
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  background: #fff;
}

.jm-flow-panel {
  padding-top: 0.9rem;
  padding-bottom: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.jm-h3 {
  margin-bottom: 0.2rem;
  font-size: 0.32rem;
  color: #000;
  font-weight: normal;
  text-align: left;
}

.jm-para-box {
  text-align: left;
  font-size: 0.28rem;
  color: #8b8e93;
  line-height: 0.5rem;
}

.jm-flow-box {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.34rem;
  &:after {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    content: "";
    width: 100%;
    border-bottom: 2px solid #63d670;
    margin-top: -1px;
  }
}

.flow-item {
  z-index: 3;
  position: relative;
  width: 0.3rem;
  height: 0.3rem;
  background: #63d670;
  border-radius: 100%;
  text-align: center;
  line-height: 0.3rem;
  .flow-item-arrow {
    color: #fff;
    font-size: 0.15rem;
  }
}

.jm-flow-text-box {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.1rem;
}

.flow-text-item {
  font-size: 0.24rem;
  color: #000;
  line-height: 0.32rem;
}

.jm-btn-btm-lg {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1.2rem;
  font-size: 0.36rem;
  color: #fff;
  line-height: 1.2rem;
  background-image: linear-gradient(to right,#2cb2fb,#208beb);
}
</style>
