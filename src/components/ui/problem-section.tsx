export const ProblemSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-6 sm:mb-8 px-2">
            🔥 O MÉTODO QUE JÁ SALVOU MAIS DE 2.000 HOMENS
          </h2>
          
          {/* Primeira seção: Vazio profundo com imagem à direita */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Apresentamos o NoFap Lifestyle
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                O sistema que está virando o jogo para homens que estavam no fundo do poço emocional, mental e espiritual.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                📘 Um e-book direto, prático, nada de papo furado. Com técnicas, ferramentas e protocolos específicos para:
              </p>
              <div className="space-y-2 text-base sm:text-lg text-muted-foreground">
                <p>• Eliminar recaídas com estratégias testadas</p>
                <p>• Redirecionar a energia sexual para objetivos reais</p>
                <p>• Reestruturar sua mente com práticas de respiração e meditação</p>
                <p>• Aumentar sua testosterona e restaurar seu magnetismo</p>
              </div>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <img 
                src="/lovable-uploads/0148a88a-f7c9-423e-af23-42f35af669db.png" 
                alt="Destaque-se da multidão com a transformação"
                className="rounded-lg shadow-glow max-w-full w-full max-w-sm sm:max-w-md h-auto"
              />
            </div>
          </div>

          {/* Segunda seção: Noite perdida com imagem demônio à esquerda */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="flex justify-center order-1">
              <img 
                src="/lovable-uploads/1b57776d-a358-47ff-98d3-b84c57757451.png" 
                alt="A batalha interna contra os vícios"
                className="rounded-lg shadow-glow max-w-full w-full max-w-sm sm:max-w-md h-auto"
              />
            </div>
            <div className="space-y-4 sm:space-y-6 order-2">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Você acorda sentindo o peso de mais uma noite perdida?
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Se sente esgotado emocionalmente e com a mente nebulosa, como se sua 
                energia tivesse sido sugada? Se sim, saiba que você não está sozinho.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Milhares de homens enfrentam essa batalha silenciosa todos os dias, 
                buscando desesperadamente uma saída, uma maneira de se libertar e 
                finalmente viver a vida que desejam.
              </p>
            </div>
          </div>

          {/* Terceira seção: Apresentação do e-book */}
          <div className="text-center space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground px-2">
              ⚙️ O que tem dentro:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="flex justify-center order-1">
                <img 
                  src="/lovable-uploads/a0102865-0daa-42b0-94b6-81b605ff118f.png" 
                  alt="E-book NoFap Lifestyle - Abraçando uma vida livre de pornografia e masturbação"
                  className="rounded-lg shadow-glow max-w-full w-full max-w-xs sm:max-w-sm h-auto"
                />
              </div>
              <div className="space-y-4 sm:space-y-6 text-left order-2">
                <div className="space-y-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  <p><strong>Módulo 1:</strong> Fundamentos Científicos - A neurociência por trás do vício e da dopamina</p>
                  <p><strong>Módulo 2:</strong> Técnicas de Redirecionamento - Como transformar desejo em produtividade</p>
                  <p><strong>Módulo 3:</strong> Protocolo Anti-Recaída - Estratégias de emergência para os piores momentos</p>
                  <p><strong>Módulo 4:</strong> Respiração e Meditação - Ferramentas ancestrais para controle e foco</p>
                  <p><strong>Módulo 5:</strong> Magnetismo Masculino - Como atrair naturalmente sem esforço</p>
                  <p><strong>Módulo 6:</strong> Conexão Espiritual - Descubra propósito e alinhamento real</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};