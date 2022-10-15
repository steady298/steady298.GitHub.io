import{_ as g}from"./chunks/ArticleMetadata.aa2b1cb4.js";import{_ as m,c as C,g as c,w as i,b as n,f as d,a as y,i as _,o,e as b,q as u}from"./app.d67b7cbd.js";const A="/assets/3408113D-4744-44FA-9E58-2A712D40E0DF.a635da28.jpeg",T=JSON.parse('{"title":"SpringBoot\u9879\u76EE\u5F15\u5165OpenFeign\u540E\u65E0\u6CD5\u542F\u52A8","description":"","frontmatter":{"title":"SpringBoot\u9879\u76EE\u5F15\u5165OpenFeign\u540E\u65E0\u6CD5\u542F\u52A8","author":"Coolman","date":"2022/10/16 00:30","categories":["\u4EE3\u7801\u96C6"],"tags":["Java","Spring Boot","Spring Cloud","Open Feign"]},"headers":[],"relativePath":"categories/issues/2022/10/16/\u5199\u5728\u8FD9\u4E00\u5929.md","lastUpdated":1665856768000}'),f={name:"categories/issues/2022/10/16/\u5199\u5728\u8FD9\u4E00\u5929.md"},h=n("h1",{id:"\u7F51\u7AD9\u5F00\u901A\u7684\u65E5\u5B50",tabindex:"-1"},[d("\u7F51\u7AD9\u5F00\u901A\u7684\u65E5\u5B50 "),n("a",{class:"header-anchor",href:"#\u7F51\u7AD9\u5F00\u901A\u7684\u65E5\u5B50","aria-hidden":"true"},"#")],-1),v=y(`<p>\u78D5\u78D5\u7ECA\u7ECA\u7684\u603B\u7B97\u662F\u628A\u81EA\u5DF1\u7684\u535A\u5BA2\u7AD9\u505A\u597D\u4E86\uFF0C\u8FD8\u662F\u6709\u70B9\u9A84\u50B2\u7684\uFF0C\u56E0\u4E3A\u6211\u4E0D\u4F1A<u>js</u>\u4E5F\u4E0D\u4F1A<u>html</u>\u5C31\u8FDE\u73B0\u5728\u5199\u7684<strong>Markdown</strong>\u4E5F\u90FD\u662F\u73B0\u5B66\u7684 \u4F46\u662F\u81EA\u5DF1\u6363\u9F13\u4E86\u4E00\u6574\u5929\u7ECF\u5386\u5404\u79CD\u5404\u6837\u7684\u95EE\u9898</p><ul><li>\u670D\u52A1\u5668</li><li>\u6E90\u7801</li><li>github page</li><li>git\u5BA2\u6237\u7AEF</li></ul><p>\u6700\u8BA9\u6211\u5934\u75DB\u7684\u5C31\u662Fgit\u5BA2\u6237\u7AEF\u4E86\u5427 \u7ED1\u5B9Assh key \uFF0Cgit clone\u540Enpm\u7684\u547D\u4EE4\u6B7B\u6D3B\u4E0D\u884C\uFF0C\u660E\u660E\u6211\u90FD\u5B89\u88C5\u4E86\u73AF\u5883\u4E86 \u641E\u4E86\u534A\u5929\u624D\u77E5\u9053\u6211\u662F\u5728\u8FD0\u884Cgit\u7684\u65F6\u5019\u5B89\u88C5\u7684\u73AF\u5883 \u5FC5\u987B\u91CD\u542F\u6216\u8005\u5237\u65B0\u73AF\u5883</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#abb2bf;">git inti</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">git inti</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><blockquote><p>\u540E\u6765\u53D1\u73B0\u521D\u59CB\u5316\u4ED3\u5E93\u4E5F\u53EF\u4EE5</p></blockquote><p>\u7136\u540E\u5C31\u6309\u7167\u5927\u4F6C\u7684\u6559\u7A0B \u4E00\u6B65\u4E00\u6B65\u7684<strong>git</strong>\uFF0C\u4E4B\u540E\u6210\u529F\u6253\u5305\u5E76\u4E14\u5728\u672C\u5730\u8FD0\u884C\uFF0C\u63A5\u4E0B\u6765\u5C31\u662F\u628A\u5B83\u653E\u5230github\u4ED3\u5E93\u91CC\u4E86\uFF0C\u8FD9\u4E00\u6B65\u4E5F\u662F\u5E9F\u4E86\u6211\u597D\u591A\u65F6\u95F4 \u5148\u662F\u663E\u793A\u672C\u5730\u4EE3\u7801\u548C\u4ED3\u5E93\u4F5C\u8005\u4E0D\u4E00\u81F4\u800C\u65E0\u6CD5pull \u7F51\u4E0A\u67E5\u627E\u6700\u540E\u627E\u5230\u4E86\u4E00\u4E2A\u5F3A\u5236git pull\u7684\u547D\u4EE4</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#abb2bf;">git pull -f</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">git pull -f</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u7EC8\u4E8E\u662Fpull\u5230\u4ED3\u5E93\u4E86 \u770B\u5927\u4F6C\u6587\u4EF6\u91CC\u6709\u5728github\u81EA\u52A8\u90E8\u7F72\u7684\u811A\u672C\u7ED3\u679C\u4E0D\u77E5\u9053\u5982\u4F55\u914D\u7F6Epages\u2026 \u51E0\u7ECF\u6298\u817E\u539F\u6765\u662Fsource\u8981\u8BBE\u7F6E\u4E3Apage\u76EE\u5F55\u4E0B\u7684\u6839\u76EE\u5F55root \u63A5\u4E0B\u6765\u5C31\u662F\u88C5\u4FEE\u7F51\u7AD9\u7684\u5185\u5BB9\u4E86\uFF0C\u4E0A\u4F20<em><a href="http://xn--5nqy36cnpfr97a.me" target="_blank" rel="noreferrer">\u6D4B\u8BD5\u6587\u4EF6.me</a></em>\u5230/docs\u540E\u5728\u7F51\u7AD9\u535A\u5BA2\u76EE\u5F55\u5E76\u6CA1\u6709\u6211\u4E0A\u4F20\u7684md\u6587\u4EF6\uFF0C\u5BF9\u6BD4\u5927\u4F6C\u7684\u6587\u6863\u53D1\u73B0\u8BE5vitepress\u914D\u7F6E\u4E2D\u83B7\u53D6\u6807\u9898\u7684\u65B9\u5F0F\u662F\u7279\u5B9A\u7684\u548C\u6587\u4EF6\u540D\u5B57\u65E0\u5173\uFF0C\u5982\u679C\u6309\u7167\u683C\u5F0F\u663E\u793A\u4E0D\u5230\u76EE\u5F55</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#abb2bf;">---</span></span>
<span class="line"><span style="color:#abb2bf;">title: SpringBoot\u9879\u76EE\u5F15\u5165OpenFeign\u540E\u65E0\u6CD5\u542F\u52A8</span></span>
<span class="line"><span style="color:#abb2bf;">author: Coolman</span></span>
<span class="line"><span style="color:#abb2bf;">date: 2022/10/16 00:30</span></span>
<span class="line"><span style="color:#abb2bf;">categories:</span></span>
<span class="line"><span style="color:#abb2bf;"> - \u4EE3\u7801\u96C6</span></span>
<span class="line"><span style="color:#abb2bf;">tags:</span></span>
<span class="line"><span style="color:#abb2bf;"> - Java</span></span>
<span class="line"><span style="color:#abb2bf;"> - &quot;Spring Boot&quot;</span></span>
<span class="line"><span style="color:#abb2bf;"> - &quot;Spring Cloud&quot;</span></span>
<span class="line"><span style="color:#abb2bf;"> - &quot;Open Feign&quot;</span></span>
<span class="line"><span style="color:#abb2bf;">---</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;">title: SpringBoot\u9879\u76EE\u5F15\u5165OpenFeign\u540E\u65E0\u6CD5\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">author: Coolman</span></span>
<span class="line"><span style="color:#A6ACCD;">date: 2022/10/16 00:30</span></span>
<span class="line"><span style="color:#A6ACCD;">categories:</span></span>
<span class="line"><span style="color:#A6ACCD;"> - \u4EE3\u7801\u96C6</span></span>
<span class="line"><span style="color:#A6ACCD;">tags:</span></span>
<span class="line"><span style="color:#A6ACCD;"> - Java</span></span>
<span class="line"><span style="color:#A6ACCD;"> - &quot;Spring Boot&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> - &quot;Spring Cloud&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> - &quot;Open Feign&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p>\u8981\u6C42\u7684\u6587\u4EF6\u683C\u5F0F \uFF0C\u4ECEtittle\u540E\u83B7\u53D6\u6807\u9898\u2026 \u6D4B\u8BD5\u5B8C\u6210 \u5FC3\u91CC\u8BF4\u5B9E\u8BDD\u633A\u6EE1\u8DB3\u7684 \u6BD5\u7ADF\u8FD9\u662F\u6211\u771F\u6B63\u610F\u4E49\u4E0A\u7684<strong>\u7B2C\u4E00\u4E2A</strong>blog\u7AD9\uFF0C\u800C\u8FD9\u4E2A\u6587\u7AE0\u4E5F\u662F\u6211<strong>\u7B2C\u4E00\u7BC7</strong>\u535A\u6587</p></blockquote><h1 id="\u6211\u7684\u751F\u65E5" tabindex="-1">\u6211\u7684\u751F\u65E5 <a class="header-anchor" href="#\u6211\u7684\u751F\u65E5" aria-hidden="true">#</a></h1>`,11),D=n("p",null,[d("10\u670816\u65E5 \u6BCF\u5F53\u6211\u751F\u65E5\u7684\u65F6\u5019\u56FD\u5BB6\u603B\u662F\u53D1\u751F\u4E00\u4E9B\u4E2A\u5927\u4E8B\u60C5 "),n("img",{src:A,alt:"\u56FE\u7247"})],-1),q=n("blockquote",null,[n("p",null,"\u53BB\u5E74\u751F\u65E5\u7A7A\u95F4\u53D1\u7684\uFF0C\u4ECA\u5E74\u7684\u4E8B\u60C5\u662F\u4E8C\u5341\u5927\u53EC\u5F00 \u8FC7\u4E86\u4E00\u5E74\u6211\u4E0D\u77E5\u9053\u81EA\u5DF1\u53D8\u6210\u600E\u4E48\u6837\uFF0C\u4F46\u4EC5\u4EC5\u4ECE\u751F\u65E5\u7684\u611F\u53D7\u6765\u8BF4 \u6211\u597D\u50CF\u53D8\u5F97\u5B64\u50FB\u4E86\uFF0C\u8FDE\u4EE5\u524D\u4E50\u4E8E\u53D1\u7684qq\u7A7A\u95F4\u670B\u53CB\u5708\u90FD\u65E0\u5FC3\u601D\u4E86\uFF0C\u56E0\u6B64\u4ECA\u5E74\u7684\u751F\u65E5\u795D\u798F\u5E94\u8BE5\u4E5F\u53EA\u6709\u7238\u7238\u5988\u5988\u7684\u4E86\u5427\u3001 \u751F\u65E5\u4ECA\u5929\u4F1A\u8FC7\u5F97\u600E\u4E48\u6837\uFF0C\u6211\u73B0\u5728\u8FD8\u4E0D\u77E5\u9053\uFF0C\u56E0\u4E3A\u73B0\u5728\u624D\u51CC\u666801:24 \u665A\u4E0A\u518D\u5199\u5427\uFF01")],-1);function k(s,S,B,O,$,F){const t=g,r=_("ClientOnly");return o(),C("div",null,[h,c(r,null,{default:i(()=>{var a,e,l,p;return[((e=(a=s.$frontmatter)==null?void 0:a.aside)!=null?e:!0)&&((p=(l=s.$frontmatter)==null?void 0:l.showArticleMetadata)!=null?p:!0)?(o(),b(t,{key:0,article:s.$frontmatter},null,8,["article"])):u("",!0)]}),_:1}),v,c(r,null,{default:i(()=>{var a,e,l,p;return[((e=(a=s.$frontmatter)==null?void 0:a.aside)!=null?e:!0)&&((p=(l=s.$frontmatter)==null?void 0:l.showArticleMetadata)!=null?p:!0)?(o(),b(t,{key:0,article:s.$frontmatter},null,8,["article"])):u("",!0)]}),_:1}),D,q])}const V=m(f,[["render",k]]);export{T as __pageData,V as default};
