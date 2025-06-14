
export const familyQuestions = {
  family: [
    {
      id: "family_1",
      text: "Comment décrirais-tu l'ambiance de ta famille ? 🏠",
      type: "emoji_scale" as const,
      scale: { min: 1, max: 5, emojis: ["😰", "😕", "😐", "😊", "🥰"], labels: ["Très tendue", "Très harmonieuse"] }
    },
    {
      id: "family_2", 
      text: "À quelle fréquence votre famille partage-t-elle des repas ensemble ? 🍽️",
      type: "fun_multiple_choice" as const,
      options: [
        { text: "Tous les jours", emoji: "🥳", points: 5 },
        { text: "Plusieurs fois par semaine", emoji: "😊", points: 4 }, 
        { text: "Une fois par semaine", emoji: "😐", points: 3 },
        { text: "Rarement", emoji: "😕", points: 2 },
        { text: "Jamais", emoji: "😢", points: 1 }
      ]
    },
    {
      id: "family_3",
      text: "Comment se passent les discussions dans ta famille ? 💬",
      type: "emoji_scale" as const,
      scale: { min: 1, max: 5, emojis: ["🤐", "😤", "😐", "😌", "🗣️"], labels: ["Très difficile", "Très fluide"] }
    },
    {
      id: "family_4",
      text: "Raconte-nous une activité que tu aimerais faire plus souvent en famille ! ✨",
      type: "creative_text" as const,
      placeholder: "Ex: cuisiner ensemble, jouer aux jeux vidéo, faire du sport...",
      suggestions: ["🎮 Jeux vidéo", "🍳 Cuisine", "🚴‍♂️ Sport", "🎬 Cinéma", "🧩 Jeux de société"]
    },
    {
      id: "family_5",
      text: "Quand il y a un petit conflit dans ta famille, comment ça se passe ? 🤔",
      type: "story_choice" as const,
      options: [
        { 
          text: "On discute calmement jusqu'à trouver une solution", 
          emoji: "🕊️", 
          story: "Comme une famille de diplomates ! 👏",
          points: 5 
        },
        { 
          text: "Chacun évite le conflit", 
          emoji: "🙈", 
          story: "Parfois il vaut mieux laisser passer l'orage... 🌦️",
          points: 3 
        },
        { 
          text: "Les parents tranchent", 
          emoji: "👨‍👩‍👧‍👦", 
          story: "Les parents ont le dernier mot ! ⚖️",
          points: 3 
        },
        { 
          text: "Ça dépend vraiment de la situation", 
          emoji: "🤷‍♀️", 
          story: "Chaque conflit est unique ! 🎭",
          points: 4 
        },
        { 
          text: "C'est compliqué à résoudre", 
          emoji: "😵‍💫", 
          story: "Pas facile tous les jours... 💙",
          points: 2 
        }
      ]
    },
    {
      id: "family_6",
      text: "Sur une échelle de bonheur, comment te sens-tu dans ta famille ? 💖",
      type: "animated_slider" as const,
      scale: { min: 0, max: 100, emojis: ["😢", "😕", "😐", "😊", "🥰"], unit: "%" }
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
