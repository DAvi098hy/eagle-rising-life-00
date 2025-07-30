import { Card, CardContent } from "@/components/ui/card";
import energyImage from "@/assets/energy-dna.jpg";

export const SolutionSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary px-2">
            O Real Motivo Pelo Qual Você Não Conseguiu Abandonar Esse Hábito
          </h2>
          
          <Card className="bg-card/90 backdrop-blur-sm border-primary/20 shadow-glow">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="space-y-4 sm:space-y-6 text-left order-2 md:order-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-primary">
                    A falta de retenção seminal
                  </h3>
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                    A retenção seminal é a chave para desbloquear um novo nível de energia, 
                    motivação e sucesso. Quando você aprende a controlar e redirecionar sua 
                    energia sexual, você se transforma em uma versão mais poderosa de si mesmo.
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Imagine ter mais energia para perseguir seus objetivos, mais foco e 
                      atenção para suas tarefas diárias, mais dinheiro em sua conta bancária 
                      e mais mulheres interessadas em você.
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Imagine uma conexão mais profunda com Deus ou algo superior, sentindo-se 
                      mais alinhado com seu propósito e vivendo uma vida de significado.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center order-1 md:order-2">
                  <img 
                    src={energyImage} 
                    alt="Energia e Transformação"
                    className="rounded-lg shadow-intense max-w-full w-full max-w-sm h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};