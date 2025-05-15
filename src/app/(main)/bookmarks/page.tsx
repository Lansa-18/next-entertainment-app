"use client";

import PageWrapper from "../../_components/PageWrapper";
import BookmarkPage from "../../pages/BookmarkPage";
import { useEffect } from "react";

export default function Page() {
  // Forces re-render when this page is active.
  useEffect(() => {}, []);

  return (
    <PageWrapper>
      <BookmarkPage />
    </PageWrapper>
  );
}
