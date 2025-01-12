"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "~/lib/get-query-client";

function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default Providers;