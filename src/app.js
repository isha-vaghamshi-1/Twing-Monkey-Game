import * as THREE from "three";

// SVG Asset Generator
const svgToDataUrl = (svgString) => {
  return "data:image/svg+xml;base64," + btoa(svgString);
};

// Define SVGs Inline
const jungleBgSvg = `
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#b2ebf2;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#4dd0e1;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="treeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
             <stop offset="0%" style="stop-color:#2e7d32;stop-opacity:1" />
             <stop offset="100%" style="stop-color:#1b5e20;stop-opacity:1" />
        </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#sky)" />
    <path d="M0,600 L0,300 C50,280 100,320 150,300 C200,280 250,320 300,300 C350,280 400,320 450,300 C500,280 550,320 600,300 C650,280 700,320 750,300 C800,280 850,320 900,300 L900,600 Z" 
          fill="#81c784" opacity="0.6"/>
     <path d="M-50,600 L-50,350 C20,330 80,360 120,340 C180,320 220,350 280,330 C340,310 400,340 450,320 C520,300 580,340 650,320 C720,300 780,340 850,320 L850,600 Z" 
          fill="url(#treeGradient)" opacity="0.8"/>
    <path d="M50,0 Q70,100 50,200" stroke="#2e7d32" stroke-width="5" fill="none"/>
    <path d="M750,0 Q730,150 750,250" stroke="#2e7d32" stroke-width="5" fill="none"/>
</svg>`.trim();

const uiBoardSvg = `
<svg width="300" height="100" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="wood" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#8d6e63;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#5d4037;stop-opacity:1" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="2" dy="2" result="offsetblur"/>
            <feComponentTransfer><feFuncA type="linear" slope="0.5"/></feComponentTransfer>
            <feMerge><feMergeNode in="offsetblur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
    </defs>
    <rect x="10" y="10" width="280" height="80" rx="15" ry="15" fill="url(#wood)" stroke="#3e2723" stroke-width="3" filter="url(#shadow)"/>
    <path d="M30,30 Q150,20 270,30" stroke="#4e342e" stroke-width="2" fill="none" opacity="0.5"/>
    <path d="M30,70 Q150,80 270,70" stroke="#4e342e" stroke-width="2" fill="none" opacity="0.5"/>
    <circle cx="25" cy="25" r="3" fill="#3e2723"/><circle cx="275" cy="25" r="3" fill="#3e2723"/>
    <circle cx="25" cy="75" r="3" fill="#3e2723"/><circle cx="275" cy="75" r="3" fill="#3e2723"/>
</svg>`.trim();

const coinSvg = `
<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="gold" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
            <stop offset="0%" style="stop-color:#fff176;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#fbc02d;stop-opacity:1" />
        </radialGradient>
    </defs>
    <circle cx="32" cy="32" r="28" fill="#f57f17" />
    <circle cx="32" cy="32" r="25" fill="url(#gold)" stroke="#f9a825" stroke-width="2"/>
    <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-weight="bold" font-size="30" fill="#f57f17">$</text>
</svg>`.trim();

const bananaSvg = `
<svg width="64px" height="64" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M746.666667 234.666667c21.333333 0 149.333333-21.333333 149.333333 170.666666S618.666667 938.666667 234.666667 938.666667c-42.666667 0-85.333333-21.333333-85.333334-21.333334l-21.333333-64s21.333333-85.333333 149.333333-149.333333 218.944-117.632 273.344-172.010667C593.344 489.344 661.333333 405.333333 661.333333 341.333333c0-41.770667 42.666667-85.333333 42.666667-85.333333" fill="#FFE082" /><path d="M170.666667 874.666667s149.333333-42.666667 277.333333-106.666667 405.333333-256 320-533.333333c0 0 128-21.333333 128 170.666666S618.666667 938.666667 234.666667 938.666667c-42.666667 0-85.333333-21.333333-85.333334-21.333334l21.333334-42.666666z" fill="#FFCA28" /><path d="M876.010667 297.344C836.010667 211.562667 746.666667 256 746.666667 85.333333c-64 0-106.666667 42.666667-106.666667 42.666667s64 64 64 128c42.666667 0 77.056-3.349333 80.874667 101.333333 28.842667-122.218667 91.136-59.989333 91.136-59.989333z" fill="#C0CA33" /><path d="M661.333333 341.333333s-1.344-38.677333 42.666667-85.333333 85.994667-8.661333 85.994667-8.661333l-5.12 109.994666s-18.666667-69.333333-48-71.104C675.008 282.496 661.333333 341.333333 661.333333 341.333333z" fill="#C0CA33" /><path d="M128 874.666667l21.333333 42.666666h21.333334v-42.666666l-42.666667-21.333334z" fill="#5D4037" /><path d="M746.666667 85.333333c-64 0-106.666667 42.666667-106.666667 42.666667h64l42.666667-42.666667z" fill="#827717" /></svg>`.trim();

