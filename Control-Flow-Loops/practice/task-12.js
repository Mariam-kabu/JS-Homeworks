let arr = [-3,-2,-1,1,2,3];
let sum = 0;
for (let i=0; i<arr.length; i++){
    if(arr[i]>0) sum += arr[i];
}
console.log(sum);