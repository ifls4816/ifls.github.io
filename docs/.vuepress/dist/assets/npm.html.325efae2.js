import{c as n}from"./app.40b2e5cf.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/doc/assets/1552958477696.ac9cdbd8.png",e="/doc/assets/1552958568874.f57db5d7.png",p="/doc/assets/1552958621455.c575dd4c.png",l="/doc/assets/1552958689343.16a0043e.png",i="/doc/assets/1552959559279.349e29ad.png",c="/doc/assets/1552959824128.1437f15f.png",r="/doc/assets/1552960532039.de8797d9.png",o="/doc/assets/1552960669759.6d82d335.png",t="/doc/assets/1552961066621.ea1beee0.png",m="/doc/assets/1552961150137.e56c592f.png";const d={},u=n(`<h1 id="_1-npm-\u548C-npm-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_1-npm-\u548C-npm-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> 1. npm \u548C npm \u5E38\u7528\u547D\u4EE4</h1><h2 id="_1-1-\u4EC0\u4E48\u662F-npm" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4EC0\u4E48\u662F-npm" aria-hidden="true">#</a> 1.1 \u4EC0\u4E48\u662F npm</h2><p><img src="https://i.loli.net/2019/06/09/5cfcfdba2e61382505.png" alt="img"></p><p>npm \uFF08Node Packeage Manager\uFF09\uFF1A Node \u5305\u7BA1\u7406\u5668\u3002\u662F\u4E00\u4E2A Node \u7B2C\u4E09\u65B9\u6A21\u5757(\u7B2C\u4E09\u65B9\u5305)\u7BA1\u7406\u5DE5\u5177\uFF0C\u4F1A\u968F\u7740 node \u4E00\u8D77\u88AB\u5B89\u88C5\u3002\u4F7F\u7528\u8BE5\u5DE5\u5177\u80FD\u591F\u7B80\u5355\u65B9\u4FBF\u7684\u7BA1\u7406\u9879\u76EE\u4E2D\u6240\u9700\u8981\u7684\u7B2C\u4E09\u65B9\u6A21\u5757</p><p>\u5B98\u7F51\uFF1A www.npmjs.com</p><p>\u5B98\u7F51\u7BA1\u7406\u4E86\u6240\u6709\u7B2C\u4E09\u65B9\u5305\uFF0C\u4F8B\u5982\uFF1Ajquery\u3001art-template \u7B49\uFF0C\u6211\u4EEC\u53EA\u8981\u4F7F\u7528 npm \u547D\u4EE4\u5C31\u80FD\u5FEB\u901F\u4E0B\u8F7D\u76F8\u5173\u7684\u5305</p><h2 id="_1-2-\u9879\u76EE\u521D\u59CB\u5316-init" tabindex="-1"><a class="header-anchor" href="#_1-2-\u9879\u76EE\u521D\u59CB\u5316-init" aria-hidden="true">#</a> 1.2 \u9879\u76EE\u521D\u59CB\u5316 --- init</h2><p>\u4F7F\u7528 init \u53C2\u6570\u53EF\u4EE5\u914D\u7F6E\u9879\u76EE\u7684\u57FA\u672C\u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521D\u59CB\u5316\uFF1A\u4F7F\u7528 init \u53C2\u6570</span>
<span class="token function">npm</span> init

<span class="token comment"># \u5FEB\u901F\u521D\u59CB\u5316\uFF0C\u4E00\u5207\u914D\u7F6E\u9879\u4F7F\u7528\u9ED8\u8BA4\u503C</span>
<span class="token function">npm</span> init -y
<span class="token function">npm</span> init --yes
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u914D\u7F6E\u9879\uFF1A</p><ul><li>package name\uFF1A \u9879\u76EE\u540D\u79F0\uFF08\u5305\u540D\uFF09</li><li>version\uFF1A\u7248\u672C\u53F7</li><li>description\uFF1A \u9879\u76EE\u63CF\u8FF0\uFF08\u5305\u529F\u80FD\u63CF\u8FF0\uFF09</li><li>main\uFF1A\u5165\u53E3\u6587\u4EF6</li><li>test command\uFF1A\u547D\u4EE4</li><li>git repositroy\uFF1Agit \u53D1\u5E03\u5730\u5740</li><li>keywords\uFF1A\u9879\u76EE\u5173\u952E\u8BCD</li><li>author\uFF1A\u4F5C\u8005</li><li>license\uFF1A\u8BB8\u53EF\u8BC1\u53F7</li><li>\u6700\u540E\u4F7F\u7528 yes \u6765\u786E\u5B9A\u914D\u7F6E\u9879</li></ul><p>\u4F7F\u7528 npm init \u540E\u4F1A\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4EA7\u751F\u4E00\u4E2A package.json \u6587\u4EF6\uFF0C\u8BE5\u6587\u4EF6\u4E2D\u4FDD\u5B58\u7684\u5C31\u662F\u521D\u59CB\u5316\u7684\u5185\u5BB9</p><p>\u5982\u679C\u4F7F\u7528 npm init -y | --yes \u5C31\u80FD\u5FEB\u901F\u751F\u6210\uFF0C\u5168\u90E8\u4F7F\u7528\u9ED8\u8BA4\u503C\u3002</p><p><img src="`+a+'" alt="1552958477696"></p><p><img src="'+e+'" alt="1552958568874"></p><p><img src="'+p+'" alt="1552958621455"></p><p><img src="'+l+`" alt="1552958689343"></p><h2 id="_1-3-\u57FA\u672C\u5B89\u88C5-install" tabindex="-1"><a class="header-anchor" href="#_1-3-\u57FA\u672C\u5B89\u88C5-install" aria-hidden="true">#</a> 1.3 \u57FA\u672C\u5B89\u88C5 --- install</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5:  \u4F7F\u7528 install \u6216\u8005 i \u53C2\u6570</span>
<span class="token function">npm</span> <span class="token function">install</span> \u5305\u540D
<span class="token function">npm</span> i \u5305\u540D

<span class="token comment"># \u793A\u4F8B\uFF1A \u5B89\u88C5 jquery</span>
<span class="token function">npm</span> i jquery
<span class="token function">npm</span> <span class="token function">install</span> jquery
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol><li><p>\u4F7F\u7528 npm \u5B89\u88C5 jquery</p><p>\u4F7F\u7528 npm \u5B89\u88C5\u7B2C\u4E09\u65B9\u5305\u65F6\uFF0C\u4F1A\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2A node_modules \u76EE\u5F55\uFF0C\u5C06\u7B2C\u4E09\u65B9\u5305\u5B58\u5165\u8BE5\u76EE\u5F55\u4E2D</p></li></ol><ol start="2"><li>package.json \u6587\u4EF6\u8865\u5145\u8BF4\u660E</li></ol><ul><li>\u5982\u679C\u4F7F\u7528\u7684\u662F 5.x \u7248\u672C\u7684 npm\uFF0C\u5219\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u5728 package.json \u6587\u4EF6\u4E2D\u4F1A\u81EA\u52A8\u4EA7\u751F\u4E00\u4E2A <code>dependencies</code>\uFF0C\u7528\u6765\u8BB0\u5F55\u8BE5\u9879\u76EE\u6240\u4F9D\u8D56\u7684\u5305\uFF1B</li><li>\u5982\u679C\u4F7F\u7528\u7684\u662F 3.x \u7248\u672C\u7684 npm\uFF0C\u5219\u9700\u8981\u589E\u52A0 --save|-S\uFF0C\u6765\u6307\u5B9A\u4F9D\u8D56\u5173\u7CFB\uFF08npm i jquery --save|-S\uFF09</li></ul><p><img src="`+i+`" alt="1552959559279"></p><ol start="3"><li><p>package-lock.json \u6587\u4EF6</p><pre><code>	\u8BE5\u6587\u4EF6\u4E2D\u8BB0\u5F55\u4E86\u9879\u76EE\u4F9D\u8D56\u7684\u6240\u6709\u5305\u4FE1\u606F\uFF0C \u6709\u4E86\u8BE5\u6587\u4EF6\uFF0C\u5373\u4F7F\u6211\u4EEC\u5220\u9664\u4E86 node_modules \u76EE\u5F55\uFF0C\u4E5F\u80FD\u901A\u8FC7 npm i \u4E0B\u8F7D\u56DE\u6240\u6709\u9700\u8981\u4F9D\u8D56\u7684\u7B2C\u4E09\u65B9\u5305
</code></pre></li></ol><p><img src="`+c+`" alt="1552959824128"></p><h2 id="_1-4-\u5378\u8F7D" tabindex="-1"><a class="header-anchor" href="#_1-4-\u5378\u8F7D" aria-hidden="true">#</a> 1.4 \u5378\u8F7D</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5378\u8F7D\uFF1A\u4F7F\u7528 uninstall \u53C2\u6570</span>
<span class="token function">npm</span> uninstall \u5305\u540D

<span class="token function">npm</span> uninstall jquery
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>npm 5.x \u7248\u672C\u4F1A\u540C\u65F6\u5220\u9664 node_modules \u76EE\u5F55\u4E2D\u7684\u5305\uFF0C\u4E5F\u4F1A\u5220\u9664 package.json \u548C package-lock.json \u4E2D\u7684\u914D\u7F6E\u9879</p><h2 id="_1-5-\u5B89\u88C5\u6307\u5B9A\u7248\u672C\u7684\u5305" tabindex="-1"><a class="header-anchor" href="#_1-5-\u5B89\u88C5\u6307\u5B9A\u7248\u672C\u7684\u5305" aria-hidden="true">#</a> 1.5 \u5B89\u88C5\u6307\u5B9A\u7248\u672C\u7684\u5305</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># npm\u9ED8\u8BA4\u4F1A\u5B89\u88C5\u6700\u65B0\u7248\u672C\u7684\u5305\uFF0C\u5982\u679C\u60F3\u5B89\u88C5\u6307\u5B9A\u7248\u672C\u7684\u5305\u9700\u8981\u4F7F\u7528 @ \u7B26\u53F7</span>
<span class="token function">npm</span> i jquery@1.11.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_1-6-\u540C\u65F6\u5B89\u88C5\u591A\u4E2A\u5305" tabindex="-1"><a class="header-anchor" href="#_1-6-\u540C\u65F6\u5B89\u88C5\u591A\u4E2A\u5305" aria-hidden="true">#</a> 1.6 \u540C\u65F6\u5B89\u88C5\u591A\u4E2A\u5305</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i \u5305\u540D1 \u5305\u540D2 <span class="token punctuation">..</span>.
<span class="token function">npm</span> <span class="token function">install</span>  \u5305\u540D1 \u5305\u540D2 <span class="token punctuation">..</span>.
<span class="token function">npm</span> i jquery@1.11.0 art-template mysql body-parser
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_1-7-\u5168\u5C40\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-7-\u5168\u5C40\u5B89\u88C5" aria-hidden="true">#</a> 1.7 \u5168\u5C40\u5B89\u88C5</h2><p>\u6709\u4E00\u4E9B\u5DE5\u5177\u8F6F\u4EF6\uFF08\u975E\u5F00\u53D1\u4F7F\u7528\u7684\u7B2C\u4E09\u65B9\u5305\uFF09\u6211\u4EEC\u5E0C\u671B\u5728\u4EFB\u4F55\u5730\u65B9\u90FD\u80FD\u4F7F\u7528\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528 -g (global)\u53C2\u6570\u6765\u5168\u5C40\u5B89\u88C5</p><p>\u6240\u6709\u5168\u5C40\u5B89\u88C5\u7684\u5DE5\u5177\u90FD\u4F1A\u653E\u5728 C:\\Users\\Administrator\uFF08\u7528\u6237\u540D\uFF09\\AppData\\Roaming\\npm \u76EE\u5F55\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i \u5DE5\u5177\u540D  -g
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5 nodemon</p><p>nodemon \u662F\u4E00\u6B3E\u7B2C\u4E09\u65B9\u63D0\u4F9B\u7684\u8F6F\u4EF6\uFF0C\u5B89\u88C5\u8BE5\u8F6F\u4EF6\u540E\u6211\u4EEC\u5C31\u4E0D\u5FC5\u6BCF\u6B21\u4FEE\u6539 http.js \u6587\u4EF6\u4E4B\u540E\u518D\u91CD\u542F\u670D\u52A1\u5668\u4E86\u3002nodemon \u4F1A\u5E2E\u6211\u4EEC\u81EA\u52A8\u91CD\u542F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4F7F\u7528 -g \u5168\u5C40\u5B89\u88C5\u4E4B\u540E\uFF0C\u518D\u4EFB\u4F55\u76EE\u5F55\u4E0B\u90FD\u53EF\u4EE5\u4F7F\u7528</span>
<span class="token function">npm</span> i nodemon -g
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u4F7F\u7528  nodemon \u547D\u4EE4\u6765\u5F00\u542Fweb\u670D\u52A1\u5668</span>
nodemon app.js
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+r+'" alt="1552960532039"></p><p><img src="'+o+`" alt="1552960669759"></p><h2 id="_1-8-\u89E3\u51B3\u4E0B\u8F7D\u7F13\u6162\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_1-8-\u89E3\u51B3\u4E0B\u8F7D\u7F13\u6162\u95EE\u9898" aria-hidden="true">#</a> 1.8 \u89E3\u51B3\u4E0B\u8F7D\u7F13\u6162\u95EE\u9898</h2><ul><li><p>\u6211\u4EEC\u4F7F\u7528 npm \u662F\u4ECE\u56FD\u5916\u7684\u7F51\u7AD9\u4E0B\u8F7D\u7B2C\u4E09\u65B9\u5305\uFF0C\u6240\u4EE5\u901F\u5EA6\u53EF\u80FD\u4E0D\u662F\u5F88\u7406\u60F3\u3002</p></li><li><p>\u4E00\u4E9B\u7EC4\u7EC7\u548C\u4E2A\u4EBA\u5236\u4F5C\u4E86 npm \u7684\u955C\u50CF\u7F51\u7AD9\uFF0C\u6211\u4EEC\u4ECE\u8FD9\u4E9B\u7F51\u7AD9\u4E0A\u4E0B\u8F7D\u901F\u5EA6\u53EF\u80FD\u4F1A\u5FEB\u4E8E\u5B98\u7F51\u7F51\u7AD9</p><p>\u4F8B\u5982\uFF1A\u6DD8\u5B9D\u955C\u50CF http://npm.taobao.org/</p></li></ul><ol><li>\u4F7F\u7528 npm config \u8BBE\u7F6E\u4E0B\u8F7D\u7F51\u7AD9\u5730\u5740</li></ol><p>npm \u547D\u4EE4\u9ED8\u8BA4\u4ECE\u5B98\u7F51\u8FDB\u884C\u4E0B\u8F7D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8BE5\u547D\u4EE4\u8BBE\u7F6E\u4E3A\u4ECE \u6DD8\u5B9D\u4E0B\u8F7D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u5168\u5C40\u4E0B\u8F7D\u6DD8\u5B9D\u7684 cnpm \u7A0B\u5E8F\uFF0C\u4F7F\u7528\u8BE5\u7A0B\u5E8F\u8FDB\u884C\u4E0B\u8F7D</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7Dcnpm\u547D\u4EE4\uFF0C\u5168\u5C40\u5B89\u88C5</span>
<span class="token function">npm</span> i cnpm -g
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4F7F\u7528cnpm\u4E0B\u8F7D\u7B2C\u4E09\u65B9\u5305\uFF0Ccnpm\u547D\u4EE4\u7684\u4F7F\u7528\u65B9\u5F0F\u548Cnpm\u4E00\u6837</span>
cnpm i art-template
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3"><li>\u4F7F\u7528 nrm \u4E00\u6B21\u6027\u8BBE\u7F6E\u591A\u4E2A\u955C\u50CF\u7F51\u7AD9\u5730\u5740</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7D nrm\uFF0C\u5168\u5C40\u5B89\u88C5</span>
<span class="token function">npm</span> i nrm -g

<span class="token comment"># \u67E5\u770B\u5DF2\u5B58\u5728\u7684\u955C\u50CF\u7F51\u7AD9\u5730\u5740</span>
nrm <span class="token function">ls</span>

<span class="token comment"># \u5207\u6362\u9ED8\u8BA4\u4F7F\u7528\u7684\u6E90</span>
nrm use <span class="token punctuation">[</span>name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><img src="`+t+'" alt="1552961066621"></p><p><img src="'+m+'" alt="1552961150137"></p>',54);function b(h,g){return u}var k=s(d,[["render",b]]);export{k as default};
