(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(7),o=(n(0),n(357)),i={id:"learn-events",title:"Events"},s={id:"learn-events",isDocsHomePage:!1,title:"Events",description:"Event Handling",source:"@site/docs/learn-events.md",permalink:"/docs/next/learn-events",editUrl:"https://github.com/temporalio/documentation-legacy/blob/master/docs/learn-events.md",version:"next",sidebar:"docs",previous:{title:"Activities",permalink:"/docs/next/learn-activities"},next:{title:"Queries",permalink:"/docs/next/learn-queries"},latestVersionMainDocPermalink:"/docs/overview"},l=[{value:"Event Handling",id:"event-handling",children:[]},{value:"Event Aggregation and Correlation",id:"event-aggregation-and-correlation",children:[]},{value:"Human Tasks",id:"human-tasks",children:[]},{value:"Process Execution Alteration",id:"process-execution-alteration",children:[]},{value:"Synchronization",id:"synchronization",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"event-handling"},"Event Handling"),Object(o.b)("p",null,"Fault-oblivious stateful workflows can be ",Object(o.b)("em",{parentName:"p"},"signalled")," about an external event. A signal is always point to point destined to a specific workflow instance. Signals are always processed in the order in which they are received."),Object(o.b)("p",null,"There are multiple scenarios for which signals are useful."),Object(o.b)("h2",{id:"event-aggregation-and-correlation"},"Event Aggregation and Correlation"),Object(o.b)("p",null,"Temporal is not a replacement for generic stream processing engines like Apache Flink or Apache Spark. But in certain scenarios it is a better fit. For example, when all events that should be aggregated and correlated are always applied to to some business entity with a clear Id. And then when a certain condition is met, actions should be executed."),Object(o.b)("p",null,"The main limitation is that a single Temporal workflow has a pretty limited throughput, while the number of workflows is practically unlimited. So if you need to aggregate events per customer, and your application has 100 million customers and each customer doesn't generate more than 20 events per second, then Temporal would work fine. But if you want to aggregate all events for US customers then the rate of these events would be beyond the single workflow capacity."),Object(o.b)("p",null,"For example, an IoT device generates events and a certain sequence of events indicates that the device should be reprovisioned. A workflow instance per device would be created and each instance would manage the state machine of the device and execute reprovision activity when necessary."),Object(o.b)("p",null,"Another use case is a customer loyalty program. Every time a customer makes a purchase, an event is generated into Apache Kafka for downstream systems to process. A loyalty service Kafka consumer receives the event and signals a customer workflow about the purchase using the Temporal ",Object(o.b)("inlineCode",{parentName:"p"},"signalWorkflowExecution")," API. The workflow accumulates the count of the purchases. If a specified threshold is achieved, the workflow executes an activity that notifies some external service that the customer has reached the next level of loyalty program. The workflow also executes activities to periodically message the customer about their current status."),Object(o.b)("h2",{id:"human-tasks"},"Human Tasks"),Object(o.b)("p",null,"A lot of business processes involve human participants. The standard Temporal pattern for implementing an external interaction is to execute an activity that creates a human task in an external system. It can be an email with a form, or a record in some external database, or a mobile app notification. When a user changes the status of the task, a signal is sent to the corresponding workflow. For example, when the form is submitted, or a mobile app notification is acknowledged. Some tasks have multiple possible actions like claim, return, complete, reject. So multiple signals can be sent in relation to it."),Object(o.b)("h2",{id:"process-execution-alteration"},"Process Execution Alteration"),Object(o.b)("p",null,"Some business processes should change their behavior if some external event has happened. For example, while executing an order shipment workflow, any change in item quantity could be delivered in a form of a signal."),Object(o.b)("p",null,"Another example is a service deployment workflow. While rolling out new software version to a Kubernetes cluster some problem was identified. A signal can be used to ask the workflow to pause while the problem is investigated. Then either a continue or a rollback signal can be used to execute the appropriate action."),Object(o.b)("h2",{id:"synchronization"},"Synchronization"),Object(o.b)("p",null,"Temporal workflows are strongly consistent so they can be used as a synchronization point for executing actions. For example, there is a requirement that all messages for a single user are processed sequentially but the underlying messaging infrastructure can deliver them in parallel. The Temporal solution would be to have a workflow per user and signal it when an event is received. Then the workflow would buffer all signals in an internal data structure and then call an activity for every signal received. See the following ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://stackoverflow.com/a/56615120/1664318"}),"Stack Overflow answer")," for an example."))}u.isMDXComponent=!0},357:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return n?r.a.createElement(m,s({ref:t},c,{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);