(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=r.a.createContext({}),b=function(e){var t=r.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,d=s["".concat(c,".").concat(u)]||s[u]||l[u]||o;return n?r.a.createElement(d,i(i({ref:t},m),{},{components:n})):r.a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var m=2;m<o;m++)c[m]=n[m];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(106)),c={title:"Cheat Sheet"},i={unversionedId:"cheatsheet",id:"cheatsheet",isDocsHomePage:!1,title:"Cheat Sheet",description:"Basic setup",source:"@site/docs/cheatsheet.md",slug:"/cheatsheet",permalink:"/azureml-cheatsheet/docs/next/cheatsheet",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/cheatsheet.md",version:"current",sidebar:"mainSidebar",previous:{title:"Installation",permalink:"/azureml-cheatsheet/docs/next/installation"},next:{title:"Workspace",permalink:"/azureml-cheatsheet/docs/next/workspace"}},p=[{value:"Basic setup",id:"basic-setup",children:[]},{value:"Submit code",id:"submit-code",children:[]},{value:"AML Assets",id:"aml-assets",children:[]},{value:"Running Scripts in AML",id:"running-scripts-in-aml",children:[]},{value:"Logging",id:"logging",children:[]}],m={rightToc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"basic-setup"},"Basic setup"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Connect to workspace.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Workspace\nws = Workspace.from_config()\n")),Object(o.b)("p",null,"For more details: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"workspace"}),"Workspaces")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Connect to compute target.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import ComputeTarget\ntarget = ComputeTarget(ws, '<compute-target-name>')\n")),Object(o.b)("p",null,"For more details: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"compute-targets"}),"Compute Target")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Prepare Python environment."),Object(o.b)("br",{parentName:"p"}),"\n","You can use a ",Object(o.b)("inlineCode",{parentName:"p"},"requirements.txt")," file to define a Python environment on your compute."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Environment\nenv = Environment.from_pip_requirements('<environment-name>', '<path/to/requirements.txt>')\n")),Object(o.b)("p",null,"You can also use conda environments and docker images to prepare your environments.  "),Object(o.b)("p",null,"For more details: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"environment"}),"Environment")),Object(o.b)("h3",{id:"submit-code"},"Submit code"),Object(o.b)("p",null,"To run code in AML you need to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Configure"),": Configuration includes specifying the code to run, the compute\ntarget to run on and the Python environment to run in."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Submit"),": Create or reuse an AML Experiment and submit the run.")),Object(o.b)("h4",{id:"scriptrunconfig-configure"},"ScriptRunConfig (Configure)"),Object(o.b)("p",null,"A typical directory may have the following structure:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"source_directory/\n    script.py    # entry point to your code\n    module1.py   # modules called by script.py     \n    ...\n")),Object(o.b)("p",null,"To run ",Object(o.b)("inlineCode",{parentName:"p"},"$ python script.py")," on a remote compute cluster ",Object(o.b)("inlineCode",{parentName:"p"},"target: ComputeTarget")," with an\nenvironment ",Object(o.b)("inlineCode",{parentName:"p"},"env: Environment")," we use the ",Object(o.b)("inlineCode",{parentName:"p"},"ScriptRunConfig")," class."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import ScriptRunConfig\n\nconfig = ScriptRunConfig(\n    source_directory='<path/to/source_directory>',  # relative paths okay\n    script='script.py',\n    compute_target=target,\n    environment=env,\n)\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"compute_target"),": If not provided the script will run on your local machine ",Object(o.b)("strong",{parentName:"li"},"TODO: does this require docker?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"environment"),": If not provided, uses a default Python environment managed by Azure ML (azureml.core.runconfig.DEFAULT_CPU_IMAGE) ",Object(o.b)("strong",{parentName:"li"},"TODO: provide details on this image"),".")))),Object(o.b)("h4",{id:"experiment-submit"},"Experiment (Submit)"),Object(o.b)("p",null,"To submit this code we create an ",Object(o.b)("inlineCode",{parentName:"p"},"Experiment"),": a light-weight container that helps to\noraganize our submissions and keep track of code (See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"run-history"}),"Run History"),")."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"exp = Experiment(ws, '<experiment-name>')\nrun = exp.submit(config)\nprint(run.get_portal_url())\n")),Object(o.b)("p",null,"This link will take you to the Azure ML Studio where you can monitor your run."),Object(o.b)("p",null,"For more details: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"script-run-config"}),"ScriptRunConfig")),Object(o.b)("h2",{id:"aml-assets"},"AML Assets"),Object(o.b)("h4",{id:"workspace"},Object(o.b)("a",Object(a.a)({parentName:"h4"},{href:"workspace"}),"Workspace")),Object(o.b)("p",null,"Instantiate ",Object(o.b)("inlineCode",{parentName:"p"},"Workspace")," object used to connect to your AML assets."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from azureml.core import Workspace\nws = Workspace(\n    subscription_id="<subscription_id>",\n    resource_group="<resource_group>",\n    workspace_name="<workspace_name>",\n)\n')),Object(o.b)("p",null,"For convenience store your credentials in a ",Object(o.b)("inlineCode",{parentName:"p"},"config.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Workspace\nws.write_config()\n# write config.json file with your AML credentials\n\nws = Workspace.from_config()\n# read your aml credentials from config.json and instantiate\n# Workspace object\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"vs-code-snippets/snippets#create-aml-workspace-from-config"}),"VS Code snippet"))),Object(o.b)("p",null,"Workspaces are a foundational object used throughout AML and are used in the\nconstructors of many other classes. In the following examples we frequently\nomit the workspace object instantiation and simply refer to ",Object(o.b)("inlineCode",{parentName:"p"},"ws"),"."),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"workspace"}),"workspaces")," page for more ways to instantiate a\nworkspace."),Object(o.b)("h4",{id:"experiment"},"Experiment"),Object(o.b)("p",null,"An experiment is used as an organizational principle, storing run history and\ntracking metrics."),Object(o.b)("p",null,"Get or create an experiment:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from azureml.core import Experiment\nexp = Experiment(ws, "<experiment-name>")\n')),Object(o.b)("h4",{id:"run"},"Run"),Object(o.b)("p",null,"A run represents a single trial of an experiment."),Object(o.b)("p",null,"Runs are used to monitor the asynchronous execution of a trial, log metrics and\nstore output of the trial, and to analyze results and access artifacts\ngenerated by the trial."),Object(o.b)("p",null,"To get all the runs associated with a given experiment."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from azureml.core import Experiment, Run\nexp = Experiment(ws, "<experiment-name>")\nruns = exp.get_runs()\n# generator of the runs in reverse chronological order\n')),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),'"Run IDs"')),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"A unique `run_id` is automatically generated for each run.\n")))),Object(o.b)("p",null,"There are multiple ways to create a run. For example:"),Object(o.b)("h5",{id:"from-configuration"},"From configuration"),Object(o.b)("p",null,'To submit a run - either to local compute or to cloud\ncompute - define a configuration. See\n"',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#running-scripts-in-aml"}),"Running Scripts in AML"),'" for details.'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from azureml.core import Experiment\nfrom azureml.core import ScriptRunConfig\n\nexp = Experiment(ws, "<experiment-name>")\nconfig = ScriptRunConfig(...)  # provide code, compute, environments, etc.\nrun = exp.submit(config)    \n')),Object(o.b)("h5",{id:"interactive-run"},"Interactive run"),Object(o.b)("p",null,"Interactive runs are typically used from a Jupyter notebook."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Experiment\nexp = Experiment(ws, \"<experiment-name>\")  # get or create experiment\n\nrun = exp.start_logging()                  # start interactive run\nresult = my_function()                     # make some calculation\nrun.log('result', result)                  # log the results to the run\nrun.complete()                             # stop the interactive run\n")),Object(o.b)("h4",{id:"compute-target"},Object(o.b)("a",Object(a.a)({parentName:"h4"},{href:"compute-targets"}),"Compute Target")),Object(o.b)("p",null,"Compute targets are an AML abstraction around the concept of a compute resource.\nThis can range from your local machine to a cluster of Azure VMs."),Object(o.b)("p",null,"To use an existing compute target:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from azureml.core import ComputeTarget\ncompute_target = ComputeTarget(workspace=ws, name="<compute-name>")\n')),Object(o.b)("p",null,'For example, to create a new cluster of between 0 and 4 "Standard_NC24rs_v3"\nVMs,'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from azureml.core import ComputeTarget\nfrom azureml.core.compute import AmlCompute\ncompute_config = AmlCompute.provisioning_configuration(\n    vm_size="Standard_NC24rs_v3",\n    min_nodes=0,\n    max_nodes=4,\n)\ncompute_target = ComputeTarget.create(ws, "<compute-name>", compute_config)\ncompute_target.wait_for_completion(show_output=True)\n')),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"compute-targets"}),"Compute Targets")," page for more examples."),Object(o.b)("h4",{id:"environment"},Object(o.b)("a",Object(a.a)({parentName:"h4"},{href:"environment"}),"Environment")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Environment")," class is used to configure reproducable Python environments\nfor use throughout AML. These environments are versioned and sharable."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Creating AML Environments.")),Object(o.b)("h5",{id:"from-existing-conda-environment"},"From existing Conda environment"),Object(o.b)("p",null,"Create an AML Environment from an existing local conda environment:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from azureml.core import Environment\nenv = Environment.from_existing_conda_environment(\n    name="<aml-environment-name>",\n    conda_environment_name="<conda_environment_name>",\n)\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),'"Conda local environments"')),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"To see your local Conda environments run"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"conda env list\n")),Object(o.b)("p",{parentName:"div"},"For more information, see\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html"}),"Managing environments"),"\nin the conda user guide."))),Object(o.b)("h5",{id:"from-conda-envyml-file"},"From Conda ",Object(o.b)("inlineCode",{parentName:"h5"},"env.yml")," file"),Object(o.b)("p",null,"Create an AML Environment from a conda ",Object(o.b)("inlineCode",{parentName:"p"},"env.yml")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Environment\nmy_env = Environment.from_conda_specification(\n    name='<environment-name>',\n    file_path='<path-to-env.yml>',   # relative paths are okay\n)\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),'"Configure conda environments with ',Object(o.b)("inlineCode",{parentName:"h5"},"env.yml"),' files"')),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Conda environments can be specified by way of an ",Object(o.b)("inlineCode",{parentName:"p"},"env.yml")," file, e.g."),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"name: example\ndependencies:\n    - numpy\n    - pandas\n")),Object(o.b)("p",{parentName:"div"},"For more information, see\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html"}),"Managing environments"),"\nin the conda user guide."))),Object(o.b)("h5",{id:"from-pip-requirementstxt-file"},"From pip ",Object(o.b)("inlineCode",{parentName:"h5"},"requirements.txt")," file"),Object(o.b)("p",null,"To create an AML environment from a pip ",Object(o.b)("inlineCode",{parentName:"p"},"requirement.txt")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Environment\nenv = Environment.from_pip_specification(\n    name='<environment-name>',\n    file_path='<path-to-requirements.txt>',\n)\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),'"Configure pip environments with ',Object(o.b)("inlineCode",{parentName:"h5"},"requirements.txt"),' files"')),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Requirements files are pip's way configuring Python environments. For more\ninformation, see\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pip.pypa.io/en/latest/user_guide/#requirements-files"}),"Requirements file"),"\nin the pip user guide."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Registering AML Environments.")),Object(o.b)("p",null,"To register this environment with the workspace"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"env.register(ws) # can be accessed by any user of the workspace\n")),Object(o.b)("p",null,"To view all environments registered to a workspace"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Environment\nregistered_environments = Environment.list(ws)\n")),Object(o.b)("h4",{id:"datastore"},Object(o.b)("a",Object(a.a)({parentName:"h4"},{href:"datastore"}),"Datastore")),Object(o.b)("p",null,"Each workspace comes with a default datastore."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"ds = ws.get_default_datastore()\n")),Object(o.b)("p",null,"Any datastore that is registered to workspace can be accessed by name."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from azureml.core import Datastore\nds = Datastore.get(ws, "<name-of-registered-datastore>")\n')),Object(o.b)("p",null,"To register a store via a SAS token:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'ds = Datastore.register_azure_blob_container(\n    workspace=ws,\n    datastore_name="<datastore-name>",\n    container_name="<container-name>",\n    account_name="<account-name>",\n    sas_token="<sas-token>",\n)\n')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"vs-code-snippets/snippets#register-azure-blob-container-from-sas"}),"VS Code snippet"))),Object(o.b)("p",null,"For more ways authentication options and for different underlying storage see\nthe AML documentation on\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/python/api/azureml-core/azureml.core.datastore(class)?view=azure-ml-py"}),"Datastores"),"."),Object(o.b)("h2",{id:"running-scripts-in-aml"},"Running Scripts in AML"),Object(o.b)("p",null,"To run code in AML you need to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Configure"),": Configuration includes specifying the code to run, the compute\ntarget to run on and the Python environment to run in."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Submit"),": Create or reuse an AML Experiment and submit the run.")),Object(o.b)("h4",{id:"scriptrunconfig"},"ScriptRunConfig"),Object(o.b)("p",null,"A typical directory may have the following structure:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"source_directory/\n    script.py    # entry point to your code\n    module1.py   # modules called by script.py     \n    ...\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"ScriptRunConfig: Basic")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import ScriptRunConfig\n\nconfig = ScriptRunConfig(\n    source_directory='<path/to/source_directory>',  # relative paths okay\n    script='script.py',\n)\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"ScriptRunConfig:Command line arguments")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"script.py")," may be set up to accept command line arguments, e.g.,"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"python script.py --argument 42 --another_argument 73\n")),Object(o.b)("p",null,"In that case we pass the arguments list to ",Object(o.b)("inlineCode",{parentName:"p"},"config"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import ScriptRunConfig\n\nconfig = ScriptRunConfig(\n    source_directory='<path/to/source_directory>',  # relative paths okay\n    script='script.py',\n    arguments=[\n        'argument', 42,\n        'another_argument', 73,\n    ],\n)\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"ScriptRunConfig: ComputeTarget")),Object(o.b)("p",null,"By default this configuration will run on local compute."),Object(o.b)("p",null,"To use AML compute target specify in the ",Object(o.b)("inlineCode",{parentName:"p"},"run_config")," attribute:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from azureml.core import ComputeTarget\ncompute_target = ComputeTarget(workspace=ws, name="<compute-name>")\nconfig.run_config.target = target # of type azureml.core.ComputeTarget\n')),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"compute-targets"}),"Compute Targets")," for creating and accessing\nAML ComputeTargets."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"ScriptRunConfig: Environment")),Object(o.b)("p",null,"If your script requires a specific Python environment to run: specify in\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"run_config")," attribute:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Environment\nenv = Environment(ws, '<environment-name>')\nconfig.run_config.environment = env # of type azureml.core.Environment\n")),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"environment"}),"Environment")," for managing AML Environments."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"ScriptRunConfig: Submit")),Object(o.b)("p",null,"Submit this configuration to run as part of an Experiment."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from azureml.core import Experiment\nexp = Experiment(ws, "<experiment-name>")   # get or create Experiment\nrun = exp.submit(config)                    # submit config to run in AML\n# returns Run object\n')),Object(o.b)("h2",{id:"logging"},"Logging"),Object(o.b)("h4",{id:"logging-metrics"},"Logging metrics"),Object(o.b)("p",null,"To log metrics in your running script add the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from azureml.core import Run\nrun = Run.get_context()\nrun.log("metric-name", metric_value)\n')),Object(o.b)("h4",{id:"viewing-metrics-with-the-python-sdk"},"Viewing metrics with the Python SDK"),Object(o.b)("p",null,"Viewing metrics in a run"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'metrics = run.get_metrics()\n# metrics is of type Dict[str, List[float]] mapping mertic names\n# to a list of the values for that metric in the given run.\n\nmetrics.get("metric-name")\n# list of metrics in the order they were recorded\n')),Object(o.b)("p",null,"To view all recorded values for a given metric ",Object(o.b)("inlineCode",{parentName:"p"},"my-metric")," in a\ngiven experiment ",Object(o.b)("inlineCode",{parentName:"p"},"my-experiment"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"experiments = ws.experiments\n# of type Dict[str, Experiment] mapping experiment names the\n# corresponding Experiment\n\nexp = experiments['my-experiment']\nfor run in exp.get_runs():\n    metrics = run.get_metrics()\n    \n    my_metric = metrics.get('my-metric')\n    if my_metric:\n        print(my_metric)\n")))}b.isMDXComponent=!0}}]);