import{a as le,b as J,c as P,d as me,e as he,g as fe}from"./chunk-WTP7KYQK.js";import{b as F,c as L,h as y,i as re,k as S,m as pe}from"./chunk-OKUYFYSE.js";import{a as de}from"./chunk-XPAMXA62.js";import{h as R,i as B}from"./chunk-OJOADIZC.js";import{q as ie}from"./chunk-LPU3WG6T.js";import{a as ue}from"./chunk-Y6VWJBXU.js";import{a as ae}from"./chunk-R6IIY54E.js";import{a as oe}from"./chunk-BAC6RMAZ.js";import{a as j}from"./chunk-NMKLVORY.js";import{a as te}from"./chunk-2NXJIMQ2.js";import{b as ne}from"./chunk-4UOGBFLW.js";import{a as q}from"./chunk-O5NYEJB2.js";import{b as se,c as ce}from"./chunk-QQ6X4UPS.js";import{a as h}from"./chunk-A634OTHD.js";import{a as Y}from"./chunk-45K2AY22.js";import{a as t,b as d}from"./chunk-UUP4FBYC.js";import{h as Q,j as ee}from"./chunk-HRZG7OHJ.js";import{p as $}from"./chunk-67YVG46W.js";import{a as k}from"./chunk-7ZNWJ4EN.js";import{B as K}from"./chunk-E7V7N6Q3.js";import{l as _}from"./chunk-QTNEEY3B.js";import{d as z,h as V}from"./chunk-7VB5JZ2H.js";import{b as N}from"./chunk-RL4CZUGQ.js";import{b as U}from"./chunk-HSITSPCV.js";import{a as X}from"./chunk-E2BSFBLJ.js";import{K as x}from"./chunk-YPHTQ4OO.js";import{E as A}from"./chunk-HDNVIJTY.js";import{a as g}from"./chunk-WNSZCIFR.js";import{p as T}from"./chunk-RQRZ6SGB.js";function Ce({normalTexture:o,metallicRoughnessTexture:a,metallicFactor:e,roughnessFactor:r,emissiveTexture:s,emissiveFactor:l,occlusionTexture:i}){return o==null&&a==null&&s==null&&(l==null||K(l,V))&&i==null&&(r==null||r===1)&&(e==null||e===1)}var we=z(1,1,.5),je=z(0,.6,.2),De=z(0,1,.2);function qe(o,a){switch(a.output){case 4:case 5:case 6:case 7:o.fragment.code.add(t`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`);break;case 8:o.fragment.code.add(t`void outputDepth(float _linearDepth){
gl_FragDepth = _linearDepth;
}`)}}var v=class extends L{constructor(a,e){super(a,e,new F(ne,()=>import("./chunk-64IIS6VK.js")),S)}initializePipeline(){return B({colorWrite:R})}};var ge="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";var Z=class extends j{constructor(){super(...arguments),this.projScale=1}},I=class extends Z{constructor(){super(...arguments),this.intensity=1}},O=class extends j{},C=class extends O{constructor(){super(...arguments),this.blurSize=k()}};var E=class extends L{constructor(a,e){super(a,e,new F(ce,()=>import("./chunk-TER34KQP.js")),S)}initializePipeline(){return B({colorWrite:R})}};var u=2,b=class extends re{constructor(o){super(o),this.consumes={required:["normals"]},this.produces=y.SSAO,this.isEnabled=()=>!1,this._enableTime=0,this._passParameters=new I,this._drawParameters=new C}initialize(){let o=Uint8Array.from(atob(ge),e=>e.charCodeAt(0)),a=new Q(32);a.wrapMode=33071,a.pixelFormat=6407,a.wrapMode=10497,a.hasMipmap=!0,this._passParameters.noiseTexture=new ee(this.renderingContext,a,o),this.techniques.precompile(E),this.techniques.precompile(v),this.addHandles(X(()=>this.isEnabled(),()=>this._enableTime=0))}destroy(){this._passParameters.noiseTexture=T(this._passParameters.noiseTexture)}render(o){let a=o.find(({name:ze})=>ze==="normals"),e=a?.getTexture(),r=a?.getTexture($);if(!e||!r)return;let s=this.techniques.get(E),l=this.techniques.get(v);if(!s.compiled||!l.compiled)return this._enableTime=performance.now(),void this.requestRender(1);this._enableTime===0&&(this._enableTime=performance.now());let i=this.renderingContext,c=this.view.qualitySettings.fadeDuration,m=this.bindParameters,n=m.camera,Ge=n.relativeElevation,Me=U((5e5-Ge)/2e5,0,1),W=c>0?Math.min(c,performance.now()-this._enableTime)/c:1,xe=W*Me;this._passParameters.normalTexture=e,this._passParameters.depthTexture=r,this._passParameters.projScale=1/n.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Be/se(n)**6*xe;let p=n.fullViewport[2],f=n.fullViewport[3],w=this.fboCache.acquire(p,f,"ssao input",2);i.bindFramebuffer(w.fbo),i.setViewport(0,0,p,f),i.bindTechnique(s,m,this._passParameters,this._drawParameters),i.screen.draw();let G=Math.round(p/u),M=Math.round(f/u),D=this.fboCache.acquire(G,M,"ssao blur",0);i.bindFramebuffer(D.fbo),this._drawParameters.colorTexture=w.getTexture(),N(this._drawParameters.blurSize,0,u/f),i.bindTechnique(l,m,this._passParameters,this._drawParameters),i.setViewport(0,0,G,M),i.screen.draw(),w.release();let H=this.fboCache.acquire(G,M,y.SSAO,0);return i.bindFramebuffer(H.fbo),i.setViewport(0,0,p,f),i.setClearColor(1,1,1,0),i.clear(16384),this._drawParameters.colorTexture=D.getTexture(),N(this._drawParameters.blurSize,u/p,0),i.bindTechnique(l,m,this._passParameters,this._drawParameters),i.setViewport(0,0,G,M),i.screen.draw(),i.setViewport4fv(n.fullViewport),D.release(),W<1&&this.requestRender(2),H}};g([x()],b.prototype,"consumes",void 0),g([x()],b.prototype,"produces",void 0),g([x({constructOnly:!0})],b.prototype,"isEnabled",void 0),b=g([A("esri.views.3d.webgl-engine.effects.ssao.SSAO")],b);var Be=.5;function Ee(o,a){a.receiveAmbientOcclusion?(o.uniforms.add(new ae("ssaoTex",e=>e.ssao?.getTexture())),o.constants.add("blurSizePixelsInverse","float",1/u),o.code.add(t`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):o.code.add(t`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function be(o){o.code.add(t`float mapChannel(float x, vec2 p) {
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),o.code.add(t`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function Fe(o){o.constants.add("ambientBoostFactor","float",pe)}function Le(o){o.uniforms.add(new h("lightingGlobalFactor",a=>a.lighting.globalFactor))}function Ao(o,a){let e=o.fragment,{pbrMode:r,spherical:s,hasColorTexture:l}=a;e.include(Ee,a),r!==0&&e.include(he,a),o.include(le,a),e.include(de),e.include(fe,a);let i=!(r===2&&!l);switch(i&&e.include(be),e.code.add(t`
    const float GAMMA_SRGB = ${t.float(_)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${d(r!==0,"const float GROUND_REFLECTANCE = 0.2;")}
  `),Fe(e),Le(e),J(e),e.code.add(t`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${s?t`normalize(vPosWorld)`:t`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),P(e),e.code.add(t`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),r){case 0:case 4:case 3:o.include(me),e.code.add(t`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case 1:case 2:e.code.add(t`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
vec3 viewDir, vec3 groundNormal, vec3 mrr, float additionalAmbientIrradiance) {
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, groundNormal), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, groundNormal), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),e.code.add(t`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),a.useFillLights?e.uniforms.add(new ue("hasFillLights",c=>c.enableFillLights)):e.constants.add("hasFillLights","bool",!1),e.code.add(t`vec3 ambientDir = vec3(5.0 * groundNormal[1] - groundNormal[0] * groundNormal[2], - 5.0 * groundNormal[0] - groundNormal[2] * groundNormal[1], groundNormal[1] * groundNormal[1] + groundNormal[0] * groundNormal[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),e.uniforms.add(new h("lightingSpecularStrength",c=>c.lighting.mainLight.specularStrength),new h("lightingEnvironmentStrength",c=>c.lighting.mainLight.environmentStrength)).code.add(t`vec3 horizonRingDir = inputs.RdotNG * groundNormal - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE);`),e.code.add(t`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent;
        ${i?t`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:t`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case 5:case 6:J(e),P(e),e.code.add(t`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`)}}function ot(o,a){let e=a.pbrMode,r=o.fragment;if(e!==2&&e!==0&&e!==1)return void r.code.add(t`void applyPBRFactors() {}`);if(e===0)return void r.code.add(t`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(e===2)return void r.code.add(t`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);let{hasMetallicRoughnessTexture:s,hasMetallicRoughnessTextureTransform:l,hasOcclusionTexture:i,hasOcclusionTextureTransform:c,bindType:m}=a;(s||i)&&o.include(ie,a),r.code.add(t`vec3 mrr;
float occlusion;`),s&&r.uniforms.add(m===1?new Y("texMetallicRoughness",n=>n.textureMetallicRoughness):new q("texMetallicRoughness",n=>n.textureMetallicRoughness)),i&&r.uniforms.add(m===1?new Y("texOcclusion",n=>n.textureOcclusion):new q("texOcclusion",n=>n.textureOcclusion)),r.uniforms.add(m===1?new te("mrrFactors",n=>n.mrrFactors):new oe("mrrFactors",n=>n.mrrFactors)),r.code.add(t`
    ${d(s,t`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${d(i,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${i?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${d(s,`applyMetallicRoughness(${l?"metallicRoughnessUV":"vuv0"});`)}
      ${d(i,`applyOcclusion(${c?"occlusionUV":"vuv0"});`)}
    }
  `)}function rt(o,a){a.snowCover&&(o.uniforms.add(new h("snowCover",e=>e.snowCover)).code.add(t`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),o.code.add(t`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}export{Ce as a,we as b,je as c,De as d,qe as e,Ee as f,Fe as g,Le as h,Ao as i,ot as j,rt as k};