const grassTextureSvg = `
<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" fill="#43a047"/>
    <path d="M10,64 L15,50 L20,64 Z M30,64 L35,45 L40,64 Z M50,64 L55,55 L60,64 Z" fill="#2e7d32"/>
</svg>`.trim();

const Assets = {
  jungleBg: svgToDataUrl(jungleBgSvg),
  uiBoard: svgToDataUrl(uiBoardSvg),
  coin: svgToDataUrl(coinSvg),
  banana: svgToDataUrl(bananaSvg),
  grassTexture: svgToDataUrl(grassTextureSvg),
};

/**
 * Cartoon Monkey Mesh (2D Sprite version)
 */
class Monkey {
  constructor() {
    this.group = new THREE.Group();

    // Load textures
    const loader = new THREE.TextureLoader();
    this.standTexture = loader.load("assets/frames/frame_00_delay-0.04s.gif");
    this.standTexture.colorSpace = THREE.SRGBColorSpace;

    // Load 51 frames for running
    this.runFrames = [];
    for (let i = 0; i <= 50; i++) {
      const frameNum = i.toString().padStart(2, "0");
      const texture = loader.load(`assets/frames/frame_${frameNum}_delay-0.04s.gif`);
      texture.colorSpace = THREE.SRGBColorSpace;
      this.runFrames.push(texture);
    }

    // Create a Plane for the monkey sprite
    const geometry = new THREE.PlaneGeometry(60, 60); // Slightly larger for frames
    this.material = new THREE.MeshBasicMaterial({
      map: this.standTexture,
      transparent: true,
      alphaTest: 0.1,
      side: THREE.DoubleSide,
    });

    this.mesh = new THREE.Mesh(geometry, this.material);
    this.mesh.position.y = 17; // Lowered from 30 to close transparency gap
    this.group.add(this.mesh);

    this.frameIndex = 0;
    this.frameTime = 0;
    this.fps = 25; // 0.04s delay = 25 fps
  }

  update(time, isWalking, dt) {
    if (isWalking) {
      // Cycle through frames
      this.frameTime += dt;
      if (this.frameTime >= 1 / this.fps) {
        this.frameIndex = (this.frameIndex + 1) % this.runFrames.length;
        this.material.map = this.runFrames[this.frameIndex];
        this.frameTime = 0;
      }
      this.mesh.scale.y = 1;
      this.mesh.position.y = 19;
      this.mesh.rotation.z = 0;
    } else {
      if (this.material.map !== this.standTexture) {
        this.material.map = this.standTexture;
        this.frameIndex = 0;
        this.frameTime = 0;
      }
      this.mesh.scale.y = 1;
      this.mesh.position.y = 17;
      this.mesh.rotation.z = 0;
    }
  }

  fall(dt) {
    this.group.position.y -= 600 * dt;
    this.group.rotation.z += 8 * dt;
  }
}

/**
 * Banana Item
 */
class Banana {
  constructor() {
    this.group = new THREE.Group();
    const loader = new THREE.TextureLoader();
    const texture = loader.load(Assets.banana);
    texture.colorSpace = THREE.SRGBColorSpace;

    const geometry = new THREE.PlaneGeometry(25, 25);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide,
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.group.add(this.mesh);
    this.collected = false;
  }

  update(time) {
    if (this.collected) return;
    // Animation removed as requested
  }

  collect() {
    this.collected = true;
    this.group.visible = false;
  }
}

/**
 * Wooden Bridge Stick
 */
class Stick {
  constructor() {
    this.length = 0;
    const geo = new THREE.BoxGeometry(6, 1, 6);
    geo.translate(0, 0.5, 0);
    const mat = new THREE.MeshStandardMaterial({
      color: "#713F12", // Darker wood
      roughness: 0.9,
    });
    this.mesh = new THREE.Mesh(geo, mat);
    this.reset();
  }

  reset() {
    this.length = 0;
    this.mesh.scale.y = 0.001;
    this.mesh.rotation.z = 0;
    this.mesh.visible = false;
  }

  grow(dt) {
    if (this.length >= 200) {
      this.length = 200;
    } else {
      this.length += 400 * dt;
    }
    this.mesh.scale.y = this.length;
    this.mesh.visible = true;
  }
}

