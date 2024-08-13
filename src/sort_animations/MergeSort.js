import React from 'react'
export function mergeSortAnimations(s,e,arr) {
  const animations = [];
  MergeSort(s,e,arr,animations)
  return animations
}
function MergeSort(s,e,arr,animations) {
    if(s>=e) {
      return;
    }
    let mid = Math.floor((s+e)/2);
    MergeSort(s,mid,arr,animations);
    MergeSort(mid+1,e,arr,animations);
    merge(arr,s,e,animations);
}

function merge(arr,s,e,animations) {
  let mid = Math.floor((s+e)/2);
  let len1 = mid-s+1;
  let len2 = e-mid;
  let arr1 = new Array(len1);
  let arr2 = new Array(len2);
  for (let i=0;i<len1;i++) {
    arr1[i] = arr[s+i];
  } 
  for (let i=0;i<len2;i++) {
    arr2[i] = arr[i+mid+1];
  } 
  let i1=0,i2=0;
  let arrIndex=s;
  while (len1>i1&&len2>i2) {
    animations.push([i1,i2+mid+1]);
    animations.push([i1,i2+mid+1]);
    if (arr1[i1]>arr2[i2]) {
      animations.push([arrIndex,arr2[i2]]);
      arr[arrIndex++]=arr2[i2++];
    }
    else {
      animations.push([arrIndex,arr1[i1]]);
      arr[arrIndex++]=arr1[i1++];
    }
  }
  while (len1>i1) {
    animations.push([i1,i1]);
    animations.push([i1,i1]);
    animations.push([arrIndex,arr1[i1]]);
    arr[arrIndex++] = arr1[i1++];
  }
  while (len2>i2) {
    animations.push([i2+mid+1,i2+mid+1]);
    animations.push([i2+mid+1,i2+mid+1]);
    animations.push([arrIndex,arr2[i2]]);
    arr[arrIndex++] = arr2[i2++];
  }
  return;
}
