module.exports = {
  globDirectory: ".",
  globPatterns: ["**/*.{css,html,js,mjs,png}"],
  globIgnores: ["~resources/**/*", "~bak/**/*"],
  swDest: "sw.js",
  swSrc: "sw-config.js"
};
