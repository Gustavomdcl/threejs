function main() {
    //SETUP ==========
        //SCENE
            var scene = new THREE.Scene();
            scene.background = new THREE.Color( 0xffffff );
        //CAMERA
            var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
            camera.position.z = 700;
        //RENDERER
            var renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            renderer.gammaOutput = true;
            renderer.gammaFactor = 2.2;
            document.body.appendChild( renderer.domElement );
        //LIGHTS
            var lights = [];
            
            // lights[ 0 ] = new THREE.PointLight( 0xffffff, .4, 0 );
            // lights[ 0 ].position.set( 0, 200, 0 );
            // scene.add( lights[ 0 ] );

            // lights[ 1 ] = new THREE.PointLight( 0xffffff, .3, 0 );
            // lights[ 1 ].position.set( 100, 200, 100 );
            // scene.add( lights[ 1 ] );

            lights[ 2 ] = new THREE.PointLight( 0xffffff, .8, 0 );
            lights[ 2 ].position.set( - 100, - 200, - 100, 100 );
            scene.add( lights[ 2 ] );

            var ambientLight = new THREE.AmbientLight( 0x916262 );
            scene.add(ambientLight);

            var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 0.9 );
            scene.add(light);

    //ACTIONS ==========
        //RENDER LOOP
            function animate() { //This will create a loop that causes the renderer to draw the scene every time the screen is refreshed
                requestAnimationFrame(animate);
                renderer.render(scene,camera);
                animation();
            }
        //ANIMATION
            function animation(){
                //MODEL
                model.rotation.x += 0.01; //Rotate model
                model.rotation.y += 0.01;
            }

    //FBX ==========
    var model;
    var loader = new THREE.FBXLoader();
    // loader.load("./model/human/model.fbx", model => {
    loader.load("./model/PORTADOT/model.fbx", fbx => {                          
        model = fbx;
        scene.add(model);
        animate();
    });
}
main();
