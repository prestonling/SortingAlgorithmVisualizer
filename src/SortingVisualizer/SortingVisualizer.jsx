import React from 'react';
import './SortingVisualizer.css';
import {getSwitchBarsAnimations} from '../SortingAlgorithms/SortingAlgorithms'
import {getBubbleSortAnimations} from '../SortingAlgorithms/SortingAlgorithms'
import {getMergeSortAnimations} from '../SortingAlgorithms/SortingAlgorithms'

const NUMBER_OF_ARRAY_BARS = 8

export default class SortingVisualizer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			array: [],
			//index to keep track of which bars have been switched
			index: 0,
		}
	}

	resetArray() {
	    const array = [];
	    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
	      array.push(randomIntFromInterval(5, 300));
	    }
	    this.setState({array});
  	}

  	switchBars(){
  		const {array} = this.state;
  		const animations = getSwitchBarsAnimations(array);
  		console.log(animations);
  		
  		for(let i = 0; i < animations.length; i++){
  			const arrayBars = document.getElementsByClassName('array-bar');


  			const firstSwitchAnimation = (i % 4 === 1);
  			const secondSwitchAnimation = (i % 4 === 2);

  			if (firstSwitchAnimation || secondSwitchAnimation){
  				const [barIdx, newValue] = animations[i];
  				const bar = arrayBars[barIdx];
  				//array is being fully changed
  				//before bars can show animations
  				setTimeout(() => {
  					bar.style.height = `${newValue}px`;
  					bar.innerHTML = `${newValue}`
  					array[barIdx] = newValue;
  					this.setState({array});
  				}, i * 50);
  				


			}
			else{
				const [barOneIdx, barTwoIdx] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				var color = 'black';
				//change to green if comparing the bars
				
				setTimeout(()=> {
					if (i % 4 === 0){
						color = 'green';
					}
					//ISSUE:color is not reverting back to black

					//change to 
					else if(i % 4 === 3){
						color = 'black';
					}
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, i * 50);
			} 
   		}
   		console.log(this.state.array);
  		


	}
	//switch bars now complete
	//TO DO:
	//-change the way colors alternate so they do not
	//flash so much
	//-alternate colors if values are to be changed
	bubbleSort(){
		const {array} = this.state;
		const animations = getBubbleSortAnimations(array);
		

		for(let i = 0; i < animations.length; i++){
			const arrayBars = document.getElementsByClassName('array-bar');

			const firstSwitchAnimation = (i % 4 === 1);
  			const secondSwitchAnimation = (i % 4 === 2);

  			if (firstSwitchAnimation || secondSwitchAnimation){
  				
  				//array is being fully changed
  				//before bars can show animations
  				setTimeout(() => {
  					console.log(this.state.array);
  					const [barIdx, newValue] = animations[i];
  					const bar = arrayBars[barIdx];
  					bar.style.height = `${newValue}px`;
  					bar.innerHTML = `${newValue}`
  					array[barIdx] = newValue;
  					this.setState({array});
  					if(secondSwitchAnimation){
  						console.log(array);
  					}
  				}, i * 50);
  				


			}
			else{
				const [barOneIdx, barTwoIdx] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				var color = 'black';
				//change to green if comparing the bars
				
				setTimeout(()=> {
					if (i % 4 === 0){
						color = 'green';
					}
					//ISSUE:color is not reverting back to black

					//change to 
					else if(i % 4 === 3){
						color = 'black';
					}
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, i * 50);
			}
		}
	}


	//make splitting animation in mergeSort(), not returned from animations
	//need to make splitting animations a recursive call (will make it easier)


	//IN PLACE MERGESORT
	//keep track of both value and index 
	mergeSort(){
		const {array} = this.state;
		const valueindexarray = [];
		for (let i = 0; i < array.length; i++){
			const valueindexpairs = [array[i], i];
			valueindexarray.push(valueindexpairs);
		}

		const arrayBars = document.getElementsByClassName('array-bar');
		splittingAnimation(arrayBars);
		getMergeSortAnimations(valueindexarray);

		//with animations array, remember to put arrays that are being
		//compared together (make margin 0 or 1 )
	}

	

	//PROBLEMS
	//comparisons of left and right bars for bubble sort is
	//not correct 

	//arrays already contain the values of each bar, so just 
	//update the array 

	//bubble sort should work with this

	//review merge sort, quicksort and heap sort

  	componentDidMount(){
  		this.resetArray();
  	}
	
	render() {
    const {array} = this.state;

	    return (
	      <div className="array-container">
	        {array.map((value, idx) => (
	          <div
	            className="array-bar"
	            key={idx}
	            style={{
	            	backgroundColor: '#000',
	            	height: `${value}px`,
	            	color: '#ffffff'
	            }}>{value}</div>
	        ))}
	        <button onClick={() => this.resetArray()}>Generate New Array</button>
	        <button onClick={() => this.mergeSort()}>Merge Sort</button>
	        <button onClick={() => this.quickSort()}>Quick Sort</button>
	        <button onClick={() => this.heapSort()}>Heap Sort</button>
	        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
	        <button onClick={() => this.testSortingAlgorithms()}>
	          Test Sorting Algorithms (BROKEN)
	        </button>
	        <button onClick={() => this.switchBars()}>Switch items</button>
	        
	        
	      </div>
	    );
	}
}

//function getBubbleSortAnimations

//brainstorm:
//use for loop to go through an array of arrays of animations 
//(print a new array every time with changing colors and moving 2 
//bars everytime)

//test if you can change the height of array items within array, not all 
//of them

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//animation works, but both sides split at the 
//same time
var splittingAnimation = function split(arrayBars){
	if(arrayBars.length === 1){
		return;
	}
	setTimeout(() => {
		const splitIndex = Math.floor((arrayBars.length - 1)/2);

		const middleBar = arrayBars[splitIndex];
		const newSpacing = 20;
		const middleBarStyle = middleBar.style;
		middleBar.style.marginRight = `${newSpacing}px`;

		const leftGroup = [];
		for(let i = 0; i <= splitIndex; i++){
			leftGroup.push(arrayBars[i]);
		}

		const rightGroup = [];
		for(let i = splitIndex + 1; i < arrayBars.length; i ++){
			rightGroup.push(arrayBars[i]);
		}

		split(leftGroup);
		split(rightGroup);
	}, 1000)

}

