import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Chào mừng đến với VibeTin!</h1>
        <p className="text-lg text-gray-600">Khám phá nội dung thú vị mỗi ngày.</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Post List will go here in next task */}
        <div className="p-4 border rounded shadow">Chưa có bài viết nào.</div>
      </section>
    </main>
  );
}
