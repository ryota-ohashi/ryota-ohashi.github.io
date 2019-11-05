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

    // フォグを設定
    scene.fog = new THREE.Fog(0xffffff, 50, 2000);

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
    camera.position.set(0, 0, 1000);

    let rot = 0; // 角度
    let mouseX = 0; // マウス座標

    // マウス座標はマウスが動いた時のみ取得できる
    document.addEventListener("mousemove", (event) => {
      mouseX = event.pageX;
    });
    
    // 真ん中の箱
    const geometry1 = new THREE.BoxGeometry(200, 200, 200);
    const material1 = new THREE.MeshBasicMaterial({color: 0x000000, fog: false});
    const center_box = new THREE.Mesh(geometry1, material1);
    scene.add(center_box);
    
    // 空のジオメトリーを作成
    const geometry = new THREE.Geometry();
    
    for (let i = 0; i < 800; i++) {
      const meshTemp = new THREE.Mesh(new THREE.BoxGeometry(50, 50, 50));
      meshTemp.position.x = (Math.random() - 0.5) * 2000;
      meshTemp.position.y = (Math.random() - 0.5) * 2000;
      meshTemp.position.z = (Math.random() - 0.5) * 2000;
      meshTemp.rotation.x = Math.random() * 2 * Math.PI;
      meshTemp.rotation.y = Math.random() * 2 * Math.PI;
      meshTemp.rotation.z = Math.random() * 2 * Math.PI;
      
      // メッシュの結合
      geometry.mergeMesh(meshTemp);
    }
    
    const material = new THREE.MeshStandardMaterial({color: 0x000000});
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 光源
    scene.add(new THREE.DirectionalLight(0xffffff, 2)); // 平行光源
    scene.add(new THREE.AmbientLight(0xffffff)); // 環境光源

    // クリックしたら周りの黒箱を降下
    let down = false;
    const button = document.querySelector('.button');

    button.addEventListener('click', function(){
      down = true;
    });

    // 毎フレーム時に実行されるループイベント
    tick();
    function tick() {
      // 回す
      mesh.rotateY(0.002);
      center_box.rotation.y += 0.01;
      center_box.rotation.x += 0.01;

      const targetRot = (mouseX / window.innerWidth) * 360;
      // イージングの公式を用いて滑らかにする
      // 値 += (目標値 - 現在の値) * 減速値
      rot += (targetRot - rot) * 0.005;

      // ラジアンに変換する
      const radian = rot * Math.PI / 180;
      // 角度に応じてカメラの位置を設定
      camera.position.x = 1000 * Math.sin(radian);
      // camera.position.y = 500 * Math.sin(radian);
      camera.position.z = 1000 * Math.cos(radian);
      // 原点方向を見つめる
      camera.lookAt(new THREE.Vector3(0, 0, 0));

        if(down){
          mesh.position.y -= 15;
        }

      renderer.render(scene, camera); // レンダリング

      requestAnimationFrame(tick);
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