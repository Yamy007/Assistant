if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const o=e=>i(e,n),u={module:{uri:n},exports:t,require:o};s[n]=Promise.all(r.map((e=>u[e]||o(e)))).then((e=>(l(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/arrow_right-hYoY5HZJ.js",revision:null},{url:"assets/ChartPage-BSAANYID.js",revision:null},{url:"assets/ChartsText-C1qozcDB.js",revision:null},{url:"assets/HomePage-CJcJ2opL.js",revision:null},{url:"assets/index-C05MfdgG.css",revision:null},{url:"assets/index-Cj1bwJRe.js",revision:null},{url:"assets/LineChart-Dl1vug19.js",revision:null},{url:"assets/MainLayouts-iSQQvzeY.js",revision:null},{url:"assets/NotebookPage-DVhp2TYD.js",revision:null},{url:"assets/NotesPage-D892f4Km.js",revision:null},{url:"assets/plus-Bkjyp5DI.js",revision:null},{url:"assets/StaticPage-BaF4GiEH.js",revision:null},{url:"index.html",revision:"b8652fee08d0ba47d819873c6d2f1205"},{url:"offline.html",revision:"a19ed5a0f20da6308c088ec94afd25b2"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"serviceworker.js",revision:"9b74bee7d417cee343491be78ddca593"},{url:"manifest.webmanifest",revision:"4ee3c4cbda37d7bdce714224e2123ce8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
