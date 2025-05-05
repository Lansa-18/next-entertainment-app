"use client";
import { debounce } from "lodash";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState, useTransition } from "react";
import SearchInputField from "./SearchInputField";
import { searchMovies } from "../_lib/action";
import { SearchContainerProps } from "@/lib/types";

export default function SearchContainer({
  placeholder,
  typeOfMovie,
  onSearchMovies,
  setIsLoading,
}: SearchContainerProps) {
  const router = useRouter();
  const pathName = usePathname();
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") || "");

  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set("q", value);
      } else {
        params.delete("q");
      }
      return params.toString();
    },
    [searchParams],
  );

  const debouncedUpdateQuery = useCallback(
    debounce(async (value: string) => {
      try {
        setIsLoading(true);
        const { data } = await searchMovies(value, typeOfMovie);
        console.log(data);
        if (data) {
          onSearchMovies(data);
        }
        startTransition(() => {
          router.push(`${pathName}?${createQueryString(value)}`, {
            scroll: false,
          });
        });
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setIsLoading(false);
      }
    }, 300),
    [typeOfMovie, pathName, createQueryString, router],
  );

  // Cleanup debounced function on unmount
  useEffect(() => {
    return () => {
      debouncedUpdateQuery.cancel();
    };
  }, [debouncedUpdateQuery]);

  const handleSearch = (value: string) => {
    setValue(value);
    debouncedUpdateQuery(value);
  };

  return (
    <SearchInputField
      value={value}
      onChange={handleSearch}
      placeHolderText={placeholder}
    />
  );
}
