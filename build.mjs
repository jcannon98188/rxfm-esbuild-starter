import * as esbuild from "esbuild";
import postcss from "esbuild-postcss";

const shouldWatch = process.argv.some((arg) => arg === "--watch");
const shouldServe = process.argv.some((arg) => arg === "--serve");
const shouldBuild = process.argv.some((arg) => arg === "--build");

let ctx = await esbuild.context({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  outdir: "www/dest",
  plugins: [postcss()],
  write: !shouldWatch,
});

if (shouldWatch) {
  await ctx.watch();
}

if (shouldServe) {
  let { host, port } = await ctx.serve({
    servedir: "www",
  });

  console.log(`Serving at http://${host}:${port}`);
}

if (shouldBuild) {
  await ctx.rebuild();
  process.exit(0);
}
