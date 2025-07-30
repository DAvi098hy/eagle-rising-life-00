import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, DollarSign, Heart, Sparkles, Brain } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Mais Energia e Motivação",
      description: "A retenção seminal proporciona um aumento significativo de energia, permitindo que você acorde todas as manhãs com um vigor renovado."
    },
    {
      icon: Target,
      title: "Mais Foco e Atenção",
      description: "Ao redirecionar sua energia sexual, você melhorará sua capacidade de concentração, aumentando sua produtividade."
    },
    {
      icon: DollarSign,
      title: "Mais Dinheiro",
      description: "Com maior foco e produtividade, suas finanças naturalmente melhorarão através do sucesso profissional."
    },
    {
      icon: Heart,
      title: "Atração de Mulheres",
      description: "Sua nova confiança e carisma natural atrairão mais mulheres de forma passiva e autêntica."
    },
    {
      icon: Sparkles,
      title: "Conexão Espiritual",
      description: "A retenção seminal permite uma conexão espiritual mais profunda, ajudando você a encontrar um propósito maior."
    },
    {
      icon: Brain,
      title: "Clareza Mental",
      description: "Desenvolva uma mente mais clara, focada e livre dos nevoeiros causados pelos vícios destrutivos."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent px-2">
              Permita-me apresentar o e-book
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
              "NoFap Lifestyle"
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Revolucionário projetado para ajudar homens como você a superar o vício em 
              pornografia e masturbação, alcançando todos esses benefícios e muito mais.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card border-primary/20 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-foreground">
                    {benefit.title}
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};