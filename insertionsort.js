function insertionSort(arr) {
	var temp, j;
	for(var i=1; i<arr.length; i++) {
		j = i;
		temp = arr[i];
		while(j>0 && arr[j-1] > temp) {
			arr[j] = arr[j-1];
			j--;
		}
		arr[j] = temp;
	}
	return arr;
}