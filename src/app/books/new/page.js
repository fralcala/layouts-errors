"use client";

export default function NewBookPage() {
  function onAddBook(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log("formData", formData.get("bookCover"));
  }

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
