console.log(THREE)

/* 
4 elements:
    1. scene (container for objects)
    2. object
        - created by a mesh:
            i. geometry (shape) BoxGeometry
                - pass 3 dimensions into arg
            ii. material (visuals) MeshBasicMaterial
                - pass object into arg
    3. camera
        - PerspectiveCamera
            i. arg 1: (vertical) field of view (fov) in degrees
            ii. arg 2: aspect ratio (size of width / size of height)
    4. renderer
        - from 1 camera
        i. add <canvas class=""></canvas> in html
*/

// 1. scene
const scene = new THREE.Scene()

// 2. object aka mesh - red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material) // or const redCube
scene.add(mesh)

// 3. camera
const sizes = { width: 800, height: 600 }
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) // can use other cameras
camera.position.z = 4
camera.position.x = -1
scene.add(camera)

// 4. renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas // = canvas: canvas
})
renderer.setSize(sizes.width, sizes.height) // renderer's size
renderer.render(scene, camera) // render

