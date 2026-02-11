# Missions — Room 05 (Pipelines CI/CD)

4 missions, 3 points chacune. Fais-les dans l'ordre.

---

## Mission 1 — Lire le pipeline réel et lister les étapes (3 pts)

**Objectif :** Comprendre la structure du pipeline du repo.

**Étapes :**

1. Ouvre le fichier [.github/workflows/ci.yml](../../.github/workflows/ci.yml)
2. Lis le contenu
3. Liste les **étapes** (steps) du pipeline dans l'ordre

**Exemple de réponse :**
- Étape 1 : checkout (récupérer le code)
- Étape 2 : vérifier la structure (test des dossiers rooms et docs)

**Validation :** Tu as identifié toutes les étapes du job `check-structure`.

---

## Mission 2 — Lire la version commentée du pipeline (3 pts)

**Objectif :** Comprendre chaque mot-clé du YAML.

**Étapes :**

1. Ouvre [examples/pipelines/github-actions/ci.yml](../../examples/pipelines/github-actions/ci.yml)
2. Lis les commentaires
3. Réponds : à quoi servent `on`, `runs-on`, `uses`, et `run` ?

**Validation :** Tu comprends le rôle de ces 4 mots-clés.

---

## Mission 3 — Lire le Jenkinsfile et lister les stages (3 pts)

**Objectif :** Comparer Jenkins et GitHub Actions.

**Étapes :**

1. Ouvre [examples/pipelines/jenkins/Jenkinsfile](../../examples/pipelines/jenkins/Jenkinsfile)
2. Liste les **stages** (étapes) du pipeline Jenkins
3. Compare avec le pipeline GitHub Actions : quelles sont les étapes communes ?

**Validation :** Tu as identifié les 3 stages du Jenkinsfile : **Prepare**, **Check**, **Package**.

---

## Mission 4 — Trouver une exécution verte ou rouge dans l'onglet Actions (3 pts)

**Objectif :** Voir un pipeline en action.

**Étapes :**

1. Va sur le repo devops-rooms (sur GitHub)
2. Clique sur **Actions** dans le menu
3. Trouve une exécution (run) de pipeline — verte ou rouge
4. Clique dessus et regarde les jobs et les logs

**Validation :** Tu as ouvert une exécution et compris comment lire le résultat (vert/rouge).

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
