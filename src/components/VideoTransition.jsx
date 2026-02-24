import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import introVideo from '../assets/videos/intro_video.mp4';
import Button from './ui/Button';

const VideoTransition = () => {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const [isExiting, setIsExiting] = useState(false);

    // Dynamic exit transition (scale up slightly and fade to black)
    const exitTransition = () => {
        setIsExiting(true);
        // Wait for the exit animation to finish before navigating
        setTimeout(() => {
            navigate('/');
        }, 700); // 700ms exit animation
    };

    const handleVideoEnd = () => {
        exitTransition();
    };

    const handleSkip = () => {
        exitTransition();
    };

    useEffect(() => {
        if (videoRef.current) {
            // Speed up the video natively slightly for a punchier feel
            videoRef.current.playbackRate = 1.2;
            videoRef.current.play().catch(error => {
                console.error("Video auto-play failed. User interaction might be required.", error);
            });
        }
    }, []);

    return (
        <div className={`fixed inset-0 z-[100] bg-black flex justify-center items-center overflow-hidden transition-all duration-700 ease-in-out ${isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
            {/* Skip Button */}
            <div className={`absolute top-6 right-6 z-[110] transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
                <Button
                    variant="secondary"
                    onClick={handleSkip}
                    className="px-6 py-2 text-sm font-bold bg-white/10 hover:bg-white/30 backdrop-blur-sm border border-white/20 shadow-lg text-white transition-all transform hover:scale-105"
                >
                    Skip Intro ⏭
                </Button>
            </div>

            {/* Video Player - No card container, just the video centered, larger but not fullscreen */}
            <div className="relative w-full max-w-6xl px-4 flex justify-center animate-fade-in-up">
                <video
                    ref={videoRef}
                    className="w-full max-h-[85vh] object-contain drop-shadow-[0_0_30px_rgba(255,215,0,0.1)]"
                    autoPlay
                    playsInline
                    onEnded={handleVideoEnd}
                >
                    <source src={introVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};


