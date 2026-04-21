import{a as l}from"./chunk-NMKLVORY.js";import{a as u}from"./chunk-2YSWRJRO.js";import{a as p}from"./chunk-WDNWHRUY.js";import{a as d}from"./chunk-24Z55BQA.js";import{a as g}from"./chunk-HB3KQGRR.js";import{a as f}from"./chunk-H2ASV3YO.js";import{a as m}from"./chunk-45K2AY22.js";import{a,b as c}from"./chunk-UUP4FBYC.js";function F(t){t.code.add(a`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),t.code.add(a`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),t.code.add(a`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`),t.code.add(a`const vec3 uninterpolatedRGBToFloatFactors = vec3(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBToFloat(vec3 rgb) {
return (dot(round(rgb * 255.0), uninterpolatedRGBToFloatFactors) - 0.5) * 2.0;
}`)}var e=class extends l{constructor(){super(...arguments),this.opacity=1}};function A(t){let o=new g,{blitEmissiveMode:v,blitMode:T,hasOpacityFactor:n}=t;o.include(u),o.fragment.uniforms.add(new m("tex",r=>r.texture)),n&&o.fragment.uniforms.add(new f("opacity",r=>r.opacity));let i=T===3;i&&(o.fragment.uniforms.add(new d("nearFar",r=>r.camera.nearFar)),o.fragment.include(p),o.fragment.include(F));let s=v===1;return s&&(o.outputs.add("fragColor","vec4",0),o.outputs.add("fragEmission","vec4",1)),o.fragment.main.add(a`
    ${i?a`
          float normalizedLinearDepth = (-linearDepthFromTexture(tex, uv) - nearFar[0]) / (nearFar[1] - nearFar[0]);
          fragColor = float2rgba(normalizedLinearDepth);`:a`
          fragColor = texture(tex, uv) ${n?"* opacity":""};`}
    ${c(s,"fragEmission = vec4(0.0, 0.0, 0.0, fragColor.a);")}`),o}var h=Object.freeze(Object.defineProperty({__proto__:null,CompositingPassParameters:e,build:A},Symbol.toStringTag,{value:"Module"}));export{e as a,A as b,h as c};
