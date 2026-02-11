# Missions — Room 06 (Testing)

4 missions, 3 points chacune. Fais-les dans l'ordre.

---

## Mission 1 — Écrire un test simple en pseudo-code (3 pts)

**Objectif :** Écrire un test pour une fonction.

**Contexte :** Une fonction `multiply(a, b)` multiplie deux nombres.

**À faire :** Écris en pseudo-code (ou vrai code si tu préfères) un test qui :
1. Appelle `multiply(3, 4)`
2. Vérifie que le résultat est `12`

**Exemple de réponse :**
```text
Test : test_multiply
  résultat = multiply(3, 4)
  assertion : résultat == 12
```

**Validation :** Tu as compris la structure : appeler la fonction, puis vérifier le résultat.

---

## Mission 2 — Identifier 3 choses à tester dans un formulaire de login (3 pts)

**Objectif :** Réfléchir à ce qu'il faut tester.

**Contexte :** Un formulaire de login a : email, mot de passe, bouton "Se connecter".

**À faire :** Liste 3 choses qu'on pourrait tester (en 1 phrase chacune).

**Exemples :**
- Vérifier qu'un email valide est accepté
- Vérifier qu'un email invalide est refusé
- Vérifier qu'un mot de passe vide est refusé

**Validation :** Tu as listé 3 cas de test pertinents.

---

## Mission 3 — Lire une sortie de test et déterminer si ça passe ou échoue (3 pts)

**Objectif :** Comprendre la sortie d'un test runner.

**Contexte :** Voici une sortie de test (exemple) :

```text
test_add ... OK
test_subtract ... FAIL (AssertionError: expected 2, got 3)
test_multiply ... OK

Ran 3 tests in 0.02s
FAILED (failures=1)
```

**Questions :**
1. Combien de tests ont été exécutés ?
2. Combien ont réussi ? Combien ont échoué ?
3. Quel test a échoué et pourquoi ?

**Validation :** Tu as identifié le test en échec et la raison (résultat attendu 2, obtenu 3).

---

## Mission 4 — Trouver où les tests sont exécutés dans le pipeline du repo (3 pts)

**Objectif :** Savoir où les tests s'intègrent dans le CI.

**Étapes :**

1. Ouvre le pipeline [.github/workflows/ci.yml](../../.github/workflows/ci.yml)
2. Cherche si des tests sont exécutés explicitement
3. Si ce repo n'a pas de tests dans le pipeline, écris : "Ce pipeline ne lance pas de tests pour l'instant. Dans un projet typique, on ajouterait une étape du type `run: npm test` ou `run: pytest`."

**Validation :** Tu as compris que le pipeline actuel vérifie la structure et que les tests peuvent être ajoutés comme étape.

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
