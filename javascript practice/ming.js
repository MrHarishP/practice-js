var missing_elements = function (arr) {
  let i;
  //  let n = arr.length
  let temp = [];
  for (i = 0; i <= arr.length; i++) {
    temp[i] = 0;
  }

  for (i = 0; i < arr.length; i++) {
    temp[arr[i] - 1] = 1;
  }

  let ans = 0;
  for (i = 0; i <= arr.length; i++) {
    if (temp[i] == 0) ans = i + 1;
  }
  console.log("missing_element", ans);
//   return ans;
};
var arr = [3, 4, 1];
let missing_element = missing_elements(arr);
console.log(missing_element);
