import { useMemo } from "react";

export default function useFilteredUsers(users, search, filters, visibleCount = 10) {
  const filtered = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.fullName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.department.toLowerCase().includes(search.toLowerCase());

      const matchesDepartment =
        filters.department.length === 0 ||
        filters.department.includes(user.department);

      return matchesSearch && matchesDepartment;
    });
  }, [users, search, filters]);

  return filtered.slice(0, visibleCount);
}
