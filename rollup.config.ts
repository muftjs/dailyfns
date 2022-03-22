import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm", // ES Modules
      sourcemap: true,
    },

    {
      file: "dist/index.umd.js",
      format: "umd",
      sourcemap: true,
      name: "dailyfns"
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    commonjs({
      exclude: "node_modules",
      ignoreGlobal: true,
    }),
  ],

  // external: Object.keys(globals),
};
