import { useEffect, useState } from "react";

const BlurredImg = ({blurImgSrc, origImgSrc, ...props}) => {
    const [isLoaded, setLoadingState] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.onload = () => setLoadingState(true);
        image.src = origImgSrc;
    }, [])

    return (
        <img src={isLoaded ? origImgSrc : blurImgSrc} {...props} alt={props.alt || 'image'} />
    )
};

export default BlurredImg;