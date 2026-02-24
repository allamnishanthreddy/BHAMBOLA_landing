import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import introVideo from '../assets/videos/intro_video.mp4';
import Button from './ui/Button';

const VideoTransition = () => {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const [isExiting, setIsExiting] = useState(false);
    const [isEntered, setIsEntered] = useState(false);

    // Dynamic exit transition (scale up slightly and fade to black)
    const exitTransition = () => {
        setIsExiting(true);
        // Wait for the exit animation to finish before navigating
        setTimeout(() => {
            navigate('/');
        }, 800);
    };

    const handleVideoEnd = () => {
        exitTransition();
    };

    const handleSkip = () => {
        exitTransition();
    };

    useEffect(() => {
        // Entry animation delay
        const timer = setTimeout(() => setIsEntered(true), 100);

        if (videoRef.current) {
            // Speed up the video natively for a punchier feel as requested
            videoRef.current.playbackRate = 1.5;
            videoRef.current.play().catch(error => {
                console.error("Video auto-play failed. User interaction might be required.", error);
            });
        }
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fixed inset-0 z-[100] bg-black flex justify-center items-center overflow-hidden transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] ${isExiting ? 'opacity-0 scale-125 saturate-0' : (isEntered ? 'opacity-100 scale-100' : 'opacity-0 scale-90')}`}>
            {/* Skip Button */}
            <div className={`absolute top-8 right-8 z-[110] transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
                <Button
                    variant="secondary"
                    onClick={handleSkip}
                    className="px-8 py-2.5 text-sm font-bold bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl text-white transition-all transform hover:scale-105 rounded-full"
                >
                    Skip Intro ⏭
                </Button>
            </div>

            {/* Blurred Background (to fill gaps for square/vertical videos) */}
            <div className="absolute inset-0 opacity-40 blur-3xl scale-110 pointer-events-none">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                >
                    <source src={introVideo} type="video/mp4" />
                </video>
            </div>

            {/* Main Video Overlay - Pure video, larger size */}
            <div className={`relative w-full h-full flex justify-center items-center transition-all duration-1000 ${isEntered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <video
                    ref={videoRef}
                    className="max-w-full max-h-full object-contain shadow-[0_0_150px_rgba(0,0,0,0.8)] z-10"
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

export default VideoTransition;
