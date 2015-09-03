var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.freestockcharts.com",
  contentScriptFile: data.url("hideAd.js"),
  contentScriptWhen: "end"
});