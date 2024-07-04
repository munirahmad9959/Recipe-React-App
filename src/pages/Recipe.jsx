import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Recipe = () => {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_API_KEY}`);
        const data = await api.json();
        console.log(data)
        setDetails(data);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    return (
        <DetailedWrapper>
            <ImageWrapper>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </ImageWrapper>
            <Info>
                <ButtonWrapper>
                    <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>
                        Instructions
                    </Button>
                    <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>
                        Ingredients
                    </Button>
                </ButtonWrapper>

                {activeTab === 'instructions' ? (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3></div>
                ) : <ul>
                    {details.extendedIngredients.map((ingredient) => {
                        return (<li key={ingredient.id}>{ingredient.original}</li>)
                    })}
                </ul>}

            </Info>
        </DetailedWrapper >
    );
};

const DetailedWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  gap: 2rem;
`;

const ImageWrapper = styled.div`
  width: 40%;

  img {
    width: 100%;
    border-radius: 8px;
  }

  h2 {
    margin-bottom: 2rem;
  }
`;

const ButtonWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  font-weight: 600;
  cursor: pointer;

  &.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-left: 4rem;

  h3 {
    font-size: 16px;
    line-height: 1.5rem;
    margin-top: 0;
  }

  li{
    line-height: 1.5rem;
  }
`;

export default Recipe;
