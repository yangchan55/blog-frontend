import React from 'react';
import styled from 'styled-components';

const MaxResponsiveBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  //width: 1024px;
  width: 90%;
  margin: 0 auto; // 중앙 정렬

  // 브라우져 크기에 따라 가로 크기 변경
  /*
  @media (max-width: 1024px) {
    width: 768px;
  }
  */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MaxResponsive = ({ children, ...rest }) => {
  // style, className, onClick, onMouseMove 등의 props를 사용할 수 있도록
  // ...rest를 사용하여 ResponsiveBlock에 전달
  return <MaxResponsiveBlock {...rest}>{children}</MaxResponsiveBlock>;
};

export default MaxResponsive;
