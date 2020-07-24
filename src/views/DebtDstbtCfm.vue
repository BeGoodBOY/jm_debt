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
    <div class="sub-box">
      <p class="sub-des">以下是为您分配的债权列表，请确认</p>
      <div class="pane-box">
        <div class="pane-item">
          <div class="pane-item-cont">
            ¥<em>{{ formatMoney(totalAmount) }}</em>
          </div>
          <div class="pane-item-tag">分配总金额（元）</div>
        </div>
        <div class="pane-item">
          <div class="pane-item-cont">
            <em>{{ debtToBeConfirmCount }}</em>
          </div>
          <div class="pane-item-tag">分配债权数（个）</div>
        </div>
        <span class="pane-item-line"></span>
      </div>
    </div>
    <div class="list-box">
      <div class="list-cont" v-if="true">
        <table class="table-normal">
          <tr>
            <th>项目名称</th>
            <th>资产类型</th>
            <th>认领金额</th>
            <th>回款金额</th>
            <th>回款状态</th>
          </tr>
          <tr v-for="item in debtList" :key="item.id" :id="item.id" @click="goDetail(item.id)">
            <td>{{ item.strProjectCategroy }}</td>
            <td>{{ item.strProjectName }}</td>
            <td>{{ formatMoney(item.decAmount) }}</td>
            <td>{{ formatMoney(item.decRepayAmount) }}</td>
            <td style="color: #999;">{{ item.strRepayState }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="protocol-line">
      <span class="protocol-check" :class="protocolClassOb" @click="goCheck"><i class="iconfont">&#xebe6;</i></span>
      <em>同意并勾选<span class="protocol-entry">《认领债权协议书》</span></em>
    </div>
    <span class="jm-btn-btm-lg" :class="protocolClassOb" @click="confirmDebt">确认同意</span>
  </div>
</template>
<script>
import axios from "axios";
import { getStorage, formatMoney } from '../utils/utils'

export default {
  name: "DebtDetail",
  components: {
    // HelloWorld
  },
  data() {
    return {
      totalAmount: 0, //分配总金额
      debtToBeConfirmCount: 0, //待确认债权分配比数
      protocolUrl: "", //协议地址
      debtList: [], //债权列表
      protocolClassOb: {
        isActive: true
      }
    };
  },
  mounted() {
    // const query = this.$route.query;
    axios
      .get("/api/debt/view/confirm", {
        headers: {
          Authorization: JSON.stringify({
            token: getStorage('jm_token'),
            time: getStorage('jm_time')
          })
        }
      })
      .then(({ data }) => {
        this.totalAmount = data.decRegAmount;
        this.debtToBeConfirmCount = data.nRegCount;
        this.debtList = data.debts;
      })
      .catch(err => {
        alert(err);
      });
  },
  methods: {
    //确认债权认领
    confirmDebt() {
      if(!this.protocolClassOb.isActive) {
        // alert('请勾选《债权认领协议》')
        return
      }
      axios
        .get("/api/debt/confirm", {
          headers: {
            Authorization: JSON.stringify({
              token: getStorage('jm_token'),
              time: getStorage('jm_time')
            })
          }
        })
        .then(() => {
          this.$router.push('debt_dstbt_rst')
        })
        .catch(err => {
          alert(err);
        });
    },
    goBack() {
      this.$router.back()
    },
    goDetail(id) {
      this.$router.push('debt_detail/'+id) 
    },
    formatMoney(money) {
      return formatMoney(money)
    },
    goCheck() {
      this.protocolClassOb.isActive = !this.protocolClassOb.isActive
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow: auto;
  background: #f3f3f3;
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
  .sub-des {
    padding-left: 0.2rem;
    font-size: 0.28rem;
    color: #fff;
    text-align: left;
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
  .list-cont {
    padding: 0 0.3rem;
  }
}

.table-normal {
  width: 100%;
  text-align: center;
  th {
    height: 0.86rem;
    font-size: 0.26rem;
    color: #999;
    font-weight: normal;
    border-bottom: 1px solid #eee;
    width: 20%;
  }
  td {
    height: 1rem;
    font-size: 0.26rem;
    color: #333;
    border-bottom: 1px solid #eee;
  }
}

.block {
  background: #fff;
  padding: 0 0.3rem;
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
  background: #eee;
  &.isActive {
    background-image: linear-gradient(to right,#2cb2fb,#208beb);
  }
}

.protocol-line {
  display: flex;
  align-items: center;
  height: 0.3rem;
  margin-top: 0.5rem;
  padding: 0 0.3rem;
  font-size: 0.26rem;
  line-height: 0.3rem;
  color: #999;
  text-align: left;
  vertical-align: middle;
  .protocol-entry {
    color: #1a99f5;
  }
  .protocol-check {
    box-sizing: border-box;
    width: 0.3rem;
    height: 0.3rem;
    margin-right: 0.2rem;
    border: 1px solid #1a99f5;
    border-radius: 50%;
    text-align: center;
    .iconfont {
      visibility: hidden;
      font-size: 0.26rem;
    }
  }
  .protocol-check.isActive {
    background: #1a99f5;
    .iconfont {
      visibility: visible;
      color: #fff;
    }
  }
}
</style>
