(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{149:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(1),o=t(7),a=(t(0),t(357)),i={id:"use-cases-cicd",title:"CI/CD",sidebar_label:"CI/CD"},c={id:"version-0.25.0/use-cases-cicd",isDocsHomePage:!1,title:"CI/CD",description:"Implementing CI/CD pipelines and deployment of applications to containers or virtual or physical machines is a non-trivial process.",source:"@site/versioned_docs/version-0.25.0/use-cases-cicd.md",permalink:"/docs/0.25.0/use-cases-cicd",editUrl:"https://github.com/temporalio/documentation-legacy/blob/master/versioned_docs/version-0.25.0/use-cases-cicd.md",version:"0.25.0",sidebar_label:"CI/CD",sidebar:"version-0.25.0/docs",previous:{title:"Infrastructure Provisioning",permalink:"/docs/0.25.0/use-cases-provisioning"},next:{title:"Operational Management",permalink:"/docs/0.25.0/use-cases-operational-management"},latestVersionMainDocPermalink:"/docs/overview"},s=[],l={rightToc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Implementing CI/CD pipelines and deployment of applications to containers or virtual or physical machines is a non-trivial process.\nIts business logic has to deal with complex requirements around rolling upgrades, canary deployments, and rollbacks.\nTemporal is a perfect platform for building a deployment solution because it provides all the necessary guarantees and abstractions\nallowing developers to focus on the business logic."),Object(a.b)("p",null,"Example production systems:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Uber internal deployment infrastructure"),Object(a.b)("li",{parentName:"ul"},"Update push to IoT devices")))}p.isMDXComponent=!0},357:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return t?o.a.createElement(f,c({ref:n},l,{components:t})):o.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);