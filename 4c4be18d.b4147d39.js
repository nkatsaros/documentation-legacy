(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{196:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var o=a(1),n=a(7),r=(a(0),a(354)),i={tags:["discourse","slack","temporal","chat","migration","community","workflow"],id:"discourse",title:"Why We're Moving to Discourse",author:"Ryland Goldstein",author_title:"Temporals product person",author_image_url:"https://avatars2.githubusercontent.com/u/27736122?s=460&u=7b6a3e58ec7ed7157f23f51e91a2f4cd2028d606&v=4"},l={permalink:"/blog/discourse",source:"@site/blog/why-we-re-moving-to-discourse.md",description:"Why Temporal is moving to Discourse for our knowledge DB needs.",date:"2020-07-01T20:22:44.125Z",tags:[{label:"discourse",permalink:"/blog/tags/discourse"},{label:"slack",permalink:"/blog/tags/slack"},{label:"temporal",permalink:"/blog/tags/temporal"},{label:"chat",permalink:"/blog/tags/chat"},{label:"migration",permalink:"/blog/tags/migration"},{label:"community",permalink:"/blog/tags/community"},{label:"workflow",permalink:"/blog/tags/workflow"}],title:"Why We're Moving to Discourse",readingTime:5.64,truncated:!0},s=[{value:"Rationale for Slack Migration and Discourse",id:"rationale-for-slack-migration-and-discourse",children:[{value:"Starting Our Search",id:"starting-our-search",children:[]}]},{value:"How Will This Transition Work?",id:"how-will-this-transition-work",children:[]}],c={rightToc:s};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Why Temporal is moving to Discourse for our knowledge DB needs."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"TL;DR;")," The growth of this awesome community has made it difficult for us to provide the desired level of support using our current tools. A solution is needed that will scale with our communities growth and we strongly believe that Slack is not this solution. To solve this, we have started a Discourse forum and will slowly migrate certain questions/discussions away from Slack. We believe that Discourse will allow us to maintain the same responsive and personal support that we offer today, but with far less overhead."),Object(r.b)("p",null,"Check it out here at: ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://community.temporal.io/",title:"https://community.temporal.io/"}),"https://community.temporal.io/")),Object(r.b)("h2",{id:"rationale-for-slack-migration-and-discourse"},"Rationale for Slack Migration and Discourse"),Object(r.b)("p",null,"A couple months ago we reached the message limit on Slack and our community started asking if we planned to pay. While paying would have been the quickest solution, Slack is so expensive that we had to consider alternatives. How expensive you ask? Slack charges a minimum of $7 per user each month but more realistically $12 per user each month. With our current community of ","~","500 we would be paying anywhere from $3500 - $6000 each month. As we're expecting at least ","~","10x growth over the next few years the problem becomes much bigger as $60k a month isn't feasible."),Object(r.b)("p",null,"Initially we were searching for a cheaper Slack alternative but we quickly realized that if we were considering a migration, it made sense to evaluate alternatives holistically and not just based on the fact that Slack costs more. To keep things consistent we defined a number of metrics to evaluate alternatives by:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Cost"),Object(r.b)("li",{parentName:"ul"},"Searchability"),Object(r.b)("li",{parentName:"ul"},"Indexed on the web"),Object(r.b)("li",{parentName:"ul"},"Responsiveness (real-time vs high latency)"),Object(r.b)("li",{parentName:"ul"},"Accessibility"),Object(r.b)("li",{parentName:"ul"},"Moderation and community safety"),Object(r.b)("li",{parentName:"ul"},"Onboarding overhead"),Object(r.b)("li",{parentName:"ul"},"Thread support")),Object(r.b)("p",null,"While these factors did not provide a clear answer to what our new solution should be, it did suggest that Slack was not going to work for us long term. Before I explain why Slack isn't a good fit for us, I want to say that there are a ton of really great things about Slack:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Responsive"),Object(r.b)("li",{parentName:"ul"},"Thread support"),Object(r.b)("li",{parentName:"ul"},"Searchable internally"),Object(r.b)("li",{parentName:"ul"},"Widely adopted"),Object(r.b)("li",{parentName:"ul"},"Great for teams"),Object(r.b)("li",{parentName:"ul"},"API")),Object(r.b)("p",null,"On the other hand there are a ton of issues when using Slack for a community:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Incredibly expensive"),Object(r.b)("li",{parentName:"ul"},"Made for teams, not communities (this is an intentional choice by Slack)"),Object(r.b)("li",{parentName:"ul"},"Only searchable if you pay"),Object(r.b)("li",{parentName:"ul"},"Not indexed on the web"),Object(r.b)("li",{parentName:"ul"},"Zero to little moderation tools"),Object(r.b)("li",{parentName:"ul"},"Onboarding is tough"),Object(r.b)("li",{parentName:"ul"},"Not the most accessible")),Object(r.b)("h3",{id:"starting-our-search"},"Starting Our Search"),Object(r.b)("p",null,"At first we searched for a 1:1 replacement for Slack, a Slack clone if you will. This proved difficult as there are few tools that met our criteria (Mattermost, Rocketchat) and were widely adopted enough for us to move forward with. In an effort to quantify our process, we began to analyze exactly what value Slack was providing us. Our conclusion was that Slack was really serving two purposes for our community:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Knowledge DB (think Wiki)"),Object(r.b)("li",{parentName:"ol"},"Realtime discussions, casual chat, scheduling, announcements etc")),Object(r.b)("p",null,"Looking at Slack in this context suggested that the best move might be to look for two tools to replace Slack instead of one. While adding more tools is not my favorite thing as a product manager, it's much better than having 1 tool which inadequately serves both needs. Splitting up the task also meant that we could prioritize our efforts. While replacing the realtime portion of Slack is something we will need long term, we were experiencing far more issues with the knowledge database so we decided to tackle that first."),Object(r.b)("p",null,"To start our knowledge DB search we defined our core requirements for a tool. We knew that search was a top priority, it needed to be fast with no limits on history. It was also important that users could rely on their search engine and not just the tool itself to find answers to their problems. This requirement eliminated a lot of Slack-like tools as they are not indexed on the web. Robust moderation capabilities were also a must. We've seen how Slack can create real safety problems for large communities due to the lack of fine grained user permissions and moderation. Our last major requirement was that the tool would enable us to maintain the same level of support responsiveness as we have with Slack. This community is the basis of our business so choosing a new tool which would negatively affect our support experience wasn't an option."),Object(r.b)("p",null,"After thorough research it seemed like a traditional forum was the only option which could meet all of our criteria. We evaluated a few solutions (Discourse, Flarum, Tribe) and eventually ended up going with Discourse because it's:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Widely adopted"),Object(r.b)("li",{parentName:"ul"},"Open source"),Object(r.b)("li",{parentName:"ul"},"Based around communities"),Object(r.b)("li",{parentName:"ul"},"A Ton of companies that we align with ideologically are using it (Netlify, Docker, Rust, Elastic, etc)"),Object(r.b)("li",{parentName:"ul"},"Robust moderation tools"),Object(r.b)("li",{parentName:"ul"},"Very accessible"),Object(r.b)("li",{parentName:"ul"},"Publicly indexed on the web"),Object(r.b)("li",{parentName:"ul"},"In-site search is awesome"),Object(r.b)("li",{parentName:"ul"},"Accepted answers feature"),Object(r.b)("li",{parentName:"ul"},"Fine grained notification controls"),Object(r.b)("li",{parentName:"ul"},"Great onboarding process - can even sign in with Google/SSO"),Object(r.b)("li",{parentName:"ul"},"Affordable")),Object(r.b)("p",null,"Before fully committing to Discourse we trialed the tool internally. The more we used the product and became familiar the more we loved it. Furthermore, the support team at Discourse is seriously outstanding and they answer our questions in literal minutes. I hope this sheds some light on the decision making process behind this migration."),Object(r.b)("h2",{id:"how-will-this-transition-work"},"How Will This Transition Work?"),Object(r.b)("p",null,"While we're fairly confident that Discourse will be a great fit for our community and team, we're not going to finalize anything until we see it in action. For now, we plan to stay in an evaluation period so we can ensure that our new tool doesn't degrade the existing support experience. You will see us push to migrate some conversations to Discourse from Slack when we feel that they have gone out of scope. We're also considering adding a Slack plugin which can automatically migrate Slack threads to Discourse. The eventual goal is to field all support questions via Discourse and keep a Slack/Discord/etc as a medium for casual discussion and brainstorming. To be 100% clear, we will not be removing Slack in the immediate future although this may happen down the road."),Object(r.b)("p",null,"Most importantly we want to hear your feedback/criticism/suggestions about this change or our support experience in general. If you have ideas that you think would improve the community or our support experience please do not hesitate to pm me on Slack or via email (",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"mailto:ryland@temporal.io"}),"ryland@temporal.io"),")."),Object(r.b)("p",null,"Lastly, if anyone is interested in being a moderator on the community forums, let me know and we can discuss what that process would look like."),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://community.temporal.io/"}),"community.temporal.io")))}u.isMDXComponent=!0},354:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return h}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},m=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),b=o,h=m["".concat(i,".").concat(b)]||m[b]||p[b]||r;return a?n.a.createElement(h,l({ref:t},c,{components:a})):n.a.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);