<p align="center"><img src="icons/icon-192.png" width="96" alt="Búho"></p>

<h1 align="center">Búho</h1>

<p align="center">
Journal de bébé : sommeil, tétées et couches<br>
<b>Fonctionne hors ligne</b>
</p>

<p align="center">
<a href="README.md">Español</a> ·
<a href="README.en.md">English</a> ·
<a href="README.zh-CN.md">简体中文</a> ·
<a href="README.hi.md">हिन्दी</a> ·
<a href="README.pt.md">Português</a> ·
<a href="README.ja.md">日本語</a> ·
<a href="README.de.md">Deutsch</a> ·
<a href="README.id.md">Bahasa Indonesia</a> ·
<a href="README.ru.md">Русский</a> ·
<b>Français</b> ·
<a href="README.it.md">Italiano</a>
</p>

<p align="center"><b>▶ App: <a href="https://outsidestructure787.github.io/buho/">outsidestructure787.github.io/buho</a></b> · version 0.5.1</p>

---

## Qu'est-ce que Búho
Búho (« hibou » en espagnol) est une application pour noter d'un geste la journée de bébé : quand il s'endort et se réveille, les tétées (sein, biberon ou tire-lait), les couches et des choses comme le poids, la température ou les médicaments. Elle est pensée pour être utilisée à moitié endormi à 3 heures du matin : gros boutons, mode sombre, une seule main.

Elle fonctionne sans réseau : chaque entrée est enregistrée tout de suite sur le téléphone. Si vous êtes deux à l'utiliser, chacun sur son téléphone, vous pouvez la relier à une feuille Google Sheets, et les téléphones se mettent à jour tout seuls dès qu'il y a du réseau. Elle marche sur Android, iPhone et ordinateur, sans passer par un store, et elle est gratuite.

Les données sont à vous. Búho n'a pas de serveurs : ce que vous notez reste sur votre téléphone et, si vous activez la synchronisation, dans une feuille de calcul de votre propre compte Google.

L'application est disponible en français, espagnol, anglais, portugais, italien, allemand et catalan. Elle suit la langue du téléphone ; vous pouvez la changer dans *Réglages → Configuration → Langue*.

## Ce qu'il vous faut
- **Un seul téléphone :** juste le téléphone. Deux minutes (étape 1).
- **Deux téléphones ou plus :** un compte Google (Gmail suffit) et un ordinateur pendant une quinzaine de minutes, une seule fois (étape 2). C'est faisable depuis un téléphone, mais l'éditeur de scripts de Google est peu pratique sur petit écran.
- **Rendez-vous et rappels de médicaments :** la même chose qu'à l'étape 2, plus un Google Agenda. Cinq minutes de plus (étape 3).

Pas besoin de savoir programmer. Il s'agit de copier-coller un texte et d'appuyer sur quelques boutons, et chacun est expliqué ici.

## Étape 1. Installer l'application sur le téléphone
1. Ouvrez cette adresse sur le téléphone : **https://outsidestructure787.github.io/buho/** Avec Chrome sur Android, avec Safari sur iPhone.
2. Ajoutez-la à l'écran d'accueil :
   - **Android (Chrome) :** touchez les trois points (⋮) en haut à droite et choisissez *Installer l'application* ou *Ajouter à l'écran d'accueil*. Confirmez.
   - **iPhone (Safari) :** touchez le bouton de partage (le carré avec une flèche vers le haut, en bas), faites défiler un peu et choisissez *Sur l'écran d'accueil*. Touchez *Ajouter*.
3. Fermez le navigateur et ouvrez Búho depuis son icône, l'œil vert. Désormais, ouvrez-la toujours de là : elle s'affiche en plein écran comme une vraie application et fonctionne sans réseau.
4. Touchez la roue dentée en haut à droite (Réglages) et remplissez *Infos du bébé* : prénom, date de naissance et sexe. Dans *Configuration*, indiquez qui utilise ce téléphone (par exemple « Maman » ou « Papa »). Touchez *Enregistrer*.

C'est prêt. Si une seule personne l'utilise, il ne faut rien de plus.

## Étape 2 (facultative). Partager le journal entre plusieurs téléphones
Búho enregistre les données dans une feuille Google Sheets que vous créez. Chaque téléphone y envoie ce qu'il note et récupère ce que les autres ont noté. Pour que la feuille et l'application se comprennent, on colle dans la feuille un petit programme (un « script ») qui se trouve dans ce dépôt. Cela se fait une seule fois.

### 2.1. Créez la feuille
Sur l'ordinateur, allez sur [sheets.new](https://sheets.new) avec votre compte Google. Une feuille vierge s'ouvre. En haut à gauche, il est écrit *Feuille de calcul sans titre* : cliquez et nommez-la, par exemple *Búho*.

