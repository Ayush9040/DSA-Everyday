// Return first pair of array which sum is equal to zero
// [-5, -4, -3, -1, 0, 2, 4, 6] -> input
// [-4,4] -> output

// optimized approach

function oSumEqualZero(array)
{
    let left = 0;
    let right = array.length - 1;
    while(left<=right)
    {
        let sum = array[left] + array[right];
        if(sum === 0)
        {
            return [array[left], array[right]];
        }
        else if(sum>0)
        {
            right--;
        }
        else
        {
            left++;
        }
    }
}

let res = oSumEqualZero([-5, -4, -3, -1, 0, 2, 4, 6]);

console.log(res);

// Time complexity of above approach is O(n)