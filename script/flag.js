import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.168/build/three.module.js";

const sections = document.querySelectorAll(".features, .vision-section");

sections.forEach(section => {

    const canvas = section.querySelector(".flagCanvas");

    if (!canvas) return;

    // Scene
    const scene = new THREE.Scene();

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Camera
    const camera = new THREE.PerspectiveCamera(
        40,
        section.clientWidth / section.clientHeight,
        0.1,
        100
    );

    camera.position.z = 4;

    // Texture
    const loader = new THREE.TextureLoader();

    loader.load("images/wvflag.webp", texture => {

        texture.colorSpace = THREE.SRGBColorSpace;

        const geometry = new THREE.PlaneGeometry(
            8,
            5,
            180,
            120
        );

        const material = new THREE.MeshPhongMaterial({
            map: texture,
            side: THREE.DoubleSide
        });

        const flag = new THREE.Mesh(geometry, material);
        scene.add(flag);

        // Lights
        const ambient = new THREE.AmbientLight(0xffffff, 1.5);
        scene.add(ambient);

        const light = new THREE.DirectionalLight(0xffffff, 2.2);
        light.position.set(3, 2, 5);
        scene.add(light);

        // Animation
        function animate(time) {

            requestAnimationFrame(animate);

            time *= 0.001;

            const pos = geometry.attributes.position;

            for (let i = 0; i < pos.count; i++) {

                const x = pos.getX(i);
                const y = pos.getY(i);

                const wave1 =
                    Math.sin(x * 2.2 - time * 2.2) * 0.12;

                const wave2 =
                    Math.sin(x * 5.5 - time * 4.0) * 0.05;

                const flutter =
                    Math.sin((x + y) * 4 - time * 5) * 0.02;

                pos.setZ(i, wave1 + wave2 + flutter);
            }

            pos.needsUpdate = true;
            geometry.computeVertexNormals();

            renderer.render(scene, camera);
        }

        animate(0);
    });

    // Resize
    function resize() {

        renderer.setSize(
            section.clientWidth,
            section.clientHeight
        );

        camera.aspect =
            section.clientWidth /
            section.clientHeight;

        camera.updateProjectionMatrix();
    }

    resize();

    window.addEventListener("resize", resize);

});