# Checkpoint — Room 10 (Incident Response)

Valide tes acquis avant de passer à la Room 11 (Capstone).

---

## Mini-quiz (5 questions)

**1.** Qu'est-ce qu'un **incident** dans le contexte DevOps ?

**2.** Quelle est la différence entre un incident **critical** et **minor** ?

**3.** À quoi sert un **postmortem** ?

**4.** Que signifie **rollback** ?

**5.** Quel est l'intérêt d'avoir une **checklist** de réponse aux incidents ?

<details>
<summary>Voir les réponses</summary>

1. Un incident est un événement non prévu qui impacte le service en production (ex : site down, erreurs en masse).
2. Critical = tout est cassé, gros impact. Minor = petit souci, impact limité.
3. Un postmortem est un document rédigé après l'incident : ce qui s'est passé, pourquoi, comment éviter à l'avenir.
4. Le rollback consiste à revenir à une version précédente du code ou de la config pour annuler un déploiement problématique.
5. La checklist permet de réagir de manière structurée (identifier, communiquer, corriger) sans paniquer et réduire la durée de l'incident.

</details>

---

## Mini-tâche

**Objectif :** Rédiger un postmortem pour un incident fictif.

**Contexte fictif :** Le site a été indisponible pendant 30 minutes. Cause : un mauvais déploiement (un bug a été déployé en production par erreur).

**À faire :** Rédige un postmortem complet avec :

1. **Titre** (ex : "Postmortem – Indisponibilité du site – 30 min")
2. **Ce qui s'est passé** (2-3 phrases)
3. **Pourquoi** (cause technique)
4. **Comment éviter à l'avenir** (2-3 actions concrètes)

**Format attendu :**

```markdown
## Postmortem – [Titre]

### Ce qui s'est passé
...

### Pourquoi
...

### Comment éviter
...
```

**Validation :** Ton postmortem est clair et actionnable.

---

## Score

- Quiz : ___ / 5 points
- Tâche accomplie : 5 points

**Total Room 10 :** ___ / 24 points (2 pts lecture + 12 pts missions + 5 quiz + 5 tâche)

---

> **Bravo !** Room suivante → [Room 11 — Projet final](../room-11-capstone/README.md)
