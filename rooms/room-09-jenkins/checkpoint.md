# Checkpoint — Room 09 (Jenkins)

Valide tes acquis avant de passer à la Room 10.

---

## Mini-quiz (5 questions)

**1.** Qu'est-ce qu'un **Jenkinsfile** ?

**2.** Dans quel langage est écrit un Jenkinsfile ?

**3.** Que signifie `agent any` dans un pipeline Jenkins ?

**4.** Quelle est la différence entre un **stage** et un **step** ?

**5.** Pourquoi Jenkins est-il encore utilisé dans beaucoup d'entreprises ?

<details>
<summary>Voir les réponses</summary>

1. Un Jenkinsfile est un fichier dans le repo qui décrit les étapes du pipeline (build, test, deploy).
2. Un Jenkinsfile est écrit en Groovy.
3. `agent any` signifie que le pipeline peut s'exécuter sur n'importe quelle machine disponible.
4. Un stage est une étape du pipeline (ex : Build, Test). Les steps sont les commandes à l'intérieur d'un stage.
5. Jenkins est open source, flexible et utilisé par des milliers d'entreprises pour des pipelines CI/CD.

</details>

---

## Mini-tâche

**Objectif :** Écrire un **Jenkinsfile minimal** avec 2 stages.

**Consigne :** Rédige un Jenkinsfile complet (sur papier ou dans un fichier) avec deux stages :
1. **Verify** : afficher "Vérification en cours..."
2. **Package** : afficher "Empaquetage en cours..."

> Tu peux t'inspirer du [Jenkinsfile du repo](../../examples/pipelines/jenkins/Jenkinsfile) qui a 3 stages : Prepare, Check, Package.

**Structure attendue :**

```groovy
pipeline {
    agent any
    stages {
        stage('Verify') {
            steps {
                // à compléter
            }
        }
        stage('Package') {
            steps {
                // à compléter
            }
        }
    }
}
```

**Validation :** Ton Jenkinsfile est syntaxiquement correct et contient bien 2 stages.

---

## Score

- Quiz : ___ / 5 points
- Tâche accomplie : 5 points

**Total Room 09 :** ___ / 24 points (2 pts lecture + 12 pts missions + 5 quiz + 5 tâche)

---

> **Bravo !** Room suivante → [Room 10 — Incidents](../room-10-incident-response/README.md)
