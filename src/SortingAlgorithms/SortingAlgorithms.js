//in Javascript, should only import and export what you need
// export function getBubbleSortAnimations(array){
// 	const animations = [];

// }

export function getSwitchBarsAnimations(array){
	const animations = [];
	const auxArray = array.slice();

	for(let i = 0; i < array.length - 1; i ++){

		//push the indexes that we are switching
		//will change these bars to red
		animations.push([i, i+1]);

		//push value of left index and its new value
		animations.push([i, auxArray[i+1]]);

		//push value of right index and its new value
		animations.push([i+1, auxArray[i]])

		var b = auxArray[i];
		auxArray[i] = auxArray[i+1];
		auxArray[i+1] = b; 

		//push the indexes of switched bars
		//these bars will then turn green
		animations.push([i, i+1]);


	}
	return animations;

}

//may need to switch 

export function getBubbleSortAnimations(array){
	const animations = [];
	const auxArray = array.slice(); 
	//go to second last index for first run of bubble sort
	for(let i = array.length - 2; i > 0; i --){
		for(let j = 0; j <= i; j ++){
			//push indexes of bars we are comparing
			//these bars will turn green
			animations.push([j, j+1]);

			//check if left bar is greater than right bar, and if so, 
			//push index of left bar and value of right bar
			//and push the index of the right bar and value of the left bar
			//if not, just push index and value of left bar respectively 
			if (auxArray[j]> auxArray[j+1]){
				animations.push([j, auxArray[j+1]]);
				animations.push([j+1, auxArray[j]]);

				var b = auxArray[j];
				auxArray[j] = auxArray[j+1];
				auxArray[j+1] = b; 
			}
			else{
				animations.push([j, auxArray[j]]);
				animations.push([j+1, auxArray[j+1]]);
			}

			//push the indexes of compared bars
			//these bars will revert back to black
			animations.push([j, j+1]);
			

		}
	}
	console.log("finished pushing animations");
	console.log("testing pass by reference vs ");
	
}

//function getMergeSortAnimations
//make it a recursive function

//how can you have animations

export function getMergeSortAnimations(array){
	const mergeSortAnimations = new Array;
	console.log(mergeSortAnimations)
	let newArrayAndAnimations = [];
	newArrayAndAnimations = mergeSortAnimationHelper(array, mergeSortAnimations);
	console.log("finished merge sort");
	console.log(newArrayAndAnimations[0]);
	return newArrayAndAnimations[1];
}

