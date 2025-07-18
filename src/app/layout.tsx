import type { Metadata } from 'next';
import { Inter, Calistoga } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
    subsets: ['latin'],
    variable: '--font-serif',
    weight: ['400'],
});

export const metadata: Metadata = {
    title: 'Romaric SEGLA',
    description: 'Created while learning NEXT.js',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={twMerge(
                    inter.variable,
                    calistoga.variable,
                    'bg-gray-900 text-white antialiased font-sans'
                )}>
                <Analytics />
                {children}
            </body>
        </html>
    );
}
