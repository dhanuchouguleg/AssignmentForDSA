// Write a program to check if two strings are a rotation of each other?
function areRotations( str1,  str2)
    {
       
        return (str1.length == str2.length) &&
               ((str1 + str1).indexOf(str2) != -1);
    }
 
        var str1 = "DHANU";
        var str2 = "HANUD";
 
        if (areRotations(str1, str2))
           console.log("Strings are rotations of each other");
        else
           console.log("Strings are not rotations of each other");