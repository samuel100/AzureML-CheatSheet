(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(145)),c={title:"Workspace"},i={unversionedId:"workspace",id:"version-1.14.0/workspace",isDocsHomePage:!1,title:"Workspace",description:"Workspaces are a foundational object used throughout Azure ML and are used in the",source:"@site/versioned_docs/version-1.14.0/workspace.md",slug:"/workspace",permalink:"/AzureML-CheatSheet/docs/1.14.0/workspace",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.14.0/workspace.md",version:"1.14.0",sidebar:"version-1.14.0/mainSidebar",previous:{title:"Cheat Sheet",permalink:"/AzureML-CheatSheet/docs/1.14.0/cheatsheet"},next:{title:"Compute Target",permalink:"/AzureML-CheatSheet/docs/1.14.0/compute-targets"}},s=[{value:"Get workspace",id:"get-workspace",children:[]},{value:"Easy access with <code>config.json</code>",id:"easy-access-with-configjson",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Workspaces are a foundational object used throughout Azure ML and are used in the\nconstructors of many other classes. Throughout this documentation  we frequently\nomit the workspace object instantiation and simply refer to ",Object(o.b)("inlineCode",{parentName:"p"},"ws"),"."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"installation"}),"Installation")," for instructions on creating a new workspace."),Object(o.b)("h3",{id:"get-workspace"},"Get workspace"),Object(o.b)("p",null,"Instantiate ",Object(o.b)("inlineCode",{parentName:"p"},"Workspace")," object used to connect to your AML assets."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="run.py"',title:'"run.py"'}),'from azureml.core import Workspace\nws = Workspace(\n    subscription_id="<subscription_id>",\n    resource_group="<resource_group>",\n    workspace_name="<workspace_name>",\n)\n')),Object(o.b)("h3",{id:"easy-access-with-configjson"},"Easy access with ",Object(o.b)("inlineCode",{parentName:"h3"},"config.json")),Object(o.b)("p",null,"For convenience store your workspace metadata in a ",Object(o.b)("inlineCode",{parentName:"p"},"config.json"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title=".azureml/config.json"',title:'".azureml/config.json"'}),'{\n    "subscription_id": <subscription-id>,\n    "resource_group": <resource-group>,\n    "workspace_name": <workspace-name>\n}\n')),Object(o.b)("h4",{id:"helpful-methods"},"Helpful methods"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ws.write_config(path, file_name)")," : Write the ",Object(o.b)("inlineCode",{parentName:"li"},"config.json")," on your behalf. The ",Object(o.b)("inlineCode",{parentName:"li"},"path")," defaults to '.azureml/' in the current working directory and ",Object(o.b)("inlineCode",{parentName:"li"},"file_name")," defaults to 'config.json'."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Workspace.from_config(path, _file_name)"),": Read the workspace configuration from config. The parameter defaults to starting the search in the current directory.")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"It is recommended to store these in a directory ",Object(o.b)("inlineCode",{parentName:"p"},".azureml/")," as this path is searched ",Object(o.b)("em",{parentName:"p"},"by default"),"\nin the ",Object(o.b)("inlineCode",{parentName:"p"},"Workspace.from_config")," method."))))}l.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);