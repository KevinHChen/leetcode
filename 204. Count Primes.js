/**
 * Solution 1: It beats only 40% of the commits
 * 
 * It counts the number of prime numbers less than a non-negative number, n.
 * We can solve this problem using the Sieve of Eratosthenes algorithm.
 * We can create an array of size n and initialize all elements to true.
 * We can then iterate through the array and mark all multiples of each prime number as false.
 * Finally, we can count the number of true elements in the array and return that count.
 * The time complexity of this algorithm is O(n log log n) and the space complexity is O(n).
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n <= 2) return 0;

  // Create an array of size n and initialize all elements to true
  // We can then iterate through the array and mark all multiples of each prime number as false
  let isPrime = new Array(n).fill(true)
  isPrime[0] = isPrime[1] = false
  

  for (let i = 2; i < n; ++i) {
      if (!isPrime[i]) continue;
      // If the current number is prime, mark all its multiples as false
      // We can start marking multiples from i * 2, as all smaller multiples will have already been marked
      /**
       * According to google, when marking non-prime numbers (multiples of i), 
       * we don't need to start from i * 2, i * 3, etc., because those have already been marked as multiples of smaller primes earlier.
       * So, we can even start marking from i * i.
       */
      let temp = i * 2 // temp = i * i is also correct and even better
      while (temp < n) {
          isPrime[temp] = false
          // Increment temp by i to mark the next multiple
          temp += i
      }
  }

  // Count the number of true elements in the array
  // OR: return isPrime.reduce((cnt, val) => cnt + (val ? 1 : 0), 0);
  let cnt = 0
  for (val of isPrime) {
      if (val === true) cnt++
  }
  return cnt
}