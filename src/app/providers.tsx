"use client";

import { useRef, useLayoutEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import SSRProvider from "react-bootstrap/SSRProvider";
import { ThemeProvider } from "react-bootstrap";
import { AppProvider } from "@/context/AppProvider";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  const pathname = usePathname();
  const layoutRef = useRef<null | HTMLBodyElement>(null);

  useLayoutEffect(() => {
    if (!layoutRef.current) return;
    layoutRef.current.classList.add("fade-in");

    setTimeout(() => {
      if (layoutRef.current?.classList.contains("fade-in")) {
        layoutRef.current.classList.remove("fade-in");
      }
    }, 510);
  }, [pathname]);

  return (
    <body ref={layoutRef}>
      <AppProvider>
        <ThemeProvider dir="ltr">
          <SSRProvider>{children}</SSRProvider>
        </ThemeProvider>
      </AppProvider>
    </body>
  );
};

export default Providers;
