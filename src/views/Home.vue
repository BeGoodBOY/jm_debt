<template>
  <div class="main">
    <div class="header">
      <div class="title-box">
        <span class="left-arrow">
          <i class="iconfont">&#xe605;</i>
        </span>
        <h3 class="title">债权认领中心</h3>
      </div>
    </div>
    <div class="sub-box">
      <h3 class="sub-tit">我的认领资产</h3>
      <div class="pane-box">
        <h3 class="pane-box-h3">申领金额（元）: {{ formatMoney(claimAmount) }}</h3>
        <div class="pane-box-block">
          <div class="pane-item">
            <div class="pane-item-cont">
              ¥
              <em>{{ formatMoney(ApplyAmount) }}</em>
            </div>
            <div class="pane-item-tag">认领总资产（元）</div>
          </div>
          <div class="pane-item">
            <div class="pane-item-cont">
              ¥
              <em>{{ formatMoney(repayAmount) }}</em>
            </div>
            <div class="pane-item-tag">认领已回款（元）</div>
          </div>
          <span class="pane-item-line"></span>
        </div>
      </div>
    </div>
    <div class="block mt20" v-if="needCfmFlag">
      <div class="my-debt-box">
        <div>
          <span class="icon-warn"></span>
          <span class="my-debt-text">
            <i class="iconfont" style="color:#f65b66">&#xe607;</i>
            您有<em>{{ debtToBeConfirmCount }}</em>笔债权分配待确认
          </span>
        </div>
        <span class="btn-myDebt" @click="goDebtCpt">立即确认</span>
      </div>
    </div>
    <div class="list-box">
      <div class="md-tit">
        <span class="md-tit-text">债转分配列表</span>
        <a :href="protocolUrl" class="md-tit-r" v-if="completeFlag">债权认领协议<i class="iconfont">&#xe603;</i></a>
      </div>
      <div class="list-cont" v-if="completeFlag">
        <table class="table-normal">
          <tr>
            <th>项目名称</th>
            <th>资产类型</th>
            <th>认领金额</th>
            <th>回款金额</th>
            <th>回款状态</th>
          </tr>
          <tr v-for="item in debtList" :key="item.id" :id="item.id" @click="goDetail(item.id)">
            <td class="blue">{{ item.strProjectCategroy }}</td>
            <td>{{ item.strProjectName }}</td>
            <td>{{ formatMoney(item.decAmount) }}</td>
            <td>{{ formatMoney(item.decRepayAmount) }}</td>
            <td :style="getStateStyle(item.strRepayState)">{{ item.strRepayState }}</td>
          </tr>
        </table>
      </div>
      <div class="jm-panel" v-if="noDebtFlag">
        <div class="prompt">
          <div class="prompt-icon">
            <img src="../assets/icon_assign.png" alt />
          </div>
          <div class="prompt-text">债权认领申请已发起，待分配......</div>
        </div>
      </div>
      <div class="jm-panel" v-if="needCfmFlag">
        <div class="prompt">
          <div class="prompt-icon">
            <img src="../assets/icon_confirm.png" alt />
          </div>
          <div class="prompt-text">认领债权已匹配，待确认......</div>
        </div>
        <span @click="goDebtCpt" class="jm-btn-normal">去确认</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { setStorage, getStorage, formatMoney } from '../utils/utils';

