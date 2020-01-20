/** Basic Difficulty */

/* I was rethinking the problem and I detected a problem, if I assume all start at 100 floor and 
I only have one egg and I drop it, if it breaks I can't assume that the critical floor is where I am, 
or is some of the floors below me. However, if I'm on the first floor and I drop an egg, if it breaks 
I can assume that the critical floor is the zero floor. Is more logic for me and is a possibly start to 
think in more eggs or infinite eggs. And the rules about what happens when an egg survives or not 
(if it survives at n floor can survive at n-1, n-2 ... And if not can't survive at floors n+1, n+2) 
are considered too.. */

function minEggDropper() {
    let minDrops = 0;

    while (!eggBroken()) {
        minDrops++;
    }
    return minDrops;
}

/** Random function to simulate the consequence of egg drop */
function eggBroken() {
    let value = Math.floor(Math.random() * 100 + 1);
    return (value % 2 == 0);
}

function prueba() {
    console.log(minEggDropper());
}

prueba();