import React from 'react';
import styled from 'styled-components';

import {
  baseColor,
  white,
} from 'variables';

export const LogoContainer = styled.div`
  width: 60px;
  height: 60px;
  padding-right: 20px;
  box-sizing: content-box;
`;

export const NameContainer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const Logo = () => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000">
    <path d="M500,10C367,173.8,317.1,228.9,282.6,268.6C215,349.5,31.5,486.9,31.5,634.4c0,169.7,181,192,234.3,192c53.3,0,208.9-34.3,208.9-103.1c0,64.7-40.4,257.1-105.1,266.7c121.2,0,272.8,0,272.8,0s-101-84.9-101-266.7c0,56.4,145.5,101,222.3,101s205-66.7,205-192c0-138.2-137.3-259.3-247.4-361.7C605.5,163.2,500,10,500,10z" />
  </svg>
);

export const LogoName = () => (
  <NameContainer>
    <span style={{ color: baseColor }}>ACE</span>
    <span style={{ color: white }}>BUSTERS</span>
  </NameContainer>
);