/**
 * Platform with Grass Top
 */
class PlatformManager {
  constructor(scene, game) {
    this.scene = scene;
    this.game = game; // access score
    this.platforms = [];
    this.bananas = [];
  }

  init() {
    this.platforms.forEach((p) => this.scene.remove(p.mesh));
    this.bananas.forEach((b) => this.scene.remove(b.group));
    this.platforms = [];
    this.bananas = [];
    this.createPlatform(0, 100, 0); // first platform
    this.generateNext();
  }

  createPlatform(x, width, y) {
    const group = new THREE.Group();
    const trunkHeight = 600;
    const bodyGeo = new THREE.BoxGeometry(width, trunkHeight, 50);
    const bodyMat = new THREE.MeshStandardMaterial({ color: "#5D4037" });
    const trunk = new THREE.Mesh(bodyGeo, bodyMat);
    trunk.position.y = -trunkHeight / 2;
    group.add(trunk);

    const topGeo = new THREE.BoxGeometry(width, 5, 54);
    const topMat = new THREE.MeshStandardMaterial({ color: "#855f54" });
    const top = new THREE.Mesh(topGeo, topMat);
    top.position.y = 0;
    group.add(top);

    group.position.set(x + width / 2, y, 0);
    this.scene.add(group);
    this.platforms.push({ mesh: group, x, width, y });
  }

  generateNext() {
    const last = this.platforms[this.platforms.length - 1];
    const score = this.game.score;

    let width;
    let yDiff;

    // GAP stays slightly progressive
    const gap = 80 + Math.random() * 120;

    // 🟢 Platforms 1–10 (easy)
    if (score < 10) {
      width = 80;
      yDiff = 0;
    }

    // 🟡 Platforms 11–20 (same width, height varies)
    else if (score < 20) {
      width = 80;
      yDiff = (Math.random() - 0.5) * 80; // ±40
    }

    // 🔴 Platforms 21+ (hard)
    else {
      width = 30 + Math.random() * 40; // smaller & random
      yDiff = (Math.random() - 0.5) * 120; // ±60
    }

    const y = last.y + yDiff;
    const newX = last.x + last.width + gap;
    this.createPlatform(newX, width, y);

    // Add banana if score < 10 (gap 1 to 10)
    if (score < 10) {
      this.createBanana(last, { x: newX, width, y });
    }
  }

  createBanana(prev, next) {
    const banana = new Banana();
    const dx = next.x - (prev.x + prev.width);
    const dy = next.y - prev.y;
    const midX = prev.x + prev.width + dx / 2;
    const midY = prev.y + 2.5 + dy / 2 + 15; // Raised slightly above stick
    banana.group.position.set(midX, midY, 0);
    this.scene.add(banana.group);
    this.bananas.push(banana);
  }

  advance() {
    if (this.platforms.length > 0) {
      const old = this.platforms.shift();
      this.scene.remove(old.mesh);
    }
    // Clean up collected bananas or off-screen bananas
    this.bananas = this.bananas.filter((b) => {
      if (
        b.group.position.x < this.game.camera.position.x - 400 ||
        b.collected
      ) {
        this.scene.remove(b.group);
        return false;
      }
      return true;
    });
  }
}

/**
 * Game Core
 */
class Game {
  constructor() {
    this.state = "menu";
    this.score = 0;
    this.bananasCollected = 0;
    this.bestScore = localStorage.getItem("monkey_best") || 0;

    // Apply UI Assets
    // (Score board and coin icons removed for cleaner look)

    this.setupScene();
    this.platforms = new PlatformManager(this.scene, this);
    this.monkey = new Monkey();
    this.stick = new Stick();

    this.scene.add(this.monkey.group);
    this.scene.add(this.stick.mesh);

    this.setupInputs();
    this.reset();

    this.clock = new THREE.Clock();
    this.renderer.setAnimationLoop(() => this.update());
    window.addEventListener("resize", () => this.onResize());
  }

  setupScene() {
    const container = document.getElementById("game-play-area");
    const w = container.clientWidth;
    const h = container.clientHeight;

    this.scene = new THREE.Scene();
    // Load background
    const loader = new THREE.TextureLoader();
    const bgTexture = loader.load("assets/images/body-bg-img.png");
    bgTexture.colorSpace = THREE.SRGBColorSpace;
    this.scene.background = bgTexture;

    const aspect = w / h;
    const viewSize = 600;
    this.camera = new THREE.OrthographicCamera(
      (-viewSize * aspect) / 2,
      (viewSize * aspect) / 2,
      viewSize / 2,
      -viewSize / 2,
      0.1,
      1000,
    );
    this.camera.position.set(100, 0, 100);
    this.camera.lookAt(100, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);

    const sun = new THREE.DirectionalLight(0xffffff, 1.2);
    sun.position.set(50, 100, 50);
    this.scene.add(sun, new THREE.AmbientLight(0xffffff, 0.6));
  }

