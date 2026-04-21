import{e as R}from"./chunk-5FZPH6QD.js";import{e as g,g as G,h as B}from"./chunk-V2NS4YD6.js";import{a as z,b as _,c as j,d as S,f as U,g as u}from"./chunk-MLOQ5YF7.js";import{a as L}from"./chunk-XSD5BTYG.js";import{a as H}from"./chunk-JIVOQNH4.js";import{p as x}from"./chunk-LPU3WG6T.js";import{a as E}from"./chunk-YQSUB555.js";import{a as b,b as O,c as h,e as N}from"./chunk-UFMXMN5C.js";import{a as y,c as Y,d as J,e as K}from"./chunk-3CPNIH6N.js";import{a as p}from"./chunk-ZHPZPSOY.js";import{c as v,d as W}from"./chunk-U4YRRDXO.js";import{a as A}from"./chunk-YQXWXQD3.js";import{a as q}from"./chunk-H2ASV3YO.js";import{a as f}from"./chunk-45K2AY22.js";import{a as r,b as d}from"./chunk-UUP4FBYC.js";import{c as k}from"./chunk-E7V7N6Q3.js";import{a as $}from"./chunk-YMQ4BGWF.js";import{a as D}from"./chunk-7VB5JZ2H.js";import{d as T}from"./chunk-JJQR3F6K.js";import{q as F}from"./chunk-B2QABUVD.js";import{a as c}from"./chunk-NYQXZQKP.js";function P(o,e){switch(o.fragment.code.add(r`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),e.normalType){case 1:o.attributes.add("normalCompressed","vec2"),o.vertex.code.add(r`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:o.attributes.add("normal","vec3"),o.vertex.code.add(r`vec3 normalModel() {
return normal;
}`);break;default:e.normalType;case 2:case 3:}}function Z(o,e){switch(e.normalType){case 0:case 1:o.include(P,e),o.varyings.add("vNormalWorld","vec3"),o.varyings.add("vNormalView","vec3"),o.vertex.uniforms.add(new _("transformNormalGlobalFromModel",t=>t.transformNormalGlobalFromModel),new y("transformNormalViewFromGlobal",t=>t.transformNormalViewFromGlobal)).code.add(r`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case 2:o.vertex.code.add(r`void forwardNormal() {}`);break;default:e.normalType;case 3:}}var Q=class extends j{constructor(){super(...arguments),this.transformNormalViewFromGlobal=c()}},X=class extends S{constructor(){super(...arguments),this.transformNormalGlobalFromModel=c(),this.toMapSpace=$()}};function Co(o){o.vertex.code.add(r`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function bo(o,e){e.instancedColor?(o.attributes.add("instanceColor","vec4"),o.vertex.include(b),o.vertex.include(O),o.vertex.include(h),o.vertex.code.add(r`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${"instanceColor"}));
      }
    `)):o.vertex.code.add(r`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}var oo=c();function jo(o,e){let{hasModelTransformation:t,instancedDoublePrecision:a,instanced:s,output:m,hasVertexTangents:I}=e;t&&(o.vertex.uniforms.add(new L("model",n=>n.modelTransformation??T)),o.vertex.uniforms.add(new y("normalLocalOriginFromModel",n=>(F(oo,n.modelTransformation??T),oo)))),s&&a&&(o.attributes.add("instanceModelOriginHi","vec3"),o.attributes.add("instanceModelOriginLo","vec3"),o.attributes.add("instanceModel","mat3"),o.attributes.add("instanceModelNormal","mat3"));let i=o.vertex;a&&(i.include(z,e),i.uniforms.add(new A("viewOriginHi",n=>G(k(V,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),V)),new A("viewOriginLo",n=>B(k(V,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),V)))),i.code.add(r`
    vec3 getVertexInLocalOriginSpace() {
      return ${t?a?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":a?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${a?r`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(r`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${t?a?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":a?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),m===3&&(W(i),i.code.add(r`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${t?a?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":a?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),I&&i.code.add(r`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t?a?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":a?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}var V=D();function Ho(o,e){o.varyings.add("colorMixMode","int"),o.varyings.add("opacityMixMode","int"),o.vertex.uniforms.add(new H("symbolColorMixMode",t=>g[t.colorMixMode])),e.hasSymbolColors?(o.vertex.include(b),o.vertex.include(O),o.vertex.include(h),o.attributes.add("symbolColor","vec4"),o.vertex.code.add(r`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${"symbolColor"}));
    }
  `)):o.vertex.code.add(r`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),o.vertex.code.add(r`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${r.int(g.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${r.int(g.ignore)} : symbolColorMixMode;
    }
  `)}function M(o,e){ao(o,e,new q("textureAlphaCutoff",t=>t.textureAlphaCutoff))}function ao(o,e,t){let a=o.fragment,s=e.alphaDiscardMode,m=s===0;s!==2&&s!==3||a.uniforms.add(t),a.code.add(r`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${s===1?"color.a = 1.0;":`if (color.a < ${m?r.float(J):"textureAlphaCutoff"}) {
              discard;
             } ${d(s===2,"else { color.a = 1.0; }")}`}
    }
  `)}function pr(o,e){let{vertex:t,fragment:a,varyings:s}=o,{hasColorTexture:m,alphaDiscardMode:I}=e,i=m&&I!==1,{output:n,normalType:C,hasColorTextureTransform:w}=e;switch(n){case 2:v(t,e),o.include(u),a.include(p,e),o.include(x,e),i&&a.uniforms.add(new f("tex",l=>l.texture)),t.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),o.include(M,e),a.main.add(r`
        discardBySlice(vpos);
        ${d(i,r`vec4 texColor = texture(tex, ${w?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case 4:case 5:case 6:case 7:case 10:v(t,e),o.include(u),o.include(x,e),o.include(N,e),o.include(R,e),a.include(p,e),o.include(E,e),U(o),s.add("depth","float",{invariant:!0}),i&&a.uniforms.add(new f("tex",l=>l.texture)),t.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),o.include(M,e),a.main.add(r`
        discardBySlice(vpos);
        ${d(i,r`vec4 texColor = texture(tex, ${w?"colorUV":"vuv0"});
               discardOrAdjustAlpha(texColor);`)}
        ${n===10?r`outputObjectAndLayerIdColor();`:r`outputDepth(depth);`}`);break;case 3:{v(t,e),o.include(u),o.include(P,e),o.include(Z,e),o.include(x,e),o.include(N,e),i&&a.uniforms.add(new f("tex",ro=>ro.texture)),C===2&&s.add("vPositionView","vec3",{invariant:!0});let l=C===0||C===1;t.main.add(r`
        vpos = getVertexInLocalOriginSpace();
        ${l?r`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:r`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),a.include(p,e),o.include(M,e),a.main.add(r`
        discardBySlice(vpos);
        ${d(i,r`vec4 texColor = texture(tex, ${w?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${C===2?r`vec3 normal = screenDerivativeNormal(vPositionView);`:r`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 9:v(t,e),o.include(u),o.include(x,e),o.include(N,e),i&&a.uniforms.add(new f("tex",l=>l.texture)),t.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),a.include(p,e),o.include(M,e),o.include(Y,e),a.main.add(r`
        discardBySlice(vpos);
        ${d(i,r`vec4 texColor = texture(tex, ${w?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function fr(o){o.include(K),o.code.add(r`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${r.int(1)}) {
        return allMixed;
      }
      if (mode == ${r.int(2)}) {
        return internalMixed;
      }
      if (mode == ${r.int(3)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${r.int(2)}) {
        return internalMixed;
      }
      if (mode == ${r.int(3)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}export{P as a,Z as b,Q as c,X as d,Co as e,bo as f,jo as g,Ho as h,M as i,pr as j,fr as k};
