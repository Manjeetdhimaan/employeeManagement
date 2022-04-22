"use strict";(self.webpackChunkemploye_management=self.webpackChunkemploye_management||[]).push([[3122],{3122:(k,u,a)=>{a.r(u),a.d(u,{ion_reorder:()=>p,ion_reorder_group:()=>g});var x=a(8239),i=a(3150),f=a(7585),m=a(2954);const p=class{constructor(e){(0,i.r)(this,e)}onClick(e){const t=this.el.closest("ion-reorder-group");e.preventDefault(),(!t||!t.disabled)&&e.stopImmediatePropagation()}render(){const e=(0,f.b)(this);return(0,i.h)(i.H,{class:e},(0,i.h)("slot",null,(0,i.h)("ion-icon",{name:"ios"===e?"reorder-three-outline":"reorder-two-sharp",lazy:!1,class:"reorder-icon",part:"icon"})))}get el(){return(0,i.i)(this)}};p.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}"};const g=class{constructor(e){(0,i.r)(this,e),this.ionItemReorder=(0,i.e)(this,"ionItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}connectedCallback(){var e=this;return(0,x.Z)(function*(){const t=e.el.closest("ion-content");t&&(e.scrollEl=yield t.getScrollElement()),e.gesture=(yield Promise.resolve().then(a.bind(a,9461))).createGesture({el:e.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:s=>e.canStart(s),onStart:s=>e.onStart(s),onMove:s=>e.onMove(s),onEnd:()=>e.onEnd()}),e.disabledChanged()})()}disconnectedCallback(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(e){return Promise.resolve(this.completeSync(e))}canStart(e){if(this.selectedItemEl||0!==this.state)return!1;const s=e.event.target.closest("ion-reorder");if(!s)return!1;const r=C(s,this.el);return!!r&&(e.data=r,!0)}onStart(e){e.event.preventDefault();const t=this.selectedItemEl=e.data,s=this.cachedHeights;s.length=0;const r=this.el,o=r.children;if(!o||0===o.length)return;let l=0;for(let c=0;c<o.length;c++){const d=o[c];l+=d.offsetHeight,s.push(l),d.$ionIndex=c}const n=r.getBoundingClientRect();if(this.containerTop=n.top,this.containerBottom=n.bottom,this.scrollEl){const c=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=c.top+E,this.scrollElBottom=c.bottom-E}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=h(t),this.selectedItemHeight=t.offsetHeight,this.state=1,t.classList.add(I),(0,m.a)()}onMove(e){const t=this.selectedItemEl;if(!t)return;const s=this.autoscroll(e.currentY),r=this.containerTop-s,l=Math.max(r,Math.min(e.currentY,this.containerBottom-s)),n=s+l-e.startY,d=this.itemIndexForTop(l-r);if(d!==this.lastToIndex){const M=h(t);this.lastToIndex=d,(0,m.b)(),this.reorderMove(M,d)}t.style.transform=`translateY(${n}px)`}onEnd(){const e=this.selectedItemEl;if(this.state=2,!e)return void(this.state=0);const t=this.lastToIndex,s=h(e);t===s?this.completeSync():this.ionItemReorder.emit({from:s,to:t,complete:this.completeSync.bind(this)}),(0,m.h)()}completeSync(e){const t=this.selectedItemEl;if(t&&2===this.state){const s=this.el.children,r=s.length,o=this.lastToIndex,l=h(t);o===l||void 0!==e&&!0!==e||this.el.insertBefore(t,l<o?s[o+1]:s[o]),Array.isArray(e)&&(e=v(e,l,o));for(let n=0;n<r;n++)s[n].style.transform="";t.style.transition="",t.classList.remove(I),this.selectedItemEl=void 0,this.state=0}return e}itemIndexForTop(e){const t=this.cachedHeights;for(let s=0;s<t.length;s++)if(t[s]>e)return s;return t.length-1}reorderMove(e,t){const s=this.selectedItemHeight,r=this.el.children;for(let o=0;o<r.length;o++){let n="";o>e&&o<=t?n=`translateY(${-s}px)`:o<e&&o>=t&&(n=`translateY(${s}px)`),r[o].style.transform=n}}autoscroll(e){if(!this.scrollEl)return 0;let t=0;return e<this.scrollElTop?t=-b:e>this.scrollElBottom&&(t=b),0!==t&&this.scrollEl.scrollBy(0,t),this.scrollEl.scrollTop-this.scrollElInitial}render(){const e=(0,f.b)(this);return(0,i.h)(i.H,{class:{[e]:!0,"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}})}get el(){return(0,i.i)(this)}static get watchers(){return{disabled:["disabledChanged"]}}},h=e=>e.$ionIndex,C=(e,t)=>{let s;for(;e;){if(s=e.parentElement,s===t)return e;e=s}},E=60,b=10,I="reorder-selected",v=(e,t,s)=>{const r=e[t];return e.splice(t,1),e.splice(s,0,r),e.slice()};g.style=".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}"}}]);