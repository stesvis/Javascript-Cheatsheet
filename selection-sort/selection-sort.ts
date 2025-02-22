// Selection Sort is another fundamental, comparison-based sorting algorithm.
// It is known for its simplicity and has performance advantages over more complicated algorithms in certain scenarios.

/**
 * Selection Sort algorithm
 * Repeatedly selects the smallest element from the unsorted part and swaps it with the first unsorted element.
 * Time Complexity: O(n^2) in worst, average, and best cases.
 * Space Complexity: O(1)
 */
function selectionSort(arr: number[]): number[] {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      // Find the minimum element in the unsorted part
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element of the unsorted part
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}
