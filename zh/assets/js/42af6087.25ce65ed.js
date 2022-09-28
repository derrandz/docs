"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9604],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3882:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_label:"Integrate Celestia"},l="Integrate Celestia",c={unversionedId:"developers/integrate-celestia",id:"developers/integrate-celestia",title:"Integrate Celestia",description:"Celestia Service Provider Notes",source:"@site/docs/developers/integrate-celestia.md",sourceDirName:"developers",slug:"/developers/integrate-celestia",permalink:"/zh/developers/integrate-celestia",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/integrate-celestia.md",tags:[],version:"current",frontMatter:{sidebar_label:"Integrate Celestia"},sidebar:"developers",previous:{title:"Overview",permalink:"/zh/developers/overview"},next:{title:"Setting Up Environment",permalink:"/zh/developers/environment"}},d={},u=[{value:"Celestia Service Provider Notes",id:"celestia-service-provider-notes",level:2},{value:"Custody and Key Management",id:"custody-and-key-management",level:3},{value:"RPC and Querying",id:"rpc-and-querying",level:3},{value:"Compatibility",id:"compatibility",level:3},{value:"Syncing",id:"syncing",level:3},{value:"Notable exceptions relative to other blockchains",id:"notable-exceptions-relative-to-other-blockchains",level:3}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrate-celestia"},"Integrate Celestia"),(0,a.kt)("h2",{id:"celestia-service-provider-notes"},"Celestia Service Provider Notes"),(0,a.kt)("p",null,"Celestia is a fairly standard Cosmos-SDK based chain. We use the latest version\nof Tendermint and the Cosmos-SDK, with only minor modifications to each. This\nmeans that we are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using the default Cosmos-SDK modules: auth, bank, distribution, staking,\nslashing, mint, crisis, ibchost, genutil, evidence, ibctransfer, params, gov\n(limited in some TBD capacities), upgrade, vesting, feegrant, capability, and\npayment."),(0,a.kt)("li",{parentName:"ul"},"Use the standard digital keys schemes provided by the Cosmos-SDK and\nTendermint, those being secp256k1 for user transactions, and tm-ed25519 for\nsigning and verifying consensus messages.")),(0,a.kt)("p",null,"While exactly which modules used is subject to change, Celestia aims to be as\nminimal as possible."),(0,a.kt)("h3",{id:"custody-and-key-management"},"Custody and Key Management"),(0,a.kt)("p",null,"Celestia supports many already existing key management systems, as we rely on\nthe Cosmos-SDK and Tendermint libraries for signing and verifying transactions.\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/master/basics/accounts.html#keys-accounts-addresses-and-signatures"},"Cosmos-SDK documentation")),(0,a.kt)("h3",{id:"rpc-and-querying"},"RPC and Querying"),(0,a.kt)("p",null,"In celestia-app, only the standard RPC endpoints for Tendermint and the\nCosmos-SDK are exposed. We do not currently add or subtract any core\nfunctionality, but this could change in the future. The same goes for querying\ndata from the chain."),(0,a.kt)("p",null,"In celestia-node, the Data Availability node client, there is a JSON-RPC API\nthat allows you to interact directly with Celestia's Data Availability layer.\nThe guide for it can be found ",(0,a.kt)("a",{parentName:"p",href:"https://docs.celestia.org/developers/node-tutorial"},"here"),"."),(0,a.kt)("h3",{id:"compatibility"},"Compatibility"),(0,a.kt)("p",null,"Linux, particularly Ubuntu 20.04 LTS, is the most well tested. Potentially\ncompatible with other OSs, but they are currently untested. Some of the\ncryptography libraries used for erasure data are not guaranteed to work on\nother platforms."),(0,a.kt)("h3",{id:"syncing"},"Syncing"),(0,a.kt)("p",null,"Since we utilize Tendermint and the Cosmos-SDK, syncing the chain can be\nperformed by any method that is supported by those libraries. This includes\nfast-sync, state sync, and quick sync."),(0,a.kt)("h3",{id:"notable-exceptions-relative-to-other-blockchains"},"Notable exceptions relative to other blockchains"),(0,a.kt)("p",null,"Relative to other Tendermint based chains, Celestia will have significantly\nlonger blocktimes of around 30* seconds. The reason behind this block time is to\noptimize the bandwidth used by light clients that are sampling the chain, and\nis not because we have modified Tendermint consensus in any meaningful way.\nValidators will likely download/upload relatively large blocks. It should be\nnoted that while these blocks are large, very little typical blockchain state\nexecution is actually occurring on Celestia. Meaning that the bandwidth\nrequirements will likely be larger than that of a typical Cosmos-SDK based\nblockchain full node, the computing requirements should be similar in\nmagnitude."),(0,a.kt)("p",null,"*Subject to Change"))}m.isMDXComponent=!0}}]);