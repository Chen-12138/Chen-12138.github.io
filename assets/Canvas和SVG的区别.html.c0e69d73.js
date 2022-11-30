import{_ as a,o as e,c as r,a as n}from"./app.741998f1.js";const t={},s=n('<h2 id="\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a> \u63CF\u8FF0</h2><p><strong>Canvas</strong></p><p>\u753B\u5E03\uFF0C\u901A\u8FC7 Javascript \u548C HTML \u7684 canvas \u6807\u7B7E\u6765\u7ED8\u5236\u56FE\u5F62\uFF0C\u5B83\u53EF\u4EE5\u7528\u4E8E\u52A8\u753B\u3001\u6E38\u620F\u753B\u9762\u3001\u6570\u636E\u53EF\u89C6\u5316\u3001\u56FE\u7247\u7F16\u8F91\u4EE5\u53CA\u5B9E\u65F6\u89C6\u9891\u5904\u7406\u7B49\u65B9\u9762\u3002</p><p><strong>SVG</strong></p><p>\u53EF\u7F29\u653E\u77E2\u91CF\u56FE\u5F62\uFF08Scalable Vector Graphics\uFF0CSVG\uFF09\u57FA\u4E8E XML \u6807\u8BB0\u8BED\u8A00\uFF0C\u7528\u4E8E\u63CF\u8FF0\u4E8C\u7EF4\u7684\u77E2\u91CF\u56FE\u5F62\u3002<br> SVG \u683C\u5F0F\u63D0\u4F9B\u7684\u662F\u77E2\u91CF\u56FE\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u7684\u56FE\u50CF\u80FD\u591F\u88AB\u65E0\u9650\u653E\u5927\u800C\u4E0D\u5931\u771F\u6216\u964D\u4F4E\u8D28\u91CF\uFF0C\u5E76\u4E14\u53EF\u4EE5\u65B9\u4FBF\u5730\u4FEE\u6539\u5185\u5BB9\uFF0C\u65E0\u9700\u56FE\u5F62\u7F16\u8F91\u5668\u3002\u901A\u8FC7\u4F7F\u7528\u5408\u9002\u7684\u5E93\u8FDB\u884C\u914D\u5408\uFF0CSVG \u6587\u4EF6\u751A\u81F3\u53EF\u4EE5\u968F\u65F6\u8FDB\u884C\u672C\u5730\u5316\u3002</p><h2 id="\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u533A\u522B" aria-hidden="true">#</a> \u533A\u522B</h2><ul><li>Canvas \u4E3B\u8981\u662F\u7528\u7B14\u5237\u6765\u7ED8\u5236 2D \u56FE\u5F62\u7684\u3002</li><li>SVG \u4E3B\u8981\u662F\u7528<strong>\u6807\u7B7E</strong>\u6765\u7ED8\u5236\u4E0D\u89C4\u5219\u77E2\u91CF\u56FE\u7684\u3002\uFF08\u56E0\u4E3A\u662F\u57FA\u4E8E XML\uFF0C\u7ED3\u6784\u4F1A\u51FA\u73B0\u5728 DOM \u4E2D\uFF09</li><li>Canvas \u4F9D\u8D56\u4E8E\u5206\u8FA8\u7387\uFF0CSVG \u4E0D\u4F9D\u8D56\u5206\u8FA8\u7387</li><li>Canvas \u753B\u7684\u662F\u4F4D\u56FE\uFF0CSVG \u753B\u7684\u662F\u77E2\u91CF\u56FE\u3002</li><li>SVG \u8282\u70B9\u8FC7\u591A\u65F6\u6E32\u67D3\u6162\uFF0CCanvas \u6027\u80FD\u66F4\u597D\u4E00\u70B9\uFF0C\u4F46\u5199\u8D77\u6765\u66F4\u590D\u6742\u3002</li><li>SVG \u652F\u6301\u5206\u5C42\u548C\u4E8B\u4EF6\uFF08\u53EF\u4EE5\u7528 Javascript \u83B7\u53D6\u8282\u70B9\u7136\u540E\u63A7\u5236\uFF0C\u6DFB\u52A0\u4E8B\u4EF6\uFF09\uFF0CCanvas \u4E0D\u652F\u6301\uFF0C\u4F46\u662F\u53EF\u4EE5\u7528\u5E93\u5B9E\u73B0\u3002</li></ul><h2 id="\u4E24\u8005\u5BF9\u91CD\u7ED8\u548C\u91CD\u6392\u7684\u5F71\u54CD" tabindex="-1"><a class="header-anchor" href="#\u4E24\u8005\u5BF9\u91CD\u7ED8\u548C\u91CD\u6392\u7684\u5F71\u54CD" aria-hidden="true">#</a> \u4E24\u8005\u5BF9\u91CD\u7ED8\u548C\u91CD\u6392\u7684\u5F71\u54CD</h2><p>\u9996\u5148\u91CD\u7ED8\u548C\u56DE\u6D41\u90FD\u662F\u76F8\u5BF9\u4E8E render tree \u800C\u8A00\u7684\uFF0C\u800C canvas \u672C\u8EAB\u8FDB\u884C\u7ED8\u5236\u5E76\u672A\u5BF9\u9875\u9762\u4EFB\u4F55\u5176\u4ED6\u5143\u7D20\u6709\u5F71\u54CD\uFF0C\u6545 canvas \u53EA\u4F1A\u5F15\u8D77\u753B\u5E03\u672C\u8EAB\u7684\u91CD\u7ED8\u3002</p><p>\u9664\u975E canvas \u672C\u8EAB\u7684\u4F4D\u7F6E\u6216\u8005\u5927\u5C0F\u53D1\u751F\u53D8\u5316\uFF0C\u5F71\u54CD\u4E86 render tree\uFF0C\u624D\u4F1A\u53D1\u751F\u91CD\u7ED8\u548C\u56DE\u6D41</p><p>\u540C\u7406\uFF0C\u6211\u4E2A\u4EBA\u89C9\u5F97 SVG \u5176\u5B9E\u4E0D\u4F1A\u5F15\u8D77\u91CD\u6392\uFF08\u6D4F\u89C8\u5668\u7684\u91CD\u6392\uFF09\uFF0C\u56E0\u4E3A SVG \u5185\u5B58\u5728\u4E00\u4E2A\u5750\u6807\u7CFB\uFF0C\u6240\u6709\u7684 SVG \u5185\u7684\u5143\u7D20\u5728 SVG \u753B\u5E03\u4E0A\u662F\u7EDD\u5BF9\u5B9A\u4F4D\u7684\uFF0C\u66F4\u65B0 SVG \u5185\u90E8\u7684\u5143\u7D20\uFF0C\u53EA\u4F1A\u76F8\u5BF9\u4E8E SVG\uFF08root\uFF09\uFF0C\u5BF9\u5176\u6240\u6709\u5B50\u5143\u7D20\u8FDB\u884C\u5E03\u5C40\u8BA1\u7B97\uFF0C\u800C\u4E0D\u662F\u5BF9\u6574\u4E2A\u6D4F\u89C8\u5668\uFF0Cemmm\uFF0C\u4F46 SVG \u5185\u7684\u5143\u7D20\u8FD8\u662F\u5728 DOM \u6811\u91CC\uFF0C\u53EA\u662F\u76F8\u5BF9\u6587\u6863\u6D41\uFF0C\u4E0D\u4F1A\u6709\u4F4D\u7F6E\u6539\u53D8\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u91CD\u6392\u3002</p><p>\u4E3A\u4EC0\u4E48\u5F53 SVG \u5185\u7684\u5143\u7D20\u591A\u4E86\u540E\uFF0C\u6548\u7387\u4F1A\u6BD4 Canvas \u4F4E\uFF1F</p><p>\u56E0\u4E3A SVG \u91CC\u7684\u5143\u7D20\u4F1A\u63D2\u5165\u5230 DOM \u6811\u4E2D\uFF0C\u8282\u70B9\u591A\u4E86\u63D2\u5165\u6548\u7387\u4F4E\uFF1F<br> SVG \u4E5F\u4F1A\u4F9D\u8D56 render tree \u6E32\u67D3</p><p>Canvas \u5176\u5B9E\u7C7B\u4F3C\u4E00\u4E2A\u56FE\u5C42\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5230 render tree</p><p>\u53C2\u8003\uFF1A<a href="https://blog.csdn.net/qq_37430374/article/details/124016330" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_37430374/article/details/124016330</a></p>',15),i=[s];function l(c,o){return e(),r("div",null,i)}var d=a(t,[["render",l],["__file","Canvas\u548CSVG\u7684\u533A\u522B.html.vue"]]);export{d as default};
