// Bubble Sort is one of the simplest sorting algorithms available.
// It’s frequently used as an introductory algorithm to help new programmers understand the concept of algorithmic sorting.

/**
 * Bubble Sort algorithm
 * Repeatedly swaps adjacent elements if they are in the wrong order.
 * This process repeats until the array is sorted.
 * Time Complexity: O(n^2) in worst and average cases, O(n) in best case.
 * Space Complexity: O(1)
 */
function bubbleSort(arr: number[]): number[] {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Swap if the element found is greater than the next element
      if (arr[j] > arr[j + 1]) {
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        let temp = arr[i];

        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }

  return arr;
}
