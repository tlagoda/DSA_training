/*
    Given an integer n, return true if it is a power of three. Otherwise, return false.

    An integer n is a power of three, if there exists an integer x such that n == 3^x.
*/

const isPowerOfThree = (n: number): boolean => {
    return (Math.log10(n) / Math.log10(3)) % 1 == 0;
};

// if n = 3^x
// then x = log3(n)
// then x = log10(n)/log10(3)
// n is a power of three if x is an integer
// n is an integer if n % 1 === 0

