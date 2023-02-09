// string Anagram

// 'hello' as string1 and 'llhoe' as string2 -> input

// true -> output

// Pseudocode
// 1. check the length of both the strings are equal or not
// 2. The occurence of each characters should be same in both the strings

function isAnagram(string1, string2)
{
    if(string1.length !== string2.length)
    {
        return false;
    }
    let counter = {};

    for(let letter of string1)
    {
        counter[letter] = (counter[letter] || 0)+1;
    }
    console.log(counter);

    for(let items of string2)
    {
        if(!counter[items])
        {
            return false;
        }

        counter[items] -=1;
    }

    return true;
    
}

const check = isAnagram('helho','lhhoe');

console.log(check);