export default {
  name: "DebtDetail",
  components: {},
  data() {
    return {
      noDebtFlag: false,
      needCfmFlag: false,
      completeFlag: false,
      claimAmount: 0.0, //申领金额
      ApplyAmount: 0.0, //认领总资产
      repayAmount: 0.0, //认领已回款
      protocolUrl: "", //协议地址
      debtList: [], //债权列表
      state: "", //认领状态 0-已申请待匹配 5-匹配完成待审核 10-待用户给确认 15-回款中 20-回款完成
      debtToBeConfirmCount: 0 //待确认债权分配比数
    };
  },
  mounted() {
    this.getPageInfo()
  },
  methods: {
    //获取页面信息
    getPageInfo() {
      const query = this.$route.query;
      if(query.token && query.time) {
        setStorage('jm_token', query.token);
        setStorage('jm_time', query.time);
      }
      axios
        .get("/api/user/collect", {
          headers: {
            Authorization: JSON.stringify({
              token: getStorage('jm_token'),
              time: getStorage('jm_time')
            })
          }
        })
        .then(({ data }) => {
          this.claimAmount = data.decApplyAmount;
          this.ApplyAmount = data.decRegAmount;
          this.repayAmount = data.decRepayAmount;
          this.protocolUrl = data.strAssertViewUrl;
          this.debtList = data.debts;
          this.state = data.nState;//认领状态 0-已申请待匹配 5-匹配完成待审核 10-待用户给确认 15-回款中 20-回款完成
          this.debtToBeConfirmCount = data.nRegCount;
          if(this.state === 0 || this.state === 5) {//申领发起待匹配
            this.noDebtFlag = true
          }
          if(this.state === 10) {//待用户确认
            this.needCfmFlag = true
          }
          if(this.state === 15 || this.state === 20) {//债权已确认
            this.completeFlag = true
          }
        })
        .catch(err => {
          alert(err);
        });
    },
    goDebtCpt() {
      this.$router.push("debt_caption");
    },
    goDetail(id) {
      this.$router.push("/debt_detail/" + id)
    },
    getStateStyle(text) {
      if(text === "回款中") return {
        'color': '#999'
      }
      if(text === "已完成") return {
        'color': '#90d177'
      }
    },
    formatMoney(money) {
      return formatMoney(money)
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
  padding-bottom: 2.8rem;
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
  margin-top: -2.26rem;
  padding: 0 0.2rem;
  .sub-tit {
    padding-left: 0.2rem;
    text-align: left;
    font-size: 0.32rem;
    color: #fff;
    font-weight: 500;
  }
}

.pane-box {
  position: relative;
  margin-top: 0.4rem;
  padding: 0.5rem 0;
  background: #fff;
  border-radius: 0.1rem;
  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.1);
  .pane-box-h3 {
    margin: 0 0.46rem 0.5rem;
    padding-left: 0.1rem;
    padding-bottom: 0.5rem;
    font-size: 0.28rem;
    color: #999;
    text-align: left;
    font-weight: normal;
    border-bottom: 1px solid #e1e1e1;
  }
  .pane-box-block {
    position: relative;
    display: flex;
    align-items: center;
  }
  .pane-item {
    width: 50%;
    box-sizing: border-box;
    padding-left: 0.46rem;
    text-align: left;
  }
  .pane-item-cont {
    font-size: 0.3rem;
    font-weight: 500;
    color: #5b5b5b;
    em {
      padding-left: 0.06rem;
      font-size: 0.48rem;
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

.list-box {
  margin-top: 0.2rem;
  background: #fff;
  .md-tit {
    margin: 0 0.2rem;
    text-align: left;
    line-height: 0.88rem;
    border-bottom: 1px solid #ddd;
    .md-tit-text {
      font-size: 0.32rem;
      color: #555;
      font-weight: bolder;
    }
    .md-tit-r {
      float: right;
      font-size: 0.26rem;
      color: #3793df;
      .iconfont {
        font-size: 0.18rem;
        font-weight: 100;
      }
    }
  }
}

.list-cont {
  position: relative;
  overflow-x: scroll;
}

.table-normal {
  min-width: 100%;
  text-align: center;
  th {
    height: 0.86rem;
    font-size: 0.26rem;
    color: #999;
    font-weight: normal;
    border-bottom: 1px solid #eee;
    white-space: nowrap;
    width: 20%;
  }
  td {
    height: 1rem;
    font-size: 0.26rem;
    color: #333;
    border-bottom: 1px solid #eee;
    &.blue {
      color: #3793df;
    }
  }
}

.block {
  background: #fff;
  padding: 0 0.3rem;
}

.my-debt-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.88rem;
  padding: 0 o.1rem;
  .my-debt-text {
    font-size: 0.28rem;
    color: #5b5b5b;
    em {
      color: #f65b66;
    }
  }
  .btn-myDebt {
    width: 1.2rem;
    height: 0.34rem;
    font-size: 0.24rem;
    color: #f65b66;
    line-height: 0.34rem;
    border: 1px solid #f65b66;
    border-radius: 0.1rem;
  }
}

.prompt {
  margin-top: 1.26rem;
  .prompt-icon {
    width: 1.2rem;
    height: 1.2rem;
    margin: 0 auto;
  }

  .prompt-text {
    margin-top: 0.7rem;
    font-size: 0.24rem;
    color: #8b8e93;
  }
}

.jm-btn-normal {
  margin-top: 1.14rem;
  display: inline-block;
  width: 6.3rem;
  height: 0.86rem;
  font-size: 0.36rem;
  color: #1a99f5;
  text-align: center;
  line-height: 0.86rem;
  border: 1px solid #1a99f5;
  border-radius: 0.5rem;
}
</style>
