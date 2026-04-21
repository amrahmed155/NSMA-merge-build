import{a as J,b as G,c as u,g as q}from"./chunk-TYBCPT3J.js";import{a as M}from"./chunk-XPAMXA62.js";import{a as B}from"./chunk-V3G5GB4X.js";import{a as $}from"./chunk-YQSUB555.js";import{a as U}from"./chunk-B6P4AMJH.js";import{d as v,e as k}from"./chunk-3CPNIH6N.js";import{a as O}from"./chunk-ZHPZPSOY.js";import{b as V,c as j,e as T}from"./chunk-U4YRRDXO.js";import{a as _}from"./chunk-B7VK56II.js";import{a as m}from"./chunk-J6IEXWQ2.js";import{a as N}from"./chunk-Q5RZKMWM.js";import{a as D}from"./chunk-A634OTHD.js";import{a as E}from"./chunk-24Z55BQA.js";import{a as H}from"./chunk-HB3KQGRR.js";import{a as l}from"./chunk-H2ASV3YO.js";import{a as I}from"./chunk-45K2AY22.js";import{a as e,b as c}from"./chunk-UUP4FBYC.js";import{a as x,g as W}from"./chunk-YMQ4BGWF.js";import{b as h}from"./chunk-KZKWOEFD.js";function ae(t){return t.pattern.map(o=>Math.round(o*t.pixelRatio))}function K(t){if(t==null)return 1;let o=ae(t);return Math.floor(o.reduce((p,n)=>p+n))}function Z(t){return t==null?W:t.length===4?t:h(re,t[0],t[1],t[2],1)}var re=x();function Q(t,o){if(!o.stippleEnabled)return void t.fragment.code.add(e`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);let p=!(o.draped&&o.stipplePreferContinuous),{vertex:n,fragment:i}=t;o.draped||(V(n,o),n.uniforms.add(new D("worldToScreenPerDistanceRatio",({camera:a})=>1/a.perScreenPixelRatio)).code.add(e`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),t.varyings.add("vStippleDistance","float"),t.varyings.add("vStippleDistanceLimits","vec2"),t.varyings.add("vStipplePatternStretch","float"),n.code.add(e`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${e.float(ne)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),T(n),n.code.add(e`
    vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {

      // First check if the segment is long enough to support fully screen space patterns.
      // Force sparse mode for segments that are very large in screen space even if it is not allowed,
      // to avoid imprecision from calculating with large floats.
      if (segmentLengthPseudoScreen >= ${p?"patternLength":"1e4"}) {
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        float stretch = repetitions / flooredRepetitions;

        // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
        // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
        vStipplePatternStretch = max(0.75, stretch);

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),i.uniforms.add(new I("stipplePatternTexture",a=>a.stippleTexture),new l("stipplePatternPixelSizeInv",a=>1/P(a))),o.stippleOffColorEnabled&&i.uniforms.add(new m("stippleOffColor",a=>Z(a.stippleOffColor))),t.include(u),i.code.add(e`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = noPerspectiveRead(clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y));
float lineSizeInv = noPerspectiveRead(vLineSizeInv);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * stipplePatternPixelSizeInv * lineSizeInv;
u = fract(u);
float sdf = texture(stipplePatternTexture, vec2(u, 0.5)).r;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha(float lineWidth) {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * lineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),i.code.add(e`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${c(!o.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${o.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `)}function P(t){let o=t.stipplePattern;return o?K(t.stipplePattern)/o.pixelRatio:1}var ne=.4;function X(t,o){if(!o.hasAnimation)return;let{attributes:p,varyings:n,vertex:i,fragment:a}=t;p.add("timeStamps","vec4"),n.add("vTimeStamp","float"),n.add("vFirstTime","float"),n.add("vLastTime","float"),n.add("vTransitionType","float"),i.main.add(e`vTimeStamp = timeStamps.x;
vFirstTime = timeStamps.y;
vLastTime = timeStamps.z;
vTransitionType = timeStamps.w;`);let{animation:S}=o;S===3&&a.constants.add("decayRate","float",2.3),a.code.add(e`
    float getTrailOpacity(float x) {
      ${se(S)}
    }`),a.uniforms.add(new l("timeElapsed",s=>s.timeElapsed),new l("trailLength",s=>s.trailLength),new l("speed",s=>s.animationSpeed),new m("timingOptions",s=>h(le,s.startTime,s.endTime,s.fadeInTime,s.fadeOutTime))),a.code.add(e`float fadeIn(float x) {
return smoothstep(0.0, timingOptions[2], x);
}
float fadeOut(float x) {
return isinf(timingOptions[3]) ? 1.0 : smoothstep(timingOptions[3], 0.0, x);
}`),a.code.add(e`vec4 animate(vec4 color) {
float startTime = timingOptions[0];
float endTime = timingOptions[1];
float totalTime = vLastTime - vFirstTime;
float actualEndTime = int(vTransitionType) == 2 ? min(endTime, startTime + vLastTime / speed) : endTime;
vec4 animatedColor = color;
if (speed == 0.0) {
animatedColor.a *= getTrailOpacity((totalTime - (vTimeStamp - vFirstTime)) / trailLength);
animatedColor.a *= isinf(actualEndTime) ? 1.0 : fadeOut(timeElapsed - actualEndTime);
animatedColor.a *= fadeIn(timeElapsed - startTime);
return animatedColor;
}
float relativeStartTime = mod(startTime, totalTime);
float vHeadRelativeToFirst = mod((timeElapsed - relativeStartTime) * speed - vFirstTime, totalTime);
float vRelativeToHead = vHeadRelativeToFirst + vFirstTime - vTimeStamp;
bool inPreviousCycle = vRelativeToHead < 0.0;
vRelativeToHead += inPreviousCycle ? totalTime : 0.0;
float vAbsoluteTime = timeElapsed - vRelativeToHead / speed;
if (vAbsoluteTime > actualEndTime) {
vRelativeToHead = (timeElapsed - relativeStartTime) * speed - vTimeStamp;
vAbsoluteTime = timeElapsed - vRelativeToHead / speed;
}
animatedColor *= step(startTime, vAbsoluteTime);
animatedColor *= step(vAbsoluteTime, actualEndTime);
animatedColor.a *= isinf(actualEndTime) ? 1.0 : fadeOut(timeElapsed - actualEndTime);
animatedColor.a *= inPreviousCycle ? fadeOut(vHeadRelativeToFirst / speed) : 1.0;
animatedColor.a *= getTrailOpacity(vRelativeToHead / trailLength);
animatedColor.a *= int(vTransitionType) == 0 ? fadeIn(vAbsoluteTime - startTime) : 1.0;
animatedColor.a *= fadeIn(vTimeStamp - vFirstTime);
return animatedColor;
}`)}function se(t){switch(t){case 2:return"return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;";case 3:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return"return 1.0;"}}var le=x();var y=1;function pe(t){let o=new H,{attributes:p,varyings:n,vertex:i,fragment:a}=o,{applyMarkerOffset:S,draped:s,output:C,capType:R,stippleEnabled:d,falloffEnabled:w,roundJoins:Y,wireframe:b,innerColorEnabled:ee,hasAnimation:te,hasScreenSizePerspective:g}=t;a.include(M),o.include(J,t),o.include(Q,t),o.include($,t),o.include(U,t),o.include(X,t);let z=S&&!s;z&&(i.uniforms.add(new l("markerScale",r=>r.markerScale)),o.include(q,{space:2,hasScreenSizePerspective:g})),j(i,t),i.uniforms.add(new _("inverseProjectionMatrix",r=>r.camera.inverseProjectionMatrix),new E("nearFar",r=>r.camera.nearFar),new l("miterLimit",r=>r.join!=="miter"?0:r.miterLimit),new N("viewport",r=>r.camera.fullViewport)),i.constants.add("LARGE_HALF_FLOAT","float",65500),p.add("position","vec3"),p.add("previousDelta","vec4"),p.add("nextDelta","vec4"),p.add("lineParameters","vec2"),p.add("u0","float"),n.add("vColor","vec4"),n.add("vpos","vec3",{invariant:!0}),n.add("vLineDistance","float"),n.add("vLineWidth","float");let F=d;F&&n.add("vLineSizeInv","float");let f=R===2,A=d&&f,L=w||A;L&&n.add("vLineDistanceNorm","float"),f&&(n.add("vSegmentSDF","float"),n.add("vReverseSegmentSDF","float")),i.code.add(e`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),i.code.add(e`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),i.code.add(e`void clip(
inout vec4 pos,
inout vec4 prev,
inout vec4 next,
bool isStartVertex
) {
float vnp = nearFar[0] * 0.99;
if (pos.z > -nearFar[0]) {
if (!isStartVertex) {
if (prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if (next.z < -nearFar[0]) {
pos = mix(pos, next, interp(vnp, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, interp(vnp, next, pos));
}
}
}`),T(i),i.constants.add("aaWidth","float",d?0:1).main.add(e`bool isStartVertex = abs(abs(lineParameters.y) - 3.0) == 1.0;
vec3 prevPosition = position + previousDelta.xyz * previousDelta.w;
vec3 nextPosition = position + nextDelta.xyz * nextDelta.w;
float coverage = 1.0;
if (lineParameters.y == 0.0) {
gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
}
else {
vec4 pos  = view * vec4(position, 1.0);
vec4 prev = view * vec4(prevPosition, 1.0);
vec4 next = view * vec4(nextPosition, 1.0);
bool isJoin = abs(lineParameters.y) < 3.0;`),z&&i.main.add(e`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos.xyz, other.xyz);
if (!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos.xyz) * 0.5;
}`),o.include(G),i.main.add(e`
      clip(pos, prev, next, isStartVertex);

      vec3 clippedPos = pos.xyz;
      vec3 clippedCenter = mix(pos.xyz, isStartVertex ? next.xyz : prev.xyz, 0.5);

      forwardViewPosDepth(pos.xyz);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);

      vec2 left = (pos.xy - prev.xy);
      vec2 right = (next.xy - pos.xy);

      float leftLen = length(left);
      float rightLen = length(right);

      float lineSize = getSize(${c(g,"clippedPos")});
      ${c(d&&g,"float patternLineSize = getSize(clippedCenter);")}
      ${c(d&&!g,"float patternLineSize = lineSize;")}

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = noPerspectiveWrite(lineWidth, pos.w);
      ${F?e`vLineSizeInv = noPerspectiveWrite(1.0 / lineSize, pos.w);`:""}
  `),(d||f)&&i.main.add(e`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${f?e`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),i.main.add(e`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * lineParameters.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = perpendicular(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
float subdivisionFactor = lineParameters.x;
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),Y?i.main.add(e`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${d?e`min(1.0, subdivisionFactor * ${e.float((y+2)/(y+1))})`:e`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(lineParameters.y) * factor * rotationAngle);
      `):i.main.add(e`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`);let ie=R!==0;return i.main.add(e`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${ie?e`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),i.main.add(e`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(lineParameters.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = noPerspectiveWrite(sign(lineParameters.y), pos.w);

    vLineDistance = lineWidth * lineDistNorm;
    ${L?e`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),f&&i.main.add(e`vec2 segmentDir = normalize(segment);
vSegmentSDF = noPerspectiveWrite((isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir)), pos.w);
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir)), pos.w);`),d&&(s?i.uniforms.add(new D("worldToScreenRatio",r=>1/r.screenToPCSRatio)):i.main.add(e`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),i.main.add(e`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),s?i.main.add(e`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = u0 * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):i.main.add(e`float startPseudoScreen = mix(u0, u0 - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),i.uniforms.add(new l("stipplePatternPixelSize",r=>P(r))),i.main.add(e`float patternLength = patternLineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits = noPerspectiveWrite(vStippleDistanceLimits, pos.w);
vStippleDistance = noPerspectiveWrite(vStippleDistance, pos.w);
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),i.main.add(e`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a = noPerspectiveWrite(vColor.a * coverage, pos.w);

      ${b&&!s?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),o.fragment.include(O,t),o.include(B,t),a.include(k),a.main.add(e`discardBySlice(vpos);
discardByTerrainDepth();`),o.include(u),a.main.add(e`
    float lineWidth = noPerspectiveRead(vLineWidth);
    float lineDistance = noPerspectiveRead(vLineDistance);
    ${c(L,e`float lineDistanceNorm = noPerspectiveRead(vLineDistanceNorm);`)}
  `),b?a.main.add(e`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(f&&a.main.add(e`
        float sdf = noPerspectiveRead(min(vSegmentSDF, vReverseSegmentSDF));
        vec2 fragmentPosition = vec2(min(sdf, 0.0), lineDistance);

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - lineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${e.float(v)}) {
          discard;
        }
      `),A?a.main.add(e`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        lineDistanceNorm
      );
      float stippleRadius = length(stipplePosition * lineWidth);
      float stippleCapSDF = (stippleRadius - lineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${e.float(v)}, stippleCoverage);
      `):a.main.add(e`float stippleAlpha = getStippleAlpha(lineWidth);`),C!==10&&a.main.add(e`discardByStippleAlpha(stippleAlpha, ${e.float(v)});`),o.include(u),a.uniforms.add(new m("intrinsicColor",r=>r.color)).main.add(e`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),ee&&a.uniforms.add(new m("innerColor",r=>r.innerColor??r.color),new l("innerWidth",(r,oe)=>r.innerWidth*oe.camera.pixelRatio)).main.add(e`float distToInner = abs(lineDistance) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),a.main.add(e`vec4 finalColor = blendStipple(color, stippleAlpha);`),w&&(a.uniforms.add(new l("falloff",r=>r.falloff)),a.main.add(e`finalColor.a *= pow(max(0.0, 1.0 - abs(lineDistanceNorm)), falloff);`)),d||a.main.add(e`float featherStartDistance = max(lineWidth - 2.0, 0.0);
float value = abs(lineDistance);
float feather = (value - featherStartDistance) / (lineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`),te&&a.main.add(e`
        finalColor = animate(finalColor);

        ${c(C!==10,e`
            if (finalColor.a <= ${e.float(v)}) {
              discard;
            }`)}
      `)),a.main.add(e`outputColorHighlightOID(finalColor, vpos, finalColor.rgb);`),o}var pt=Object.freeze(Object.defineProperty({__proto__:null,build:pe,ribbonlineNumRoundJoinSubdivisions:y},Symbol.toStringTag,{value:"Module"}));export{y as a,pe as b,pt as c};
