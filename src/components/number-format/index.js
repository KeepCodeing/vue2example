/**
 * 数字格式化：该例子是对过滤器的简单应用
 *
 */

export default {
  install(app) {
    app.filter("format", (number) => {
      if (number > 10000) return `${(number / 10000) | 0} 万`;
      // if (number > 1000000) return `${(number / 10000) | 0} 万`;
      return number;
    });
  },
};
