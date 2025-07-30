import React, { Suspense, lazy, useState } from "react";
import { HeroSection } from "@/components/ui/hero-section";
import { BackgroundMusic } from "@/components/ui/background-music";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";

// Lazy load componentes não críticos
const IdentificationSection = lazy(() => import("@/components/ui/identification-section").then(m => ({ default: m.IdentificationSection })));
const ScientificProofSection = lazy(() => import("@/components/ui/scientific-proof-section").then(m => ({ default: m.ScientificProofSection })));
const ProblemSection = lazy(() => import("@/components/ui/problem-section").then(m => ({ default: m.ProblemSection })));
const SolutionSection = lazy(() => import("@/components/ui/solution-section").then(m => ({ default: m.SolutionSection })));
const BenefitsSection = lazy(() => import("@/components/ui/benefits-section").then(m => ({ default: m.BenefitsSection })));
const TestimonialsSection = lazy(() => import("@/components/ui/testimonials-section").then(m => ({ default: m.TestimonialsSection })));
const OfferSection = lazy(() => import("@/components/ui/offer-section").then(m => ({ default: m.OfferSection })));
const GuaranteeExtendedSection = lazy(() => import("@/components/ui/guarantee-extended-section").then(m => ({ default: m.GuaranteeExtendedSection })));
const CTASection = lazy(() => import("@/components/ui/cta-section").then(m => ({ default: m.CTASection })));
const Footer = lazy(() => import("@/components/ui/footer").then(m => ({ default: m.Footer })));

// Loading placeholder otimizado
const SectionLoader = React.memo(() => (
  <div className="h-32 bg-gradient-to-r from-muted/50 to-muted/30 animate-pulse rounded-lg" />
));

// Componente de Navegação
const NavigationButton = React.memo(({ onClick, text, isLast = false }: { onClick: () => void; text: string; isLast?: boolean }) => (
  <div className="flex justify-center py-6 sm:py-8 md:py-12 px-4">
    <Button
      onClick={onClick}
      size="lg"
      className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-4 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg md:text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full max-w-xs sm:max-w-md md:max-w-lg text-center"
    >
      <span className="mr-2 sm:mr-3 leading-tight">{text}</span>
      {isLast ? <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
    </Button>
  </div>
));

const Index = React.memo(() => {
  const [currentPart, setCurrentPart] = useState(1);

  const handleNextPart = () => {
    setCurrentPart(prev => Math.min(prev + 1, 4));
    // Scroll suave para o topo da próxima seção
    window.scrollTo({ top: window.scrollY + 100, behavior: 'smooth' });
  };

  const renderPart1 = () => (
    <>
      <Suspense fallback={<SectionLoader />}>
        <IdentificationSection />
      </Suspense>
      <NavigationButton 
        onClick={handleNextPart} 
        text="🔬 VER PROVAS CIENTÍFICAS" 
      />
    </>
  );

  const renderPart2 = () => (
    <>
      <Suspense fallback={<SectionLoader />}>
        <ScientificProofSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ProblemSection />
      </Suspense>
      <NavigationButton 
        onClick={handleNextPart} 
        text="🔥 DESCOBRIR O MÉTODO SECRETO" 
      />
    </>
  );

  const renderPart3 = () => (
    <>
      <Suspense fallback={<SectionLoader />}>
        <SolutionSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <BenefitsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <TestimonialsSection />
      </Suspense>
      {/* Divisor de Prova Social */}
      <div className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <div className="px-6 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-primary font-bold text-sm sm:text-base">📊 PROVA SOCIAL REAL</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          </div>
          
          {/* Seção de Prova Social */}
          <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-6 sm:p-8 border border-border/50">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 text-foreground">
              🎯 CASOS DOCUMENTADOS - RESULTADOS REAIS
            </h3>
            
            <div className="grid gap-4 sm:gap-6">
              <div className="bg-background/80 rounded-xl p-4 sm:p-6 border border-border/30">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-foreground">Rafael M., 28 anos - São Paulo</p>
                    <p className="text-muted-foreground text-sm mt-1">"Em 90 dias consegui quebrar um vício de 12 anos. O método funcionou quando tudo mais falhou."</p>
                    <span className="text-green-600 text-xs font-medium">✅ Verificado a em Março 2025</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-background/80 rounded-xl p-4 sm:p-6 border border-border/30">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-foreground">Carlos T., 34 anos - Rio de Janeiro</p>
                    <p className="text-muted-foreground text-sm mt-1">"Minha produtividade aumentou 300%. Finalmente tenho energia real para meus projetos."</p>
                    <span className="text-green-600 text-xs font-medium">✅ Verificado em junho 2025</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-background/80 rounded-xl p-4 sm:p-6 border border-border/30">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-foreground">Miguel S., 25 anos - Belo Horizonte</p>
                    <p className="text-muted-foreground text-sm mt-1">"Relacionamentos melhoraram drasticamente. Minha confiança está nas alturas!"</p>
                    <span className="text-green-600 text-xs font-medium">✅ Verificado em Janeiro 2025</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">+1.247 casos documentados</span> nos últimos 6 meses
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <NavigationButton 
        onClick={handleNextPart} 
        text="💎 VER OFERTA LIMITADA AGORA" 
      />
    </>
  );

  const renderPart4 = () => (
    <>
      <Suspense fallback={<SectionLoader />}>
        <OfferSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <GuaranteeExtendedSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CTASection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      <BackgroundMusic 
        src="/lofi-ambient.wav"
        volume={0.15}
        autoPlay={true}
      />
      <HeroSection />
      
      {currentPart >= 1 && renderPart1()}
      {currentPart >= 2 && renderPart2()}
      {currentPart >= 3 && renderPart3()}
      {currentPart >= 4 && renderPart4()}
    </div>
  );
});

export default Index;
