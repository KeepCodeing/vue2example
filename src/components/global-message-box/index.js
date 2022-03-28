import Vue from "vue";
import GlobalMessageBox from "./index.vue";

const GlobalMessageBoxCtor = Vue.extend(GlobalMessageBox);

GlobalMessageBoxCtor.prototype.close = function () {
  this.show = false;

  setTimeout(() => {
    if (this.$el && this.$el.parentNode)
      this.$el.parentNode.removeChild(this.$el);

    this.$destory();
  }, 500);
};

const show = function (opts = {}) {
  const parent = document.body;

  const instance = new GlobalMessageBoxCtor({
    el: document.createElement("div"),
    data: opts,
  });

  parent.appendChild(instance.$el);

  Vue.nextTick(() => {
    instance.show = true;
  });

  return instance;
};

export default show;
