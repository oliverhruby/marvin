import * as BABYLON from '../../vendor/babylonjs/babylon';

/**
* Represents the distance sensor module used for scanning the space
* @desc Test
*/
export class Laser {

    public rotation: number;
    public angle: number;

    private scene: BABYLON.Scene;

    constructor(body: BABYLON.Mesh) {
        this.scene = body.getScene();

        // create the sensor box
        let box = BABYLON.MeshBuilder.CreateBox('laserBox', { height: 1, width: 2, depth: 1 }, this.scene);

        // attach it to the body
        box.parent = body;

        // Set the position
        box.position.y = 2;
        box.position.x = 4;

        // TODO: load shaders from file

        BABYLON.Effect.ShadersStore['customVertexShader'] = `
                precision highp float;
                attribute vec3 position;
                attribute vec3 normal;
                attribute vec2 uv;
                uniform mat4 worldViewProjection;
                uniform float time;
                varying vec3 vPosition;
                varying vec3 vNormal;
                varying vec2 vUV;
                void main(void) {
                    vec3 v = position;
                    gl_Position = worldViewProjection * vec4(v, 1.0);
                    vPosition = position;
                    vNormal = normal;
                    vUV = uv;
                }`;

        BABYLON.Effect.ShadersStore['customFragmentShader'] = `
                #extension GL_OES_standard_derivatives : enable
                precision highp float;

                // Varying
                varying vec3 vPosition;
                varying vec3 vNormal;
                varying vec2 vUV;

                // Refs
                uniform vec3 color;
                uniform vec3 cameraPosition;


                void main(void) {
                    float x = vUV.x;
                    float y = vUV.y;
                    vec2 uv = -1. + 2. * vUV;
                    float a = 1. - smoothstep(-.9, 0.9, abs(uv.x)); //*(1.-vUV.y))*1.);
                    float b = 1. - pow(0.1, vUV.y);
                    vec3 col = vec3(1., b, 0.);
                    gl_FragColor = vec4(col, a);
                }`;

        let laserMaterial = new BABYLON.ShaderMaterial('shader', this.scene, {
            vertex: 'custom',
            fragment: 'custom',
        }, {
                needAlphaBlending: true,
                attributes: ['position', 'normal', 'uv'],
                uniforms: ['time', 'worldViewProjection']
            });


        let laserlen = 200;
        let plane = BABYLON.MeshBuilder.CreatePlane('pl', { width: 2, height: laserlen }, this.scene);
        let plane2 = BABYLON.MeshBuilder.CreatePlane('pl', { width: 2, height: laserlen }, this.scene);
        // plane2.rotation.y = Math.PI / 2;
        let matrix = BABYLON.Matrix.Translation(0, laserlen / 2, 0);
        plane.setPivotMatrix(matrix);
        plane2.setPivotMatrix(matrix);
        plane.parent = box;
        plane2.parent = box;
        box.rotation.x = Math.PI / 2;

        laserMaterial.setColor3('color', new BABYLON.Color3(1, 0, 0));
        laserMaterial.setVector3('cameraPosition', BABYLON.Vector3.Zero());
        laserMaterial.setFloat('time', 0.0);
        laserMaterial.alphaMode = BABYLON.Engine.ALPHA_ADD;
        laserMaterial.alpha = 0.44444;
        laserMaterial.backFaceCulling = false;

        plane.material = laserMaterial;
        plane2.material = laserMaterial;
        let k = 0;
        this.scene.registerBeforeRender(function () {
            box.rotation.z = Math.sin(k) - Math.PI / 2;
            k += .05;
            this.rotation = k;
        });
    }

}
