import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  border: none;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  border-radius: 1px;
  padding-left: var(--height);
  font-size: var(--fontSize);
  line-height: ${16 / 16}rem;
  font-weight: 700;
  color: inherit;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 2px;
  }
`;

const Label = styled.label`
  position: relative;
  display: block;

  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const SIZES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    height: 24,
    borderThickness: 1,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    height: 32,
    borderThickness: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];

  return (
    <Label>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} strokeWidth={1} size={styles.iconSize} />
      </IconWrapper>
      <TextInput
        type="text"
        placeholder={placeholder}
        style={{
          "--width": width + "px",
          "--height": styles.height / 16 + "rem",
          "--fontSize": styles.fontSize / 16 + "rem",
          "--borderThickness": styles.borderThickness + "px",
        }}
      />
    </Label>
  );
};

export default IconInput;
