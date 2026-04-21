import{e as D}from"./chunk-MLOQ5YF7.js";import{a as b}from"./chunk-XPAMXA62.js";import{f as M}from"./chunk-LPU3WG6T.js";import{b as N}from"./chunk-3CPNIH6N.js";import{a as c}from"./chunk-YQXWXQD3.js";import{a as i}from"./chunk-Q5RZKMWM.js";import{a as H}from"./chunk-A634OTHD.js";import{a as l}from"./chunk-2XDZ5QNL.js";import{a as t,b as h}from"./chunk-UUP4FBYC.js";import{c as w}from"./chunk-E7V7N6Q3.js";import{a as x}from"./chunk-YMQ4BGWF.js";import{b as s}from"./chunk-KZKWOEFD.js";import{a as m}from"./chunk-7VB5JZ2H.js";function K(e,o){let n=e.fragment,r=o.lightingSphericalHarmonicsOrder!==void 0?o.lightingSphericalHarmonicsOrder:2;r===0?(n.uniforms.add(new c("lightingAmbientSH0",({lighting:a})=>w(R,a.sh.r[0],a.sh.g[0],a.sh.b[0]))),n.code.add(t`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):r===1?(n.uniforms.add(new i("lightingAmbientSH_R",({lighting:a})=>s(d,a.sh.r[0],a.sh.r[1],a.sh.r[2],a.sh.r[3])),new i("lightingAmbientSH_G",({lighting:a})=>s(d,a.sh.g[0],a.sh.g[1],a.sh.g[2],a.sh.g[3])),new i("lightingAmbientSH_B",({lighting:a})=>s(d,a.sh.b[0],a.sh.b[1],a.sh.b[2],a.sh.b[3]))),n.code.add(t`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):r===2&&(n.uniforms.add(new c("lightingAmbientSH0",({lighting:a})=>w(R,a.sh.r[0],a.sh.g[0],a.sh.b[0])),new i("lightingAmbientSH_R1",({lighting:a})=>s(d,a.sh.r[1],a.sh.r[2],a.sh.r[3],a.sh.r[4])),new i("lightingAmbientSH_G1",({lighting:a})=>s(d,a.sh.g[1],a.sh.g[2],a.sh.g[3],a.sh.g[4])),new i("lightingAmbientSH_B1",({lighting:a})=>s(d,a.sh.b[1],a.sh.b[2],a.sh.b[3],a.sh.b[4])),new i("lightingAmbientSH_R2",({lighting:a})=>s(d,a.sh.r[5],a.sh.r[6],a.sh.r[7],a.sh.r[8])),new i("lightingAmbientSH_G2",({lighting:a})=>s(d,a.sh.g[5],a.sh.g[6],a.sh.g[7],a.sh.g[8])),new i("lightingAmbientSH_B2",({lighting:a})=>s(d,a.sh.b[5],a.sh.b[6],a.sh.b[7],a.sh.b[8]))),n.code.add(t`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),o.pbrMode!==1&&o.pbrMode!==2||n.code.add(t`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var R=m(),d=x();function G(e){e.uniforms.add(new c("mainLightDirection",o=>o.lighting.mainLight.direction))}function V(e){e.uniforms.add(new c("mainLightIntensity",o=>o.lighting.mainLight.intensity))}function Q(e){G(e.fragment),V(e.fragment),e.fragment.code.add(t`vec3 applyShading(vec3 shadingNormal, float shadow) {
float dotVal = clamp(dot(shadingNormal, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function y(e){e.code.add(t`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.code.add(t`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.code.add(t`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function na(e,o){e.include(b),o.pbrMode!==1&&o.pbrMode!==2&&o.pbrMode!==5&&o.pbrMode!==6||(e.code.add(t`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),e.code.add(t`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),o.pbrMode!==1&&o.pbrMode!==2||(e.include(y),e.code.add(t`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),e.code.add(t`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`))}function ia(e,o){e.include(b),e.code.add(t`
  struct PBRShadingWater {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${o.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),e.code.add(t`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),e.code.add(t`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),e.code.add(t`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),e.code.add(t`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function A(e,o){let n=M(o.output)&&o.receiveShadows;n&&D(e,!0),e.vertex.code.add(t`
    void forwardLinearDepthToReadShadowMap() { ${h(n,"forwardLinearDepth(gl_Position.w);")} }
  `)}var f=class extends l{constructor(o,n,r,a){super(o,"mat4",2,(p,v,S,T)=>p.setUniformMatrices4fv(o,n(v,S,T),a),r)}};var g=class extends l{constructor(o,n,r,a){super(o,"mat4",1,(p,v,S)=>p.setUniformMatrices4fv(o,n(v,S),a),r)}};function _(e){e.fragment.uniforms.add(new g("shadowMapMatrix",(o,n)=>n.shadowMap.getShadowMapMatrices(o.origin),4)),z(e)}function L(e){e.fragment.uniforms.add(new f("shadowMapMatrix",(o,n)=>n.shadowMap.getShadowMapMatrices(o.origin),4)),z(e)}function z(e){let{fragment:o}=e;o.uniforms.add(new i("cascadeDistances",n=>n.shadowMap.cascadeDistances),new N("numCascades",n=>n.shadowMap.numCascades)),o.code.add(t`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
vec3 calculateUVZShadow(in vec3 _worldPos, in float _linearDepth, in ivec2 shadowMapSize) {
int i = _linearDepth < cascadeDistances[1] ? 0 : _linearDepth < cascadeDistances[2] ? 1 : _linearDepth < cascadeDistances[3] ? 2 : 3;
if (i >= numCascades) {
return invalidShadowmapUVZ;
}
mat4 shadowMatrix = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
vec3 lvpos = lightSpacePosition(_worldPos, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return invalidShadowmapUVZ;
}
vec2 uvShadow = cascadeCoordinates(i, shadowMapSize, lvpos);
return vec3(uvShadow, lvpos.z);
}`)}function U(e){e.fragment.code.add(t`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}var u=class extends l{constructor(o,n){super(o,"sampler2DShadow",0,(r,a)=>r.bindTexture(o,n(a)))}};function Va(e,o){o.receiveShadows&&e.include(_),P(e,o)}function Fa(e,o){o.receiveShadows&&e.include(L),P(e,o)}function P(e,o){e.fragment.uniforms.add(new H("lightingGlobalFactor",a=>a.lighting.globalFactor));let{receiveShadows:n,spherical:r}=o;e.include(A,o),n&&B(e),e.fragment.code.add(t`
    float readShadow(float additionalAmbientScale, vec3 vpos) {
      return ${n?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":h(r,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};
    }
  `)}function B(e){e.include(U),e.fragment.uniforms.add(new u("shadowMap",({shadowMap:o})=>o.depthTexture)).code.add(t`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap,0));
if (uvzShadow.z < 0.0) {
return 0.0;
}
return readShadowMapUVZ(uvzShadow, shadowMap);
}`)}function Oa(e){e.code.add(t`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`)}export{K as a,G as b,V as c,Q as d,na as e,ia as f,Oa as g,Va as h,Fa as i};
