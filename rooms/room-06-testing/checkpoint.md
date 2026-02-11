# Checkpoint — Room 06 (Testing)

Valide tes acquis avant de passer à la Room 07.

---

## Mini-quiz (5 questions)

**1.** Quelle est la différence entre un test unitaire et un test d'intégration ?

**2.** Qu'est-ce qu'une **assertion** dans un test ?

**3.** À quoi sert un **test runner** ?

**4.** Pourquoi écrire des tests avant de mettre en production ?

**5.** Que signifie "couverture de tests" (test coverage) ?

<details>
<summary>Voir les réponses</summary>

1. Un test unitaire teste une seule fonction ou partie du code en isolation. Un test d'intégration teste plusieurs parties ensemble (ex : base de données + API).
2. Une assertion est une vérification qui dit : « je m'attends à ce que le résultat soit égal à une valeur attendue ».
3. Un test runner est un outil qui exécute automatiquement les tests (ex : Jest, pytest, JUnit).
4. Les tests détectent les erreurs avant que les utilisateurs ne les voient en production.
5. La couverture de tests est le pourcentage du code qui est exécuté par les tests.

</details>

---

## Mini-tâche

**Objectif :** Écrire 3 cas de test (entrée / sortie attendue) pour une fonction qui calcule l'âge à partir de l'année de naissance.

**Contexte :** Une fonction `age_from_birth_year(birth_year)` prend une année en entrée et retourne l'âge actuel. On suppose que l'année actuelle est 2025.

**À faire :** Écris 3 cas de test au format :

| Cas | Entrée | Sortie attendue |
|-----|--------|-----------------|
| 1 | ... | ... |
| 2 | ... | ... |
| 3 | ... | ... |

**Exemples de cas à couvrir :**
- Personne née en 2000
- Personne née en 2025 (nouveau-né)
- Personne née en 1990

**Validation :** Tes 3 cas sont cohérents (entrée + sortie attendue correcte).

---

## Score

- Quiz : ___ / 5 points
- Tâche accomplie : 5 points

**Total Room 06 :** ___ / 24 points (2 pts lecture + 12 pts missions + 5 quiz + 5 tâche)

---

> **Bravo !** Room suivante → [Room 07 — Release](../room-07-release/README.md)
