import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, CreditCard } from "lucide-react";
export const CTASection = () => {
  return <section id="action-section" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8 sm:space-y-12">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="text-xl sm:text-2xl text-red-500 line-through font-bold">
                DE: R$ 197
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-500">
                POR: R$ 69,90
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black text-sm sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 rounded-2xl font-black tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 w-full min-h-[60px] sm:min-h-[68px] border-2 border-orange-400/30 relative overflow-hidden group" 
              onClick={() => {
                console.log('CTA Button clicked, redirecting to checkout...');
                try {
                  window.location.href = 'https://checkout.zentrapay.online/step/nofap-life-style/';
                } catch (error) {
                  console.error('Error redirecting:', error);
                  window.open('https://checkout.zentrapay.online/step/nofap-life-style/', '_blank');
                }
              }}
            >
              <span className="relative z-10 text-center leading-tight tracking-[0.02em] drop-shadow-sm">CANSEI DE ME SENTIR FRACO</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
            
            <div className="flex justify-center items-center space-x-2 text-green-500">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-bold text-sm sm:text-base">PAGAMENTO 100% SEGURO</span>
            </div>
          </div>
          
          <div className="text-xs sm:text-sm text-muted-foreground space-y-2 max-w-xl mx-auto px-2">
            <p>
              "Nenhuma informação contida neste produto deve ser interpretada como uma afirmação da obtenção de resultados."
            </p>
            <p>
              "Qualquer referência ao desempenho passado ou potencial de uma estratégia abordada no conteúdo não é, 
              e não deve ser interpretada como uma recomendação ou como garantia de qualquer resultado específico."
            </p>
          </div>
        </div>
      </div>
    </section>;
};