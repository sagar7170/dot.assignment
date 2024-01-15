"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from 'react-redux'
import { reduxstore } from './redux/Store'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Provider store={reduxstore}>
        <body className={inter.className}>{children}</body>
    </Provider>
      </html>
  )
}