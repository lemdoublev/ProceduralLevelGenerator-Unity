(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{117:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return m}));var a=r(1),n=r(6),o=(r(0),r(191)),l=r(194),i={title:"Platformers"},c={id:"version-1.0.3/examples/platformers",title:"Platformers",description:'import { Image, Gallery, GalleryImage } from "@theme/Gallery";\r',source:"@site/versioned_docs\\version-1.0.3\\examples\\platformers.md",permalink:"/ProceduralLevelGenerator-Unity/docs/1.0.3/examples/platformers",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator-Unity/tree/docusaurus/versioned_docs/version-1.0.3/examples/platformers.md",version:"1.0.3",sidebar:"version-1.0.3/docs",previous:{title:"Example 2",permalink:"/ProceduralLevelGenerator-Unity/docs/1.0.3/examples/example-2"},next:{title:"Generator pipeline",permalink:"/ProceduralLevelGenerator-Unity/docs/1.0.3/generator-pipeline/introduction"}},s=[{value:"Limitations",id:"limitations",children:[]},{value:"Setup",id:"setup",children:[{value:"Platformer generator",id:"platformer-generator",children:[]},{value:"Room templates",id:"room-templates",children:[]},{value:"Level graph",id:"level-graph",children:[]},{value:"Results",id:"results",children:[]}]}],p={rightToc:s};function m(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this tutorial, we will use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.kenney.nl/assets/abstract-platformer"}),"this tileset")," by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/KenneyNL"}),"@KenneyNL")," to create basic platformer levels. Be sure to check their work out if you like the tileset. We will not care about room decorations very much - the goal of this tutorial is to demonstrate all the basic steps needed to create platformer levels."),Object(o.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(o.b)(l.b,{src:"img/original/platformers_result1.png",caption:"Example result",mdxType:"GalleryImage"}),Object(o.b)(l.b,{src:"img/original/platformers_result2.png",caption:"Example result",mdxType:"GalleryImage"})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," Platformers support is ",Object(o.b)("strong",{parentName:"p"},"very experimental")," and not that much tested. The goal was to create a simple prototype and improve that in the future.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," I recommend reading ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"example1.md"}),"Example 1")," first as this is a little bit harder to setup and I will not repeat the basics here.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",Object(o.b)("em",{parentName:"p"},"ProceduralLevelGenerator/Examples/Platformers"),".")),Object(o.b)("h2",{id:"limitations"},"Limitations"),Object(o.b)("p",null,"Only ",Object(o.b)("strong",{parentName:"p"},"acyclic")," level graphs ",Object(o.b)("strong",{parentName:"p"},"without corridors")," are currently supported."),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("h3",{id:"platformer-generator"},"Platformer generator"),Object(o.b)("p",null,"A different pipeline task is needed to create platformer levels. It is called ",Object(o.b)("strong",{parentName:"p"},"Platformer Generator")," and can be found at ",Object(o.b)("em",{parentName:"p"},"DungeonGenerator/Generators/Platformer generator"),". Its config is the same as of the ",Object(o.b)("em",{parentName:"p"},"GraphBasedGenerator"),"."),Object(o.b)("h3",{id:"room-templates"},"Room templates"),Object(o.b)("p",null,"Below you can see a few of the room templates that were created for this example. I decided to use the same length for all doors but it would be also possible to e.g. have vertical doors with a different length as we may need less space for vertical movement. To make generated levels feel less repetetive, the goal is to provide as many possible door positions as possible."),Object(o.b)("p",null,"To make the room templates usable in real-life scenarios, we have to assure that it is possible to successfully traverse generated levels without being stuck at dead-ends caused by impossible jumps. There are possibly several ways to handle that:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We can design the room templates so that all possible connections are viable."),Object(o.b)("li",{parentName:"ul"},"We can apply some postprocessing to add e.g. ropes if we detect dead-ends after a level is generated."),Object(o.b)("li",{parentName:"ul"},"We can tell the algorithm which connections are viable and which are not. However, this is currently not possible as this whole ",Object(o.b)("em",{parentName:"li"},"platformer")," feature is very experimental.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," The term ",Object(o.b)("em",{parentName:"p"},"doors")," is used throughout the text but in this context it simply means a conection between two rooms.")),Object(o.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(o.b)(l.b,{src:"img/original/platformers_start.png",caption:"Start",mdxType:"GalleryImage"}),Object(o.b)(l.b,{src:"img/original/platformers_goal.png",caption:"Goal",mdxType:"GalleryImage"}),Object(o.b)(l.b,{src:"img/original/platformers_room1.png",caption:"Basic room",mdxType:"GalleryImage"}),Object(o.b)(l.b,{src:"img/original/platformers_room3.png",caption:"Basic room",mdxType:"GalleryImage"}),Object(o.b)(l.b,{src:"img/original/platformers_room7.png",caption:"Basic room",mdxType:"GalleryImage"}),Object(o.b)(l.b,{src:"img/original/platformers_room9.png",caption:"Basic room",mdxType:"GalleryImage"})),Object(o.b)("h3",{id:"level-graph"},"Level graph"),Object(o.b)(l.c,{src:"img/original/platformers_level_graph.png",caption:"Level graph",mdxType:"Image"}),Object(o.b)("h3",{id:"results"},"Results"),Object(o.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(o.b)(l.b,{src:"img/original/platformers_result3.png",caption:"Example result",mdxType:"GalleryImage"}),Object(o.b)(l.b,{src:"img/original/platformers_result4.png",caption:"Example result",mdxType:"GalleryImage"})))}m.isMDXComponent=!0},191:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},m=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,d=m["".concat(l,".").concat(u)]||m[u]||b[u]||o;return r?n.a.createElement(d,i({ref:t},s,{components:r})):n.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},192:function(e,t,r){"use strict";var a=r(0),n=r(32);t.a=function(){return Object(a.useContext)(n.a)}},193:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(192);function n(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:r="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},194:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return b}));var a=r(1),n=r(6),o=r(0),l=r.n(o),i=r(193),c=function(e){return l.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:"calc("+100/e.cols+"% - 4px)",verticalAlign:"top"}},e.children)},s=function(e){return l.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},l.a.Children.map(e.children,(function(t){return l.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight})})))},p=function(e){return l.a.createElement(c,{cols:e.cols},l.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},l.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&l.a.createElement(m,null,e.caption))},m=function(e){return l.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children)},b=function(e){e.src,e.caption;var t=Object(n.a)(e,["src","caption"]);return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("img",Object(a.a)({src:Object(i.a)(e.src)},t)),void 0!==e.caption&&l.a.createElement(m,null,e.caption))}}}]);