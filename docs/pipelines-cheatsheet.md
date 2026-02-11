# Cheatsheet Pipelines

Aide-mémoire rapide sur les pipelines CI/CD.

---

## C'est quoi un pipeline ?

Un **pipeline**, c'est une suite d'étapes automatisées qui se lancent quand tu pousses du code.

Imagine une chaîne de montage en usine :
1. Vérifier les pièces
2. Assembler
3. Tester
4. Emballer
5. Livrer

Un pipeline fait pareil avec ton code.

---

## Les étapes classiques

```
Push du code
    ↓
┌──────────────┐
│  1. Checkout  │  ← Récupérer le code
└──────┬───────┘
       ↓
┌──────────────┐
│  2. Build     │  ← Préparer / compiler
└──────┬───────┘
       ↓
┌──────────────┐
│  3. Test      │  ← Lancer les tests
└──────┬───────┘
       ↓
┌──────────────┐
│  4. Deploy    │  ← Mettre en ligne
└──────────────┘
```

---

## GitHub Actions — Structure de base

```yaml
name: CI                          # Nom du pipeline
on: [push, pull_request]          # Quand il se lance

jobs:
  build:                          # Nom du job
    runs-on: ubuntu-latest        # Machine utilisée
    steps:
      - uses: actions/checkout@v4 # Étape 1 : récupérer le code
      - run: echo "Hello"        # Étape 2 : commande
```

### Mots clés importants

| Mot | Signification |
|-----|---------------|
| `name` | Le nom affiché dans GitHub |
| `on` | L'événement déclencheur (push, PR…) |
| `jobs` | Les tâches à faire |
| `runs-on` | Sur quelle machine ça tourne |
| `steps` | Les étapes dans un job |
| `uses` | Utiliser une action existante |
| `run` | Exécuter une commande |

---

## Jenkins — Structure de base

```groovy
pipeline {
    agent any                     // Sur n'importe quelle machine

    stages {
        stage('Build') {          // Étape 1
            steps {
                echo 'Construction...'
            }
        }
        stage('Test') {           // Étape 2
            steps {
                echo 'Tests...'
            }
        }
        stage('Deploy') {         // Étape 3
            steps {
                echo 'Déploiement...'
            }
        }
    }
}
```

### Mots clés importants

| Mot | Signification |
|-----|---------------|
| `pipeline` | Début du pipeline |
| `agent` | Sur quelle machine ça tourne |
| `stages` | Liste des étapes |
| `stage` | Une étape |
| `steps` | Les commandes dans une étape |
| `echo` | Afficher un message |

---

## Comparaison rapide

| | GitHub Actions | Jenkins |
|---|---|---|
| Fichier | `.github/workflows/ci.yml` | `Jenkinsfile` |
| Format | YAML | Groovy |
| Hébergement | GitHub (cloud) | Auto-hébergé (ton serveur) |
| Gratuit ? | Oui (limites) | Oui (open source) |
| Facilité | Très facile | Facile |

---

## Quand ça échoue ?

Le pipeline s'arrête et affiche une erreur.

**Que faire :**
1. Lis les **logs** (journaux) — ils disent quelle étape a échoué
2. Corrige le problème dans ton code
3. Pousse à nouveau → le pipeline se relance

---

## Liens utiles dans ce repo

- [Pipeline GitHub Actions réel](../.github/workflows/ci.yml)
- [Pipeline GitHub Actions commenté](../examples/pipelines/github-actions/ci.yml)
- [Jenkinsfile de démo](../examples/pipelines/jenkins/Jenkinsfile)
- [Explication pas à pas](../examples/pipelines/explain/pipeline-step-by-step.md)

---

> Retour au [README principal](../README.md)
