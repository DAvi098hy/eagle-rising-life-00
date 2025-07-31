export const Footer = () => {
  return <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma. 
            FACEBOOK é uma marca comercial da FACEBOOK, Inc.
          </p>
          <div className="flex flex-wrap justify-center space-x-6 text-sm text-muted-foreground">
            <span>Copyright © 2024 modo_NofapLife
Style</span>
            <span>Todos os direitos reservados.</span>
          </div>
          <div className="flex flex-wrap justify-center space-x-6 text-sm">
            <a href="#" className="text-primary hover:text-primary-glow transition-colors">
              Termos de uso
            </a>
            <a href="#" className="text-primary hover:text-primary-glow transition-colors">
              Políticas de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>;
};