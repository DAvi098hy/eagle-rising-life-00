import { Clock, CheckCircle } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          <div className="p-6 sm:p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="flex justify-center order-2 md:order-1">
                <img 
                  src="/guarantee-seal.png" 
                  alt="Garantia de 7 Dias"
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
                />
              </div>
              
              <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  Garantia de 7 Dias
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed">
                  Estamos tão confiantes de que o NoFap Lifestyle transformará sua vida que 
                  oferecemos uma garantia de 7 dias. Se você não notar uma diferença significativa 
                  em sua energia, motivação e bem-estar dentro de uma semana, devolveremos seu 
                  dinheiro. Sem perguntas, sem complicações.
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">7 dias de teste</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">100% do dinheiro de volta</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};