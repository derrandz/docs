"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5293],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=l,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return t?a.createElement(g,r(r({ref:n},d),{},{components:t})):a.createElement(g,r({ref:n},d))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(7294),l=t(4334),i="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(3117),l=t(7294),i=t(4334),r=t(2389),o=t(7392),s=t(7094),c=t(2466),d="tabList__CuJ",u="tabItem_LNqP";function p(e){var n;const{lazy:t,block:r,defaultValue:p,values:m,groupId:g,className:b}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??k.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),v=(0,o.l)(h,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===p?p:p??(null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)??k[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[w,T]=(0,l.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:I}=(0,c.o5)();if(null!=g){const e=y[g];null!=e&&e!==w&&h.some((n=>n.value===e))&&T(e)}const O=e=>{const n=e.currentTarget,t=C.indexOf(n),a=h[t].value;a!==w&&(I(n),T(a),null!=g&&N(g,String(a)))},E=e=>{var n;let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},b)},h.map((e=>{let{value:n,label:t,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>C.push(e),onKeyDown:E,onClick:O},r,{className:(0,i.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":w===n})}),t??n)}))),t?(0,l.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function m(e){const n=(0,r.Z)();return l.createElement(p,(0,a.Z)({key:String(n)},e))}},5166:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=t(3117),l=(t(7294),t(3905)),i=t(5488),r=t(5162);const o={sidebar_label:"Installing Celestia Node"},s="Celestia Node",c={unversionedId:"developers/celestia-node",id:"developers/celestia-node",title:"Celestia Node",description:"This tutorial goes over building and installing celestia-node. This",source:"@site/docs/developers/celestia-node.mdx",sourceDirName:"developers",slug:"/developers/celestia-node",permalink:"/developers/celestia-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/celestia-node.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Installing Celestia Node"},sidebar:"developers",previous:{title:"Celestia Node",permalink:"/category/celestia-node"},next:{title:"Node Tutorial",permalink:"/developers/node-tutorial"}},d={},u=[{value:"Install Celestia Node",id:"install-celestia-node",level:2},{value:"Network Selection",id:"network-selection",level:2},{value:"Errors",id:"errors",level:3}],p={toc:u};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"celestia-node"},"Celestia Node"),(0,l.kt)("p",null,"This tutorial goes over building and installing ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node"),". This\ntutorial assumes you completed the steps in setting up your development\nenvironment ",(0,l.kt)("a",{parentName:"p",href:"/developers/environment"},"here"),"."),(0,l.kt)("h2",{id:"install-celestia-node"},"Install Celestia Node"),(0,l.kt)(i.Z,{groupId:"network",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,l.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,l.kt)("p",null,"Installing ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,l.kt)("p",null,"Install the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.4.2\nmake install\n")),(0,l.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-output"},"celestia version\nSemantic version: v0.4.2\nCommit: 75b122f736d0db758ef840a4bf3b2e6635e823bd\nBuild Date: Thu Oct 20 22:48:39 EDT 2022\nSystem version: amd64/linux\nGolang version: go1.19.1\n"))),(0,l.kt)(r.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,l.kt)("p",null,"Installing ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,l.kt)("p",null,"Install the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.4.2\nmake install\n")),(0,l.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-output"},"celestia version\nSemantic version: v0.4.2\nCommit: 75b122f736d0db758ef840a4bf3b2e6635e823bd\nBuild Date: Thu Oct 20 22:48:39 EDT 2022\nSystem version: arm64/linux\nGolang version: go1.19.1\n"))),(0,l.kt)(r.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,l.kt)("p",null,"Installing ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,l.kt)("p",null,"Install the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.4.2\nmake go-install\n")),(0,l.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-output"},"celestia version\nSemantic version: v0.4.2\nCommit: 75b122f736d0db758ef840a4bf3b2e6635e823bd\nBuild Date: Thu Oct 20 22:48:39 EDT 2022\nSystem version: arm64/darwin\nGolang version: go1.19.1\n"))),(0,l.kt)(r.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,l.kt)("p",null,"Installing ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,l.kt)("p",null,"Install the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.4.2\nmake go-install\n")),(0,l.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-output"},"celestia version\nSemantic version: v0.4.2\nCommit: 75b122f736d0db758ef840a4bf3b2e6635e823bd\nBuild Date: Thu Oct 20 22:48:39 EDT 2022\nSystem version: amd64/darwin\nGolang version: go1.19.1\n"))))),(0,l.kt)(r.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,l.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,l.kt)("p",null,"Installing ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mamaki Testnet means installing a specific version\nto be compatible with the network."),(0,l.kt)("p",null,"Install the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.3.0-rc2\nmake install\n")),(0,l.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ celestia version\nSemantic version: v0.3.0-rc2\nCommit: 89892d8b96660e334741987d84546c36f0996fbe\n"))),(0,l.kt)(r.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,l.kt)("p",null,"Installing ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mamaki Testnet means installing a specific version\nto be compatible with the network."),(0,l.kt)("p",null,"Install the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.3.0-rc2\nmake install\n")),(0,l.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ celestia version\nSemantic version: v0.3.0-rc2\nCommit: 89892d8b96660e334741987d84546c36f0996fbe\n"))),(0,l.kt)(r.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,l.kt)("p",null,"Installing ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mamaki Testnet means installing a specific version\nto be compatible with the network."),(0,l.kt)("p",null,"Install the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.3.0-rc2\nmake go-install\n")),(0,l.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ celestia version\nSemantic version: v0.3.0-rc2\nCommit: 89892d8b96660e334741987d84546c36f0996fbe\n"))),(0,l.kt)(r.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,l.kt)("p",null,"Installing ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mamaki Testnet means installing a specific version\nto be compatible with the network."),(0,l.kt)("p",null,"Install the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.3.0-rc2\nmake go-install\n")),(0,l.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ celestia version\nSemantic version: v0.3.0-rc2\nCommit: 89892d8b96660e334741987d84546c36f0996fbe\n")))))),(0,l.kt)("h2",{id:"network-selection"},"Network Selection"),(0,l.kt)(i.Z,{groupId:"network",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,l.kt)("p",null,"You can perform network selection in ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," between Arabica and\nMamaki. However, you should note that networks work best on the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node"),"\nversions mentioned above."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light init\ncelestia light start --node.network arabica-1\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE: It is advised before switching newtworks to reinitialize\nyour node via ",(0,l.kt)("inlineCode",{parentName:"p"},"init")," command. This is due to an old config being present.\nRe-initialisation will reset the config.")),(0,l.kt)("h3",{id:"errors"},"Errors"),(0,l.kt)("p",null,"If you an encounter an error, it is likely that an old config file is present:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"Error: nodebuilder/share: interval must be positive; nodebuilder/core: invalid IP addr given:\n\n# or\n\nError: nodebuilder/share: interval must be positive\n")),(0,l.kt)("p",null,"You can re-initialize your node with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~./celestia-light-arabica-1 && celestia light init\n")),(0,l.kt)("p",null,"Your output will look similar to below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'@ ~ % rm -rf ./celestia-light-arabica-1 && celestia light init\n2022-11-01T22:23:19.581+0100    INFO    node    nodebuilder/init.go:20  Initializing Light Node Store over \'/Users/joshstein/.celestia-light-arabica-1\'\n2022-11-01T22:23:19.582+0100    INFO    node    nodebuilder/init.go:51  Saving config   {"path": "/Users/joshstein/.celestia-light-arabica-1/config.toml"}\n2022-11-01T22:23:19.582+0100    INFO    node    nodebuilder/init.go:52  Node Store initialized\n')),(0,l.kt)("p",null,"Then start your node:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --node.network arabica\n"))),(0,l.kt)(r.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,l.kt)("p",null,"Network selection on v0.3.0-rc2 is not available."))))}m.isMDXComponent=!0}}]);