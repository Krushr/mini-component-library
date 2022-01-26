/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div`
  padding: var(--padding);
  border-radius: var(--radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* cutoff corners when progress bar approaching end */
  overflow: hidden;
`;
const Bar = styled.div`
  height: var(--height);
  width: var(--width);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

const SIZES = {
  small: {
    height: "8px",
    padding: "0px",
    radius: "4px",
  },
  medium: {
    height: "12px",
    padding: "0px",
    radius: "4px",
  },
  large: {
    height: "16px",
    padding: "4px",
    radius: "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw Error(`Invalid size for ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ "--padding": styles.padding, "--radius": styles.radius }}
    >
      <VisuallyHidden>{value} %</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{ "--width": value + "%", "--height": styles.height }}
          value={value}
        />
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
