//Translations for english
cookiePoints = document.cookie;
//Erasing the part that we don't need from the cookie.
cookiePoints=  cookiePoints.replace("points=", "");
points= cookiePoints.split(';')[0];

let eng={
    restoreExclamation:"Restore!",
    divulgation1: "96% of small businesses consider that the crisis caused by the coronavirus pandemic will affect their activity in a negative or very negative way. The capacity restrictions and temporary closure of some of these businesses resulted in many of them finding themselves in a difficult economic situation. To help in these critical times, Restore is born." ,
    divulgation2: "Restore is a project that aims to promote shopping in local businesses. For this reason, we have created four games through which players can accumulate points in order to win promotions and discounts in different stores. Would you like to sign up? Scroll down to meet Teresa and discover her story!",

    storyTelling1: "There are only a few days left until Christmas and Teresa still has many errands to run before then. She just remembered that she still has not bought any presents for Marco, her most spoiled grandson. However, before she goes shopping she needs to get some money.",
    storyTelling2: "In addition, she wants to buy some Christmas CDs to set the mood for the family dinner. Speaking of food... she still needs to get some of the ingredients to prepare the meal! Sign up to help her through the different games, where you will earn points to access exclusive discounts and promotions so that, like Teresa you can promote local businesses", 
    
    login: "Log in",
    logout: "Log out",
    register: "Register",
    welcome: "Welcome! You have "+ points + " points",

    navRestore:"Restore",
    navGame:"Games",
    navPoints:"Points and Promotions",
    navAbout:"About Us",
    navAdmin:"Administration",

    aboutUs_Al: "Web app development student by day, avid Netflix consumer by night. In my spare time, I like to ski, play piano, and bother my cat.",
    aboutUs_Fr: "I am a web app development student from the US but newly a resident of Barcelona. I play the organ for the choir at my church and my downtime is spent noodling on the guitar, spending time with my girlfriend, and trying to learn new things.",
    aboutUs_An: "I am a criminologist and a web app development student, which means that people at work think I can fix printers. I like cats and board games.", 
    aboutUs_Mi: "After finishing my studies in tourism, I decided I wanted a change of scenery and so began my adventure as a web developer. Now my Mondays feel less like Mondays if I have a cup of tea, background music, and a JavaScript project in my hands."
}

