import{b as ee,c as P,d as oe}from"./chunk-XKELGXMT.js";import{a as Z}from"./chunk-YQSUB555.js";import{e as N}from"./chunk-UFMXMN5C.js";import{a as X}from"./chunk-B6P4AMJH.js";import{a as k,b as L,c as G}from"./chunk-AEY5EYUW.js";import{c as K,d as u,e as Y}from"./chunk-3CPNIH6N.js";import{b as q}from"./chunk-ZHPZPSOY.js";import{e as I}from"./chunk-U4YRRDXO.js";import{a as g}from"./chunk-J6IEXWQ2.js";import{a as J}from"./chunk-R6IIY54E.js";import{a as $}from"./chunk-YZ4IDPMQ.js";import{a as W}from"./chunk-Q5RZKMWM.js";import{a as M}from"./chunk-A634OTHD.js";import{a as Q}from"./chunk-HB3KQGRR.js";import{a as D}from"./chunk-H2ASV3YO.js";import{a as O}from"./chunk-45K2AY22.js";import{a as E}from"./chunk-2XDZ5QNL.js";import{a as e,b as t}from"./chunk-UUP4FBYC.js";import{a as R}from"./chunk-7ZNWJ4EN.js";import{c as H,g as _}from"./chunk-YMQ4BGWF.js";import{a as V,b as y}from"./chunk-RL4CZUGQ.js";import{a as B}from"./chunk-ARRCN5K3.js";function ie(r,o){let{vertex:a,fragment:s}=r;r.include(X,o),a.include(P),a.main.add(e`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),s.main.add(e`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}var C=class extends E{constructor(o,a,s){super(o,"vec4",2,(f,m,v)=>f.setUniform4fv(o,a(m,v),s))}};function pe(r){let o=new Q,{signedDistanceFieldEnabled:a,occlusionTestEnabled:s,horizonCullingEnabled:f,pixelSnappingEnabled:m,hasScreenSizePerspective:v,debugDrawLabelBorder:d,hasVVSize:F,hasVVColor:T,hasRotation:le,occludedFragmentFade:U,sampleSignedDistanceFieldTexelCenter:se}=r;o.include(ee,r),o.vertex.include(q,r);let{occlusionPass:ne,output:p,oitPass:z}=r;if(ne)return o.include(ie,r),o;let{vertex:l,fragment:n}=o;o.include(k),o.include(N,r),o.include(Z,r),s&&o.include(oe),n.include(Y),o.varyings.add("vcolor","vec4"),o.varyings.add("vtc","vec2"),o.varyings.add("vsize","vec2");let c=p===9,S=c&&s;S&&o.varyings.add("voccluded","float"),l.uniforms.add(new W("viewport",i=>i.camera.fullViewport),new $("screenOffset",(i,x)=>y(h,2*i.screenOffset[0]*x.camera.pixelRatio,2*i.screenOffset[1]*x.camera.pixelRatio)),new $("anchorPosition",i=>te(i)),new g("materialColor",i=>i.color),new D("materialRotation",i=>i.rotation),new O("tex",i=>i.texture)),I(l),a&&(l.uniforms.add(new g("outlineColor",i=>i.outlineColor)),n.uniforms.add(new g("outlineColor",i=>re(i)?i.outlineColor:_),new D("outlineSize",i=>re(i)?i.outlineSize:0))),f&&l.uniforms.add(new C("pointDistanceSphere",(i,x)=>{let j=x.camera.eye,w=i.origin;return H(w[0]-j[0],w[1]-j[1],w[2]-j[2],B.radius)})),m&&l.include(P),v&&(L(l),G(l)),d&&o.varyings.add("debugBorderCoords","vec4"),o.attributes.add("uv0","vec2"),o.attributes.add("uvi","vec4"),o.attributes.add("color","vec4"),o.attributes.add("size","vec2"),o.attributes.add("rotation","float"),(F||T)&&o.attributes.add("featureAttribute","vec4"),l.code.add(f?e`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return b > 0.0 && b < a && b * b  > a * c;
}`:e`bool behindHorizon(vec3 posModel) { return false; }`),l.main.add(e`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    if (behindHorizon(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    vec2 inputSize;
    ${t(v,e`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,e`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${t(F,e`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${t(s,e`
    bool visible = testHUDVisibility(posProj);
    if (!visible) {
      vtc = vec2(0.0);
      ${t(d,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
      return;
    }`)}
    ${t(S,e`voccluded = visible ? 0.0 : 1.0;`)}
  `);let ce=e`
      vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0));
      vec2 texSize = vec2(textureSize(tex, 0));
      uv = mix(vec2(1.0), uv / texSize, lessThan(uv, vec2(${fe})));
      quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

      ${t(le,e`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,de=m?a?e`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:e`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:e`posProj += quadOffset;`;l.main.add(e`
    ${ce}
    ${T?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${t(p===10,e`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${e.float(u)};
    ${t(a,`alphaDiscard = alphaDiscard && outlineColor.a < ${e.float(u)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${de}
      gl_Position = posProj;
    }

    vtc = uv;

    ${t(d,e`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),n.uniforms.add(new O("tex",i=>i.texture)),U&&!c&&n.uniforms.add(new J("depthMap",i=>i.mainDepth),new M("occludedOpacity",i=>i.hudOccludedFragmentOpacity));let b=d?e`(isBorder > 0.0 ? 0.0 : ${e.float(u)})`:e.float(u),A=e`
    ${t(d,e`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${t(se,e`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${a?e`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${b} ||
          fillPixelColor.a + outlinePixelColor.a < ${e.float(u)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${t(!c,e`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${b}) {
          discard;
        }

        ${t(!c,e`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:e`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${b}) {
            discard;
          }
          ${t(!c,e`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${t(U&&!c,e`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${t(!c&&d,e`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(p){case 0:case 1:o.outputs.add("fragColor","vec4",0),p===1&&o.outputs.add("fragEmission","vec4",1),z===1&&o.outputs.add("fragAlpha","float",p===1?2:1),n.main.add(e`
        ${A}
        ${t(z===2,e`fragColor.rgb /= fragColor.a;`)}
        ${t(p===1,e`fragEmission = vec4(0.0);`)}
        ${t(z===1,e`fragAlpha = fragColor.a;`)}`);break;case 10:n.main.add(e`
        ${A}
        outputObjectAndLayerIdColor();`);break;case 9:o.include(K,r),n.main.add(e`
        ${A}
        outputHighlight(${t(S,e`voccluded == 1.0`,e`false`)});`)}return o}function re(r){return r.outlineColor[3]>0&&r.outlineSize>0}function te(r){return r.textureIsSignedDistanceField?ue(r.anchorPosition,r.distanceFieldBoundingBox,h):V(h,r.anchorPosition),h}function ue(r,o,a){y(a,r[0]*(o[2]-o[0])+o[0],r[1]*(o[3]-o[1])+o[1])}var h=R(),ae=32e3,fe=e.float(ae),Ze=Object.freeze(Object.defineProperty({__proto__:null,build:pe,calculateAnchorPosition:te,fullUV:ae},Symbol.toStringTag,{value:"Module"}));export{pe as a,te as b,ae as c,Ze as d};
