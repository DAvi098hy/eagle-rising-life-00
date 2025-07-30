import React from "react";
import { CheckCircle, Download } from "lucide-react";

export const OfferMainProduct = React.memo(() => {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 sm:p-12 border border-primary/10">
      <div className="flex items-center space-x-3 mb-8">
        <Download className="w-8 h-8 text-primary" />
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
          E-BOOK PRINCIPAL: NoFap Lifestyle (127 páginas)
        </h3>
      </div>
      <p className="text-lg text-muted-foreground mb-8">
        O guia mais completo sobre retenção seminal já criado em português:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground">Módulo 1: Fundamentos Científicos</h4>
              <p className="text-sm text-muted-foreground">A neurociência por trás do vício e como quebrar os padrões neurais</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground">Módulo 2: Técnicas de Redirecionamento</h4>
              <p className="text-sm text-muted-foreground">Como transformar energia sexual em foco e produtividade</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground">Módulo 3: Protocolo Anti-Recaída</h4>
              <p className="text-sm text-muted-foreground">Sistema à prova de falhas para momentos de tentação extrema</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground">Módulo 4: Respiração e Meditação</h4>
              <p className="text-sm text-muted-foreground">Práticas ancestrais adaptadas para o homem moderno</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground">Módulo 5: Magnetismo Masculino</h4>
              <p className="text-sm text-muted-foreground">Como a retenção seminal atrai mulheres naturalmente</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground">Módulo 6: Conexão Espiritual</h4>
              <p className="text-sm text-muted-foreground">Desenvolvendo propósito através da energia vital</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

OfferMainProduct.displayName = "OfferMainProduct";