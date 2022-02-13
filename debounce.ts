type Handler = <T>(t: T) => void;

function debounce(callback: Handler, ms: number) {
  let timer: number;
  return function <T>(...t: T[]) {
    clearTimeout(timer);
    timer = setTimeout(() => callback(t), ms);
  };
}

export default debounce;
