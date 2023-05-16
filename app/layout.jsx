import React from 'react';
import Head from 'next/head';
import "@styles/globals.css";
import Navbar from '@components/navbar';
import logo from "@public/images/hushlogo_bg.png";


//metadata for the entire website
export const metadata = {
    title: "Hush Hush Mechanic - Quietly Brilliant",
    description: "Your one-stop-shop for all roadie needs",
    icon: {logo},
}

const RootLayout = ( {children} ) => {
  return (
    <html>
        <head>
            {/* importing Google Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Roboto+Flex:wght@100;200;300;400;500;600;700;800;900;1000&display=swap" rel="stylesheet" />
        </head>
        
        <body>
        <Navbar />
            <main className="app">
                {children}
            </main>
        </body>
    </html>
    
  )
}

export default RootLayout;