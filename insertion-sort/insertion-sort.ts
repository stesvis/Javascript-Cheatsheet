// Insertion Sort is a simple and efficient comparison-based sorting algorithm, ideal for small datasets and partially sorted arrays.
// It is frequently used in practice due to its low overhead.

/**
 * Insertion Sort algorithm
 * Builds the sorted array one item at a time by inserting each element in its correct position.
 * Time Complexity: O(n^2) in worst and average cases, O(n) in best case.
 * Space Complexity: O(1)
 */
function insertionSort(arr: number[]): number[] {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1] that are greater than key one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    // Place the key at the correct position
    arr[j + 1] = key;
  }

  return arr;
}
