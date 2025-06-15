# QVT Box Web Application

## 🌍 Aperçu du projet

**QVT Box** est une application web qui propulse une solution **phygitale** innovante au service de la **santé mentale** et du **bien-être** des **salariés**, des **ados** et de leur entourage. Elle associe intelligence artificielle, accompagnement humain et objets physiques livrés chaque mois.

### 🔍 Fonctionnalités principales

* 🧵 **Outils IA d'évaluation du bien-être** (stress, charge mentale, lien social)
* 🏦 **Dashboard RH** pour le suivi des indicateurs QVT (score, prévention burnout)
* 🛎️ **Box physiques mensuelles** (jeux, kits psychoéducatifs, activités de détente)
* 🌐 **Boutique en ligne** de ressources adaptées (vidéos, ateliers, bons bien-être)
* 🤝 **Espace famille/ado** pour renforcer le dialogue et les actions collectives

Publics cibles :

* **Entreprises** : prévention des risques psychosociaux, cohésion équipe, performance durable.
* **Familles** : lien intergénérationnel, repérage précoce, alternative constructive aux réseaux sociaux.

---

## ⚖️ Prérequis

* Node.js ≥ 14 (recommandé : via [nvm](https://github.com/nvm-sh/nvm))
* npm ou yarn
* Git

---

## 🚀 Démarrage rapide

```bash
# Cloner le projet
git clone <GIT_URL_QVT_BOX>
cd qvt-box-app

# Installer les dépendances
npm install

# Lancer le développement
npm run dev
```

Accès par défaut sur : [http://localhost:5173](http://localhost:5173)

---

## 📁 Structure du projet

```
.
├── public/                   # Fichiers statiques
├── src/
│   ├── components/           # UI shadcn + Tailwind
│   ├── pages/                # Univers : entreprise / famille / teens / admin
│   ├── services/             # API IA, box, utilisateurs
│   ├── styles/               # Tailwind + animations
│   ├── utils/                # Fonctions génériques
│   ├── App.tsx               # Racine de l'app
│   ├── main.tsx              # Point d’entrée ReactDOM
│   └── vite.config.ts        # Config Vite
├── .env.local                # Clés et endpoints
├── package.json              # Dépendances/scripts
├── tsconfig.json             # TypeScript
└── tailwind.config.ts        # Thème Tailwind
```

---

## 🔧 Scripts utiles

* `npm run dev` : serveur local avec hot reload
* `npm run build` : build production dans `/dist`
* `npm run preview` : prévisualisation locale du build
* `npm test` : tests unitaires (si activés)

---

## 🛠️ Stack technique

* **React** + **TypeScript**
* **Vite** (rapide et moderne)
* **Tailwind CSS** + **shadcn-ui** (composants designables)
* **Radix UI** (accessibilité)
* **Supabase** (auth, BDD, temps réel)
* **Lucide React** (icônes SVG)

---

## 📂 Variables d’environnement

Fichier `.env.local` à créer avec :

```env
VITE_API_BASE_URL=https://api.qvt-box.com
VITE_IA_API_KEY=sk_xxx
VITE_ENV=development
```

---

## 🚧 Déploiement

```bash
npm run build
# puis uploader /dist sur : Vercel, Netlify, S3...
```

Assurez-vous que le serveur prend en charge les routes SPA (fallback sur index.html).

---

## 🙋 Contribution

```bash
git checkout -b feature/ma-feature
git commit -m "feat: ajout X"
git push origin feature/ma-feature
```

Puis ouvrez une Pull Request. Merci de respecter la cohérence UI/UX et de tester vos composants.

---

## 💎 Licence

MIT

---

## 📧 Contact

**Lamia Bréchet**
[lamia.brechet@outlook.fr](mailto:lamia.brechet@outlook.fr)
