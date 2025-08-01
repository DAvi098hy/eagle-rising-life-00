import React, { Suspense, lazy, useState, useEffect } from "react";
import { HeroSection } from "@/components/ui/hero-section";
import { BackgroundMusic } from "@/components/ui/background-music";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { OptimizedImage } from "@/components/ui/optimized-image";
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
          
          {/* Seção de Prova Social - Carrossel */}
          <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-6 sm:p-8 border border-border/50">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 text-foreground">
              🎯 CASOS DOCUMENTADOS - RESULTADOS REAIS
            </h3>
            
            {/* Indicação de navegação para mobile */}
            <div className="flex justify-center items-center gap-2 mb-4 sm:hidden">
              <span className="text-sm text-muted-foreground">👆 Arraste para ver mais</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-primary/20 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>

            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent className="-ml-2 md:-ml-4">
                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-4/5 md:basis-3/5">
                  <div className="flex items-center justify-center p-2">
                    <OptimizedImage 
                      src="/lovable-uploads/45e3fc89-dfbc-4560-9dbd-87a2847aa1c8.png" 
                      alt="Depoimento real via WhatsApp - Transformação NoFap"
                      className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-xs rounded-lg shadow-lg"
                    />
                  </div>
                </CarouselItem>
                
                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-4/5 md:basis-3/5">
                  <div className="flex items-center justify-center p-2">
                    <OptimizedImage 
                      src="/lovable-uploads/73428b18-23ef-433e-b577-f435ee941098.png" 
                      alt="Depoimento Thales Azevedo - Transformação NoFap"
                      className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-xs rounded-lg shadow-lg"
                    />
                  </div>
                </CarouselItem>
                
                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-4/5 md:basis-3/5">
                  <div className="flex items-center justify-center p-2">
                    <OptimizedImage 
                      src="/lovable-uploads/f990ec1b-d828-40da-82b6-59b63dde7cd7.png" 
                      alt="Depoimento Ricardo - Transformação NoFap"
                      className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-xs rounded-lg shadow-lg"
                    />
                  </div>
                </CarouselItem>
                
                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-4/5 md:basis-3/5">
                  <div className="flex items-center justify-center p-2">
                    <OptimizedImage 
                      src="/lovable-uploads/c23a81c8-12f4-41e7-86ec-cd30bd9a7cc6.png" 
                      alt="Depoimento Vinicius Zirbes - Transformação NoFap"
                      className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-xs rounded-lg shadow-lg"
                    />
                  </div>
                </CarouselItem>
                
                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-4/5 md:basis-3/5">
                  <div className="flex items-center justify-center p-2">
                    <OptimizedImage 
                      src="/lovable-uploads/9b88277b-7872-4465-8ea5-d8bdc4ff96e1.png" 
                      alt="Depoimento Luiz Miguel - Transformação NoFap"
                      className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-xs rounded-lg shadow-lg"
                    />
                  </div>
                </CarouselItem>
                
                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-4/5 md:basis-3/5">
                  <div className="flex items-center justify-center p-2">
                    <OptimizedImage 
                      src="/lovable-uploads/23afe433-1d96-4bb9-8cd1-72574810cab4.png" 
                      alt="Depoimento Ryan - Transformação NoFap"
                      className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-xs rounded-lg shadow-lg"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-4 md:-left-12" />
              <CarouselNext className="hidden sm:flex -right-4 md:-right-12" />
            </Carousel>
            
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
      
      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
              ❓ PERGUNTAS QUE JÁ RESPONDO AGORA:
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background/80 border border-border/50 rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  "E se eu já tentei parar mil vezes?"
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  O método já funcionou com homens que tentaram por 10 anos e falharam.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-background/80 border border-border/50 rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  "Não sei se vou ter disciplina…"
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Por isso existe o Plano de Ação de 90 dias + o Protocolo Anti-Recaída.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-background/80 border border-border/50 rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  "Parece bom demais pra ser verdade…"
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  É por isso que você tem garantia de 7 dias. Teste e veja.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-background/80 border border-border/50 rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  "Isso tem base científica mesmo?"
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Sim. Harvard, Journal of Sexual Medicine e centenas de depoimentos.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              🔓 TÁ NAS SUAS MÃOS AGORA
            </h2>
            
            <div className="space-y-6 text-lg sm:text-xl text-foreground/90 max-w-3xl mx-auto">
              <p>
                Você pode continuar acordando sem energia, repetindo o mesmo ciclo e se sentindo um lixo por dentro.
              </p>
              <p>
                Ou pode clicar no botão abaixo, começar agora e ver resultados ainda hoje à noite.
              </p>
            </div>
            
            <div className="py-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 sm:px-12 py-4 sm:py-6 rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                🎯 QUERO MINHA TRANSFORMAÇÃO AGORA
              </Button>
            </div>
            
            <div className="space-y-4 text-center">
              <p className="text-sm sm:text-base text-muted-foreground">
                📆 Oferta disponível por 24h para quem veio dos nossos vídeos. Depois disso, o valor volta para R$197.
              </p>
              <p className="text-sm text-muted-foreground italic">
                PS: A maioria dos homens que lê até aqui não toma ação. Mas os 7% que tomam — são os que mudam tudo.
              </p>
            </div>
          </div>
        </div>
      </section>
      
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
