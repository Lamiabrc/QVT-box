
// Exports statiques légers
export { default as Index } from './Index';
export { default as Contact } from './Contact';
export { default as QuiSommesNous } from './QuiSommesNous';
export { default as NosValeurs } from './NosValeurs';

// Exports par domaine (barrels)
export * from './teens';        // Espace "Teens"
export * from './entreprise';   // Espace "Entreprise"
export * from './auth';         // Authentification
export * from './simulator';    // Simulateur

// Exports utilitaires globaux
export { default as Recommandations } from './Recommandations';
export { default as Historique }      from './Historique';
export { default as Profil }         from './Profil';

// Administration / Erreur 404
export { default as AdminPanel } from './AdminPanel';
export { default as AdminLogin } from './AdminLogin';
export { default as NotFound }    from './NotFound';

// Pages thématiques
export { default as ConceptQVT } from './ConceptQVT';
export { default as Unboxing }    from './Unboxing';
