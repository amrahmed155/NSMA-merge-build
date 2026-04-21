import{a as i}from"./chunk-NMKLVORY.js";import{a as f}from"./chunk-A634OTHD.js";import{a as v}from"./chunk-24Z55BQA.js";import{a as l}from"./chunk-2XDZ5QNL.js";import{a as o,b as m}from"./chunk-UUP4FBYC.js";import{a}from"./chunk-7VB5JZ2H.js";import{a as d}from"./chunk-JJQR3F6K.js";import{a as t}from"./chunk-NYQXZQKP.js";function P(r){r.varyings.add("linearDepth","float",{invariant:!0})}function D(r,e){e&&P(r),r.vertex.code.add(o`
    void forwardLinearDepth(float _linearDepth) { ${m(e,"linearDepth = _linearDepth;")} }
  `)}function L({code:r,uniforms:e},s){e.add(new f("dpDummy",()=>1)),r.add(o`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 hiD = hiA + hiB;
vec3 loD = loA + loB;
return  dpDummy * hiD + loD;
}`)}var n=class extends l{constructor(e,s,F){super(e,"mat3",2,(u,W,h)=>u.setUniformMatrix3fv(e,s(W,h),F))}};var p=class extends i{constructor(){super(...arguments),this.transformWorldFromViewTH=a(),this.transformWorldFromViewTL=a(),this.transformViewFromCameraRelativeRS=t(),this.transformProjFromView=d()}},c=class extends i{constructor(){super(...arguments),this.transformWorldFromModelRS=t(),this.transformWorldFromModelTH=a(),this.transformWorldFromModelTL=a()}};function Z(r){r.vertex.uniforms.add(new v("nearFar",e=>e.camera.nearFar))}function w(r){r.vertex.code.add(o`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function ar(r){w(r),r.vertex.code.add(o`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),r.vertex.code.add(o`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}export{L as a,n as b,p as c,c as d,D as e,Z as f,ar as g};
