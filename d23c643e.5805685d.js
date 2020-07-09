(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{316:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(7),i=(n(0),n(357)),a={id:"use-cases-dsl",title:"DSL Workflows",sidebar_label:"DSL Workflows"},s={id:"version-0.26.0/use-cases-dsl",isDocsHomePage:!1,title:"DSL Workflows",description:"Temporal supports implementing business logic directly in programming languages like Java and Go. But there are cases when",source:"@site/versioned_docs/version-0.26.0/use-cases-dsl.md",permalink:"/docs/use-cases-dsl",editUrl:"https://github.com/temporalio/documentation-legacy/blob/master/versioned_docs/version-0.26.0/use-cases-dsl.md",version:"0.26.0",sidebar_label:"DSL Workflows",sidebar:"version-0.26.0/docs",previous:{title:"Interactive Application",permalink:"/docs/use-cases-interactive"},next:{title:"Big Data and ML",permalink:"/docs/use-cases-big-ml"}},c=[],l={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Temporal supports implementing business logic directly in programming languages like Java and Go. But there are cases when\nusing a namespace-specific language is more appropriate. Or there might be a legacy system that uses some form of DSL for process definition but it is not operationally stable and scalable. This also applies to more recent systems like Apache Airflow, various BPMN engines and AWS Step Functions."),Object(i.b)("p",null,"An application that interprets the DSL definition can be written using the Temporal SDK. It automatically becomes highly fault tolerant, scalable, and durable when running on Temporal. Cadence has been used to deprecate several Uber internal DSL engines. The customers continue to use existing process definitions, but Temporal is used as an execution engine."),Object(i.b)("p",null,'There are multiple benefits of unifying all company workflow engines on top of Temporal. The most obvious one is that\nit is more efficient to support a single product instead of many. It is also difficult to beat the scalability and stability of\nTemporal which each of the integrations it comes with. Additionally, the ability to share activities across "engines"\nmight be a huge benefit in some cases.'))}u.isMDXComponent=!0},357:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(a,".").concat(m)]||p[m]||f[m]||i;return n?o.a.createElement(d,s({ref:t},l,{components:n})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);