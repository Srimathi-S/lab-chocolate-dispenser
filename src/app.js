var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,color, count)
{
    if(count<=0)return "Number cannot be zero/negative";
    for(;count>0;count--)chocolates.unshift(color);
    return chocolates;
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,number)
{
    if(number>chocolates.length)return 'Insufficient chocolates in the dispenser';
    if(number<0)return 'Number cannot be zero/negative';
    var removed=[];
    for(;number>0;number--)removed.push(chocolates.shift());
    return removed;
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number)
{
    if(number>chocolates.length)return 'Insufficient chocolates in the dispenser';
    if(number<0)return 'Number cannot be zero/negative';
    var dispensed=[];
    for(;number>0;number--)dispensed.push(chocolates.pop());
    return dispensed;
}
//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number, color)
{
    if(number>chocolates.length)return 'Insufficient chocolates in the dispenser';
    if(number<0)return 'Number cannot be zero/negative';
    var dispensed=[];
    for(index=chocolates.length-1;number>0 &&index>=0;index--,number--)
    {
        if(chocolates[index]===color)
        {
            chocolates.splice(index,1);
            (dispensed.push(color));
        }
    }
    return dispensed;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function totalNoOfChocolates(chocolates,color)
{
    var totalChocolates=0;
    for(var i=0;i<chocolates.length;i++)
    {
        if(chocolates[i]==color)totalChocolates++;
    }
    return totalChocolates;
}
function noOfChocolates(chocolates)
{
    var numberOfChocolates=[];
    numberOfChocolates.push(totalNoOfChocolates(chocolates,"green"));
    numberOfChocolates.push(totalNoOfChocolates(chocolates,"silver"));
    numberOfChocolates.push(totalNoOfChocolates(chocolates,"blue"));
    numberOfChocolates.push(totalNoOfChocolates(chocolates,"crimson"));
    numberOfChocolates.push(totalNoOfChocolates(chocolates,"purple"));
    numberOfChocolates.push(totalNoOfChocolates(chocolates,"red"));
    numberOfChocolates.push(totalNoOfChocolates(chocolates,"pink"));
    for(var i=0;i<numberOfChocolates.length;i++)
    {
        if(numberOfChocolates[i]==0)
        {
            numberOfChocolates.splice(i,1);
            i--;
        }
    }
    return numberOfChocolates;

}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates)
{
    var colourCount={

    };
    for(var i=0;i<chocolates.length;i++)
    {
        if(colourCount.hasOwnProperty(chocolates[i]))
        {
            colourCount[chocolates[i]]++;
        }
        else
        {
            colourCount[chocolates[i]]=0;
        }
    }
    chocolates.sort(function (chocolate1,chocolate2)
    {
        if(colourCount[chocolate2]-colourCount[chocolate1]==0)
        {
            if(chocolate2>chocolate1)return -1;
            else if(chocolate2<chocolate1)return 1;
            return 0;
        }
       return colourCount[chocolate2]-colourCount[chocolate1];
    })
    return  chocolates;
}
//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates,number,color, finalColor)
{
    if(color==finalColor)return "Can't replace the same chocolates";
    if(number<0)return 'Number cannot be zero/negative';
    for(var i=0;i<chocolates.length && number>0;i++)
    {
        if(chocolates[i]==color)
        {
            chocolates[i]=finalColor;
            number--;
        }
    }
    return chocolates;
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color, finalColor)
{
    if(color==finalColor)return "Can't replace the same chocolates";
    var number=0;
    for(var i=0;i<chocolates.length;i++)
    {
        if(chocolates[i]==color)
        {
            chocolates[i]=finalColor;
            number++;
        }
        else if(chocolates[i]==finalColor)
        {
            number++;
        }
    }
    return [number,chocolates];
}

//Challenge 1: Remove one chocolate of ____ color from the top
function removeChocolateOfColor(chocolates,color)
{
    for(var i=0;i<chocolates.length;i++)
    {
        if(chocolates[i]==color)
        {
            chocolates.splice(i,1);
            break;
        }
    }
    return chocolates;
}
