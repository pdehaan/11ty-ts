/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addExtension(["11ty.ts", "11ty.tsx"], {
    key: "11ty.js",
  });

  // eleventyConfig.setTemplateFormats(["11ty.js"]);

  return {
    templateFormats: ["11ty.js"],
    dir: {
      input: "src",
      output: "www",
    },
  };
};
