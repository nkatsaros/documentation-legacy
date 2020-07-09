(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{229:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),i=n(7),r=(n(0),n(357)),o={id:"go-execute-activity",title:"Executing Activities"},c={id:"version-0.26.0/go-execute-activity",isDocsHomePage:!1,title:"Executing Activities",description:"The primary responsibility of a workflow implementation is to schedule activities for execution. The",source:"@site/versioned_docs/version-0.26.0/go-execute-activity.md",permalink:"/docs/go-execute-activity",editUrl:"https://github.com/temporalio/documentation-legacy/blob/master/versioned_docs/version-0.26.0/go-execute-activity.md",version:"0.26.0",sidebar:"version-0.26.0/docs",previous:{title:"Activities",permalink:"/docs/go-activities"},next:{title:"Child Workflows",permalink:"/docs/go-child-workflows"}},l=[{value:"Activity options",id:"activity-options",children:[]},{value:"Activity timeouts",id:"activity-timeouts",children:[]},{value:"ExecuteActivity call",id:"executeactivity-call",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The primary responsibility of a workflow implementation is to schedule activities for execution. The\nmost straightforward way to do this is via the library method ",Object(r.b)("inlineCode",{parentName:"p"},"workflow.ExecuteActivity"),". The following\nsample code demonstrates making this call:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'ao := workflow.ActivityOptions{\n        TaskQueue:               "sampleTaskQueue",\n        ScheduleToCloseTimeout: time.Second * 60,\n        ScheduleToStartTimeout: time.Second * 60,\n        StartToCloseTimeout:    time.Second * 60,\n        HeartbeatTimeout:       time.Second * 10,\n        WaitForCancellation:    false,\n}\nctx = workflow.WithActivityOptions(ctx, ao)\n\nvar result string\nerr := workflow.ExecuteActivity(ctx, SimpleActivity, value).Get(ctx, &result)\nif err != nil {\n        return err\n}\n')),Object(r.b)("p",null,"Let's take a look at each component of this call."),Object(r.b)("h2",{id:"activity-options"},"Activity options"),Object(r.b)("p",null,"Before calling ",Object(r.b)("inlineCode",{parentName:"p"},"workflow.ExecuteActivity()"),", you must configure ",Object(r.b)("inlineCode",{parentName:"p"},"ActivityOptions")," for the\ninvocation. These options customize various execution timeouts, and are passed in by creating a child\ncontext from the initial context and overwriting the desired values. The child context is then passed\ninto the ",Object(r.b)("inlineCode",{parentName:"p"},"workflow.ExecuteActivity()")," call. If multiple activities are sharing the same option\nvalues, then the same context instance can be used when calling ",Object(r.b)("inlineCode",{parentName:"p"},"workflow.ExecuteActivity()"),"."),Object(r.b)("h2",{id:"activity-timeouts"},"Activity timeouts"),Object(r.b)("p",null,"There can be various kinds of timeouts associated with an activity. Temporal guarantees that activities\nare executed ",Object(r.b)("em",{parentName:"p"},"at most once"),", so an activity either succeeds or fails with one of the following timeouts:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Timeout"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"StartToCloseTimeout")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Maximum time that a worker can take to process a task after it has received the task.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ScheduleToStartTimeout")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Time a task can wait to be picked up by an activity worker after a workflow schedules it. If there are no workers available to process this task for the specified duration, the task will time out.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ScheduleToCloseTimeout")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Time a task can take to complete after it is scheduled by a workflow. This is usually greater than the sum of ",Object(r.b)("inlineCode",{parentName:"td"},"StartToClose")," and ",Object(r.b)("inlineCode",{parentName:"td"},"ScheduleToStart")," timeouts.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"HeartbeatTimeout")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If a task doesn't heartbeat to the Temporal service for this duration, it will be considered to have failed. This is useful for long-running tasks.")))),Object(r.b)("h2",{id:"executeactivity-call"},"ExecuteActivity call"),Object(r.b)("p",null,"The first parameter in the call is the required ",Object(r.b)("inlineCode",{parentName:"p"},"workflow.Context")," object. This type is a copy of\n",Object(r.b)("inlineCode",{parentName:"p"},"context.Context")," with the ",Object(r.b)("inlineCode",{parentName:"p"},"Done()")," method returning ",Object(r.b)("inlineCode",{parentName:"p"},"workflow.Channel")," instead of the native Go ",Object(r.b)("inlineCode",{parentName:"p"},"chan"),"."),Object(r.b)("p",null,"The second parameter is the function that we registered as an activity function. This parameter can\nalso be a string representing the fully qualified name of the activity function. The benefit of passing\nin the actual function object is that the framework can validate activity parameters."),Object(r.b)("p",null,"The remaining parameters are passed to the activity as part of the call. In our example, we have a\nsingle parameter: ",Object(r.b)("inlineCode",{parentName:"p"},"value"),". This list of parameters must match the list of parameters declared by\nthe activity function. The Temporal client library will validate this."),Object(r.b)("p",null,"The method call returns immediately and returns a ",Object(r.b)("inlineCode",{parentName:"p"},"workflow.Future"),". This allows you to execute more\ncode without having to wait for the scheduled activity to complete."),Object(r.b)("p",null,"When you are ready to process the results of the activity, call the ",Object(r.b)("inlineCode",{parentName:"p"},"Get()")," method on the future\nobject returned. The parameters to this method are the ",Object(r.b)("inlineCode",{parentName:"p"},"ctx")," object we passed to the\n",Object(r.b)("inlineCode",{parentName:"p"},"workflow.ExecuteActivity()")," call and an output parameter that will receive the output of the\nactivity. The type of the output parameter must match the type of the return value declared by the\nactivity function. The ",Object(r.b)("inlineCode",{parentName:"p"},"Get()")," method will block until the activity completes and results are\navailable."),Object(r.b)("p",null,"You can retrieve the result value returned by ",Object(r.b)("inlineCode",{parentName:"p"},"workflow.ExecuteActivity()")," from the future and use\nit like any normal result from a synchronous function call. The following sample code demonstrates how\nyou can use the result if it is a string value:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'var result string\nif err := future.Get(ctx, &result); err != nil {\n        return err\n}\n\nswitch result {\ncase "apple":\n        // Do something.\ncase "banana":\n        // Do something.\ndefault:\n        return err\n}\n')),Object(r.b)("p",null,"In this example, we called the ",Object(r.b)("inlineCode",{parentName:"p"},"Get()")," method on the returned future immediately after ",Object(r.b)("inlineCode",{parentName:"p"},"workflow.ExecuteActivity()"),".\nHowever, this is not necessary. If you want to execute multiple activities in parallel, you can\nrepeatedly call ",Object(r.b)("inlineCode",{parentName:"p"},"workflow.ExecuteActivity()"),", store the returned futures, and then wait for all\nactivities to complete by calling the ",Object(r.b)("inlineCode",{parentName:"p"},"Get()")," methods of the future at a later time."),Object(r.b)("p",null,"To implement more complex wait conditions on returned future objects, use the ",Object(r.b)("inlineCode",{parentName:"p"},"workflow.Selector")," class."))}u.isMDXComponent=!0},357:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||r;return n?i.a.createElement(d,c({ref:t},s,{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);