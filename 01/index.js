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
                this.fogColor = new THREE.Color(0xffffff);
                // this.scene.background = fogColor;
                // this.scene.fog = new Three(fogColor, 0.0025, 20);
                this.camera.position.z = 4;
                this.camera.position.y = 2;
                this.renderer = new THREE.WebGLRenderer({
                    alpha: true,
                    width: window.innerWidth,
                    height: window.innerHeight,
                    antialias: true
                });
                this.renderer.setSize(800, 600);
                this.container = document.createElement('div');
                this.container.id = 'canvasGL';
                this.container.appendChild(this.renderer.domElement);
                this.camera.lookAt(new THREE.Vector3());
                document.getElementById('sketch').appendChild(this.container);
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
                this.plane_geometry = new THREE.PlaneBufferGeometry(10, 10, segments, segments);
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
                return this.plane_mesh.position.y = 0;
            }

            update() {
                return this.plane_material.uniforms['time'].value = this.clock.getElapsedTime();
            }

        };

        Terrain.prototype.clock = new THREE.Clock(true);

        Terrain.prototype.options = {
            elevation: .7,
            noise_range: .25,
            sombrero_amplitude: -0.5,
            sombrero_frequency: 2,
            speed: -.13,
            segments: 450,
            wireframe_color: '#38558b',
            perlin_passes: 4,
            floor_visible: true,
            wireframe: true,
        };

        return Terrain;

    }).call(this);

    App = new window.App();
    App.init();

}).call(this);

/*
Copyright (c) 2018 by Samsy (https://codepen.io/Samsy/pen/emWppX)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
