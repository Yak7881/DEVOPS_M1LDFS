# 🚪 Room 07 — Release (Livraison)

Tu vas apprendre à **livrer une version stable** de ton projet aux utilisateurs.

---

## 📖 Ce que tu apprends

Comprendre les versions, les tags et les releases.

---

## 🎯 Pourquoi c'est utile ?

Les utilisateurs ont besoin de versions stables, pas de simples commits. Une release (ex : v1.2.0) = un point de livraison clair et reproductible.

---

## 💡 Exemple concret

Tu publies la version **v1.2.0**. Les utilisateurs peuvent la télécharger. Ils savent quelle version ils ont. Si un bug apparaît, tu peux corriger et sortir v1.2.1.

---

## 📚 Les termes à connaître

| Terme | Définition courte |
|-------|-------------------|
| **Semantic versioning** | Format major.minor.patch (ex : 2.1.3) |
| **Tag** | Pointeur Git sur un commit précis (ex : v1.0.0) |
| **Release** | Version publiée avec notes (changelog, fichiers) |
| **Changelog** | Liste des changements entre deux versions |

---

## 📖 Semantic versioning (major.minor.patch)

| Partie | Exemple | Quand l'incrémenter |
|--------|---------|---------------------|
| **Major** | 2.x.x | Changements incompatibles (breaking changes) |
| **Minor** | x.1.x | Nouvelles fonctionnalités compatibles |
| **Patch** | x.x.1 | Corrections de bugs |

**Exemples :**
- v1.0.0 → v1.1.0 : nouvelle fonctionnalité
- v1.1.0 → v1.1.1 : correction de bug
- v1.1.1 → v2.0.0 : changement qui casse la compatibilité

---

## 🎯 Les missions

Fais les missions dans [missions.md](./missions.md).

---

## ✅ Le checkpoint

Quand tu as terminé les missions, passe le [checkpoint](./checkpoint.md).

---

> 🎯 **Prêt ?** Ouvre [missions.md](./missions.md) et commence !
