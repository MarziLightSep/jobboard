export default async function TestFetch() {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users?_limit=5",
    );
    const users = await res.json();
    console.log(users);

    return (
      <main className="p-4">
        <h1 className="text-xl font-bold mb-4">Test users</h1>
        <ul className="flex flex-col gap-2">
          {users.map((user) => (
            <li key={user.id} className="border p-3 rounded">
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </li>
          ))}
        </ul>
      </main>
    );
}