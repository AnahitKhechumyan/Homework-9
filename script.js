
function bubbleSortFun(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = 
                            [arr[j + 1], arr[j]];
            }
        }
    }   
    return arr;
};
function selectionSortFun(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = 
                    [arr[minIndex], arr[i]];
        }
    }
    return arr;
};
function insertionSortFun(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
};
function mergeSortFun(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSortFun(arr.slice(0, mid));
    const right = mergeSortFun(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length &&
            rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex))
                 .concat(right.slice(rightIndex));
};


const clearInputText = function(){
    document.getElementById("text-input").value = "";
    document.getElementById("result-display").innerText = "";
};
         
const  calculateWithCacheFunction = () => {
    const cache = new Map();
    return (arr) => {
        if (cache.has(arr)) {
            return cache.get(arr);
        }
      const result = bubbleSortFun(arr);
      cache.set(arr, result);
       return result;   
    }    
};
      
const calculate = calculateWithCacheFunction(); 
     
const sortNumbersForInput = function(){
  
    const numbers = (document.getElementById("text-input")).value.split(",").map(Number);
    const resultDisplay = document.getElementById("result-display");
 
    const result = calculate(numbers);
       
 if (result.length === 0 || result.every(num => num === 0 || isNaN(num))){
        resultDisplay.innerHTML = `<p style = "color: #F44336">No numbers to sort</p>`;
        return;
    } 

        resultDisplay.innerHTML = `<strong> Sorted numbers: ${result} </strong>`;
        resultDisplay.style.fontSize = "13px";
       
};

 
