<template>
  <div class="jm-app">
    <div class="header">
      <div class="title-box">
        <span @click="goBack" class="left-arrow">
          <i class="iconfont">&#xe605;</i>
        </span>
        <h3 class="title">认领债权协议书</h3>
      </div>
    </div>
    <div class="jm-main">
      <div class="jm-agrmt-box">
        <h3 class="jm-agrmt-tit">认领债权协议书</h3>
        <p class="jm-agrmt-num">协议编号：RLZQ2020-【xxxx】</p>
        <p class="jm-agrmt-p">本《认领债权协议书》（以下简称“本协议”）由下列各方于【 】年【 】月【 】日在北京市朝阳区或线上共同签订：</p>
        <h4 class="jm-agrmt-h4">甲方（债权分配方）：北京乐融多源信息技术有限公司</h4>
        <p class="jm-agrmt-p noindent">统一社会信用代码：911101055923826701</p>
        <h4 class="jm-agrmt-h4">乙方（出借人）：【 】</h4>
        <p class="jm-agrmt-p noindent">身份证号码：【 】</p>
        <h4 class="jm-agrmt-h4">鉴于：</h4>
        <p class="jm-agrmt-p">1.乙方为积木平台出借人，甲方现将平台上贷款的借款信息和还款收款权提供给乙方以进行兑付，乙方自愿接受。</p>
        <p class="jm-agrmt-p">2.甲方保证借款真实、合法、有效，否则乙方可以选择更换债权。</p>
        <p class="jm-agrmt-p">3.甲方保证将一直协助乙方通过诉讼或非诉等各种方式向借款人进行催收。</p>
        <p class="jm-agrmt-p">4.对于债权不论是正常还款或经催收回款在本协议签署后所产生的额外利息等收益，直接由乙方享有，甲方自愿放弃。</p>
        <p class="jm-agrmt-p">5.催收债权后续所需催收成本将直接向借款人主张。</p>
        <p class="jm-agrmt-p">现：甲、乙双方根据《民法总则》《合同法》及相关法律法规和有关网贷行业清退的规定和惯例，经协商一致，达成协议如下：</p>
        <h4 class="jm-agrmt-h4">第一条、乙方选择以认领债权方式进行兑付的标的债权</h4>
        <p
          class="jm-agrmt-p"
        >1.1 鉴于乙方已经在APP上签署了确权协议和/或在兑付方案中签署了相关债权转让和受让协议，就乙方对甲方所享有的兑付债权中【 】元（大写：【 】）的本金债权及其利息，乙方认可由甲方向其转让一定数额的债权的方式进行兑付。</p>
        <p class="jm-agrmt-p">1.2 就乙方选择以认领债权方式以获得兑付在积木平台上的出借债权，以下统称为“标的债权”。</p>
        <p class="jm-agrmt-p">1.3 本期认领以标的债权覆盖乙方确认的部分或所有净出借额为下限，此金额确认为【 】元（大写：【 】）。</p>
        <h4 class="jm-agrmt-h4">第二条、就标的债权甲方应向乙方转让的债权</h4>
        <p
          class="jm-agrmt-p"
        >2.1 就本协议第一条中乙方选择以认领债权方式以获得兑付的标的债权，乙方认可由甲方向其分配总额为【 】元（大写：【 】元）的债权相关信息和还款归属权，以进行兑付。</p>
        <p class="jm-agrmt-p">2.2 债权所涉债务人、针对每一债务人的具体待还本金及利息等相关信息以本协议附表1为准。</p>
        <h4 class="jm-agrmt-h4">第三条、乙方利益保障</h4>
        <p
          class="jm-agrmt-p"
        >3.1 自行催收的权利：乙方可委托甲方继续对逾期借款进行催收，也可以在逐笔签署了合法合规催收承诺函（附件2）的前提下，获取逾期借款人联系方式，自行进行催收。</p>
        <p class="jm-agrmt-p">3.2 差额补足义务：乙方未进行自行催收的债权，其最终还款与预期还款差之差仍适用于兑付方案中相关用品牌家电权益来补足之政策。</p>
        <h4 class="jm-agrmt-h4">第四条、法律适用与争议解决</h4>
        <p
          class="jm-agrmt-p"
        >所有因本协议的解释或履行引起的争议，应提交协议签署地（即北京市朝阳区）有管辖权的人民法院通过诉讼的方式解决。诉讼费用、律师费以及其他相关费用，由败诉方承担。</p>
        <h4 class="jm-agrmt-h4">第五条、附则</h4>
        <p class="jm-agrmt-p">本协议自各方签字或盖章之日起生效，纸质版合同壹式贰份，各方各执壹份，具有同等法律效力。</p>
        <p class="jm-agrmt-p-sm">（以下无正文，为协议签章页）</p>
        <div class="sign-box">
          <span class="sign">甲方签章：</span>
          <span class="sign">乙方签字：</span>
        </div>
        <h4 class="jm-agrmt-h4">附表1：</h4>
        <h3 class="jm-agrmt-tbTit">认领债权信息表</h3>
        <table class="jm-agrmt-tb">
          <tr>
            <th>项目编号</th>
            <th>项目类型</th>
            <th>债务人姓名</th>
            <th>
              债务人身份
              <br />证号码
            </th>
            <th>还款方式</th>
            <th>
              约定利率
              <br />（%）
            </th>
            <th>
              2020.2.15时
              <br />待还本金（元）
            </th>
          </tr>
          <tr>
            <td>ABC123</td>
            <td>个人消费贷</td>
            <td>张XX</td>
            <td>110****1234</td>
            <td>等额本息</td>
            <td>8.5%</td>
            <td>1234.56</td>
          </tr>
          <tr>
            <td>XYZ456</td>
            <td>个人经营贷</td>
            <td>李XX</td>
            <td>220****5678</td>
            <td>等额本息</td>
            <td>9.5%</td>
            <td>4321.00</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="3">20笔</td>
            <td rowspan="3" colspan="4">合计</td>
            <td>小写</td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="2">大写</td>
            <td rowspan="2"></td>
          </tr>
          <tr>
          </tr>
        </table>
        <p class="jm-agrmt-p right sign">签字处</p>
        <h4 class="jm-agrmt-h4 mt80">附件2：</h4>
        <h3 class="jm-agrmt-tit">承诺函</h3>
        <p class="jm-agrmt-p noindent">致：北京乐融多源信息技术有限公司（下称“北京乐融”），</p>
        <p class="jm-agrmt-p">本人      （身份证号码：                ）为积木盒子平台（北京乐融运营的网络借贷信息中介服务平台，下称“平台”）注册的出借人，通过平台向在平台注册且通过平台发布借款项目的借款人出借来源合法的自有资金。鉴于目前平台业务清退，为更好的管理本人权益，本人特此申请自行完成平台分配的债权维护与清收，烦请平台向本人开放本人持有债权对应之借款项目及借款人的相关信息（以下统称“借款信息”）查看权限，以便对借款人进行管理和清收。</p>
        <p class="jm-agrmt-p">为避免相关信息的不恰当使用，在平台向本人开放借款信息前，本人特向北京乐融作出如下承诺：</p>
        <p class="jm-agrmt-p">1、本人应对借款信息严格保密，且仅将该信息用于开展债权管理及清收安排，不得用于债权管理及清收事项以外的其他任何用途。本人已知悉相关注意事项及法律责任，如本人不合理使用或非法使用借款信息的，本人自行承担相应法律责任；</p>
        <p class="jm-agrmt-p">2、本人承诺并保证：债权管理及清收过程中，在合法的前提下文明沟通，本人已知悉本人有义务避免一切对借款人合法权益进行侵害的行为，否则将由本人承担一切损害赔偿责任，如构成行政及刑事责任的，亦由本人自行承担；</p>
        <p class="jm-agrmt-p">3、本人承诺并保证：在本人或本人委托第三方对借款人开展债权管理及清收相关工作时应采用合法、合理、适当及文明的方式进行，不得有胁迫、辱骂、骚扰、误导、欺瞒债务人或相关第三人、侵犯债务人或相关第三人隐私等任何违法违规行为，如本人或本人委托的第三方因债权管理及清收方式造成借款人及北京乐融任何损害或损失的，均应有本人予以负责并赔偿（包括但不限于公开道歉、消除不良影响、经济赔偿或补偿等），如构成行政及刑事责任的，亦由本人及第三方自行承担。</p>
        <p class="jm-agrmt-p noindent">以上，特此承诺。</p>
        <p class="jm-agrmt-p center">承诺人：</p>
        <p class="jm-agrmt-p center">日期：    年  月  日</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.mt80 {
  margin-top: 0.8rem;
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

.jm-agrmt-box {
  padding: 0.3rem;
  text-align: left;
}

.jm-agrmt-tit {
  margin-bottom: 0.3rem;
  font-size: 0.3rem;
  text-align: center;
}

.jm-agrmt-h4 {
  font-size: 0.26rem;
  color: #000;
}

.jm-agrmt-num {
  font-size: 0.2rem;
  text-align: right;
}

.jm-agrmt-p {
  margin: 0.2rem 0;
  font-size: 0.24rem;
  line-height: 1.5em;
  text-indent: 0.2rem;
  color: #333;
  &.noindent {
    text-indent: 0;
  }
  &.right {
    text-align: right;
  }
  &.sign {
    padding-right: 2rem;
  }
  &.center {
    text-align: center;
  }
}
.jm-agrmt-p-sm {
  font-size: 0.2rem;
  text-align: center;
  color: #666;
}

.sign-box {
  height: 2rem;
  padding: 0.2rem 0;
  .sign {
    display: inline-block;
    width: 50%;
    font-size: 0.24rem;
    color: #000;
    font-weight: bolder;
  }
}
.jm-agrmt-tbTit {
  margin-top: 0.2rem;
  padding: 0.1rem 0;
  text-align: center;
  border: 1px solid #000;
}
.jm-agrmt-tb {
  width: 100%;
  margin-top: -1px;
  th,
  td {
    height: 0.38rem;
    padding: 0.1rem 0;
    border: 1px solid #000;
    text-align: center;
    font-size: 0.18rem;
  }
}
</style>