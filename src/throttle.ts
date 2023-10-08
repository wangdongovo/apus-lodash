const throttle = (fn: any, delay: number) => {
  let timer: any = null;
  return (...args: any) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
};

export default throttle;
