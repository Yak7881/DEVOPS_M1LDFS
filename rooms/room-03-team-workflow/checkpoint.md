# ✅ Checkpoint — Room 03 (Travail en équipe)

Valide tes acquis avant de passer à la Room 04.

---

## 📝 Mini-quiz (5 questions)

**1.** Qu'est-ce qu'une **issue** dans GitHub ?

**2.** Quel préfixe utilise-t-on pour une branche qui corrige un bug ?

**3.** Quelles sont les 3 parties d'une bonne description de PR (quoi, pourquoi, …) ?

**4.** Quand un reviewer clique "Request changes", que doit faire le développeur ?

**5.** Dans quel ordre se déroule le workflow : issue → branche → PR → merge ?

<details>
<summary>📝 Voir les réponses</summary>

1. Un ticket dans GitHub pour signaler un bug, proposer une idée ou poser une question.
2. Le préfixe `fix/` (ex : `fix/bug-titre-accueil`).
3. Quoi (ce qui a changé), Pourquoi (la raison), Comment tester (étapes pour vérifier).
4. Corriger dans sa branche, commit + push, puis répondre au commentaire pour indiquer que c'est fait.
5. Issue → créer une branche → coder + commits → push → ouvrir une PR → review → merge.

</details>

---

## 🎯 Mini-tâche

**Objectif :** Écrire une description complète de PR pour une correction de bug fictive.

**Contexte fictif :** Tu as corrigé un bug : le formulaire de contact ne validait pas les e-mails correctement.

**À faire :** Rédige une description de PR comme si tu l'ouvrais sur GitHub. Inclus :

- Un titre clair
- Une section "Quoi" (ce qui a changé)
- Une section "Pourquoi" (pourquoi ce bug)
- Une section "Comment tester" (étapes pour vérifier)

**Exemple de structure :**

```markdown
## Quoi
Correction de la validation des e-mails dans le formulaire de contact.

## Pourquoi
Les adresses avec un tiret (ex: jean-pierre@mail.com) étaient refusées à tort.

## Comment tester
1. Aller sur la page Contact
2. Saisir une adresse valide (ex: test@example.com)
3. Vérifier que le formulaire accepte et envoie
```

**Validation :** Ta description est complète et suffisante pour qu'un reviewer comprenne et puisse tester.

---

## 📊 Score

- Quiz : ___ / 5 points
- Tâche accomplie : 5 points

**Total Room 03 :** ___ / 24 points (2 pts lecture + 12 pts missions + 5 quiz + 5 tâche)

---

> 🎉 **Bravo !** Tu peux passer à la room suivante → [Room 04 — GitHub GUI](../room-04-github-gui/README.md)