Inutile d'y écrire quoi que ce soit. L'onglet des entrées se crée tout seul à la première synchronisation.

### 2.2. Collez le script
1. Dans un autre onglet, ouvrez [le script en texte brut](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Code.gs). Vous verrez une page pleine de code. Sélectionnez tout avec `Ctrl + A` (`Cmd + A` sur Mac) et copiez avec `Ctrl + C` (`Cmd + C`).
2. Revenez à la feuille. Dans le menu du haut, cliquez sur *Extensions* puis sur *Apps Script*. L'éditeur de scripts de Google s'ouvre dans un nouvel onglet.
3. L'éditeur contient un fichier `Code.gs` avec quelques lignes d'exemple (`function myFunction() { }`). Cliquez dedans, sélectionnez tout (`Ctrl + A`) et effacez jusqu'à ce qu'il soit vide.
4. Collez le code copié (`Ctrl + V`). La première ligne commence par `/**` et la dernière est une accolade : `}`.
5. En haut à gauche, il est écrit *Projet sans titre*. Vous pouvez le renommer *Búho*.
6. Enregistrez avec l'icône de disquette ou `Ctrl + S`.

Si *Apps Script* n'apparaît pas dans le menu *Extensions*, vous utilisez sans doute un compte professionnel ou scolaire qui le bloque. Prenez un compte Gmail personnel.

### 2.3. Créez votre clé
La clé est un mot de passe que seuls vos téléphones connaîtront. Sans elle, personne d'autre ne peut lire ni écrire dans la feuille. Elle va dans un fichier à part pour ne pas être perdue quand vous mettez le script à jour.

1. Dans la colonne de gauche de l'éditeur, à côté de *Fichiers*, cliquez sur **+** et choisissez *Script*. Tapez `Config` et appuyez sur Entrée.
2. Effacez le contenu du nouveau fichier et collez celui de [`Config.gs`](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Config.gs), qui fait quelques lignes.
3. Cherchez la ligne `const CLAVE = 'CAMBIA-ESTA-CLAVE';` et remplacez seulement le texte `CAMBIA-ESTA-CLAVE` par une longue clé inventée. Le plus simple : quatre mots au hasard, comme `girafe-lundi-tartine-nuage`. Gardez les guillemets et le point-virgule.
4. Enregistrez (`Ctrl + S`). À gauche, vous devez voir deux fichiers : `Code.gs` et `Config.gs`.

Notez la clé quelque part : vous en aurez besoin sur le téléphone.

### 2.4. Publiez le script
La publication donne au script une adresse internet à laquelle les téléphones envoient les données.

