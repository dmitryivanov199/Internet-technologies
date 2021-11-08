export function findMin(array){
    let min = array[0];

    for(var i = 1; i < array.length; i++){
        if(min > array[i]){
            min = array[i];
        }
    }

    return min;
}

export function findMax(array){
    let max = array[0];

    for(var i = 1; i < array.length; i++){
        if(max < array[i]){
            max = array[i];
        }
    }

    return max;
}

export function findAvg(array){
    let avg = 0;

    for(var i = 0; i < array.length; i++){
        avg += array[i];
    }

    return avg / array.length;
}

export function getArrayCopy(array){
    return array.concat([]);
}