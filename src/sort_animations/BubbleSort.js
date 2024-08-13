export function bubbleSortAnimations (arr) {
    const animations = [];
    bubbleSort(arr,animations);
    return animations;
}

function bubbleSort(arr,animations) {
    for (let i=1;i<arr.length;i++) {
        let swapped = false;
        for (let j=0;j<arr.length-i;j++) {
            animations.push([j,j+1,'red',false]);
            if (arr[j]>arr[j+1]) {
                animations.push([j,arr[j+1],'red',true]);
                animations.push([j+1,arr[j],'red',true]);
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                swapped = true;
            }
            animations.push([j,j+1,'#8C3061',false]);
        }
        if (!swapped) {
            break;
        }
    }
}