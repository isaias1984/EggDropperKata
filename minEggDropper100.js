/** Basic Difficulty */

/* I asume everything starts at the 100-floor and ends when a egg is not broken.
   I asume that because: If an egg survives a fall from floor n , then it 
   would also survive a fall from the floors below it: floor n-1 , floor n-2 , etc. */

function minEggDropper100() {
    let eggs = 100;
    let minDrops100 = 0;

    while (eggs >= 1) {
        minDrops100++;
        if (eggBroken()) {
            eggs--;
        } else {
            return minDrops100;
        }
    }
    return minDrops100;
}

/** Random function to simulate the consequence of egg drop */
function eggBroken() {
    let value = Math.floor(Math.random() * 100 + 1);
    return (value % 2 == 0);
}

function prueba() {
    console.log(minEggDropper100());
}

prueba();