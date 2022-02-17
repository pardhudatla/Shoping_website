import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Carousels = () => {
  const [isloading, setisloading] = useState(true);

  const [image, setimage] = useState([]);

  const carouselimages = async () => {
    const res = await fetch("/carousel", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data.allcarousels);
    setimage(data.allcarousels);
    setisloading(false);
  };

  useEffect(() => {
    carouselimages();
  }, []);

  const content = isloading ? (
    <div>loading....</div>
  ) : (
    <div>
      <Carousel variant="dark">
        <Carousel.Item interval={1000}>
          <img
            height="500"
            className="d-block w-100"
            src={image ? image[0].image : ""}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            height="500"
            className="d-block w-100"
            src={image ? image[1].image : ""}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            height="500"
            className="d-block w-100"
            src={image ? image[2].image : ""}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            height="500"
            className="d-block w-100"
            src={image ? image[3].image : ""}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            height="500"
            className="d-block w-100"
            src={image ? image[4].image : ""}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            height="500"
            className="d-block w-100"
            src={image ? image[5].image : ""}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );

  return (
    <div>{content}</div>
  );
};

export default Carousels;
