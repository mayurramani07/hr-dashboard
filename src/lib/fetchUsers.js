export async function fetchUsers() {
  const res = await fetch('https://dummyjson.com/users?limit=20');
  const data = await res.json();

  const departments = ['Engineering', 'HR', 'Design', 'Marketing', 'Sales'];

  const users = data.users.map(user => ({
    id: user.id,
    fullName: `${user.firstName} ${user.lastName}`,
    email: user.email,
    age: user.age,
    department: departments[Math.floor(Math.random() * departments.length)],
    performanceRating: Math.floor(Math.random() * 5) + 1,
  }));

  return users;
}
