export const VisionSection = () => {
  return (
    <section className="relative min-h-[100vh] sm:min-h-[120vh] flex items-center justify-center overflow-hidden py-12 sm:py-20 -mt-16 sm:-mt-32">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/33650237-1f4e-4ee3-8e01-731944a88d4c.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
          <div className="text-center space-y-6 sm:space-y-8 md:space-y-12">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black bg-gradient-transformation bg-clip-text text-transparent leading-tight">
              IMAGINE...
            </h2>
            
            <div className="space-y-6 sm:space-y-8 font-body text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-2">
              <p className="text-foreground font-medium">
                Imagine ter mais <span className="text-primary font-bold">energia</span> para 
                perseguir seus objetivos, mais <span className="text-accent font-bold">foco e atenção</span> para suas 
                tarefas diárias, mais <span className="text-primary font-bold">dinheiro</span> em sua conta bancária e mais 
                <span className="text-accent font-bold"> mulheres interessadas</span> em você.
              </p>
              
              <p className="text-foreground font-medium">
                Imagine uma <span className="text-primary font-bold">conexão mais profunda com Deus</span> ou algo 
                superior, sentindo-se mais <span className="text-accent font-bold">alinhado com seu propósito</span> e 
                vivendo uma vida de <span className="bg-gradient-primary bg-clip-text text-transparent font-bold">significado</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};