import{e as g}from"./chunk-UFMXMN5C.js";import{d as l}from"./chunk-XDFBRRP5.js";import{a as y,b as x}from"./chunk-AEY5EYUW.js";import{a as u,b as S,e as z}from"./chunk-U4YRRDXO.js";import{a as c}from"./chunk-2NXJIMQ2.js";import{a as f}from"./chunk-A634OTHD.js";import{a as p}from"./chunk-H2ASV3YO.js";import{a,b as t}from"./chunk-UUP4FBYC.js";import{f as d,h as v}from"./chunk-OBCHEY7W.js";import{a as m}from"./chunk-JJQR3F6K.js";var P=8;function I(n,r){let{vertex:e,attributes:o}=n;e.uniforms.add(new p("intrinsicWidth",i=>i.width));let{hasScreenSizePerspective:s,spherical:b}=r;s?(n.include(y,r),x(e),S(e,r),e.uniforms.add(new u("inverseViewMatrix",(i,w)=>d(O,v(O,w.camera.viewMatrix,i.origin)))),e.code.add(a`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${b?a`normalize(worldPos + localOrigin)`:a`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):e.code.add(a`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),r.hasVVSize?(o.add("sizeFeatureAttribute","float"),e.uniforms.add(new c("vvSizeMinSize",i=>i.vvSize.minSize),new c("vvSizeMaxSize",i=>i.vvSize.maxSize),new c("vvSizeOffset",i=>i.vvSize.offset),new c("vvSizeFactor",i=>i.vvSize.factor),new c("vvSizeFallback",i=>i.vvSize.fallback)),e.code.add(a`
    float getSize(${t(s,"vec3 pos")}) {
      float size = isnan(sizeFeatureAttribute)
        ? vvSizeFallback.x
        : intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;

      return ${t(s,"applyLineSizeScreenSizePerspective(size, pos)","size")};
    }
    `)):(o.add("size","float"),e.code.add(a`
    float getSize(${t(s,"vec3 pos")}) {
      float fullSize = intrinsicWidth * size;
      return ${t(s,"applyLineSizeScreenSizePerspective(fullSize, pos)","fullSize")};
    }
    `)),r.hasVVOpacity?(o.add("opacityFeatureAttribute","float"),e.constants.add("vvOpacityNumber","int",8),e.uniforms.add(new l("vvOpacityValues",i=>i.vvOpacity.values,P),new l("vvOpacityOpacities",i=>i.vvOpacity.opacityValues,P),new p("vvOpacityFallback",i=>i.vvOpacity.fallback,{supportsNaN:!0})),e.code.add(a`
    float interpolateOpacity(float value) {
      if (value <= vvOpacityValues[0]) {
        return vvOpacityOpacities[0];
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
        }
      }

      return vvOpacityOpacities[vvOpacityNumber - 1];
    }

    vec4 applyOpacity(vec4 color) {
      if (isnan(opacityFeatureAttribute)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${t(r.hasVVColor,"color","vec4(color.rgb, vvOpacityFallback)")};
      }

      return vec4(color.rgb, interpolateOpacity(opacityFeatureAttribute));
    }
    `)):e.code.add(a`vec4 applyOpacity(vec4 color) {
return color;
}`),r.hasVVColor?(n.include(g,r),o.add("colorFeatureAttribute","float"),e.code.add(a`vec4 getColor() {
vec4 color = interpolateVVColor(colorFeatureAttribute);
if (isnan(color.r)) {
return vec4(0);
}
return applyOpacity(color);
}`)):(o.add("color","vec4"),e.code.add(a`vec4 getColor() {
return applyOpacity(color);
}`))}var O=m();function B(n){n.vertex.code.add("#define noPerspectiveWrite(x, w) (x * w)")}function H(n){n.fragment.code.add("#define noPerspectiveRead(x) (x * gl_FragCoord.w)")}var h=64,F=h/2,V=F/5,k=h/V,Z=.25;function oe(n,r){let e=n.vertex,o=r.hasScreenSizePerspective;z(e),e.uniforms.get("markerScale")==null&&e.constants.add("markerScale","float",1),e.constants.add("markerSizePerLineWidth","float",k).code.add(a`
  float getLineWidth(${t(o,"vec3 pos")}) {
     return max(getSize(${t(o,"pos")}), 1.0) * pixelRatio;
  }

  float getScreenMarkerSize(float lineWidth) {
    return markerScale * markerSizePerLineWidth * lineWidth;
  }
  `),r.space===2&&(e.constants.add("maxSegmentLengthFraction","float",.45),e.uniforms.add(new f("perRenderPixelRatio",s=>s.camera.perRenderPixelRatio)),e.code.add(a`
  bool areWorldMarkersHidden(vec3 pos, vec3 other) {
    vec3 midPoint = mix(pos, other, 0.5);
    float distanceToCamera = length(midPoint);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    float worldMarkerSize = getScreenMarkerSize(getLineWidth(${t(o,"pos")})) * screenToWorldRatio;
    float segmentLen = length(pos - other);
    return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
  }

  float getWorldMarkerSize(vec3 pos) {
    float distanceToCamera = length(pos);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    return getScreenMarkerSize(getLineWidth(${t(o,"pos")})) * screenToWorldRatio;
  }
  `))}export{I as a,B as b,H as c,h as d,F as e,Z as f,oe as g};
