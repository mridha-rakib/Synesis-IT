import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "~/lib/utils";

//-------------------------------------------
// TODO: must be replaced with real data
//-------------------------------------------

export type User = {
  id: 1;
  firstname: string;
  lastname: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const fetchUsers = async () => {
  return await apiFetch<Array<User>>("/users");
};

const fetchUserById = async (id: number) => {
  return (await apiFetch("/users", { params: { id } })) satisfies User;
};

const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(),
  });
};

const useSingleUser = (id: number) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUserById(id),
  });
};

export { useSingleUser, useUsers };
