'use client'
import 'reflect-metadata';
import './globals.css';
import styles from './page.module.css'
import WebsiteLayout from './websiteLayout';

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={styles.html}>
      <body className={styles.body}>
        <WebsiteLayout children={children}></WebsiteLayout>
      </body>
    </html>
  )
}
