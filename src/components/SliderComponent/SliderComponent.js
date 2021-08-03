// Import React
import React, { useState } from 'react';
import { useSelector} from 'react-redux'

// Import Const variables
import { 
    FIRST_SLIDE,
    MIDDLE_SLIDE, 
    LAST_SLIDE, 
    SLIDE_BUTTONS, 
    SLIDER_FIRST_POSITION,
    SLIDER_MIDDLE_POSITION,
    SLIDER_LAST_POSITION,
    SLIDER_ID,
    SLIDE_NO_TEXT,
    SLIDE_NO_IMAGE,
    ONG_NAME
} from '../../consts/const';

// Import Chakra for Styles
import { Flex, Image, Box, Text } from '@chakra-ui/react'

// Import Component
import SliderButtonComponent from './SliderButtonComponent';
import LoadingComponent from '../LoadingComponent'

// Example Slide -- Will be deleted
const ExampleSlide = (props) => {
    
console.log(props.slide.imageUrl);
    const {imageURL, text} = props.slide;
    return <Flex justify="center" minW="100vw" h="500px" direction="column">
        <Image src={imageURL} alt={ONG_NAME} width="auto" h="100%" objectFit="cover"/>
        <br />
        <Text fontStyle="italic" textAlign="center">{text}</Text>
    </Flex>
}

// Export Component
const SliderComponent = (props) => {

    const { images } = useSelector(state => state.home);
    const [currentSlide, setCurrentSlide] = useState(FIRST_SLIDE);
    //const [loading, setLoading] = useState(true)

    
    //let slides =
    // Stores the slides info received  
    /* useEffect(()=>{
        
        if(images.length>0){
           
        slides = [
            {
                imageUrl: images[FIRST_SLIDE].imageURL,
                text: images[FIRST_SLIDE].text
            },
            {
                imageUrl: images ? images[MIDDLE_SLIDE].imageURL : SLIDE_NO_IMAGE,
                text: images ? images[MIDDLE_SLIDE].text : SLIDE_NO_TEXT
            },
            {
                imageUrl: images ? images[LAST_SLIDE].imageURL : SLIDE_NO_IMAGE,
                text: images ? images[LAST_SLIDE].text : SLIDE_NO_TEXT
            }
        ];
        setLoading(false)
    }
    },[images]) */
    
    
    

    // Change Slide updating the Margin Left from the Slider
    const changeSlide = (slidePosition) => {
        setCurrentSlide(slidePosition);
        if(currentSlide === slidePosition){}
        else{
            if(slidePosition === FIRST_SLIDE) {document.getElementById(SLIDER_ID).style.marginLeft = `${SLIDER_FIRST_POSITION}vw`}
            if(slidePosition === MIDDLE_SLIDE) {document.getElementById(SLIDER_ID).style.marginLeft = `${SLIDER_MIDDLE_POSITION}vw`}
            if(slidePosition === LAST_SLIDE) {document.getElementById(SLIDER_ID).style.marginLeft = `${SLIDER_LAST_POSITION}vw`}
        }
    }

    //if(loading && !images) { return <LoadingComponent />}
    //else{
    return (
        <Box borderWidth="1px" overflow="hidden" bg="#fffaf0" pt="10px">
            <Flex id={SLIDER_ID} transition="1.5s all">
                {
                    images.map((slide, i) => {
                        return <ExampleSlide slide={slide} key={i} />
                    })
                }
            </Flex>
                <br />
            <Flex justify="center" m="10px">
                {
                    SLIDE_BUTTONS.map((slideButton, i) => {
                        return <SliderButtonComponent slidePosition={slideButton} changeSlide={changeSlide} currentSlide={currentSlide} key={i} />
                    })
                }
            </Flex>
                <br />
        </Box>
    )
        //    }
}

export default SliderComponent