/** Basic Difficulty */

/* I realized that no matters how many eggs you have. Assuming the premise: "The eggs are all incredibly 
similar – the effect of a fall from a particular floor is the same for all eggs." And assuming the premise: 
"If an egg does not survive a fall from floor n, then it would also not survive a fall from the floors above 
it: floor n+1, floor n+2, etc." too. The critical floor is the floor below where I droop the egg and it breaks. 
Doesn't matter how many eggs I have because if one breaks I don't need the rest because the rest breaks too.*/

function minEggDropper100() {
    let minDrops100 = 0;
    let floor = 1;

    while (!eggBroken(floor)) {
        minDrops100++;
        floor++;
    }
    return minDrops100;
}

/** The probability that an egg survive a fall of a first floor (3 metres average) 
 * is one in a one million at less. If it has the luck to survive, the probability 
 * to survive a floor of double height is one in a two million or maybe a little more. Then...*/
function eggBroken(floor) {
    let value = Math.floor(Math.random() * (1000000 * floor) + 1);
    return (value != 100);
}

function prueba() {
    console.log(minEggDropper100());
}

prueba();