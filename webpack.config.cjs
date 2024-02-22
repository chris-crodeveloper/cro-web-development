const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env) => {
  console.log(env);
  return {
    mode: "production",
    entry: env.entry,
    output: {
      path: path.resolve(env.destination),
      filename: env.filename,
    },
    optimization: {
      minimize: true,
      usedExports: true,
      minimizer: [
        new TerserPlugin({
          minify: TerserPlugin.uglifyJsMinify,
          // `terserOptions` options will be passed to `uglify-js`
          // Link to options - https://github.com/mishoo/UglifyJS#minify-options
          terserOptions: {
            compress: {
              annotations: false,
              arguments: false,
              arrows: false,
              assignments: false,
              awaits: false,
              booleans: false,
              collapse_vars: false,
              comparisons: false,
              conditionals: false,
              dead_code: true,
              default_values: false,
              directives: false,
              drop_console: false,
              drop_debugger: true,
              evaluate: false,
              expression: false,
              functions: false,
              hoist_exports: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              if_return: false,
              imports: true,
              inline: 1,
              join_vars: true,
              keep_fargs: true,
              keep_infinity: false,
              loops: false,
              merge_vars: false,
              module: false,
              negate_iife: false,
              objects: false,
              passes: 1,
              properties: false,
              pure_funcs: null,
              pure_getters: "strict",
              reduce_funcs: false,
              reduce_vars: false,
              rests: false,
              sequences: false,
              side_effects: true,
              spreads: false,
              strings: false,
              switches: false,
              templates: false,
              top_retain: null,
              toplevel: true,
              typeofs: false,
              unsafe: false,
              unsafe_comps: false,
              unsafe_math: false,
              unsafe_proto: false,
              unsafe_regexp: false,
              unsafe_undefined: false,
              unused: true,
              varify: false,
              yields: false,
            },
            mangle: false,
            output: {
              beautify: true,
              comments: false,
            },
          },
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.j|tsx?/,
          exclude: /node_modules/,
          use: "ts-loader",
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "file-loader",
              options: {
                path: env.destination,
                name: "[name].css",
              },
            },
            "sass-loader",
          ],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".scss"],
      modules: ["node_modules"], // Assuming that your files are inside the src dir
    },
  };
};
