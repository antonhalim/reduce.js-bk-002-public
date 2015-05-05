function reduce(array, start, method){
	var total = start;
	var i = 0;
	while(i < array.length){
		total = method(total, array[i]);
		i++;
	}
	return total;
};
