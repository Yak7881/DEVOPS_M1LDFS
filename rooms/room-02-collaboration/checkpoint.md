# Checkpoint — Room 02 (Collaboration)

Valide tes acquis avant de passer à la Room 03.

---

## Mini-quiz (5 questions)

**1.** Quelle commande permet de copier un dépôt GitHub sur ton ordinateur ?

**2.** Quelle est la différence entre **clone** et **fork** ?

**3.** Qu'est-ce qu'une **Pull Request** ?

**4.** Que se passe-t-il quand Git détecte un **conflit** ?

**5.** Quelle commande envoie tes commits vers GitHub ?

<details>
<summary>Voir les réponses</summary>

1. `git clone <URL>` — copie un dépôt distant sur ton ordinateur.
2. **Clone** : copier un dépôt GitHub sur ton ordinateur. **Fork** : copier le dépôt de quelqu'un d'autre sur ton propre compte GitHub, pour le modifier sans toucher à l'original.
3. Une demande pour fusionner ta branche dans la branche principale. C'est aussi l'endroit où l'équipe relit ton code.
4. Git ne sait pas quelle version garder. Tu dois choisir manuellement en résolvant le conflit.
5. `git push`

</details>

---

## Mini-tâche

**Objectif :** Fork un dépôt public, fais une modification, ouvre une PR.

**Étapes :**

1. Va sur GitHub et trouve un dépôt public (ex : un repo d'exercices, un tutoriel)
2. Clique sur "Fork" → le dépôt est copié sur ton compte
3. Clone ton fork en local : `git clone <URL-de-ton-fork>`
4. Crée une branche : `git checkout -b ma-contribution`
5. Fais une petite modification (ex : corrige une typo, ajoute une ligne dans le README)
6. Commit + push : `git add .` puis `git commit -m "fix: correction typo"` puis `git push origin ma-contribution`
7. Sur GitHub, clique sur "Compare & pull request" pour ouvrir une PR vers le dépôt original

**Validation :** Une PR est ouverte. Tu peux la garder ouverte ou la fermer. L'important est d'avoir fait le processus.

---

## Score

- Quiz : ___ / 5 points
- Tâche accomplie : 5 points

**Total Room 02 :** ___ / 24 points (2 pts lecture + 12 pts missions + 5 quiz + 5 tâche)

---

> **Bravo !** Tu peux passer à la [Room 03 — Travail en équipe](../room-03-team-workflow/README.md).
