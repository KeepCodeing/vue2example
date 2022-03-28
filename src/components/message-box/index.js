/**
 * 简易全局消息框组件，要求可以使用JS调用，提供各类配置。
 * 样式方面并不详细编写。
 *
 * 思路：使用Vue.extend让组件继承Vue各种属性，每个组件需要提供
 * show以及close等方法，默认会在定时结束后移除。
 *
 * 需要限制页面消息框的个数，例如最大3个，超出则直接清除（扩展功能）
 *
 */

import Vue from "vue";
import MessageBox from "./index.vue";

const MessageBoxCtor = Vue.extend(MessageBox);

const close = function () {
  if (this.$el && this.$el.parentNode)
    this.$el.parentNode.removeChild(this.$el);

  this.$destroy();
};

MessageBoxCtor.prototype.close = close;

const showMessage = (
  opts = { duration: 1500, message: "default message", mtype: "default" }
) => {
  const parent = document.body;

  const ins = new MessageBoxCtor({
    el: document.createElement("div"),
    data: { ...opts },
    methods: { close },
  });

  ins.$on("close", () => ins && ins.close());

  setTimeout(() => ins && ins.close(), opts.duration);

  parent.appendChild(ins.$el);

  return ins;
};

export default {
  install(app) {
    app.prototype.$showMessage = showMessage;
  },
};
