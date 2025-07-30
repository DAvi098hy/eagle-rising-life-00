import { Shield, CheckCircle, Clock, Mail } from "lucide-react";

export const GuaranteeExtendedSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-green-500/5 to-emerald-500/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 flex items-center justify-center mx-auto">
              <img 
                src="/lovable-uploads/f2f6d279-1434-487a-8740-2cb1897245ce.png" 
                alt="Garantia 7 Dias" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground px-4">
              Garantia Blindada de 7 Dias - Risco ZERO Para Você
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Eu sei que você já foi enganado antes.
            </p>
          </div>
          
          <div className="bg-background/60 rounded-2xl p-8 sm:p-12 border border-green-500/20">
            <div className="space-y-8">
              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Já comprou cursos que prometiam mundos e fundos e não entregaram nem o básico. 
                  Já investiu em soluções "milagrosas" que só aumentaram sua frustração.
                </p>
                <p className="text-xl font-semibold text-foreground">
                  Por isso, vou assumir TODO o risco para você:
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-8 border border-green-500/20">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <Shield className="w-8 h-8 text-green-500" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                    GARANTIA INCONDICIONAL DE 7 DIAS
                  </h3>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6 text-center">
                  Se em 7 dias você não sentir:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">Mais energia ao acordar</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">Mente mais clara e focada</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">Redução significativa dos impulsos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">Maior motivação para seus objetivos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">Sensação de controle sobre sua vida</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-xl font-bold text-foreground">
                    Eu devolvo 100% do seu dinheiro. SEM perguntas. SEM complicações.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-primary" />
                    <h4 className="text-xl font-bold text-foreground">Por Que 7 Dias é Suficiente?</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Porque 83% dos homens já sentem as primeiras mudanças nas primeiras 48 horas.
                  </p>
                  <div className="space-y-2">
                    <p className="text-foreground font-semibold">Em 7 dias, você vai:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Dormir melhor e acordar mais disposto</li>
                      <li>• Sentir a mente menos nebulosa</li>
                      <li>• Ter mais energia para atividades básicas</li>
                      <li>• Notar redução da ansiedade e irritabilidade</li>
                      <li>• Começar a sentir que "consegue fazer isso"</li>
                    </ul>
                  </div>
                  <p className="text-foreground font-semibold">
                    Se isso não acontecer, você não paga nada.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-primary" />
                    <h4 className="text-xl font-bold text-foreground">Como Funciona o Reembolso?</h4>
                  </div>
                  <p className="text-muted-foreground font-semibold">SIMPLES E RÁPIDO:</p>
                  <div className="space-y-3">
                    <div className="bg-background/80 rounded-lg p-4 border border-border">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                        <span className="text-foreground">Envie um email para suporte@nofaplifestyle.com</span>
                      </div>
                    </div>
                    <div className="bg-background/80 rounded-lg p-4 border border-border">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                        <span className="text-foreground">Escreva apenas: "Quero meu reembolso"</span>
                      </div>
                    </div>
                    <div className="bg-background/80 rounded-lg p-4 border border-border">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                        <span className="text-foreground">Em até 24h o valor volta para sua conta</span>
                      </div>
                    </div>
                    <div className="bg-background/80 rounded-lg p-4 border border-border">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
                        <span className="text-foreground">Você pode ficar com todo o material</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-muted-foreground">
                    Sem burocracia. Sem questionários. Sem justificativas.
                  </p>
                  <p className="text-center text-foreground font-semibold">
                    Sua palavra vale mais que qualquer contrato.
                  </p>
                </div>
              </div>
              
              <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  Por Que Ofereço Esta Garantia?
                </h4>
                <p className="text-lg text-muted-foreground mb-6">
                  Porque tenho certeza absoluta de que funciona.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">+2.000</div>
                    <p className="text-sm text-muted-foreground">homens já provaram</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">93%</div>
                    <p className="text-sm text-muted-foreground">tiveram sucesso</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <p className="text-sm text-muted-foreground">ciência comprova</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-foreground">
                  O único risco é você NÃO tentar.
                </p>
              </div>
              
                <div className="text-center space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto">
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                    <span className="text-xs sm:text-sm text-foreground text-center">Garantia de 7 dias</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-foreground">Reembolso sem perguntas</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-foreground">Suporte 24h por email</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-foreground">Acesso imediato</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-foreground">Pagamento 100% seguro</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-500/30">
                  <p className="text-xl font-bold text-foreground mb-2">
                    O risco é ZERO. O potencial de transformação é INFINITO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};