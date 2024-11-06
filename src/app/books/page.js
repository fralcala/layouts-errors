"use client";

import Link from "next/link";

export default function BooksPage() {
  return (
    <main>
      <h1>Books</h1>
      <Link href="/books/new">Add New Book</Link>
    </main>
  );
}
