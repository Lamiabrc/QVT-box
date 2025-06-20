export const boxes = [
  // 1
  {
    id: 'starter',
    name: 'Box Découverte Kawaii',
    price: '14.99€/mois',
    description: 'Parfait pour commencer ton voyage zen !',
    features: ['3-4 produits kawaii', 'Journal manga', 'Méditation guidée'],
    color: 'from-pink-100 to-purple-100',
    border: 'border-pink-300',
    popular: false,
  },
  // 2
  {
    id: 'premium',
    name: 'Box Premium Anime',
    price: '24.99€/mois',
    description: "L'expérience complète pour les vrais otakus !",
    features: ['6-8 produits premium', 'Objets collector', 'Contenu exclusif', 'Livraison express'],
    color: 'from-purple-100 to-blue-100',
    border: 'border-purple-300',
    popular: true,
  },
  // 3
  {
    id: 'family',
    name: 'Box Famille Zen',
    price: '34.99€/mois',
    description: 'Parfait pour partager le zen en famille !',
    features: ['2 box ados', '1 guide parent', 'Activités famille', 'Support premium'],
    color: 'from-blue-100 to-green-100',
    border: 'border-blue-300',
    popular: false,
  },
  // 4 à 30 : DUPLIQUEZ ET ADAPTEZ SELON VOS 27 AUTRES BOX
  // Exemple :
  // {
  //   id: 'box-4',
  //   name: 'Nom de la Box 4',
  //   price: 'xx,xx€/mois',
  //   description: 'Description détaillée...',
  //   features: ['feature 1', 'feature 2', ...],
  //   color: 'from-colorA to-colorB',
  //   border: 'border-color',
  //   popular: false,
  // },

  /*
  // Exemple de structure pour générer automatiquement (TS) :
  for (let i = 4; i <= 30; i++) {
    boxes.push({
      id: `box-${i}`,
      name: `Box ${i}`,
      price: `${(10 + i).toFixed(2)}€/mois`,
      description: `Description de la box ${i}`,
      features: [`Feature A${i}`, `Feature B${i}`],
      color: 'from-gray-100 to-gray-200',
      border: 'border-gray-300',
      popular: false,
    });
  }
  */
];
