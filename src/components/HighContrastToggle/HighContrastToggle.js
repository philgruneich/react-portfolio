import React, { useContext } from 'react';
import { HighContrastContext } from '~/store/HighContrastStore';
import styled from 'styled-components';

export const HighContrastToggle = () => {
  const contrastContext = useContext(HighContrastContext);

  const onToggleHandler = event => {
    event.preventDefault();

    contrastContext.toggle();
  }

  return (
    <HighContrastButton
      isActive={contrastContext.state}
      aria-pressed={contrastContext.state}
      onClick={onToggleHandler}
    >
      <svg width="26" height="16" viewBox="0 0 26 16" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M13.09 0c5.086.072 10.754 2.187 12.493 6.575 1.391 3.51-3.194 7.193-6.96 8.473-.816.277-1.655.488-2.504.636C10.35 16.687 3.265 15.382.44 9.872-1.9 5.306 5.491-.036 13.09 0zm-.36 2C8.563 2.06 3.844 3.57 2.165 7.104c-1.516 3.192 5.457 6.85 10.734 6.85.913 0 1.826-.068 2.727-.216 3.404-.557 7.042-2.437 8.097-5.096C24.951 5.545 18.421 1.974 12.73 2z" /><path d="M13.028 2.978c4.308.165 7.009 7.409 1.818 9.606C11.279 14.093 6.373 10 8.394 5.809c.843-1.75 2.418-2.858 4.634-2.83zm-.206 2c-2.604.099-4.177 4.457-1.089 5.763 1.93.817 4.53-1 4.12-3.295-.254-1.422-1.431-2.488-3.031-2.468z" /></g></svg>
    </HighContrastButton>
  )
}

const HighContrastButton = styled.button.attrs({
  type: 'button',
  'aria-label': 'Alto Contraste'
})`
  appearance: none;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: none;
  color: #fff;
  cursor: pointer;

  ${props => props.isActive && `
    color: green;
  `}
`;
