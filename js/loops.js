/**
 * Created by Krysp on 5/5/16.
 */

var array = [1,2,3,4,5,6,7,8,9,10];



var car = {
    engine: {
        belt: 'Serpentine belt',
        sparkplugs: ['werew33','123','sdfsdfg']
    },
    wheel: {
        horn: 'loud'
    }
};

/*
// For Loop
for (var i = 0; i <= 10; i++) {
   // console.log(i);
}
for (var i = 0; i < array.length; i++){
   // console.log(array[i]);
}



for (var j = array.length; j == 0; j--) {
   // console.log(j);
    //console.log(array[j]);
}
// For In

for (var part in car) {
    console.log(part);
    console.log(car[part])
}



// For Each Loop

array.forEach(function (value, index, object) {
    console.log();
    console.log();
});

// While Loop

*/

var done = false;

setTimeout(function () {
    while (!done) {
        console.log('Stop Me!')
    }
    done = true;
},2000);







//Do while loop

