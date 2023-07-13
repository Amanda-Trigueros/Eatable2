import { useEffect, useState } from "react";
import eatableClient from "../services/eatable-client";
import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import Button from "../components/Button/button";

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const PageTitle = styled.h1`
  font-size: 1.375rem;
  font-weight: 600;
  color: ${colors.pallette.black};
  margin: 3rem 3rem 0rem;
  display: flex;
  justify-content: center;
`;

const CardsCointainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  padding: 1.25rem;
`;

const FoodCard = styled.div`
  width: 9.75rem;
  background-color: ${colors.white};
  border-radius: 1.875rem;
  box-shadow: 0px 30px 60px 0px rgba(57, 57, 57, 0.1);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1px;
  margin: 0.81rem;
`;

const FoodPicture = styled.img`
  filter: drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.2));
  width: 8.125rem;
  height: 8.125rem;
  border-radius: 8.125rem;
  margin: auto;
`;

const FoodName = styled.p`
  color: ${colors.pallette.black};
  font-size: 1.375rem;
  font-weight: 600;
  display: flex;
  text-align: center;
  flex-direction: column;
`;

const FoodPrice = styled.p`
  color: ${colors.pallette.orange};
  font-size: 1.375rem;
  font-weight: 600;
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 0.5rem;
`;

function Products() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await eatableClient("/products");
        setData(response);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return(
    <Container>
      <PageTitle>Products Dashboard </PageTitle>

      {loading && <p>Loading data...</p>}

      {error && <p>Error: {error}</p>}
      

      {data && (
        <CardsCointainer>
          {data.map((product) => (
            <FoodCard key={product.id}>
              <FoodPicture src={product.picture_url} />
              <FoodName>{product.name}</FoodName>
              <FoodPrice>${product.price / 100}</FoodPrice>
            </FoodCard>
          ))}
        </CardsCointainer>
      )}

      <Button className="fixed" type={"primary"} isFullWidth > Create Product </Button>
      
    </Container>
  )
}

export default Products;
