# DevOps Rooms

**Apprends le DevOps en explorant des salles. Pas de prérequis. Juste de la curiosité.**

---

## C'est quoi ce repo ?

Un parcours **gamifié** pour apprendre le DevOps depuis zéro.  
Chaque **room** (salle) t'enseigne un concept, avec des missions, des points et des checkpoints.

Tu n'as besoin de rien installer. Tout se lit directement sur GitHub.

> Ce repo contient aussi des **pipelines réels** : un workflow GitHub Actions qui s'exécute à chaque push, et un Jenkinsfile de démonstration.

---

## Je n'y connais rien — par où commencer ?

3 étapes, c'est tout :

1. **Lis** [docs/START-HERE.md](docs/START-HERE.md)
2. **Ouvre** la Room 00 [rooms/room-00-orientation/](rooms/room-00-orientation/README.md)
3. **Suis les missions** une par une

C'est parti. Pas besoin de plus.

---

## Carte des Rooms

| #   | Room | Tu apprends… |
|-----|------|-------------|
| 00  | [Orientation](rooms/room-00-orientation/README.md) | Comment fonctionne ce parcours |
| 01  | [Contrôle de version](rooms/room-01-version-control/README.md) | Sauvegarder et suivre ton code avec Git |
| 02  | [Collaboration](rooms/room-02-collaboration/README.md) | Travailler à plusieurs sur le même projet |
| 03  | [Travail en équipe](rooms/room-03-team-workflow/README.md) | Le workflow réel d'une équipe de devs |
| 04  | [GitHub (interface)](rooms/room-04-github-gui/README.md) | Utiliser GitHub sans la ligne de commande |
| 05  | [Pipelines CI/CD](rooms/room-05-pipelines/README.md) | Automatiser les vérifications et le déploiement |
| 06  | [Tests](rooms/room-06-testing/README.md) | Vérifier que ton code marche |
| 07  | [Release](rooms/room-07-release/README.md) | Livrer une version de ton projet |
| 08  | [Monitoring](rooms/room-08-monitoring/README.md) | Surveiller que tout tourne bien |
| 09  | [Jenkins](rooms/room-09-jenkins/README.md) | Découvrir un outil de pipeline classique |
| 10  | [Incidents](rooms/room-10-incident-response/README.md) | Réagir quand ça casse en production |
| 11  | [Projet final](rooms/room-11-capstone/README.md) | Mettre tout ensemble dans un vrai projet |

---

## Mode Atelier (60 min)

Tu as une heure ? Fais les rooms **00 à 05** dans l'ordre.  
Tu auras couvert : Git, la collaboration, le travail en équipe, GitHub et les pipelines.

---

## Ce que contient ce repo

| Fichier | Rôle |
|---------|------|
| [.github/workflows/ci.yml](.github/workflows/ci.yml) | Pipeline GitHub Actions **réel** (s'exécute à chaque push) |
| [examples/pipelines/jenkins/Jenkinsfile](examples/pipelines/jenkins/Jenkinsfile) | Pipeline Jenkins de démo |
| [examples/pipelines/explain/pipeline-step-by-step.md](examples/pipelines/explain/pipeline-step-by-step.md) | Explication pas à pas d'un pipeline |
| [docs/team-workflow-0-to-merge.md](docs/team-workflow-0-to-merge.md) | Guide complet : de 0 à PR mergée |
| [web/index.html](web/index.html) | Mini page web pour naviguer les rooms |

---

## Ressources

- [Glossaire](docs/glossary.md) — tous les mots techniques expliqués simplement
- [Règles du jeu](docs/rules-of-the-game.md) — comment gagner des points
- [Système de score](docs/scoring.md) — barème et badges
- [Cheatsheet Pipelines](docs/pipelines-cheatsheet.md) — aide-mémoire pipelines
- [Rôles dans une équipe](docs/roles-in-a-dev-team.md) — qui fait quoi
- [Ma progression](PROGRESS.md) — coche tes rooms terminées
- [Roadmap](ROADMAP.md) — ce qui arrive bientôt

---

## Contribuer

Ce repo est ouvert. Si tu trouves une erreur ou veux ajouter du contenu :

1. Ouvre une **issue** ([modèle bug](/.github/ISSUE_TEMPLATE/bug_report.md) ou [question](/.github/ISSUE_TEMPLATE/question.md))
2. Ou propose une **Pull Request** (voir le [modèle PR](/.github/PULL_REQUEST_TEMPLATE.md))

---

## Licence

[MIT](LICENSE) — libre d'utilisation, de modification et de partage.
