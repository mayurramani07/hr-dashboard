export const mockEmployeeData = [
  { name: 'Alice', department: 'Engineering', rating: 4.2 },
  { name: 'Bob', department: 'Sales', rating: 3.9 },
  { name: 'Charlie', department: 'HR', rating: 4.5 },
  { name: 'David', department: 'Engineering', rating: 4.0 },
  { name: 'Eva', department: 'Sales', rating: 4.3 },
  { name: 'Fay', department: 'HR', rating: 3.8 },
];

export const mockBookmarkTrend = [
  { date: '2025-07-01', count: 5 },
  { date: '2025-07-05', count: 12 },
  { date: '2025-07-10', count: 7 },
  { date: '2025-07-15', count: 18 },
];

export function getDepartmentAverageRatings(data) {
  const deptMap = {};

  data.forEach(({ department, rating }) => {
    if (!deptMap[department]) deptMap[department] = [];
    deptMap[department].push(rating);
  });

  return Object.entries(deptMap).map(([dept, ratings]) => ({
    department: dept,
    avgRating:
      ratings.reduce((sum, r) => sum + r, 0) / ratings.length,
  }));
}
