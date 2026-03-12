import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">VibeTin Dashboard</h1>
      <nav>
        <Link href="/admin/posts" className="text-blue-500 hover:underline">Manage Posts</Link>
      </nav>
    </div>
  );
}
