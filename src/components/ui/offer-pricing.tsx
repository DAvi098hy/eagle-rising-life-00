import React from "react";
import { Button } from "@/components/ui/button";

export const OfferPricing = React.memo(() => {
  return (
    <>
      {/* Valor Total */}
      <div className="text-center bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-8 border border-red-500/20">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          VALOR TOTAL SE COMPRADO SEPARADAMENTE:
        </h3>
        <div className="text-4xl font-bold text-red-500 line-through mb-4">R$ 544</div>
        <p className="text-lg text-muted-foreground">
          Mas como você chegou até aqui através dos nossos vídeos sobre retenção seminal, você não vai pagar nem metade disso...
        </p>
      </div>
      
      {/* Oferta Final */}
      <div className="text-center bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl p-8 sm:p-12 border border-green-500/10">
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
          OFERTA ESPECIAL PARA QUEM CHEGOU PELOS NOSSOS VÍDEOS
        </h3>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-2xl text-red-500 line-through font-bold">
              DE: R$ 197
            </div>
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-500">
              POR: R$ 69,90
            </div>
            <div className="text-lg text-muted-foreground">
              Ou 12x de R$ 6,74
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-4 text-muted-foreground">
            <p>Isso é menos que:</p>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              <p>• 2 cafés por dia durante um mês</p>
              <p>• Uma pizza de final de semana</p>
              <p>• Um Uber para uma balada</p>
              <p>• Uma sessão de terapia tradicional</p>
            </div>
          </div>
          
          <button
            type="button"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black text-sm sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 rounded-2xl font-black tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 w-full min-h-[60px] sm:min-h-[68px] border-2 border-orange-400/30 relative overflow-hidden group"
            onClick={() => {
              window.location.href = 'https://checkout.zentrapay.online/step/nofap-life-style/';
            }}
          >
            <span className="relative z-10 text-center leading-tight tracking-[0.02em] drop-shadow-sm">
              CANSEI DE ME SENTIR FRACO
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
          
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30 rounded-lg p-3 sm:p-4 max-w-xl mx-auto">
            <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-200 text-center leading-relaxed">
              <strong className="text-amber-900 dark:text-amber-100">⚠️ ATENÇÃO:</strong> Este preço especial é válido apenas para quem chegou através dos nossos vídeos e apenas nas próximas 24 horas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
});

OfferPricing.displayName = "OfferPricing";