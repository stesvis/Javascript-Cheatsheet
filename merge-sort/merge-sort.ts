// Merge Sort is a highly efficient, stable, and comparison-based sorting algorithm.
// It is based on the divide and conquer strategy and is known for its predictable performance regardless of the input size.

/**
 * Merge Sort algorithm
 * Divides the array into two halves, recursively sorts them, and then merges the sorted halves.
 * Time Complexity: O(n log n) in all cases.
 * Space Complexity: O(n) due to auxiliary space for merging.
 */
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  // Recursively split the array into two halves
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

/**
 * Merge function used in Merge Sort
 * Merges two sorted arrays into a single sorted array.
 */
function merge(left: number[], right: number[]): number[] {
  let result: number[] = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    // Take the smaller element from either left or right array
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Append remaining elements from left and right arrays
  return [...result, ...left.slice(i), ...right.slice(j)];
}
