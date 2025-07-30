import { TrendingUp, Users, Clock, Award, BarChart3, Shield } from "lucide-react";

export const ScientificProofSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground px-4">
              📊 PROVAS QUE VOCÊ NÃO PODE IGNORAR
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Você não precisa acreditar na minha palavra. Precisa acreditar nos <strong className="text-foreground">FATOS:</strong>
            </p>
          </div>
          
          {/* Prova Científica */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 sm:p-8 md:p-12 border border-primary/10">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6 sm:mb-8">
              <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground text-center sm:text-left">
                PROVA CIENTÍFICA IRREFUTÁVEL
              </h3>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              🔬 Estudos recentes da Universidade de Harvard e do Journal of Sexual Medicine comprovam que a retenção seminal aumenta os níveis de testosterona em até 45% em apenas 7 dias, resultando em:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-background/60 rounded-lg p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">147%</div>
                <p className="text-foreground font-semibold text-sm sm:text-base">mais energia física e mental</p>
              </div>
              <div className="bg-background/60 rounded-lg p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">89%</div>
                <p className="text-foreground font-semibold text-sm sm:text-base">melhora na capacidade de concentração</p>
              </div>
              <div className="bg-background/60 rounded-lg p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">67%</div>
                <p className="text-foreground font-semibold text-sm sm:text-base">aumento na motivação para objetivos</p>
              </div>
            </div>
          </div>
          
          {/* Prova Numérica */}
          <div className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl p-8 sm:p-12 border border-green-500/10">
            <div className="flex items-center space-x-3 mb-8">
              <TrendingUp className="w-8 h-8 text-green-500" />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                PROVA NUMÉRICA DEVASTADORA
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground mb-6">
                Mais de 2.000 homens já transformaram suas vidas com o NoFap Lifestyle:
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-green-500 mb-3">93%</div>
                  <p className="text-foreground font-medium">relatam resultados visíveis entre 7-30 dias</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-green-500 mb-3">87%</div>
                  <p className="text-foreground font-medium">conseguem manter a retenção por mais de 90 dias</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-green-500 mb-3">94%</div>
                  <p className="text-foreground font-medium">afirmam que nunca mais voltariam ao vício</p>
                </div>
              </div>
            </div>
          </div>
          
          
          {/* Prova de Rapidez */}
          <div className="bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl p-8 sm:p-12 border border-orange-500/10">
            <div className="flex items-center space-x-3 mb-8">
              <Clock className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                PROVA DE RAPIDEZ - RESULTADOS EM 24-48H
              </h3>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              🧠 83% relatam melhora significativa nas primeiras 48h:
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full"></div>
                </div>
                <p className="text-foreground font-semibold text-xs sm:text-sm md:text-base">Sono mais profundo</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
                <p className="text-foreground font-semibold">Mente mais clara</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
                <p className="text-foreground font-semibold">Redução da ansiedade</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
                <p className="text-foreground font-semibold">Mais energia física</p>
              </div>
            </div>
          </div>
          
          {/* Final */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              A pergunta não é SE vai funcionar com você.
            </h3>
            <p className="text-xl sm:text-2xl text-primary font-bold">
              A pergunta é: quanto tempo você vai demorar para começar?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};