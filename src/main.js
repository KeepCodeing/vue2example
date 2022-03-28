import Vue from "vue";
import App from "./App.vue";

import GlobalMessageBox from "../src/components/global-message-box";

Vue.config.productionTip = false;

Vue.prototype.$showMessage = GlobalMessageBox;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
