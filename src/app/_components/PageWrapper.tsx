"use client";

import React, { PropsWithChildren } from "react";
import { SearchMoviesProvider } from "../_context/SearchMoviesContext";
import { BookmarkedMoviesProvider } from "../_context/BookmarkedMoviesContext";

export default function PageWrapper({ children }: PropsWithChildren) {
  return (
    <SearchMoviesProvider>
      <BookmarkedMoviesProvider>{children}</BookmarkedMoviesProvider>
    </SearchMoviesProvider>
  );
}
