import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.ts",
  output: [
    // {
    //   file: "dist/bundle.js",
    //   format: "cjs",
    //   sourcemap: true,
    // },
    {
      file: "dist/index.js",
      format: "esm", // ES Modules
      sourcemap: true,
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
