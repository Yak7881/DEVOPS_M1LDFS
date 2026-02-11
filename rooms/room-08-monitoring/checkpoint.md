# Checkpoint — Room 08 (Monitoring)

Valide tes acquis avant de passer à la Room 09.

---

## Mini-quiz (5 questions)

**1.** À quoi sert le **monitoring** en production ?

**2.** Quelle est la différence entre un **log** et une **métrique** ?

**3.** Qu'est-ce qu'un **dashboard** dans le contexte du monitoring ?

**4.** À quoi servent les **alertes** ?

**5.** Que signifie **uptime** (ex : 99,9 %) ?

<details>
<summary>Voir les réponses</summary>

1. Le monitoring sert à surveiller l'état de ton application en production (CPU, mémoire, etc.) pour détecter les problèmes tôt.
2. Un log est un historique des événements (erreurs, requêtes). Une métrique est une donnée mesurable chiffrée (temps de réponse, nombre de requêtes).
3. Un dashboard est un tableau de bord qui affiche les métriques en temps réel pour visualiser l'état du système.
4. Les alertes envoient des notifications automatiques quand un seuil est dépassé (ex : CPU > 90 %) pour réagir vite.
5. L'uptime est le pourcentage de temps où le service est disponible (99,9 % = très peu de coupures).

</details>

---

## Mini-tâche

**Objectif :** Écrire **3 règles d'alerte** pour un site e-commerce fictif.

**Contexte :** Tu es responsable d'un site de vente en ligne. Tu dois définir des alertes pour réagir vite quand un problème survient.

**À faire :** Rédige 3 règles d'alerte claires. Format : « Si [condition], alors [action]. »

**Exemples de pistes :**
- Sur le temps de réponse
- Sur le taux d'erreurs
- Sur la disponibilité du paiement
- Sur l'utilisation des ressources (CPU, mémoire)
- Sur le nombre de commandes en erreur

**Validation :** Tes 3 règles sont adaptées à un e-commerce et actionnables.

---

## Score

- Quiz : ___ / 5 points
- Tâche accomplie : 5 points

**Total Room 08 :** ___ / 24 points (2 pts lecture + 12 pts missions + 5 quiz + 5 tâche)

---

> **Bravo !** Room suivante → [Room 09 — Jenkins](../room-09-jenkins/README.md)
