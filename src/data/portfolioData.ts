export interface Publication {
  id: string;
  type: 'journal' | 'conference' | 'book_chapter';
  title: string;
  venue: string;
  year: string;
  dateStr?: string;
  ranking: string;
  impactFactor?: string;
  authors: string[];
  highlightAuthor: string;
  doi?: string;
  abstract?: string;
  tags: string[];
  bibtex: string;
}

export interface CursusItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  mention: string;
  director?: string;
  description: string;
  details?: string[];
  skills: string[];
}

export interface TeachingCourse {
  type: 'cours' | 'td' | 'tp';
  title: string;
  description?: string;
  institution: string;
  level?: string;
  tools?: string[];
}

export interface TrainingItem {
  title: string;
  organization: string;
  year?: string;
  duration?: string;
  category: 'formation' | 'manifestation' | 'responsabilite';
  role?: string;
  description?: string;
}

export const PORTFOLIO_DATA = {
  identity: {
    fullName: "Imen SMATI",
    title: "Docteur en Science  Informatique",
    currentPosition: "Enseignante universitaire à l'ISIGK (depuis sept. 2022)",
    affiliations: [
      "Laboratoire CRISTAL — Pôle GRIFT — ENSI",
      "Institut Supérieur d'Informatique et de Gestion de Kairouan (ISIGK)"
    ],
    bio: "Ph.D. in Computer Science & Data Science Engineer with solid higher education teaching experience at ISIGK. Specialized in AI and Deep Learning, with international publications in deep model verification and robustness.",
    email: "imen.smati@ensi-uma.tn",
    researchGate: "https://www.researchgate.net",
    googleScholar: "https://scholar.google.com",
    linkedin: "https://linkedin.com",
    keywords: [
      "Intelligence Artificielle",
      "Deep Learning",
      "Robustesse des Réseaux de Neurones",
      "Certification Formelle",
      "Classifieurs de Contours",
      "Vérification Multimodale",
      "Vision par Ordinateur",
      "Enseignement Supérieur"
    ]
  },

  profile: {
    scientific: {
      title: "Positionnement Scientifique",
      summary: "Mes travaux de recherche sont principalement consacrés à la robustesse des classifieurs de contours basés sur les réseaux de neurones profonds, avec une évolution vers la vérification et la certification multimodales.",
      highlights: [
        "Robustesse et certification face aux perturbations géométriques et projectives.",
        "Fusion d'informations visuelles (forme/contour et image brute) pour une vérification multimodale robuste.",
        "Conception de descripteurs explicables et analytiques (GCSS) couplés aux architectures neuronales profondes."
      ]
    },
    pedagogical: {
      title: "Positionnement Pédagogique",
      summary: "J’exerce des activités d’enseignement à l’Institut Supérieur d’Informatique et de Gestion de Kairouan (ISIGK) depuis septembre 2022, dans des cours, TD et TP couvrant plusieurs domaines fondamentaux et avancés de l’informatique.",
      highlights: [
        "Enseignements théoriques et appliqués : Systèmes d'exploitation, Optimisation, Algorithmique.",
        "Encadrement pratique et projets : Machine Learning, Programmation Python, Bases de données.",
        "Pédagogie active et approche par compétences adaptée aux filières universitaires."
      ]
    }
  },

  cursus: [
    {
      degree: "Doctorat en Informatique",
      field: "Robustesse des Classifieurs Contours Basés sur les Réseaux de Neurones Profonds",
      institution: "ENSI / Université de la Manouba — Laboratoire CRISTAL / Pôle GRIFT",
      period: "Thèse soutenue",
      mention: "Mention Très Honorable",
      director: "Pr. Faouzi Ghorbel",
      description: "Travaux de recherche sur la résilience des modèles d'apprentissage profond face aux attaques adverses, perturbations convolutives et transformations projectives via des méthodes de certification et vérification multimodales.",
      details: [
        "Développement du système de vérification multimodale AI3D.",
        "Étude formelle de la robustesse des descripteurs de contours face aux attaques par filtrage.",
        "Publications en revue Q1 à fort facteur d'impact (Pattern Recognition, Neural Computing)."
      ],
      skills: ["Deep Learning", "Robustesse IA", "Certification", "Traitement d'Images", "Vérification Multimodale"]
    },
    {
      degree: "Mastère de Recherche en Informatique",
      field: "Robustesse des Classifieurs de Contours basés sur les Réseaux de Neurones Profonds",
      institution: "ENSI — Laboratoire CRISTAL / Pôle GRIFT",
      period: "Diplôme obtenu",
      mention: "Mention Très Bien",
      director: "Pr. Faouzi Ghorbel",
      description: "Étude théorique et expérimentale de la robustesse des architectures neuronales profondes dédiées à la reconnaissance de formes géométriques et de contours.",
      details: [
        "Analyse de sensibilité des réseaux convolutionnels face aux perturbations.",
        "Modélisation des descripteurs de Fourier et GCSS appliqués aux réseaux profonds."
      ],
      skills: ["Vision par Ordinateur", "Réseaux Neuronaux", "Reconnaissance de Formes", "Python/PyTorch"]
    },
    {
      degree: "Diplôme National d’Ingénieur",
      field: "Statistique et Analyse de l’Information",
      institution: "École d'Ingénieurs",
      period: "Diplôme obtenu",
      mention: "Mention Bien",
      description: "Formation d'ingénieur d'excellence axée sur la modélisation statistique avancée, l'analyse prédictive, le Big Data et le Machine Learning.",
      details: [
        "Projet de Fin d'Études : Prédiction du Churn des clients Ooredoo à l'aide de modèles prédictifs supervisés et scoring statistique."
      ],
      skills: ["Statistiques Avancées", "Scoring & Churn", "Data Mining", "Machine Learning", "Optimisation"]
    }
  ] as CursusItem[],

  research: {
    problematic: {
      title: "Problématique",
      description: "Comment évaluer et renforcer la fiabilité des classifieurs profonds lorsqu’ils sont confrontés à des perturbations, du bruit et à des attaques adverses (projectives, convolutives, filtrage) ?"
    },
    approach: {
      title: "Approche Scientifique",
      description: "Étudier la robustesse des classifieurs de contours et développer des mécanismes d’évaluation et de certification adaptés aux formes géométriques et aux informations visuelles complémentaires."
    },
    ai3d: {
      title: "AI3D : Multimodal Verification System",
      fullTitle: "Multimodal Verification System against Projective Attacks for Deep Learning Classifiers",
      venue: "Publié dans Pattern Recognition (Elsevier, Q1 - IF ≈ 8.0, 2025)",
      description: "Une architecture novatrice combinant simultanément l’information image brute et l’information contour analytique dans un cadre de vérification multimodale. Le système permet de certifier la prédiction d'un modèle même en présence d'attaques projectives sévères qui tromperaient les modèles conventionnels.",
      keyStrengths: [
        "Fusion multimodale robuste Image + Contour",
        "Résilience certifiée face aux attaques projectives et déformations 3D",
        "Garanties de robustesse théoriques et expérimentales validées sur benchmarks standards"
      ]
    },
    deepgcss: {
      title: "DeepGCSS : Classifieur Robuste & Explicable",
      fullTitle: "DeepGCSS: a robust and explainable contour classifier providing Generalized Curvature Scale Space features",
      venue: "Publié dans Neural Computing and Applications (Springer, Q1 - IF ≈ 6.0, 2023)",
      description: "Intégration des caractéristiques GCSS (Generalized Curvature Scale Space) au sein de classifieurs profonds pour offrir une reconnaissance de formes invariante, hautement résistante aux déformations et intrinsèquement explicable.",
      keyStrengths: [
        "Descripteur analytique complet GCSS",
        "Explicabilité intrinsèque des représentations apprises",
        "Robustesse éprouvée contre le bruit et les variations d'échelle"
      ]
    },
    contribution: {
      title: "Contribution Scientifique Globale",
      description: "Une ligne de recherche cohérente et novatrice reliant la classification géométrique de formes, le Deep Learning, l'analyse de robustesse, la certification formelle et la vérification multimodale."
    }
  },

  publications: [
    {
      id: "pr-2025",
      type: "journal",
      title: "AI3D: Multimodal Verification System against Projective Attacks for Deep Learning Classifiers",
      venue: "Pattern Recognition (Elsevier)",
      year: "2025",
      dateStr: "Décembre 2025",
      ranking: "Q1 — Premier Quartile",
      impactFactor: "IF ≈ 8.0",
      authors: ["Imen Smati", "Rania Khalsi", "Faouzi Ghorbel", "Mallek Mziou Sallami"],
      highlightAuthor: "Imen Smati",
      tags: ["Deep Learning", "Robustesse", "Attaques Projectives", "Vérification Multimodale", "Revue Q1"],
      abstract: "Cet article présente AI3D, un système de vérification multimodale novateur conçu pour contrer les attaques projectives ciblant les classifieurs profonds en fusionnant l'analyse de texture image et la géométrie des contours.",
      bibtex: `@article{smati2025ai3d,
  title={AI3D: Multimodal Verification System against Projective Attacks for Deep Learning Classifiers},
  author={Smati, Imen and Khalsi, Rania and Ghorbel, Faouzi and Sallami, Mallek Mziou},
  journal={Pattern Recognition},
  volume={168},
  year={2025},
  publisher={Elsevier},
  note={Impact Factor ~ 8.0, Q1}
}`
    },
    {
      id: "ncaa-2023",
      type: "journal",
      title: "DeepGCSS: a robust and explainable contour classifier providing Generalized Curvature Scale Space features",
      venue: "Neural Computing and Applications (Springer)",
      year: "2023",
      ranking: "Q1 — Premier Quartile",
      impactFactor: "IF ≈ 6.0",
      authors: ["Mallek Mziou Sallami", "Rania Khalsi", "Imen Smati", "Slim Mhiri", "Faouzi Ghorbel"],
      highlightAuthor: "Imen Smati",
      tags: ["DeepGCSS", "Contour Classifier", "Explainable AI", "Curvature Scale Space", "Revue Q1"],
      abstract: "Proposition d'un classifieur profond robuste et explicable intégrant des descripteurs analytiques de courbure multi-échelles (GCSS) pour la classification robuste de contours.",
      bibtex: `@article{sallami2023deepgcss,
  title={DeepGCSS: a robust and explainable contour classifier providing Generalized Curvature Scale Space features},
  author={Sallami, Mallek Mziou and Khalsi, Rania and Smati, Imen and Mhiri, Slim and Ghorbel, Faouzi},
  journal={Neural Computing and Applications},
  volume={35},
  pages={1--15},
  year={2023},
  publisher={Springer},
  note={Impact Factor ~ 6.0, Q1}
}`
    },
    {
      id: "icip-2022",
      type: "conference",
      title: "A novel system for deep contour classifiers certification under filtering attacks",
      venue: "IEEE International Conference on Image Processing (IEEE ICIP 2022)",
      year: "2022",
      ranking: "Conférence Internationale — Classe A (CORE A)",
      authors: ["Imen Smati", "Rania Khalsi", "Faouzi Ghorbel"],
      highlightAuthor: "Imen Smati",
      tags: ["IEEE ICIP", "Classe A", "Certification", "Filtering Attacks", "Contour Classifiers"],
      abstract: "Définition d'un protocole de certification formelle pour les classifieurs de contours confrontés à des attaques de filtrage convolutif et spatial.",
      bibtex: `@inproceedings{smati2022novel,
  title={A novel system for deep contour classifiers certification under filtering attacks},
  author={Smati, Imen and Khalsi, Rania and Ghorbel, Faouzi},
  booktitle={2022 IEEE International Conference on Image Processing (ICIP)},
  pages={1245--1249},
  year={2022},
  organization={IEEE},
  note={Core A Conference}
}`
    },
    {
      id: "icaart-2022",
      type: "conference",
      title: "ContourVerifier: A Novel System for the Robustness Evaluation of Deep Contour Classifiers",
      venue: "14th International Conference on Agents and Artificial Intelligence (ICAART 2022)",
      year: "2022",
      ranking: "Conférence Internationale",
      authors: ["Imen Smati", "Rania Khalsi", "Faouzi Ghorbel"],
      highlightAuthor: "Imen Smati",
      tags: ["ICAART", "ContourVerifier", "Robustness Evaluation", "Deep Classifiers"],
      abstract: "Présentation de ContourVerifier, un outil complet d'évaluation de la robustesse empirique et certifiée des modèles profonds de contours.",
      bibtex: `@inproceedings{smati2022contourverifier,
  title={ContourVerifier: A Novel System for the Robustness Evaluation of Deep Contour Classifiers},
  author={Smati, Imen and Khalsi, Rania and Ghorbel, Faouzi},
  booktitle={Proceedings of the 14th International Conference on Agents and Artificial Intelligence (ICAART)},
  year={2022}
}`
    },
    {
      id: "springer-icaart-2022",
      type: "book_chapter",
      title: "Integrative System of Deep Classifiers Certification: case of Convolutional Attacks",
      venue: "Springer Communications in Computer and Information Science (CCIS)",
      year: "2022",
      ranking: "Chapitre d'ouvrage / Ouvrage Springer — Q2",
      authors: ["Imen Smati", "Rania Khalsi", "Faouzi Ghorbel"],
      highlightAuthor: "Imen Smati",
      tags: ["Springer", "Chapitre d'ouvrage", "Q2", "Convolutional Attacks", "Certification"],
      abstract: "Extension approfondie sélectionnée parmi les meilleurs papiers d'ICAART 2022 sur la certification intégrative des modèles profonds contre les attaques convolutives.",
      bibtex: `@incollection{smati2022integrative,
  title={Integrative System of Deep Classifiers Certification: case of Convolutional Attacks},
  author={Smati, Imen and Khalsi, Rania and Ghorbel, Faouzi},
  booktitle={Agents and Artificial Intelligence (Revised Selected Papers)},
  series={Communications in Computer and Information Science},
  publisher={Springer},
  year={2022},
  note={Springer CCIS, Q2}
}`
    },
    {
      id: "taima-2023-1",
      type: "conference",
      title: "Double Certification des réseaux de neurones profonds contre les attaques convolutives : Image et Contour",
      venue: "Traitement et Analyse de l'Information : Méthodes et Applications (TAIMA 2023)",
      year: "2023",
      ranking: "Conférence Internationale",
      authors: ["Imen Smati", "Rania Khalsi", "Faouzi Ghorbel"],
      highlightAuthor: "Imen Smati",
      tags: ["TAIMA 2023", "Double Certification", "Attaques Convolutives", "Image & Contour"],
      abstract: "Méthode conjointe de double certification garantissant l'intégrité de la classification face aux altérations convolutives appliquées simultanément au domaine spatial et fréquentiel.",
      bibtex: `@inproceedings{smati2023double,
  title={Double Certification des r{\'e}seaux de neurones profonds contre les attaques convolutives : Image et Contour},
  author={Smati, Imen and Khalsi, Rania and Ghorbel, Faouzi},
  booktitle={Actes du colloque TAIMA 2023},
  year={2023}
}`
    },
    {
      id: "taima-2023-2",
      type: "conference",
      title: "An example of a deep classifier for contour shapes inspired by the almost complete analytical descriptor known by the GCSS",
      venue: "Traitement et Analyse de l'Information : Méthodes et Applications (TAIMA 2023)",
      year: "2023",
      ranking: "Conférence Internationale",
      authors: ["Mallek Mziou Sallami", "Rania Khalsi", "Imen Smati", "Slim Mhiri", "Faouzi Ghorbel"],
      highlightAuthor: "Imen Smati",
      tags: ["TAIMA 2023", "GCSS", "Shape Recognition", "Analytical Descriptor"],
      abstract: "Étude et implémentation d'architectures neuronales guidées par les descripteurs de courbure analytiques quasi-complets GCSS pour la caractérisation invariante de silhouettes.",
      bibtex: `@inproceedings{sallami2023example,
  title={An example of a deep classifier for contour shapes inspired by the almost complete analytical descriptor known by the GCSS},
  author={Sallami, Mallek Mziou and Khalsi, Rania and Smati, Imen and Mhiri, Slim and Ghorbel, Faouzi},
  booktitle={Actes du colloque TAIMA 2023},
  year={2023}
}`
    }
  ] as Publication[],

  teaching: {
    institution: "Institut Supérieur d’Informatique et de Gestion de Kairouan (ISIGK)",
    period: "Depuis Septembre 2022",
    overview: "Enseignement d'un large spectre disciplinaire incluant les fondamentaux des systèmes, l'ingénierie des données, l'optimisation, l'algorithmique et l'intelligence artificielle.",
    categories: {
      cours: [
        {
          type: "cours",
          title: "Système d’exploitation 1",
          institution: "ISIGK",
          description: "Gestion des processus, ordonnancement CPU, synchronisation, gestion de la mémoire centrale et systèmes de fichiers.",
          tools: ["C / Linux", "Scripts Shell", "Appels Système"]
        },
        {
          type: "cours",
          title: "Optimisation et processus de décision",
          institution: "ISIGK",
          description: "Programmation linéaire, méthode du simplexe, dualité, optimisation sous contraintes et arbres de décision.",
          tools: ["Simplexe", "Recherche Opérationnelle", "Python/SciPy"]
        },
        {
          type: "cours",
          title: "Conception TB et Scoring",
          institution: "ISIGK",
          description: "Modélisation de tableaux de bord décisionnels, indicateurs de performance (KPI), techniques de scoring et classification de risques.",
          tools: ["Business Intelligence", "Modèles de Scoring", "Data Analytics"]
        },
        {
          type: "cours",
          title: "Stratégie de résolution de problèmes",
          institution: "ISIGK",
          description: "Méthodes heuristiques, décomposition algorithmique, conception de solutions informatiques structurées et résolution de cas complexes.",
          tools: ["Algorithmique", "Heuristiques", "Analyse de Complexité"]
        }
      ] as TeachingCourse[],

      td: [
        {
          type: "td",
          title: "Graphes et optimisation",
          institution: "ISIGK",
          description: "Algorithmes de parcours (BFS, DFS), plus courts chemins (Dijkstra, Bellman-Ford, Floyd-Warshall), flot maximum et couplage.",
          tools: ["Théorie des Graphes", "Optimisation Combinatoire"]
        },
        {
          type: "td",
          title: "Algorithmique et structures de données II",
          institution: "ISIGK",
          description: "Arbres binaires de recherche, AVL, tables de hachage, graphes, récursivité avancée et analyse de complexité spatio-temporelle.",
          tools: ["Structures de Données", "C / C++", "Pointeurs"]
        },
        {
          type: "td",
          title: "Fondements de l’IA",
          institution: "ISIGK",
          description: "Algorithmes de recherche informée (A*, Minimax, Alpha-Bêta), systèmes experts, logique formelle et modélisation de connaissances.",
          tools: ["Intelligence Artificielle", "Arbres de Recherche", "Heuristiques"]
        }
      ] as TeachingCourse[],

      tp: [
        {
          type: "tp",
          title: "Machine Learning",
          institution: "ISIGK",
          description: "Pratique des algorithmes supervisés (Régression, SVM, Forêts Aléatoires, XGBoost) et non-supervisés (K-Means, PCA, DBSCAN) avec évaluation rigoureuse.",
          tools: ["Python", "Scikit-Learn", "Pandas", "Matplotlib", "Seaborn"]
        },
        {
          type: "tp",
          title: "Programmation Python",
          institution: "ISIGK",
          description: "Programmation orientée objet, manipulation de structures de données natives, modules avancés, gestion d'exceptions et programmation fonctionnelle.",
          tools: ["Python 3", "Jupyter", "POO"]
        },
        {
          type: "tp",
          title: "Langages de programmation évolués",
          institution: "ISIGK",
          description: "Concepts avancés de programmation, généricité, design patterns, architecture modulaire et tests unitaires.",
          tools: ["C++", "Java", "Design Patterns"]
        },
        {
          type: "tp",
          title: "Algorithmique et structures de données II (TP)",
          institution: "ISIGK",
          description: "Implémentation concrète d'arbres équilibrés, structures arborescentes et algorithmes de tri/recherche en langage C.",
          tools: ["Langage C", "Gestion Mémoire", "Allocation Dynamique"]
        },
        {
          type: "tp",
          title: "Ingénierie des Bases de Données",
          institution: "ISIGK",
          description: "Conception relationnelle (UML/Merise), normalisation, requêtage SQL complexe, optimisation d'index, triggers et procédures stockées.",
          tools: ["SQL", "PostgreSQL / MySQL", "Modélisation Relationnelle"]
        }
      ] as TeachingCourse[]
    }
  },

  trainingsAndOutreach: {
    trainings: [
      {
        title: "Initiation à la pédagogie universitaire",
        organization: "AUF (Agence Universitaire de la Francophonie)",
        duration: "18 heures",
        category: "formation",
        description: "Méthodes pédagogiques innovantes, ingénierie de formation, évaluation des apprentissages et dynamique d'enseignement supérieur."
      },
      {
        title: "Fundamentals of Deep Learning",
        organization: "NVIDIA Deep Learning Institute (DLI)",
        category: "formation",
        description: "Entraînement de réseaux de neurones profonds, vision par ordinateur, architectures CNN avancées et accélération GPU."
      },
      {
        title: "Machine Learning & Deep Learning",
        organization: "École d'été TAIMA 2022",
        year: "2022",
        category: "formation",
        description: "Perfectionnement sur les avancées théoriques et pratiques en apprentissage statistique et réseaux neuronaux."
      },
      {
        title: "Imagerie médicale & IA",
        organization: "École thématique TAIMA 2023",
        year: "2023",
        category: "formation",
        description: "Application des modèles de segmentation et de classification neuronale pour l'analyse d'imagerie médicale."
      },
      {
        title: "Détection des DeepFakes & Sécurité Multimédia",
        organization: "IEEE ICIP 2022 Tutorial",
        year: "2022",
        category: "formation",
        description: "Techniques de pointe pour la détection d'artefacts génératifs et la sécurisation des modèles d'authentification visuelle."
      }
    ] as TrainingItem[],

    eventsAndRoles: [
      {
        title: "PHARES 2025",
        organization: "Conférence scientifique internationale",
        year: "2025",
        category: "manifestation",
        description: "Participation et rayonnement scientifique lors de la conférence internationale PHARES 2025."
      },
      {
        title: "MICMEF 2025",
        organization: "Manifestation scientifique internationale",
        year: "2025",
        category: "manifestation",
        description: "Participation aux travaux et sessions de recherche MICMEF 2025."
      },
      {
        title: "Comité d'organisation TAIMA 2023",
        organization: "Colloque International TAIMA",
        year: "2023",
        category: "responsabilite",
        role: "Membre du Comité d'Organisation",
        description: "Organisation logistique et scientifique du colloque international Traitement et Analyse de l'Information : Méthodes et Applications."
      },
      {
        title: "Student Volunteer — IEEE ICIP 2022",
        organization: "IEEE Signal Processing Society (Bordeaux, France)",
        year: "2022",
        category: "responsabilite",
        role: "Volontaire International",
        description: "Soutien actif à l'organisation de l'une des plus prestigieuses conférences mondiales en traitement d'images (Classe A)."
      },
      {
        title: "TAIMA 2022 & TAIMA 2023",
        organization: "Association Tunisienne des Sciences de l'Image",
        year: "2022–2023",
        category: "manifestation",
        description: "Présentation de communications orales et échanges scientifiques avec la communauté internationale."
      }
    ] as TrainingItem[]
  },

  stats: [
    { value: 2, label: "Revues Internationales Q1", subtext: "Pattern Recognition & NCA (IF 8.0 & 6.0)" },
    { value: 4, label: "Communications Internationales", subtext: "Dont IEEE ICIP Classe A & ICAART" },
    { value: 1, label: "Chapitre d'Ouvrage Springer", subtext: "Collection CCIS — Q2" },
    { value: 12, label: "Unités d'Enseignement", subtext: "Cours, TD et TP dispensés à l'ISIGK" }
  ],

  perspectives: {
    title: "Bilan et Perspectives Académiques",
    summary: "Ce parcours témoigne d'une trajectoire cohérente et équilibrée entre excellence scientifique en recherche et engagement pédagogique soutenu.",
    researchVision: {
      title: "Perspectives en Recherche",
      items: [
        "Poursuivre et amplifier les travaux sur la robustesse et la certification des modèles d’IA face aux nouvelles attaques adverses complexes.",
        "Développer des architectures multimodales de vérification unifiant données visuelles 2D/3D et modèles de fondation.",
        "Renforcer les collaborations scientifiques internationales avec des revues de premier rang (Q1/Q2)."
      ]
    },
    pedagogicalVision: {
      title: "Perspectives Pédagogiques",
      items: [
        "Renforcer les enseignements pratiques innovants en IA, Machine Learning, programmation Python et algorithmique avancée.",
        "Encadrer des projets de fin d'études (PFE) et d'initiation à la recherche orientés vers l'IA appliquée et la cybersécurité des modèles.",
        "Contribuer activement au rayonnement pédagogique et institutionnel de l'établissement d'affectation."
      ]
    }
  }
};
