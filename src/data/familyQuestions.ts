
export const familyQuestions = {
  family: [
    {
      id: "family_1",
      text: "Comment décririez-vous l'ambiance générale de votre famille ?",
      type: "scale" as const,
      scale: { min: 1, max: 5, labels: ["Très tendue", "Très harmonieuse"] }
    },
    {
      id: "family_2", 
      text: "À quelle fréquence votre famille mange-t-elle ensemble ?",
      type: "multiple_choice" as const,
      options: [
        "Tous les jours",
        "Plusieurs fois par semaine", 
        "Une fois par semaine",
        "Rarement",
        "Jamais"
      ]
    },
    {
      id: "family_3",
      text: "Comment évaluez-vous la communication dans votre famille ?",
      type: "scale" as const,
      scale: { min: 1, max: 5, labels: ["Très difficile", "Très fluide"] }
    },
    {
      id: "family_4",
      text: "Quelles activités aimeriez-vous faire plus souvent en famille ?",
      type: "text" as const
    },
    {
      id: "family_5",
      text: "Comment gérez-vous les conflits dans votre famille ?",
      type: "multiple_choice" as const,
      options: [
        "Discussion ouverte et calme",
        "Chacun évite les conflits",
        "Les parents prennent les décisions",
        "Cela dépend de la situation",
        "Les conflits ne se résolvent pas facilement"
      ]
    }
  ]
};

export const getQuestionsForType = (type: string) => {
  switch (type) {
    case "family":
      return familyQuestions.family;
    default:
      return familyQuestions.family;
  }
};
