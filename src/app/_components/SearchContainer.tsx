"use client";
import { SearchContainerProps } from "@/lib/types";
import { debounce } from "lodash";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useTransition } from "react";
import { useSearchMovies } from "../_context/SearchMoviesContext";
import SearchInputField from "./SearchInputField";
import { searchForMovies } from "../_lib/api";

export default function SearchContainer({
  placeholder,
  typeOfMovie,
  onSearchMovies,
  setIsLoading,
}: SearchContainerProps) {
  const router = useRouter();
  const pathName = usePathname();
  const [isPending, startTransition] = useTransition();
  const {searchParams, searchInputValue, setSearchInputValue} = useSearchMovies();
  // const searchParams = useSearchParams();
  // const [value, setValue] = useState(searchParams.get("q") || "");

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
        const data = await searchForMovies(value, typeOfMovie);
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
    }, 500),
    [typeOfMovie, pathName, createQueryString, router],
  );

  // Cleanup debounced function on unmount
  useEffect(() => {
    return () => {
      debouncedUpdateQuery.cancel();
    };
  }, [debouncedUpdateQuery]);

  const handleSearch = (value: string) => {
    setSearchInputValue(value);
    debouncedUpdateQuery(value);
  };

  return (
    <SearchInputField
      value={searchInputValue}
      onChange={handleSearch}
      placeHolderText={placeholder}
    />
  );
}
