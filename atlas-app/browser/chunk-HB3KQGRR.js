import{t as _,v as m}from"./chunk-2TXPI32T.js";var S=()=>_.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder"),c=class{constructor(){this._includedModules=new Map}include(e,s){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,s),e(this.builder,s))}},$=class extends c{constructor(){super(...arguments),this.vertex=new h,this.fragment=new h,this.attributes=new g,this.varyings=new b,this.extensions=new I,this.outputs=new A}get fragmentUniforms(){return this.fragment.uniforms.entries}get attributeNames(){return this.attributes.names}get builder(){return this}generate(e,s=!1){let t=this.extensions.generateSource(e),a=this.attributes.generateSource(e),r=this.varyings.generateSource(e),i=e==="vertex"?this.vertex:this.fragment,o=i.uniforms.generateSource(),u=i.code.generateSource(),T=i.main.generateSource(s),v=e==="vertex"?F:E,w=i.constants.generateSource(),y=this.outputs.generateSource(e);return`#version 300 es
${t.join(`
`)}
${v}
${w.join(`
`)}
${o.join(`
`)}
${a.join(`
`)}
${r.join(`
`)}
${y.join(`
`)}
${u.join(`
`)}
${T.join(`
`)}`}generateBind(e){let s=new Map;this.vertex.uniforms.entries.forEach(r=>{let i=r.bind[0];i&&s.set(r.name,i)}),this.fragment.uniforms.entries.forEach(r=>{let i=r.bind[0];i&&s.set(r.name,i)});let t=Array.from(s.values()),a=t.length;return r=>{for(let i=0;i<a;++i)t[i](e,r)}}generateBindPass(e){let s=new Map;this.vertex.uniforms.entries.forEach(r=>{let i=r.bind[1];i&&s.set(r.name,i)}),this.fragment.uniforms.entries.forEach(r=>{let i=r.bind[1];i&&s.set(r.name,i)});let t=Array.from(s.values()),a=t.length;return(r,i)=>{for(let o=0;o<a;++o)t[o](e,r,i)}}generateBindDraw(e){let s=new Map;this.vertex.uniforms.entries.forEach(r=>{let i=r.bind[2];i&&s.set(r.name,i)}),this.fragment.uniforms.entries.forEach(r=>{let i=r.bind[2];i&&s.set(r.name,i)});let t=Array.from(s.values()),a=t.length;return(r,i,o)=>{for(let u=0;u<a;++u)t[u](e,o,r,i)}}},d=class{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(let s of e)this._add(s);return this._stage}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new m("shaderbuilder:duplicate-uniform",`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else S().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(({name:e,arraySize:s,type:t})=>s!=null?`uniform ${t} ${e}[${s}];`:`uniform ${t} ${e};`)}get entries(){return Array.from(this._entries.values())}},l=class{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(e){if(this._bodies.length>0)return[`void main() {
 ${this._bodies.join(`
`)||""} 
}`];if(e)throw new m("shaderbuilder:missing-main","Shader does not contain main function body.");return[]}},p=class{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}},h=class extends c{constructor(){super(...arguments),this.uniforms=new d(this),this.main=new l(this),this.code=new p(this),this.constants=new f(this)}get builder(){return this}},g=class{constructor(){this._entries=new Array}add(e,s){this._entries.push([e,s])}generateSource(e){return e==="fragment"?[]:this._entries.map(s=>`in ${s[1]} ${s[0]};`)}get names(){return this._entries.map(([e])=>e)}},b=class{constructor(){this._entries=new Map}add(e,s,t){this._entries.has(e)?S().warn(`Ignoring duplicate varying ${s} ${e}`):this._entries.set(e,{type:s,invariant:t?.invariant??!1})}generateSource(e){let s=new Array;return this._entries.forEach((t,a)=>s.push((t.invariant&&e==="vertex"?"invariant ":"")+(t.type==="int"?"flat ":"")+(e==="vertex"?"out":"in")+` ${t.type} ${a};`)),s}},I=(()=>{let e=class e{constructor(){this._entries=new Set}add(t){this._entries.add(t)}generateSource(t){let a=t==="vertex"?e.ALLOWLIST_VERTEX:e.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(r=>a.includes(r)).map(r=>`#extension ${r} : enable`)}};e.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],e.ALLOWLIST_VERTEX=[];let n=e;return n})(),A=(()=>{let e=class e{constructor(){this._entries=new Map}add(t,a,r=0){let i=this._entries.get(r);i?.name!==t||i?.type!==a?this._entries.set(r,{name:t,type:a}):S().warn(`Fragment shader output location ${r} occupied`)}generateSource(t){if(t==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:e.DEFAULT_NAME,type:e.DEFAULT_TYPE});let a=new Array;return this._entries.forEach((r,i)=>a.push(`layout(location = ${i}) out ${r.type} ${r.name};`)),a}};e.DEFAULT_TYPE="vec4",e.DEFAULT_NAME="fragColor";let n=e;return n})(),f=class n{constructor(e){this._stage=e,this._entries=new Set}add(e,s,t){let a="ERROR_CONSTRUCTOR_STRING";switch(s){case"float":a=n._numberToFloatStr(t);break;case"int":a=n._numberToIntStr(t);break;case"bool":a=t.toString();break;case"vec2":a=`vec2(${n._numberToFloatStr(t[0])},                            ${n._numberToFloatStr(t[1])})`;break;case"vec3":a=`vec3(${n._numberToFloatStr(t[0])},                            ${n._numberToFloatStr(t[1])},                            ${n._numberToFloatStr(t[2])})`;break;case"vec4":a=`vec4(${n._numberToFloatStr(t[0])},                            ${n._numberToFloatStr(t[1])},                            ${n._numberToFloatStr(t[2])},                            ${n._numberToFloatStr(t[3])})`;break;case"ivec2":a=`ivec2(${n._numberToIntStr(t[0])},                             ${n._numberToIntStr(t[1])})`;break;case"ivec3":a=`ivec3(${n._numberToIntStr(t[0])},                             ${n._numberToIntStr(t[1])},                             ${n._numberToIntStr(t[2])})`;break;case"ivec4":a=`ivec4(${n._numberToIntStr(t[0])},                             ${n._numberToIntStr(t[1])},                             ${n._numberToIntStr(t[2])},                             ${n._numberToIntStr(t[3])})`;break;case"uvec2":a=`uvec2(${n._numberToIntStr(t[0])},                             ${n._numberToIntStr(t[1])})`;break;case"uvec3":a=`uvec3(${n._numberToIntStr(t[0])},                             ${n._numberToIntStr(t[1])},                             ${n._numberToIntStr(t[2])})`;break;case"uvec4":a=`uvec4(${n._numberToIntStr(t[0])},                             ${n._numberToIntStr(t[1])},                             ${n._numberToIntStr(t[2])},                             ${n._numberToIntStr(t[3])})`;break;case"mat2":case"mat3":case"mat4":a=`${s}(${Array.prototype.map.call(t,r=>n._numberToFloatStr(r)).join(", ")})`}return this._entries.add(`const ${s} ${e} = ${a};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}},E=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp int;
  precision highp sampler2D;
  precision highp usampler2D;
  precision highp sampler2DArray;
  precision highp sampler2DShadow;
#else
  precision mediump float;
  precision mediump int;
  precision mediump sampler2D;
  precision mediump usampler2D;
  precision mediump sampler2DArray;
  precision mediump sampler2DShadow;
#endif`,F=`precision highp float;
 precision highp sampler2D;
 precision highp usampler2D;
 precision highp sampler2DArray;
 precision highp sampler2DShadow;


 invariant gl_Position;
 `;export{$ as a};
