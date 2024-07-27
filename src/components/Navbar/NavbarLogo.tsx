import { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const NavbarLogo: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const app = new Application(canvasRef.current);
            app.load('https://prod.spline.design/L7Drm2Va6FaO6ZnC/scene.splinecode');
        }
    }, []);
    
    return (
        <div style={{ transform: 'scale(0.33)', transformOrigin: 'bottom left', margin: 0, padding: 0, display: 'inline-block' }}>
            <canvas id="canvas3d" ref={canvasRef} style={{ display: 'block', margin: 0, padding: 0 }}></canvas>
        </div>
    );
};

export default NavbarLogo;