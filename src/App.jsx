import { useEffect, useState } from 'react'
import './App.css'
import { mergeSortAnimations } from './sort_animations/MergeSort'
import { quickSortAnimations } from './sort_animations/QuickSort'
import { selectionSortAnimations } from './sort_animations/SelectionSort'
import { insertionSortAnimations } from './sort_animations/InsertionSort'
import { bubbleSortAnimations } from './sort_animations/BubbleSort'

function App() {
  const [a,setA] = useState(10)
  const [b, setB] = useState(150)
  const [n,setN] = useState(50)
  const [nums,setNums] = useState([])
  const [isSorting, setIsSorting] = useState(false)
  const generateNumbers = (p,q,r) => {
    let arr=[];
    for (let i=0;i<r;i++) {
      let num = Math.floor(Math.random()*(q-p+1))+p
      arr.push(num)
    }
    return arr
  }
  useEffect(()=>{
    setNums(generateNumbers(a,b,n))
  },[n])
  const anim_speed = 10

  const MergeSort = () => {
    setIsSorting(true)
    setNums(generateNumbers(a,b,n))
    const randomArr = nums
    const animations = mergeSortAnimations(0,n-1,randomArr)
    for (let i=0;i<animations.length;i++) {
      const [bar1,bar2] = animations[i]
      const bars = document.getElementsByClassName('bar') 
      if (i%3==0) { 
        setTimeout(()=>{  //If we use a single value for setTimeout, all animations would execute simultaneously after the same delay.
        bars[bar1].style.backgroundColor = 'red'
         bars[bar2].style.backgroundColor = 'red'},i*anim_speed)//Multiplying by i: Each iteration of the loop adds an incremental delay, ensuring each step in the animation occurs in sequence.
      } 
       else if (i%3==1) {
        setTimeout(()=>{
         bars[bar1].style.backgroundColor = '#8C3061'
         bars[bar2].style.backgroundColor = '#8C3061'},i*anim_speed)
       }
       else if (i%3==2){
        setTimeout(()=>{
        bars[bar1].style.height = `${bar2*3}px`},i*anim_speed)
       }
    }
    let lastAnimationTime = animations.length * anim_speed //total delay for last animation
    const bars = document.getElementsByClassName('bar') 
    for (let i=0;i<bars.length;i++) {
      setTimeout(()=>{
        bars[i].style.backgroundColor = 'green'
      },lastAnimationTime+i*anim_speed)
    }
    lastAnimationTime+=bars.length * anim_speed
    for (let i=0;i<bars.length;i++) {
      setTimeout(()=>{
        bars[i].style.backgroundColor = '#8C3061' 
      },lastAnimationTime+i*anim_speed)
    }
    lastAnimationTime+=bars.length * anim_speed
    for (let i=0;i<bars.length;i++) {
      setTimeout(()=>{
        bars[i].style.backgroundColor = '#8C3061' 
      },lastAnimationTime+i*anim_speed)
    }
    setTimeout(()=>{
      setIsSorting(false)
    },lastAnimationTime+anim_speed*bars.length)
  }

  const QuickSort = () => {
    setIsSorting(true)
    const randomArr = generateNumbers(a, b, n);
    setNums([...randomArr]);
      const animations = quickSortAnimations(0, n - 1, randomArr);
      const bars = document.getElementsByClassName('bar');
  
      for (let i = 0; i < animations.length; i++) {
        const [bar1, bar2, isPivot] = animations[i];
        
          if (i % 3 === 0) {
            if (isPivot) {
              setTimeout(() => {
                  bars[bar1].style.backgroundColor = 'blue';
                  bars[bar2].style.backgroundColor = 'blue';
              }, i * anim_speed);
            } else {
              setTimeout(() => {
                  bars[bar1].style.backgroundColor = 'red';
                  bars[bar2].style.backgroundColor = 'red';
              }, i * anim_speed);
            }
          } else if (i % 3 === 1) {
            if (bar1!=-1) {
              setTimeout(() => {
                  if (!isPivot) {
                    bars[bar1].style.backgroundColor = 'green';
                    bars[bar2].style.backgroundColor = 'green';
                  }
                  let temp = bars[bar1].style.height;
                  bars[bar1].style.height = bars[bar2].style.height;
                  bars[bar2].style.height = temp;
              }, i * anim_speed);
            }
          } else if (i % 3 === 2) {
            setTimeout(() => {
                bars[bar1].style.backgroundColor = '#8C3061';
                bars[bar2].style.backgroundColor = '#8C3061';
            }, i * anim_speed);
          }
      }
      let lastAnimationTime = animations.length * anim_speed 
    for (let i=0;i<bars.length;i++) {
      setTimeout(()=>{
        bars[i].style.backgroundColor = 'green'
      },lastAnimationTime+i*anim_speed)
    }
    lastAnimationTime+=bars.length * anim_speed
    for (let i=0;i<bars.length;i++) {
      setTimeout(()=>{
        bars[i].style.backgroundColor = '#8C3061' 
      },lastAnimationTime+i*anim_speed)
    }
    setTimeout(()=>{
      setIsSorting(false)
    },lastAnimationTime+anim_speed*bars.length)
  }

  const SelectionSort = () => {
    setIsSorting(true)
    setNums(generateNumbers(a,b,n))
    const randomArr = nums
    const animations = selectionSortAnimations(randomArr)
    const bars = document.getElementsByClassName('bar')
    for (let i=0;i<animations.length;i++) {
      const [bar1,bar2,color,isSorted] = animations[i]
      if (isSorted) {
        setTimeout(()=>{
        bars[bar1].style.backgroundColor = color;
        bars[bar1].style.height = `${bar2*3}px`;
      },i*anim_speed/5)
      }
      else {
        setTimeout(() => {
          bars[bar1].style.backgroundColor = color;
          bars[bar2].style.backgroundColor = color;
        }, i*anim_speed/5);
      }
    }
    let lastAnimationTime = animations.length * anim_speed/5
    for (let i=0;i<bars.length;i++) {
      setTimeout(()=>{
        bars[i].style.backgroundColor = '#8C3061'
      },lastAnimationTime+i*anim_speed)
    }
    setTimeout(()=>{
      setIsSorting(false)
    },lastAnimationTime+bars.length*anim_speed)
    
  }
  
  const InsertionSort = () => {
    setIsSorting(true)
    setNums(generateNumbers(a,b,n))
    const randomArr = nums
    const animations = insertionSortAnimations(randomArr)
    const bars = document.getElementsByClassName('bar')
    for (let i=0;i<animations.length;i++) {
      const [bar1,bar2,color,toChangeHeight] = animations[i]
      if (toChangeHeight) {
        setTimeout(() => {
          bars[bar1].style.backgroundColor = color
          bars[bar1].style.height = `${bar2*3}px`
        },i*anim_speed)
      }
      else {
        setTimeout(() => {
          bars[bar1].style.backgroundColor = color
          bars[bar2].style.backgroundColor = color
        },i*anim_speed)
      }
    }
    let lastAnimationTime = animations.length * anim_speed 
    for (let i=0;i<bars.length;i++) {
      setTimeout(()=>{
        bars[i].style.backgroundColor = 'green'
      },lastAnimationTime+i*anim_speed)
    }
    lastAnimationTime+=bars.length * anim_speed
    for (let i=0;i<bars.length;i++) {
      setTimeout(()=>{
        bars[i].style.backgroundColor = '#8C3061' 
      },lastAnimationTime+i*anim_speed)
    }
    setTimeout(()=>{
      setIsSorting(false)
    },lastAnimationTime+anim_speed*bars.length)
  }

  const BubbleSort = () => {
    setIsSorting(true)
    setNums(generateNumbers(a,b,n))
    const randomArr = nums
    const animations = bubbleSortAnimations(randomArr)
    const bars = document.getElementsByClassName('bar')
    for (let i=0;i<animations.length;i++) {
      const [bar1,bar2,color,toChangeHeight] = animations[i]
      if (toChangeHeight) {
        setTimeout(()=>{
          bars[bar1].style.backgroundColor = color
          bars[bar1].style.height = `${bar2*3}px`
        },i*anim_speed)
      }
      else {
        setTimeout(()=>{
          bars[bar1].style.backgroundColor = color
          bars[bar2].style.backgroundColor = color
        },i*anim_speed)
      }
    }
    let lastAnimationTime = animations.length * anim_speed 
    for (let i=0;i<bars.length;i++) {
      setTimeout(()=>{
        bars[i].style.backgroundColor = 'green'
      },lastAnimationTime+i*anim_speed)
    }
    lastAnimationTime+=bars.length * anim_speed
    for (let i=0;i<bars.length;i++) {
      setTimeout(()=>{
        bars[i].style.backgroundColor = '#8C3061' 
      },lastAnimationTime+i*anim_speed)
    }
    setTimeout(()=>{
      setIsSorting(false)
    },lastAnimationTime+anim_speed*bars.length)
  }

  return (
    <>
    <div className="MainContainer">
      <div className='navBar'>
        <span className='heading'>Sorting Visualizer</span>
      <button className="btn" disabled={isSorting} onClick={MergeSort}>Merge Sort</button>
      <button className="btn" disabled={isSorting} onClick={QuickSort}>Quick Sort</button>
      <button className="btn" disabled={isSorting} onClick={SelectionSort}>Selection Sort</button>
      <button className="btn" disabled={isSorting} onClick={InsertionSort}>Insertion Sort</button>
      <button className="btn" disabled={isSorting} onClick={BubbleSort}>Bubble Sort</button>
      <div className='range'>
      <button className='rangeTxt'>Adjust Total Bars</button>
      <input type="range" className='rangeSlider' disabled={isSorting} value={n} onChange={(e)=>{setN(e.target.value); console.log(e.target.value)}} min="20" max="150" id="" />
      </div></div>
      <div className="arrayBars">
      {
        nums.map((val,index)=>{
         return(
            <div key={index} className='bar' style={{height:`${val*3}px`}}>
          </div>  
        )
      })
      }
      </div>
      </div>
    </>
  )
}

export default App
