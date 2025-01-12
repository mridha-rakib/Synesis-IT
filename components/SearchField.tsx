"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { SearchIcon } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";

import { Input } from "./ui/input";

export default function SearchField() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex items-center rounded-lg">
      <Input
        type="text"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
        className="h-10 w-fit min-w-0 rounded-r-none border-none bg-card px-6 !text-xl text-card-foreground outline-2 hover:outline-2 focus-visible:ring-0 md:w-96"
      />
      <SearchIcon className="absolute right-3 top-1/2 size-5 -translate-y-1/2 transform text-muted-foreground" />
    </div>
  );
}
