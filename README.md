# deno-debounce

debounce written for deno

## Usage

```ts
import { delay } from "https://deno.land/std@0.125.0/async/delay.ts";
import { debounce } from "https://deno.land/x/debounce@v0.0.3/mod.ts";

Deno.test("debounce: simple adder example", async () => {
  const delayMs = 100;
  let x = 0;

  const adder = () => {
    x++;
  };

  const debouncedAdder = debounce(adder, delayMs);

  debouncedAdder();

  console.log("x:", x); // equal to 0
  await delay(delayMs);
  console.log("x:", x); // equal to 1
});
```

## Run Test

```sh
deno test
```
