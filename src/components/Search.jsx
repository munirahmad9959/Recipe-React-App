import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {

    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input )
    }

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input onChange={(e) => { setInput(e.target.value) }} type="text" value={input} />
            </div>
        </FormStyle>
    );
};

const FormStyle = styled.form`
  margin: 0rem 10rem;
  
  div {
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 1rem; /* Adjusted to position inside input */
    transform: translate(0, -50%);
    color: white;
  }
`;

export default Search;
