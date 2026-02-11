# Commence ici

Bienvenue. Tu es au bon endroit.

---

## C'est quoi le DevOps ?

Le **DevOps**, c'est un ensemble de pratiques pour que les développeurs (ceux qui écrivent le code) et les opérationnels (ceux qui font tourner les serveurs) travaillent **ensemble**, plus vite, avec moins d'erreurs.

En résumé : **écrire du code → le tester → le livrer → le surveiller**, le tout de manière fluide et automatisée.

---

## C'est quoi ce parcours ?

Ce repo est organisé en **rooms** (salles).  
Chaque room t'apprend **un concept**, avec :

- Une explication courte
- Des missions à faire
- Un checkpoint (mini-quiz + tâche)
- Des points à gagner

Tu avances à ton rythme. Pas de piège. Pas de prérequis.

---

## Par où commencer ?

1. **Lis les règles** → [rules-of-the-game.md](rules-of-the-game.md)
2. **Ouvre la Room 00** → [../rooms/room-00-orientation/README.md](../rooms/room-00-orientation/README.md)
3. **Suis les rooms dans l'ordre** (00, 01, 02…)
4. **Coche ta progression** dans [PROGRESS.md](../PROGRESS.md)

---

## De quoi j'ai besoin ?

| Outil | Obligatoire ? | Pourquoi |
|-------|--------------|----------|
| Un navigateur web | Oui | Pour lire les rooms sur GitHub |
| Un compte GitHub | Oui (gratuit) | Pour faire les missions pratiques |
| Git installé | Recommandé | Pour les rooms 01+ (ligne de commande) |
| Un éditeur de code | Recommandé | VS Code, Notepad++, ou autre |
| Jenkins | Non | On explique, pas besoin de l'installer |

---

## Guide de préparation (5 min)

Si tu débutes complètement, fais ces étapes **une seule fois** avant de commencer les rooms.

### 1. Créer un compte GitHub (gratuit)

1. Va sur [github.com](https://github.com)
2. Clique **Sign up**
3. Suis les étapes (email, mot de passe, pseudo)
4. C'est fait. Tu as un compte.

### 2. Installer Git (pour les rooms 01+)

Git, c'est un outil qui tourne dans le **terminal** (voir ci-dessous).

- **Windows** : télécharge [git-scm.com](https://git-scm.com/download/win) → installe → garde les options par défaut
- **Mac** : ouvre le Terminal, tape `git --version`. S'il n'est pas installé, Mac te le propose automatiquement
- **Linux** : ouvre le Terminal, tape `sudo apt install git` (Ubuntu/Debian) ou `sudo dnf install git` (Fedora)

Pour vérifier : ouvre un terminal et tape `git --version`. Si un numéro s'affiche, c'est bon.

### 3. C'est quoi un terminal ?

Un **terminal** (aussi appelé "ligne de commande"), c'est une fenêtre où tu tapes des commandes texte au lieu de cliquer.

**Comment l'ouvrir :**
- **Windows** : cherche "PowerShell" ou "cmd" dans le menu démarrer. Ou clique droit dans un dossier → "Ouvrir dans le Terminal"
- **Mac** : cherche "Terminal" dans Spotlight (Cmd + Espace)
- **Linux** : cherche "Terminal" dans tes applications

Tu taperas des commandes comme `git init` ou `git status`. Pas de panique, chaque commande est expliquée dans les rooms.

### 4. Configurer Git avec ton identité

La première fois, dis à Git qui tu es (pour signer tes sauvegardes) :

```bash
git config --global user.name "TonPseudo"
git config --global user.email "ton@email.com"
```

Utilise le **même email** que ton compte GitHub.

### 5. Se connecter à GitHub depuis le terminal

Quand tu feras ton premier `git push` (envoyer du code vers GitHub), il te demandera de te connecter.

**La méthode la plus simple (HTTPS) :**
1. Va sur [github.com/settings/tokens](https://github.com/settings/tokens)
2. Clique "Generate new token (classic)"
3. Donne un nom (ex: "mon-pc"), coche "repo", clique "Generate"
4. **Copie le token** (tu ne le reverras plus)
5. Quand Git te demande un mot de passe, colle ce **token** (pas ton mot de passe GitHub)

> Sur Windows, Git retient le token automatiquement après la première fois.  
> Si c'est trop compliqué, pas de panique : les rooms 00 à 04 peuvent se faire **entièrement depuis le navigateur**, sans terminal.

---

## Combien de temps ça prend ?

- **Mode rapide** (rooms 00-05) : ~1 heure
- **Parcours complet** (rooms 00-11) : ~4-6 heures
- **Avec projet final** : ~8 heures

Tu peux t'arrêter et reprendre quand tu veux.

---

## Un mot technique que tu ne comprends pas ?

→ Va dans le [Glossaire](glossary.md). Chaque terme est expliqué en une phrase.

---

> **Prêt ?** Ouvre la [Room 00 — Orientation](../rooms/room-00-orientation/README.md) et c'est parti !
