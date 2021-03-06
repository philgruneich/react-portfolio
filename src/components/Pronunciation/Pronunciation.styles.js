import styled from 'styled-components';

export const PronunciationButton = styled.button.attrs({
  type: 'button'
})`
  appearance: none;
  display: inline;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: none;
  color: inherit;
  font-weight: bold;
  font-size: inherit;
  line-height: 1;
  vertical-align: bottom;
`;

export const PronunciationSvg = styled.svg.attrs({
  viewBox: "0 0 49 49",
  xmlns: "http://www.w3.org/2000/svg"
})`
  width: 1.4681em;
  height: 1.4681em;
`;

export const PronunciationPath = styled.path.attrs({
  d: 'M34.112 38.514l-15.425-2.283-6.146 3.548-7.617-13.194 6.138-3.543L16.72 8.389l17.392 30.125zM13.48 25.108l-4.457 2.574 4.616 7.996 4.45-2.57 10.32 1.53-11.153-19.316c-1.259 3.263-2.516 6.526-3.776 9.786zM28.98 8.368c7.962.133 14.724 8.632 12.477 16.63-.895 3.189-3.026 5.975-5.91 7.715l-1.432.839-1.516-2.59c5.236-3.066 8.062-9.689 4.794-14.883-2.71-4.306-8.834-5.985-13.47-3.424l-1.427.811-1.483-2.607 1.442-.82c2.022-1.117 3.93-1.682 6.524-1.67zm-.055 5.795c6.032.1 10.28 9.572 3.66 13.568l-1.369.8-1.517-2.588c.922-.538 1.906-1.017 2.549-1.848 2.288-2.953-1.401-8.643-5.493-6.382l-1.361.773-1.483-2.608c1.576-.896 3.216-1.722 5.014-1.715z'
})`
  fill: ${props => props.theme.green};

  ${props => props.hasHighContrast && `
    fill: green;
  `}
`;
