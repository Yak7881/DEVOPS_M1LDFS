# Missions — Room 11 (Capstone Project)

6 missions, 3 points chacune = **18 points au total**. Fais-les dans l'ordre.

---

## Mission 1 — Créer un nouveau repo sur GitHub (3 pts)

**Objectif :** Avoir un repo vide pour ton projet.

**Consigne :**
1. Va sur [github.com](https://github.com)
2. Clique sur "New" (ou "+" → "New repository")
3. Donne un nom (ex : `mon-capstone-devops`)
4. Choisis Public
5. Ne coche pas "Add a README" (tu le feras à la mission 2)
6. Crée le repo

**Validation :** Tu as un repo GitHub vide.

---

## Mission 2 — Ajouter un README.md et un .gitignore (3 pts)

**Objectif :** Initialiser le contenu de base du repo.

**Consigne :**
1. Clone le repo en local (ou crée un dossier et `git init`)
2. Crée un fichier `README.md` avec au moins : titre du projet, 1-2 phrases de description
3. Crée un fichier `.gitignore` avec au moins 3 entrées (ex : `node_modules/`, `.env`, `__pycache__/`)
4. Commit et push

**Validation :** Le repo contient README.md et .gitignore.

---

## Mission 3 — Créer une branche feature, faire des changements, push (3 pts)

**Objectif :** Appliquer le workflow de branches.

**Consigne :**
1. Crée une branche `feature/ma-premiere-fonctionnalite` (ou un nom similaire)
2. Fais au moins une modification (ex : ajouter une section dans le README)
3. Commit avec un message clair
4. Push de la branche sur GitHub

**Validation :** La branche existe sur GitHub avec tes commits.

---

## Mission 4 — Ouvrir une PR avec description et checklist (3 pts)

**Objectif :** Pratiquer la Pull Request.

**Consigne :**
1. Ouvre une Pull Request vers `main`
2. Remplis le titre (ex : "feat: ajout de la section X dans le README")
3. Remplis la description avec : ce que tu as fait, pourquoi
4. Ajoute une mini-checklist (ex : [ ] J'ai testé, [ ] Le README est à jour)

**Validation :** La PR est ouverte avec une description et une checklist.

---

## Mission 5 — Ajouter un pipeline GitHub Actions simple (3 pts)

**Objectif :** Mettre en place un pipeline CI.

**Consigne :**
1. Crée le dossier `.github/workflows/`
2. Crée un fichier `ci.yml` (tu peux t'inspirer de [../../.github/workflows/ci.yml](../../.github/workflows/ci.yml) ou [../../examples/pipelines/github-actions/ci.yml](../../examples/pipelines/github-actions/ci.yml))
3. Le pipeline doit au minimum : se lancer sur push/PR, faire un checkout, exécuter au moins une commande (ex : `echo "OK"`)
4. Push et vérifie que le pipeline tourne dans l'onglet "Actions"

**Validation :** Le pipeline s'exécute et affiche un check vert sur la PR.

---

## Mission 6 — Créer une release avec tag et changelog (3 pts)

**Objectif :** Pratiquer les releases.

**Consigne :**
1. Merge ta PR dans `main` (si ce n'est pas déjà fait)
2. Crée un tag `v1.0.0` sur le commit merge
3. Crée une **Release** sur GitHub (Releases → Create a new release)
4. Associe le tag v1.0.0
5. Rédige un mini changelog (2-3 lignes) pour cette release

**Validation :** La release v1.0.0 est publiée avec un changelog.

---

## Score missions

| Mission | Points |
|---------|--------|
| 1 | 3 |
| 2 | 3 |
| 3 | 3 |
| 4 | 3 |
| 5 | 3 |
| 6 | 3 |
| **Total** | **18** |

---

> **Terminé ?** Passe au [checkpoint](./checkpoint.md).
