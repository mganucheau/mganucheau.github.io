(function () {
    var App;

    window.App = (function () {
        class App {
            constructor() {
                this.init = this.init.bind(this);
                this.update = this.update.bind(this);
                this.renderScene = this.renderScene.bind(this);
                this.resize = this.resize.bind(this);
            }

            init() {
                this.scene = new THREE.Scene();
                this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100000);
                this.camera.position.z = 5;
                this.camera.position.y = 1;
                this.renderer = new THREE.WebGLRenderer({
                    alpha: true,
                    width: window.innerWidth,
                    height: window.innerHeight,
                    antialias: true
                });
                this.renderer.setSize(window.innerWidth, window.innerHeight);
                this.container = document.createElement('div');
                this.container.id = 'canvasGL';
                this.container.appendChild(this.renderer.domElement);
                this.camera.lookAt(new THREE.Vector3());
                document.getElementById('footer').appendChild(this.container);
                this.terrain = new Terrain(this.scene);
                this.scene.add(this.terrain.plane_mesh);
                return this.update();
            }

            update() {
                requestAnimationFrame(this.update);
                this.terrain.update();
                return this.renderScene();
            }

            renderScene() {
                return this.renderer.render(this.scene, this.camera);
            }

            resize(stageWidth, stageHeight) {
                this.camera.aspect = stageWidth / stageHeight;
                this.camera.updateProjectionMatrix();
                return this.renderer.setSize(stageWidth, stageHeight);
            }

        };

        return App;

    }).call(this);

    window.Terrain = (function () {
        class Terrain {
            constructor(scene) {
                this.init = this.init.bind(this);
                this.buildPlanes = this.buildPlanes.bind(this);
                this.update = this.update.bind(this);
                this.scene = scene;
                this.init();
            }

            init() {
                this.uniforms = {
                    time: {
                        type: "f",
                        value: 0.0
                    },
                    speed: {
                        type: "f",
                        value: this.options.speed
                    },
                    elevation: {
                        type: "f",
                        value: this.options.elevation
                    },
                    noise_range: {
                        type: "f",
                        value: this.options.noise_range
                    },
                    offset: {
                        type: "f",
                        value: this.options.elevation
                    },
                    perlin_passes: {
                        type: "f",
                        value: this.options.perlin_passes
                    },
                    sombrero_amplitude: {
                        type: "f",
                        value: this.options.sombrero_amplitude
                    },
                    sombrero_frequency: {
                        type: "f",
                        value: this.options.sombrero_frequency
                    },
                    line_color: {
                        type: "c",
                        value: new THREE.Color(this.options.wireframe_color)
                    }
                };
                this.buildPlanes(this.options.segments);
            }

            buildPlanes(segments) {
                this.plane_geometry = new THREE.PlaneBufferGeometry(20, 20, segments, segments);
                this.plane_material = new THREE.ShaderMaterial({
                    vertexShader: document.getElementById('shader-vertex-terrain-perlinsombrero').textContent,
                    fragmentShader: document.getElementById('shader-fragment-terrain').textContent,
                    wireframe: this.options.wireframe,
                    wireframeLinewidth: 1,
                    transparent: true,
                    uniforms: this.uniforms
                });
                this.groundMaterial = new THREE.MeshPhongMaterial({
                    visible: false,
                });
                this.materials = [this.groundMaterial, this.plane_material];
                this.plane_mesh = THREE.SceneUtils.createMultiMaterialObject(this.plane_geometry, this.materials);
                this.plane_mesh.rotation.x = -Math.PI / 2;
                return this.plane_mesh.position.y = -.05;
            }

            update() {
                return this.plane_material.uniforms['time'].value = this.clock.getElapsedTime();
            }

        };

        Terrain.prototype.clock = new THREE.Clock(true);

        Terrain.prototype.options = {
            elevation: 0.08,
            noise_range: .4,
            sombrero_amplitude: -0.3,
            sombrero_frequency: 3,
            speed: -0.15,
            segments: 200,
            wireframe_color: '#595693',
            perlin_passes: 3,
            floor_visible: true,
            wireframe: false,
        };

        return Terrain;

    }).call(this);

    App = new window.App();
    App.init();

}).call(this);
