import { useState } from "react";
import Input from "../components/Input";
import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import Button from "../components/Button/button";

const PageTitle = styled.h1`
  font-size: 1.375rem;
  font-weight: 600;
  color: ${colors.pallette.black};
  margin: 3rem 3rem 0rem;
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 55vh;
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

function CreateProduct() {
  const { create } = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const { name, price, description, picture } = e.target.elements;
    const credentials = {
      name: name.value,
      price: price.value,
      description: description.value,
      picture: picture.value,
    };
    create(credentials);
  }

  return (
    <div>
      <PageTitle>Create Product </PageTitle>
      <ContainerForm>
        <StyledForm onSubmit={handleSubmit}>
          <div>
            <Input label={"Name"} name={"name"}></Input>
            <br />
            <Input label={"Price"} name={"price"}></Input>
            <br />
            <Input label={"Description"} name={"description"}></Input>
            <br />
            <Input label={"Picture URL"} name={"Picture"}></Input>
            <br />
          </div>
        </StyledForm>
        <ButtonContainer>
          <Button type={"primary"} isFullWidth>
            Create
          </Button>
        </ButtonContainer>
      </ContainerForm>
    </div>
  );
}

export default CreateProduct;
