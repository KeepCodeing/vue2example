/**
 * 加载遮罩命令
 * 要求：可以根据加载状态显示和去除遮罩
 * 样式部分不详细做，可以考虑加上渐变动画
 *
 * 思路：使用Vue.extend创建组件实例，使用实例进行组件添加操作
 * 利用Vue.directive获得被绑定元素和指令值
 */
import Vue from "vue";
import LoadingMask from "./index.vue";

const LoadingMaskCtor = Vue.extend(LoadingMask);

export default {
  install(app) {
    app.directive("loading", {
      bind(el, binding) {
        const ins = new LoadingMaskCtor({
          el: document.createElement("div"),
        });

        el.appendChild(ins.$el);
        el.instance = ins;

        app.nextTick(() => {
          el.instance.show = binding.value;
        });
      },

      unbind(el) {
        el.removeChild(el.instance.$el);
        el.instance.$destory();
      },

      update(el, binding) {
        if (binding.value !== binding.oldValue) {
          el.instance.show = binding.value;
        }
      },
    });
  },
};