1. En haut à droite, cliquez sur le bouton bleu *Déployer* et choisissez *Nouveau déploiement*.
2. À côté de *Sélectionner le type*, il y a une roue dentée. Cliquez dessus et choisissez *Application Web*.
3. Remplissez ainsi :
   - *Description :* ce que vous voulez, par exemple « Búho ».
   - *Exécuter en tant que :* **Moi** (votre adresse e-mail s'affiche).
   - *Qui peut accéder :* **Tout le monde**. Cela permet aux téléphones de se connecter sans se connecter à Google. C'est la clé de l'étape précédente qui empêche les autres d'entrer.
4. Cliquez sur *Déployer*. Google demande des autorisations :
   1. Cliquez sur *Autoriser l'accès* et choisissez votre compte.
   2. Un écran indique que Google n'a pas validé l'application. C'est normal : vous avez collé le script vous-même et il n'est pas passé par la vérification de Google. Cliquez sur *Paramètres avancés* puis sur *Accéder à Búho (non sécurisé)*.
   3. Vérifiez les autorisations (voir et modifier vos feuilles de calcul et vos agendas) et cliquez sur *Autoriser*. Le script fonctionne avec votre compte et ne fait que ce que Búho demande : enregistrer les entrées dans cette feuille et, si vous l'activez, lire et créer des événements d'agenda.
5. L'*URL de l'application Web* apparaît : une longue adresse qui commence par `https://script.google.com/macros/s/` et se termine par `/exec`. Cliquez sur *Copier* et gardez-la. Puis cliquez sur *OK*.

Pour mettre l'adresse et la clé sur le téléphone, le plus simple est de vous les envoyer par e-mail ou dans une conversation avec vous-même.

### 2.5. Connectez le premier téléphone
1. Dans Búho, touchez la roue dentée et ouvrez *Configuration*.
2. Dans *Synchronisation avec Google Sheets*, collez l'adresse dans le premier champ et tapez la clé dans *Clé d'accès*.
3. Touchez *Enregistrer et tester la connexion*. Si tout va bien, « Connexion réussie » s'affiche et, à côté du titre, « Synchronisé ».

Revenez à la feuille Google sur l'ordinateur : un nouvel onglet contient ce que vous aviez déjà noté.

### 2.6. Connectez les autres téléphones
Sur le téléphone qui fonctionne, allez dans *Réglages → Configuration* et touchez *Partager la configuration avec un autre téléphone*. Envoyez le lien à l'autre personne par WhatsApp, Telegram ou e-mail. Le lien contient l'adresse et la clé : ne le partagez qu'avec ceux qui vont noter.

- **Si l'autre téléphone est un Android :** installer Búho (étape 1) puis ouvrir le lien. L'application se connecte toute seule.
- **Si l'autre téléphone est un iPhone :** installer Búho (étape 1), copier le lien et le coller dans *Réglages → Configuration*, dans le champ *…ou collez ici un lien de configuration*. Puis *Enregistrer et tester la connexion*. Sur iPhone, il faut passer par là car l'application installée ne partage pas ses données avec Safari.

Chacun indique son prénom dans *Qui utilise ce téléphone ?*, pour qu'on voie dans le journal qui a noté quoi.

### À quoi ressemble la feuille
Chaque entrée est une ligne de l'onglet `eventos` : date, heure de début et de fin, durée (sommeil et tétées au sein), type, détail, note et qui l'a notée. Vous pouvez filtrer, trier ou faire des graphiques comme avec n'importe quelle feuille. Les colonnes grises à la fin servent à l'application : ne les modifiez pas à la main. Si vous supprimez quelque chose dans l'application, la ligne ne disparaît pas ; elle est marquée dans la colonne *borrado* (supprimé).

## Étape 3 (facultative). Rendez-vous de l'agenda et rappels de médicaments
Une fois la synchronisation en place, Búho peut afficher les prochains rendez-vous (pédiatre, sage-femme, vaccins) d'un Google Agenda, en ajouter de nouveaux et créer des rappels avec alarme pour la prochaine prise d'un médicament.

1. **Choisissez l'agenda.** Ce peut être votre agenda principal ou un agenda partagé réservé au bébé, le plus pratique quand on est deux. Pour en créer un : dans [Google Agenda](https://calendar.google.com), colonne de gauche, à côté de *Autres agendas*, cliquez sur **+** → *Créer un agenda*. Partagez-le avec l'autre personne si vous voulez le voir tous les deux.
2. **Copiez son ID** (inutile pour l'agenda principal). Dans Google Agenda, survolez l'agenda, cliquez sur les trois points → *Paramètres et partage* et descendez jusqu'à *Intégrer l'agenda*. L'*ID de l'agenda* est un long texte qui se termine par `@group.calendar.google.com`.
3. **Activez-le dans Búho :** *Réglages → Calendrier*.
   - Cochez *Afficher les prochains rendez-vous de Google Agenda*.
   - Dans *Agenda*, laissez `primary` pour l'agenda principal, ou collez l'ID.
   - *Afficher seulement les événements contenant* évite de voir tout votre agenda personnel. Par exemple : `pédiatre, sage-femme, vaccin, visite`. Vide = tous les événements.
   - Touchez *Enregistrer*. La carte *Prochains rendez-vous* apparaît sur l'écran principal. En la touchant, vous voyez la liste complète ou ajoutez un rendez-vous.
4. **Rappels de médicaments :** dans *Réglages → Médicaments*, ajoutez le médicament (nom, dose, toutes les combien d'heures et, si vous voulez, pendant combien de jours), activez *Afficher les médicaments sur l'écran principal* et cochez *Créer un rappel Google Agenda pour la prochaine prise*. Chaque fois que vous touchez *Donné*, un événement « 💊 nom du médicament » avec alarme est créé à l'heure de la prise suivante. Pour qu'il sonne, les notifications de cet agenda doivent être activées dans l'application Google Agenda du téléphone.

Le script lit l'agenda avec le compte Google propriétaire de la feuille. Si vous utilisez l'agenda de quelqu'un d'autre, il doit être partagé avec ce compte. Si vous avez configuré la synchronisation avant la version 0.3.0, mettez d'abord le script à jour (voir plus bas), puis dans l'éditeur choisissez la fonction `autorizar` dans la liste du haut, cliquez sur *Exécuter* et acceptez les autorisations d'agenda. Publiez enfin une nouvelle version.

## Si quelque chose ne marche pas
- **« La clé ne correspond pas à celle de la feuille. »** La clé du téléphone n'est pas exactement celle de `Config.gs`. Majuscules et minuscules comptent, et un espace en trop aussi.
- **« Connexion impossible. »** Pas de réseau, ou adresse mal copiée. Elle doit se terminer par `/exec`.
- **« Mettez à jour le script Google pour utiliser l'agenda. »** L'application demande l'agenda mais le script publié est une ancienne version. Voir *Mettre à jour le script Google* plus bas.
- **« Falta autorizar el calendario »** (message du script, en espagnol : agenda non autorisé). Dans l'éditeur, choisissez `autorizar` dans la liste des fonctions, cliquez sur *Exécuter* et acceptez. Publiez ensuite une nouvelle version.
- **« No encuentro el calendario »** (également du script : agenda introuvable). L'ID est mal copié, ou l'agenda n'est pas partagé avec le compte propriétaire de la feuille.
- **L'application ne se met pas à jour.** Ouvrez-la avec une connexion et attendez quelques secondes : elle se recharge seule. Sinon, fermez-la complètement (retirez-la des applications récentes) et rouvrez-la. Vous pouvez aussi toucher *Rechercher des mises à jour* tout en bas des Réglages, à côté du numéro de version.
- **Sur iPhone, le lien de configuration s'ouvre dans Safari au lieu de l'application.** C'est normal. Copiez le lien et collez-le dans *Réglages → Configuration* de l'application installée.

## Mettre à jour le script Google
L'application se met à jour toute seule, le script de la feuille non. Ce n'est nécessaire que si une nouvelle version l'indique dans la [liste des changements](../../commits/main) ou si l'application vous le signale.

1. Dans la feuille : *Extensions → Apps Script*.
2. Ouvrez `Code.gs`, effacez tout son contenu et collez le nouveau [`Code.gs`](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Code.gs). Enregistrez. Ne touchez pas à `Config.gs` : votre clé y est.
3. *Déployer → Gérer les déploiements*. Cliquez sur le crayon, choisissez *Nouvelle version* dans *Version* et cliquez sur *Déployer*.

L'adresse `/exec` reste la même, rien ne change donc sur les téléphones. Si la nouvelle version ajoute des colonnes, elles apparaissent seules à la synchronisation suivante.

## Questions fréquentes
**Et sans réseau ?** Vous notez normalement. En haut, l'application indique combien d'entrées attendent d'être envoyées, et elles partent seules au retour du réseau.

**Et si deux personnes notent en même temps hors ligne ?** Au retour du réseau, les entrées des deux sont fusionnées. Si les deux modifient la même entrée, la dernière modification l'emporte.

**Est-ce sûr ?** La feuille est privée et se trouve dans votre compte Google. Le script ne répond qu'avec la bonne clé. Quiconque a le lien de configuration (ou l'adresse et la clé) peut lire et écrire dans le journal et voir les événements d'agenda qui passent le filtre : ne le partagez qu'avec ceux qui doivent noter.

**Où sont les données ?** Sur le téléphone et, si vous activez la synchronisation, dans votre feuille Google. Si vous utilisez Búho sans synchronisation et effacez les données du navigateur ou changez de téléphone, elles sont perdues. Dans ce cas, exportez le CSV de temps en temps dans *Réglages → Exporter en CSV*.

**Est-ce payant ?** Non. GitHub Pages, Google Sheets, Apps Script et Google Agenda sont gratuits pour cet usage.

## Utiliser votre propre copie
Si vous préférez avoir votre propre version de l'application, faites un *fork* de ce dépôt et activez *Settings → Pages → Deploy from a branch → main / (root)*. Ce sont des fichiers statiques, sans compilation ni dépendances : `index.html`, `i18n.js`, `sw.js`, `manifest.webmanifest` et `icons/`. Pour ajouter une langue à l'application, copiez un bloc de `i18n.js`.

## À propos du projet
Je vais bientôt être papa et je cherchais une application pour noter tétées, sommeil et couches qui corresponde à nos besoins : qu'elle marche sans réseau, qu'on puisse l'utiliser tous les deux depuis des téléphones différents et que les données restent à nous. Aucune de celles que j'ai essayées ne convenait, alors j'ai décidé d'en faire une sur mesure.

Je ne suis pas développeur. J'ai fait Búho avec l'aide d'une IA ([Claude](https://claude.ai)), alors je m'excuse d'avance auprès des développeurs professionnels de marcher sur leurs plates-bandes. Si vous voyez quelque chose de mal fait ou qui pourrait être mieux, ouvrez une [issue](../../issues). Je vous en serai reconnaissant, et j'apprendrai sûrement quelque chose.

---

<p align="center"><sub>Licence MIT · voir <a href="LICENSE">LICENSE</a></sub></p>
