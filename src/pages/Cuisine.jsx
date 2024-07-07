import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  const getCuisine = async (name) => {
    try {
      const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&cuisine=${name}`);
      const data = await api.json();
      console.log(data.results);
      setCuisine(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <AnimatePresence>
      <Grid
        variants={containerVariants} 
        initial="initial"
        animate="animate"
        exit="exit"
        key={params.type} 
      >
        {cuisine.map((item) => (
          <Card key={item.id} variants={cardVariants}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        ))}
      </Grid>
    </AnimatePresence>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;

  @media (max-width: 390px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;

const Card = styled(motion.div)`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }

  @media (max-width: 390px) {
    h4 {
      font-size: 0.8rem;
    }
  }
`;

export default Cuisine;
