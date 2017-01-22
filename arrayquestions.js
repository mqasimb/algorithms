function greaterThanFive(array1) {
    var greaterthanarray=[];
    for(var i=0; i<array1.length; i++) {
        if(array1[i] >= 5) {
            greaterthanarray.push(array1[i]);
        }
    }
    return greaterthanarray;
}

console.log(greaterThanFive([1,2,3,4,6,7,8,4,6,8,4,7,2,5,8,8,3,5,2,1,2,6,7]));


function mergeAndSort(array1, array2) {
    var runLoop = true;
    var newArray = [];
    var i=0, j = 0;
    while(runLoop) {
        if(array1[i] < array2[j]) {
            newArray.push(array1[i]);
            i++;
        }
        else if(array1[i] > array2[j]) {
            newArray.push(array2[j]);
            j++;
        }
        else if(array1[i] === array2[j]) {
            newArray.push(array1[i]);
            i++;
        }
        if(array1[i] === undefined) {
            newArray = newArray.concat(array2.splice(j));
            runLoop = false;
        }
        if(array2[j] === undefined) {
            newArray = newArray.concat(array1.splice(i));
            runLoop = false;
        }
    }
    return(newArray);
}

var sample1 = [1, 3, 6, 8, 11];
var sample2 = [2, 3, 5, 8, 9, 10];

console.log(mergeAndSort(sample1,sample2));

function productArray(array1) {
    var productFront = 1, productBack = 1;
    var arrayLength = array1.length;
    var i=0, j=arrayLength-1;
    var arrayProduct = [];
    while(i<arrayLength) {
        if(i===0) {
        arrayProduct[i] = 1;
        arrayProduct[j] = 1;
        i++;
        j--;   
        }
        else {
            productFront *= array1[i-1];
            productBack *= array1[j+1];
            if(typeof(arrayProduct[i]) === 'number') {
                arrayProduct[i] *= productFront;
                arrayProduct[j] *= productBack;
            }
            else {
            arrayProduct[i] = productFront;
            arrayProduct[j] = productBack;
            }
            i++;
            j--;
        }
    }
    return arrayProduct;
}
console.log(productArray([1, 3, 9, 4]));