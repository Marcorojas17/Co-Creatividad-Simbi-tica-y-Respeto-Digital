// KRONOS 28 ITZA 04:40 - Cymatic Visual
import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1);
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
document.body.style.margin='0';
document.body.style.background='#040a14';
document.body.style.overflow='hidden';

fetch('./shaders/gold.vert').then(r=>r.text()).then(vert=>{
 fetch('./shaders/gold.frag').then(r=>r.text()).then(frag=>{
  const geo = new THREE.PlaneGeometry(2,2);
  const mat = new THREE.ShaderMaterial({
    uniforms:{uTime:{value:0}},
    vertexShader:vert,
    fragmentShader:frag
  });
  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);
  function animate(t){
    mat.uniforms.uTime.value = t*0.001;
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }
  animate(0);
 });
});
