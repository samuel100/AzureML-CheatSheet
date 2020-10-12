(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{145:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(a),b=r,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return a?n.a.createElement(m,c(c({ref:t},s),{},{components:a})):n.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},95:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return l}));var r=a(2),n=a(6),o=(a(0),a(145)),i={title:"Dataset"},c={unversionedId:"dataset",id:"version-1.15.0/dataset",isDocsHomePage:!1,title:"Dataset",description:"From local data",source:"@site/versioned_docs/version-1.15.0/dataset.md",slug:"/dataset",permalink:"/AzureML-CheatSheet/docs/dataset",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.15.0/dataset.md",version:"1.15.0",sidebar:"version-1.15.0/mainSidebar",previous:{title:"Datastore",permalink:"/AzureML-CheatSheet/docs/datastore"},next:{title:"Running code in the cloud",permalink:"/AzureML-CheatSheet/docs/script-run-config"}},d=[{value:"From local data",id:"from-local-data",children:[{value:"Upload to datastore",id:"upload-to-datastore",children:[]},{value:"Create dataset from files in datastore",id:"create-dataset-from-files-in-datastore",children:[]},{value:"Use dataset in a remote run",id:"use-dataset-in-a-remote-run",children:[]}]}],s={rightToc:d};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"from-local-data"},"From local data"),Object(o.b)("h3",{id:"upload-to-datastore"},"Upload to datastore"),Object(o.b)("p",null,"To upload a local directory ",Object(o.b)("inlineCode",{parentName:"p"},"./data/"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"datastore = ws.get_default_datastore()\ndatastore.upload(src_dir='./data', target_path='<path/on/datastore>', overwrite=True)\n")),Object(o.b)("p",null,"This will upload the entire directory ",Object(o.b)("inlineCode",{parentName:"p"},"./data")," from local to the default datastore associated\nto your workspace ",Object(o.b)("inlineCode",{parentName:"p"},"ws"),"."),Object(o.b)("h3",{id:"create-dataset-from-files-in-datastore"},"Create dataset from files in datastore"),Object(o.b)("p",null,"To create a dataset from a directory on a datastore at ",Object(o.b)("inlineCode",{parentName:"p"},"<path/on/datastore>"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"datastore = ws.get_default_datastore()\ndataset = Dataset.File.from_files(path=(datastore, '<path/on/datastore>'))\n")),Object(o.b)("h3",{id:"use-dataset-in-a-remote-run"},"Use dataset in a remote run"),Object(o.b)("p",null,"To reference data from a dataset in a ScriptRunConfig you can either mount or download the\ndataset using:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dataset.as_mount()")," : mount dataset to a remote run"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dataset.as_download()")," : download the dataset to a remote run")),Object(o.b)("p",null,"Reference this data in a remote run, for example in mount-mode:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="run.py"',title:'"run.py"'}),"arguments=[dataset.as_mount()]\nconfig = ScriptRunConfig(source_directory='.', script='train.py', arguments=arguments)\nexperiment.submit(config)\n")),Object(o.b)("p",null,"and consumed in ",Object(o.b)("inlineCode",{parentName:"p"},"train.py"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="train.py"',title:'"train.py"'}),'import sys\ndata_dir = sys.argv[1]\n\nprint("===== DATA =====")\nprint("DATA PATH: " + data_dir)\nprint("LIST FILES IN DATA DIR...")\nprint(os.listdir(data_dir))\nprint("================")\n')),Object(o.b)("p",null,"For more details: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"script-run-config"}),"ScriptRunConfig")))}l.isMDXComponent=!0}}]);