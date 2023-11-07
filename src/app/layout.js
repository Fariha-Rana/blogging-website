// "use client";
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar';
import AuthProvider from '@/context/authContext';
const inter = Inter({ subsets: ['latin'] })
import Footer from '@/components/Footer';

export const metadata = {
  title : "JavaScriptGuru",
  description: "find topics about JavaScript"
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-violet-200 to-blue-200`}>
      <AuthProvider>
      <Navbar/>
      {children}
      </AuthProvider>
      <Footer/>
      </body>
    </html>
  )
}
