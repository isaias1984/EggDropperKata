/** Basic Difficulty */

/* I realized that no matters how many eggs you have. Assuming the premise: "The eggs are all incredibly 
similar – the effect of a fall from a particular floor is the same for all eggs." And assuming the premise: 
"If an egg does not survive a fall from floor n, then it would also not survive a fall from the floors above 
it: floor n+1, floor n+2, etc." too. The critical floor is the floor below where I droop the egg and it breaks. 
Doesn't matter how many eggs I have because if one breaks I don't need the rest because the rest breaks too.*/

function minEggDropper100() {
    let minDrops100 = 0;

    while (!eggBroken()) {
        minDrops100++;
    }
    return minDrops100;
}

/** Random function to simulate the consequence of egg drop */
function eggBroken() {
    let value = Math.floor(Math.random() * 100 + 1);
    console.log("IN!!!!!");
    return (value % 2 == 0);
}

function prueba() {
    console.log(minEggDropper100());
}

prueba();