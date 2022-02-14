type Handler = <T>(t: T) => void;

export function debounce(callback: Handler, ms: number) {
  let timer: number;
  return function <T>(...t: T[]) {
    clearTimeout(timer);
    timer = setTimeout(() => callback(t), ms);
  };
}

export function throttle(callback: Handler, ms: number) {
  let timer: number;
  return function <T>(...t: T[]) {
    if (timer) return;
    timer = setTimeout(() => {
      callback(t);
      timer = 0;
    }, ms);
  };
}
