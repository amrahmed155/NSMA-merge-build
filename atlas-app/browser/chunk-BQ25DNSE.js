import{a as n}from"./chunk-Y3VXCMJP.js";import{g as a}from"./chunk-MLOQ5YF7.js";import{a as c}from"./chunk-V3G5GB4X.js";import{a as s}from"./chunk-ZHPZPSOY.js";import{c as l}from"./chunk-U4YRRDXO.js";import{a as d}from"./chunk-J6IEXWQ2.js";import{a as m}from"./chunk-HB3KQGRR.js";import{a as t}from"./chunk-UUP4FBYC.js";function u(r){let o=new m,{vertex:i,fragment:e,varyings:p}=o;return o.fragment.include(s,r),o.include(a),o.include(n,r),o.include(c,r),l(i,r),o.attributes.add("position","vec3"),p.add("vpos","vec3",{invariant:!0}),i.main.add(t`vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),r.hasVertexColors||e.uniforms.add(new d("constantColor",f=>f.color)),e.main.add(t`
    discardBySlice(vpos);
    vec4 color = ${r.hasVertexColors?"vColor":"constantColor"};
    outputColorHighlightOID(color, vpos, color.rgb);
  `),o}var P=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}));export{u as a,P as b};
