# 🚪 Room 09 — Jenkins

Tu vas découvrir **un outil classique d'automatisation de pipelines**.

---

## 📖 Ce que tu apprends

Découvrir Jenkins, un outil de pipeline largement utilisé dans l'industrie.

---

## 🎯 Pourquoi c'est utile ?

Jenkins est utilisé par des milliers d'entreprises. Comprendre son fonctionnement est un vrai atout sur ton CV.

---

## 💡 Exemple concret

Un **Jenkinsfile** dans un repo déclenche automatiquement le build et les tests à chaque push. Personne n'a besoin de lancer les commandes à la main.

---

## 📚 Les termes à connaître

| Terme | Définition courte |
|-------|-------------------|
| **Jenkins** | Outil open source qui exécute des pipelines (build, test, deploy) automatiquement |
| **Jenkinsfile** | Fichier dans le repo qui décrit les étapes du pipeline (écrit en Groovy) |
| **Agent** | Machine sur laquelle le pipeline s'exécute (`agent any` = n'importe quelle machine dispo) |
| **Stage** | Une étape du pipeline (ex : Build, Test, Deploy) |
| **Steps** | Les commandes à l'intérieur d'un stage |
| **Pipeline syntax** | Structure Groovy : `pipeline { stages { stage('Nom') { steps { ... } } } }` |

---

## 📖 Ressources

- [Jenkinsfile d'exemple](../../examples/pipelines/jenkins/Jenkinsfile)
- [Pipeline expliqué pas à pas](../../examples/pipelines/explain/pipeline-step-by-step.md)
- [Cheatsheet Pipelines](../../docs/pipelines-cheatsheet.md)

---

## 💡 Note importante

Tu n'as **pas besoin d'installer Jenkins** pour apprendre dans cette room. Tu peux lire le code et comprendre la logique.

---

## 🎯 Les missions

Fais les missions dans [missions.md](./missions.md).

---

## ✅ Le checkpoint

Quand tu as terminé les missions, passe le [checkpoint](./checkpoint.md).

---

> 🎯 **Prêt ?** Ouvre [missions.md](./missions.md) et commence !
