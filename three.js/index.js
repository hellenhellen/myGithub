/**
 * Created by welcome on 2018/8/2.
 */
//创建场景
var scene= new THREE.Scene();//场景，所有物体的容器
//创建、设置相机
var camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
//创建、设置渲染器
var renderer=new THREE.WebGLRenderer();//渲染器
renderer.setSize(window.innerWidth,window.innerHeight);//设置渲染器的大小为窗口的内宽度，也就是内容区的宽度
document.body.appendChild(renderer.domElement);//渲染器中的画布
//创建mesh对象，并添加到场景中;
var geometry=new THREE.BoxGeometry(1,1,1);//几何体
var texture= new THREE.TextureLoader().load("./image.jpg");//纹理
var meterial= new THREE.MeshBasicMaterial({map:texture}); //网格对象
var cube=new THREE.Mesh(geometry,meterial);
scene.add(cube);
camera.position.z=5;
//创建动画、渲染
var render=function () {
    requestAnimationFrame(render);//浏览器专门为动画提供的API，递归调用
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene,camera);
}
render();

// //创建场景
// var scene=new THREE.Scene();
// //创建相机
// var camera=new THREE.PerspectiveCamera(75)
