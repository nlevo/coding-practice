function findRoutes(routes) {

    //I wrote this function somewhat based on idea of insertion sort. 
    //I tried to use loops as less as possible, but I think it made my code look really complicated. Sorry.

    //return empty string if the routes array is empty
    if (routes.length === 0) {
        return "";
    }
    //variable to hold our result - complete route
    let completeRoute = [];

    //checking which place is the initial route
    routes.forEach(function (elem, index) {
        if (index === 0) {
            completeRoute.push(elem[0]);
            completeRoute.push(elem[1]);
        } else {
            //in case it happend that 2 correct routes already next to each other
            if (elem[1] === completeRoute[completeRoute.length - 2] && elem[0] === completeRoute[completeRoute.length - 3]) {
                //do nothing
            }
            //if the next to last route in completeRoute array is the same as last route 
            //in the current element then push it to the correct place
            else if (elem[1] === completeRoute[completeRoute.length - 2]) {
                if (completeRoute.length - 2 !== elem[0]) {
                    if (completeRoute.indexOf(elem[1]) !== -1) {
                        completeRoute.splice(completeRoute.length - 2, 0, completeRoute[completeRoute.indexOf(elem[0]) - 1]);
                        completeRoute.splice(completeRoute.length - 2, 0, elem[0]);
                        completeRoute.splice(completeRoute.indexOf(elem[1]) - 1, 2);
                    }
                    else {
                        completeRoute.push(elem[0]);
                    }
                }
            }
            //if the last route in completeRoute array is the same as 1st route 
            //in the current element then push it to the correct place
            else if (elem[0] === completeRoute[completeRoute.length - 1]) {
                if (completeRoute.indexOf(elem[1]) === 0) {
                    completeRoute.pop();
                    completeRoute.unshift(elem[0]);
                    completeRoute.unshift(completeRoute[completeRoute.length - 1]);
                    completeRoute.pop();
                }
                else if (completeRoute.length - 1 !== elem[1]) {
                    if (completeRoute.indexOf(elem[1]) !== -1) {
                        completeRoute.push(elem[1]);
                        completeRoute.push(completeRoute[(completeRoute.indexOf(elem[1]) + 1)]);
                        completeRoute.splice(completeRoute.indexOf(elem[1]), 2);
                    }
                    else {
                        completeRoute.push(elem[1]);
                    }
                }
            }
            // if the last 2 routes aren't equal to routes from the current element, 
            //then add them to the beggining of completeRoute array
            else {
                //checks if some of the routes already exist in completeRoute and place them in correct position
                if (completeRoute.indexOf(elem[0]) !== -1) {
                    if (completeRoute.indexOf(elem[1]) !== -1) {
                        completeRoute.splice(completeRoute.indexOf(elem[0]) + 1, 0, completeRoute[completeRoute.indexOf(elem[1]) + 1]);
                        completeRoute.splice(completeRoute.indexOf(elem[1]), 2);
                        completeRoute.splice(completeRoute.indexOf(elem[0]) + 1, 0, elem[1]);
                    }
                    else {
                        completeRoute.splice(completeRoute.indexOf(elem[0]) + 1, 0, elem[1]);
                    }

                } else if (completeRoute.indexOf(elem[1]) !== -1) {
                    completeRoute.splice(completeRoute.indexOf(elem[1]), 0, elem[0]);
                } else {
                    completeRoute.unshift(elem[0], elem[1]);
                }
            }
        }
    })
    //returning our array of correct routes as string separated by , and a space
    return completeRoute.join(", ");
}

//console.log(findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]));


console.log(findRoutes2([["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]));

//console.log(findRoutes([["MNT", "PAR"], ["PRO", "TAC"], ["BOR", "TAG"], ["TAC", "BOR"], ["PAR", "PRO"], ["TAG", "MAC"]]));

function findRoutes2(routes) {
    let completeRoute = [];
    let arrayTemp = [];
    completeRoute.push(routes[0][0], routes[0][1]);

    for (let i = 1; i < routes.length; i++) {
        for (let j = i; j < routes.length; j++) {
            console.log(completeRoute);
            if (completeRoute.indexOf(routes[j][0]) !== -1) {
                completeRoute.splice(completeRoute.indexOf(routes[j][0]) + 1, 0, routes[j][1]);
            } else if (completeRoute.indexOf(routes[j][1]) !== -1) {
                completeRoute.splice(completeRoute.indexOf(routes[j][1]), 0, routes[j][0]);
            }
        }
    }
    return completeRoute.join(', ');
}





// function findRoutes2(routes) {


//     if (routes.length === 0) {
//         return "";
//     }

//     let completeRoute = [];
//     let array1 = [];
//     let arrayCounter = [];



//     routes.forEach(function (elem, index) {
//         if (array1.length === 0) {
//             array1.push(routes[0][0], routes[0][1]);
//         }
//         else if (array1[array1.length - 1] === elem[0]) {
//             array1.push(elem[1])
//         }
//         else {
//             arrayCounter.push(index);
//         }
//     })
//     console.log('Array Counter: ', arrayCounter);
//     completeRoute = completeRoute.concat(array1);
//     console.log('Complete Route ', completeRoute);
//     array1 = [];
//     var counterLength = 0;
//     var temp = 5;

//     while (completeRoute.length <= routes.length/2 + 1) {

//         console.log('Array1: ', arrayCounter);

//         counterLength = arrayCounter.length;
//         for (let i = 0; i < counterLength; i++) {

//             console.log('inside the loop');
//             if (array1.length === 0) {
//                 array1.push(routes[arrayCounter[i]][0], routes[arrayCounter[i]][1]);
//             }
//             else if (array1[array1.length] === routes[arrayCounter[i]][0]) {
//                 array1.push(elem[1]);
//             }
//             else {
//                 arrayCounter.push(arrayCounter[i]);
//                 console.log('Counter: ', arrayCounter);
//             }
//         }
//         arrayCounter.splice(counterLength - 1, counterLength);
//         console.log('after splice', arrayCounter);
//         if(completeRoute.indexOf(array1[]))
//         completeRoute = array1.concat(completeRoute);
//         array1 = [];

//         temp--;
//     }

//     return completeRoute.join(", ");
// }