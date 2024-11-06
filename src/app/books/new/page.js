"use client";

import useFileConvertURI from "@/hooks/useFileConvertURI";

export default function NewBookPage() {
  const fileConvert = useFileConvertURI();

  function onAddBook(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log("formData", formData.get("bookCover"));
  }

  console.log(fileConvert);

  return (
    <main>
      <h1>New Book</h1>

      <form onSubmit={onAddBook}>
        <div>
          <label htmlFor="bookName">Name:</label>
          <input type="text" id="bookName" name="bookName" />
        </div>
        <div>
          <label htmlFor="bookCover">Cover Image:</label>
          <input type="file" accept="image/*" id="bookCover" name="bookCover" />
        </div>
        <div>
          <input type="submit" value="Add Book" />
        </div>
      </form>
    </main>
  );
}
