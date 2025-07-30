import React from "react";
import { OfferMainProduct } from "@/components/ui/offer-main-product";
import { OfferBonus } from "@/components/ui/offer-bonus";
import { OfferPricing } from "@/components/ui/offer-pricing";

export const OfferSection = React.memo(() => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground px-4">
              Sistema Completo NoFap Lifestyle
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Tudo Que Você Precisa Para Sua Transformação Total
            </p>
          </div>
          
          <OfferMainProduct />
          <OfferBonus />
          <OfferPricing />
        </div>
      </div>
    </section>
  );
});

OfferSection.displayName = "OfferSection";