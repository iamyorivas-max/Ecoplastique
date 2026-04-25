export interface Product {
  id: string;
  name: string;
  title: string;
  shortDescription: string;
  description: string;
  price: string;
  image: string;
  benefits: string[];
  specs: { [key: string]: string };
}

export const products: Product[] = [
  {
    id: "nappes-pvc",
    name: "Nappes PVC Sur Mesure",
    title: "Protection & Élégance",
    shortDescription: "Plastique transparent de haute qualité pour protéger vos tables.",
    description: "Nos nappes en PVC sur mesure offrent une protection invisible mais robuste contre les taches, les rayures et les liquides. Faciles à nettoyer et découpées avec précision pour s'adapter parfaitement à votre table.",
    price: "À partir de 99 DH",
    image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e84?q=80&w=800&auto=format&fit=crop",
    benefits: [
      "Transparence cristalline",
      "Découpe sur mesure gratuite",
      "Épaisseur premium (2mm)",
      "Longue durée de vie"
    ],
    specs: {
      "Matière": "PVC souple haute qualité",
      "Épaisseur": "1.5mm - 2mm",
      "Entretien": "Simple coup d'éponge",
      "Usage": "Intérieur / Extérieur"
    }
  },
  {
    id: "protege-matelas",
    name: "Protège-Matelas Imperméable",
    title: "Sommeil en Toute Sérénité",
    shortDescription: "Protection totale contre les liquides et les acariens.",
    description: "Assurez la longévité de votre matelas avec notre protège-matelas imperméable. Conçu avec une membrane respirante, il bloque les liquides tout en restant silencieux et confortable pour une nuit paisible.",
    price: "150 DH",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop",
    benefits: [
      "100% Imperméable",
      "Tissu respirant & frais",
      "Barrière anti-acariens",
      "Lavable en machine"
    ],
    specs: {
      "Matière": "Coton bouclette / Polyuréthane",
      "Fixation": "Bonnets élastiqués",
      "Certification": "Oeko-Tex Standard 100",
      "Entretien": "Lavable à 60°C"
    }
  },
  {
    id: "oreiller-cervical",
    name: "Oreiller Cervical Médical",
    title: "Soutien Anatomique Optimal",
    shortDescription: "Soulagez vos douleurs cervicales dès la première nuit.",
    description: "Recommandé par les spécialistes, cet oreiller cervical épouse la courbe naturelle de votre cou. Il permet un alignement parfait de la colonne vertébrale, réduisant les tensions musculaires du matin.",
    price: "250 DH",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop",
    benefits: [
      "Conception ergonomique",
      "Soulage les douleurs du cou",
      "Améliore la circulation",
      "Idéal pour dormir sur le dos/côté"
    ],
    specs: {
      "Forme": "Contours ergonomiques",
      "Revêtement": "Housse déhoussable en bambou",
      "Fermeté": "Médium-Ferme",
      "Dimensions": "50x30 cm"
    }
  },
  {
    id: "oreiller-memoire-forme",
    name: "Oreiller Mémoire de Forme",
    title: "Confort Haut de Gamme",
    shortDescription: "Une sensation de nuage pour un repos réparateur.",
    description: "Notre oreiller à mémoire de forme s'adapte à votre morphologie grâce à sa mousse haute densité. Il retrouve sa forme initiale après chaque utilisation, garantissant un confort constant pendant des années.",
    price: "290 DH",
    image: "https://images.unsplash.com/photo-1632102911612-4f3df9172421?q=80&w=800&auto=format&fit=crop",
    benefits: [
      "Mousse haute densité",
      "Thermorégulateur",
      "Housse hypoallergénique",
      "Durabilité exceptionnelle"
    ],
    specs: {
      "Garnissage": "Mousse viscoélastique",
      "Densité": "50 kg/m³",
      "Housse": "Microfibre ultra-douce",
      "Dimensions": "60x40 cm"
    }
  }
];
