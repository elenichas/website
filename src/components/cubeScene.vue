<template>
  <div>
    <div ref="cubeContainer" class="scene-container"></div>
    <div class="controls">
      <label>Mode: </label>
      <select v-model="mode">
        <option value="translate">Move</option>
        <option value="rotate">Rotate</option>
        <option value="scale">Scale</option>
      </select>
      <label>Color: </label>
      <input type="color" v-model="color" />
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";

export default {
  data() {
    return {
      color: "#00ff00",
      mode: "translate", // 'translate', 'rotate', 'scale'
    };
  },
  mounted() {
    this.initThreeJS();
    this.animate();
  },
  watch: {
    mode() {
      // Set the mode (translate, rotate, scale) for the transform controls
      if (this.transformControls) {
        this.transformControls.setMode(this.mode);
      }
    },
    color() {
      if (this.cube) {
        this.cube.material.color.set(this.color);
      }
    },
  },
  methods: {
    initThreeJS() {
      // Create the scene, camera, renderer outside Vue's reactivity
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xcccccc);

      // Create the camera
      this.camera = new THREE.PerspectiveCamera(
        75,
        this.$refs.cubeContainer.offsetWidth /
          this.$refs.cubeContainer.offsetHeight,
        0.1,
        1000
      );
      this.camera.position.set(0, 2, 5);

      // Create the renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(
        this.$refs.cubeContainer.offsetWidth,
        this.$refs.cubeContainer.offsetHeight
      );
      this.$refs.cubeContainer.appendChild(this.renderer.domElement);

      // Add lighting
      const ambientLight = new THREE.AmbientLight(0x404040); // Soft light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      this.scene.add(ambientLight);
      this.scene.add(directionalLight);

      // Create the cube
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshStandardMaterial({ color: this.color });
      this.cube = new THREE.Mesh(geometry, material);
      this.scene.add(this.cube);

      // Set up OrbitControls for camera movement
      this.orbitControls = new OrbitControls(
        this.camera,
        this.renderer.domElement
      );
      this.orbitControls.enableDamping = true;
      this.orbitControls.dampingFactor = 0.05;

      // Set up TransformControls for object manipulation
      this.transformControls = new TransformControls(
        this.camera,
        this.renderer.domElement
      );
      this.transformControls.attach(this.cube);
      this.transformControls.setMode(this.mode); // Start in 'translate' mode
      this.scene.add(this.transformControls);

      // Add event listeners for orbit and transform controls interaction
      this.transformControls.addEventListener("change", () =>
        this.renderer.render(this.scene, this.camera)
      );
      this.transformControls.addEventListener("dragging-changed", (event) => {
        this.orbitControls.enabled = !event.value; // Disable orbit controls while transforming
      });

      window.addEventListener("resize", this.onWindowResize, false);
    },
    animate() {
      requestAnimationFrame(this.animate);

      // Update orbit controls for smooth camera movement
      this.orbitControls.update();

      // Render the scene
      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize() {
      this.camera.aspect =
        this.$refs.cubeContainer.offsetWidth /
        this.$refs.cubeContainer.offsetHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(
        this.$refs.cubeContainer.offsetWidth,
        this.$refs.cubeContainer.offsetHeight
      );
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onWindowResize);
  },
};
</script>

<style scoped>
.scene-container {
  width: 1000px;
  height: 500px;
  background-color: #000;
  margin-bottom: 20px;
}
.controls {
  display: flex;
  flex-direction: column;
}
.controls label {
  margin-top: 10px;
}
</style>
