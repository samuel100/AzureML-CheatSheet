(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{145:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),s=r,b=m["".concat(i,".").concat(s)]||m[s]||d[s]||o;return t?a.a.createElement(b,c(c({ref:n},u),{},{components:t})):a.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},68:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),o=(t(0),t(145)),i={title:"Azure ML Docker Build"},c={unversionedId:"docker-build",id:"docker-build",isDocsHomePage:!1,title:"Azure ML Docker Build",description:"In this post we explain how Azure ML builds its docker image based on an Environment.",source:"@site/docs/docker-build.md",slug:"/docker-build",permalink:"/AzureML-CheatSheet/docs/next/docker-build",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/docker-build.md",version:"current",sidebar:"mainSidebar",previous:{title:"Logging Metrics",permalink:"/AzureML-CheatSheet/docs/next/logging"},next:{title:"Distributed Training",permalink:"/AzureML-CheatSheet/docs/next/distributed-training"}},l=[{value:"Build Azure ML Docker Image from an environment",id:"build-azure-ml-docker-image-from-an-environment",children:[]}],u={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this post we explain how Azure ML builds its docker image based on an ",Object(o.b)("inlineCode",{parentName:"p"},"Environment"),"."),Object(o.b)("p",null,"For some background: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"environment"}),"Environment")),Object(o.b)("h2",{id:"build-azure-ml-docker-image-from-an-environment"},"Build Azure ML Docker Image from an environment"),Object(o.b)("p",null,"Suppore you create an environment - in this example we will work with Conda:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml",metastring:'title="env.yml"',title:'"env.yml"'}),"name: pytorch\nchannels:\n    - defaults\n    - pytorch\ndependencies:\n    - python=3.7\n    - pytorch\n    - torchvision\n")),Object(o.b)("p",null,"We can create and register this as an ",Object(o.b)("inlineCode",{parentName:"p"},"Environment")," in our workspace ",Object(o.b)("inlineCode",{parentName:"p"},"ws")," as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Environment\nenv = Environment.from_conda_specification('pytorch', 'env.yml')\nenv.register(ws)\n")),Object(o.b)("p",null,"In order to consume this environment in, say, a remote run, Azure ML creates a docker image\nthat creates the corresponding python environment."),Object(o.b)("p",null,"You can replicate the process by which this image is created as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"build = env.build_local(ws, useDocker=True, pushImageToWorkspaceAcr=True)\n")),Object(o.b)("p",null,"This will build the Docker image from your environment locally. The first line output will be\nof the form"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-console"}),"Saving setup content into /tmp/tmpmaul3d0t\n")),Object(o.b)("p",null,"If we take a look in that directory we will see two interesting files:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Dockerfile")," : used to build the image"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mutated_conda_dependencies.yml")," : a modified version of ",Object(o.b)("inlineCode",{parentName:"li"},"env.yml"))),Object(o.b)("p",null,"First the contents of the Dockerfile:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-docker",metastring:'title="Dockerfile" {7-12}',title:'"Dockerfile"',"{7-12}":!0}),'FROM mcr.microsoft.com/azureml/intelmpi2018.3-ubuntu16.04:20200821.v1@sha256:8cee6f674276dddb23068d2710da7f7f95b119412cc482675ac79ba45a4acf99\nUSER root\nRUN mkdir -p $HOME/.cache\nWORKDIR /\nCOPY azureml-environment-setup/99brokenproxy /etc/apt/apt.conf.d/\nRUN if dpkg --compare-versions `conda --version | grep -oE \'[^ ]+$\'` lt 4.4.11; then conda install conda==4.4.11; fi\nCOPY azureml-environment-setup/mutated_conda_dependencies.yml azureml-environment-setup/mutated_conda_dependencies.yml\nRUN ldconfig /usr/local/cuda/lib64/stubs && conda env create -p /azureml-envs/azureml_7459a71437df47401c6a369f49fbbdb6 -\nf azureml-environment-setup/mutated_conda_dependencies.yml && rm -rf "$HOME/.cache/pip" && conda clean -aqy && CONDA_ROO\nT_DIR=$(conda info --root) && rm -rf "$CONDA_ROOT_DIR/pkgs" && find "$CONDA_ROOT_DIR" -type d -name __pycache__ -exec rm\n -rf {} + && ldconfig\n# AzureML Conda environment name: azureml_7459a71437df47401c6a369f49fbbdb6\nENV PATH /azureml-envs/azureml_7459a71437df47401c6a369f49fbbdb6/bin:$PATH\nENV AZUREML_CONDA_ENVIRONMENT_PATH /azureml-envs/azureml_7459a71437df47401c6a369f49fbbdb6\nENV LD_LIBRARY_PATH /azureml-envs/azureml_7459a71437df47401c6a369f49fbbdb6/lib:$LD_LIBRARY_PATH\nCOPY azureml-environment-setup/spark_cache.py azureml-environment-setup/log4j.properties /azureml-environment-setup/\nRUN if [ $SPARK_HOME ]; then /bin/bash -c \'$SPARK_HOME/bin/spark-submit  /azureml-environment-setup/spark_cache.py\'; fi\nENV AZUREML_ENVIRONMENT_IMAGE True\nCMD ["bash"]\n')),Object(o.b)("p",null,"The highlighted lines copy the ",Object(o.b)("inlineCode",{parentName:"p"},"mutated_conda_dependencies.yml")," and then use ",Object(o.b)("inlineCode",{parentName:"p"},"conda env create -f")," to create the environment."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml",metastring:'title="mutated_conda_dependencies.yml"',title:'"mutated_conda_dependencies.yml"'}),"channels:\n    - defaults\n    - pytorch\ndependencies:\n    - python=3.7\n    - pytorch\n    - torchvision\nname: azureml_7459a71437df47401c6a369f49fbbdb6\n")),Object(o.b)("p",null,"We see that this is identical to ",Object(o.b)("inlineCode",{parentName:"p"},"env.yml")," with the exception of the environment name."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"TODO: Is this always the case?")))}p.isMDXComponent=!0}}]);