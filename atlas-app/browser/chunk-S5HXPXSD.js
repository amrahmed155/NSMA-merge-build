import{a as c}from"./chunk-Y3VXCMJP.js";import{g as m}from"./chunk-MLOQ5YF7.js";import{a as h}from"./chunk-V3G5GB4X.js";import{a as v}from"./chunk-YQSUB555.js";import{e as u}from"./chunk-UFMXMN5C.js";import{a as b}from"./chunk-B6P4AMJH.js";import{e as g}from"./chunk-3CPNIH6N.js";import{a as n}from"./chunk-ZHPZPSOY.js";import{c as p}from"./chunk-U4YRRDXO.js";import{a as f}from"./chunk-J6IEXWQ2.js";import{a as C}from"./chunk-HB3KQGRR.js";import{a as t}from"./chunk-UUP4FBYC.js";function V(o){let r=new C,{vertex:e,fragment:i,attributes:a,varyings:l}=r,{hasVVColor:s,hasVertexColors:d}=o;return p(e,o),r.include(m),r.include(c,o),r.include(u,o),r.include(v,o),i.include(n,o),r.include(h,o),r.include(b,o),a.add("position","vec3"),s&&a.add("colorFeatureAttribute","float"),d||l.add("vColor","vec4"),l.add("vpos","vec3",{invariant:!0}),e.uniforms.add(new f("uColor",w=>w.color)),e.main.add(t`
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${d?"vColor *= uColor;":s?"vColor = uColor * interpolateVVColor(colorFeatureAttribute);":"vColor = uColor;"}
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      gl_Position = transformPosition(proj, view, vpos);`),i.include(g),i.main.add(t`discardBySlice(vpos);
discardByTerrainDepth();
outputColorHighlightOID(vColor, vpos, vColor.rgb);`),r}var B=Object.freeze(Object.defineProperty({__proto__:null,build:V},Symbol.toStringTag,{value:"Module"}));export{V as a,B as b};
