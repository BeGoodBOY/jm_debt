<template>
  <div class="main">
    <div class="header" :style="headerStyle">
      <div class="title-box">
        <span class="left-arrow" @click="goBack">
          <i class="iconfont">&#xe605;</i>
        </span>
        <h3 class="title">债权详情</h3>
      </div>
    </div>
    <div class="sub-box">
      <h3 class="sub-tit">
        <span>{{ debt.name }}</span>
        <span class="sub-tit-tip">{{ debt.state }}</span>
      </h3>
      <div class="pane-box">
        <div class="pane-item">
          <div class="pane-item-cont">¥<em>{{ clammedAmount }}</em></div>
          <div class="pane-item-tag">认领金额(元)</div>
        </div>
        <div class="pane-item">
          <div class="pane-item-cont">¥<em>{{ backedAmount }}</em></div>
          <div class="pane-item-tag">已回款金额(元)</div>
        </div>
        <span class="pane-item-line"></span>
      </div>
    </div>
    <div class="jm-panel">
      <div class="md-tit">
        <span class="md-tit-text">债权人信息</span>
      </div>
      <div class="jm-card">
        <div class="jm-card-line">
          <div class="jm-card-tag">姓名：</div>
          <div class="jm-card-value">{{ creditor.name }}</div>
        </div>
        <div class="jm-card-line">
          <div class="jm-card-tag">身份证：</div>
          <div class="jm-card-value">{{ creditor.idCard }}</div>
        </div>
        <div class="jm-card-line">
          <div class="jm-card-tag">手机号：</div>
          <div class="jm-card-value">{{ creditor.mobile }}</div>
        </div>
      </div>
    </div>
    <div class="jm-panel">
      <div class="md-tit">
        <span class="md-tit-text">债权详情</span>
      </div>
      <div class="jm-card">
        <div class="jm-card-line space-between-box">
          <div class="jm-card-tag">项目名称：</div>
          <div class="jm-card-value">{{ debt.name }}</div>
        </div>
        <div class="jm-card-line space-between-box">
          <div class="jm-card-tag">借款本金（元）：</div>
          <div class="jm-card-value">{{ debt.principal }}</div>
        </div>
        <div class="jm-card-line space-between-box">
          <div class="jm-card-tag">借款时间：</div>
          <div class="jm-card-value">{{ debt.startTime }}</div>
        </div>
        <div class="jm-card-line space-between-box ">
          <div class="jm-card-tag">可认领金额：</div>
          <div class="jm-card-value">{{ debt.claimableAmount }}</div>
        </div>
        <div class="jm-card-line space-between-box">
          <div class="jm-card-tag">还款方式：</div>
          <div class="jm-card-value">{{ debt.repayment }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { getStorage } from "../utils/utils"

export default {
  name: "DebtDetail",
  components: {},
  data() {
    return {
      clammedAmount: 0, //认领金额
      backedAmount: 0, //已回款金额
      creditor: {
        //债权人信息
        name: "", //姓名
        idCard: "", //身份证号
        mobile: "" //手机号
      },
      debt: {
        //债权详情
        name: "-", //项目名称
        state: '-',//项目状态
        principal: 0, //借款本金
        startTime: "-", //借款时间
        claimableAmount: 0, //可认领金额
        repayment: "-" //还款方式
      },
      headerStyle: {}
    };
  },
  mounted() {
    this.getPageInfo();
  },
  methods: {
    getPageInfo() {
      axios
        .get("/debt/detail/" + this.$route.params.id, {
          headers: {
            Authorization: JSON.stringify({
              token: getStorage('jm_token'),
              time: getStorage('jm_time')
            })
          }
        })
        .then(({ data }) => {
          this.clammedAmount = data.decRemainAmount;
          this.backedAmount = data.decRepayAmount;
          this.creditor.name = data.strBorrowerUserRealName;
          this.creditor.idCard = data.strIdCard;
          this.creditor.mobile = data.strBorrowerUserMobile;
          this.debt.name = data.strProjectName;
          this.debt.state = data.nRepayState;
          this.debt.principal = data.decAmount;
          this.debt.startTime = data.strDealDate;
          this.debt.claimableAmount = data.decEnableDebtAmount;
          this.debt.repayment = data.strRepaymentCalcType;
          if(this.debt.state === '已完成') {
            this.headerStyle = {'backgroundImage': 'linear-gradient(to right, #7fd5c0, #64b9b3)'};
          }
        })
        .catch(err => {
          alert(err);
        });
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

.mt20 {
  margin-top: 0.2rem;
}

.header {
  position: relative;
  width: 100%;
  padding-top: 0.34rem;
  padding-bottom: 2.4rem;
  background-image: linear-gradient(to right, #fba136, #f48319);
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
      color: #fff;
    }
  }
  .title {
    font-size: 0.36rem;
    color: #fff;
    font-weight: 500;
  }
}

.sub-box {
  position: relative;
  margin-top: -1.86rem;
  padding: 0 0.2rem;
  font-weight: 500;
  .sub-tit {
    padding-left: 0.2rem;
    text-align: left;
    font-size: 0.32rem;
    color: #fff;
  }
  .sub-tit-tip {
    float: right;
    padding: 0.06rem 0.14rem;
    font-size: 0.24rem;
    font-weight: 300;
    color: #fff;
    border: 1px solid rgba(255,255,255, 0.5);
    border-radius: 0.1rem;
  }
}

.pane-box {
  position: relative;
  margin-top: 0.4rem;
  padding: 0.6rem 0;
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 0.1rem;
  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.1);
  .pane-item {
    width: 50%;
    box-sizing: border-box;
    padding-left: 0.46rem;
    text-align: left;
  }
  .pane-item-cont {
    font-size: 0.3rem;
    font-weight: bolder;
    color: #5b5b5b;
    em {
      padding-left: 0.06rem;
      font-size: 0.48rem;
      font-weight: 500;
    }
  }
  .pane-item-tag {
    font-size: 0.24rem;
    color: #999;
    margin-top: 0.2rem;
  }
  .pane-item-line {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 1px;
    height: 0.9rem;
    background: #999;
    transform: translateY(-50%);
  }
}

.jm-panel {
  margin-top: 0.2rem;
  background: #fff;
  .md-tit {
    margin: 0 0.2rem;
    text-align: left;
    line-height: 0.88rem;
    border-bottom: 1px solid #ddd;
    .md-tit-text {
      padding-left: 0.1rem;
      font-size: 0.32rem;
      color: #555;
      font-weight: bolder;
    }
  }
}

.jm-card {
  padding: 0.25rem 0.3rem;
}

.jm-card-line {
  display: flex;
  font-size: 0.28rem;
  line-height: 0.58rem;
  .jm-card-tag {
    color: #5b5b5b;
  }
  .jm-card-value {
    color: #555;
  }
}

.space-between-box {
  justify-content: space-between;
}
</style>
