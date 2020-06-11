import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useScrollPosition } from '~/hooks/useScrollPosition';
import { WorkListItem as ListItem } from './WorkListItem.styles';

const PositionStore = () => {
  const [renderCount, triggerReRender] = useState(0);
  const elementPosition = useRef({ x: 0, y: 0 });
  let throttleTimeout = null

  const getPos = (el, axis) => Math.round(el.current[axis])

  const setPos = (el, pos) => {
    el.current = pos;
    if (throttleTimeout !== null) return;
    // Only re-render the component every 0.3s
    throttleTimeout = setTimeout(() => triggerReRender(renderCount + 1), 20);
  }

  return {
    getElementX: () => getPos(elementPosition, 'x'),
    getElementY: () => getPos(elementPosition, 'y'),
    setElementPosition: pos => setPos(elementPosition, pos),
    renderCount
  }
}

// matrix3d(
//  0.99981, 0, -0.01955, 0,
//  0, 1, 0, 0,
//  0.01955, 0, 0.99981, 0,
//  0, -984, 0, 1
//  )

// 0.99968, 0, -0.02513, 0, 0, 1, 0, 0, 0.02513, 0, 0.99968, 0, 0, 0, 0, 1
// 0.92132, 0, 0.3888, 0, 0, 1, 0, 0, -0.3888, 0, 0.92132, 0, 0, 0, 0, 1

function calculateMatrix(y, height) {
  let v1 = 1 - (y/height) * 0.751275;
  let v2 = (y/height) / 1.65886221325259;

  return `matrix3d(
    ${v1}, 0, ${-v2}, 0,
    0, 1, 0, 0,
    ${v2}, 0, ${v1}, 0,
    0, 0, 0, 1
  )`;
}

export const WorkListItem = ({ children, ...props}) => {
  const positionsStore = PositionStore();
  const ListItemRef = useRef();
  const windowHeightRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      windowHeightRef.current = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useScrollPosition(
    ({ currPos }) => positionsStore.setElementPosition(currPos),
    [positionsStore],
    ListItemRef,
    false,
    20
  );

  return useMemo(() => (
    <ListItem
      ref={ListItemRef}
      style={{
        transform: calculateMatrix(
          positionsStore.getElementY(),
          windowHeightRef.current
        )
      }}
      {...props}>
      {children}
    </ListItem>
  ),
  [positionsStore])
}
