import{a as s}from"./chunk-C4GB2D3W.js";import{a}from"./chunk-R6IIY54E.js";import{a as l}from"./chunk-2XDZ5QNL.js";import{a as g}from"./chunk-UUP4FBYC.js";var h=class extends l{constructor(e,i){super(e,"ivec2",0,(r,o)=>r.setUniform2iv(e,i(o)))}};var n=class extends l{constructor(e,i){super(e,"int",0,(r,o)=>r.setUniform1i(e,i(o)))}};var u=class extends l{constructor(e,i){super(e,"usampler2D",0,(r,o)=>r.bindTexture(e,i(o)))}};function M(t,e){let{fragment:i}=t,{output:r,draped:o,hasHighlightMixTexture:d}=e;r===9?(i.uniforms.add(new n("highlightLevel",c=>c.highlightLevel??0),new h("highlightMixOrigin",c=>c.highlightMixOrigin)),t.outputs.add("fragHighlight","uvec2",0),t.include(s),d?i.uniforms.add(new u("highlightMixTexture",c=>c.highlightMixTexture)).code.add(g`uvec2 getAccumulatedHighlight() {
return texelFetch(highlightMixTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = uvec2(bits, 0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
uvec2 combinedHighlight = getAccumulatedHighlight();
combinedHighlight[li] |= bits;
fragHighlight = combinedHighlight;
}
}`):i.code.add(g`void outputHighlight(bool occluded) {
uint bits = occluded ? 3u : 1u;
fragHighlight = uvec2(bits, 0);
}`),o?i.code.add(g`bool isHighlightOccluded() {
return false;
}`):i.uniforms.add(new a("depthTexture",c=>c.mainDepth)).code.add(g`bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}`),i.code.add(g`void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`)):i.code.add(g`void calculateOcclusionAndOutputHighlight() {}`)}var K=.003913894324853229;function C(t){t.code.add(g`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}var m=class extends l{constructor(e,i,r){super(e,"mat3",1,(o,d,c)=>o.setUniformMatrix3fv(e,i(d,c),r))}};export{m as a,n as b,M as c,K as d,C as e};
