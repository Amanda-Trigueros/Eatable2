import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

function typeStyles(type) {
  switch (type) {
    case "primary":
      return `
        background-color: ${colors.pallette.orange};
        color: ${colors.white};
        &:hover {
          background-color: ${colors.orange[700]};
        }
        &:active {
          background-color: ${colors.orange[800]};
        }
        &:focus {
          outline: 2px solid ${colors.orange[800]};
        }
      `;

    case "secondary":
      return `
        background-color: ${colors.pallette.yellow};
        color: ${colors.white};
        &:hover {
          background-color: ${colors.yellow[600]};
        }
        &:active {
          background-color: ${colors.yellow[700]};
        }
        &:focus {
          outline: 2px solid ${colors.yellow[700]};
        }
      `;

    default:
      break;
  }
}

function sizeStyles(size, rounded) {
  switch (size) {
    case "sm":
      return `
        padding: 0.5rem ${rounded ? "" : "0.75rem"};
        ${typography.text.sm}
        line-height: 1em;
      `;

    case "lg":
      return `
          padding: 0.875rem ${rounded ? "" : "1.5rem"};
          ${typography.text.lg}
          line-height: 1em;
          width: 16.375rem;
        `;

    default:
      break;
  }
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: ${colors.gray[200]};
  color: ${colors.gray[900]};
  border: none;
  ${typography.text.md}
  line-height: 2em;
  cursor: pointer;

  width: ${({ isFullWidth }) => (isFullWidth ? "19.375rem" : "fit-content")};
  padding: 0.75rem ${({ rounded }) => (rounded ? "0.75rem" : "1rem")};
  border-radius: ${({ rounded }) => (rounded ? "999px" : "1.875rem")};

  &:hover {
    background-color: ${colors.orange[300]};
  }
  &:active {
    background-color: ${colors.orange[400]};
  }
  &:focus {
    outline: 2px solid ${colors.orange[400]};
  }
  &:disabled {
    opacity: 60%;
    cursor: not-allowed;
  }

  

  ${(props) => typeStyles(props.type)}
  ${(props) => sizeStyles(props.size, props.rounded)}
`;

function Button({ icon, children, ...props }) {
  return (
    <StyledButton {...props}>
      {icon}
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  icon: PropTypes.element,
  isFullWidth: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
};

export default Button;
