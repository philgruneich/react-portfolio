import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';

const CustomCanvas = styled.canvas`
  width: 100%;
  height: 100%;
  background-color: blue;
  flex-grow: 1;
`;

// https://jsfiddle.net/jonathansampson/m7G64/
function throttle (callback, limit) {
  var wait = false;
  return function (...args) {
      if (!wait) {
          callback.call(this, ...args);
          wait = true;
          setTimeout(function () {
              wait = false;
          }, limit);
      }
  }
}

function distanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
}

export default () => {
  const canvasRef = useRef();
  const prevCursor = useRef();
  const [distanceTravelled, setDistanceTravelled] = useState(0);
  const backgroundColor = useRef();
  const [colorIndex, setColorIndex] = useState(0);
  const [strokeColor, setStrokeColor] = useState(
    `rgba(${COLORS[colorIndex][0]}, ${COLORS[colorIndex][1]}, ${COLORS[colorIndex][2]}, 1)`
  );

  const points = useRef([]);
  // const [points, setPoints] = useState([]);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setStrokeColor(`rgba(${COLORS[colorIndex][0]}, ${COLORS[colorIndex][1]}, ${COLORS[colorIndex][2]}, 1)`);
  }, [colorIndex]);

  useEffect(() => {
    canvasRef.current.width = canvasRef.current.clientWidth;
    canvasRef.current.height = canvasRef.current.clientHeight;
  }, []);

  useEffect(() => {
    if (distanceTravelled >= MAX_DISTANCE_TRAVELLED) {
      setTransitioning(true);
    } else if (transitioning) {
      setTransitioning(false);
    }
  }, [distanceTravelled]);

  useEffect(() => {
    if (transitioning) {
      window.requestAnimationFrame(() => paintTheBackground());
    }
  }, [transitioning]);

  const strokeAllThePoints = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (backgroundColor.current) {
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    ctx.lineWidth = ctx.lineWidth * 1.1;
    ctx.lineCap = LINECAP;

    const _points = points.current;

    for (let i = 0; i < _points.length; i++) {
      const coords = _points[i];
      const prevCoords = _points[i - 1];

      if (!coords) {
        continue;
      }

      if (prevCoords) {
        ctx.lineTo(coords.x, coords.y);
      } else {
        ctx.moveTo(coords.x, coords.y);
      }
    }

    ctx.stroke();
  }

  const paintTheBackground = (index = 0) => {
    if (index >= ANIMATION_STEPS) {
      backgroundColor.current = strokeColor;
      points.current = [];
      prevCursor.current = null;

      setColorIndex(currColor => {
        let nextColorIndex = currColor + 1;

        if (!COLORS.hasOwnProperty(nextColorIndex)) {
          nextColorIndex = 0;
        }

        return nextColorIndex;
      });

      setDistanceTravelled(0);
    } else {
      const newIndex = index + 1;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      strokeAllThePoints();

      if (index >= 10) {
        ctx.fillStyle = `rgba(${COLORS[colorIndex][0]}, ${COLORS[colorIndex][1]}, ${COLORS[colorIndex][2]}, ${Math.min((0.05 * index) + 0.05, 1)})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      window.setTimeout(() => {
        window.requestAnimationFrame(() => paintTheBackground(newIndex));
      }, ANIMATION_FRAME_DURATION);
    }
  }

  const onStart = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const cursor = {
      x: offsetX,
      y: offsetY
    }

    prevCursor.current = cursor;

    ctx.moveTo(offsetX, offsetY);
  }

  const onOut = () => {
    points.current = [...points.current, null];
  }

  const onMove = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!transitioning) {
      if (!prevCursor.current) {
        prevCursor.current = {
          x: offsetX,
          y: offsetY
        };
      } else {
        ctx.lineCap = LINECAP;
        ctx.lineWidth = LINEWIDTH;
        ctx.strokeStyle = strokeColor;

        window.requestAnimationFrame(() => {
          ctx.beginPath();
          ctx.moveTo(prevCursor.current.x, prevCursor.current.y);
          ctx.lineTo(offsetX, offsetY);
          ctx.stroke();

          setDistanceTravelled(prevDistance => prevDistance + distanceBetweenPoints(prevCursor.current.x, prevCursor.current.y, offsetX, offsetY));

          prevCursor.current = {
            x: offsetX,
            y: offsetY
          };

          points.current = [...points.current, {...prevCursor.current}]
        });
      }
    }
  }

  const onMouseMoveHandler = useCallback(throttle(onMove, THROTTLE_TIME), [transitioning]);

  return useMemo(() => (
    <CustomCanvas
      ref={canvasRef}
      onMouseEnter={onStart}
      onMouseLeave={onOut}
      onMouseMove={onMouseMoveHandler}
    />), [transitioning]);
}

const ANIMATION_STEPS = 20;
const ANIMATION_FRAME_DURATION = 50;
const THROTTLE_TIME = 10;
const MAX_DISTANCE_TRAVELLED = 1000;
const COLORS = [
  [191, 228, 52],
  [255, 85, 88],
  [0, 189, 112],
  [145, 0, 254],
  [253, 214, 48]
]
// const COLORS = [
//   [219, 184, 46],
//   [242, 228, 218],
//   [29, 144, 118],
//   [104, 167, 182],
//   [109, 158, 235],
//   [234, 175, 161],
//   [248, 248, 111]
// ];
const LINECAP = 'round';
const LINEWIDTH = 100;
