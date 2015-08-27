var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );

var renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0xffffff, 1 );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

var distance = 20;
camera.position.z = distance;
var origin = new THREE.Vector3(0, 0, 0);
var t = 0;

function render() {
    camera.position.x = distance * Math.cos(t);
    camera.position.z = distance * Math.sin(t);

    camera.lookAt(origin);

    t += 0.01;

    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();

dragbox.ondata = function(xml) {
    for (var i = scene.children.length; i >= 0; i--)
        scene.remove(scene.children[i]);

    var mesh = bird.render(xml);
    scene.add(mesh);
};

dragbox.source($("#holder")[0]);

scene.add(bird.render(""));
