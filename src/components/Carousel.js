
import { useState } from 'react';
import '../styles/Carousel.scss';
import Products from './Products';

const Carousel = () => {
    const { carouselData } = Products();

    const images = carouselData.map((item) => item.imageUrl);

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <>
            <div className="main-section second-container">
                <div className="box1">
                    <h2 className='title'>Discover our <br />planet-friendly offer</h2>
                </div>
                <div className="box2">
                    <button className="button" onClick={prevSlide}>
                        <div className="marker"></div>
                    </button>
                    <button className="button" onClick={nextSlide}>
                        <div className="marker"></div>
                    </button>
                </div>
            </div>
            <div>
                <div className="carousel">
                    <div className="slides-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {carouselData.map((item, index) => (
                            <div key={index} className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}>
                                <img src={item.imageUrl} alt={`Slide ${index + 1}`} />
                                <div>
                                    <p className='slide-info-title'>{item.title}</p>
                                </div>
                                <div className="rating">
                                    {Array.from({ length: item.stars }, (_, starIndex) => (
                                        <span key={starIndex} role="img" aria-label="Star">⭐</span>
                                    ))}
                                    <span className='gray-text'>({item.rating})</span>

                                    <span className="gray-text price">{`€${item.prices.min.amount}`}</span>
                                    <span className="black-text price">{`€${item.prices.max.amount}`}</span>

                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel