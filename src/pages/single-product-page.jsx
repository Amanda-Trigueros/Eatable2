import { useEffect, useState } from "react";
import eatableClient from "../services/eatable-client";
import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import Button from "../components/Button/button";

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const FoodPicture = styled.img`
  filter: drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.2));
  width: 15.0625rem;
  height: 15.0625rem;
  border-radius: 8.125rem;
  margin: auto;
  margin-top: 5.88rem;
  margin-bottom: 5.69rem;
`;

const FoodName = styled.p`
  color: ${colors.pallette.black};
  font-size: 1.75rem;
  font-weight: 600;
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-bottom: 0.62rem;
`;

const FoodPrice = styled.p`
  color: ${colors.pallette.orange};
  font-size: 1.75rem;

  font-weight: 600;
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 0.5rem;
  margin-bottom: 1.56rem;
`;
const FoodDescriptionTitle = styled.p`
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  margin: auto;
  margin-left: 3.31rem;
  margin-right: 4rem;
  margin-bottom: 0.25rem;
`;

const FoodDescription = styled.div`
  display: flex;
  width: 18.5625rem;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 400;
  margin: auto;
  margin-left: 3.31rem;
  margin-right: 4rem;
  
`;

const ButtonContainer = styled.div`
  height: 80px;
  width: 25.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  bottom: 0px;
  z-index: 9999;
  background-color: ${colors.pallette.lightGray};
  margin-top: 5.88rem;
`;

function SingleProduct() {
  const [productId, setProductId] = useState(4);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (id) => {
      setLoading(true);
      try {
        const response = await eatableClient(`/products/${id}`);
        setData(response);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData(productId);
  }, [productId]);

  const capitalizeWords = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Container>
      {loading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <FoodPicture src={data.picture_url} />
          <FoodName>{capitalizeWords(data.name)}</FoodName>
          <FoodPrice>${data.price / 100}</FoodPrice>
          <FoodDescriptionTitle>Description</FoodDescriptionTitle>
          <FoodDescription>{data.description}</FoodDescription>
        </div>
      )}
      <ButtonContainer>
        <Button type="primary" isFullWidth>
          Go Back
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default SingleProduct;
