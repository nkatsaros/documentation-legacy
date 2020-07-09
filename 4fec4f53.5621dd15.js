(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{201:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(1),o=t(7),i=(t(0),t(357)),a={id:"use-cases-polling",title:"Polling",sidebar_label:"Polling"},c={id:"version-0.26.0/use-cases-polling",isDocsHomePage:!1,title:"Polling",description:"Polling is executing a periodic action checking for a state change. Examples are pinging a host, calling a REST API, or listing an Amazon S3 bucket for newly uploaded files.",source:"@site/versioned_docs/version-0.26.0/use-cases-polling.md",permalink:"/docs/use-cases-polling",editUrl:"https://github.com/temporalio/documentation-legacy/blob/master/versioned_docs/version-0.26.0/use-cases-polling.md",version:"0.26.0",sidebar_label:"Polling",sidebar:"version-0.26.0/docs",previous:{title:"Microservice Orchestration and Saga",permalink:"/docs/use-cases-orchestration"},next:{title:"Event Driven Application",permalink:"/docs/use-cases-event-driven"}},l=[],s={rightToc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Polling is executing a periodic action checking for a state change. Examples are pinging a host, calling a REST API, or listing an Amazon S3 bucket for newly uploaded files."),Object(i.b)("p",null,"Temporal support for long running activities and unlimited retries makes it a good fit."),Object(i.b)("p",null,"Some real-world use cases:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Network, host and service monitoring"),Object(i.b)("li",{parentName:"ul"},"Processing files uploaded to FTP or S3"),Object(i.b)("li",{parentName:"ul"},"Polling an external API for a specific resource to become available")))}u.isMDXComponent=!0},357:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},p=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,b=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return t?o.a.createElement(b,c({ref:n},s,{components:t})):o.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);