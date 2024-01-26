import { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const apiUrl = process.env.REACT_APP_API_URL;

      const fetchData = async () => {
        try {
            const response = await axios.get(apiUrl);
            const fetchedProducts = response.data.products.nodes;
            setProducts(fetchedProducts);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, []);

    const calculateStars = (tags) => {

      if (!Array.isArray(tags) || tags.length === 0) {
        return 0;
      }
      const numericTags = tags.filter((tag) => !isNaN(tag));


      if (numericTags.length === 0) {
        return 0;
      }

      const average =
        numericTags.reduce((sum, tag) => sum + parseFloat(tag), 0) / numericTags.length;

      if (average <= 100) {

        return 1;
      } else if (average <= 200) {
        return 2;
      } else if (average <= 300) {
        return 3;
      } else if (average <= 400) {
        return 4;
      } else {
        return 5;
      }

    };


    const carouselData = products.map((product) => ({
        title: product.title,
        imageUrl: product.featuredImage.url,
        stars: calculateStars(product.tags),
        rating: product.tags[0],
        prices: product.prices,
      }));
    return {carouselData};

  };

export default Products;
