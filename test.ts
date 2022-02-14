import { assertEquals } from "https://deno.land/std@0.125.0/testing/asserts.ts";
import { delay } from "https://deno.land/std@0.125.0/async/delay.ts";
import { debounce } from "./mod.ts";

Deno.test("debounce: simple adder example", async () => {
  const delayMs = 100;
  let x = 0;

  const adder = () => {
    x++;
  };

  const debouncedAdder = debounce(adder, delayMs);

  debouncedAdder();

  assertEquals(x, 0);
  await delay(delayMs);
  assertEquals(x, 1);
});
