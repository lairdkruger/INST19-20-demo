(this["webpackJsonpr3f-scroll-rig"]=this["webpackJsonpr3f-scroll-rig"]||[]).push([[0],{27:function(e,t,a){e.exports=a(38)},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var r=a(5),o=a(12),n=a(1),i=a.n(n),s=a(2),l=a(9),c=a(8),u=a.n(c);var m={sections:12,pages:12,zoom:1,top:Object(n.createRef)()};const f=Object(n.createContext)(0);function h(e){let t=e.children,a=e.offset,r=e.factor,o=Object(l.a)(e,["children","offset","factor"]);const c=g(),h=c.offset,p=c.sectionHeight,v=c.aspect,d=c.canvasHeight,b=Object(n.useRef)();return a=void 0!==a?a:h,Object(s.d)(()=>{const e=b.current.position.y,t=Math.min(m.top.current/v,d*(m.pages-1));b.current.position.y=u()(e,t/m.zoom*r,.1)}),setInterval((function(){}),1e3),i.a.createElement(f.Provider,{value:a},i.a.createElement("group",Object.assign({},o,{position:[0,-p*a*r,0]}),i.a.createElement("group",{ref:b},t)))}function g(){const e=m.sections,t=m.pages,a=m.zoom,r=Object(s.f)(),o=r.size,i=r.viewport,l=Object(n.useContext)(f),c=i.width,u=i.height,h=c/a,g=u/a,p=o.width<700,v=h*(p?.2:.1),d=h*(p?.8:.6),b=g*((t-1)/(e-1));return{aspect:o.height/u,viewport:i,offset:l,viewportWidth:c,viewportHeight:u,canvasWidth:h,canvasHeight:g,mobile:p,margin:v,contentMaxWidth:d,sectionHeight:b}}var p=a(26);var v=function({className:e,style:t,children:a,portal:r}){const o=Object(s.f)().size;return i.a.createElement(p.a,{portal:r,style:{position:"absolute",top:-o.height/2,left:-o.width/2,width:o.width,height:o.height}},i.a.createElement("div",{className:e,style:t},a))};a(37);var d=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("ambientLight",{intensity:.5}),i.a.createElement("pointLight",{position:[70,-50,200],intensity:1,angle:.3,penumbra:1}),i.a.createElement("pointLight",{position:[1,-1,-5],intensity:.5}))},b=a(0);class w extends b.ShaderMaterial{constructor(){super({uniforms:{uColor:{value:new b.Color("#FFFFFF")},uOpacity:{value:0},uTime:{value:0},uShift:{value:0}},vertexShader:"\n        uniform float uShift;\n        varying vec2 vUv;\n        void main() {\n          vec3 pos = position;\n          pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * uShift * 5.0) * 0.125);\n          vUv = uv;\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);\n        }",fragmentShader:"\n        uniform vec3 uColor;\n        uniform float uOpacity;\n        uniform float uTime;\n        uniform float uShift;\n        varying vec2 vUv;\n        void main() {\n          \n          gl_FragColor = vec4(uColor.rgb, uOpacity);\n        }"})}set uColor(e){this.uniforms.uColor.value=e}get uColor(){return this.uniforms.uColor.value}set uOpacity(e){this.uniforms.uOpacity.value=e}get uOpacity(){return this.uniforms.uOpacity.value}set uTime(e){this.uniforms.time.value=e}get uTime(){return this.uniforms.time.value}set uShift(e){this.uniforms.uShift.value=e}get uShift(){return this.uniforms.uShift.value}}Object(s.c)({LightbarMaterial:w});var E=function(e){const t=Object(n.useRef)(),a=Object(n.useRef)(),o=Object(s.f)().viewport,l=-o.width/1.75,c=o.width/1.75,m=1/e.bar.width*100,f=Object(n.useState)(!1),h=Object(r.a)(f,2),g=h[0],p=h[1];let v=0,d=0;function b(e,t){return e+Math.random()*(t+1-e)}return function e(){setTimeout((function(){v=b(l,c),d=Math.random()/5,e()}),b(1e3,5e3))}(),Object(s.d)(()=>{t.current.position.x=u()(t.current.position.x,v,.01),a.current.uOpacity=g?1:u()(a.current.uOpacity,d,.01)}),i.a.createElement("mesh",{ref:t,onPointerOver:e=>p(!0),onPointerOut:e=>p(!1),position:[0,0,m]},i.a.createElement("planeBufferGeometry",{attach:"geometry",args:[e.bar.width,e.bar.height]}),i.a.createElement("lightbarMaterial",{ref:a,attach:"material",uColor:e.bar.color,transparent:!0}))};var x=function(e){const t=Object(n.useRef)(),a=Object(s.f)().viewport,r=3*a.height,o=[{id:"bar1",width:a.width/10,height:r,color:new b.Color("#F84006")},{id:"bar2",width:a.width/8,height:r,color:new b.Color("#E10906")},{id:"bar3",width:a.width/7,height:r,color:new b.Color("#BA0301")},{id:"bar4",width:a.width/4,height:r,color:new b.Color("#7A0707")},{id:"bar5",width:a.width/1.5,height:r,color:new b.Color("#450202")},{id:"bar6",width:a.width/1.3,height:r,color:new b.Color("#400303")},{id:"bar7",width:a.width/12,height:r,color:new b.Color("#F84006")},{id:"bar8",width:a.width/9,height:r,color:new b.Color("#E10906")},{id:"bar9",width:a.width/6,height:r,color:new b.Color("#BA0301")},{id:"bar10",width:a.width/3,height:r,color:new b.Color("#7A0707")},{id:"bar11",width:a.width/1.5,height:r,color:new b.Color("#450202")},{id:"bar12",width:a.width/1.3,height:r,color:new b.Color("#400303")},{id:"bar13",width:a.width/13,height:r,color:new b.Color("#FB7A29")},{id:"bar14",width:a.width/8,height:r,color:new b.Color("#E10906")},{id:"bar15",width:a.width/5,height:r,color:new b.Color("#BA0301")},{id:"bar16",width:a.width/3,height:r,color:new b.Color("#7A0707")},{id:"bar17",width:a.width/1.5,height:r,color:new b.Color("#450202")},{id:"bar18",width:a.width/1.3,height:r,color:new b.Color("#400303")}];return i.a.createElement("group",Object.assign({ref:t},e),o.map(e=>i.a.createElement(E,{key:e.id,bar:e})))};class y extends b.ShaderMaterial{constructor(){super({uniforms:{opacity:{value:1},image_texture:{value:null}},vertexShader:"\n                varying vec2 vUv;\n\n                void main() {\n                    vec3 pos = position;\n                    vUv = uv;\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);\n            }",fragmentShader:"\n                uniform sampler2D image_texture;\n                uniform float opacity;\n\n                varying vec2 vUv;\n                \n                void main() {\n                    vec4 outColor = texture2D(image_texture, vUv);\n\n                    gl_FragColor = vec4(outColor.rgb, opacity);\n            }"})}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}set map(e){this.uniforms.image_texture.value=e}get map(){return this.uniforms.image_texture.value}}Object(s.c)({BasicMaterial:y});var C=function(e){e.color;let t=Object(l.a)(e,["color"]);const a=Object(n.useRef)();Object(s.e)(b.TextureLoader,t.src);var r=document.getElementsByClassName("image-plane");const o=(r=Array.from(r)).filter(e=>e.dataset.id===t.image_id)[0],c=new b.Vector2(0,0),u=new b.Vector2(0,0),m=o.getBoundingClientRect(),f=m.width,h=m.height,g=m.left;c.set(f,h),u.set(g-window.innerWidth/2+f/2,0);const p=Object(s.e)(b.TextureLoader,o.src);return i.a.createElement("mesh",{position:[u.x,u.y,0],scale:[c.x,c.y,1]},i.a.createElement("planeBufferGeometry",{attach:"geometry",args:[1,1,32,32]}),i.a.createElement("basicMaterial",{ref:a,attach:"material",map:p,transparent:!0}))};class O extends b.ShaderMaterial{constructor(){super({uniforms:{opacity:{value:1},color:{value:new b.Color("white")},image_texture:{value:null},scale:{value:0},shift:{value:0}},vertexShader:"\n                uniform float scale;\n                uniform float shift;\n                varying vec2 vUv;\n\n                float rand(vec2 co){\n                    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n                }\n\n                void main() {\n                vec3 pos = position;\n                //   pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * shift * 5.0) * 0.125);\n                // pos.y += (rand(vec2(pos.x, pos.x)) * shift);\n\n                vUv = uv;\n                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);\n            }",fragmentShader:"\n                uniform sampler2D image_texture;\n                uniform float shift;\n                uniform float scale;\n                uniform vec3 color;\n                uniform float opacity;\n\n                varying vec2 vUv;\n                \n                void main() {\n                float angle = 1.55;\n                vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);\n                vec2 offset = shift * vec2(cos(angle), sin(angle));\n                vec4 cr = texture2D(image_texture, p + offset);\n                vec4 cga = texture2D(image_texture, p);\n                vec4 cb = texture2D(image_texture, p - offset);\n\n                vec3 outColor = vec3(cr.r, cga.g, cb.b);\n\n                gl_FragColor = vec4(outColor, cga.a);\n            }"})}get color(){return this.uniforms.color.value}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}set map(e){this.uniforms.image_texture.value=e}get map(){return this.uniforms.image_texture.value}set scale(e){this.uniforms.scale.value=e}get scale(){return this.uniforms.scale.value}set shift(e){this.uniforms.shift.value=e}get shift(){return this.uniforms.shift.value}}Object(s.c)({DistortMaterial:O});var j=function(e){let t=e.color,a=void 0===t?"white":t,r=Object(l.a)(e,["color"]);const o=Object(n.useRef)();Object(s.e)(b.TextureLoader,r.src);var c=document.getElementsByClassName("image-plane");const f=(c=Array.from(c)).filter(e=>e.dataset.id===r.image_id)[0],h=new b.Vector2(0,0),g=new b.Vector2(0,0),p=f.getBoundingClientRect(),v=p.width,d=p.height,w=p.left;h.set(v,d),g.set(w-window.innerWidth/2+v/2,0);const E=Object(s.e)(b.TextureLoader,f.src);let x=m.top.current;return Object(s.d)(()=>{const e=m.top,t=e.current-x;o.current.shift=u()(o.current.shift,-t/150,.05),x=e.current}),i.a.createElement("mesh",{position:[g.x,g.y,0],scale:[h.x,h.y,1]},i.a.createElement("planeBufferGeometry",{attach:"geometry",args:[1,1,32,32]}),i.a.createElement("distortMaterial",{ref:o,attach:"material",color:a,map:E,transparent:!0}))};class M extends b.ShaderMaterial{constructor(){super({uniforms:{opacity:{value:1},uTexture:{value:null},uPreviousTexture:{value:null},uMixValue:{value:0}},vertexShader:"\n                uniform vec2 uOffset;\n\n                varying vec2 vUv;\n\n                vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {\n                    float M_PI = 3.1415926535897932384626433832795;\n                    position.x = position.x + (sin(uv.y * M_PI) * offset.x);\n                    position.y = position.y + (sin(uv.x * M_PI) * offset.y);\n                    return position;\n                }\n\n                void main() {\n                    vUv =  uv;\n                    vec3 newPosition = position;\n                    newPosition = deformationCurve(position,uv,uOffset);\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );\n                }",fragmentShader:"\n                uniform sampler2D uTexture;\n                uniform sampler2D uPreviousTexture;\n                uniform float opacity;\n                uniform float uMixValue;\n\n                varying vec2 vUv;\n\n                float strength = 0.5;\n\n                //https://github.com/gl-transitions/gl-transitions/blob/master/transitions/morph.glsl\n                vec3 transition(vec2 uv) {\n                    float inv = 1.0 - uMixValue;\n\n                    vec4 fromColor = texture2D(uPreviousTexture, uv);\n                    vec4 toColor = texture2D(uTexture, uv);\n\n                    vec2 fromOffset = (((fromColor.rg + fromColor.b) * 0.5) * 2.0 - 1.0);\n                    vec2 toOffset = (((toColor.rg + toColor.b) * 0.5) * 2.0 - 1.0);\n                    vec2 offset = mix(fromOffset, toOffset, 0.5) * strength;\n                    \n                    return mix(texture2D(uPreviousTexture, uv + offset * uMixValue).rgb, texture2D(uTexture, uv - offset * inv).rgb, uMixValue);\n                }\n        \n                void main() {\n                    //float mixValue = pow(uMixValue, 4.0);\n                    vec3 trans = transition(vUv);\n                    //vec3 outColor = mix(transition(vUv), vec3(mixValue, 0.0, 0.0), mixValue); \n\n                    gl_FragColor = vec4(trans.rgb, opacity);\n                }"})}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}set uTexture(e){this.uniforms.uTexture.value=e}get uTexture(){return this.uniforms.uTexture.value}set uPreviousTexture(e){this.uniforms.uPreviousTexture.value=e}get uPreviousTexture(){return this.uniforms.uPreviousTexture.value}set uMixValue(e){this.uniforms.uMixValue.value=e}get uMixValue(){return this.uniforms.uMixValue.value}}Object(s.c)({MorphMaterial:M});var _=function(e){e.color;let t=Object(l.a)(e,["color"]);const a=Object(n.useRef)();Object(s.e)(b.TextureLoader,t.src);var r=document.getElementsByClassName("image-plane");const o=(r=Array.from(r)).filter(e=>e.dataset.id===t.image_id)[0],c=new b.Vector2(0,0),f=new b.Vector2(0,0),h=o.getBoundingClientRect(),p=h.width,v=h.height,d=h.left;c.set(p,v),f.set(d-window.innerWidth/2+p/2,0);const w=Object(s.e)(b.TextureLoader,t.src),E=Object(s.e)(b.TextureLoader,t.src_prev),x=g(),y=x.viewportHeight,C=x.offset;return Object(s.d)(()=>{const e=m.top;let r=0;r=t.continue?(C*y-e.current)/y:Math.max(0,(C*y-e.current)/y),a.current.uMixValue=u()(a.current.uMixValue,r,.1)}),i.a.createElement("mesh",{position:[f.x,f.y,0],scale:[c.x,c.y,1]},i.a.createElement("planeBufferGeometry",{attach:"geometry",args:[1,1,32,32]}),i.a.createElement("morphMaterial",{ref:a,attach:"material",uTexture:w,uPreviousTexture:E,transparent:!0}))};class N extends b.ShaderMaterial{constructor(){super({uniforms:{uColor:{value:new b.Color("#000000")}},vertexShader:"\n                varying vec2 vUv;\n                void main() {\n                  vec3 pos = position;\n                  vUv = uv;\n                  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);\n            }",fragmentShader:"\n                uniform vec3 uColor;\n                varying vec2 vUv;\n\n                void main() {\n                  float x = vUv.x;\n                  float y = vUv.y;\n\n                  float opacity = 1.0-y;\n\n                  gl_FragColor = vec4(uColor.rgb, opacity);\n            }"})}set uColor(e){this.uniforms.uColor.value=e}get uColor(){return this.uniforms.uColor.value}}Object(s.c)({TransitionMaterial:N});var S=function(e){const t=Object(s.f)().viewport;return i.a.createElement("group",null,i.a.createElement("mesh",{"scale-y":e.upsideDown?-1:1},i.a.createElement("planeBufferGeometry",{attach:"geometry",args:[t.width,1.02*t.height-.2]}),i.a.createElement("transitionMaterial",{attach:"material",uColor:e.color,toneMapped:!1,transparent:!0})))};class T extends b.ShaderMaterial{constructor(){super({uniforms:{uColor:{value:new b.Color("#000000")}},vertexShader:"\n                varying vec2 vUv;\n                void main() {\n                  vec3 pos = position;\n                  vUv = uv;\n                  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);\n            }",fragmentShader:"\n                uniform vec3 uColor;\n                varying vec2 vUv;\n\n                void main() {\n                  float distance = length(vUv - vec2(0.5, 0.5));\n\n                  float opacity = distance;\n\n                  gl_FragColor = vec4(uColor.rgb, opacity);\n            }"})}set uColor(e){this.uniforms.uColor.value=e}get uColor(){return this.uniforms.uColor.value}}Object(s.c)({VignetteMaterial:T});var k=function(e){const t=Object(s.f)().viewport;return i.a.createElement("group",e,i.a.createElement("mesh",null,i.a.createElement("planeBufferGeometry",{attach:"geometry",args:[t.width,t.height]}),i.a.createElement("vignetteMaterial",{attach:"material",uColor:e.color,toneMapped:!1,transparent:!0})))};function V(){const e=Object(n.useState)(),t=Object(r.a)(e,2),a=t[0],o=t[1],l=Object(n.useRef)(),c=Object(n.useRef)(),u=e=>m.top.current=e.target.scrollTop;Object(n.useEffect)(()=>{u({target:c.current})},[]);const f=2*Math.atan(window.innerHeight/2/800)*180/Math.PI;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{gl:{alpha:!0,powerPreference:"high-performance",antialias:!1,stencil:!1,depth:!1},onCreated:({gl:e,events:t})=>{o(t)},camera:{position:[0,0,800],fov:f}},i.a.createElement(d,null),i.a.createElement(h,{factor:0,offset:0},i.a.createElement(v,{portal:l},i.a.createElement("div",{className:"side-text-box"},i.a.createElement("h1",{className:"side-text"},"inst.19-20")))),i.a.createElement(h,{factor:1,offset:0},i.a.createElement(x,{position:[0,0,-5]}),i.a.createElement(k,{color:"#000000"}),i.a.createElement(v,{portal:l,className:"section-box"},i.a.createElement("div",{className:"album-image-box"},i.a.createElement("img",{"data-id":"album_cover",className:"image-plane",src:"media/images/album_cover.jpg",alt:"album cover for Jack Woodbury's debut album inst.19-20"}))),i.a.createElement(n.Suspense,{fallback:i.a.createElement(v,null,i.a.createElement("h1",null,"Loading Image"))},i.a.createElement(j,{src:"media/images/album_cover.jpg",image_id:"album_cover"}))),i.a.createElement(h,{factor:1,offset:1},i.a.createElement(S,null),i.a.createElement(k,{color:"#000000"}),i.a.createElement(v,{portal:l,className:"paragraph-section"},i.a.createElement("p",{className:"paragraph"},"The works collected on inst.19-20 are derived from two audiovisual installations created during 2019 and early 2020. Titled -A Tree Falls- and -CORROSE-, these installations explore and acoustically signify the compositional influence of the audience and loudspeaker, respectively."),i.a.createElement("p",{className:"paragraph"},"Installed, each work presents and disrupts a series of electro-acoustic compositions. In A Tree Falls, this disruption stems from the audience\u2019s interaction with the work. In CORROSE, by comparison, the disruption comes from damaged and augmented loudspeakers. inst.19-20 gathers these works, free of their installed and disrupted context."),i.a.createElement("p",{className:"paragraph"},"inst.19-20's eight tracks were composed as part of Jack\u2019s Master of Fine Arts studies at the New Zealand School of Music. The material is largely generated using processed recordings of piano and tubular bells, alongside field recordings of Wellington\u2019s Ohariu Valley. Compositionally, the album employs generative looping software, the juxtaposition of noise/glitch and ambient material, and terraced dynamics."),i.a.createElement("p",{className:"paragraph"},"A Tree Falls, one of the installations from which inst.19-20 is derived, was presented at the Australasian Computer Music Conference in Melbourne in 2019. A paper discussing the work was published at the International Computer Music Conference in New York in 2019 (written in collaboration with composer Mo Zareei). - rattle.co.nz"))),i.a.createElement(h,{factor:1,offset:2},i.a.createElement(v,{portal:l,className:"paragraph-section-right"},i.a.createElement("p",{className:"paragraph"},"From here will be the different sections exploring the different installations with accompanying videos / visual things."))),i.a.createElement(h,{factor:1,offset:3},i.a.createElement(v,{portal:l,className:"paragraph-section-right"},i.a.createElement("p",{className:"corrose-title"},"CORROSE"))),i.a.createElement(h,{factor:-1.5,offset:3},i.a.createElement(v,{portal:l,className:"section-box"},i.a.createElement("div",{className:"project-main-image-box"},i.a.createElement("img",{"data-id":"corrose-main-image",className:"image-plane",src:"media/images/corrose_main.jpg",alt:"album cover for Jack Woodbury's debut album inst.19-20"}))),i.a.createElement(n.Suspense,{fallback:i.a.createElement(v,null,i.a.createElement("h1",null,"Loading Image"))},i.a.createElement(_,{src:"media/images/black.png",src_prev:"media/images/corrose_main.jpg",image_id:"corrose-main-image",continue:!0}))),i.a.createElement(h,{factor:1,offset:4},i.a.createElement(v,{portal:l,className:"paragraph-section-right"},i.a.createElement("p",{className:"paragraph"},"First paragraph with a bit of info about Corrose."),i.a.createElement("div",{className:"corrose-image-1"},i.a.createElement("img",{"data-id":"corrose-image",className:"image-plane",src:"media/images/corrose_2.jpg",alt:"album cover for Jack Woodbury's debut album inst.19-20"}))),i.a.createElement(n.Suspense,{fallback:i.a.createElement(v,null,i.a.createElement("h1",null,"Loading Image"))},i.a.createElement(_,{src:"media/images/black.png",src_prev:"media/images/corrose_2.jpg",image_id:"corrose-image"}))),i.a.createElement(h,{factor:1,offset:6},i.a.createElement(v,{portal:l,className:"paragraph-section-right"},i.a.createElement("p",{className:"corrose-title"},"A Tree Falls"))),i.a.createElement(h,{factor:-1.5,offset:6},i.a.createElement(v,{portal:l,className:"section-box"},i.a.createElement("div",{className:"project-main-image-box"},i.a.createElement("img",{"data-id":"corrose-main-image",className:"image-plane",src:"media/images/atf_main.jpg",alt:"album cover for Jack Woodbury's debut album inst.19-20"}))),i.a.createElement(n.Suspense,{fallback:i.a.createElement(v,null,i.a.createElement("h1",null,"Loading Image"))},i.a.createElement(_,{src:"media/images/black.png",src_prev:"media/images/atf_main.jpg",image_id:"corrose-main-image",continue:!0}))),i.a.createElement(h,{factor:1,offset:7},i.a.createElement(v,{portal:l,className:"paragraph-section-right"},i.a.createElement("p",{className:"paragraph"},"First paragraph with a bit of info about A Tree Falls."),i.a.createElement("div",{className:"atf-image-1"},i.a.createElement("img",{"data-id":"atf-image",className:"image-plane",src:"media/images/atf_1.jpg",alt:"album cover for Jack Woodbury's debut album inst.19-20"}))),i.a.createElement(n.Suspense,{fallback:i.a.createElement(v,null,i.a.createElement("h1",null,"Loading Image"))},i.a.createElement(_,{src:"media/images/black.png",src_prev:"media/images/atf_1.jpg",image_id:"atf-image"}))),i.a.createElement(h,{factor:1,offset:9},i.a.createElement(v,{portal:l,className:"paragraph-section-right"},i.a.createElement("p",{className:"paragraph"},"Infomation and background on Jack"))),i.a.createElement(h,{factor:-1,offset:9},i.a.createElement(v,{portal:l,className:"section-box"},i.a.createElement("div",{className:"profile-image-box"},i.a.createElement("img",{"data-id":"profile-image",className:"image-plane",src:"media/images/profile.jpg",alt:"album cover for Jack Woodbury's debut album inst.19-20"}))),i.a.createElement(n.Suspense,{fallback:i.a.createElement(v,null,i.a.createElement("h1",null,"Loading Image"))},i.a.createElement(C,{src:"media/images/profile.jpg",image_id:"profile-image"}))),i.a.createElement(h,{factor:1,offset:11},i.a.createElement(k,{color:"#000000"}),i.a.createElement(S,{upsideDown:!0}),i.a.createElement(v,{portal:l,className:"paragraph-section-right"},i.a.createElement("p",{className:"paragraph"},"Links to buy album."))),i.a.createElement(h,{factor:1,offset:12},i.a.createElement(x,{position:[0,0,-5]}))),i.a.createElement("div",Object.assign({className:"scrollArea",ref:c,onScroll:u},a),i.a.createElement("div",{style:{position:"sticky",top:0},ref:l}),i.a.createElement("div",{style:{height:"".concat(100*m.pages,"vh")}})))}Object(o.render)(i.a.createElement(V,null),document.querySelector("#root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.88ac5809.chunk.js.map