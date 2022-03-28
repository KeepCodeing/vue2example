import Vue from "vue";
import GlobalMessageBox from "../global-message-box";

const GlobalMessageBoxCtor = Vue.extend(GlobalMessageBox);

Vue.directive("loading", {
  bind(el, binding) {
    const instance = new GlobalMessageBoxCtor({
      el: document.createElement("div"),
    });

    el.appendChild(instance.$el);
  },

  update() {},

  unbind() {},
});
