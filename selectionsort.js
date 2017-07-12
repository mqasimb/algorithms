function selectionSort(arr) {
	var min, minIndex, temp;
	for(var i=0; i<arr.length; i++) {
		min = arr[i];
		minIndex = i;
		for(var j=i+1; j<arr.length; j++) {
			if(min > arr[j]) {
				min = arr[j];
				minIndex = j;
			}
		}
		temp = arr[i];
		arr[i] = min;
		arr[minIndex] = temp;
	}
	return arr;
}