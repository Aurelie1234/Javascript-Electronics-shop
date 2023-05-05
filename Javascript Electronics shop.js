function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
let array = [];
let sum = 0;
    for(let i = 0; i < keyboards.length; i++) {
         
        for(let j = 0; j < drives.length; j++) {
            if(keyboards[i] + drives[j] <= b) {
                sum += keyboards[i] + drives[j];
                array.push(sum);
                sum = 0;
            }
        }
    }
    
    return !array.length ? -1 : Math.max(...array);
}
