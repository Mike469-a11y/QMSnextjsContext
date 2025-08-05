import './globals.css';
import { GlobalProvider } from '../context/GlobalContext';
import QueryProvider from '../lib/QueryProvider';
import GlobalLoader from '../components/GlobalLoader';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'QMS2 - Quality Management System',
  description: 'Quality Management System with Next.js App Router',
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <GlobalProvider>
            <div className="container">
              <Sidebar />
              <main className="main-content">
                {children}
              </main>
            </div>
            <GlobalLoader />
          </GlobalProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

export default RootLayout;