/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Vuex=e()}(this,(function(){"use strict";var t=("undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).__VUE_DEVTOOLS_GLOBAL_HOOK__;function e(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function n(t){return null!==t&&"object"==typeof t}var o=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},i={namespaced:{configurable:!0}};i.namespaced.get=function(){return!!this._rawModule.namespaced},o.prototype.addChild=function(t,e){this._children[t]=e},o.prototype.removeChild=function(t){delete this._children[t]},o.prototype.getChild=function(t){return this._children[t]},o.prototype.hasChild=function(t){return t in this._children},o.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},o.prototype.forEachChild=function(t){e(this._children,t)},o.prototype.forEachGetter=function(t){this._rawModule.getters&&e(this._rawModule.getters,t)},o.prototype.forEachAction=function(t){this._rawModule.actions&&e(this._rawModule.actions,t)},o.prototype.forEachMutation=function(t){this._rawModule.mutations&&e(this._rawModule.mutations,t)},Object.defineProperties(o.prototype,i);var r,s=function(t){this.register([],t,!1)};s.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},s.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")}),"")},s.prototype.update=function(t){!function t(e,n,o){if(n.update(o),o.modules)for(var i in o.modules){if(!n.getChild(i))return;t(e.concat(i),n.getChild(i),o.modules[i])}}([],this.root,t)},s.prototype.register=function(t,n,i){var r=this;void 0===i&&(i=!0);var s=new o(n,i);0===t.length?this.root=s:this.get(t.slice(0,-1)).addChild(t[t.length-1],s);n.modules&&e(n.modules,(function(e,n){r.register(t.concat(n),e,i)}))},s.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)},s.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return e.hasChild(n)};var c=function(e){var n=this;void 0===e&&(e={}),!r&&"undefined"!=typeof window&&window.Vue&&m(window.Vue);var o=e.plugins;void 0===o&&(o=[]);var i=e.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new s(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new r,this._makeLocalGettersCache=Object.create(null);var c=this,a=this.dispatch,u=this.commit;this.dispatch=function(t,e){return a.call(c,t,e)},this.commit=function(t,e,n){return u.call(c,t,e,n)},this.strict=i;var f=this._modules.root.state;p(this,f,[],this._modules.root),h(this,f),o.forEach((function(t){return t(n)})),(void 0!==e.devtools?e.devtools:r.config.devtools)&&function(e){t&&(e._devtoolHook=t,t.emit("vuex:init",e),t.on("vuex:travel-to-state",(function(t){e.replaceState(t)})),e.subscribe((function(e,n){t.emit("vuex:mutation",e,n)}),{prepend:!0}),e.subscribeAction((function(e,n){t.emit("vuex:action",e,n)}),{prepend:!0}))}(this)},a={state:{configurable:!0}};function u(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function f(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;p(t,n,[],t._modules.root,!0),h(t,n,e)}function h(t,n,o){var i=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,c={};e(s,(function(e,n){c[n]=function(t,e){return function(){return t(e)}}(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var a=r.config.silent;r.config.silent=!0,t._vm=new r({data:{$$state:n},computed:c}),r.config.silent=a,t.strict&&function(t){t._vm.$watch((function(){return this._data.$$state}),(function(){}),{deep:!0,sync:!0})}(t),i&&(o&&t._withCommit((function(){i._data.$$state=null})),r.nextTick((function(){return i.$destroy()})))}function p(t,e,n,o,i){var s=!n.length,c=t._modules.getNamespace(n);if(o.namespaced&&(t._modulesNamespaceMap[c],t._modulesNamespaceMap[c]=o),!s&&!i){var a=l(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit((function(){r.set(a,u,o.state)}))}var f=o.context=function(t,e,n){var o=""===e,i={dispatch:o?t.dispatch:function(n,o,i){var r=d(n,o,i),s=r.payload,c=r.options,a=r.type;return c&&c.root||(a=e+a),t.dispatch(a,s)},commit:o?t.commit:function(n,o,i){var r=d(n,o,i),s=r.payload,c=r.options,a=r.type;c&&c.root||(a=e+a),t.commit(a,s,c)}};return Object.defineProperties(i,{getters:{get:o?function(){return t.getters}:function(){return function(t,e){if(!t._makeLocalGettersCache[e]){var n={},o=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,o)===e){var r=i.slice(o);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}(t,e)}},state:{get:function(){return l(t.state,n)}}}),i}(t,c,n);o.forEachMutation((function(e,n){!function(t,e,n,o){(t._mutations[e]||(t._mutations[e]=[])).push((function(e){n.call(t,o.state,e)}))}(t,c+n,e,f)})),o.forEachAction((function(e,n){var o=e.root?n:c+n,i=e.handler||e;!function(t,e,n,o){(t._actions[e]||(t._actions[e]=[])).push((function(e){var i,r=n.call(t,{dispatch:o.dispatch,commit:o.commit,getters:o.getters,state:o.state,rootGetters:t.getters,rootState:t.state},e);return(i=r)&&"function"==typeof i.then||(r=Promise.resolve(r)),t._devtoolHook?r.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):r}))}(t,o,i,f)})),o.forEachGetter((function(e,n){!function(t,e,n,o){if(t._wrappedGetters[e])return;t._wrappedGetters[e]=function(t){return n(o.state,o.getters,t.state,t.getters)}}(t,c+n,e,f)})),o.forEachChild((function(o,r){p(t,e,n.concat(r),o,i)}))}function l(t,e){return e.reduce((function(t,e){return t[e]}),t)}function d(t,e,o){return n(t)&&t.type&&(o=e,e=t,t=t.type),{type:t,payload:e,options:o}}function m(t){r&&t===r||function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(r=t)}a.state.get=function(){return this._vm._data.$$state},a.state.set=function(t){},c.prototype.commit=function(t,e,n){var o=this,i=d(t,e,n),r=i.type,s=i.payload,c={type:r,payload:s},a=this._mutations[r];a&&(this._withCommit((function(){a.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(c,o.state)})))},c.prototype.dispatch=function(t,e){var n=this,o=d(t,e),i=o.type,r=o.payload,s={type:i,payload:r},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(t){}var a=c.length>1?Promise.all(c.map((function(t){return t(r)}))):c[0](r);return new Promise((function(t,e){a.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(t){}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(t){}e(t)}))}))}},c.prototype.subscribe=function(t,e){return u(t,this._subscribers,e)},c.prototype.subscribeAction=function(t,e){return u("function"==typeof t?{before:t}:t,this._actionSubscribers,e)},c.prototype.watch=function(t,e,n){var o=this;return this._watcherVM.$watch((function(){return t(o.state,o.getters)}),e,n)},c.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},c.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),p(this,this.state,t,this._modules.get(t),n.preserveState),h(this,this.state)},c.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=l(e.state,t.slice(0,-1));r.delete(n,t[t.length-1])})),f(this)},c.prototype.hasModule=function(t){return"string"==typeof t&&(t=[t]),this._modules.isRegistered(t)},c.prototype.hotUpdate=function(t){this._modules.update(t),f(this,!0)},c.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(c.prototype,a);var v=w((function(t,e){var n={};return b(e).forEach((function(e){var o=e.key,i=e.val;n[o]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=$(this.$store,"mapState",t);if(!o)return;e=o.context.state,n=o.context.getters}return"function"==typeof i?i.call(this,e,n):e[i]},n[o].vuex=!0})),n})),_=w((function(t,e){var n={};return b(e).forEach((function(e){var o=e.key,i=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.commit;if(t){var r=$(this.$store,"mapMutations",t);if(!r)return;o=r.context.commit}return"function"==typeof i?i.apply(this,[o].concat(e)):o.apply(this.$store,[i].concat(e))}})),n})),y=w((function(t,e){var n={};return b(e).forEach((function(e){var o=e.key,i=e.val;i=t+i,n[o]=function(){if(!t||$(this.$store,"mapGetters",t))return this.$store.getters[i]},n[o].vuex=!0})),n})),g=w((function(t,e){var n={};return b(e).forEach((function(e){var o=e.key,i=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.dispatch;if(t){var r=$(this.$store,"mapActions",t);if(!r)return;o=r.context.dispatch}return"function"==typeof i?i.apply(this,[o].concat(e)):o.apply(this.$store,[i].concat(e))}})),n}));function b(t){return function(t){return Array.isArray(t)||n(t)}(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function w(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function $(t,e,n){return t._modulesNamespaceMap[n]}return{Store:c,install:m,version:"3.4.0",mapState:v,mapMutations:_,mapGetters:y,mapActions:g,createNamespacedHelpers:function(t){return{mapState:v.bind(null,t),mapGetters:y.bind(null,t),mapMutations:_.bind(null,t),mapActions:g.bind(null,t)}}}}));
