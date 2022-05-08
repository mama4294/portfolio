import {
    animate,
    motion,
    useMotionValue,
} from "framer-motion"
import { useState, useEffect, useRef } from "react"
import {useEventLister} from "../helpers/helper-functions"




export const Carousel = ({images}) =>{
    const x = useMotionValue(0)
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const containerRef = useRef()

    const calculateNewX = () => -currentSlideIndex * (containerRef.current?.clientWidth || 0)

    const handleNext = () => {
        let newSlide = currentSlideIndex === images.length - 1 ? 0 : currentSlideIndex + 1;
        setCurrentSlideIndex(newSlide);
    }

    const handlePrev = () => {
        let newSlide = currentSlideIndex === 0 ? images.length - 1 : currentSlideIndex - 1;
        setCurrentSlideIndex(newSlide);
    }

    const transition = {
        type: "spring",
        bounce: 0,
    }

    const handleKeyPress = (event) => {
        if(event.key === "ArrowLeft") handlePrev()
        if(event.key === "ArrowRight") handleNext()
      };
    
      useEventLister("keydown", handleKeyPress);


    const handleEndDrag = (event, info) => {
        const clientWidth = containerRef.current?.clientWidth || 0

        const { offset } = info

        if (offset.x > clientWidth / 4) {
            handlePrev()
        } else if (offset.x < -clientWidth / 4) {
            handleNext()
        } else {
            animate(x, calculateNewX(), transition)
        }
    }


    useEffect(() => {
        const controls = animate(x, calculateNewX(), transition)
        return controls.stop
    }, [currentSlideIndex])

    if(images === undefined) return null
    return(
        <div className="relative w-full h-full overflow-hidden flex" ref={containerRef}>
        {images.map((child, i) => (
            <Slider onDragEnd={handleEndDrag} x={x} i={i} key={i}>
                {child}
            </Slider>
        ))}
        <Arrow left onClick={handlePrev}>
            &larr;
        </Arrow>
        <Arrow onClick={handleNext}>
            &rarr;
        </Arrow>
        <Dots
            length={images.length}
            setActiveIndex={setCurrentSlideIndex}
            activeIndex={currentSlideIndex}
                />
        </div>
    )
}


const Slider = ({ x, i, onDragEnd, children }) => (
    <motion.div
        className={`w-full h-full inline-block flex-none right-[${i*100}%] left-[${i*100}%]`}
        drag="x"
        style={{x}}
        dragElastic={0.3}
        onDragEnd={onDragEnd}
    >
        <Picture image={children}/>
    </motion.div>
)

const Arrow = ({ left = false, children, onClick }) => {
    const arrowPosition = left ? "left-[20px]" : "right-[10px]"
    const arrow = left ?
    <svg 
        className="h-8 w-8"
        viewBox="0 0 26.002 45.999"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M24.998,40.094c1.338,1.352,1.338,3.541,0,4.893c-1.338,1.35-3.506,1.352-4.846,0L1.004,25.447  c-1.338-1.352-1.338-3.543,0-4.895L20.152,1.014c1.34-1.352,3.506-1.352,4.846,0c1.338,1.352,1.338,3.541,0,4.893L9.295,23  L24.998,40.094z"/>
    </svg>
    : 
    <svg 
        className="h-8 w-8"
        viewBox="0 0 26.002 45.999"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M1.004,40.094c-1.338,1.352-1.338,3.541,0,4.893c1.336,1.35,3.506,1.352,4.844,0l19.15-19.539  c1.338-1.352,1.338-3.543,0-4.895L5.848,1.014c-1.338-1.352-3.506-1.352-4.844,0s-1.338,3.541-0.002,4.893L16.707,23L1.004,40.094z"/>
    </svg>  

    return(
        <div
            onClick={onClick}
            className={`${arrowPosition} absolute w-[50px] h-[50px] top-1/2 translate-y-2/4 text-gray-400 hover:text-primary  flex align-middle justify-center cursor-pointer`}
        >
            {arrow}
        </div>
    )
    };

const Picture = ({image}) =>(
    <img
        className="w-full rounded-md"
        src={process.env.PUBLIC_URL + image}
        alt={image}
        draggable="false"
/>
)


const Dots = ({ length, activeIndex, setActiveIndex }) => {
    return (
        <div className="absolute bottom-2.5 left-2/4 -translate-x-1/2">
            {new Array(length).fill("").map((_, i) => (
                <span
                    onClick={() => setActiveIndex(i)}
                    key={i}
                    className={`w-4 h-4 rounded-full mx-1 inline-block cursor-pointer ${i === activeIndex ? "bg-primary" : "bg-slate-200"}`}
                ></span>
            ))}
        </div>
    )
}