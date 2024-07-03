import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";

const Veggies = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem('veggie');

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      try {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9&tags=vegetarian`);
        const data = await api.json();
        localStorage.setItem('veggie', JSON.stringify(data.recipes));
        setVeggie(data.recipes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  return (
    <Wrapper>
      <h3>Our Vegetarian Picks</h3>
      <Splide options={{
                perPage: 4,
                perMove: 1,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '2rem',
                breakpoints: {
                    1200: {
                        perPage: 2,
                        gap: '1.5rem',
                    },
                    800: {
                        perPage: 1,
                        gap: '1rem',
                    },
                    600: {
                        perPage: 1,
                        gap: '0.5rem',
                    },
                },
            }}>
        {veggie.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <Gradient />
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0;
`;

const Card = styled.div`
  height: 13rem;
  width: 13rem;
  overflow: hidden;
  position: relative;
  border-radius: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
    position: absolute;
  }

  p {
    position: absolute;
    left: 50%;
    bottom: 10%;
    z-index: 10;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }`;

const Gradient = styled.div`
  background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
`;

export default Veggies;
