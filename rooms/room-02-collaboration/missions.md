# Missions — Room 02 (Collaboration)

4 missions, 3 points chacune. Fais-les dans l'ordre.

---

## Mission 1 — Cloner un dépôt existant (3 pts)

**Objectif :** Récupérer un projet GitHub sur ton ordinateur.

**Étapes :**

1. Va sur GitHub et trouve un dépôt public (ex : ce repo `devops-rooms`)
2. Clique sur "Code" → copie l'URL HTTPS
3. Ouvre un terminal et lance : `git clone <URL>`
4. Entre dans le dossier créé : `cd devops-rooms`

**Validation :** Tu as une copie locale du projet. Tu peux lister les fichiers avec `ls` ou `dir`.

---

## Mission 2 — Créer une branche, faire une modification, pousser (3 pts)

**Objectif :** Travailler sur une branche et envoyer ton travail sur GitHub.

**Étapes :**

1. Depuis le dépôt cloné, crée une branche : `git checkout -b mon-test`
2. Modifie un fichier (ex : ajoute une ligne dans `README.md`)
3. Commit : `git add .` puis `git commit -m "test: modification de la branche"`
4. Push : `git push origin mon-test`

> **Premier push ?** GitHub te demandera de te connecter. Si tu n'as pas encore configuré l'accès, lis la section "Se connecter à GitHub depuis le terminal" dans [docs/START-HERE.md](../../docs/START-HERE.md#5-se-connecter-à-github-depuis-le-terminal).

**Validation :** Sur GitHub, tu vois ta branche `mon-test` apparaître dans le menu déroulant des branches.

---

## Mission 3 — Ouvrir une Pull Request sur GitHub (3 pts)

**Objectif :** Créer une demande de fusion.

**Étapes :**

1. Va sur la page du dépôt sur GitHub
2. Clique sur "Compare & pull request" (ou "Pull requests" → "New pull request")
3. Choisis ta branche `mon-test` → vers `main`
4. Remplis le titre et la description (ex : "Test de ma première PR")
5. Clique sur "Create pull request"

**Validation :** Une PR est ouverte. Tu peux la fermer ensuite (sans merger) si tu veux.

---

## Mission 4 — Simuler un conflit de merge et le résoudre (3 pts)

**Objectif :** Comprendre ce qu'est un conflit et comment le résoudre.

**Étapes :**

1. Clone un dépôt (ou utilise celui de la mission 1)
2. Sur `main`, modifie la ligne 1 d'un fichier (ex : `README.md`) → commit + push
3. Crée une branche : `git checkout -b conflit-test`
4. Modifie la **même ligne** du même fichier différemment → commit
5. Passe sur `main` et fais `git pull`
6. Merge ta branche : `git merge conflit-test`
7. Git affiche un conflit. Ouvre le fichier dans un éditeur. Tu verras des marqueurs comme :
   ```
   <<<<<<< HEAD
   Contenu de ta branche main
   =======
   Contenu de ta branche conflit-test
   >>>>>>> conflit-test
   ```
   La partie entre `<<<<<<< HEAD` et `=======` = ce qui est sur main.
   La partie entre `=======` et `>>>>>>>` = ce qui est sur ta branche.
8. Choisis la version à garder (ou combine les deux). **Supprime les lignes** `<<<<<<<`, `=======`, et `>>>>>>>`
9. `git add .` puis `git commit -m "resolve: conflit résolu"`

**Validation :** Tu as résolu le conflit manuellement. Le merge est terminé.

---

## Score missions

| Mission | Points |
|---------|--------|
| 1 | 3 |
| 2 | 3 |
| 3 | 3 |
| 4 | 3 |
| **Total** | **12** |

---

> **Terminé ?** Passe au [checkpoint](./checkpoint.md).
