export function quickSortAnimations(s,e,arr) {
    const animations = [];
    quickSort(s,e,arr,animations);
    return animations;
}

function quickSort(s,e,arr,animations) {
    if (s>=e) {
        return;
    }
    let p = partitions(s,e,arr,animations);
    quickSort(s,p-1,arr,animations);
    quickSort(p+1,e,arr,animations);
}

function partitions(s,e,arr,animations) {
    let pivot = arr[s];
    let cnt = 0;
    for (let i=s+1;i<=e;i++) {
        if (arr[i]<=pivot) {
            cnt++;
        }
    }
    let pivotIndex = s+cnt;
    animations.push([s,pivotIndex,true]);
    animations.push([s,pivotIndex,true]);
    animations.push([s,pivotIndex,true]);
    [arr[pivotIndex],arr[s]] = [arr[s],arr[pivotIndex]];

    let i = s,j = e;
    while (i<pivotIndex && pivotIndex<j) {
        while (arr[i]<=pivot) {
            i++;
        }
        while (arr[j]>pivot) {
            j--;
        } 

        animations.push([i,j,false]);

        if (i<pivotIndex && j>pivotIndex) {

            animations.push([i,j,false]);

            [arr[i],arr[j]] = [arr[j],arr[i]];
            animations.push([i,j,false]);
            i++;
            j--;
        }
        else {
            animations.push([-1,-1,false]);
            animations.push([i,j,false]);
        }
    }
    return pivotIndex;
}