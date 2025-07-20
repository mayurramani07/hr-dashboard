'use client';
import React, { createContext, useContext, useState } from 'react';

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (employee) => {
    const id = employee.id || employee._id || employee.email;

    const exists = bookmarks.some((item) => {
      const itemId = item.id || item._id || item.email;
      return itemId === id;
    });

    if (!exists) {
      setBookmarks((prev) => [...prev, employee]);
    }
  };

  const removeBookmark = (id) => {
    setBookmarks((prev) =>
      prev.filter(
        (item) =>
        item.id !== id && item._id !== id && item.email !== id )
    );
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => useContext(BookmarkContext);
