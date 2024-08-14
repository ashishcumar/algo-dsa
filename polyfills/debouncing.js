function debounce(cb, d = 1000) {
  // pass a function and delay time to it.
  let timer;
  return function (...args) {
    // argument receiving is important if debounced function is taking arguments
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
}

