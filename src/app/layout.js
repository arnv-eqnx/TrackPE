import './globals.css'

export const metadata = {
  title: 'TrackPe',
  description: 'Created by Arnav Jain and Mrityunjay Srivastava',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
