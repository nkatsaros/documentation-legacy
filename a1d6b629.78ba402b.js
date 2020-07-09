(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{274:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),i=n(7),o=(n(0),n(357)),a={id:"go-retries",title:"Activity and Workflow Retries"},l={id:"version-0.26.0/go-retries",isDocsHomePage:!1,title:"Activity and Workflow Retries",description:"Activities and workflows can fail due to various intermediate conditions. In those cases, we want",source:"@site/versioned_docs/version-0.26.0/go-retries.md",permalink:"/docs/go-retries",editUrl:"https://github.com/temporalio/documentation-legacy/blob/master/versioned_docs/version-0.26.0/go-retries.md",version:"0.26.0",sidebar:"version-0.26.0/docs",previous:{title:"Child Workflows",permalink:"/docs/go-child-workflows"},next:{title:"Error Handling",permalink:"/docs/go-error-handling"}},c=[],s={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Activities and workflows can fail due to various intermediate conditions. In those cases, we want\nto retry the failed activity or child workflow or even the parent workflow. This can be achieved\nby supplying an optional retry policy. A retry policy looks like the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),"// RetryPolicy defines the retry policy.\nRetryPolicy struct {\n    // Backoff interval for the first retry. If coefficient is 1.0 then it is used for all retries.\n    // Required, no default value.\n    InitialInterval time.Duration\n\n    // Coefficient used to calculate the next retry backoff interval.\n    // The next retry interval is previous interval multiplied by this coefficient.\n    // Must be 1 or larger. Default is 2.0.\n    BackoffCoefficient float64\n\n    // Maximum backoff interval between retries. Exponential backoff leads to interval increase.\n    // This value is the cap of the interval. Default is 100x of initial interval.\n    MaximumInterval time.Duration\n\n    // Maximum number of attempts. When exceeded the retries stop even if not expired yet.\n    // If not set or set to 0, it means unlimited\n    MaximumAttempts int32\n\n    // Non-Retriable errors. This is optional. Temporal server will stop retry if error type matches this list.\n    // Note:\n    //  - cancellation is not a failure, so it won't be retried,\n    //  - only StartToClose or Heartbeat timeouts are retryable.\n    NonRetryableErrorTypes []string\n}\n")),Object(o.b)("p",null,"To enable retry, supply a custom retry policy to ",Object(o.b)("inlineCode",{parentName:"p"},"ActivityOptions")," or ",Object(o.b)("inlineCode",{parentName:"p"},"ChildWorkflowOptions"),"\nwhen you execute them."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),"expiration := time.Minute * 10\nretryPolicy := &temporal.RetryPolicy{\n    InitialInterval:    time.Second,\n    BackoffCoefficient: 2,\n    MaximumInterval:    expiration,\n    MaximumAttempts:    5,\n}\nao := workflow.ActivityOptions{\n    ScheduleToStartTimeout: expiration,\n    StartToCloseTimeout:    expiration,\n    HeartbeatTimeout:       time.Second * 30,\n    RetryPolicy:            retryPolicy, // Enable retry.\n}\nctx = workflow.WithActivityOptions(ctx, ao)\nactivityFuture := workflow.ExecuteActivity(ctx, SampleActivity, params)\n")),Object(o.b)("p",null,"If activity heartbeat its progress before it failed, the retry attempt will contain the progress\nso activity implementation could resume from failed progress like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),"func SampleActivity(ctx context.Context, inputArg InputParams) error {\n    startIdx := inputArg.StartIndex\n    if activity.HasHeartbeatDetails(ctx) {\n        // Recover from finished progress.\n        var finishedIndex int\n        if err := activity.GetHeartbeatDetails(ctx, &finishedIndex); err == nil {\n            startIdx = finishedIndex + 1 // Start from next one.\n        }\n    }\n\n    // Normal activity logic...\n    for i:=startIdx; i<inputArg.EndIdx; i++ {\n        // Code for processing item i goes here...\n        activity.RecordHeartbeat(ctx, i) // Report progress.\n    }\n}\n")),Object(o.b)("p",null,"Like retry for an activity, you need to supply a retry policy for ",Object(o.b)("inlineCode",{parentName:"p"},"ChildWorkflowOptions")," to enable\nretry for a child workflow. To enable retry for a parent workflow, supply a retry policy when\nyou start a workflow via ",Object(o.b)("inlineCode",{parentName:"p"},"StartWorkflowOptions"),"."),Object(o.b)("p",null,"There are some subtle changes to workflow's history events when ",Object(o.b)("inlineCode",{parentName:"p"},"RetryPolicy")," is used.\nFor an activity with ",Object(o.b)("inlineCode",{parentName:"p"},"RetryPolicy"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"ActivityTaskScheduledEvent")," will have extended ",Object(o.b)("inlineCode",{parentName:"li"},"ScheduleToStartTimeout")," and ",Object(o.b)("inlineCode",{parentName:"li"},"ScheduleToCloseTimeout"),"."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"ActivityTaskStartedEvent")," will not show up in history until the activity is completed or failed with no more retry.\nThis is to avoid recording the ",Object(o.b)("inlineCode",{parentName:"li"},"ActivityTaskStarted")," event but later it failed and retried. Using the ",Object(o.b)("inlineCode",{parentName:"li"},"DescribeWorkflowExecution"),"\nAPI will return the ",Object(o.b)("inlineCode",{parentName:"li"},"PendingActivityInfo")," and it will contain ",Object(o.b)("inlineCode",{parentName:"li"},"attemptCount")," if it is retrying.")),Object(o.b)("p",null,"For a workflow with ",Object(o.b)("inlineCode",{parentName:"p"},"RetryPolicy"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If a workflow failed and needs to retry, the workflow execution will be closed with a ",Object(o.b)("inlineCode",{parentName:"li"},"ContinueAsNew")," event. The event\nwill have the ",Object(o.b)("inlineCode",{parentName:"li"},"ContinueAsNewInitiator")," set to ",Object(o.b)("inlineCode",{parentName:"li"},"RetryPolicy")," and the new ",Object(o.b)("inlineCode",{parentName:"li"},"RunId")," for the next retry attempt."),Object(o.b)("li",{parentName:"ul"},"The new attempt will be created immediately. But the first decision task won't be scheduled until the backoff duration\nwhich is also recorded in the new run's ",Object(o.b)("inlineCode",{parentName:"li"},"WorkflowExecutionStartedEventAttributes")," event as ",Object(o.b)("inlineCode",{parentName:"li"},"firstDecisionTaskBackoffSeconds"),".")))}p.isMDXComponent=!0},357:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return n?i.a.createElement(f,l({ref:t},s,{components:n})):i.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);