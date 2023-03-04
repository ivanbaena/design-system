import typescript from 'rollup-plugin-typescript2';

export default {
  input: [
    "src/index.ts",
    "src/atoms/Button/index.ts"
  ],
  output: {
    dir: "lib",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
  },
  external: ['react/jsx-runtime'],
  plugins: [typescript()],

};
