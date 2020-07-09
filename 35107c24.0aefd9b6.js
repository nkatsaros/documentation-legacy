(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n(1),o=n(7),i=(n(0),n(357)),a={id:"go-side-effect",title:"SideEffect"},c={id:"go-side-effect",isDocsHomePage:!1,title:"SideEffect",description:"workflow.SideEffect is useful for short, nondeterministic code snippets, such as getting a random",source:"@site/docs/go-side-effect.md",permalink:"/docs/next/go-side-effect",editUrl:"https://github.com/temporalio/documentation-legacy/blob/master/docs/go-side-effect.md",version:"next",sidebar:"docs",previous:{title:"ContinueAsNew",permalink:"/docs/next/go-continue-as-new"},next:{title:"Queries",permalink:"/docs/next/go-queries"},latestVersionMainDocPermalink:"/docs/overview"},s=[],u={rightToc:s};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"workflow.SideEffect")," is useful for short, nondeterministic code snippets, such as getting a random\nvalue or generating a UUID. It executes the provided function once and records its result into the\nworkflow history. ",Object(i.b)("inlineCode",{parentName:"p"},"workflow.SideEffect"),' does not re-execute upon replay, but instead returns the\nrecorded result. It can be seen as an "inline" activity. Something to note about ',Object(i.b)("inlineCode",{parentName:"p"},"workflow.SideEffect"),"\nis that, unlike the Temporal guarantee of at-most-once execution for activities, there is no such\nguarantee with ",Object(i.b)("inlineCode",{parentName:"p"},"workflow.SideEffect"),". Under certain failure conditions, ",Object(i.b)("inlineCode",{parentName:"p"},"workflow.SideEffect")," can\nend up executing a function more than once."),Object(i.b)("p",null,"The only way to fail ",Object(i.b)("inlineCode",{parentName:"p"},"SideEffect")," is to panic, which causes a decision task failure. After the\ntimeout, Temporal reschedules and then re-executes the decision task, giving ",Object(i.b)("inlineCode",{parentName:"p"},"SideEffect")," another chance\nto succeed. Do not return any data from ",Object(i.b)("inlineCode",{parentName:"p"},"SideEffect")," other than through its recorded return value."),Object(i.b)("p",null,"The following sample demonstrates how to use ",Object(i.b)("inlineCode",{parentName:"p"},"SideEffect"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),"encodedRandom := SideEffect(func(ctx workflow.Context) interface{} {\n        return rand.Intn(100)\n})\n\nvar random int\nencodedRandom.Get(&random)\nif random < 50 {\n        ....\n} else {\n        ....\n}\n")))}f.isMDXComponent=!0},357:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),f=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=f(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=f(n),p=r,m=l["".concat(a,".").concat(p)]||l[p]||d[p]||i;return n?o.a.createElement(m,c({ref:t},u,{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);