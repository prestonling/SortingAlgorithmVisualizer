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
	return animations;
}

//function getMergeSortAnimations

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
