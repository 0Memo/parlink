import { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const Earth: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const app = new Application(canvasRef.current);
            app.load('https://prod.spline.design/gJD4RMY8A5P1Q0lY/scene.splinecode');
        }
    }, []);

    return <canvas id="canvas3d" ref={canvasRef} className="w-full h-96"></canvas>;

    /* return (
        <div style={{ transform: 'scale(0.23)', transformOrigin: 'top left', width: '300%', height: '300%' }}>
            <canvas id="canvas3d" ref={canvasRef} className="w-full h-96"></canvas>
        </div>
    ); */
};

export default Earth;