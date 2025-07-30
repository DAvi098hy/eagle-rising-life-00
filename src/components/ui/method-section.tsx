import { Card, CardContent } from "@/components/ui/card";
import { Book, Brain, Target } from "lucide-react";
import strengthImage from "@/assets/divine-strength.jpg";

export const MethodSection = () => {
  const methods = [
    {
      icon: Book,
      title: "Guia Completo de Retenção Seminal",
      description: "Aprenda as técnicas e práticas necessárias para controlar sua energia sexual e redirecioná-la para áreas produtivas da sua vida."
    },
    {
      icon: Brain,
      title: "Técnicas de Meditação e Mindfulness",
      description: "Desenvolva uma mente calma e focada, essencial para superar o vício e alcançar o sucesso."
    },
    {
      icon: Target,
      title: "Planos de Ação Detalhados",
      description: "Planos específicos para alcançar seus objetivos pessoais, profissionais e espirituais."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary px-2">
              Como Funciona o NoFap Lifestyle?
            </h2>
            <p className="text-lg sm:text-xl text-foreground/90 max-w-3xl mx-auto px-2">
              O NoFap Lifestyle é um e-book completo que combina técnicas de retenção seminal 
              com estratégias comprovadas de desenvolvimento pessoal.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              {methods.map((method, index) => (
                <Card key={index} className="bg-card/90 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <method.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">
                          {method.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center order-1 lg:order-2">
              <img 
                src={strengthImage} 
                alt="Força Divina"
                className="rounded-lg shadow-intense max-w-full h-auto w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};