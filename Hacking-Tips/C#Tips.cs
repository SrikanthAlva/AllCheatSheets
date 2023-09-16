C# Code Snippets

1. Convert String input to Int.

	string line1 = System.Console.ReadLine().Trim();
        int setSize = Int32.Parse(line1);
		
2. Convert string of single line input to an array of integers.

	string rawSet = System.Console.ReadLine();
        string[] setString = rawSet.Split(new char[] {' '}, StringSplitOptions.RemoveEmptyEntries);
		int[] set = Array.ConvertAll(setString, int.Parse);

3. Convert N lines of string inputs to a single Array of integer.

	string[] vals =  new string[testCases];
        for(long i=0;i<testCases;i++){
        	vals[i] = System.Console.ReadLine().Trim();
        }
        long[] Ns = Array.ConvertAll(vals, long.Parse);
		
4. Sort an Array of any datatype.

	Array.Sort(petals);
	
5. Quicker way solve the problem.

	int kases = Int32.Parse( System.Console.ReadLine().Trim());
       for (int kase = 1; kase <= kases; kase++) {
            int N = Int32.Parse( System.Console.ReadLine().Trim());
                List<int> result = new List<int>();
        result.Add(1);
        int temp, carry = 0;
        for(int i = 2; i <= N; i++) {
            for(int j = 0; j < result.Count; j++) {
                temp = carry + result[j] * i;
                carry = temp / 10;
                result[j] = temp % 10;
            }
            while(carry > 0) {
                result.Add(carry % 10);
                carry /= 10;
            }
        }
        for(int i = result.Count - 1; i >= 0; i--){
            Console.Write(result[i]);
        }
        Console.Write("\n");

       }
	   
	   
6. GCD of an Array using System.Linq
	int[] set
	int finalGCD = GCD (set); // function call


	static int GCD(int[] numbers)
	{
		    return numbers.Aggregate(GCD);
	}
		
	static int GCD(int a, int b)
	{
		  return b == 0 ? a : GCD(Math.Min(a,b), Math.Max(a,b) % Math.Min(a,b));
	}
	
7. to print using foreach loop
	numbers[] = {1, 2 ,3 , 4}
		numbers.foreach(WriteLine);
		
		
		
8. Binary Search
	binarysearch(int value,int low,int high)
{
    if(low==high)   
    {
        return low;
    }
    else
    {
        int mid=(low+high)>>1;
        if(value<a[mid])    
        {
            high=mid;
            return binarysearch(value,low,high);
        }
        else
        {
            low=mid;
            return binarysearch(value,low,high);   
        }
    }
}


using System;
using System.Collections.Generic;
using System.IO;
class Solution {
    static void Main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution */
        var line1 = System.Console.ReadLine().Trim();
        var N = Int32.Parse(line1);
        for (var i = 0; i < N; i++) {
             var line2 = System.Console.ReadLine().Trim();
            var Pair = Int32.Parse(line2);
            System.Console.WriteLine(Pair*2 - 1);
        }
    }
}