export function mergeSortAnimationHelper(array, animations){
	console.log("animations");
	console.log(animations);
	if (array.length == 1){
		console.log("array is of length 1");
		const currentArrayandAnimations =[];
		currentArrayandAnimations.push(new Array(array[0]), animations);
		console.log(array[0]); 
		console.log(currentArrayandAnimations);
		return currentArrayandAnimations;
	}

	else if(array.length == 0){
		console.log("array is of length 0");
		const currentArrayandAnimations =[];
		currentArrayandAnimations.push(new Array (array), animations); 
		console.log(array); 
		return currentArrayandAnimations;
	}

	console.log("This is after 0 and 1 check"); 
	console.log(array);

	const middleIndex = Math.floor(array.length/2);
	let auxArray = array.slice();
	const leftArray = auxArray.slice(0,middleIndex);

	console.log("left sliced array");
	console.log(leftArray);

	const rightArray = auxArray.slice(middleIndex,);

	console.log("right sliced array");
	console.log(rightArray);

	//returns the sorted array and animations respectively in one array
	const leftArrayandAnimations = mergeSortAnimationHelper(leftArray, animations);
	console.log("returning from left recursive call");
	console.log(leftArrayandAnimations);
	const rightArrayandAnimations = mergeSortAnimationHelper(rightArray, animations);
	console.log("returning from right recursive call");
	console.log(rightArrayandAnimations);


	//index 0 has the current sorted array and array 1 has the current animations
	var leftCurrentSortedArray = leftArrayandAnimations[0];
	console.log("leftCurrentSortedArray");
	console.log(leftCurrentSortedArray);
	var rightCurrentSortedArray = rightArrayandAnimations[0];
	console.log("rightCurrentSortedArray");
	console.log(rightCurrentSortedArray);

	let leftIndex = 0;
	let rightIndex = 0;
	const mergedArray = [];

	if (leftArrayandAnimations[0].length == 0){
		while (rightIndex < rightCurrentSortedArray.length){
			mergedArray.push(rightCurrentSortedArray[rightIndex]);
			rightIndex++;
		}

		const newArrayAndAnimations = [];
		newArrayAndAnimations.push(mergedArray,animations);
		return newArrayAndAnimations; 
	}

	else if (rightArrayandAnimations[0].length == 0){
		while(leftIndex < leftCurrentSortedArray.length){
			mergedArray.push(leftCurrentSortedArray[leftIndex]);
			leftIndex++;
		}
		const newArrayAndAnimations = [];
		newArrayAndAnimations.push(mergedArray,animations);
		return newArrayAndAnimations;
	}

	console.log("merged array before while loop");
		console.log(mergedArray);

	//XCurrentSortedArray is an array of value index pairs repsectively
	//index 0: value, index 1: index

	//merging is not completely correct
	//when merging 2 arrays of 2 elements or more,
	//once you switch values of the left and
	//right bars, they greater value is now not in the right
	//order

	//may need to use aux array to store values that are not 
	//currently the smallest values

	//if using an aux array, need to find a way to make animations
	//correct

	//IDEAS:
	//1.) once the aux array is full, have animations just display
	//	replace the elements that have been compared with the aux array
	//2.) -highlight bars that are being compared
	//	  -place bar that is of lower value into aux array
	//	   and show animation
	//

	console.log("leftCurrentSortedArray.length");
	console.log(leftCurrentSortedArray.length); 
	while((leftIndex < leftCurrentSortedArray.length) && (rightIndex < rightCurrentSortedArray.length)){
		console.log("leftCurrentSortedArray");
		console.log(leftCurrentSortedArray); 
		console.log("rightCurrentSortedArray");
		console.log(rightCurrentSortedArray); 
		//i
		if (leftCurrentSortedArray[leftIndex][0] <= rightCurrentSortedArray[rightIndex][0]){

			//push the value index pair into the merged array and 
			//do not switch the index's for the compared values.
			//push the same value index pair 
			console.log("merged array before new push");
			console.log(mergedArray);
			mergedArray.push(leftCurrentSortedArray[leftIndex]);
			console.log("Left bar is less than right bar merged array");
			console.log(mergedArray);

			//push index of bars being compared
			animations.push([leftCurrentSortedArray[leftIndex][1], rightCurrentSortedArray[rightIndex][1]]);

			//push value and index of the left bar (unchanged)
			animations.push(leftCurrentSortedArray[leftIndex]);

			//push value and index of the right bar (unchanged)
			animations.push(rightCurrentSortedArray[rightIndex]);

			leftIndex ++;
		
		}
		//need to make sure that if the indexes of the left side are filled,
		//and that 

		else if (rightCurrentSortedArray[rightIndex][0] < leftCurrentSortedArray[leftIndex][0]){
			console.log("rightCurrentSortedArray[rightIndex][0]");
			console.log(rightCurrentSortedArray[rightIndex][0]); 
			console.log("leftCurrentSortedArray[leftIndex][0]");
			console.log(leftCurrentSortedArray[leftIndex][0]); 
			const newLeftBarValueIndexPair = [];
			const newRightBarValueIndexPair = [];

			//THIS IS WHERE IT IS BREAKING

			//swap values of the right and left bars being compared


			newLeftBarValueIndexPair.push(rightCurrentSortedArray[rightIndex][0], leftCurrentSortedArray[leftIndex][1]);
			newRightBarValueIndexPair.push(leftCurrentSortedArray[leftIndex][0], rightCurrentSortedArray[rightIndex][1]);

			//contains left bar's value index pair but is not a reference to original 
			//bars
			const auxNewLeftBarValueIndexPair = Object.assign([], newLeftBarValueIndexPair);
			const auxNewRightBarValueIndexPair = Object.assign([], newRightBarValueIndexPair); 
			console.log("merged array before new push");
			console.log(mergedArray);

			//push the right bar into the merged array (with new index)
			mergedArray.push(auxNewLeftBarValueIndexPair);

			console.log("right bar is less than left bar merged array");
			console.log("newLeftBarValueIndexPair");
			console.log(newLeftBarValueIndexPair);
			console.log("newRightBarValueIndexPair");
			console.log(newRightBarValueIndexPair);
			console.log(mergedArray);

			//replace the right bar that was being compared with left bar value

			rightCurrentSortedArray[rightIndex]= auxNewRightBarValueIndexPair;

			leftCurrentSortedArray[leftIndex] = auxNewLeftBarValueIndexPair;

			//push indexes of bars being compared
			animations.push([leftCurrentSortedArray[leftIndex][1], rightCurrentSortedArray[rightIndex][1]]);

			//push value of left bar's new value index pair (index unchanged)
			animations.push(auxNewLeftBarValueIndexPair);

			//push value of right bar's new value index pair (index unchanged)
			animations.push(auxNewRightBarValueIndexPair);

			//increase left index again as you moved a right bar
			//to the left, so need to add next lowest value to the 
			//right of the just changed value
			leftIndex ++;
		}

	}
	console.log("Exited while loop");

	if (leftIndex == leftCurrentSortedArray.length){
		while (rightIndex < rightCurrentSortedArray.length){
			mergedArray.push(rightCurrentSortedArray[rightIndex]);
			rightIndex++;
		}
	}

	else if (rightIndex == rightCurrentSortedArray.length){
		while(leftIndex < leftCurrentSortedArray.length){
			mergedArray.push(leftCurrentSortedArray[leftIndex]);
			leftIndex++;
		}
	}

	console.log(mergedArray);
	const newArrayAndAnimations = [];
	newArrayAndAnimations.push(mergedArray,animations);
	return newArrayAndAnimations;


}

//ANIMATIONS
//1.)push index of leftmost bar in the group
//work on merge sort
//-want merge sort to be merge sort visually, with the bars being split
//correctly
//will need to make a space between the groups of bars
//-animations will be fundamentally different than that of
//bubble sort (i think)
//-leave splitting animations to SortingVisualizer, 

//animation:
//-keep dividing bars into 2 groups until every group only has 1 member
//	-will need to add a rectangle that is the same color as the 
//	background?
//	or just space the rectangles with consistent spacing
//	use css style element "margin"
