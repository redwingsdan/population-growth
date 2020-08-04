xn+1 = r * xn *(1 -xn)
r = 3.72


//var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
var rate = (Math.random() * (3.9 - 3.5) + 3.5).toFixed(2); // 0 - 1 goes to zero, 1 - 3 stable, 3 - x oscillates 
var population = [];
population.push(0.5); // 0 - 1
for (var i = 0; i < 100; i++) {
    population.push(rate * population[i] * (1 - population[i]))
}
console.log(population);

for (var i = 0; i < 100; i++) {
    console.log(population[i] * 10000);
}