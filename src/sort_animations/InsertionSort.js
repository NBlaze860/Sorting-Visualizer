export function insertionSortAnimations(arr) {
    let animations = [];
    insertionSort(arr,animations);
    return animations;
}

function insertionSort(arr,animations) {
    for (let i=0;i<arr.length;i++) {
        let temp = arr[i];
        let j = i-1;
        for (;j>=0;j--) {
            if (arr[j]>temp) {
                animations.push([j,i,'red',false]);
                animations.push([j+1,arr[j],'#8C3061',true]);
                animations.push([j,i,'#8C3061',false]);
                arr[j+1] = arr[j];      
            }
            else {
                animations.push([j,i,'#8C3061',false]);
                break;
            }
        }
        animations.push([j+1,temp,'#8C3061',true]);
        arr[j+1] = temp;
    }
}