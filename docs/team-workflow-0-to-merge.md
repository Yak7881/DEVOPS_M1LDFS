# De 0 à PR mergée

**Comment les développeurs poussent leur travail, étape par étape.**

---

## Le scénario

Tu es dans une équipe. On t'a assigné une tâche :

> "Corriger le bug d'affichage sur la page d'accueil"

Voici **exactement** ce que tu fais, du début à la fin.

---

## Les 8 étapes

### Étape 1 — Prendre une issue

Une **issue**, c'est un ticket qui décrit une tâche à faire.

- Va sur l'onglet **Issues** du projet GitHub
- Trouve ton issue (ex : "Bug: le titre ne s'affiche pas")
- Assigne-toi dessus (clique "assign yourself")

> L'issue, c'est ta feuille de route. Elle dit quoi faire.

---

### Étape 2 — Créer une branche

Une **branche**, c'est une copie de travail. Tu codes dessus sans toucher au code principal.

**En ligne de commande :**
```bash
git checkout -b fix/bug-titre-accueil
```

**Sur GitHub (GUI) :**
1. Va sur la page du repo
2. Clique sur le menu déroulant "main"
3. Tape le nom de ta branche : `fix/bug-titre-accueil`
4. Clique "Create branch"

> Règle de nommage : `fix/description-courte`, `feature/description-courte`, `chore/description-courte`
> Voir [branch-naming.md](../examples/team/branch-naming.md)

---

### Étape 3 — Faire des commits

Tu modifies le code, puis tu sauvegardes avec un **commit**.

**En ligne de commande :**
```bash
# Modifier le fichier
git add index.html
git commit -m "fix: corriger l'affichage du titre sur la page d'accueil"
```

**Sur GitHub (GUI) :**
1. Navigue jusqu'au fichier à modifier
2. Clique l'icône crayon (Edit)
3. Fais ta modification
4. En bas, écris ton message de commit
5. Clique "Commit changes"

> Bon message de commit : court, commence par un verbe. Voir [commit-messages.md](../examples/team/commit-messages.md)

---

### Étape 4 — Push sur GitHub

Tu envoies ta branche locale vers GitHub.

**En ligne de commande :**
```bash
git push origin fix/bug-titre-accueil
```

**Sur GitHub (GUI) :**
Si tu as codé directement sur GitHub, c'est déjà fait (chaque commit est un push).

---

### Étape 5 — Ouvrir une Pull Request (PR)

Une **Pull Request**, c'est une demande pour fusionner ta branche dans `main`.

**Sur GitHub :**
1. Va sur le repo → onglet "Pull requests"
2. Clique "New pull request"
3. Sélectionne ta branche (`fix/bug-titre-accueil`) → vers `main`
4. Remplis le titre et la description
5. Clique "Create pull request"

> Utilise la checklist PR → voir [pr-checklist.md](../examples/team/pr-checklist.md)

---

### Étape 6 — Répondre à la review

Un coéquipier (le **reviewer**) relit ton code et peut :
- **Approuver** : tout est bon
- **Commenter** : poser une question
- **Demander des changements** : quelque chose à corriger

**Si on te demande un changement :**
1. Corrige dans ta branche
2. Commit + push
3. La PR se met à jour automatiquement
4. Réponds au commentaire pour dire que c'est fait

---

### Étape 7 — Merge

Quand la review est approuvée et que le pipeline est vert :

1. Clique "Merge pull request" sur GitHub
2. Confirme
3. Ta branche est fusionnée dans `main`

> Tu peux supprimer ta branche après le merge (GitHub te le propose).

---

### Étape 8 — Le pipeline valide

Après le merge, le **pipeline CI/CD** se lance automatiquement sur `main`.

Il vérifie que tout fonctionne encore. Si c'est vert : tout va bien.  
Si c'est rouge : il y a un problème à corriger vite.

> Voir [pipelines-cheatsheet.md](pipelines-cheatsheet.md) pour comprendre les pipelines.

---

## Résumé visuel

```
Issue assignée
    ↓
Créer une branche
    ↓
Coder + Commits
    ↓
Push
    ↓
Ouvrir une PR
    ↓
Review → Corrections → Re-review
    ↓
Merge
    ↓
Pipeline valide
```

---

## Commandes résumées (ligne de commande)

```bash
# 1. Créer une branche
git checkout -b fix/bug-titre-accueil

# 2. Modifier, ajouter, committer
git add .
git commit -m "fix: corriger l'affichage du titre"

# 3. Pousser
git push origin fix/bug-titre-accueil

# 4. Ouvrir la PR sur GitHub (dans le navigateur)

# 5. Après le merge, revenir sur main
git checkout main
git pull
```

---

## Liens utiles

- [Nommage de branches](../examples/team/branch-naming.md)
- [Messages de commit](../examples/team/commit-messages.md)
- [Checklist PR](../examples/team/pr-checklist.md)
- [Checklist Review](../examples/team/code-review-checklist.md)
- [Rôles dans une équipe](roles-in-a-dev-team.md)
- [Room 03 — Travail en équipe](../rooms/room-03-team-workflow/README.md)

---

> Retour au [README principal](../README.md)
