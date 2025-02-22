// Quick Sort is a highly efficient sorting algorithm and is based on the divide and conquer approach.
// It is known for its superior performance in most cases and is widely used in practice.

/**
 * Quick Sort algorithm
 * Selects a pivot element and partitions the array such that elements smaller than the pivot
 * are on the left, and elements greater than the pivot are on the right. Recursively sorts the partitions.
 * Time Complexity: O(n log n) on average, O(n^2) in worst case.
 * Space Complexity: O(log n) due to recursive calls.
 */
function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left: number[] = [];
  let right: number[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    // Partitioning: elements less than pivot go left, others go right
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort the left and right subarrays and concatenate with pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}
