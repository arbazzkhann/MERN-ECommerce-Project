import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCards/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import nikeShoes from '../../../Data/Nike/NikeShoes'

const HomeSectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); //Active Index

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.3 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1); // Decreasing active index for slide previous
  const slideNext = () => setActiveIndex(activeIndex + 1); // Increasing active index for slide next

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = nikeShoes.map((item) => <HomeSectionCard product={item}/>);

  return (
    <div className="px-4 lg:px-8 border">
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
            onClick={slideNext} //next slide
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        <Button
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
          onClick={slidePrev} //previous slide
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(-90deg)", color: "black" }}
          />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
