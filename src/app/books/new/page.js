"use client";

import useFileConvertURI from "@/hooks/useFileConvertURI";

export default function NewBookPage() {
  const fileConvert = useFileConvertURI();

  function onAddBook(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log({
      name: formData.get("bookName"),
      coverImage: fileConvert.dataURI,
    });
  }

  function onFileUpload(e) {
    fileConvert.convertFile(e.currentTarget.files[0]);
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
          <input
            onChange={onFileUpload}
            type="file"
            accept="image/*"
            id="bookCover"
            name="bookCover"
          />
        </div>
        <div>
          <img src={fileConvert.dataURI} height="100" />
        </div>
        <div>
          <input
            type="submit"
            value="Add Book"
            disabled={fileConvert.loading}
          />
        </div>
      </form>
    </main>
  );
}
