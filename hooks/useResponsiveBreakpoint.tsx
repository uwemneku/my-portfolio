import React, { useEffect, useState } from "react";

export default function useResponsiveBreakpoint() {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    setWidth(window.outerWidth);
  }, []);
  return width < 480 ? "mobile" : width < 768 ? "tablet" : "desktop";
}
