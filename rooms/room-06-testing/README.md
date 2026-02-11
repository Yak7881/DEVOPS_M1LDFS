# 🚪 Room 06 — Testing (Tests)

Tu vas apprendre à **vérifier que ton code fonctionne comme prévu** avec des tests automatiques.

---

## 📖 Ce que tu apprends

Les bases des tests : unitaires, intégration, assertions, test runner.

---

## 🎯 Pourquoi c'est utile ?

Sans tests, les bugs arrivent en production. Les tests permettent de détecter les erreurs avant que les utilisateurs ne les voient.

---

## 💡 Exemple concret

Une fonction `add(a, b)` additionne deux nombres. Un test vérifie que `add(2, 3)` retourne `5`. Si quelqu'un casse la fonction, le test échoue → tu le vois tout de suite.

---

## 📚 Les termes à connaître

| Terme | Définition courte |
|-------|-------------------|
| **Test unitaire** | Test d'une petite partie du code (ex : une fonction) en isolation |
| **Test d'intégration** | Test de plusieurs parties ensemble (ex : base de données + API) |
| **Test runner** | Outil qui exécute les tests (ex : Jest, pytest, JUnit) |
| **Assertion** | Vérification : "je m'attends à ce que X soit égal à Y" |
| **Couverture de tests** | Pourcentage du code exécuté par les tests |

---

## 💡 Exemple de test en pseudo-code

```text
Fonction : add(a, b)
  Retourne a + b

Test : test_add
  résultat = add(2, 3)
  assertion : résultat == 5   ✅ passé

Test : test_add_negatif
  résultat = add(-1, 1)
  assertion : résultat == 0   ✅ passé
```

En vrai code (Python par exemple) :

```python
def add(a, b):
    return a + b

def test_add():
    assert add(2, 3) == 5

def test_add_negatif():
    assert add(-1, 1) == 0
```

---

## 🎯 Les missions

Fais les missions dans [missions.md](./missions.md).

---

## ✅ Le checkpoint

Quand tu as terminé les missions, passe le [checkpoint](./checkpoint.md).

---

> 🎯 **Prêt ?** Ouvre [missions.md](./missions.md) et commence !
