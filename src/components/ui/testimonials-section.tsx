import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Conhecimento de ouro, com a retenção de sêmen, parece que a cabeça do homem muda totalmente de direção, e o foco não é mais nas mulheres e no prazer, e sim no seu propósito e automaticamente você atrai muita coisa da vida também em si, não só mulheres, eu sempre senti que meio que era isso lá no fundo, só nunca consegui colocar na prática, nossa geração é a mais próxima de prazeres, principalmente momentâneos..",
      author: "@jnxfps",
      timeframe: "há 9 dias"
    },
    {
      text: "Bom dia venho aqui agradecer a esse canal que me abriu os olhos para realidade de embarcar em nofap graças a deus e a universo hoje completo 30 dias de nofap agradeço de todo coração a esse canal que me inspirou a me desafia e ter uma qualidade de vida melhor gratidão a todos membros desse canal 🙏🙏 obs ia me esquecendo os benefícios são claros e evidentes",
      author: "@fabiomoreira4755",
      timeframe: "há 1 mês"
    },
    {
      text: "Observei que após 10 dias eu virei um ímã de dinheiro kkk eu trabalho com público faz alguns dias que vem muita gente até mim, atendo até 6 pessoas de uma vez, fora a energia sinistra que a gente obtém, tanto física e mental, mais foco, somado a meditação eu me sinto cada vez mais perto do criador, aprendendo a observar mais a sua criação à minha volta.",
      author: "@SrDuck025",
      timeframe: "há 3 semanas"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary px-2">
            Homens de todo o mundo já experimentaram os incríveis benefícios
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-2">
            Aqui estão algumas das histórias inspiradoras:
          </p>
          
          
          <div className="space-y-8">
            {/* Depoimento 1 */}
            <Card className="bg-background border-primary/20 hover:shadow-glow transition-all duration-300 animate-fade-in">
              <CardContent className="p-0">
                <div className="w-full">
                  <img 
                    src="/lovable-uploads/e6bd590c-717a-4432-a07f-f68c448647fd.png" 
                    alt="Depoimento de @fabiomoreira4755" 
                    className="w-full h-auto rounded-lg shadow-md max-w-full sm:max-w-4xl mx-auto"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Depoimento 2 */}
            <Card className="bg-background border-primary/20 hover:shadow-glow transition-all duration-300 animate-fade-in">
              <CardContent className="p-0">
                <div className="w-full">
                  <img 
                    src="/lovable-uploads/58536451-deda-4e1f-afd7-9ab7a6505c39.png" 
                    alt="Depoimento de @SrDuck025" 
                    className="w-full h-auto rounded-lg shadow-md max-w-4xl mx-auto"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Depoimento 3 */}
            <Card className="bg-background border-primary/20 hover:shadow-glow transition-all duration-300 animate-fade-in">
              <CardContent className="p-0">
                <div className="w-full">
                  <img 
                    src="/lovable-uploads/d82b4e8b-8c5d-4392-bb91-e9db22621ba4.png" 
                    alt="Depoimento de @RafaelOliveira-it3hv" 
                    className="w-full h-auto rounded-lg shadow-md max-w-4xl mx-auto"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Depoimento 4 */}
            <Card className="bg-background border-primary/20 hover:shadow-glow transition-all duration-300 animate-fade-in">
              <CardContent className="p-0">
                <div className="w-full">
                  <img 
                    src="/lovable-uploads/808db147-d3fa-4b2c-b94d-2c07f3899572.png" 
                    alt="Depoimento de @jnxfps" 
                    className="w-full h-auto rounded-lg shadow-md max-w-4xl mx-auto"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};