(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{161:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(1),a=t(7),o=(t(0),t(357)),i={id:"go-signals",title:"Signals"},l={id:"version-0.23.1/go-signals",isDocsHomePage:!1,title:"Signals",description:"Signals provide a mechanism to send data directly to a running workflow. Previously, you had",source:"@site/versioned_docs/version-0.23.1/go-signals.md",permalink:"/docs/0.23.1/go-signals",editUrl:"https://github.com/temporalio/documentation-legacy/blob/master/versioned_docs/version-0.23.1/go-signals.md",version:"0.23.1",sidebar:"version-0.23.1/docs",previous:{title:"Error Handling",permalink:"/docs/0.23.1/go-error-handling"},next:{title:"ContinueAsNew",permalink:"/docs/0.23.1/go-continue-as-new"},latestVersionMainDocPermalink:"/docs/overview"},s=[{value:"SignalWithStart",id:"signalwithstart",children:[]}],c={rightToc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Signals")," provide a mechanism to send data directly to a running workflow. Previously, you had\ntwo options for passing data to the workflow implementation:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Via start parameters"),Object(o.b)("li",{parentName:"ul"},"As return values from activities")),Object(o.b)("p",null,"With start parameters, we could only pass in values before workflow execution began."),Object(o.b)("p",null,"Return values from activities allowed us to pass information to a running workflow, but this\napproach comes with its own complications. One major drawback is reliance on polling. This means\nthat the data needs to be stored in a third-party location until it's ready to be picked up by\nthe activity. Further, the lifecycle of this activity requires management, and the activity\nrequires manual restart if it fails before acquiring the data."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Signals"),", on the other hand, provide a fully asynchronous and durable mechanism for providing data to\na running workflow. When a signal is received for a running workflow, Temporal persists the event\nand the payload in the workflow history. The workflow can then process the signal at any time\nafterwards without the risk of losing the information. The workflow also has the option to stop\nexecution by blocking on a ",Object(o.b)("strong",{parentName:"p"},"signal channel"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'var signalVal string\nsignalChan := workflow.GetSignalChannel(ctx, signalName)\n\ns := workflow.NewSelector(ctx)\ns.AddReceive(signalChan, func(c workflow.Channel, more bool) {\n    c.Receive(ctx, &signalVal)\n    workflow.GetLogger(ctx).Info("Received signal!", zap.String("signal", signalName), zap.String("value", signalVal))\n})\ns.Select(ctx)\n\nif len(signalVal) > 0 && signalVal != "SOME_VALUE" {\n    return errors.New("signalVal")\n}\n')),Object(o.b)("p",null,"In the example above, the workflow code uses ",Object(o.b)("strong",{parentName:"p"},"workflow.GetSignalChannel")," to open a\n",Object(o.b)("strong",{parentName:"p"},"workflow.Channel")," for the named signal. We then use a ",Object(o.b)("strong",{parentName:"p"},"workflow.Selector")," to wait on this\nchannel and process the payload received with the signal."),Object(o.b)("h2",{id:"signalwithstart"},"SignalWithStart"),Object(o.b)("p",null,"You may not know if a workflow is running and can accept a signal. The\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://pkg.go.dev/go.temporal.io/temporal/client#Client"}),"client.SignalWithStartWorkflow")," API\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://pkg.go.dev/go.temporal.io/temporal/client#Client"}),"client.SignalWithStartWorkflow")," API\nallows you to send a signal to the current workflow instance if one exists or to create a new\nrun and then send the signal. ",Object(o.b)("inlineCode",{parentName:"p"},"SignalWithStartWorkflow")," therefore doesn't take a run Id as a\nparameter."))}p.isMDXComponent=!0},357:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},u=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,f=u["".concat(i,".").concat(d)]||u[d]||g[d]||o;return t?a.a.createElement(f,l({ref:n},c,{components:t})):a.a.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);