import { useState, useCallback } from 'react';

interface PawCursorState {
  x: number;
  y: number;
  isVisible: boolean;
}

export function usePawCursor() {
  const [cursorState, setCursorState] = useState<PawCursorState>({
    x: 0,
    y: 0,
    isVisible: false
  });

  const handleMouseEnter = useCallback((event: React.MouseEvent) => {
    setCursorState({
      x: event.clientX,
      y: event.clientY,
      isVisible: true
    });
  }, []);

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    if (cursorState.isVisible) {
      setCursorState(prev => ({
        ...prev,
        x: event.clientX,
        y: event.clientY
      }));
    }
  }, [cursorState.isVisible]);

  const handleMouseLeave = useCallback(() => {
    setCursorState(prev => ({
      ...prev,
      isVisible: false
    }));
  }, []);

  return {
    cursorState,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave
    }
  };
} 