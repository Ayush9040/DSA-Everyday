// counting unique numbers

// [1,1,2,2,3,4,4,5,6,7,8,8]
// output -> 8


// Approach

// Two approaches

// first approach does include nested loop logic in which we will make a seprate array and store distinct element and at last index + 1 will give the answer

// Second approach uses single loop in which we will take two pointer for 0 and 1 index and if the value at both the pointer we will change the value of first pointer with second pointer.

function countUnique(array)
{
    if(array.length>0)
    {
            let i=0;
        for(let j=1; j<array.length; j++)
        {
            if(array[i] !== array[j]){
                i++;
                array[i] = array[j];
            }
        }

        return (i+1);
    }
    else
    {
        return 0;
    }
}

const res = countUnique([1,1,2,2,3,4,4,5,6,7,8,8]);

console.log(res);