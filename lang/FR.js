//Translations for french 
cookiePoints = document.cookie;
//Erasing the part that we don't need from the cookie.
cookiePoints=  cookiePoints.replace("points=", "");
points= cookiePoints.split(';')[0];

let fr={
    restoreExclamation:"Recomerçem!",
    divulgation1: "96% des petites entreprises considèrent que la crise provoquée par la pandémie mondiale de la Covid-19 affectera négativement ou très négativement leur activité. Les limitations d’accessibilité et la fermeture temporaire de certaines entreprises ont provoqué que beaucoup d’elles à se retrouvent dans une situation économique difficile. Pour les aider dans ces moments critiques, est né ‘Recomerçem’. " ,
    divulgation2: "‘Recomerçem’ est un projet visant à stimuler les achats dans les commerces locaux. On a créé quatre jeux avec lesquels vous pouvez cumuler des points et gager des promotions et des réductions dans divers magasins. Vous y inscrivez-vous ? Glissez vers le bas de page pour connaître Teresa et découvrir son histoire ! ",

    storyTelling1: "Avant que Noël arrive, Teresa a beaucoup de choses à faire avant que ça arrive ! Elle s’est rappelé qu’elle n’a pas achetée un cadeau pour Marco, son petit-fils plus exigent. Mais avant d’acheter elle devra avoir de l’argent. ",
    storyTelling2: "Elle veut aussi acheter quelques disques de chant de Noel pour décorer le repas familial. Avant le repas elle a besoin d’acheter quelques ingrédients qui lui manquent ! Inscris-toi pour l’aider par quelques jeux, aves lesquels tu peux gagner des points pour avoir réductions et promotions exclusives et, comme Teresa, promouvoir le commerce local. ",

    login: "Se connecter",
    logout: "Se déconnecter",
    register: "S'inscrire",
    welcome: "Bienvenue, vous avez "+ points + " points",

    navRestore:"Recomerçem",
    navGame:"Jeux",
    navPoints:"Points et Promotions",
    navAbout:"Qui sommes-nous?",
    navAdmin:"Administration",

    aboutUs_Al: "Étudiant en développement web pendant la journée, avide consommateur de Netflix pendant la nuit. J’aime le ski, jouer le piano et faire enrager ma chatte lorsque j’ai du temps libre. ",
    aboutUs_Fr: "Je suis étudiant en développement web originaire des États-Unis. J’habite à Barcelona. Je joue de l’orgue pour la chorale de mon église et pendant mon temps libre, je joue aussi de la guitare, passe du temps avec ma copine et j’essaye d’apprendre des nouvelles choses. ",
    aboutUs_An: "Je suis criminologue et étudiante en développement web, ce qui fait qu’au travail des gens pensent que je suis celle qui répare des imprimantes. J’aime les chats et les jeux de table. ", 
    aboutUs_Mi: "Après ma licence en tourisme, j’avais décidé de changer d’air et je m’étais embarquée dans l’aventure pour devenir développeuse web. Maintenant, mes lundis sont moins lundis si j’ai du thé, de la musique de fond et un projet de javascript entre mes mains. "
}