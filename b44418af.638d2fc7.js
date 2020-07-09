(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{286:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(7),a=(n(0),n(357)),i={id:"use-cases-event-driven",title:"Event Driven Application",sidebar_label:"Event Driven Application"},s={id:"version-0.25.0/use-cases-event-driven",isDocsHomePage:!1,title:"Event Driven Application",description:"Many applications listen to multiple event sources, update the state of correspondent business entities,",source:"@site/versioned_docs/version-0.25.0/use-cases-event-driven.md",permalink:"/docs/0.25.0/use-cases-event-driven",editUrl:"https://github.com/temporalio/documentation-legacy/blob/master/versioned_docs/version-0.25.0/use-cases-event-driven.md",version:"0.25.0",sidebar_label:"Event Driven Application",sidebar:"version-0.25.0/docs",previous:{title:"Polling",permalink:"/docs/0.25.0/use-cases-polling"},next:{title:"Storage Scan",permalink:"/docs/0.25.0/use-cases-partitioned-scan"},latestVersionMainDocPermalink:"/docs/overview"},c=[],l={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Many applications listen to multiple event sources, update the state of correspondent business entities,\nand have to execute actions if some state is reached.\nTemporal is a good fit for many of these. It has direct support for asynchronous events (aka signals),\nhas a simple programming model that obscures a lot of complexity\naround state persistence, and ensures external action execution through built-in retries."),Object(a.b)("p",null,"Real-world examples:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Fraud detection where workflow reacts to events generated by consumer behavior"),Object(a.b)("li",{parentName:"ul"},"Customer loyalty program where the workflow accumulates reward points and applies them when requested")))}u.isMDXComponent=!0},357:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(m,s({ref:t},l,{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);