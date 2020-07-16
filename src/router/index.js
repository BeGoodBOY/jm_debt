import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/debt_detail/:id",
    name: "DebtDetail",
    title: "债权详情",
    component: () => import("../views/DebtDetail")
  },
  {
    path: "/debt_dstbt_cfm",
    name: "DebtDstbtCfm",
    title: "债权分配确认",
    component: () => import("../views/DebtDstbtCfm")
  },
  {
    path: "/debt_caption",
    name: "DebtCaption",
    title: "债权分配说明",
    component: () => import("../views/DebtCaption")
  },
  {
    path: "/debt_dstbt_rst",
    name: "DebtDstbtRst",
    title: "债权分配说明",
    component: () => import("../views/DebtDstbtRst")
  },
  {
    path: "/agreement_template",
    name: "AgreementTemplate",
    title: "认领债权协议书",
    component: () => import("../views/AgreementTemplate")
  }
];

const router = new VueRouter({
  routes
});

export default router;
