import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCw, Eye, Activity, Cpu, Gauge } from 'lucide-react';

export const KozEngineDemo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [wireframeOnly, setWireframeOnly] = useState(false);
  const [particlesEnabled, setParticlesEnabled] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [fps, setFps] = useState(60);
  const [polyCount, setPolyCount] = useState(2400);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angleX = 0.5;
    let angleY = 0.5;
    let angleZ = 0.2;
    let lastTime = performance.now();
    let frameCount = 0;

    // Define 3D vertices of a cybernetic octahedron / icosahedron-like geometric core
    const vertices: [number, number, number][] = [];
    const numPoints = 26;
    for (let i = 0; i < numPoints; i++) {
      const theta = (i / numPoints) * Math.PI * 2;
      const phi = ((i % 5) / 5) * Math.PI - Math.PI / 2;
      const r = 110;
      vertices.push([
        r * Math.cos(phi) * Math.cos(theta),
        r * Math.sin(phi),
        r * Math.cos(phi) * Math.sin(theta)
      ]);
    }

    // Particle nodes floating in 3D
    const particles = Array.from({ length: 45 }, () => ({
      x: (Math.random() - 0.5) * 320,
      y: (Math.random() - 0.5) * 260,
      z: (Math.random() - 0.5) * 280,
      size: Math.random() * 2.5 + 1,
      speed: (Math.random() * 0.02 + 0.01)
    }));

    // Mouse drag rotation
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - lastMouseX;
      const deltaY = e.clientY - lastMouseY;
      angleY += deltaX * 0.008;
      angleX += deltaY * 0.008;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Render loop
    const render = (time: number) => {
      frameCount++;
      if (time - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (time - lastTime)));
        frameCount = 0;
        lastTime = time;
      }

      // Resize canvas to display size
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const fov = 350;

      if (isPlaying) {
        angleX += 0.008 * speedMultiplier;
        angleY += 0.012 * speedMultiplier;
        angleZ += 0.004 * speedMultiplier;
      }

      // Rotation matrix calculation
      const cosX = Math.cos(angleX), sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY), sinY = Math.sin(angleY);
      const cosZ = Math.cos(angleZ), sinZ = Math.sin(angleZ);

      const project = (x: number, y: number, z: number): [number, number, number] => {
        // Rot Y
        let x1 = cosY * x + sinY * z;
        let y1 = y;
        let z1 = -sinY * x + cosY * z;
        // Rot X
        let x2 = x1;
        let y2 = cosX * y1 - sinX * z1;
        let z2 = sinX * y1 + cosX * z1;
        // Rot Z
        let x3 = cosZ * x2 - sinZ * y2;
        let y3 = sinZ * x2 + cosZ * y2;
        let z3 = z2;

        const distance = fov / (fov + z3 + 180);
        return [centerX + x3 * distance, centerY + y3 * distance, z3];
      };

      // Draw background cyber grid circles
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.06)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 150, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);
      ctx.stroke();

      // Project vertices
      const projected = vertices.map(v => project(v[0], v[1], v[2]));

      // Draw mesh connections / polygons
      ctx.lineWidth = wireframeOnly ? 1.2 : 1.8;
      let edgesDrawn = 0;

      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1[0] - p2[0];
          const dy = p1[1] - p2[1];
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            edgesDrawn++;
            const alpha = Math.max(0.12, 1 - dist / 85);
            ctx.strokeStyle = wireframeOnly 
              ? `rgba(0, 242, 254, ${alpha * 0.7})` 
              : (i % 2 === 0 ? `rgba(0, 242, 254, ${alpha})` : `rgba(121, 40, 202, ${alpha * 0.9})`);
            ctx.beginPath();
            ctx.moveTo(p1[0], p1[1]);
            ctx.lineTo(p2[0], p2[1]);
            ctx.stroke();

            // Fill subtle glow polygon
            if (!wireframeOnly && j % 3 === 0) {
              ctx.fillStyle = `rgba(0, 242, 254, ${alpha * 0.04})`;
              ctx.beginPath();
              ctx.moveTo(centerX, centerY);
              ctx.lineTo(p1[0], p1[1]);
              ctx.lineTo(p2[0], p2[1]);
              ctx.closePath();
              ctx.fill();
            }
          }
        }
      }

      setPolyCount(edgesDrawn * 3);

      // Render vertices glowing nodes
      projected.forEach((p, idx) => {
        const radius = Math.max(1.5, 3.5 * (fov / (fov + p[2] + 180)));
        ctx.fillStyle = idx % 2 === 0 ? '#00f2fe' : '#7928ca';
        ctx.beginPath();
        ctx.arc(p[0], p[1], radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render 3D floating particles
      if (particlesEnabled) {
        particles.forEach(pt => {
          if (isPlaying) {
            pt.y += Math.sin(time * 0.001 + pt.x) * pt.speed;
          }
          const [px, py, pz] = project(pt.x, pt.y, pt.z);
          const pAlpha = Math.max(0.2, (pz + 200) / 400);
          ctx.fillStyle = `rgba(0, 223, 137, ${pAlpha * 0.75})`;
          ctx.beginPath();
          ctx.arc(px, py, pt.size, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isPlaying, wireframeOnly, particlesEnabled, speedMultiplier]);

  return (
    <section id="engine-demo" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill emerald">
            <Activity size={14} />
            <span>Interactive Graphics Technology</span>
          </div>
          <h2>
            Live 3D Graphics Engine —{' '}
            <span className="gradient-text-cyan">Powered by KozEngine</span>
          </h2>
          <p>
            We don't just build websites; we build real-time rendering pipelines, 3D math systems, and custom game engines. Interact with this live spatial viewport below.
          </p>
        </div>

        {/* Interactive Viewport Canvas Box */}
        <div className="glass-card" style={{
          padding: '1.25rem',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          boxShadow: '0 20px 50px -15px rgba(0, 242, 254, 0.15)',
          maxWidth: '1020px',
          margin: '0 auto'
        }}>
          {/* Top Engine Viewport Toolbar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '1rem',
            marginBottom: '1rem',
            borderBottom: '1px solid var(--card-border)',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'var(--accent-emerald)',
                boxShadow: '0 0 10px var(--accent-emerald)'
              }}></div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>
                KozEngine v1.0.4 [WebGL / Spatial Mesh Matrix]
              </span>
              <span style={{
                fontSize: '0.75rem',
                background: 'rgba(0, 242, 254, 0.12)',
                color: 'var(--accent-cyan)',
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                fontFamily: 'var(--font-mono)'
              }}>
                INTERACTIVE
              </span>
            </div>

            {/* Viewport Control Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  background: isPlaying ? 'rgba(0, 242, 254, 0.15)' : 'var(--bg-tertiary)',
                  color: isPlaying ? 'var(--accent-cyan)' : 'var(--text-main)',
                  border: '1px solid var(--card-border)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>

              <button
                onClick={() => setWireframeOnly(!wireframeOnly)}
                style={{
                  background: wireframeOnly ? 'rgba(121, 40, 202, 0.25)' : 'var(--bg-tertiary)',
                  color: wireframeOnly ? 'var(--accent-purple)' : 'var(--text-main)',
                  border: '1px solid var(--card-border)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <Eye size={14} />
                <span>{wireframeOnly ? 'Wireframe: ON' : 'Solid: ON'}</span>
              </button>

              <button
                onClick={() => setParticlesEnabled(!particlesEnabled)}
                style={{
                  background: particlesEnabled ? 'rgba(0, 223, 137, 0.15)' : 'var(--bg-tertiary)',
                  color: particlesEnabled ? 'var(--accent-emerald)' : 'var(--text-main)',
                  border: '1px solid var(--card-border)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <Cpu size={14} />
                <span>Particles: {particlesEnabled ? 'ON' : 'OFF'}</span>
              </button>

              <button
                onClick={() => setSpeedMultiplier(prev => prev === 1 ? 2 : (prev === 2 ? 0.5 : 1))}
                style={{
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-main)',
                  border: '1px solid var(--card-border)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <Gauge size={14} />
                <span>Speed: {speedMultiplier}x</span>
              </button>
            </div>
          </div>

          {/* Canvas Viewport Area */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '420px',
            backgroundColor: '#05070e',
            borderRadius: '0.75rem',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.06)'
          }}>
            <canvas 
              ref={canvasRef} 
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
                cursor: 'grab'
              }}
            />

            {/* Live HUD Telemetry Overlay */}
            <div style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              background: 'rgba(6, 8, 15, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '0.5rem',
              padding: '0.65rem 1rem',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
              pointerEvents: 'none'
            }}>
              <div style={{ color: 'var(--accent-emerald)', display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                <span>FPS:</span>
                <strong>{fps}.0</strong>
              </div>
              <div style={{ color: 'var(--accent-cyan)', display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                <span>Polys:</span>
                <strong>{polyCount}</strong>
              </div>
              <div style={{ color: '#cbd5e1', display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                <span>Draw Calls:</span>
                <strong>1</strong>
              </div>
              <div style={{ color: '#c084fc', display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                <span>Memory:</span>
                <strong>12.4 MB</strong>
              </div>
            </div>

            {/* Interaction Hint Overlay */}
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              right: '1rem',
              background: 'rgba(6, 8, 15, 0.75)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '0.5rem',
              padding: '0.4rem 0.85rem',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              pointerEvents: 'none'
            }}>
              <RotateCw size={13} color="var(--accent-cyan)" />
              <span>Click & Drag to rotate 3D mesh</span>
            </div>
          </div>

          {/* Engine Capability Footer Summary */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginTop: '1.25rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--card-border)',
            fontSize: '0.85rem',
            color: 'var(--text-secondary)'
          }}>
            <div>
              <strong style={{ color: 'var(--text-main)', display: 'block' }}>Zero-Dependency Core</strong>
              <span>Custom rendering pipeline without bloated overhead.</span>
            </div>
            <div>
              <strong style={{ color: 'var(--text-main)', display: 'block' }}>Unified Cross-Platform</strong>
              <span>Compiles directly to WebGL, Mobile, and Native PC targets.</span>
            </div>
            <div>
              <strong style={{ color: 'var(--text-main)', display: 'block' }}>Real-Time Physics & Shaders</strong>
              <span>Deterministic physics solver and programmable materials.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
