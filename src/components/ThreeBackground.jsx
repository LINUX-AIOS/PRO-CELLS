import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 60;

    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let scrollY = 0;

    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    
    const onScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll);

    // ─── Colors ───
    const colorSecondary = new THREE.Color('#d1d4d0');

    // ─── Molecular Node System ───
    const nodes = [];
    const nodeCount = 50;
    const nodeGroup = new THREE.Group();
    
    for (let i = 0; i < nodeCount; i++) {
      const geo = new THREE.IcosahedronGeometry(0.6, 0);
      const mat = new THREE.MeshBasicMaterial({ color: colorSecondary, transparent: true, opacity: 0.15 });
      const mesh = new THREE.Mesh(geo, mat);
      
      mesh.position.set(
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 60
      );
      
      nodes.push({
        mesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.04
        )
      });
      nodeGroup.add(mesh);
    }
    scene.add(nodeGroup);

    // ─── Connections (Dynamic Lines) ───
    const lineMat = new THREE.LineBasicMaterial({ color: colorSecondary, transparent: true, opacity: 0.05 });
    const lineGroup = new THREE.Group();
    scene.add(lineGroup);

    // ─── Floating Hexagons (Wireframes) ───
    const hexGroup = new THREE.Group();
    for (let i = 0; i < 15; i++) {
      const hexGeo = new THREE.IcosahedronGeometry(Math.random() * 5 + 3, 0);
      const hexMat = new THREE.MeshBasicMaterial({ color: colorSecondary, wireframe: true, transparent: true, opacity: 0.08 });
      const mesh = new THREE.Mesh(hexGeo, hexMat);
      mesh.position.set((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 50);
      hexGroup.add(mesh);
    }
    scene.add(hexGroup);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      // Mouse Interaction
      target.x += (mouse.x * 10 - target.x) * 0.05;
      target.y += (mouse.y * 5 - target.y) * 0.05;
      
      // Scroll Interaction (Parallax & Depth)
      const scrollOffset = scrollY * 0.05;
      nodeGroup.position.z = scrollOffset;
      nodeGroup.rotation.y = scrollOffset * 0.1;
      hexGroup.position.z = scrollOffset * 0.5;
      hexGroup.rotation.x = scrollOffset * 0.05;

      camera.position.x = target.x;
      camera.position.y = target.y;
      camera.lookAt(0, 0, 0);

      // Move nodes
      nodes.forEach(n => {
        n.mesh.position.add(n.velocity);
        if (Math.abs(n.mesh.position.x) > 70) n.velocity.x *= -1;
        if (Math.abs(n.mesh.position.y) > 70) n.velocity.y *= -1;
        if (Math.abs(n.mesh.position.z) > 50) n.velocity.z *= -1;
      });

      // Update lines between nearby nodes (optimized: only every few frames)
      if (Math.floor(frameId) % 2 === 0) {
        lineGroup.clear();
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dist = nodes[i].mesh.position.distanceTo(nodes[j].mesh.position);
            if (dist < 25) {
              const points = [nodes[i].mesh.position, nodes[j].mesh.position];
              const geometry = new THREE.BufferGeometry().setFromPoints(points);
              const line = new THREE.Line(geometry, lineMat);
              lineGroup.add(line);
            }
          }
        }
      }

      hexGroup.children.forEach((h, i) => {
        h.rotation.x += 0.001 * (i % 2 === 0 ? 1 : -1);
        h.rotation.y += 0.001;
      });

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: '#1d2f40'
      }}
    />
  );
};

export default ThreeBackground;
