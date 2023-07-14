import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Button from "../components/Button/button";
import { colors } from "../styles/colors";
import { getProduct } from "../services/products-service";

const DeleteContainer = styled.div`
  display: flex;
  width: 18.8125rem;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 1.25rem;
  background: var(--light-gray, #f6f6f9);

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${colors.pallette.black};
  }
`;

const DeleteTitle = styled.h1`
  font-size: 1.375rem;
  font-weight: 600;
`;

function DeleteProduct({ id, onNoClick, onYesClick }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productId, setProductId] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getProduct(id);
        setProductId(response)
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <DeleteContainer>
        <DeleteTitle>Are you sure?</DeleteTitle>
        <Button type={"primary"} size={"lg"} onClick={onYesClick}>
          Yes, delete it!
        </Button>
        <Button type={"secondary"} size={"lg"} onClick={onNoClick}>
          No, cancel!
        </Button>
      </DeleteContainer>
    </div>
  );
}

export default DeleteProduct;
