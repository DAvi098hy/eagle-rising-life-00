import React, { useEffect } from "react";
import heroImage from "@/assets/hero-transformation.jpg";

export const HeroSection = React.memo(() => {
  // Preload da imagem crítica do hero
  useEffect(() => {
    const img = new Image();
    img.src = heroImage;
  }, []);

  return (
    <section className="hero-container relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 text-center">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
          <div className="bg-red-500/20 text-red-400 px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-bold inline-block mb-4 sm:mb-6 animate-pulse">
            ⚠️ VOCÊ ESTÁ PRESTES A DESCOBRIR
          </div>
          
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground leading-tight tracking-tight px-2 sm:px-0">
            O QUE ESTÁ POR TRÁS DO VAZIO QUE{" "}
            <span className="bg-gradient-transformation bg-clip-text text-transparent">
              CORRÓI SUA ENERGIA E MATOU SUA MOTIVAÇÃO
            </span>
          </h1>
          
          <div className="space-y-3 sm:space-y-4 md:space-y-6 font-body px-2 sm:px-0">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground">
              Mais de 2.000 homens quebraram o ciclo vicioso. Em 7 a 30 dias, transformaram vício em energia, desânimo em foco, e caos mental em clareza total.
            </p>
            
            {/* Aviso de Atenção */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 sm:p-6 md:p-8 mt-6 sm:mt-8">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="bg-red-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium inline-block animate-pulse">
                  ⚠️ ATENÇÃO
                </div>
                <p className="text-xs sm:text-sm md:text-base text-foreground/90 leading-relaxed font-light">
                  Se você chegou até aqui através dos nossos vídeos sobre retenção seminal, é porque está pronto para finalmente quebrar o ciclo vicioso que tem sugado sua energia, foco e propósito de vida.
                </p>
                <p className="text-xs text-muted-foreground/80 leading-relaxed font-light">
                  Esta página foi criada especificamente para homens que sentem aquele vazio profundo e cansaço que parece não ter fim - e que estão determinados a transformar essa energia desperdiçada em foco laser, motivação imparável e resultados reais em todas as áreas da vida.
                </p>
              </div>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary font-bold">
              Agora chegou a sua vez.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";