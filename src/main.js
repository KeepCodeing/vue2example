import Vue from "vue";
import App from "./App.vue";

// import GlobalMessageBox from "../src/components/global-message-box";

import MessageBox from "./components/message-box";
import LoadingMask from "./components/loading-mask";
import NumberFormat from "./components/number-format";

Vue.use(MessageBox);
Vue.use(LoadingMask);
Vue.use(NumberFormat);

Vue.config.productionTip = false;

// Vue.prototype.$showMessage = GlobalMessageBox;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
