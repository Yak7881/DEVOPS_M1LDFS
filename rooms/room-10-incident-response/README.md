# Room 10 — Incident Response (Réagir quand ça casse)

Tu vas apprendre à **réagir quand quelque chose casse en production**.

---

## Ce que tu apprends

Réagir de manière structurée quand un incident survient en production.

---

## Pourquoi c'est utile ?

Les incidents arrivent à tout le monde. Être préparé réduit la durée de l'incident et les dégâts.

---

## Exemple concret

Le site est down. L'équipe suit une **checklist** : identifier le problème, communiquer, corriger, documenter. Le site revient en ligne plus vite et on évite la panique.

---

## Les termes à connaître

| Terme | Définition courte |
|-------|-------------------|
| **Incident** | Événement non prévu qui impacte le service (ex : site down, erreurs en masse) |
| **Sévérité** | Niveau de gravité (critical = tout est cassé, major = gros impact, minor = petit souci) |
| **Postmortem** | Document rédigé après l'incident : ce qui s'est passé, pourquoi, comment éviter |
| **Rollback** | Revenir à une version précédente du code ou de la config pour annuler un déploiement |
| **On-call** | Personne désignée pour réagir aux incidents en dehors des heures de bureau |

---

## Flux simple de réponse à un incident

```
┌─────────────────┐
│ Détection       │  ← Alerte reçue ou bug signalé
└────────┬────────┘
         ↓
┌─────────────────┐
│ Triage          │  ← Évaluer la gravité (critical / major / minor)
└────────┬────────┘
         ↓
┌─────────────────┐
│ Communication   │  ← Informer l'équipe, les utilisateurs si besoin
└────────┬────────┘
         ↓
┌─────────────────┐
│ Correction      │  ← Corriger (rollback, fix, redémarrage…)
└────────┬────────┘
         ↓
┌─────────────────┐
│ Postmortem      │  ← Documenter pour éviter que ça se reproduise
└─────────────────┘
```

---

## Les missions

Fais les missions dans [missions.md](./missions.md).

---

## Le checkpoint

Quand tu as terminé les missions, passe le [checkpoint](./checkpoint.md).

---

> **Prêt ?** Ouvre [missions.md](./missions.md) et commence !
