# 🎯 Missions — Room 01 (Contrôle de version)

4 missions, 3 points chacune. Fais-les dans l'ordre.

---

## Mission 1 — Créer un dépôt local (3 pts)

**Objectif :** Initialiser un dépôt Git dans un dossier.

**Étapes :**

1. Crée un dossier sur ton ordinateur (ex : `mon-projet`)
2. Ouvre un **terminal** dans ce dossier
   - **Windows** : clique droit dans le dossier → "Ouvrir dans le Terminal" (ou cherche "PowerShell" dans le menu démarrer, puis tape `cd chemin/vers/mon-projet`)
   - **Mac/Linux** : ouvre l'application "Terminal", puis tape `cd chemin/vers/mon-projet`
   - 💡 Si tu n'as jamais utilisé un terminal, lis le [guide de préparation](../../docs/START-HERE.md#-guide-de-préparation-5-min)
3. Tape la commande : `git init`

**Validation :** Tu dois voir le message "Initialized empty Git repository". Un dossier `.git` est créé.

---

## Mission 2 — Faire 3 commits avec de bons messages (3 pts)

**Objectif :** Sauvegarder tes modifications avec des messages clairs.

**Étapes :**

1. Crée un fichier (ex : `readme.txt`)
2. Exécute : `git add .` (le point `.` signifie "tout le dossier") puis `git commit -m "ajout du fichier readme"`
3. Modifie le fichier
4. Exécute : `git add .` puis `git commit -m "mise à jour du contenu"`
5. Crée un second fichier
6. Exécute : `git add .` puis `git commit -m "ajout d'un second fichier"`

**Validation :** Chaque message doit être court et décrire ce qui a changé.

---

## Mission 3 — Créer une branche et y passer (3 pts)

**Objectif :** Utiliser les branches pour travailler sur une fonctionnalité séparée.

**Étapes :**

1. Crée une branche : `git checkout -b ma-feature`
2. Vérifie que tu es bien dessus : `git branch`

**Validation :** La branche `ma-feature` doit apparaître avec une étoile à côté (branche active).

---

## Mission 4 — Voir l'historique avec git log (3 pts)

**Objectif :** Consulter l'historique des commits.

**Étapes :**

1. Lance : `git log`
2. Observe les commits (auteur, date, message)

**Validation :** Tu vois tes 3 commits listés. Utilise la touche `q` pour quitter l'affichage (c'est normal, `git log` ouvre un lecteur de texte qu'il faut fermer avec `q`).

---

## 📊 Score missions

| Mission | Points |
|---------|--------|
| 1 | 3 |
| 2 | 3 |
| 3 | 3 |
| 4 | 3 |
| **Total** | **12** |

---

> ✅ **Terminé ?** Passe au [checkpoint](./checkpoint.md).
