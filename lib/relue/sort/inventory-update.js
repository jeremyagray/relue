function inventorySort(a, b)
{
    if (a[1] > b[1])
    {
        return 1;
    }
    else if (a[1] == b[1])
    {
        return 0;
    }
    else if (a[1] < b[1])
    {
        return -1;
    }
}

function updateInventory(arr1, arr2)
{
    let curInv = [...arr1];
    let newInv = [...arr2];
 
    for (let i = 0; i < newInv.length; i++)
    {
        let index = -1;
        for (let j = 0; j < curInv.length; j++)
        {
            if (curInv[j][1] == newInv[i][1])
            {
                curInv[j][0] += newInv[i][0];
                break;
            }
            else
            {
                index = j;
            }
        }
        if (index == curInv.length - 1)
        {
            curInv.push(newInv[i]);
        }
    }

    return curInv.sort(inventorySort);
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
