import React from "react";
import { Gift, Headphones, Calendar, LifeBuoy } from "lucide-react";

export const OfferBonus = React.memo(() => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          BÔNUS EXCLUSIVOS
        </h3>
        <p className="text-lg text-muted-foreground">
          (Valor Total: <span className="text-red-500 line-through">R$ 347</span>)
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-background/60 rounded-xl p-6 border border-border">
          <div className="flex items-center space-x-3 mb-4">
            <Gift className="w-6 h-6 text-primary" />
            <h4 className="text-xl font-bold text-foreground">BÔNUS #1: Guia de Alimentação Energética</h4>
          </div>
          <div className="text-sm text-muted-foreground mb-4">(R$ 97)</div>
          
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/640932f3-3abc-43df-816b-6a99ad98b98b.png" 
              alt="Guia de Alimentação Energética"
              className="w-full max-w-[150px] xs:max-w-[180px] sm:max-w-[200px] md:max-w-[250px] h-auto object-contain rounded-lg"
            />
          </div>
          
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Lista de 47 alimentos que aumentam testosterona</li>
            <li>• Cardápio semanal para máxima energia</li>
            <li>• Suplementos naturais para recuperação</li>
          </ul>
        </div>
        
        <div className="bg-background/60 rounded-xl p-6 border border-border">
          <div className="flex items-center space-x-3 mb-4">
            <Headphones className="w-6 h-6 text-primary" />
            <h4 className="text-xl font-bold text-foreground">BÔNUS #2: 21 Meditações Guiadas</h4>
          </div>
          <div className="text-sm text-muted-foreground mb-4">(R$ 127)</div>
          
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/b9046b9f-1a34-41dc-a8d5-1d004fc3f952.png" 
              alt="21 Meditações Guiadas"
              className="w-full max-w-[150px] xs:max-w-[180px] sm:max-w-[200px] md:max-w-[250px] h-auto object-contain rounded-lg"
            />
          </div>
          
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Meditação para momentos de tentação</li>
            <li>• Respiração para redirecionamento de energia</li>
            <li>• Visualizações para fortalecer determinação</li>
            <li>• Práticas para conexão espiritual profunda</li>
          </ul>
        </div>
        
        <div className="bg-background/60 rounded-xl p-6 border border-border">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="w-6 h-6 text-primary" />
            <h4 className="text-xl font-bold text-foreground">BÔNUS #3: Plano de Ação 90 Dias</h4>
          </div>
          <div className="text-sm text-muted-foreground mb-4">(R$ 67)</div>
          
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/55748702-b494-4d8e-ab0b-39bb79cdf2c2.png" 
              alt="Plano de Ação 90 Dias"
              className="w-full max-w-[150px] xs:max-w-[180px] sm:max-w-[200px] md:max-w-[250px] h-auto object-contain rounded-lg"
            />
          </div>
          
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Checklist diário de práticas essenciais</li>
            <li>• Marcos de progresso semanais</li>
            <li>• Sistema de recompensas motivacionais</li>
            <li>• Estratégias específicas para cada fase (7, 21, 30, 60, 90 dias)</li>
          </ul>
        </div>
        
        <div className="bg-background/60 rounded-xl p-6 border border-border">
          <div className="flex items-center space-x-3 mb-4">
            <LifeBuoy className="w-6 h-6 text-primary" />
            <h4 className="text-xl font-bold text-foreground">BÔNUS #4: Protocolo Anti-Recaída</h4>
          </div>
          <div className="text-sm text-muted-foreground mb-4">(R$ 56)</div>
          
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/c2fb1d79-fbe8-436c-b374-1f0b32f264e4.png" 
              alt="Protocolo Anti-Recaída"
              className="w-full max-w-[150px] xs:max-w-[180px] sm:max-w-[200px] md:max-w-[250px] h-auto object-contain rounded-lg"
            />
          </div>
          
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Técnica de 60 segundos para neutralizar impulsos</li>
            <li>• 15 atividades de redirecionamento imediato</li>
            <li>• Mantras e afirmações de poder pessoal</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

OfferBonus.displayName = "OfferBonus";