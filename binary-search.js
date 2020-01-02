//import { runInThisContext } from "vm"

//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
function isSorted(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			return false;
		}
	}
	return true;
}

export class BinarySearch {
	constructor(arr) {
		this.array = isSorted(arr) ? arr : undefined
	}

	indexOf(value) {
		let left = 0;
		let right = this.array.length - 1;
		let mid = Math.floor(left + ((right - left) / 2));
		while (left <= right) {
			if (this.array[mid] == value) {
				//test wants us to return mid, not value
				return mid;
			}
			if (value < this.array[mid]) {
				right = mid - 1;
				mid = Math.floor(left + ((right - left) / 2));
			}
			else if (value > this.array[mid]) {
				left = mid + 1;
				mid = Math.floor(left + ((right - left) / 2));
			}
		}
		//tests want us to return -1 instead of false
		return -1;
	}

}

