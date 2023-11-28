import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { MantineProvider, ColorSchemeScript } from '@mantine/core';

import { LayoutBar } from '@/components/layout/sidebar/Layout'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'
import { FormGroup } from '@/components/ui'

import '@mantine/core/styles.css';

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Dzengi',
  description: 'Exchange platform',
}
export const vieport: Viewport = {
  themeColor: '#0E0B18',
  colorScheme: 'dark',

}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <MantineProvider >
            <FormGroup title='menu'>
              <LayoutBar />
            </FormGroup>
            {children}
          </MantineProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}


