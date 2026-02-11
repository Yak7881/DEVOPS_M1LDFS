# 🎯 Missions — Room 09 (Jenkins)

4 missions, 3 points chacune. Fais-les dans l'ordre.

---

## Mission 1 — Lister tous les stages du Jenkinsfile (3 pts)

**Objectif :** Parcourir un Jenkinsfile réel.

**Consigne :** Ouvre le fichier [../../examples/pipelines/jenkins/Jenkinsfile](../../examples/pipelines/jenkins/Jenkinsfile). Liste **tous les stages** du pipeline dans l'ordre.

**Réponse attendue :** 1. Prepare, 2. Check, 3. Package (ce sont les noms exacts dans le fichier).

**Validation :** Tu as correctement identifié tous les stages.

---

## Mission 2 — Expliquer ce que signifie "agent any" (3 pts)

**Objectif :** Comprendre le concept d'agent.

**Question :** Dans un Jenkinsfile, que signifie `agent any` ?

**Réponse attendue :** L'**agent** est la machine sur laquelle le pipeline s'exécute. `agent any` signifie : utiliser n'importe quelle machine Jenkins disponible. Jenkins choisit automatiquement une machine libre (appelée "exécuteur").

**Validation :** Ta réponse explique que c'est lié à la machine d'exécution.

---

## Mission 3 — Ajouter un 4ᵉ stage fictif "Notify" (3 pts)

**Objectif :** Comprendre la structure d'un stage.

**Consigne :** Sur papier ou dans un fichier, ajoute un **4ᵉ stage** appelé `Notify` au Jenkinsfile. Ce stage doit afficher un message (ex : `echo 'Notification envoyée'`).

**Format attendu (exemple) :**

```groovy
stage('Notify') {
    steps {
        echo 'Notification envoyée'
    }
}
```

**Validation :** Ton stage suit la syntaxe correcte (stage, steps, commande).

---

## Mission 4 — Comparer Jenkinsfile vs GitHub Actions ci.yml (3 pts)

**Objectif :** Voir les différences entre deux outils de pipeline.

**Consigne :** Compare le [Jenkinsfile](../../examples/pipelines/jenkins/Jenkinsfile) et le [ci.yml GitHub Actions](../../examples/pipelines/github-actions/ci.yml). Liste **3 différences** (format, syntaxe, concepts, etc.).

**Exemples de réponses :**
- Jenkins utilise Groovy, GitHub Actions utilise YAML
- Jenkins : `agent any` / GitHub : `runs-on: ubuntu-latest`
- Jenkins : `stages` / GitHub : `jobs` et `steps`

**Validation :** Tu as identifié 3 différences pertinentes.

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
