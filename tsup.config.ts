import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/calculadora.ts"],
  clean: true,
  format: ["cjs", "esm"],
  dts: true,
});
