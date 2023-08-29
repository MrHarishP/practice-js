function swap(x, y) {
  let temp = x;
  x = y;
  y = x;
  return { x, y };
}
function sort_array(arr, length) {
  /*Function to sort the array in descending order
After sorting return the sorted array */
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
        if(arr[minIndex]<arr[j]){
            minIndex=j
        } 
    }
    [arr[minIndex],arr[i]]=[arr[i],arr[minIndex]]//swap(arr[i],arr[minIndex])
  }
  return arr;
}
let arr=[14,25,34,8, 9, 3, 1, 0]
const sorted = sort_array(arr,arr.length);
console.log("-->sortedArray", sorted);
