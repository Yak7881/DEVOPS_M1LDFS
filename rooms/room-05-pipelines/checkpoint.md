# ✅ Checkpoint — Room 05 (Pipelines CI/CD)

Valide tes acquis avant de passer à la Room 06.

---

## 📝 Mini-quiz (5 questions)

**1.** Que signifient les lettres CI dans CI/CD ?

**2.** Qu'est-ce qu'un **trigger** dans un pipeline ?

**3.** Que fait l'action `actions/checkout@v4` dans un pipeline GitHub Actions ?

**4.** Quelle est la différence entre un pipeline vert ✅ et un pipeline rouge ❌ ?

**5.** Dans un Jenkinsfile, comment s'appellent les grandes étapes (Build, Test, Deploy) ?

<details>
<summary>📝 Voir les réponses</summary>

1. **CI** = Continuous Integration (Intégration continue) : à chaque push, on vérifie que le code compile et que les tests passent.
2. Un événement qui lance le pipeline (ex : push, pull request).
3. Elle récupère le code du dépôt (checkout) sur la machine d'exécution.
4. Vert ✅ = tout passe, le pipeline a réussi. Rouge ❌ = une étape a échoué (ex : un test), le pipeline a échoué.
5. Des **stages** (étapes du pipeline).

</details>

---

## 🎯 Mini-tâche

**Objectif :** Décrire avec tes propres mots ce que fait le fichier [ci.yml](../../.github/workflows/ci.yml) étape par étape.

**À faire :**

Écris 4-6 phrases simples qui expliquent :
1. Quand le pipeline se lance
2. Sur quelle machine il tourne
3. Quelles étapes il exécute (dans l'ordre)
4. Ce qui se passe si une étape échoue

**Exemple de début :**
> Le pipeline se lance à chaque push ou pull request sur les branches main et master. Il s'exécute sur une machine Ubuntu fournie par GitHub. D'abord, il récupère le code du repo avec checkout. Ensuite...

**Validation :** Ta description est claire et reflète le contenu réel du fichier.

---

## 📊 Score

- Quiz : ___ / 5 points
- Tâche accomplie : 5 points

**Total Room 05 :** ___ / 24 points (2 pts lecture + 12 pts missions + 5 quiz + 5 tâche)

---

> 🎉 **Bravo !** Tu peux passer à la room suivante → [Room 06 — Testing](../room-06-testing/README.md)
