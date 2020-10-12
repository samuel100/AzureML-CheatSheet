(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{145:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,h=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return n?o.a.createElement(h,s(s({ref:t},c),{},{components:n})):o.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},184:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/logging-metrics-a151a23cc2167f2b40ef5d4ee5e86b01.png"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),i=(n(0),n(145)),a={title:"Run History"},s={unversionedId:"run-history",id:"version-1.14.0/run-history",isDocsHomePage:!1,title:"Run History",description:"Azure ML can supercharge your ML workloads in (at least!) two ways:",source:"@site/versioned_docs/version-1.14.0/run-history.md",slug:"/run-history",permalink:"/AzureML-CheatSheet/docs/1.14.0/run-history",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.14.0/run-history.md",version:"1.14.0"},u=[{value:"Experiments and Runs",id:"experiments-and-runs",children:[]},{value:"Snapshot",id:"snapshot",children:[]},{value:"Metrics",id:"metrics",children:[]}],c={rightToc:u};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Azure ML can supercharge your ML workloads in (at least!) two ways:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"AML Compute: Providing powerful compute resoures to train larger models"),Object(i.b)("li",{parentName:"ul"},"Run history: Best-in-class lineage and reproducability")),Object(i.b)("p",null,"In this article we focus on Run History - and why you need it in your life!"),Object(i.b)("p",null,"As teams progress to running dozens, and eventually hundreds of experiments, having\nsome way to organize them is essential. Run History is a service that provides a number\nfeatures that quickly become essential to your ML-model builders:"),Object(i.b)("h3",{id:"experiments-and-runs"},"Experiments and Runs"),Object(i.b)("p",null,"When you are running dozens of experiments in multiple different projects, having a clear\nway to organize and search though the results is key. Azure ML provides two concepts to help\nwith this: ",Object(i.b)("inlineCode",{parentName:"p"},"Run"),"s and ",Object(i.b)("inlineCode",{parentName:"p"},"Experiment"),"s."),Object(i.b)("h4",{id:"runs"},"Runs"),Object(i.b)("p",null,"A run is a single execution of your code - usually a training script. The run has a life-cycle:\nthe code is prepared to be submited to Azure ML (e.g. via a ScriptRunConfig), then the code is\nsubmitted"),Object(i.b)("p",null,"Once the code is submitted to Azure ML (for example, via a ",Object(i.b)("inlineCode",{parentName:"p"},"ScriptRunConfig"),") a ",Object(i.b)("inlineCode",{parentName:"p"},"Run")," object is\ncreated. This compute target is prepared (nodes are provisioned, containers hosting your Python\nenvironment are fired up), the entry point script is called (",Object(i.b)("inlineCode",{parentName:"p"},"$ python run.py [args]"),") and logs\nstart being generated:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-console"}),"Files already downloaded and verified\nepoch=1, batch= 2000: loss 2.19\nepoch=1, batch= 4000: loss 1.82\nepoch=1, batch= 6000: loss 1.66\n...\n")),Object(i.b)("p",null,"You may log metrics to Azure ML with ",Object(i.b)("inlineCode",{parentName:"p"},"run.log('<metric_name>', metric_value)")," and monitor them in the studio:"),Object(i.b)("p",null,Object(i.b)("img",{src:n(184).default})),Object(i.b)("p",null,"The training concludes, usually some model files are saved, and the nodes are\nreleased."),Object(i.b)("p",null,"But the story doesn't end there. The run persists even after the nodes are returned\nto Azure. You can always return, either in code or via the studio, to see a history\nof your runs, all their outputs and metrics, and the exact code that was used to generate them."),Object(i.b)("h4",{id:"experiments"},"Experiments"),Object(i.b)("p",null,'An Experiment is a collection of runs. All runs belongs to an Experiment. Usually\nan Experiment is tied to a specific work item, for example, "Finetune Bert-Large",\nand will posses a number of runs as you iterate toward this goal.'),Object(i.b)("h3",{id:"snapshot"},"Snapshot"),Object(i.b)("p",null,"When you submit your code to run in Azure ML, a ",Object(i.b)("em",{parentName:"p"},"snapshot")," is taken. This is a copy of the exact\ncode that ran. Think of this as version control for your experiments. Want to reproduce the\nresults from that experiment 2-months ago even though you've iterated on the model and the\ntraining script in the meantime? No problem, snapshot has you covered!"),Object(i.b)("p",null,"You have total control of what goes into the snapshot with the ",Object(i.b)("inlineCode",{parentName:"p"},".amlignore")," file. This plays\nthe same role as a ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore")," so you can efficiently manage what to include in the snapshot."),Object(i.b)("h3",{id:"metrics"},"Metrics"),Object(i.b)("p",null,"As you run experiments, you track metrics - from validation loss through to GPU load. Analysing these metrics is essential to determining your best model. With Run History, these metrics are stored for all your runs."))}l.isMDXComponent=!0}}]);