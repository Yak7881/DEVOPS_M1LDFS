# 📝 Messages de commit

Comment écrire des messages de commit clairs et utiles.

---

## Format recommandé

```
<type>: <description courte>
```

---

## Types courants

| Préfixe | Usage |
|---------|-------|
| `fix:` | Correction de bug |
| `feat:` | Nouvelle fonctionnalité |
| `chore:` | Tâche de maintenance |
| `docs:` | Documentation |
| `refactor:` | Refactorisation sans changement de comportement |
| `test:` | Ajout ou modification de tests |

---

## Règles simples

- Court : 50 caractères max pour la première ligne
- Commence par un verbe (à l'infinitif ou impératif)
- Décrit le **quoi**, pas le comment
- Pas de point final

---

## ✅ 5 bons exemples

```
fix: corriger l'affichage du titre sur la page d'accueil
```
```
feat: ajouter le formulaire d'inscription
```
```
docs: mettre à jour le README avec les nouvelles instructions
```
```
chore: mettre à jour les dépendances npm
```
```
test: ajouter un test pour la fonction de calcul du prix
```

---

## ❌ 5 mauvais exemples → corrigés

| ❌ Mauvais | Pourquoi c'est mauvais | ✅ Corrigé |
|-----------|----------------------|-----------|
| `modif` | Trop vague. Quoi comme modif ? | `fix: corriger le lien cassé dans le footer` |
| `WIP` | Ne dit rien. Travail en cours de quoi ? | `feat: ajouter le menu de navigation (en cours)` |
| `j'ai corrigé un truc` | Informel et imprécis | `fix: corriger la validation des e-mails` |
| `aefg234` | N'importe quoi, aucun sens | `chore: nettoyer les fichiers temporaires` |
| `Update index.html` | Trop générique. Quelle mise à jour ? | `feat: ajouter la section contact à la page d'accueil` |

---

## 💡 Astuce

Avant de committer, pose-toi cette question :

> "Si je lis ce message dans 6 mois, est-ce que je comprendrai ce que j'ai fait ?"

Si la réponse est non, réécris-le.

---

> 🔗 Voir aussi : [Nommage des branches](branch-naming.md) | [Checklist PR](pr-checklist.md)
