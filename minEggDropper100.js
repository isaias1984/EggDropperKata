/** Basic Difficulty */

/* I was checking the next levels (intermediate and hard) and I realized I made a mistake in my last assumption. I assumed that didn't 
matter how many eggs I have because, if an egg doesn't survive a fall all ends. Explanation: I start at the ground floor, I go up floor 
to floor checking two possibilities, I drop the egg and it survives or I drop the egg and doesn't survive. If the egg survives I continue 
to the next floor and the value of minDrop increase in one more. If the egg doesn't survive I have finished and I have to return the 
minDrop value. 

This is because there are two premises in the problem gives me the keys: 
1- If an egg does not survive a fall from floor n, then it would also not survive a fall from the floors above it: floor n+1, floor n+2, etc.. 

2- The eggs are all incredibly similar – the effect of a fall from a particular floor is the same for all eggs.

But, why the next levels are more difficult with two eggs (the intermediate) and x eggs (the hard)? I realized I made I great mistake 
assuming all starts at the ground floor because, for my logic, if you only have one egg and doesn't survive a fall, if you start at the 
highest floor you can't assume you're on the critical floor. But, and this is a great but, the problem don't ask me to find the critical 
floor, it asks me to find the minDrops (egg drops you need to find criticalFloor). I can return the minDrops in this case and is logic too, 
or so I think.

OK, I assume all starts at the highest floor and my logic is as follows: 

I start at the highest floor, I go down floor to floor checking two possibilities, I drop the egg and it survives or I drop the egg and 
doesn't survive. 

I have the values: eggs (starts with 100), floors (starts with 100) and minDrop (starts with 0). 

I start the loop increasing the value of minDrop. 

If the egg survives I have finished, I'm at the criticalFloor and I have to return the minDrop value. I break the loop and return the 
minDrop value. I'm at the critical floor because one of the premises states: If an egg survives a fall from floor n, then it would also 
survive a fall from the floors below it: floor n-1, floor n-2, etc.

If the egg doesn't survive: 

I decrease the eggs value and go down to the next floor. And before restart the loop I check if I have eggs (don't need to check if I'm 
at the ground floor). If I don't have eggs I finished and return the minDrop value. If not I'm at the loop again and check if the egg 
survives or not. */


function minEggDropper100() {
    /* In this case the eggs value is the floor where I'm.*/
    let eggs = 100;
    let minDrops100 = 0;

    while (eggs > 0) {
        minDrops100++;
        if (eggBroken(eggs)) {
            eggs--;
        } else {
            break;
        }
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