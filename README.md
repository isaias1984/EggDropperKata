# EggDropperKata

# Description

Suppose that you had 100 eggs in a 100-floor skyscraper, and you wanted to conduct an experiment to find out the highest floor (criticalFloor) from which you could drop an egg without breaking it... but you’re also really hungry so you don’t want to waste any eggs.

# Levels

# Basic difficulty

Write a function, minEggDropper100, that will determine the minimum number of egg
drops (minDrops100) you’d need to find the criticalFloor.

● Function Name: minEggDropper100

● Output: minDrops100 – an integer representing the minimum number of drops needed to find the criticalFloor.

● An egg that survives a fall can be used again.

● A broken egg must be discarded.

● The eggs are all incredibly similar – the effect of a fall from a particular floor is the same for all eggs.

● If an egg survives a fall from floor n, then it would also survive a fall from the floors below it: floor n-1, floor n-2, etc.

● If an egg does not survive a fall from floor n, then it would also not survive a fall from the floors above it: floor n+1, floor n+2, etc.

● You should not presume that an egg would survive a fall from the first floor, nor should you presume that it would not survive a fall from the 100th floor!

● Much of the challenge in this problem is in formulating

Much of the challenge in this problem is in formulating your strategy for egg dropping – interviewers want to see how you think in breaking down and solving this problem. Perhaps consider first how you would solve this problem with only one egg. Then think how you’d solve this problem with infinite eggs without any code. After that, think how you can use coding to find criticalFloor more efficiently.

○ Remember: the challenge is not to find criticalFloor itself! Your function should return the minimum number of egg drops you need to find criticalFloor.

# Intermediate difficulty

You’re at another 100-floor skyscraper and want to perform another experiment but
this time you have only two eggs.

Write a function, minEggDropper2, that will determine the minimum number of egg
drops (minDrops2) you’d need to find the highest floor (criticalFloor2) from which you
could drop an egg without breaking it.

● Function Name​: minEggDropper2

● Output​: minDrops2 – an integer representing the minimum number of drops needed to find criticalFloor2

● Don’t forget to explain your work!

# Hard Difficulty

Write minEggDropperX that will test for x many eggs and y many floors. Please write this as efficiently as possible!

● Don’t forget to explain your work!

# MY SOLUTION OR TRY

First of all I'm a newbie and maybe all my logic is wrong, but I did my best and there is a saying in my language: "Quien hace lo que puede no está obligado a más" (translation: whoever does his best is not obligated to do more..). 

Good, in the master branch I explain my first assumption. I assumed all starts at the ground floor and continues going up to the next floor. I explain all at the code comments. 

In the new_assumption branch, I discard all I assumed in the master branch and I give a twist at all my arguments. I start at the highest floor and continues going down to the next floor. I explain it all too at the code comments.
