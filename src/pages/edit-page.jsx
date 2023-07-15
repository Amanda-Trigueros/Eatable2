import Input from "../components/Input";
import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import Button from "../components/Button/button";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProduct, updateProduct } from "../services/products-service";
import eatableClient from "../services/eatable-client";

const PageTitle = styled.h1`
  font-size: 1.375rem;
  font-weight: 600;
  color: ${colors.pallette.black};
  margin: 3rem 3rem 0rem;
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form`
  width: 21.875rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 80vh;
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ContainerForm = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  height: 80px;
  width: 25.875rem;
  justify-content: center;
  bottom: 0px;
  background-color: ${colors.pallette.lightGray};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
  text-align: center;

  font-size: 1.125rem;
  font-weight: 600;
`;

function EditProduct() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProduct(id);
        setProduct(response);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);
  console.log(product);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, price, category, description, picture_url } =
      e.target.elements;
    const updatedProduct = {
      name: name.value,
      price: price.value,
      category: category.value,
      description: description.value,
      picture_url: picture_url.value,
    };
    try {
      await updateProduct(id, updatedProduct);
      console.log("Product updated successfully.");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <PageTitle>Edit Product </PageTitle>
      <ContainerForm>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInputContainer>
            <Input
              label={"Name"}
              type="text"
              name={"name"}
              value={product.name}
              onChange={handleChange}

            />
            <Input
              label={"Price"}
              type="number"
              name={"price"}
              value={product.price}
              onChange={handleChange}
            />
            <Input
              label={"Category"}
              name={"category"}
              value={product.category}
              onChange={handleChange}
            />
            <Input
              label={"Description"}
              type="text"
              name={"description"}
              value={product.description}
              onChange={handleChange}
            />
            <Input
              label={"Picture URL"}
              name={"picture_url"}
              value={product.picture_url}
              onChange={handleChange}
            />
          </StyledInputContainer>
          <ButtonContainer>
            <Button type={"primary"} isFullWidth>
              Save
            </Button>
          </ButtonContainer>
        </StyledForm>
      </ContainerForm>
    </div>
  );
}

export default EditProduct;
