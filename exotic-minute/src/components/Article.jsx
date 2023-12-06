import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const Articles = () => {
  const [articles, setArticles] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`https://ash-medicine-api.onrender.com/articles`)
      .then((res) => {
        console.log(res);
        setArticles(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  const shuffledArticles = shuffleArray(articles);
  const selectedArticles = shuffledArticles.slice(0, 3);

  if(loading){
    return <div style={{height:"200px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset" }}><h1 style={{color:"blue"}}>Articles Loading...</h1></div>
  }

  return (
    <ARTICLES>
      {selectedArticles.map((article) => (
        <ARTICLECARD key={article.id}>
          {/* Render your article details here */}
          <img src={article.image} />
          <div>
            <h4>{article.title}</h4>
            <p>{article.article}</p>
            <Link to={article.link} target="_blank" className="article-link">
              {" "}
              <Button className="btn">Visit Article</Button>
            </Link>
          </div>
        </ARTICLECARD>
      ))}
    </ARTICLES>
  );
};

const ARTICLES = styled.div`
  margin-top: 3rem;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  text-align: left;
  @media screen and (max-width:1050px){
    gap:1rem;
  }
  @media screen and (max-width:650px){
    grid-template-columns:1fr;
  }

`;

const ARTICLECARD = styled.div`
width: 80%;
margin:auto;
box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #dbf0f7;
    color: #595757;
  }
  img {
    object-fit: cover;
    max-height: 350px;
    width: 90%;
    margin: 1rem auto;
    border-radius: 1rem;
  }
  h4 {
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }
  p {
    opacity: 0.75;
    margin-bottom: 1rem;
  }
  > div {
    padding: 1rem;
  }
  .btn {
        background-color: #2884da;
        color: white;
        font-weight: 500;
        padding: 7px 10px;
        border-radius: 5px;
        margin-top: 7px;
    }
    .btn:hover {
        background-color: #174671;
    }
  // Define your styles for the article card here
`;