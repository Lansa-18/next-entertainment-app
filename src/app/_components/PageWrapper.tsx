'use client';

import React, { PropsWithChildren } from "react";
import { SearchMoviesProvider } from "../_context/SearchMoviesContext";

export default function PageWrapper({ children }: PropsWithChildren) {
  return <SearchMoviesProvider>{children}</SearchMoviesProvider>;
}
