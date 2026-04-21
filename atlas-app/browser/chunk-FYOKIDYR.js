import{a as D}from"./chunk-5RRAPQXN.js";import{b as X}from"./chunk-G6GAL7SU.js";import{a as H,b as u,c as p,f as W,g as Z,i as G}from"./chunk-WTP7KYQK.js";import{g as E}from"./chunk-MLOQ5YF7.js";import{a as J}from"./chunk-V3G5GB4X.js";import{f as _,r as q}from"./chunk-LPU3WG6T.js";import{a as x}from"./chunk-Y6VWJBXU.js";import{a as L}from"./chunk-YQSUB555.js";import{a as $}from"./chunk-B6P4AMJH.js";import{c as A,d as s,e as Q}from"./chunk-3CPNIH6N.js";import{a as m}from"./chunk-ZHPZPSOY.js";import{b as O,c as k}from"./chunk-U4YRRDXO.js";import{a as c}from"./chunk-B7VK56II.js";import{a as f}from"./chunk-J6IEXWQ2.js";import{a as y}from"./chunk-YQXWXQD3.js";import{a as v}from"./chunk-R6IIY54E.js";import{a as U}from"./chunk-YZ4IDPMQ.js";import{a as n}from"./chunk-A634OTHD.js";import{a as B}from"./chunk-WDNWHRUY.js";import{a as T}from"./chunk-24Z55BQA.js";import{a as V}from"./chunk-HB3KQGRR.js";import{a as w}from"./chunk-H2ASV3YO.js";import{a as C}from"./chunk-45K2AY22.js";import{a as N}from"./chunk-2XDZ5QNL.js";import{a as o}from"./chunk-UUP4FBYC.js";import{a as R}from"./chunk-7ZNWJ4EN.js";import{a as j}from"./chunk-YMQ4BGWF.js";import{b as I}from"./chunk-KZKWOEFD.js";import{c as F}from"./chunk-7VB5JZ2H.js";import{b}from"./chunk-RL4CZUGQ.js";import{a as z}from"./chunk-ARRCN5K3.js";function K(a){a.code.add(o`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function Y(a){a.code.add(o`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}function P(a){a.fragment.uniforms.add(new C("texWaveNormal",e=>e.waveNormal),new C("texWavePerturbation",e=>e.wavePerturbation),new f("waveParams",e=>I(ae,e.waveStrength,e.waveTextureRepeat,e.flowStrength,e.flowOffset)),new U("waveDirection",e=>b(ie,e.waveDirection[0]*e.waveVelocity,e.waveDirection[1]*e.waveVelocity))),a.fragment.include(K),a.fragment.code.add(o`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`)}var ae=j(),ie=R();function ee(a,e){if(!e.screenSpaceReflections)return;let t=a.fragment;t.include(B),t.uniforms.add(new T("nearFar",r=>r.camera.nearFar),new v("depthMap",r=>r.depth?.attachment),new c("proj",r=>r.camera.projectionMatrix),new n("invResolutionHeight",r=>1/r.camera.height),new c("reprojectionMatrix",r=>r.ssr.reprojectionMatrix)).code.add(o`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${e.highStepCount?"150":"75"};

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);
    float dDepthBefore = 0.0;

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        float weight = dDepth / (dDepth - dDepthBefore);
        vec2 Pf = mix(P - dP, P, 1.0 - weight);
        if (abs(Pf.y - projectedCoordStart.y) > invResolutionHeight) {
          return vec3(Pf, depth);
        }
        else {
          return vec3(P, depth);
        }
      }

      // continue with ray marching
      P = clamp(P + dP, vec2(0.0), vec2(0.999));
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
      dDepthBefore = dDepth;
    }
    return vec3(P, 0.0);
  }
  `)}function oe(a){a.fragment.uniforms.add(new n("cloudAbsorption",e=>e.clouds.absorption),new n("cloudCoverage",e=>e.clouds.coverage)).code.add(o`vec4 lookupCloudsFromTextureArray(sampler2DArray cubeMap, vec3 rayDir) {
int faceIndex;
vec2 uv;
if(rayDir.z <= 0.0) {
float hazeFactor = smoothstep(-0.01, mix(0.0, 0.075, cloudCoverage), abs(dot(rayDir, vec3(0, 0, 1))));
float shading = clamp(1.0 - cloudAbsorption, 0.6, 1.0) * (1.0 - hazeFactor);
float totalTransmittance = hazeFactor;
return vec4(shading, totalTransmittance, shading, totalTransmittance);
}
if (abs(rayDir.x) >= abs(rayDir.y) && abs(rayDir.x) >= abs(rayDir.z)) {
if(rayDir.x > 0.0) {
faceIndex = 0;
uv = rayDir.yz / rayDir.x;
uv = vec2(-uv.x, uv.y);
} else {
faceIndex = 1;
uv = rayDir.yz / rayDir.x;
uv = vec2(-uv.x, -uv.y);
}
} else if (abs(rayDir.y) >= abs(rayDir.x) && abs(rayDir.y) >= abs(rayDir.z)) {
if(rayDir.y > 0.0) {
faceIndex = 2;
uv = rayDir.xz / rayDir.y;
} else {
faceIndex = 3;
uv = rayDir.xz / rayDir.y;
uv = vec2(uv.x, -uv.y);
}
} else {
if(rayDir.y < 0.0) {
faceIndex = 4;
uv = rayDir.xy / rayDir.z;
uv = vec2(uv.x, -uv.y);
} else {
faceIndex = 5;
uv = rayDir.xy / rayDir.z;
uv = vec2(uv.x, -uv.y);
}
}
uv = 0.5 * (uv + 1.0);
if(faceIndex != 5) {
uv.y = uv.y - 0.5;
}
uv.y = uv.y * 2.0;
vec4 s = texture(cubeMap, vec3(uv, float(faceIndex)));
return s;
}`)}var h=class extends N{constructor(e,t){super(e,"sampler2DArray",0,(r,d)=>r.bindTexture(e,t(d)))}};function te(a){let e=a.fragment;e.constants.add("radiusCloudsSquared","float",ne).code.add(o`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos) {
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusCloudsSquared;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
return (cameraPosition + dir * pointIntDist) - spherePos;
}`),e.uniforms.add(new n("radiusCurvatureCorrection",({clouds:i})=>i.parallax.radiusCurvatureCorrection)).code.add(o`vec3 correctForPlanetCurvature(vec3 dir) {
dir.z = dir.z * (1.0 - radiusCurvatureCorrection) + radiusCurvatureCorrection;
return dir;
}`),e.code.add(o`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec) {
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),u(e),p(e);let t=F(.28,.175,.035);e.constants.add("RIM_COLOR","vec3",t),e.code.add(o`
    vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds) {
      float upDotLight = dot(cameraPosition, mainLightDirection);
      float dirDotLight = max(dot(worldSpaceRay, mainLightDirection), 0.0);
      float sunsetTransition = clamp(pow(max(upDotLight, 0.0), ${o.float(.3)}), 0.0, 1.0);

      // Base color of the clouds that depends on lighting of the sun and sky
      vec3 ambientLight = calculateAmbientIrradiance(cameraPosition,  0.0);
      vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
      vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));

      // Rim light around the edge of the clouds simulating scattering of the direct lun light
      float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
      float rimLightIntensity = 0.5 + 0.5 * pow(max(upDotLight, 0.0), 0.35);
      vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, ${o.float(140)})) * scatteringMod;

      // Brighten the clouds around the sun at the sunsets
      float additionalLight = ${o.float(.2)} * pow(dirDotLight, ${o.float(10)}) * (1. - pow(sunsetTransition, ${o.float(.3)})) ;

      return vec3(baseCloudColor * (1.0 + additionalLight) + directSunScattering);
    }
  `),a.include(oe),e.uniforms.add(new x("readChannelsRG",i=>i.clouds.readChannels===0),new h("cubeMap",i=>i.clouds.data?.cubeMap?.colorTexture)).code.add(o`vec4 sampleCloud(vec3 rayDir, bool readOtherChannel) {
vec4 s = lookupCloudsFromTextureArray(cubeMap, rayDir);
bool readRG = readChannelsRG ^^ readOtherChannel;
s = readRG ? vec4(vec3(s.r), s.g) : vec4(vec3(s.b), s.a);
return length(s) == 0.0 ? vec4(s.rgb, 1.0) : s;
}`),e.uniforms.add(new y("anchorPoint",i=>i.clouds.parallax.anchorPoint),new y("anchorPointNew",i=>i.clouds.parallaxNew.anchorPoint),new c("rotationClouds",i=>i.clouds.parallax.transform),new c("rotationCloudsNew",i=>i.clouds.parallaxNew.transform),new n("cloudsOpacity",i=>i.clouds.opacity),new n("fadeFactor",i=>i.clouds.fadeFactor),new x("crossFade",i=>i.clouds.fadeState===3)).code.add(o`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition) {
vec3 intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPoint);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = sampleCloud(worldRayRotatedCorrected, crossFade);
vec3 cameraPositionN = normalize(cameraPosition);
vec4 cloudColor = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
if(crossFade) {
intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPointNew);
worldRayRotated = rotateDirectionToAnchorPoint(rotationCloudsNew, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = sampleCloud(worldRayRotatedCorrected, false);
vec4 cloudColorNew = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorNew, fadeFactor);
}
float totalTransmittance = length(cloudColor.rgb) == 0.0 ?
1.0 :
clamp(cloudColor.a * cloudsOpacity + (1.0 - cloudsOpacity), 0.0 , 1.0);
return vec4(cloudColor.rgb, totalTransmittance);
}`)}var ne=(z.radius+X)**2;function re(a,e){let t=a.fragment;t.include(W,e),t.include(q),t.include(Y),e.cloudReflections&&a.include(te),a.include(ee,e),t.include(Z,e),t.constants.add("fresnelSky","vec3",[.02,1,15]),t.constants.add("fresnelMaterial","vec2",[.02,.1]),t.constants.add("roughness","float",.015),t.constants.add("foamIntensityExternal","float",1.7),t.constants.add("ssrIntensity","float",.65),t.constants.add("ssrHeightFadeStart","float",3e5),t.constants.add("ssrHeightFadeEnd","float",5e5),t.constants.add("waterDiffusion","float",.92),t.constants.add("waterSeaColorMod","float",.8),t.constants.add("correctionViewingPowerFactor","float",.4),t.constants.add("skyZenitColor","vec3",[.52,.68,.9]),t.constants.add("skyColor","vec3",[.67,.79,.9]),t.constants.add("cloudFresnelModifier","vec2",[1.2,.01]),t.code.add(o`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),t.uniforms.add(new n("lightingSpecularStrength",r=>r.lighting.mainLight.specularStrength),new n("lightingEnvironmentStrength",r=>r.lighting.mainLight.environmentStrength)),t.code.add(o`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
float NdotL = clamp(dot(n, l), 0.0, 1.0);
specular = lightingSpecularStrength * NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),e.cloudReflections&&t.uniforms.add(new n("cloudsOpacity",r=>r.clouds.opacity)).code.add(o`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y * cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * cloudsOpacity;`),e.screenSpaceReflections?t.uniforms.add(new c("view",r=>r.camera.viewMatrix),new v("lastFrameColorTexture",r=>r.ssr.lastFrameColor?.getTexture()),new n("fadeFactorSSR",r=>r.ssr.fadeFactor)).code.add(o`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view * vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3 * dCoords.y), 0.0, 1.0) * heightMod * fadeFactorSSR;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture(lastFrameColorTexture, reprojectedCoordinate).xyz) *
reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod * 0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor +
reflSea * seaColorMod + specular + foam);`):t.code.add(o`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),e.cloudReflections?e.screenSpaceReflections?t.code.add(o`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):t.code.add(o`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):t.code.add(o`return waterRenderedColor;
}`)}function se(a){let e=new V,{vertex:t,fragment:r,varyings:d}=e,{output:g,draped:S,receiveShadows:M}=a;k(t,a),e.include(E),e.attributes.add("position","vec3"),e.attributes.add("uv0","vec2");let i=new f("waterColor",l=>l.color);if(d.add("vpos","vec3",{invariant:!0}),t.uniforms.add(i),_(g)){if(S)return t.main.add(o`
      if (waterColor.a < ${o.float(s)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      vpos = position;
      gl_Position = transformPosition(proj, view, vpos);`),r.uniforms.add(i),r.main.add(o`fragColor = waterColor;`),e;e.include(D,a),d.add("vuv","vec2"),d.add("vnormal","vec3"),d.add("vtbnMatrix","mat3"),t.main.add(o`
      if (waterColor.a < ${o.float(s)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      vuv = uv0;
      vpos = position;

      vnormal = getLocalUp(vpos, localOrigin);
      vtbnMatrix = getTBNMatrix(vnormal);
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);

      gl_Position = transformPosition(proj, view, vpos);
      forwardLinearDepthToReadShadowMap();`)}switch(e.include(G,a),e.include($,a),g){case 0:case 1:e.include(H,{pbrMode:0,lightingSphericalHarmonicsOrder:2}),e.include(P),e.include(re,a),r.include(m,a),e.include(J,a),r.include(Q),O(r,a),u(r),p(r),r.uniforms.add(i,new w("timeElapsed",({timeElapsed:l})=>l),t.uniforms.get("view"),t.uniforms.get("localOrigin")).main.add(o`
        discardBySlice(vpos);
        discardByTerrainDepth();
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${M?o`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view * vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, mainLightDirection, waterColor.rgb, mainLightIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        fragColor = delinearizeGamma(final);
        outputColorHighlightOID(fragColor, vpos, final.rgb);`);break;case 3:e.include(D,a),e.include(P,a),r.include(m,a),d.add("vuv","vec2"),t.main.add(o`
        if (waterColor.a < ${o.float(s)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        gl_Position = transformPosition(proj, view, vpos);`),r.uniforms.add(new w("timeElapsed",({timeElapsed:l})=>l)).main.add(o`discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
fragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);`);break;case 9:e.include(A,a),t.main.add(o`
        if (waterColor.a < ${o.float(s)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);`),r.include(m,a),r.main.add(o`discardBySlice(vpos);
calculateOcclusionAndOutputHighlight();`);break;case 10:e.include(L,a),t.main.add(o`
        if (waterColor.a < ${o.float(s)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
        forwardObjectAndLayerIdColor();`),r.include(m,a),r.main.add(o`discardBySlice(vpos);
outputObjectAndLayerIdColor();`)}return e}var Fo=Object.freeze(Object.defineProperty({__proto__:null,build:se},Symbol.toStringTag,{value:"Module"}));export{se as a,Fo as b};
