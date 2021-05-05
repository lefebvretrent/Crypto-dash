import React from "react";
import styled, { css } from "styled-components";

const dashboardStyles = css`
  padding: 0 0 ${(p) => p.theme.lenMd3};
  align-items: flex-start;
  justify-content: flex-start;
`;

const StyledWrapper = styled.div`
  flex: 1 1 auto;
  align-self: stretch;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(p) => p.isDashboard && dashboardStyles};
`;

const Wrapper = ({ children, isDashboard }) => {
  return (
    <StyledWrapper isDashboard={isDashboard}>
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </StyledWrapper>
  );
};

export default Wrapper;
