import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const StyledInput = styled("input")`
  background-color: ${colors.pallette.lightGray};
  border: none;
  border-bottom: 1px solid ${colors.pallette.black};
  display: block;
  padding: 0.25rem 0;
  font-size: 1.125rem;
  width: 21.875rem;
  margin-bottom: 1rem;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const StyledLabel = styled.label`
  color: ${colors.pallette.gray};
  font-weight: 600;
  font-size: 0.875rem;
`;
