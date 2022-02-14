import { delay } from "https://deno.land/std@0.125.0/async/delay.ts";
import { debounce } from "https://deno.land/x/debounce@v0.0.3/mod.ts";

(async (delayMs = 100) => {
  let x = 0;

  const adder = () => {
    x++;
  };

  const debouncedAdder = debounce(adder, delayMs);

  debouncedAdder();

  console.log("x:", x); // equal to 0
  await delay(delayMs);
  console.log("x:", x); // equal to 1
})();
