# Room 05 — Pipelines CI/CD

Tu vas apprendre à **automatiser les vérifications et le déploiement** de ton code.

---

## Ce que tu apprends

Comprendre ce qu'est un pipeline CI/CD et comment il fonctionne.

---

## Pourquoi c'est utile ?

Les pipelines détectent les bugs avant que les utilisateurs ne les voient. Tu pousses du code → le pipeline tourne → vert ou rouge.

---

## Exemple concret

Tu push ton code. Un pipeline se lance automatiquement : il clone le repo, lance les tests, vérifie la structure. Si tout passe → vert. Si un test échoue → rouge. Tu corriges puis tu re-push.

---

## Les termes à connaître

| Terme | Définition courte |
|-------|-------------------|
| **CI** (Continuous Integration) | Intégration continue : à chaque push, on vérifie que le code compile et que les tests passent |
| **CD** (Continuous Delivery) | Livraison continue : déployer automatiquement après validation |
| **Pipeline** | Chaîne d'étapes automatisées (checkout → build → test → deploy) |
| **Stage** | Une étape du pipeline (ex : Build, Test, Deploy) |
| **Trigger** | Événement qui lance le pipeline (ex : push, PR) |
| **YAML** | Format de fichier utilisé pour décrire les pipelines GitHub Actions |

---

## Documents et exemples

- [Cheatsheet Pipelines](../../docs/pipelines-cheatsheet.md) — Aide-mémoire
- [Pipeline GitHub Actions commenté](../../examples/pipelines/github-actions/ci.yml) — Version avec explications
- [Jenkinsfile](../../examples/pipelines/jenkins/Jenkinsfile) — Exemple Jenkins
- [Pipeline pas à pas](../../examples/pipelines/explain/pipeline-step-by-step.md) — Explication détaillée

---

## Ce repo a un vrai pipeline

Le fichier [.github/workflows/ci.yml](../../.github/workflows/ci.yml) définit le pipeline de ce repo. Il se lance à chaque push ou PR sur `main` ou `master`.

---

## Les missions

Fais les missions dans [missions.md](./missions.md).

---

## Le checkpoint

Quand tu as terminé les missions, passe le [checkpoint](./checkpoint.md).

---

> **Prêt ?** Ouvre [missions.md](./missions.md) et commence !
