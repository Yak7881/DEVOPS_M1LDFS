# ✅ Checklist Pull Request

Utilise cette checklist avant d'ouvrir une PR. Coche chaque case quand c'est fait.

---

## Avant d'ouvrir la PR

- [ ] Ma branche est à jour avec `main` (`git pull origin main`)
- [ ] J'ai testé mes modifications localement
- [ ] Mes commits ont des messages clairs
- [ ] Je n'ai pas inclus de fichiers inutiles (logs, fichiers temporaires)

---

## Dans la description de la PR

- [ ] Le titre décrit clairement le changement
- [ ] La description explique : **quoi** et **pourquoi**
- [ ] J'ai lié l'issue concernée (ex : `Fixes #42`)
- [ ] J'ai indiqué comment tester (si pertinent)

---

## Exemple de bonne description

```markdown
## Quoi
Correction de l'affichage du titre sur la page d'accueil.

## Pourquoi
Le titre ne s'affichait pas sur mobile (issue #12).

## Comment tester
1. Ouvrir la page d'accueil sur un téléphone
2. Vérifier que le titre "Bienvenue" s'affiche
```

---

## Après la review

- [ ] J'ai répondu aux commentaires du reviewer
- [ ] J'ai corrigé les changements demandés
- [ ] Le pipeline est vert ✅

---

> 📖 Voir aussi : [team-workflow-0-to-merge.md](../../docs/team-workflow-0-to-merge.md)
