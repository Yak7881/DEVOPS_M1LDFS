# 📖 Glossaire

Tous les mots techniques utilisés dans ce parcours, expliqués simplement.  
Classés par ordre alphabétique.

---

### Branche (branch)
Une copie parallèle de ton code. Tu travailles dessus sans toucher au code principal. Quand c'est prêt, tu la fusionnes.

### Build
L'action de transformer ton code source en quelque chose d'exécutable (un site web, une application, etc.).

### CD (Continuous Delivery / Continuous Deployment)
Livraison continue. Après les tests automatiques, le code est automatiquement préparé (ou envoyé) en production.

### CI (Continuous Integration)
Intégration continue. Chaque fois qu'un développeur pousse du code, des vérifications automatiques se lancent (tests, format, etc.).

### Changelog
Un fichier ou une section qui liste les changements entre chaque version d'un projet. Exemple : "v1.2.0 : ajout du mode sombre, correction du bug de connexion."

### Checkout
Passer d'une branche à une autre dans Git. Aussi utilisé pour récupérer le code depuis un dépôt (dans un pipeline, "checkout" = télécharger le code).

### Clone
Copier un dépôt distant (sur GitHub par exemple) sur ton ordinateur.

### Commit
Une sauvegarde de tes modifications dans Git. Chaque commit a un message qui décrit ce qui a changé.

### Conflit (merge conflict)
Quand deux personnes ont modifié la même ligne de code. Git ne sait pas quelle version garder. Tu dois choisir manuellement.

### Code HTTP (status code)
Un numéro renvoyé par un serveur web pour dire comment s'est passée la requête. Les plus courants : **200** = tout va bien, **404** = page non trouvée, **500** = erreur interne du serveur.

### Dashboard
Un tableau de bord. Une page qui affiche des informations importantes d'un coup d'oeil (état des serveurs, erreurs, etc.).

### Deploy (déployer)
Mettre ton code en ligne pour que les utilisateurs puissent y accéder.

### Dépôt (repository / repo)
Un dossier de projet géré par Git. Il contient tout le code et l'historique des modifications.

### Feedback
Un retour d'information. Par exemple : "le test a échoué" ou "le déploiement est terminé".

### Fork
Copier le dépôt de quelqu'un d'autre sur ton propre compte GitHub. Tu peux le modifier sans toucher à l'original.

### Gamifié
Qui utilise des mécanismes de jeu (points, badges, missions, niveaux) pour rendre l'apprentissage plus motivant.

### Git
Un outil qui permet de sauvegarder l'historique de ton code et de travailler à plusieurs dessus.

### Groovy
Un langage de programmation utilisé par Jenkins pour écrire les Jenkinsfiles. Tu n'as pas besoin de l'apprendre en profondeur, juste de comprendre la structure.

### GitHub
Un site web qui héberge des dépôts Git. Il ajoute des fonctionnalités : issues, pull requests, actions, etc.

### GitHub Actions
Un système intégré à GitHub qui permet de lancer des actions automatiques (tests, vérifications) quand tu pousses du code.

### Incident
Un problème en production qui affecte les utilisateurs. Exemples : site en panne, erreur 500, données perdues.

### Issue
Un ticket dans GitHub. On l'utilise pour signaler un bug, proposer une idée ou poser une question.

### Jenkins
Un outil open source qui permet de créer des pipelines d'automatisation (build, test, déploiement). Il tourne sur un serveur que tu configures toi-même (contrairement à GitHub Actions qui est dans le cloud).

### Jenkinsfile
Un fichier qui décrit un pipeline Jenkins. Écrit dans un langage spécial (Groovy simplifié).

### Kanban
Un tableau visuel avec des colonnes (ex : "À faire", "En cours", "Fait") pour organiser et suivre les tâches d'un projet.

### Ligne de commande (terminal)
Une fenêtre où tu tapes des commandes texte au lieu de cliquer. Sur Windows : PowerShell ou cmd. Sur Mac/Linux : Terminal.

