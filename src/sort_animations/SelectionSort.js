export function selectionSortAnimations(arr) {
    let animations = [];
    selectionSort(arr,animations);
    return animations;
}

function selectionSort(arr,animations) {
    for (let i=0;i<arr.length;i++) {
        let minIndex = i;
        for (let j=i+1;j<arr.length;j++) {
            animations.push([minIndex,j,'red',false]);
            if(arr[j]<arr[minIndex]) {
                animations.push([minIndex,j,'blue',false]);
                animations.push([minIndex,j,'#8C3061',false]);
                minIndex = j;
            }
            else {
            animations.push([minIndex,j,'#8C3061',false]);
            }
        }
        animations.push([minIndex,arr[i],'#8C3061',true]);
        animations.push([i,arr[minIndex],'green',true]);
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}