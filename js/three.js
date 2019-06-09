// ページの読み込みを待つ
// window.addEventListener('load', init);

// function init() {

//   // シーンを作成
//   const scene = new THREE.Scene();

//   // カメラを作成
//   const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
//   camera.position.set(0, 0, 1000);
  
//   // レンダラーを作成
//   const renderer = new THREE.WebGLRenderer({
//     canvas: document.querySelector('#canvas')
//   });

//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.setClearColor(0xffffff, 1.0);

//   // 箱を作成
//   const geometry = new THREE.BoxGeometry(200, 200, 200);
//   const material = new THREE.MeshStandardMaterial({color: 0x000000});
//   const box = new THREE.Mesh(geometry, material);
//   scene.add(box);

//   // 環境光源
//   const light = new THREE.AmbientLight(0xFFFFFF, 10.0);
//   scene.add(light);

//   // 平行光源
//   const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
//   directionalLight.position.set(300, 300, 300);
//   // シーンに追加
//   scene.add(directionalLight);

//   tick();

//   // 毎フレーム時に実行されるループイベントです
//   function tick() {
//     box.rotation.y += 0.02;
//     box.rotation.x += 0.02;
//     // camera.position.z -= 1;
//     renderer.render(scene, camera); // レンダリング

//     requestAnimationFrame(tick);
//   }
// }

window.addEventListener('load', init);

  function init() {

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#canvas'),
      antialias: true,
      devicePixelRatio: window.devicePixelRatio
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 1.0);
    // シーンを作成
    const scene = new THREE.Scene();
    const scene1 = new THREE.Scene();
    // フォグを設定
    scene.fog = new THREE.Fog(0xffffff, 50, 2000);
    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
    camera.position.set(0, 0, 1000);
    // メインの箱
    const geometry1 = new THREE.BoxGeometry(200, 200, 200);
    const material1 = new THREE.MeshBasicMaterial({color: 0x000000, fog: false});
    const box1 = new THREE.Mesh(geometry1, material1);
    scene.add(box1);
    // グループを作成
    const group = new THREE.Group();
    scene.add(group);
    const geometry = new THREE.BoxBufferGeometry(50, 50, 50);
    const material = new THREE.MeshStandardMaterial({color: 0x000000});
    for (let i = 0; i < 1000; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = (Math.random() - 0.5) * 2000;
      mesh.position.y = (Math.random() - 0.5) * 2000;
      mesh.position.z = (Math.random() - 0.5) * 2000;
      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.rotation.z = Math.random() * 2 * Math.PI;
      // グループに格納する
      group.add(mesh);
    }
    // 軸表示用
    // axisHelper = new THREE.AxisHelper(1000);
    // scene.add(axisHelper);
    // 光源
    scene.add(new THREE.DirectionalLight(0xffffff, 2)); // 平行光源
    scene.add(new THREE.AmbientLight(0xffffff)); // 環境光源
    // 毎フレーム時に実行されるループイベントです
    tick();
    function tick() {
      // グループを回す
      group.rotateY(0.002);
      box1.rotation.y += 0.01;
      box1.rotation.x += 0.01;

        if(camera.position.y == 1){
          // camera.position.z -= 5;
          box1.scale.x += 0.02;
          box1.scale.y += 0.02;
          box1.scale.z += 0.02;
          group.position.y -= 15;
        }

      renderer.render(scene, camera); // レンダリング
      // renderer.render(scene1, camera);
      requestAnimationFrame(tick);
    }

    // クリックしたらズームするための変更
    const button = document.querySelector('.button');

    button.addEventListener('click', zoom);
    function zoom() {
      camera.position.y = 1;
    }

    // リサイズ用
    onResize();
    // リサイズイベント発生時に実行
    window.addEventListener('resize', onResize);
  
    function onResize() {
  
      // レンダラーのサイズを調整する
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
  
      // カメラのアスペクト比を正す
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }
  }