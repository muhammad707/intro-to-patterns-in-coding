/*
Given a string and a pattern, find all anagrams of the pattern in the given string.
Every anagram is a permutation of a string. 
As we know, when we are not allowed to repeat characters while finding permutations of a string, 
we get N! permutations (or anagrams) of a string having NN characters. 
For example, here are the six anagrams of the string “abc”:


Input: String="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
*/