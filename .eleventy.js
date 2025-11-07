const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // 複製靜態資源
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("images");

  // 日期過濾器 - 支援繁體中文（香港）
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "Asia/Hong_Kong" })
      .setLocale("zh-HK")
      .toLocaleString(DateTime.DATE_FULL);
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "Asia/Hong_Kong" }).toFormat("yyyy-MM-dd");
  });

  // Cloudflare Images shortcode
  eleventyConfig.addShortcode("cfImage", function(imageId, alt, variant = "public") {
    const cfAccountHash = process.env.CF_ACCOUNT_HASH || "YOUR_CF_ACCOUNT_HASH";
    return `<img src="https://imagedelivery.net/${cfAccountHash}/${imageId}/${variant}" alt="${alt}" loading="lazy">`;
  });

  // Cloudflare Stream shortcode for videos
  eleventyConfig.addShortcode("cfVideo", function(videoId, poster = "") {
    return `<stream src="${videoId}" controls${poster ? ` poster="${poster}"` : ""}></stream>
<script data-cfasync="false" defer type="text/javascript" src="https://embed.cloudflarestream.com/embed/sdk.latest.js"></script>`;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
