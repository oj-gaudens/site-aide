module.exports = function(eleventyConfig) {
  // Copier les assets statiques
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/js");
  
  // Ajouter un filtre pour le markdown
  eleventyConfig.addFilter("markdown", function(content) {
    const markdownIt = require("markdown-it")();
    return markdownIt.render(content);
  });

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
