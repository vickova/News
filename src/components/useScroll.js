import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Page } from "../actions/newAction";

export const useScroll = () => {
    const [element, view] = useInView({threshold:0.2})
    const controls = useAnimation()
    // console.log(view)
    if(view){
        controls.start('show')
    }
    else{
        controls.start('hidden')
    }
  return [element, controls];
}

export const Intersection = (element)=>{
    let boxElement = element;
        let observer;
      
        let options = {
          root: null,
          rootMargin: "0px",
          threshold: 0.8
        };
      
    let prevRatio = 0.0;
    let increasingColor = "rgba(40, 40, 190, ratio)";
    let decreasingColor = "rgba(190, 40, 40, ratio)";
    let callbackFunction = (entries, observer)=>{
        entries.forEach((entry) => {
            if (entry.intersectionRatio > prevRatio) {
              entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
            } else {
              entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
            }
        
            prevRatio = entry.intersectionRatio;
          });
    }
    observer = new IntersectionObserver(callbackFunction, options);
    observer.observe(boxElement);
}

// export function InfiniteSection(element){
//     const {pagenum, searchNews} = useSelector((state)=> state.pagenum);
//     const dispatch = useDispatch()
//     let boxElement = element;
//         let observer;
      
//         let options = {
//           root: null,
//           rootMargin: "0px",
//           threshold: 0.8
//         };
      
//     let callbackFunction = (entries, observer)=>{
//             const first = entries[0];
//                 if (first.isIntersecting) {
//                     dispatch(Page())
//                 }
//     }
//     observer = new IntersectionObserver(callbackFunction, options);
//         observer.observe(boxElement);
// }