### Logs
Les journaux. Des lignes de texte que ton application ou ton serveur écrit pour dire ce qui se passe.

### Main (branche)
La branche principale de ton projet. C'est la version "officielle" du code.

### Merge (fusionner)
Combiner les modifications d'une branche dans une autre (souvent dans main).

### Métrique (metric)
Une mesure chiffrée sur ton application. Exemples : temps de réponse (200 ms), nombre de requêtes par seconde, utilisation CPU (75%).

### Monitoring
Surveiller ton application en production : est-ce qu'elle répond ? Est-ce qu'elle est lente ? Y a-t-il des erreurs ?

### Pipeline
Une série d'étapes automatisées. Exemple : vérifier le code → lancer les tests → déployer.

### Production (prod)
L'environnement réel, celui que les utilisateurs voient et utilisent.

### Pull Request (PR)
Une demande pour fusionner ta branche dans la branche principale. C'est aussi l'endroit où l'équipe relit ton code.

### Push
Envoyer tes commits locaux vers le dépôt distant (GitHub).

### On-call (de garde)
La personne désignée pour réagir aux incidents en dehors des heures de bureau. Si le site tombe à 3h du matin, c'est elle qui est alertée.

### QA (Quality Assurance)
Assurance qualité. La personne ou l'équipe qui vérifie que le produit fonctionne correctement.

### Release
Une version publiée de ton projet. Exemple : v1.0.0, v2.3.1.

### Review (revue de code)
Quelqu'un relit ton code pour vérifier qu'il est correct, lisible et sans risque.

### Rollback
Revenir à une version précédente du code. On fait ça quand un déploiement a causé un problème.

### Semantic Versioning (versionnage sémantique)
Un système pour numéroter les versions : **MAJOR.MINOR.PATCH** (ex : v2.1.3). Major = changement qui casse la compatibilité, Minor = nouvelle fonctionnalité, Patch = correction de bug.

### Serveur
Un ordinateur (souvent distant) qui fait tourner ton application pour les utilisateurs.

### Sévérité (severity)
Le niveau de gravité d'un incident. **Critical** = tout est cassé, **Major** = gros impact, **Minor** = petit problème.

### SRE (Site Reliability Engineering)
Un rôle proche de l'Ops. Le SRE s'assure que les services sont fiables, rapides et disponibles. C'est un mélange de développement et d'administration système.

### Stage (étape)
Une étape dans un pipeline. Exemple : "Build", "Test", "Deploy".

### Tag
Un repère dans l'historique Git. On met un tag pour marquer une version (ex : v1.0.0).

### Test
Du code qui vérifie que ton code principal fonctionne comme prévu.

### Test unitaire (unit test)
Un test qui vérifie une seule petite partie du code (une fonction, un calcul). Exemple : vérifier que `add(2, 3)` renvoie bien `5`.

### Test d'intégration (integration test)
Un test qui vérifie que plusieurs parties du code fonctionnent bien ensemble. Exemple : vérifier que le formulaire envoie bien les données au serveur.

### Token (jeton d'accès)
Un code secret qui remplace ton mot de passe pour se connecter à GitHub depuis le terminal. Plus sûr qu'un mot de passe.

### Triage
Évaluer et classer un incident par gravité (critical, major, minor) pour décider de la priorité de traitement.

### Uptime
Le temps pendant lequel un service est disponible et fonctionne. Un uptime de 99,9% signifie que le service est en panne au maximum ~8h par an.

### WIP (Work In Progress)
Travail en cours. Utilisé dans les messages de commit ou les PR pour dire que ce n'est pas encore terminé.

### Workflow
Un enchaînement d'étapes pour accomplir une tâche. Exemple : créer une branche → coder → ouvrir une PR → merger.

### YAML
Un format de fichier simple pour écrire de la configuration. Utilisé par GitHub Actions, Docker, etc.

---

> 💡 Un mot manque ? Ouvre une [issue](https://github.com/ton-user/devops-rooms/issues) pour le signaler.
