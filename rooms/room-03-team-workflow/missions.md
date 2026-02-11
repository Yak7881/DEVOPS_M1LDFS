# 🎯 Missions — Room 03 (Travail en équipe)

4 missions, 3 points chacune. Fais-les dans l'ordre.

---

## Mission 1 — Choisir le bon nom de branche (3 pts)

**Format :** Quiz

**Contexte :** L'issue dit : "Corriger le bug d'affichage du bouton sur la page de contact."

**Question :** Parmi ces 3 propositions, quelle est la **bonne** selon les conventions usuelles ?

| Option | Nom de branche |
|--------|----------------|
| A | `ma-branche` |
| B | `fix/bug-bouton-page-contact` |
| C | `bug` |

**Réponse :** B. La convention est `fix/description-courte` ou `feature/description-courte`.

**Validation :** Tu as compris que le nom doit être explicite et suivre le préfixe `fix/` ou `feature/`.

---

## Mission 2 — Transformer de mauvais messages en bons (3 pts)

**Format :** Exercice écrit

**Contexte :** Voici 3 messages de commit. Réécris-les correctement.

| Mauvais | Bon (à écrire) |
|---------|----------------|
| `modif` | ? |
| `j'ai corrigé un truc` | ? |
| `WIP` | ? |

**Exemples de bonnes réponses :**
- `modif` → `feat: ajouter le formulaire de contact`
- `j'ai corrigé un truc` → `fix: corriger l'affichage du bouton Submit`
- `WIP` → `fix: corriger le calcul du total (work in progress)` ou un message plus précis

**Règle :** Court, verbe à l'infinitif ou impératif, décrit le **quoi**.

---

## Mission 3 — Remplir la checklist PR (3 pts)

**Objectif :** Utiliser la checklist avant d'ouvrir une PR.

**Étapes :**

1. Ouvre [pr-checklist.md](../../examples/team/pr-checklist.md)
2. Imagine que tu viens de terminer une modification (une correction de bug)
3. Remplis la checklist : coche mentalement ou par écrit chaque point
4. Rédige une courte description de PR (titre + 2-3 lignes) comme dans l'exemple

**Validation :** Tu as produit une description complète (quoi, pourquoi, comment tester).

---

## Mission 4 — Simuler une review : "I request changes" vs "Approved" (3 pts)

**Objectif :** Comprendre la différence entre les deux réponses d'un reviewer.

**Contexte :**

- **Approved** : le reviewer accepte le code. On peut merger.
- **Request changes** : le reviewer demande des corrections. Tu dois modifier, commit, push, puis attendre une nouvelle review.

**Exercice :**

1. Ouvre une PR (réelle ou fictive) sur GitHub
2. Identifie les boutons : "Approve", "Request changes", "Comment"
3. Écris : dans quel cas utiliser "Request changes" ? dans quel cas "Approve" ?

**Exemple de réponse :**
- **Request changes** : quand il y a une erreur, du code à améliorer, ou une question non résolue.
- **Approve** : quand le code est correct, lisible et prêt à merger.

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
