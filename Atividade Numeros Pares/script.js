var x = [1, 3, 4, 6, 80, 33, 23, 90];

function trocaPar(x) {
    if(!x) return -1;
    if(!x.length) return -1;

    for (let i = 0; i < x.length; i++) {
        if (x[i] === 0) {
            console.log("O número já é zero!");
        }
        else if (x[i] % 2 === 0) {
            console.log(`Substituindo ${x[i]} por 0`);
            x[i] = 0;
        }
    }

    return x;
}

console.log(trocaPar(false));