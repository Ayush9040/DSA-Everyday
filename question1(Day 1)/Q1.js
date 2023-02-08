// Return first pair of array which sum is equal to zero
// [-5, -4, -3, -1, 0, 2, 4, 6] -> input
// [-4,4] -> output

// Brute force

function bSumEqualZero(array)
{
    for(let i=0; i<array.length; i++)
    {
        for(let j=1; j<array.length; j++)
        {
            if(array[i]+array[j] === 0)
            {
                return [array[i],array[j]];
            }
        }
    }
}

let res = bSumEqualZero([-5, -4, -3, -1, 0, 2, 4, 6]);

console.log(res);

// Time complexity of above approach is O(n^2)