# Rôles dans une équipe de développement

Qui fait quoi ? Voici les rôles les plus courants, expliqués simplement.

---

## Les 6 rôles principaux

### Développeur (Dev)
**Ce qu'il fait :** Écrit le code. Corrige les bugs. Ajoute des fonctionnalités.  
**Dans le workflow PR :** Crée la branche, code, pousse, ouvre la PR.

---

### Lead développeur (Tech Lead)
**Ce qu'il fait :** Développeur senior qui guide l'équipe technique. Prend les décisions d'architecture.  
**Dans le workflow PR :** Fait la review des PR complexes. Valide les choix techniques.

---

### QA (Quality Assurance)
**Ce qu'il fait :** Vérifie que le produit fonctionne. Teste manuellement ou écrit des tests automatiques.  
**Dans le workflow PR :** Teste la branche avant le merge. Signale les bugs trouvés.

---

### Ops (Opérationnel)
**Ce qu'il fait :** Gère les serveurs, le déploiement, le monitoring (surveillance). S'assure que tout tourne. Aussi appelé "SRE" (Site Reliability Engineer) dans certaines entreprises — voir le [glossaire](glossary.md).  
**Dans le workflow PR :** Configure les pipelines (vérifications automatiques). Surveille le déploiement après le merge.

---

### Product (Product Owner / Product Manager)
**Ce qu'il fait :** Décide **quoi** construire. Écrit les spécifications. Priorise les tâches.  
**Dans le workflow PR :** Crée les issues. Valide que la fonctionnalité correspond au besoin.

---

### Reviewer (relecteur de code)
**Ce qu'il fait :** Relit le code des autres pour vérifier la qualité.  
**Dans le workflow PR :** Lit la PR, fait des commentaires, approuve ou demande des changements.

> Le reviewer peut être n'importe quel dev de l'équipe. Ce n'est pas toujours la même personne.

---

## Qui fait quoi dans une PR ?

```
Product          → Crée l'issue (la demande)
Dev              → Prend l'issue, crée la branche, code, ouvre la PR
Reviewer         → Relit le code, approuve ou demande des changements
QA               → Teste que ça marche
Lead             → Valide si besoin
Ops / Pipeline   → Vérifie automatiquement (tests, format, déploiement)
```

---

## L'essentiel à retenir

- Tout le monde ne code pas. Chaque rôle a son importance.
- Le **reviewer** protège la qualité du code.
- Le **pipeline** remplace une partie du travail manuel (tests, vérifications).
- Le **product** décide le "quoi", le **dev** décide le "comment".

---

## Liens utiles

- [Workflow complet : de 0 à PR mergée](team-workflow-0-to-merge.md)
- [Room 03 — Travail en équipe](../rooms/room-03-team-workflow/README.md)

---

> Retour au [README principal](../README.md)
