import './globals.css'

export const metadata = {
  title: 'RP Server Web',
  description: 'Oficiální web vašeho RP serveru',
}

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body className="bg-gray-900 text-white font-sans">{children}</body>
    </html>
  )
}
