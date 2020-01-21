/** Intermediate Difficulty */

/* 
I assume again all starts at the highest floor and my logic is as follows: 

If I only have two eggs the result of minDrops2 is one or two. I only have to check once if an egg and survives or not. 
If the egg survives I return minDrop2=1 and if not minDrop2=2. Why? Because there are no more chances. If you have two eggs
 and if one does not survive at the first chance doesn't matter if the second survives or not, the minimum number of drops 
 needed to find the critical floor is two.
*/


function minEggDropper2() {
    // I only use the floor value to define the probability that an egg will survive
    if (eggBroken(100)) {
        return 2;
    } else {
        return 1;
    }

}

/** The probability that an egg survive a fall of a first floor (3 metres average) 
 * is one in a one million at less. If it has the luck to survive, the probability 
 * to survive a floor of double height is one in a two million or maybe a little more. Then...*/
function eggBroken(floor) {
    let value = Math.floor(Math.random() * 2 + 1);
    return (value != 2);
}

function prueba() {
    console.log(minEggDropper2());
}

prueba();