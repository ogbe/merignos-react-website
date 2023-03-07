import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.jelenapantic.com/wp-content/uploads/2018/05/matthew-hamilton-166549-unsplash.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <p>
            "money is a means of exchange of value. Money is not cash. Cash is
            the very least of what money is. Expose your mind to the
            understand."
          </p>
          <h3>jokotade adewale</h3>
          <p className="role">product designer, merignos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.c7a09b9cf779de6d7c83261f10ba1667?rik=n6tcOmplKTZVJw&pid=ImgRaw&r=0"
          alt="Second slide"
        />

        <Carousel.Caption>
          <p>
            "money is a means of exchange of value. Money is not cash. Cash is
            the very least of what money is. Expose your mind to the
            understand."
          </p>
          <h3>philemon akuagwu</h3>
          <p className="role">backend team lead, merignos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://yt3.ggpht.com/a/AATXAJzCnovZP0t8F1pNxmzNqxGOrRyNsosA3-PafA=s900-c-k-c0xffffffff-no-rj-mo"
          alt="Third slide"
        />

        <Carousel.Caption>
          <p>
            "money is a means of exchange of value. Money is not cash. Cash is
            the very least of what money is. Expose your mind to the
            understand."
          </p>
          <h3>uche jude nwankwo</h3>
          <p className="role">IT team lead, merignos</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
