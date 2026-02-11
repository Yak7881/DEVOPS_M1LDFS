# Missions — Room 10 (Incident Response)

4 missions, 3 points chacune. Fais-les dans l'ordre.

---

## Mission 1 — Classer 4 incidents par sévérité (3 pts)

**Objectif :** Savoir évaluer la gravité d'un incident.

**Consigne :** Pour chaque incident ci-dessous, indique la sévérité : **critical**, **major** ou **minor**.

| N° | Incident | Sévérité ? |
|----|----------|------------|
| 1 | Le site affiche "500 Internal Server Error" pour tous les utilisateurs depuis 10 min |
| 2 | Une typo dans le texte de la page "À propos" |
| 3 | Le paiement en ligne ne fonctionne plus, les commandes sont bloquées |
| 4 | Une page secondaire affiche une erreur 404, le reste du site fonctionne |

**Réponses attendues (exemples) :**
- 1 : critical (tout le site impacté)
- 2 : minor (cosmétique)
- 3 : critical (casier bloqué)
- 4 : minor (page isolée)

**Validation :** Tu as classé les 4 incidents de manière cohérente.

---

## Mission 2 — Rédiger une checklist de 5 étapes (3 pts)

**Objectif :** Créer une checklist de réponse aux incidents.

**Consigne :** Écris une **checklist de 5 étapes** pour réagir à un incident en production.

**Exemples d'étapes :**
1. Détecter / confirmer l'incident
2. Évaluer la sévérité
3. Communiquer à l'équipe
4. Identifier et corriger la cause
5. Documenter (postmortem)

**Validation :** Ta checklist est logique et actionnable.

---

## Mission 3 — Scénario : le site affiche erreur 500 (3 pts)

**Objectif :** Appliquer une démarche de résolution.

**Scénario :** Le site affiche une erreur 500 pour tous les utilisateurs. Tu es le premier à le remarquer.

**Question :** Décris **ce que tu fais**, étape par étape (5 à 7 actions concrètes).

**Exemples de réponses :**
1. Vérifier soi-même que l'erreur est réelle
2. Prévenir l'équipe (Slack, etc.)
3. Consulter les logs pour identifier la cause
4. Vérifier les derniers déploiements (un rollback est-il possible ?)
5. Appliquer une correction ou un rollback
6. Confirmer que le site fonctionne à nouveau
7. Rédiger un postmortem

**Validation :** Ta démarche est structurée et pertinente.

---

## Mission 4 — Rédiger un mini postmortem (3 pts)

**Objectif :** Savoir documenter un incident.

**Consigne :** Rédige un **mini postmortem** (5-10 lignes) pour un incident fictif. Utilise ce format :

- **Que s'est-il passé ?** (raccourci)
- **Pourquoi ?** (cause probable)
- **Comment éviter à l'avenir ?** (1-2 actions)

**Exemple de sujet :** Une mise à jour du serveur a provoqué 30 min d'indisponibilité car le redémarrage n'avait pas été planifié.

**Validation :** Ton postmortem contient les 3 parties demandées.

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
