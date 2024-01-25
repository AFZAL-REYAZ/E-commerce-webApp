import React from "react";
import './Styles.css'

const Carousel = () => {
  return (
    <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner" >
        <div className="carousel-item active">
          <img src="https://www.shutterstock.com/image-vector/diwali-festival-sale-design-template-260nw-1515608735.jpg" className="d-block w-100 "  alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://www.shutterstock.com/shutterstock/photos/2049931676/display_1500/stock-vector-diwali-festive-season-sale-banner-limited-offer-dipawali-indian-festival-diya-lamp-oil-lamp-2049931676.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://img.freepik.com/premium-psd/black-friday-sale-bag-instagramfacebook_496781-384.jpg" className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
</div>
  );
};

export default Carousel;
