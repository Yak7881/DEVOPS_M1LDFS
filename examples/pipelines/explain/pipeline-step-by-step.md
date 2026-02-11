# 🔬 Pipeline expliqué pas à pas

Un pipeline, c'est une suite d'étapes automatiques qui vérifient ton code.  
Ici, on décortique chaque morceau.

---

## 🎬 Le scénario

Tu travailles sur un projet. Tu pousses ton code sur GitHub.  
**Automatiquement**, un pipeline se lance. Tu n'as rien à faire.

---

## Étape 0 — Le déclencheur (trigger)

**Le déclencheur**, c'est l'événement qui lance le pipeline.

Dans notre cas :

```yaml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
```

Ça veut dire :
- Le pipeline se lance **quand quelqu'un pousse du code** sur la branche `main`
- OU **quand quelqu'un ouvre une Pull Request** vers `main`

> 💡 **Trigger** = déclencheur. C'est le "quand" du pipeline.

---

## Étape 1 — Checkout (récupérer le code)

```yaml
- name: Checkout du code
  uses: actions/checkout@v4
```

Le pipeline tourne sur une machine vide dans le cloud.  
Il doit d'abord **récupérer le code** du repo. C'est comme un `git clone`.

Sans cette étape, le pipeline n'a accès à aucun fichier.

---

## Étape 2 — Vérifications (les checks)

```yaml
- name: Vérifier les fichiers obligatoires
  run: |
    for f in README.md LICENSE docs/glossary.md; do
      if [ -f "$f" ]; then
        echo "✅ $f existe"
      else
        echo "❌ $f manquant"
        exit 1
      fi
    done
```

Le pipeline **vérifie que tout est en ordre** :
- Les fichiers importants existent-ils ?
- Les rooms ont-elles toutes un README ?
- Les fichiers markdown ne sont-ils pas vides ?

C'est comme un contrôle qualité automatique.

---

## Étape 3 — Le verdict

À la fin, le pipeline donne un résultat :

| Résultat | Signification | Ce qui se passe |
|----------|---------------|-----------------|
| ✅ Vert | Tout est OK | La PR peut être mergée |
| ❌ Rouge | Quelque chose a échoué | Il faut corriger avant de merger |

---

## 📋 Conditions d'échec

Le pipeline échoue (rouge ❌) si :

1. **Un fichier obligatoire manque** — tu as oublié de l'ajouter
2. **Un fichier markdown est vide** — tu as créé un fichier mais rien mis dedans
3. **Une room n'a pas de README** — la room est incomplète
4. **Une commande retourne `exit 1`** — c'est le code qui dit "erreur"

> 💡 `exit 0` = tout va bien. `exit 1` = il y a un problème.

---

## 📊 Le feedback (les logs)

Quand le pipeline tourne, il écrit des **logs** (journaux).  
Tu peux les lire dans l'onglet **Actions** de GitHub.

Exemple de log quand tout va bien :
```
=== Vérification des fichiers ===
✅ README.md existe
✅ LICENSE existe
✅ docs/glossary.md existe
🎉 Tout est bon !
```

Exemple de log quand ça échoue :
```
=== Vérification des fichiers ===
✅ README.md existe
❌ LICENSE manquant !
🚨 Il manque 1 fichier(s).
```

Les logs te disent **exactement** ce qui ne va pas.

---

## 🚨 Mini-scénario : "Ça casse — quoi faire ?"

### Situation
Tu pousses du code. Le pipeline est **rouge** ❌.

### Ce que tu fais :

1. **Va dans l'onglet Actions** sur GitHub
2. **Clique sur le run qui a échoué** (icône rouge)
3. **Lis les logs** — trouve la ligne avec ❌
4. **Comprends l'erreur** — exemple : "LICENSE manquant"
5. **Corrige dans ta branche** — ajoute le fichier manquant
6. **Pousse à nouveau** — `git add . && git commit -m "fix: ajouter LICENSE" && git push`
7. **Le pipeline se relance** automatiquement
8. **Vérifie que c'est vert** ✅

### Résumé en une phrase :
> Lis les logs, corrige, pousse à nouveau. C'est tout.

---

## 🔄 Comparaison : GitHub Actions vs Jenkins

| Concept | GitHub Actions | Jenkins |
|---------|---------------|---------|
| Fichier | `.github/workflows/ci.yml` | `Jenkinsfile` |
| Format | YAML | Groovy |
| Déclencheur | `on: push` | Configuré dans Jenkins (ou webhook) |
| Machine | `runs-on: ubuntu-latest` | `agent any` |
| Commande | `run: echo "hello"` | `sh 'echo "hello"'` |
| Étape | `steps:` dans un job | `stage('Nom')` dans `stages` |

---

## 🔗 Voir aussi

- [Pipeline GitHub Actions réel](../../../.github/workflows/ci.yml)
- [Pipeline GitHub Actions commenté](../github-actions/ci.yml)
- [Jenkinsfile de démo](../jenkins/Jenkinsfile)
- [Cheatsheet Pipelines](../../../docs/pipelines-cheatsheet.md)
- [Room 05 — Pipelines](../../../rooms/room-05-pipelines/README.md)
- [Room 09 — Jenkins](../../../rooms/room-09-jenkins/README.md)

---

> 🎯 Retour au [README principal](../../../README.md)