  onResize() {
    const container = document.getElementById("game-play-area");
    const aspect = container.clientWidth / container.clientHeight;
    const viewSize = 600;
    this.camera.left = (-viewSize * aspect) / 2;
    this.camera.right = (viewSize * aspect) / 2;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
  }

  setupInputs() {
    const startGrow = () => {
      if (this.state === "running") {
        this.isGrowing = true;
        document.getElementById("instruction").classList.add("hidden");
      }
    };
    const stopGrow = () => {
      if (this.isGrowing) {
        this.isGrowing = false;
        this.state = "rotating";
      }
    };

    const wrapper = document.getElementById("game-play-area");
    wrapper.addEventListener("mousedown", startGrow);
    window.addEventListener("mouseup", stopGrow);
    wrapper.addEventListener(
      "touchstart",
      (e) => {
        e.preventDefault();
        startGrow();
      },
      { passive: false },
    );
    window.addEventListener("touchend", stopGrow);

    document.getElementById("start-btn").onclick = () => this.start();
    document.getElementById("restart-btn").onclick = () => this.start();
    document.getElementById("home-btn").onclick = () => this.resetToMenu();
  }

  resetToMenu() {
    this.reset();
    document.getElementById("menu-screen").classList.remove("hidden");
    document.getElementById("gameover-screen").classList.add("hidden");
    document.querySelector(".hud").classList.add("hidden");
    document.getElementById("game-play-area").style.opacity = 0;
  }

  reset() {
    this.score = 0;
    this.bananasCollected = 0;
    this.updateScoreUI();
    this.platforms.init();
    this.stick.reset();
    const p1 = this.platforms.platforms[0];
    const p2 = this.platforms.platforms[1];
    const dx = p2.x - (p1.x + p1.width);
    const dy = p2.y - p1.y;
    this.slopeAngle = Math.atan2(dy, dx);
    this.targetStickRotation = this.slopeAngle - Math.PI / 2;

    this.monkey.group.position.set(p1.width - 15, p1.y + 2.5, 0);
    this.monkey.group.rotation.z = 0; // Ensure 0 tilt on start
    this.camera.position.x = this.monkey.group.position.x + 100;
    this.state = "menu";
  }

  start() {
    this.reset();
    this.state = "running";
    document.getElementById("menu-screen").classList.add("hidden");
    document.getElementById("gameover-screen").classList.add("hidden");
    // Show HUD and Instruction
    document.querySelector(".hud").classList.remove("hidden");
    document.getElementById("instruction").classList.remove("hidden");
    document.getElementById("game-play-area").style.opacity = 1;
  }

  updateScoreUI() {
    document.getElementById("score-display").innerText = this.score;
  }

