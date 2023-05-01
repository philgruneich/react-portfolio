import React from 'react';
import { Svg } from './Brand.styles';

export const Brand = ({ fill, ...props }) => (
  <Svg {...props}>
    <g fill={fill}>
      <path d="M251.894 708.306H358.3v91.687H20.505v-135.75c0-21.395 2.815-40.295 8.445-56.702 5.63-16.407 13.592-30.08 23.887-41.018 10.295-10.938 22.6-19.222 36.916-24.852 14.316-5.63 30.16-8.445 47.533-8.445 17.05 0 32.613 2.775 46.688 8.324 14.074 5.55 26.139 13.794 36.192 24.732 10.053 10.938 17.855 24.49 23.404 40.656 5.55 16.166 8.324 34.865 8.324 56.098v45.27zm-149.112 0h68.766v-43.099c0-5.63-.764-10.857-2.292-15.683-1.529-4.826-3.74-8.968-6.636-12.426-2.895-3.458-6.474-6.193-10.737-8.204-4.262-2.01-9.128-3.016-14.597-3.016-5.47 0-10.335 1.006-14.598 3.016-4.262 2.011-7.882 4.746-10.857 8.204-2.976 3.458-5.228 7.6-6.756 12.426-1.528 4.826-2.293 10.053-2.293 15.683v43.1zM138.01 414.998c-16.89-13.512-25.335-33.699-25.335-60.562 0-12.385 2.091-23.806 6.273-34.261 4.183-10.456 10.215-19.464 18.096-27.024 7.882-7.56 17.373-13.472 28.472-17.734 11.099-4.263 23.484-6.394 37.157-6.394H358.3v85.896H229.697c-12.065 0-21.193 2.654-27.386 7.962-6.193 5.309-9.29 12.708-9.29 22.198 0 4.182.684 8.083 2.052 11.702 1.367 3.62 3.579 6.797 6.635 9.531 3.056 2.735 6.917 4.866 11.581 6.394 4.665 1.528 10.295 2.292 16.89 2.292H358.3v85.896H10.373v-85.896H138.01zM358.3 142.35v85.896H119.19V142.35H358.3zM-.004 185.54c0-6.917 1.247-13.392 3.74-19.424 2.494-6.032 5.952-11.26 10.375-15.683 4.424-4.424 9.652-7.882 15.684-10.375 6.032-2.493 12.506-3.74 19.423-3.74 6.917 0 13.391 1.247 19.423 3.74 6.032 2.493 11.26 5.951 15.683 10.375 4.424 4.423 7.882 9.651 10.376 15.683 2.493 6.032 3.74 12.507 3.74 19.423 0 6.917-1.247 13.391-3.74 19.424-2.494 6.032-5.952 11.26-10.376 15.683-4.423 4.423-9.65 7.882-15.683 10.375-6.032 2.493-12.506 3.74-19.423 3.74-6.917 0-13.391-1.247-19.423-3.74-6.032-2.493-11.26-5.952-15.684-10.375-4.423-4.424-7.881-9.651-10.375-15.683-2.493-6.033-3.74-12.507-3.74-19.424zM10.854 85.89V-.006H358.3V85.89z" fillRule="nonzero" />
      <path d="M415.331 499.053V141.756h85.013v357.297z" />
    </g>
  </Svg>
);

Brand.defaultProps = {
  fill: "#fff"
}
