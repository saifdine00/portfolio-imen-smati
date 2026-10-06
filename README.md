# Portfolio Académique — Dr. Imen SMATI (Next.js)

Application web moderne développée avec **Next.js (App Router)** et **TypeScript** pour le portfolio académique du **Dr. Imen SMATI** (Concours national — Maître Assistant en Informatique).

---

## ✨ Fonctionnalités & Contenu Intégré à 100%

- **Profil Académique & Synthèse** : Positionnement scientifique (Robustesse IA, certification, classification de contours, vérification multimodale) et positionnement pédagogique (ISIGK).
- **Cursus Universitaire Complet** : Doctorat en Informatique (Mention Très Honorable), Mastère (Mention Très Bien), Diplôme National d'Ingénieur (Mention Bien).
- **Activités Scientifiques** : Présentation détaillée du système **AI3D** (Revue *Pattern Recognition* Q1, IF ≈ 8.0), de **DeepGCSS** (*Neural Computing & Applications* Q1, IF ≈ 6.0), problématique, méthodologie et piliers de recherche.
- **Publications Scientifiques & Communications** :
  - Revues internationales Q1 (Elsevier Pattern Recognition & Springer NCA).
  - Conférences internationales majeures (IEEE ICIP 2022 Classe A, ICAART 2022, TAIMA 2023).
  - Chapitre d'ouvrage Springer CCIS (Q2).
  - Boutons de copie BibTeX / Citation pour les pairs académiques.
- **Activités Pédagogiques (ISIGK depuis 2022)** :
  - **4 Cours Magistraux** : Système d'exploitation 1, Optimisation et processus de décision, Conception TB & Scoring, Stratégie de résolution de problèmes.
  - **3 Travaux Dirigés (TD)** : Graphes & Optimisation, Algorithmique & Structures de données II, Fondements de l'IA.
  - **5 Travaux Pratiques (TP)** : Machine Learning, Programmation Python, Langages évolués, Algorithmique II, Ingénierie des Bases de Données.
- **Formations & Rayonnement** : AUF (Pédagogie universitaire 18h), NVIDIA DLI, TAIMA, IEEE ICIP 2022, Comité d'organisation TAIMA 2023, Volontariat international ICIP 2022, PHARES 2025, MICMEF 2025.
- **Bilan Chiffré & Perspectives** : Compteurs d'impact et vision recherche/pédagogie à moyen et long terme.
- **QR Code Dynamique Intégré** : Génération automatique du QR code à partir de l'URL réelle du site en ligne (sur Vercel), bouton de copie de lien et téléchargement direct en PNG HD.
- **Mode Sombre / Mode Clair** : Thème académique élégant avec bascule en 1 clic.
- **Export Dossier PDF / Impression** : Feuille de style dédiée `@media print` pour exporter un dossier de candidature propre et officiel pour le jury.

---

## 🚀 Déploiement Facile sur Vercel (En Ligne)

### Méthode 1 : Déploiement via GitHub & Vercel (Recommandé)

1. **Initialisez votre dépôt Git et poussez-le sur GitHub** :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio Next.js Dr. Imen SMATI"
   git branch -M main
   git remote add origin https://github.com/VOTRE_USERNAME/portfolio-imen-smati.git
   git push -u origin main
   ```

2. **Connectez-vous à [Vercel](https://vercel.com)** :
   - Cliquez sur **"Add New..."** > **"Project"**.
   - Importez le dépôt `portfolio-imen-smati`.
   - Vercel détecte automatiquement **Next.js**.
   - Cliquez sur **"Deploy"**.

3. **Votre portfolio est en ligne !** 🎉
   - Dès la publication, le QR code de la page s'adaptera automatiquement à l'adresse URL de votre site Vercel (ex: `https://portfolio-imen-smati.vercel.app`).

---

### Méthode 2 : Déploiement direct avec la CLI Vercel

1. Installez et lancez Vercel :
   ```bash
   npx vercel
   ```
2. Suivez les instructions rapides dans le terminal.
3. Pour la mise en production :
   ```bash
   npx vercel --prod
   ```

---

## 💻 Exécution en Local

Pour tester ou modifier le projet sur votre ordinateur :

```bash
# Lancer le serveur de développement
npm run dev

# Construire la version de production
npm run build

# Lancer la version de production en local
npm run start
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.
