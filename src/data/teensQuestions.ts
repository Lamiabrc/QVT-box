
import { Question } from "@/types/simulator";

export const teensQuestions: Question[] = [
  {
    id: "energy_1",
    type: "scale",
    text: "Comment te sens-tu niveau énergie ces derniers temps ? ⚡",
    category: "energie",
    scale: { min: 1, max: 10, labels: ["Épuisé(e)", "Plein(e) d'énergie"] }
  },
  {
    id: "sleep_1",
    type: "multiple_choice",
    text: "Comment dors-tu en général ? 😴",
    category: "sommeil",
    options: [
      { text: "Très mal", value: 1, emoji: "😵" },
      { text: "Mal", value: 3, emoji: "😴" },
      { text: "Ça va", value: 6, emoji: "😐" },
      { text: "Bien", value: 8, emoji: "😊" },
      { text: "Très bien", value: 10, emoji: "😴💤" }
    ]
  },
  {
    id: "relations_1",
    type: "scale",
    text: "Comment ça se passe avec tes amis ? 👥",
    category: "relations",
    scale: { min: 1, max: 10, labels: ["Très difficile", "Super bien"] }
  },
  {
    id: "anxiety_1",
    type: "multiple_choice",
    text: "Te sens-tu anxieux/anxieuse ? 😰",
    category: "anxiete",
    options: [
      { text: "Jamais", value: 10, emoji: "😌" },
      { text: "Rarement", value: 8, emoji: "😊" },
      { text: "Parfois", value: 5, emoji: "😐" },
      { text: "Souvent", value: 3, emoji: "😟" },
      { text: "Tout le temps", value: 1, emoji: "😰" }
    ]
  },
  {
    id: "motivation_1",
    type: "scale",
    text: "Comment est ta motivation pour l'école/les études ? 📚",
    category: "motivation",
    scale: { min: 1, max: 10, labels: ["Aucune motivation", "Super motivé(e)"] }
  },
  {
    id: "screens_1",
    type: "multiple_choice",
    text: "Combien de temps passes-tu sur les écrans par jour ? 📱",
    category: "ecrans",
    options: [
      { text: "Moins de 2h", value: 9, emoji: "📚" },
      { text: "2-4h", value: 7, emoji: "⏰" },
      { text: "4-6h", value: 5, emoji: "📱" },
      { text: "6-8h", value: 3, emoji: "😵‍💫" },
      { text: "Plus de 8h", value: 1, emoji: "🤯" }
    ]
  },
  {
    id: "self_esteem_1",
    type: "scale",
    text: "Comment te sens-tu par rapport à toi-même ? 💖",
    category: "estime",
    scale: { min: 1, max: 10, labels: ["Très mal", "Super bien"] }
  }
];

export const getTeensQuestions = (): Question[] => {
  return teensQuestions;
};
