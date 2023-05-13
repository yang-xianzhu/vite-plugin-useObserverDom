import type { App } from "vue";

export function useResize(el: HTMLElement, cb: Function) {
  const resizeObserver = new ResizeObserver((entries) => {
    cb(entries);
  });

  // 开始订阅
  resizeObserver.observe(el);
}

function initDirectivesInstall(app: App) {
  app.directive("my-resize", {
    mounted(
      el: HTMLElement,
      bindVal: {
        value: Function;
      }
    ) {
      useResize(el, bindVal.value);
    },
  });
}

useResize.install = initDirectivesInstall;
