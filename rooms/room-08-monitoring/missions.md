# Missions — Room 08 (Monitoring)

4 missions, 3 points chacune. Fais-les dans l'ordre.

---

## Mission 1 — Lister 5 choses à surveiller sur un site web (3 pts)

**Objectif :** Identifier ce qu'on surveille en production.

**Question :** Imagine un site web en ligne. Quelles **5 choses** aimerais-tu surveiller pour savoir si tout va bien ?

**Exemples de réponses :**
- Temps de réponse des pages
- Taux d'erreurs (500, 404)
- Utilisation CPU / mémoire
- Nombre de connexions par minute
- Disponibilité du site (uptime)

**Validation :** Tu as listé 5 éléments pertinents.

---

## Mission 2 — Lire une ligne de log et expliquer (3 pts)

**Objectif :** Comprendre ce qu'un log raconte.

**Ligne de log à analyser :**

```
2024-02-11T14:32:01 [ERROR] api/users: connexion refusée à la base de données - timeout après 5s
```

**Questions :**
1. Quelle est la date/heure ?
2. Quel type d'événement ?
3. Où ça s'est passé ?
4. Que s'est-il passé ?

**Réponse attendue (exemple) :**
- Le 11 février 2024 à 14h32
- Erreur (ERROR)
- Sur l'API users
- La base de données n'a pas répondu dans les 5 secondes (timeout)

**Validation :** Tu as correctement interprété les 4 éléments.

---

## Mission 3 — Concevoir une règle d'alerte simple (3 pts)

**Objectif :** Savoir définir une alerte.

**Consigne :** Écris une règle d'alerte en langage naturel. Exemple de format : « Si X dépasse Y, alors envoyer une alerte. »

**Exemple :** « Si le temps de réponse moyen dépasse 3 secondes, envoyer une alerte par email. »

**À faire :** Rédige **3 règles d'alerte** différentes pour un site web (ex : CPU, mémoire, erreurs).

**Validation :** Tes 3 règles sont claires et actionnables.

---

## Mission 4 — Décrire un dashboard simple avec 4 panneaux (3 pts)

**Objectif :** Visualiser un tableau de bord de monitoring.

**Consigne :** Décris (ou dessine sur papier) un **dashboard de monitoring** avec **4 panneaux**.

Pour chaque panneau, indique :
- Le titre du panneau
- Ce qu'il affiche (quoi mesurer)
- En quoi c'est utile

**Exemple :**
| Panneau | Affiche | Utilité |
|---------|---------|---------|
| CPU | % d'utilisation CPU | Savoir si le serveur est surchargé |
| Réponse | Temps moyen en ms | Savoir si le site est lent |
| Erreurs | Nombre d'erreurs 5xx | Savoir si quelque chose casse |
| Uptime | % de disponibilité | Savoir si le site est souvent down |

**Validation :** Tu as décrit 4 panneaux cohérents.

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
