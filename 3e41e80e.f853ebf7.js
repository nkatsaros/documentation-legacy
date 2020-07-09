(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(7),i=(n(0),n(357)),a={id:"go-continue-as-new",title:"ContinueAsNew"},c={id:"version-0.23.1/go-continue-as-new",isDocsHomePage:!1,title:"ContinueAsNew",description:"Workflows that need to rerun periodically could naively be implemented as a big for loop with",source:"@site/versioned_docs/version-0.23.1/go-continue-as-new.md",permalink:"/docs/0.23.1/go-continue-as-new",editUrl:"https://github.com/temporalio/documentation-legacy/blob/master/versioned_docs/version-0.23.1/go-continue-as-new.md",version:"0.23.1",sidebar:"version-0.23.1/docs",previous:{title:"Signals",permalink:"/docs/0.23.1/go-signals"},next:{title:"SideEffect",permalink:"/docs/0.23.1/go-side-effect"},latestVersionMainDocPermalink:"/docs/overview"},l=[],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Workflows that need to rerun periodically could naively be implemented as a big ",Object(i.b)("strong",{parentName:"p"},"for")," loop with\na sleep where the entire logic of the workflow is inside the body of the ",Object(i.b)("strong",{parentName:"p"},"for")," loop. The problem\nwith this approach is that the history for that workflow will keep growing to a point where it\nreaches the maximum size enforced by the service."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"ContinueAsNew")," is the low level construct that enables implementing such workflows without the\nrisk of failures down the road. The operation atomically completes the current execution and starts\na new execution of the workflow with the same ",Object(i.b)("strong",{parentName:"p"},"workflow Id"),". The new execution will not carry\nover any history from the old execution. To trigger this behavior, the workflow function should\nterminate by returning the special ",Object(i.b)("strong",{parentName:"p"},"ContinueAsNewError")," error:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),"func SimpleWorkflow(workflow.Context ctx, value string) error {\n    ...\n    return temporal.NewContinueAsNewError(ctx, SimpleWorkflow, value)\n}\n")))}u.isMDXComponent=!0},357:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(a,".").concat(m)]||p[m]||f[m]||i;return n?o.a.createElement(b,c({ref:t},s,{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);