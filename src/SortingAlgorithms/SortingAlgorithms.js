//in Javascript, should only import and export what you need
// export function getBubbleSortAnimations(array){
// 	const animations = [];

// }

//if you want to do bubble sort, how would we implement it knowing about
//pass-by-reference?

//implement switchbars here, then work on bubblesort

// switchBars(array, arrayBars){
// 	const auxArray = array.slice();
// 	const arrayBars = document.getElementsByClassName('array-bar');
// 	const {index} = this.state;
// 	console.log(index);
	
// 	const barOneStyle = arrayBars[index].style;
// 	const barTwoStyle = arrayBars[index+1].style;
// 	barOneStyle.height = `${array[index+1]}px`;
// 	barTwoStyle.height = `${array[index]}px`;


// 	//update state array with array with switched values
// 	auxArray[index] = array[index+1];
// 	auxArray[index+1] = array[index];

// 	this.setState({
// 		index: index + 1,
// 		array: auxArray
// 	});

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
				console.log(j);
				console.log(auxArray);
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

//should only need array as parameter 
//-so we use array indexes as values to return
//for animation array
//

//bubblesort 
//need to compare indexes to see if left is greater than right
//and if so, switch them

//in terms of animations, we can't just have the same pattern
//as switch bars
//switchbars has 4 items per cycle
//-2 for changing the color, and 2 for switching values/height

//bubblesort will also only need 4, but do we keep 



//what if we returned an array of what indexes were compared?
//we could just check the values at each index 