import{c as n}from"./app.40b2e5cf.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/doc/assets/css-flex.56ea5949.png";const e={},l=n(`<h1 id="_1-css-flex" tabindex="-1"><a class="header-anchor" href="#_1-css-flex" aria-hidden="true">#</a> 1 css-flex</h1><p>\u6574\u7406\u81EA<a href="https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html">\u962E\u4E00\u5CF0\u535A\u5BA2</a></p><h2 id="_2-flex-\u5E03\u5C40\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_2-flex-\u5E03\u5C40\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 2 Flex \u5E03\u5C40\u662F\u4EC0\u4E48</h2><blockquote><p>Flexible Box \u5373 \u5F39\u6027\u5E03\u5C40</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u884C\u5185\u5143\u7D20\u4E5F\u53EF\u4EE5flex\u5E03\u5C40 */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-flex<span class="token punctuation">;</span> <span class="token comment">/* Safari webkit\u5185\u6838\u8981\u52A0\u524D\u7F00 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>\u6CE8\u610F\uFF0C\u8BBE\u4E3A Flex \u5E03\u5C40\u4EE5\u540E\uFF0C\u5B50\u5143\u7D20\u7684 float\u3001clear \u548C vertical-align \u5C5E\u6027\u5C06\u5931\u6548\u3002 \u672C\u8EAB\u7684 text-align \u4E5F\u4F1A\u5931\u6548</p></blockquote><h2 id="_2-\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_2-\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> 2 \u57FA\u672C\u6982\u5FF5</h2><blockquote><p>\u91C7\u7528 Flex \u5E03\u5C40\u7684\u5143\u7D20\uFF0C\u79F0\u4E3A Flex \u5BB9\u5668\uFF08flex container\uFF09\uFF0C\u7B80\u79F0&quot;\u5BB9\u5668&quot;\u3002\u5B83\u7684\u6240\u6709\u5B50\u5143\u7D20\u81EA\u52A8\u6210\u4E3A\u5BB9\u5668\u6210\u5458\uFF0C\u79F0\u4E3A Flex \u9879\u76EE\uFF08flex item\uFF09\uFF0C\u7B80\u79F0&quot;\u9879\u76EE&quot;\u3002</p></blockquote><p><img src="`+a+`" alt="pci"></p><p>\u5BB9\u5668\u9ED8\u8BA4\u5B58\u5728\u4E24\u6839\u8F74\uFF1A\u6C34\u5E73\u7684\u4E3B\u8F74\uFF08main axis\uFF09\u548C\u5782\u76F4\u7684\u4EA4\u53C9\u8F74\uFF08cross axis\uFF09\u3002\u4E3B\u8F74\u7684\u5F00\u59CB\u4F4D\u7F6E\uFF08\u4E0E\u8FB9\u6846\u7684\u4EA4\u53C9\u70B9\uFF09\u53EB\u505A main start\uFF0C\u7ED3\u675F\u4F4D\u7F6E\u53EB\u505A main end\uFF1B\u4EA4\u53C9\u8F74\u7684\u5F00\u59CB\u4F4D\u7F6E\u53EB\u505A cross start\uFF0C\u7ED3\u675F\u4F4D\u7F6E\u53EB\u505A cross end\u3002</p><p>\u9879\u76EE\u9ED8\u8BA4\u6CBF\u4E3B\u8F74\u6392\u5217\u3002\u5355\u4E2A\u9879\u76EE\u5360\u636E\u7684\u4E3B\u8F74\u7A7A\u95F4\u53EB\u505A main size\uFF0C\u5360\u636E\u7684\u4EA4\u53C9\u8F74\u7A7A\u95F4\u53EB\u505A cross size\u3002</p><h2 id="_3-\u5BB9\u5668-container-\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_3-\u5BB9\u5668-container-\u7684\u5C5E\u6027" aria-hidden="true">#</a> 3 \u5BB9\u5668(container)\u7684\u5C5E\u6027</h2><ul><li>flex-direction</li><li>flex-wrap</li><li>flex-flow</li><li>justify-content</li><li>align-items</li><li>align-content</li></ul><h3 id="_3-1-flex-direction-\u4E3B\u8F74\u65B9\u5411" tabindex="-1"><a class="header-anchor" href="#_3-1-flex-direction-\u4E3B\u8F74\u65B9\u5411" aria-hidden="true">#</a> 3.1 flex-direction \u4E3B\u8F74\u65B9\u5411</h3><blockquote><p>\u51B3\u5B9A\u4E3B\u8F74(main axis)\u7684\u65B9\u5411</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row | row-reverse | column | column-reverse<span class="token punctuation">;</span>
  <span class="token comment">/* row\uFF08\u9ED8\u8BA4\u503C\uFF09\uFF1A\u4E3B\u8F74\u4E3A\u6C34\u5E73\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u5DE6\u7AEF\u3002 */</span>
  <span class="token comment">/* row-reverse\uFF1A\u4E3B\u8F74\u4E3A\u6C34\u5E73\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u53F3\u7AEF\u3002 */</span>
  <span class="token comment">/* r=column\uFF1A\u4E3B\u8F74\u4E3A\u5782\u76F4\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u4E0A\u6CBF\u3002 */</span>
  <span class="token comment">/* column-reverse\uFF1A\u4E3B\u8F74\u4E3A\u5782\u76F4\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u4E0A\u6CBF\u3002 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_3-2-flex-wrap-\u4E3B\u8F74\u662F\u5426\u6362\u884C" tabindex="-1"><a class="header-anchor" href="#_3-2-flex-wrap-\u4E3B\u8F74\u662F\u5426\u6362\u884C" aria-hidden="true">#</a> 3.2 flex-wrap \u4E3B\u8F74\u662F\u5426\u6362\u884C</h3><blockquote><p>\u82E5\u662F\u4E00\u884C\u663E\u793A\u4E0D\u4E0B \u8BBE\u7F6E\u6362\u884C\u65B9\u5F0F</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap | wrap | wrap-reverse<span class="token punctuation">;</span>
  <span class="token comment">/* nowrap\uFF08\u9ED8\u8BA4\u503C\uFF09: \u727A\u7272flex-item\u7684\u5BBD\u5EA6 \u4FDD\u6301\u4E0D\u6362\u884C */</span>
  <span class="token comment">/* wrap: flex-containter\u5BBD\u5EA6\u4E0D\u591F\u65F6\u6362\u884C */</span>
  <span class="token comment">/* wrap-reverse: \u5BBD\u5EA6\u4E0D\u591F\u65F6\u6362\u884C \u4FDD\u6301\u540E\u9762\u7684\u5143\u7D20\u5728\u524D */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_3-3-flex-flow-\u65B9\u5411-\u6362\u884C-\u7B80\u5199" tabindex="-1"><a class="header-anchor" href="#_3-3-flex-flow-\u65B9\u5411-\u6362\u884C-\u7B80\u5199" aria-hidden="true">#</a> 3.3 flex-flow \u65B9\u5411+\u6362\u884C \u7B80\u5199</h3><blockquote><p>flex-direction \u548C flex-flow \u7B80\u5199\u5F62\u5F0F</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">flex-flow</span><span class="token punctuation">:</span> &lt;flex-direction&gt; || &lt;flex-wrap&gt;<span class="token punctuation">;</span>
  <span class="token comment">/* row nowrap(\u9ED8\u8BA4\u503C): \u4E3B\u8F74\u65B9\u5411row  \u4E0D\u6362\u884Cnowrap  */</span>
  <span class="token comment">/* \u5176\u4F59\u5C5E\u6027\u548Cflex-direction flex-wrap\u4E00\u81F4 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_3-4-justify-content-\u4E3B\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-4-justify-content-\u4E3B\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F" aria-hidden="true">#</a> 3.4 justify-content \u4E3B\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around<span class="token punctuation">;</span>
  <span class="token comment">/* flex-start\uFF08\u9ED8\u8BA4\u503C\uFF09\uFF1A\u5DE6\u5BF9\u9F50 */</span>
  <span class="token comment">/* flex-end\uFF1A\u53F3\u5BF9\u9F50 */</span>
  <span class="token comment">/* center\uFF1A \u5C45\u4E2D */</span>
  <span class="token comment">/* space-between\uFF1A\u4E24\u7AEF\u5BF9\u9F50\uFF0C\u9879\u76EE\u4E4B\u95F4\u7684\u95F4\u9694\u90FD\u76F8\u7B49\u3002 */</span>
  <span class="token comment">/* space-around\uFF1A\u6BCF\u4E2A\u9879\u76EE\u4E24\u4FA7\u7684\u95F4\u9694\u76F8\u7B49\u3002\u6240\u4EE5\uFF0C\u9879\u76EE\u4E4B\u95F4\u7684\u95F4\u9694\u6BD4\u9879\u76EE\u4E0E\u8FB9\u6846\u7684\u95F4\u9694\u5927\u4E00\u500D\u3002 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_3-5-align-item-\u5782\u76F4\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-5-align-item-\u5782\u76F4\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F" aria-hidden="true">#</a> 3.5 align-item \u5782\u76F4\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F</h3><blockquote><p>\u6CE8\u610F: \u82E5\u53D1\u751F\u6362\u884C \u4EA7\u751F\u591A\u6839\u4E3B\u8F74 \u8BE5\u5C5E\u6027\u53EA\u80FD\u63A7\u5236\u6574\u4F53 \u4E0D\u80FD\u63A7\u5236 item \u7684\u95F4\u8DDD \u9700\u8981\u7528 align-content</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span>
  <span class="token comment">/* stretch\uFF08\u9ED8\u8BA4\u503C\uFF09\uFF1A\u5982\u679Cflex-item\u672A\u8BBE\u7F6E\u9AD8\u5EA6\u6216\u8BBE\u4E3Aauto\uFF0C\u5C06\u5360\u6EE1\u6574\u4E2A\u5BB9\u5668\u7684\u9AD8\u5EA6\u3002\u82E5flex-item\u8BBE\u7F6E\u9AD8\u5EA6 \u5219\u8BE5\u5C5E\u6027\u4E0D\u751F\u6548 */</span>
  <span class="token comment">/* flex-start\uFF1A\u4EA4\u53C9\u8F74\u7684\u8D77\u70B9\u5BF9\u9F50\u3002 */</span>
  <span class="token comment">/* flex-end\uFF1A\u4EA4\u53C9\u8F74\u7684\u7EC8\u70B9\u5BF9\u9F50\u3002 */</span>
  <span class="token comment">/* center\uFF1A\u4EA4\u53C9\u8F74\u7684\u4E2D\u70B9\u5BF9\u9F50\u3002 */</span>
  <span class="token comment">/* baseline: \u9879\u76EE\u7684\u7B2C\u4E00\u884C\u6587\u5B57\u7684\u57FA\u7EBF\u5BF9\u9F50\u3002 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_3-6-align-content-\u591A\u6839\u4E3B\u8F74\u60C5\u51B5-\u4E00\u884C\u663E\u793A\u4E0D\u4E0B-\u51FA\u73B0\u6362\u884C\u65F6" tabindex="-1"><a class="header-anchor" href="#_3-6-align-content-\u591A\u6839\u4E3B\u8F74\u60C5\u51B5-\u4E00\u884C\u663E\u793A\u4E0D\u4E0B-\u51FA\u73B0\u6362\u884C\u65F6" aria-hidden="true">#</a> 3.6 align-content \u591A\u6839\u4E3B\u8F74\u60C5\u51B5(\u4E00\u884C\u663E\u793A\u4E0D\u4E0B \u51FA\u73B0\u6362\u884C\u65F6)</h3><blockquote><p>\u7C7B\u4F3C\u4E8E justify-content \u53EA\u4E0D\u8FC7 align-content \u63A7\u5236\u7684\u662F\u591A\u4E2A\u4E3B\u8F74 justify-content \u63A7\u5236\u7684\u662F\u4E00\u4E2A\u4E3B\u8F74\u4E0A\u7684 flex-item \u60C5\u51B5</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around |
    stretch<span class="token punctuation">;</span>
  <span class="token comment">/* stretch\uFF08\u9ED8\u8BA4\u503C\uFF09\uFF1A\u8F74\u7EBF\u5360\u6EE1\u6574\u4E2A\u4EA4\u53C9\u8F74\u3002 */</span>
  <span class="token comment">/* flex-start\uFF1A\u4E0E\u4EA4\u53C9\u8F74\u7684\u8D77\u70B9\u5BF9\u9F50\u3002 */</span>
  <span class="token comment">/* flex-end\uFF1A\u4E0E\u4EA4\u53C9\u8F74\u7684\u7EC8\u70B9\u5BF9\u9F50\u3002 */</span>
  <span class="token comment">/* center\uFF1A\u4E0E\u4EA4\u53C9\u8F74\u7684\u4E2D\u70B9\u5BF9\u9F50\u3002 */</span>
  <span class="token comment">/* space-between\uFF1A\u4E0E\u4EA4\u53C9\u8F74\u4E24\u7AEF\u5BF9\u9F50\uFF0C\u8F74\u7EBF\u4E4B\u95F4\u7684\u95F4\u9694\u5E73\u5747\u5206\u5E03\u3002 */</span>
  <span class="token comment">/* space-around\uFF1A\u6BCF\u6839\u8F74\u7EBF\u4E24\u4FA7\u7684\u95F4\u9694\u90FD\u76F8\u7B49\u3002\u6240\u4EE5\uFF0C\u8F74\u7EBF\u4E4B\u95F4\u7684\u95F4\u9694\u6BD4\u8F74\u7EBF\u4E0E\u8FB9\u6846\u7684\u95F4\u9694\u5927\u4E00\u500D\u3002 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_4-\u9879\u76EE-flex-item-\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_4-\u9879\u76EE-flex-item-\u7684\u5C5E\u6027" aria-hidden="true">#</a> 4 \u9879\u76EE(flex-item)\u7684\u5C5E\u6027</h2><ul><li>order</li><li>flex-grow</li><li>flex-shrink</li><li>flex-basis</li><li>flex</li><li>align-self</li></ul><h3 id="_4-1-order-\u5B9A\u4E49-item-\u7684\u6392\u5217\u987A\u5E8F-\u503C\u8D8A\u5C0F\u8D8A\u9760\u524D" tabindex="-1"><a class="header-anchor" href="#_4-1-order-\u5B9A\u4E49-item-\u7684\u6392\u5217\u987A\u5E8F-\u503C\u8D8A\u5C0F\u8D8A\u9760\u524D" aria-hidden="true">#</a> 4.1 order \u5B9A\u4E49 item \u7684\u6392\u5217\u987A\u5E8F \u503C\u8D8A\u5C0F\u8D8A\u9760\u524D</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">order</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token comment">/* \u9ED8\u8BA4\u503C\u4E3A0 \u503C\u8D8A\u5C0F\u8D8A\u9760\u524D */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_4-2-flex-grow-\u653E\u5927\u6BD4\u4F8B" tabindex="-1"><a class="header-anchor" href="#_4-2-flex-grow-\u653E\u5927\u6BD4\u4F8B" aria-hidden="true">#</a> 4.2 flex-grow \u653E\u5927\u6BD4\u4F8B</h3><blockquote><p>flex-grow \u5C5E\u6027\u5B9A\u4E49\u9879\u76EE\u7684\u653E\u5927\u6BD4\u4F8B\uFF0C\u9ED8\u8BA4\u4E3A 0\uFF0C\u5373\u5982\u679C\u5B58\u5728\u5269\u4F59\u7A7A\u95F4\uFF0C\u4E5F\u4E0D\u653E\u5927 \u7C7B\u4F3C\u4E8E width \u767E\u5206\u6BD4\u6548\u679C</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> &lt;number&gt;<span class="token punctuation">;</span> <span class="token comment">/* default 0 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>\u5982\u679C\u6240\u6709\u9879\u76EE\u7684 flex-grow \u5C5E\u6027\u90FD\u4E3A 1\uFF0C\u5219\u5B83\u4EEC\u5C06\u7B49\u5206\u5269\u4F59\u7A7A\u95F4\uFF08\u5982\u679C\u6709\u7684\u8BDD\uFF09\u3002\u5982\u679C\u4E00\u4E2A\u9879\u76EE\u7684 flex-grow \u5C5E\u6027\u4E3A 2\uFF0C\u5176\u4ED6\u9879\u76EE\u90FD\u4E3A 1\uFF0C\u5219\u524D\u8005\u5360\u636E\u7684\u5269\u4F59\u7A7A\u95F4\u5C06\u6BD4\u5176\u4ED6\u9879\u591A\u4E00\u500D\u3002</p></blockquote><h3 id="_4-3-flex-shrink" tabindex="-1"><a class="header-anchor" href="#_4-3-flex-shrink" aria-hidden="true">#</a> 4.3 flex-shrink</h3><p>\u7565</p><h3 id="_4-4-flex-basis" tabindex="-1"><a class="header-anchor" href="#_4-4-flex-basis" aria-hidden="true">#</a> 4.4 flex-basis</h3><p>\u7565</p><h3 id="_4-5-flex-4-2-4-3-4-4-\u7684\u7B80\u5199\u5F62\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4-5-flex-4-2-4-3-4-4-\u7684\u7B80\u5199\u5F62\u5F0F" aria-hidden="true">#</a> 4.5 flex 4.2 4.3 4.4 \u7684\u7B80\u5199\u5F62\u5F0F</h3><blockquote><p>flex \u5C5E\u6027\u662F flex-grow, flex-shrink \u548C flex-basis \u7684\u7B80\u5199\uFF0C\u9ED8\u8BA4\u503C\u4E3A 0 1 auto\u3002\u540E\u4E24\u4E2A\u5C5E\u6027\u53EF\u9009\u3002</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> none | [ &lt; <span class="token string">&#39;flex-grow&#39;</span> &gt; &lt; <span class="token string">&#39;flex-shrink&#39;</span> &gt;? || &lt; <span class="token string">&#39;flex-basis&#39;</span> &gt; ]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_4-6-align-self-\u5355\u4E2A-item-\u7684\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4-6-align-self-\u5355\u4E2A-item-\u7684\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F" aria-hidden="true">#</a> 4.6 align-self \u5355\u4E2A item \u7684\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F</h3><blockquote><p>\u53EF\u8986\u76D6 box \u4E0B\u7684align-item \u9ED8\u8BA4\u503C\u4E3Aaotu</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> auto | flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* auto\uFF08\u9ED8\u8BA4\u503C\uFF09\uFF1A\u8F74\u7EBF\u5360\u6EE1\u6574\u4E2A\u4EA4\u53C9\u8F74\u3002 */</span>
<span class="token comment">/* flex-start\uFF1A\u4E0E\u4EA4\u53C9\u8F74\u7684\u8D77\u70B9\u5BF9\u9F50\u3002 */</span>
<span class="token comment">/* flex-end\uFF1A\u4E0E\u4EA4\u53C9\u8F74\u7684\u7EC8\u70B9\u5BF9\u9F50\u3002 */</span>
<span class="token comment">/* center\uFF1A\u4E0E\u4EA4\u53C9\u8F74\u7684\u4E2D\u70B9\u5BF9\u9F50\u3002 */</span>
<span class="token comment">/* space-between\uFF1A\u4E0E\u4EA4\u53C9\u8F74\u4E24\u7AEF\u5BF9\u9F50\uFF0C\u8F74\u7EBF\u4E4B\u95F4\u7684\u95F4\u9694\u5E73\u5747\u5206\u5E03\u3002 */</span>
<span class="token comment">/* space-around\uFF1A\u6BCF\u6839\u8F74\u7EBF\u4E24\u4FA7\u7684\u95F4\u9694\u90FD\u76F8\u7B49\u3002\u6240\u4EE5\uFF0C\u8F74\u7EBF\u4E4B\u95F4\u7684\u95F4\u9694\u6BD4\u8F74\u7EBF\u4E0E\u8FB9\u6846\u7684\u95F4\u9694\u5927\u4E00\u500D\u3002 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,48);function p(t,c){return l}var i=s(e,[["render",p]]);export{i as default};
