import{a as ao}from"./chunk-MO6GOC56.js";import{a as P,b as S,e as O,f as $,g as E,h as I,i as W,j as G,k as lo}from"./chunk-VFWJHHQU.js";import{f as X,g as oo,h as eo,i as ro,j as to,k as mo}from"./chunk-5FZPH6QD.js";import{c as Z,e as J,h as io,i as no}from"./chunk-WTP7KYQK.js";import{e as N}from"./chunk-V2NS4YD6.js";import{a as k}from"./chunk-Y3VXCMJP.js";import{g as R}from"./chunk-MLOQ5YF7.js";import{a as co}from"./chunk-V3G5GB4X.js";import{f as U,p as B,q as Q}from"./chunk-LPU3WG6T.js";import{b as z}from"./chunk-46P56YEM.js";import{a as F,d as L,e as j}from"./chunk-UFMXMN5C.js";import{a as so}from"./chunk-B6P4AMJH.js";import{a as d,d as H}from"./chunk-3CPNIH6N.js";import{a as D}from"./chunk-ZHPZPSOY.js";import{b as h,c as A}from"./chunk-U4YRRDXO.js";import{a as _}from"./chunk-J6IEXWQ2.js";import{a as g}from"./chunk-2NXJIMQ2.js";import{a as q}from"./chunk-O5NYEJB2.js";import{a as Y}from"./chunk-YZ4IDPMQ.js";import{a as K}from"./chunk-HB3KQGRR.js";import{a as w}from"./chunk-H2ASV3YO.js";import{a as v}from"./chunk-45K2AY22.js";import{a as r,b as n}from"./chunk-UUP4FBYC.js";import{f as b}from"./chunk-7ZNWJ4EN.js";import{c as m}from"./chunk-NYQXZQKP.js";function uo(o,e){let a=o.fragment,{hasVertexTangents:s,doubleSidedMode:t,hasNormalTexture:c,textureCoordinateType:x,bindType:u,hasNormalTextureTransform:f}=e;s?(o.attributes.add("tangent","vec4"),o.varyings.add("vTangent","vec4"),t===2?a.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):a.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):a.code.add(r`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),c&&x!==0&&(o.include(Q,e),a.uniforms.add(u===1?new v("normalTexture",l=>l.textureNormal):new q("normalTexture",l=>l.textureNormal)),f&&(a.uniforms.add(new Y("scale",l=>l.scale??b)),a.uniforms.add(new d("normalTextureTransformMatrix",l=>l.normalTextureTransformMatrix??m))),a.code.add(r`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),f&&a.code.add(r`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),a.code.add(r`return tangentSpace * rawNormal;
}`))}function fo(o,e){e.hasColorTextureTransform?(o.varyings.add("colorUV","vec2"),o.vertex.uniforms.add(new d("colorTextureTransformMatrix",a=>a.colorTextureTransformMatrix??m)).code.add(r`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(r`void forwardColorUV(){}`)}function vo(o,e){e.hasNormalTextureTransform&&e.textureCoordinateType!==0?(o.varyings.add("normalUV","vec2"),o.vertex.uniforms.add(new d("normalTextureTransformMatrix",a=>a.normalTextureTransformMatrix??m)).code.add(r`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(r`void forwardNormalUV(){}`)}function xo(o,e){e.hasEmissionTextureTransform&&e.textureCoordinateType!==0?(o.varyings.add("emissiveUV","vec2"),o.vertex.uniforms.add(new d("emissiveTextureTransformMatrix",a=>a.emissiveTextureTransformMatrix??m)).code.add(r`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(r`void forwardEmissiveUV(){}`)}function po(o,e){e.hasOcclusionTextureTransform&&e.textureCoordinateType!==0?(o.varyings.add("occlusionUV","vec2"),o.vertex.uniforms.add(new d("occlusionTextureTransformMatrix",a=>a.occlusionTextureTransformMatrix??m)).code.add(r`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(r`void forwardOcclusionUV(){}`)}function To(o,e){e.hasMetallicRoughnessTextureTransform&&e.textureCoordinateType!==0?(o.varyings.add("metallicRoughnessUV","vec2"),o.vertex.uniforms.add(new d("metallicRoughnessTextureTransformMatrix",a=>a.metallicRoughnessTextureTransformMatrix??m)).code.add(r`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(r`void forwardMetallicRoughnessUV(){}`)}function Vo(o){let e=new K,{attributes:a,vertex:s,fragment:t,varyings:c}=e,{output:x,normalType:u,offsetBackfaces:f,spherical:l,snowCover:p,pbrMode:y,textureAlphaPremultiplied:go,instancedDoublePrecision:ho,hasVertexColors:C,hasVertexTangents:V,hasColorTexture:M,hasNormalTexture:wo,hasNormalTextureTransform:yo,hasColorTextureTransform:Co}=o;if(A(s,o),a.add("position","vec3"),c.add("vpos","vec3",{invariant:!0}),e.include(j,o),e.include(E,o),e.include(z,o),e.include(fo,o),!U(x))return e.include(G,o),e;e.include(vo,o),e.include(xo,o),e.include(po,o),e.include(To,o),h(s,o),e.include(P,o),e.include(R);let T=u===0||u===1;return T&&f&&e.include(O),e.include(uo,o),e.include(S,o),e.include($,o),c.add("vPositionLocal","vec3"),e.include(B,o),e.include(I,o),e.include(k,o),s.uniforms.add(new _("externalColor",i=>i.externalColor,{supportsNaN:!0})),c.add("vcolorExt","vec4"),e.include(so,o),s.include(F),s.include(L),e.include(ho?io:no,o),s.main.add(r`
    forwardNormalizedVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${n(T,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${n(V,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${n(T&&f,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${r.int(N.ignore)} && vcolorExt.a < ${r.float(H)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),e.include(ro,o),t.include(X,o),e.include(W,o),t.include(D,o),e.include(co,o),h(t,o),t.uniforms.add(s.uniforms.get("localOrigin"),new g("ambient",i=>i.ambient),new g("diffuse",i=>i.diffuse),new w("opacity",i=>i.opacity),new w("layerOpacity",i=>i.layerOpacity)),M&&t.uniforms.add(new v("tex",i=>i.texture)),e.include(to,o),t.include(J,o),t.include(lo),e.include(ao,o),t.include(mo,o),oo(t),eo(t),Z(t),t.main.add(r`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${M?r`
            vec4 texColor = texture(tex, ${Co?"colorUV":"vuv0"});
            ${n(go,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${u===2?r`vec3 normal = screenDerivativeNormal(vPositionLocal);`:r`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${n(C,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${n(C,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${wo?`mat3 tangentSpace = computeTangentSpace(${V?"normal":"normal, vpos, vuv0"});
            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${yo?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${l?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${n(p,r`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${y===1||y===2?r`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${n(p,"mrr = applySnowToMRR(mrr, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos, albedo ${n(p,", snow")});
  `),e}var ye=Object.freeze(Object.defineProperty({__proto__:null,build:Vo},Symbol.toStringTag,{value:"Module"}));export{Vo as a,ye as b};
