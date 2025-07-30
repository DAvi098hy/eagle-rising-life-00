import React, { useRef, useEffect } from 'react';

interface BackgroundMusicProps {
  src?: string;
  volume?: number;
  autoPlay?: boolean;
}

export const BackgroundMusic: React.FC<BackgroundMusicProps> = ({
  src = "/lofi-ambient.wav",
  volume = 0.15,
  autoPlay = true
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.loop = true;

    // Função para iniciar o áudio
    const startAudio = () => {
      audio.play().catch(console.error);
      document.removeEventListener('click', startAudio);
      document.removeEventListener('touchstart', startAudio);
      document.removeEventListener('scroll', startAudio);
    };

    if (autoPlay) {
      // Tentar reprodução imediata
      audio.play().catch(() => {
        // Se falhar, aguarda interação do usuário
        document.addEventListener('click', startAudio);
        document.addEventListener('touchstart', startAudio);
        document.addEventListener('scroll', startAudio);
      });
    }

    return () => {
      audio.pause();
      document.removeEventListener('click', startAudio);
      document.removeEventListener('touchstart', startAudio);
      document.removeEventListener('scroll', startAudio);
    };
  }, [autoPlay, volume, src]);

  return (
    <audio ref={audioRef} preload="auto">
      <source src={src} type="audio/wav" />
      <source src={src.replace('.wav', '.mp3')} type="audio/mpeg" />
      Seu navegador não suporta áudio.
    </audio>
  );
};