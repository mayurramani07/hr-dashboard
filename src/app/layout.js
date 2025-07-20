import './globals.css';
import { BookmarkProvider } from '@/context/BookmarkContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BookmarkProvider>
          {children}
        </BookmarkProvider>
      </body>
    </html>
  );
}
