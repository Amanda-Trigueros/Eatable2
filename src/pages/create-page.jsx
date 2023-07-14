import Input from "../components/Input";
import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import Button from "../components/Button/button";
import { createProduct } from "../services/products-service";
import { Link } from "react-router-dom";

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

function CreateProduct() {
  async function handleSubmit(e) {
    e.preventDefault();
    const { name, price, category, description,  picture_url } = e.target.elements;

   
    const productData = {
      name: name.value,
      price: price.value,
      category: category.value,
      description: description.value,
      picture_url: picture_url.value,
    };

    console.log(productData)

     try {
       const response = await createProduct(productData);
       console.log("Product created successfully:", response);
     } catch (error) {
       console.error("Error creating product:", error.message);
     }
  }

  return (
    <div>
      <PageTitle>Create Product </PageTitle>
      <ContainerForm>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInputContainer>
            <Input label={"Name"} type="text" name={"name"}></Input>
            <Input label={"Price"} type="number" name={"price"}></Input>
            <Input label={"Category"} name={"category"}></Input>
            <Input
              label={"Description"}
              type="text"
              name={"description"}
            ></Input>
            <Input label={"Picture URL"} name={"picture_url"}></Input>
          </StyledInputContainer>
          <ButtonContainer>
            <Button type={"primary"} isFullWidth>
              Create
            </Button>
          </ButtonContainer>
        </StyledForm>
      </ContainerForm>
    </div>
  );
}

export default CreateProduct;
