function bubbleSort(arr) {
	var temp;
	var notSorted = true;
	while(notSorted) {
		notSorted = false;
		for(var i=0; i<arr.length-1; i++) {
			if(arr[i] > arr[i+1]) {
				temp = arr[i+1];
				arr[i+1] = arr[i];
				arr[i] = temp;
				notSorted = true;
			}
		}
	}
	return arr;
}