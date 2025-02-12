'use client'
import { useEffect, useRef, useState } from 'react';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';

const AUDIO_STATE_KEY = 'audioPlayerState';

const PersistentAudio = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isMuted, setIsMuted] = useState(() => {

        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(AUDIO_STATE_KEY);
            return saved ? JSON.parse(saved).isMuted : true;
        }
        return true;
    });

    useEffect(() => {

        localStorage.setItem(AUDIO_STATE_KEY, JSON.stringify({ isMuted }));
    }, [isMuted]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const initializeAudio = async () => {
            try {
                audio.volume = 0.5;
                audio.muted = isMuted;
                if (!isMuted) {
                    const playPromise = audio.play();
                    if (playPromise !== undefined) {
                        await playPromise;
                    }
                }
            } catch (error) {
                console.log('Audio playback failed:', error);
            }
        };

        initializeAudio();

        const handleVisibilityChange = () => {
            if (!audio.muted && !document.hidden) {
                audio.play().catch(console.log);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Cleanup
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [isMuted]);

    const toggleMute = async () => {
        try {
            if (!audioRef.current) return;

            const audio = audioRef.current;
            const newMutedState = !isMuted;
            
            audio.muted = newMutedState;
            setIsMuted(newMutedState);

            if (!newMutedState) {
                await audio.play();
            }
        } catch (error) {
            console.log('Mute toggle failed:', error);
        }
    };

    return (
        <>
            <button
                onClick={toggleMute}
                className="fixed right-8 md:top-24 top-20 z-20 bg-black/80 hover:bg-black text-white p-2 rounded-full transition-all"
                aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
            >
                {isMuted ? (
                    <SpeakerXMarkIcon className="w-6 h-6" />
                ) : (
                    <SpeakerWaveIcon className="w-6 h-6" />
                )}
            </button>
            <audio
                ref={audioRef}
                src="/audio/bg1.mp3"
                loop
                preload="auto"
            />
        </>
    );
};

export default PersistentAudio;