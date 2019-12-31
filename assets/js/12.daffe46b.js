(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{222:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"static-site-generator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-site-generator"}},[t._v("#")]),t._v(" Static Site Generator")]),t._v(" "),a("ul",[a("li",[t._v("서버는 완성된 HTML을 가지고 있으며, 클라이언트 요청에 의해 전달")]),t._v(" "),a("li",[t._v("모양의 정적을 뜻하는 것이 아니라, 포스트가 올라간 시점에서 모든 페이지가 정적으로 완결된다는 것을 의미함. (변형이 쉽지 않음)")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("장점\n- HYML만 제공하면 되므로 웹서버 설정이 간편하다.\n- DB관리 등 운영에 필요한 자원 소모가 거의 없다.\n- 기본 컨텐츠가 md파일이므로, 다른 플랫폼으로 이전이 쉽다.\n")])])]),a("p",[a("a",{attrs:{href:"https://blog.nacyot.com/articles/2014-01-15-static-site-generator/",target:"_blank",rel:"noopener noreferrer"}},[t._v("이 블로그"),a("OutboundLink")],1),t._v("에서 자세하게 설명이 되어있다.")]),t._v(" "),a("h2",{attrs:{id:"vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[t._v("#")]),t._v(" VuePress")]),t._v(" "),a("p",[t._v("기술문서작성을 위해 최적화된 기본테마를 제공해줍니다.")]),t._v(" "),a("p",[t._v("Plugin API를 제공해주어서 플러그인을 제작하거나 적용할수있습니다.( 뷰프레스가 공식적으로 지원해주는 플러그인을 사용하면 Google Analytics, PWA를 손쉽게 적용가능함. )")]),t._v(" "),a("h4",{attrs:{id:"기본-설치-및-빌드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기본-설치-및-빌드"}},[t._v("#")]),t._v(" 기본 설치 및 빌드")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install globally")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g vuepress\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create the project folder")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" docs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create a markdown file")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'# Hello VuePress'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" README.md\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# start writing")]),t._v("\nvuepress dev\n")])])]),a("p",[t._v("vuepress는 config 파일이 없더라도 dev, build가 가능하지만, vuepress가 지원해주는 기능들을 사용하거나 커스터마이징하기위해서는 config파일(또는 폴더)를 생성하는것이 좋습니다.")]),t._v(" "),a("h4",{attrs:{id:"디렉토리-구조"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#디렉토리-구조"}},[t._v("#")]),t._v(" 디렉토리 구조")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/directory-structure.html#default-page-routing",target:"_blank",rel:"noopener noreferrer"}},[t._v("추천 구조"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├── docs\n│   ├── .vuepress "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n│   │   ├── components "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n│   │   ├── config.js "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n│   ├── README.md\n│   ├── about\n│   │   └── README.md\n│   └── config.md\n│\n└── package.json\n")])])]),a("hr"),t._v(" "),a("h3",{attrs:{id:"default-theme-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-theme-config"}},[t._v("#")]),t._v(" Default Theme Config")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress.vuejs.org/theme/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docs"),a("OutboundLink")],1),t._v(" 참고")]),t._v(" "),a("h4",{attrs:{id:"vuepress-config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-config-js"}},[t._v("#")]),t._v(" .vuepress/config.js")]),t._v(" "),a("p",[t._v("config.js에 vuepress의 기본적인 설정을 하거나, 플러그인 추가, 사이트 메타정보 설정 등을 하게됩니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" .vuepress\ncode config.js\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// docs/.vuepress/config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VuePress Start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello VuePress"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("vuepress dev로 구동 시 파일 변경을 감지하고 오류를 리턴한다.")]),t._v(" "),a("p",[t._v("warning Override existing page /.")]),t._v(" "),a("p",[t._v("변경된 내용을 적용하기 위해서 Ctrl + C 로 종료 후 다시 시동")])]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"navbar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navbar"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://vuepress.vuejs.org/theme/default-theme-config.html#navbar",target:"_blank",rel:"noopener noreferrer"}},[t._v("Navbar"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docs")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" about\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'# About Page'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" README.md\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VuePress Start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello VuePress"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    nav"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Home"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"about"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/about/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Github"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/kshm2483"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_blank"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        rel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noopener"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("라우팅에서 "),a("code",[t._v("/about/")]),t._v("이 아닌 "),a("code",[t._v("/about")]),t._v("으로 설정할 경우 "),a("code",[t._v("/about.md")]),t._v("를 렌더링하게 됨")])]),t._v(" "),a("p",[t._v("nav에 link를 통해 외부 링크로 연결할 수 있다. 하지만 내 Github로 갈거기 때문에 vuepress에서 지원하는 "),a("code",[t._v("repo")]),t._v("기능을 사용")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code")])]),a("hr"),t._v(" "),a("h4",{attrs:{id:"sidebar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sidebar"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sidebar"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"official-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#official-plugins"}},[t._v("#")]),t._v(" Official Plugins")]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"extension"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extension"}},[t._v("#")]),t._v(" extension")]),t._v(" "),a("hr"),t._v(" "),a("TagLinks")],1)}),[],!1,null,null,null);s.default=e.exports}}]);