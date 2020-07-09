(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{171:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return s})),i.d(t,"rightToc",(function(){return l})),i.d(t,"default",(function(){return u}));var a=i(1),o=i(7),n=(i(0),i(357)),r={id:"learn-activities",title:"Activities"},s={id:"version-0.23.1/learn-activities",isDocsHomePage:!1,title:"Activities",description:"Fault-oblivious stateful workflow code is the core abstraction of Temporal. But, due to deterministic execution requirements, they are not allowed to call any external API directly.",source:"@site/versioned_docs/version-0.23.1/learn-activities.md",permalink:"/docs/0.23.1/learn-activities",editUrl:"https://github.com/temporalio/documentation-legacy/blob/master/versioned_docs/version-0.23.1/learn-activities.md",version:"0.23.1",sidebar:"version-0.23.1/docs",previous:{title:"Fault-Oblivious Stateful Workflow Code",permalink:"/docs/0.23.1/learn-workflows"},next:{title:"Events",permalink:"/docs/0.23.1/learn-events"},latestVersionMainDocPermalink:"/docs/overview"},l=[{value:"Timeouts",id:"timeouts",children:[]},{value:"Retries",id:"retries",children:[]},{value:"Long Running Activities",id:"long-running-activities",children:[]},{value:"Cancellation",id:"cancellation",children:[]},{value:"Activity Task Routing through Task Lists",id:"activity-task-routing-through-task-lists",children:[]},{value:"Asynchronous Activity Completion",id:"asynchronous-activity-completion",children:[]},{value:"Local Activities",id:"local-activities",children:[]}],c={rightToc:l};function u(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Fault-oblivious stateful workflow code is the core abstraction of Temporal. But, due to deterministic execution requirements, they are not allowed to call any external API directly.\nInstead they orchestrate execution of activities. In its simplest form, a Temporal activity is a function or an object method in one of the supported languages.\nTemporal does not recover activity state in case of failures. Therefore an activity function is allowed to contain any code without restrictions."),Object(n.b)("p",null,"Activities are invoked asynchronously though task lists. A task list is essentially a queue used to store an activity task until it is picked up by an available worker. The worker processes an activity by invoking its implementation function. When the function returns, the worker reports the result back to the Temporal service which in turn notifies the workflow about completion. It is possible to implement an activity fully asynchronously by completing it from a different process."),Object(n.b)("h2",{id:"timeouts"},"Timeouts"),Object(n.b)("p",null,"Temporal does not impose any system limit on activity duration. It is up to the application to choose the timeouts for its execution. These are the configurable activity timeouts:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ScheduleToStart")," is the maximum time from a workflow requesting activity execution to a worker starting its execution. The usual reason for this timeout to fire is all workers being down or not being able to keep up with the request rate. We recommend setting this timeout to the maximum time a workflow is willing to wait for an activity execution in the presence of all possible worker outages."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"StartToClose")," is the maximum time an activity can execute after it was picked by a worker."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ScheduleToClose")," is the maximum time from the workflow requesting an activity execution to its completion."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"Heartbeat")," is the maximum time between heartbeat requests. See ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"#long-running-activities"}),"Long Running Activities"),".")),Object(n.b)("p",null,"Either ",Object(n.b)("inlineCode",{parentName:"p"},"ScheduleToClose")," or both ",Object(n.b)("inlineCode",{parentName:"p"},"ScheduleToStart")," and ",Object(n.b)("inlineCode",{parentName:"p"},"StartToClose")," timeouts are required."),Object(n.b)("h2",{id:"retries"},"Retries"),Object(n.b)("p",null,"As Temporal doesn't recover an activity's state and they can communicate to any external system, failures are expected. Therefore, Temporal supports automatic activity retries. Any activity when invoked can have an associated retry policy. Here are the retry policy parameters:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"InitialInterval")," is a delay before the first retry."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"BackoffCoefficient"),". Retry policies are exponential. The coefficient specifies how fast the retry interval is growing. The coefficient of 1 means that the retry interval is always equal to the ",Object(n.b)("inlineCode",{parentName:"li"},"InitialInterval"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"MaximumInterval")," specifies the maximum interval between retries. Useful for coefficients more than 1."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"MaximumAttempts")," specifies how many times to attempt to execute an activity in the presence of failures. If this limit is exceeded, the error is returned back to the workflow that invoked the activity."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"NonRetryableErrorReasons")," allows you to specify errors that shouldn't be retried. For example retrying invalid arguments error doesn't make sense in some scenarios.")),Object(n.b)("p",null,"There are scenarios when not a single activity but rather the whole part of a workflow should be retried on failure. For example, a media encoding workflow that downloads a file to a host, processes it, and then uploads the result back to storage. In this workflow, if the host that hosts the worker dies, all three activities should be retried on a different host. Such retries should be handled by the workflow code as they are very use case specific."),Object(n.b)("h2",{id:"long-running-activities"},"Long Running Activities"),Object(n.b)("p",null,"For long running activities, we recommended that you specify a relatively short heartbeat timeout and constantly heartbeat. This way worker failures for even very long running activities can be handled in a timely manner. An activity that specifies the heartbeat timeout is expected to call the heartbeat method ",Object(n.b)("em",{parentName:"p"},"periodically")," from its implementation."),Object(n.b)("p",null,"A heartbeat request can include application specific payload. This is useful to save activity execution progress. If an activity times out due to a missed heartbeat, the next attempt to execute it can access that progress and continue its execution from that point."),Object(n.b)("p",null,"Long running activities can be used as a special case of leader election. Temporal timeouts use second resolution. So it is not a solution for realtime applications. But if it is okay to react to the process failure within a few seconds, then a Temporal heartbeat activity is a good fit."),Object(n.b)("p",null,"One common use case for such leader election is monitoring. An activity executes an internal loop that periodically polls some API and checks for some condition. It also heartbeats on every iteration. If the condition is satisfied, the activity completes which lets its workflow to handle it. If the activity worker dies, the activity times out after the heartbeat interval is exceeded and is retried on a different worker. The same pattern works for polling for new files in Amazon S3 buckets or responses in REST or other synchronous APIs."),Object(n.b)("h2",{id:"cancellation"},"Cancellation"),Object(n.b)("p",null,"A workflow can request an activity cancellation. Currently the only way for an activity to learn that it was cancelled is through heart beating. The heartbeat request fails with a special error indicating that the activity was cancelled. Then it is up to the activity implementation to perform all the necessary cleanup and report that it is done with it. It is up to the workflow implementation to decide if it wants to wait for the activity cancellation confirmation or just proceed without waiting."),Object(n.b)("p",null,"Another common case for activity heartbeat failure is that the workflow that invoked it is in a completed state. In this case an activity is expected to perform cleanup as well."),Object(n.b)("h2",{id:"activity-task-routing-through-task-lists"},"Activity Task Routing through Task Lists"),Object(n.b)("p",null,"Activities are dispatched to workers through task lists. Task lists are queues that workers listen on. Task lists are highly dynamic and lightweight. They don't need to be explicitly registered. And it is okay to have one task list per worker process. It is normal to have more than one activity type to be invoked through a single task list. And it is normal in some cases (like host routing) to invoke the same activity type on multiple task lists."),Object(n.b)("p",null,"Here are some use cases for employing multiple activity task lists in a single workflow:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Flow control"),". A worker that consumes from a task list asks for an activity task only when it has available capacity. So workers are never overloaded by request spikes. If activity executions are requested faster than workers can process them, they are backlogged in the task list."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Throttling"),". Each activity worker can specify the maximum rate it is allowed to processes activities on a task list. It does not exceed this limit even if it has spare capacity. There is also support for global task list rate limiting. This limit works across all workers for the given task list. It is frequently used to limit load on a downstream service that an activity calls into."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Deploying a set of activities independently"),". Think about a service that hosts activities and can be deployed independently from other activities and workflows. To send activity tasks to this service, a separate task list is needed."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Workers with different capabilities"),". For example, workers on GPU boxes vs non GPU boxes. Having two separate task lists in this case allows workflows to pick which one to send activity an execution request to."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Routing activity to a specific host"),". For example, in the media encoding case the transform and upload activity have to run on the same host as the download one."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Routing activity to a specific process"),". For example, some activities load large data sets and caches it in the process. The activities that rely on this data set should be routed to the same process."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Multiple priorities"),". One task list per priority and having a worker pool per priority."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Versioning"),". A new backwards incompatible implementation of an activity might use a different task list.")),Object(n.b)("h2",{id:"asynchronous-activity-completion"},"Asynchronous Activity Completion"),Object(n.b)("p",null,"By default an activity is a function or a method depending on a client side library language. As soon as the function returns, an activity completes. But in some cases an activity implementation is asynchronous. For example it is forwarded to an external system through a message queue. And the reply comes through a different queue."),Object(n.b)("p",null,"To support such use cases, Temporal allows activity implementations that do not complete upon activity function completions. A separate API should be used in this case to complete the activity. This API can be called from any process, even in a different programming language, that the original activity worker used."),Object(n.b)("h2",{id:"local-activities"},"Local Activities"),Object(n.b)("p",null,"Some of the activities are very short lived and do not need the queing semantic, flow control, rate limiting and routing capabilities. For these Temporal supports so called ",Object(n.b)("em",{parentName:"p"},"local activity")," feature. Local activities are executed in the same worker process as the workflow that invoked them. Consider using local activities for functions that are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"no longer than a few seconds"),Object(n.b)("li",{parentName:"ul"},"do not require global rate limiting"),Object(n.b)("li",{parentName:"ul"},"do not require routing to specific workers or pools of workers"),Object(n.b)("li",{parentName:"ul"},"can be implemented in the same binary as the workflow that invokes them")),Object(n.b)("p",null,"The main benefit of local activities is that they are much more efficient in utilizing Temporal service resources and have much lower latency overhead comparing to the usual activity invocation."))}u.isMDXComponent=!0},357:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return d}));var a=i(0),o=i.n(a);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s({},t,{},e)),i},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(i),m=a,d=p["".concat(r,".").concat(m)]||p[m]||h[m]||n;return i?o.a.createElement(d,s({ref:t},c,{components:i})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,r=new Array(n);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<n;c++)r[c]=i[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,i)}m.displayName="MDXCreateElement"}}]);