import { UserProps } from "../../types/user";

export type FilterSortProps = {
  onFilter: (query: string) => void;
  onSort: (key: keyof UserProps, ascending: boolean) => void;
}