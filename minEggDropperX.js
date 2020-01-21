/** Hard Difficulty */

/* I assume all starts at the "y" floor ("y" is the number of floor of the skyscraper) and my logic is as follows: 

I start at the "y" floor, I go down floor to floor checking two possibilities, I drop the egg and it survives or I drop the egg and 
doesn't survive. 

I have the values: eggs (starts with x value), floors (starts with y value) and minDropsX (starts with 0). 

I start the loop increasing the value of minDropsX. 

If the egg survives I have finished, I'm at the criticalFloor and I have to return the minDropsX value. I break the loop and return the 
minDropsX value. I'm at the critical floor because one of the premises states: If an egg survives a fall from floor n, then it would also 
survive a fall from the floors below it: floor n-1, floor n-2, etc.

If the egg doesn't survive: 

I decrease the eggs value and go down to the next floor (floor=floor-1). And before restart the loop I check if I have eggs and if I'm not 
at the ground floor (floor = 0). If one of both premises is false I finished and return the minDropsX value. If not I'm at the loop again 
and check if the egg survives or not. */


function minEggDropperX(eggs, floors) {
    let minDropsX = 0;

    while (eggs > 0 && floors > 0) {
        minDropsX++;
        if (eggBroken(floors)) {
            eggs--;
            floors--;
        } else {
            break;
        }
    }
    return minDropsX;
}

/** The probability that an egg survive a fall of a first floor (3 metres average) 
 * is one in a one million at less. If it has the luck to survive, the probability 
 * to survive a floor of double height is one in a two million or maybe a little more. Then...*/
function eggBroken(floor) {
    let value = Math.floor(Math.random() * (1000000 * floor) + 1);
    return (value != 100);
}

function prueba() {
    console.log(minEggDropperX(25, 30));
}

prueba();