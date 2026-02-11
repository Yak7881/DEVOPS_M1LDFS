# 🎯 Missions — Room 07 (Release)

4 missions, 3 points chacune. Fais-les dans l'ordre.

---

## Mission 1 — Expliquer ce que signifie v2.1.0 (3 pts)

**Objectif :** Comprendre le semantic versioning.

**Question :** Pour la version **v2.1.0**, que signifient respectivement le 2, le 1 et le 0 ?

**Réponse attendue :**
- 2 = major (numéro de version majeure)
- 1 = minor (numéro de version mineure)
- 0 = patch (numéro de correctif)

**Bonus :** Donne un exemple de changement qui justifierait de passer de v2.1.0 à v2.2.0.

---

## Mission 2 — Choisir le bon numéro de version pour 3 scénarios (3 pts)

**Objectif :** Savoir quand incrémenter major, minor ou patch.

**Contexte :** La version actuelle est **v1.3.0**.

**Scénarios :**

| N° | Scénario | Nouvelle version ? |
|----|----------|-------------------|
| 1 | Tu corriges un bug d'affichage | |
| 2 | Tu ajoutes une nouvelle page "À propos" | |
| 3 | Tu modifies l'API : les anciens clients ne fonctionnent plus | |

**Exemples de réponses :**
- 1 : v1.3.1 (patch — correction)
- 2 : v1.4.0 (minor — nouvelle fonctionnalité)
- 3 : v2.0.0 (major — breaking change)

---

## Mission 3 — Créer un tag Git localement (3 pts)

**Objectif :** Créer un tag sur un commit.

**Étapes :**

1. Ouvre un terminal dans un repo Git
2. Vérifie que tu es sur le bon commit : `git log -1`
3. Crée un tag : `git tag v1.0.0`
4. Vérifie : `git tag` (tu dois voir v1.0.0)

**Validation :** Tu as créé un tag v1.0.0 (ou un autre nom) et tu le vois avec `git tag`.

---

## Mission 4 — Rédiger un mini changelog pour une release fictive (3 pts)

**Objectif :** Écrire un changelog simple.

**Contexte :** Tu releases la version **v1.5.0** de ton app. Voici ce qui a changé :
- Ajout d'un bouton "Exporter en PDF"
- Correction du bug de connexion
- Mise à jour de la documentation

**À faire :** Rédige un mini changelog (3-5 lignes) au format :

```markdown
## v1.5.0

### Nouveautés
- ...

### Corrections
- ...
```

**Validation :** Ton changelog est clair et structuré.

---

## 📊 Score missions

| Mission | Points |
|---------|--------|
| 1 | 3 |
| 2 | 3 |
| 3 | 3 |
| 4 | 3 |
| **Total** | **12** |

---

> ✅ **Terminé ?** Passe au [checkpoint](./checkpoint.md).