  update() {
    const dt = Math.min(this.clock.getDelta(), 0.1);
    const time = this.clock.getElapsedTime();

    if (this.state === "running") {
      this.monkey.update(time, false, dt);
      if (this.isGrowing) {
        const p = this.platforms.platforms[0];
        this.stick.mesh.position.set(p.x + p.width, p.y + 2.5, 0); // Set at current platform height
        this.stick.grow(dt);
      }
    }

    if (this.state === "rotating") {
      this.stick.mesh.rotation.z -= 7 * dt;
      if (this.stick.mesh.rotation.z <= this.targetStickRotation) {
        this.stick.mesh.rotation.z = this.targetStickRotation;
        this.checkLanding();
      }
    }

    if (this.state === "walking") {
      this.monkey.update(time, true, dt);
      const walkSpeed = 200;
      this.monkey.group.position.x += walkSpeed * dt;

      const p1 = this.platforms.platforms[0];
      const p2 = this.platforms.platforms[1];
      const startX = p1.x + p1.width;
      const startY = p1.y + 2.5;

      // Banana Collision Check
      this.platforms.bananas.forEach((banana) => {
        if (!banana.collected) {
          const dist = this.monkey.group.position.distanceTo(
            banana.group.position,
          );
          if (dist < 30) {
            banana.collect();
            this.bananasCollected++;
          }
        }
      });

      // Only follow slope while NOT yet on the flat platform (or if failing)
      if (this.isSuccess && this.monkey.group.position.x >= p2.x) {
        // Level out on target platform
        this.monkey.group.position.y = p2.y + 2.5;
        this.monkey.group.rotation.z = 0;
      } else {
        // Follow the slope of the stick
        const dx = this.monkey.group.position.x - startX;
        this.monkey.group.position.y = startY + dx * Math.tan(this.slopeAngle);
        this.monkey.group.rotation.z = this.slopeAngle;
      }

      if (this.monkey.group.position.x >= this.targetX) {
        this.monkey.group.position.x = this.targetX;
        this.monkey.group.position.y = this.targetY;
        this.monkey.group.rotation.z = 0;
        this.finishWalk();
      }
    }

    if (this.state === "transitioning") {
      this.monkey.update(time, false, dt); // Keep alive during cam move
      const targetCamX = this.monkey.group.position.x + 100;
      const targetCamY = this.monkey.group.position.y;
      this.camera.position.x += (targetCamX - this.camera.position.x) * 0.1;
      this.camera.position.y += (targetCamY - this.camera.position.y) * 0.1;
      this.camera.lookAt(this.camera.position.x, targetCamY, 0);

      if (Math.abs(this.camera.position.x - targetCamX) < 1) {
        this.platforms.advance();
        this.stick.reset();
        this.state = "running";
      }
    }

    if (this.state === "falling") {
      this.monkey.fall(dt);
      if (this.monkey.group.position.y < -400) this.gameOver();
    }

    // Update Bananas
    this.platforms.bananas.forEach((b) => b.update(time));

    this.renderer.render(this.scene, this.camera);
  }

  checkLanding() {
    const p1 = this.platforms.platforms[0];
    const p2 = this.platforms.platforms[1];

    const dx = p2.x - (p1.x + p1.width);
    const dy = p2.y - p1.y;
    const distToEdge = Math.sqrt(dx * dx + dy * dy);
    const distToFarEdge = Math.sqrt(
      Math.pow(p2.x + p2.width - (p1.x + p1.width), 2) + dy * dy,
    );

    // Wall Collision Check:
    // If next platform is higher, and stick only reaches the x-start of it but at a lower Y
    const horizontalDistToWall = p2.x - (p1.x + p1.width);
    this.isWallHit =
      dy > 0 &&
      this.stick.length >= horizontalDistToWall &&
      this.stick.length < distToEdge;

    // Success if length is between distToEdge and distToFarEdge
    this.isSuccess =
      !this.isWallHit &&
      this.stick.length >= distToEdge &&
      this.stick.length <= distToFarEdge;

    if (this.isWallHit) {
      // Stop at the side of the platform
      this.targetX = p2.x;
      this.targetY =
        p1.y + 2.5 + (p2.x - (p1.x + p1.width)) * Math.tan(this.slopeAngle);
    } else {
      this.targetX = this.isSuccess
        ? p2.x + p2.width - 20
        : p1.x + p1.width + this.stick.length * Math.cos(this.slopeAngle);
      this.targetY = this.isSuccess
        ? p2.y + 2.5
        : p1.y + 2.5 + this.stick.length * Math.sin(this.slopeAngle);
    }

    if (this.isSuccess) {
      this.score++;
      this.updateScoreUI();
    }
    this.state = "walking";
  }

  finishWalk() {
    if (this.isSuccess) {
      this.state = "transitioning";
      this.platforms.generateNext();

      // Prepare next slope
      const p1 = this.platforms.platforms[1]; // After shift it will be p[0]
      const p2 = this.platforms.platforms[2];
      const dx = p2.x - (p1.x + p1.width);
      const dy = p2.y - p1.y;
      this.slopeAngle = Math.atan2(dy, dx);
      this.targetStickRotation = this.slopeAngle - Math.PI / 2;
    } else if (this.isWallHit) {
      // Hitting a wall is an immediate Game Over
      this.gameOver();
    } else {
      this.state = "falling";
    }
  }

  gameOver() {
    this.state = "gameOver";
    if (this.score > this.bestScore) {
      this.bestScore = this.score;
      localStorage.setItem("monkey_best", this.bestScore);
    }
    document.getElementById("final-score").innerText = this.score;
    document.getElementById("best-score").innerText = this.bestScore;
    // Calculate bananas (e.g., 2 per point + collected bananas)
    document.getElementById("bananas-collected").innerText =
      `+${this.score * 2 + this.bananasCollected}`;

    document.getElementById("gameover-screen").classList.remove("hidden");
  }
}

new Game();
