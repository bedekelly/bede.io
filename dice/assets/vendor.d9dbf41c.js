var E,c,_e,te,C,ne,R,re,D={},oe=[],be=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function b(e,_){for(var t in _)e[t]=_[t];return e}function ie(e){var _=e.parentNode;_&&_.removeChild(e)}function j(e,_,t){var r,i,n,l={};for(n in _)n=="key"?r=_[n]:n=="ref"?i=_[n]:l[n]=_[n];if(arguments.length>2&&(l.children=arguments.length>3?E.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)l[n]===void 0&&(l[n]=e.defaultProps[n]);return P(e,l,r,i,null)}function P(e,_,t,r,i){var n={type:e,props:_,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++_e:i};return i==null&&c.vnode!=null&&c.vnode(n),n}function $e(){return{current:null}}function S(e){return e.children}function H(e,_){this.props=e,this.context=_}function x(e,_){if(_==null)return e.__?x(e.__,e.__.__k.indexOf(e)+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?x(e):null}function le(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return le(e)}}function O(e){(!e.__d&&(e.__d=!0)&&C.push(e)&&!U.__r++||R!==c.debounceRendering)&&((R=c.debounceRendering)||ne)(U)}function U(){for(var e;U.__r=C.length;)e=C.sort(function(_,t){return _.__v.__b-t.__v.__b}),C=[],e.some(function(_){var t,r,i,n,l,a;_.__d&&(l=(n=(t=_).__v).__e,(a=t.__P)&&(r=[],(i=b({},n)).__v=n.__v+1,q(a,n,i,t.__n,a.ownerSVGElement!==void 0,n.__h!=null?[l]:null,r,l==null?x(n):l,n.__h),ae(r,n),n.__e!=l&&le(n)))})}function ue(e,_,t,r,i,n,l,a,p,h){var o,d,f,u,s,$,v,y=r&&r.__k||oe,g=y.length;for(t.__k=[],o=0;o<_.length;o++)if((u=t.__k[o]=(u=_[o])==null||typeof u=="boolean"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?P(null,u,null,null,u):Array.isArray(u)?P(S,{children:u},null,null,null):u.__b>0?P(u.type,u.props,u.key,null,u.__v):u)!=null){if(u.__=t,u.__b=t.__b+1,(f=y[o])===null||f&&u.key==f.key&&u.type===f.type)y[o]=void 0;else for(d=0;d<g;d++){if((f=y[d])&&u.key==f.key&&u.type===f.type){y[d]=void 0;break}f=null}q(e,u,f=f||D,i,n,l,a,p,h),s=u.__e,(d=u.ref)&&f.ref!=d&&(v||(v=[]),f.ref&&v.push(f.ref,null,u),v.push(d,u.__c||s,u)),s!=null?($==null&&($=s),typeof u.type=="function"&&u.__k===f.__k?u.__d=p=ce(u,p,e):p=se(e,u,f,y,s,p),typeof t.type=="function"&&(t.__d=p)):p&&f.__e==p&&p.parentNode!=e&&(p=x(f))}for(t.__e=$,o=g;o--;)y[o]!=null&&(typeof t.type=="function"&&y[o].__e!=null&&y[o].__e==t.__d&&(t.__d=x(r,o+1)),he(y[o],y[o]));if(v)for(o=0;o<v.length;o++)pe(v[o],v[++o],v[++o])}function ce(e,_,t){for(var r,i=e.__k,n=0;i&&n<i.length;n++)(r=i[n])&&(r.__=e,_=typeof r.type=="function"?ce(r,_,t):se(t,r,r,i,r.__e,_));return _}function fe(e,_){return _=_||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(t){fe(t,_)}):_.push(e)),_}function se(e,_,t,r,i,n){var l,a,p;if(_.__d!==void 0)l=_.__d,_.__d=void 0;else if(t==null||i!=n||i.parentNode==null)e:if(n==null||n.parentNode!==e)e.appendChild(i),l=null;else{for(a=n,p=0;(a=a.nextSibling)&&p<r.length;p+=2)if(a==i)break e;e.insertBefore(i,n),l=n}return l!==void 0?l:i.nextSibling}function xe(e,_,t,r,i){var n;for(n in t)n==="children"||n==="key"||n in _||M(e,n,null,t[n],r);for(n in _)i&&typeof _[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||t[n]===_[n]||M(e,n,_[n],t[n],r)}function B(e,_,t){_[0]==="-"?e.setProperty(_,t):e[_]=t==null?"":typeof t!="number"||be.test(_)?t:t+"px"}function M(e,_,t,r,i){var n;e:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(_ in r)t&&_ in t||B(e.style,_,"");if(t)for(_ in t)r&&t[_]===r[_]||B(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")n=_!==(_=_.replace(/Capture$/,"")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+n]=t,t?r||e.addEventListener(_,n?V:z,n):e.removeEventListener(_,n?V:z,n);else if(_!=="dangerouslySetInnerHTML"){if(i)_=_.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_ in e)try{e[_]=t==null?"":t;break e}catch{}typeof t=="function"||(t!=null&&(t!==!1||_[0]==="a"&&_[1]==="r")?e.setAttribute(_,t):e.removeAttribute(_))}}function z(e){this.l[e.type+!1](c.event?c.event(e):e)}function V(e){this.l[e.type+!0](c.event?c.event(e):e)}function q(e,_,t,r,i,n,l,a,p){var h,o,d,f,u,s,$,v,y,g,w,k=_.type;if(_.constructor!==void 0)return null;t.__h!=null&&(p=t.__h,a=_.__e=t.__e,_.__h=null,n=[a]),(h=c.__b)&&h(_);try{e:if(typeof k=="function"){if(v=_.props,y=(h=k.contextType)&&r[h.__c],g=h?y?y.props.value:h.__:r,t.__c?$=(o=_.__c=t.__c).__=o.__E:("prototype"in k&&k.prototype.render?_.__c=o=new k(v,g):(_.__c=o=new H(v,g),o.constructor=k,o.render=Pe),y&&y.sub(o),o.props=v,o.state||(o.state={}),o.context=g,o.__n=r,d=o.__d=!0,o.__h=[]),o.__s==null&&(o.__s=o.state),k.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=b({},o.__s)),b(o.__s,k.getDerivedStateFromProps(v,o.__s))),f=o.props,u=o.state,d)k.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(k.getDerivedStateFromProps==null&&v!==f&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(v,g),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(v,o.__s,g)===!1||_.__v===t.__v){o.props=v,o.state=o.__s,_.__v!==t.__v&&(o.__d=!1),o.__v=_,_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(T){T&&(T.__=_)}),o.__h.length&&l.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(v,o.__s,g),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(f,u,s)})}o.context=g,o.props=v,o.state=o.__s,(h=c.__r)&&h(_),o.__d=!1,o.__v=_,o.__P=e,h=o.render(o.props,o.state,o.context),o.state=o.__s,o.getChildContext!=null&&(r=b(b({},r),o.getChildContext())),d||o.getSnapshotBeforeUpdate==null||(s=o.getSnapshotBeforeUpdate(f,u)),w=h!=null&&h.type===S&&h.key==null?h.props.children:h,ue(e,Array.isArray(w)?w:[w],_,t,r,i,n,l,a,p),o.base=_.__e,_.__h=null,o.__h.length&&l.push(o),$&&(o.__E=o.__=null),o.__e=!1}else n==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=Ce(t.__e,_,t,r,i,n,l,p);(h=c.diffed)&&h(_)}catch(T){_.__v=null,(p||n!=null)&&(_.__e=a,_.__h=!!p,n[n.indexOf(a)]=null),c.__e(T,_,t)}}function ae(e,_){c.__c&&c.__c(_,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(r){r.call(t)})}catch(r){c.__e(r,t.__v)}})}function Ce(e,_,t,r,i,n,l,a){var p,h,o,d=t.props,f=_.props,u=_.type,s=0;if(u==="svg"&&(i=!0),n!=null){for(;s<n.length;s++)if((p=n[s])&&"setAttribute"in p==!!u&&(u?p.localName===u:p.nodeType===3)){e=p,n[s]=null;break}}if(e==null){if(u===null)return document.createTextNode(f);e=i?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,f.is&&f),n=null,a=!1}if(u===null)d===f||a&&e.data===f||(e.data=f);else{if(n=n&&E.call(e.childNodes),h=(d=t.props||D).dangerouslySetInnerHTML,o=f.dangerouslySetInnerHTML,!a){if(n!=null)for(d={},s=0;s<e.attributes.length;s++)d[e.attributes[s].name]=e.attributes[s].value;(o||h)&&(o&&(h&&o.__html==h.__html||o.__html===e.innerHTML)||(e.innerHTML=o&&o.__html||""))}if(xe(e,f,d,i,a),o)_.__k=[];else if(s=_.props.children,ue(e,Array.isArray(s)?s:[s],_,t,r,i&&u!=="foreignObject",n,l,n?n[0]:t.__k&&x(t,0),a),n!=null)for(s=n.length;s--;)n[s]!=null&&ie(n[s]);a||("value"in f&&(s=f.value)!==void 0&&(s!==e.value||u==="progress"&&!s||u==="option"&&s!==d.value)&&M(e,"value",s,d.value,!1),"checked"in f&&(s=f.checked)!==void 0&&s!==e.checked&&M(e,"checked",s,d.checked,!1))}return e}function pe(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(r){c.__e(r,t)}}function he(e,_,t){var r,i;if(c.unmount&&c.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||pe(r,null,_)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){c.__e(n,_)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&he(r[i],_,typeof e.type!="function");t||e.__e==null||ie(e.__e),e.__e=e.__d=void 0}function Pe(e,_,t){return this.constructor(e,t)}function de(e,_,t){var r,i,n;c.__&&c.__(e,_),i=(r=typeof t=="function")?null:t&&t.__k||_.__k,n=[],q(_,e=(!r&&t||_).__k=j(S,null,[e]),i||D,D,_.ownerSVGElement!==void 0,!r&&t?[t]:i?null:_.firstChild?E.call(_.childNodes):null,n,!r&&t?t:i?i.__e:_.firstChild,r),ae(n,e)}function ve(e,_){de(e,_,ve)}function He(e,_,t){var r,i,n,l=b({},e.props);for(n in _)n=="key"?r=_[n]:n=="ref"?i=_[n]:l[n]=_[n];return arguments.length>2&&(l.children=arguments.length>3?E.call(arguments,2):t),P(e.type,l,r||e.key,i||e.ref,null)}function Ae(e,_){var t={__c:_="__cC"+re++,__:e,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,n;return this.getChildContext||(i=[],(n={})[_]=this,this.getChildContext=function(){return n},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&i.some(O)},this.sub=function(l){i.push(l);var a=l.componentWillUnmount;l.componentWillUnmount=function(){i.splice(i.indexOf(l),1),a&&a.call(l)}}),r.children}};return t.Provider.__=t.Consumer.contextType=t}E=oe.slice,c={__e:function(e,_){for(var t,r,i;_=_.__;)if((t=_.__c)&&!t.__)try{if((r=t.constructor)&&r.getDerivedStateFromError!=null&&(t.setState(r.getDerivedStateFromError(e)),i=t.__d),t.componentDidCatch!=null&&(t.componentDidCatch(e),i=t.__d),i)return t.__E=t}catch(n){e=n}throw e}},_e=0,te=function(e){return e!=null&&e.constructor===void 0},H.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=b({},this.state),typeof e=="function"&&(e=e(b({},t),this.props)),e&&b(t,e),e!=null&&this.__v&&(_&&this.__h.push(_),O(this))},H.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),O(this))},H.prototype.render=S,C=[],ne=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,U.__r=0,re=0;var Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",render:de,hydrate:ve,createElement:j,h:j,Fragment:S,createRef:$e,get isValidElement(){return te},Component:H,cloneElement:He,createContext:Ae,toChildArray:fe,get options(){return c}}),N,m,G,A=0,ye=[],J=c.__b,K=c.__r,Q=c.diffed,X=c.__c,Y=c.unmount;function I(e,_){c.__h&&c.__h(m,e,A||_),A=0;var t=m.__H||(m.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function je(e){return A=1,Se(ke,e)}function Se(e,_,t){var r=I(N++,2);return r.t=e,r.__c||(r.__=[t?t(_):ke(void 0,_),function(i){var n=r.t(r.__[0],i);r.__[0]!==n&&(r.__=[n,r.__[1]],r.__c.setState({}))}],r.__c=m),r.__}function Oe(e,_){var t=I(N++,3);!c.__s&&ge(t.__H,_)&&(t.__=e,t.__H=_,m.__H.__h.push(t))}function Le(e){return A=5,me(function(){return{current:e}},[])}function me(e,_){var t=I(N++,7);return ge(t.__H,_)&&(t.__=e(),t.__H=_,t.__h=e),t.__}function We(e,_){return A=8,me(function(){return e},_)}function we(){for(var e;e=ye.shift();)if(e.__P)try{e.__H.__h.forEach(F),e.__H.__h.forEach(L),e.__H.__h=[]}catch(_){e.__H.__h=[],c.__e(_,e.__v)}}c.__b=function(e){m=null,J&&J(e)},c.__r=function(e){K&&K(e),N=0;var _=(m=e.__c).__H;_&&(_.__h.forEach(F),_.__h.forEach(L),_.__h=[])},c.diffed=function(e){Q&&Q(e);var _=e.__c;_&&_.__H&&_.__H.__h.length&&(ye.push(_)!==1&&G===c.requestAnimationFrame||((G=c.requestAnimationFrame)||function(t){var r,i=function(){clearTimeout(n),Z&&cancelAnimationFrame(r),setTimeout(t)},n=setTimeout(i,100);Z&&(r=requestAnimationFrame(i))})(we)),m=null},c.__c=function(e,_){_.some(function(t){try{t.__h.forEach(F),t.__h=t.__h.filter(function(r){return!r.__||L(r)})}catch(r){_.some(function(i){i.__h&&(i.__h=[])}),_=[],c.__e(r,t.__v)}}),X&&X(e,_)},c.unmount=function(e){Y&&Y(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{F(r)}catch(i){_=i}}),_&&c.__e(_,t.__v))};var Z=typeof requestAnimationFrame=="function";function F(e){var _=m,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),m=_}function L(e){var _=m;e.__c=e.__(),m=_}function ge(e,_){return!e||e.length!==_.length||_.some(function(t,r){return t!==e[r]})}function ke(e,_){return typeof _=="function"?_(e):_}function Te(e){if(e.__esModule)return e;var _=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(_,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}),_}var Fe=Te(Ee),De,Ue,Me,W=Fe,Ne=0;function ee(e,_,t,r,i){var n,l,a={};for(l in _)l=="ref"?n=_[l]:a[l]=_[l];var p={type:e,props:a,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ne,__source:r,__self:i};if(typeof e=="function"&&(n=e.defaultProps))for(l in n)a[l]===void 0&&(a[l]=n[l]);return W.options.vnode&&W.options.vnode(p),p}Me=W.Fragment,Ue=ee,De=ee;export{We as A,Me as F,de as S,De as a,Ue as j,je as l,Le as s,Oe as y};