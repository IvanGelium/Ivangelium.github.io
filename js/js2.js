let x;
let y;

function fun () {
    for (let i = 10000000000; i >= 0; i--) {
        x = Math.random();
        y = i;
        if (0.4242424244 >= x && x >= 0.4242424240){
            console.log (x);
            console.log (y);
        }
    } 

    return ("no luck");
    
}

//0.4242424242424242