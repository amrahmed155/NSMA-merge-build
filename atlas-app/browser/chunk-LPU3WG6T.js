import{a as w}from"./chunk-BAC6RMAZ.js";import{a as C}from"./chunk-NMKLVORY.js";import{a as E}from"./chunk-2NXJIMQ2.js";import{a as D}from"./chunk-O5NYEJB2.js";import{a as G}from"./chunk-H2ASV3YO.js";import{a as y}from"./chunk-45K2AY22.js";import{a as O}from"./chunk-2XDZ5QNL.js";import{a as r,b as c}from"./chunk-UUP4FBYC.js";import{l as f}from"./chunk-QTNEEY3B.js";import{P as T,s as u}from"./chunk-RQRZ6SGB.js";function F(e){return e===4||e===5||e===6||e===7||e===8}function B(e){return k(e)||e===3}function U(e){return e===9||e===10}function z(e){return R(e)||U(e)}function R(e){return e===0}function x(e){return R(e)||P(e)}function N(e){return x(e)||e===10}function I(e){return x(e)||U(e)}function k(e){return I(e)||b(e)}function b(e){return e===2}function P(e){return e===1}function H(e){return b(e)||F(e)}function L(e,t){switch(t.textureCoordinateType){case 1:return e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(r`void forwardTextureCoordinates() { vuv0 = uv0; }`);case 2:return e.attributes.add("uv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuv0","vec2"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(r`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:t.textureCoordinateType;case 0:return void e.vertex.code.add(r`void forwardTextureCoordinates() {}`);case 3:return}}var v=class{constructor(t){this._material=t.material,this._techniques=t.techniques,this._output=t.output}dispose(){}get _stippleTextures(){return this._techniques.context?.stippleTextures}get _markerTextures(){return this._techniques.context?.markerTextures}getTechnique(t,s){return this._techniques.get(t,this._material.getConfiguration(this._output,s))}ensureResources(t){return 2}};var M=class extends v{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textures=t.textures,this.updateTexture(t.textureId),this._acquire(t.normalTextureId,s=>this._textureNormal=s),this._acquire(t.emissiveTextureId,s=>this._textureEmissive=s),this._acquire(t.occlusionTextureId,s=>this._textureOcclusion=s),this._acquire(t.metallicRoughnessTextureId,s=>this._textureMetallicRoughness=s)}dispose(){super.dispose(),this._texture=u(this._texture),this._textureNormal=u(this._textureNormal),this._textureEmissive=u(this._textureEmissive),this._textureOcclusion=u(this._textureOcclusion),this._textureMetallicRoughness=u(this._textureMetallicRoughness),this._disposed=!0}ensureResources(t){return this._numLoading===0?2:1}get textureBindParameters(){return new p(this._texture?.glTexture??null,this._textureNormal?.glTexture??null,this._textureEmissive?.glTexture??null,this._textureOcclusion?.glTexture??null,this._textureMetallicRoughness?.glTexture??null)}updateTexture(t){this._texture!=null&&t===this._texture.id||(this._texture=u(this._texture),this._acquire(t,s=>this._texture=s))}_acquire(t,s){if(t==null)return void s(null);let i=this._textures.acquire(t);if(T(i))return++this._numLoading,void i.then(a=>{if(this._disposed)return u(a),void s(null);s(a)}).finally(()=>--this._numLoading);s(i)}},d=class extends C{constructor(t=null){super(),this.textureEmissive=t}},p=class extends d{constructor(t,s,i,a,n,m,l){super(i),this.texture=t,this.textureNormal=s,this.textureOcclusion=a,this.textureMetallicRoughness=n,this.scale=m,this.normalTextureTransformMatrix=l}};var h=class extends O{constructor(t,s,i){super(t,"float",2,(a,n,m)=>a.setUniform1f(t,s(n,m),i))}};function S(e){e.fragment.code.add(r`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function A(e,t){let{textureCoordinateType:s}=t;if(s===0||s===3)return;e.include(L,t);let i=s===2;i&&e.include(S),e.fragment.code.add(r`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${i?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `)}function V(e){e.code.add(r`
    const float GAMMA = ${r.float(f)};
    const float INV_GAMMA = ${r.float(1/f)};

    vec4 delinearizeGamma(vec4 color) {
      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.a);
    }

    vec3 linearizeGamma(vec3 color) {
      return pow(color, vec3(GAMMA));
    }
  `)}var $=1;function Ge(e,t){if(!x(t.output))return;e.fragment.include(V);let{emissionSource:s,hasEmissiveTextureTransform:i,bindType:a}=t,n=s===3||s===4||s===5;n&&(e.include(A,t),e.fragment.uniforms.add(a===1?new y("texEmission",o=>o.textureEmissive):new D("texEmission",o=>o.textureEmissive)));let m=s===2||n;m&&e.fragment.uniforms.add(a===1?new E("emissiveBaseColor",o=>o.emissiveBaseColor):new w("emissiveBaseColor",o=>o.emissiveBaseColor));let l=s!==0;l&&!(s===7||s===6||s===4||s===5)&&e.fragment.uniforms.add(a===1?new G("emissiveStrength",o=>o.emissiveStrength):new h("emissiveStrength",o=>o.emissiveStrength));let g=s===7,_=s===5,q=s===1||s===6||g;e.fragment.code.add(r`
    vec4 getEmissions(vec3 symbolColor) {
      vec4 emissions = ${m?_?"emissiveSource == 0 ? vec4(emissiveBaseColor, 1.0): vec4(linearizeGamma(symbolColor), 1.0)":"vec4(emissiveBaseColor, 1.0)":q?g?"emissiveSource == 0 ? vec4(0.0): vec4(linearizeGamma(symbolColor), 1.0)":"vec4(linearizeGamma(symbolColor), 1.0)":"vec4(0.0)"};
      ${c(n,`${c(_,`if(emissiveSource == 0) {
              vec4 emissiveFromTex = textureLookup(texEmission, ${i?"emissiveUV":"vuv0"});
              emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);
           }`,`vec4 emissiveFromTex = textureLookup(texEmission, ${i?"emissiveUV":"vuv0"});
           emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);`)}
        emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)}
      ${c(l,`emissions.rgb *= emissiveStrength * ${r.float($)};`)}
      return emissions;
    }
  `)}export{F as a,B as b,U as c,z as d,R as e,x as f,N as g,I as h,k as i,b as j,P as k,H as l,v as m,M as n,p as o,L as p,A as q,V as r,Ge as s};
