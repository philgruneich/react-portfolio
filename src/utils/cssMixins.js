export const fluidType = ({ viewportWidth, size }) => {
  const xx = viewportWidth.min / 100 + 'px';
  const yy =
    (100 * Math.abs(size.max - size.min)) /
    Math.abs(viewportWidth.max - viewportWidth.min);
  const zz = size.min / 10 + 'rem';

  return `calc(${zz} + ((1vmin - ${xx}) * ${yy}))`;
}

export const pxToEm = (px, base = 10) => ((px / base) + 'em');

export const pxToRem = (px, base = 10) => ((px / base) + 'rem');
