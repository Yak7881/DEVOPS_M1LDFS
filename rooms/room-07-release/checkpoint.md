# ✅ Checkpoint — Room 07 (Release)

Valide tes acquis avant de passer à la Room 08.

---

## 📝 Mini-quiz (5 questions)

**1.** Que signifient les trois nombres dans un semantic versioning (ex : 1.2.3) ?

**2.** Quand incrémente-t-on le **major** (chiffre de gauche) ?

**3.** Qu'est-ce qu'un **tag** Git ?

**4.** À quoi sert un **changelog** ?

**5.** Quelle commande Git permet de créer un tag local ?

<details>
<summary>📝 Voir les réponses</summary>

1. major.minor.patch : major = changements incompatibles, minor = nouvelles fonctionnalités compatibles, patch = corrections de bugs.
2. On incrémente le major quand on fait des changements incompatibles (breaking changes) qui cassent la compatibilité.
3. Un tag Git est un pointeur sur un commit précis dans l'historique (ex : v1.0.0).
4. Un changelog liste les changements entre deux versions pour informer les utilisateurs.
5. La commande `git tag` permet de créer un tag local (ex : `git tag v1.0.0`).

</details>

---

## 🎯 Mini-tâche

**Objectif :** Rédiger une entrée de changelog pour la version **v1.3.0** avec 2 fonctionnalités et 1 correction.

**Contexte fictif :** Tu releases v1.3.0. Changements :
- Nouvelle fonctionnalité 1 : connexion avec Google
- Nouvelle fonctionnalité 2 : mode sombre
- Correction : le formulaire ne se soumettait pas sur mobile

**À faire :** Écris l'entrée complète du changelog pour v1.3.0.

**Format attendu :**

```markdown
## v1.3.0 (date ou "à venir")

### Nouveautés
- ...

### Corrections
- ...
```

**Validation :** Ton changelog contient bien 2 fonctionnalités et 1 correction.

---

## 📊 Score

- Quiz : ___ / 5 points
- Tâche accomplie : 5 points

**Total Room 07 :** ___ / 24 points (2 pts lecture + 12 pts missions + 5 quiz + 5 tâche)

---

> 🎉 **Bravo !** Room suivante → [Room 08 — Monitoring](../room-08-monitoring/README.md)
