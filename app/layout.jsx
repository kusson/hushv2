import React from 'react';
import "@styles/globals.css";

//metadata for the entire website
export const metadata = {
    title: "Hush Hush Mechanic - Quietly Brilliant",
    description: "Your one-stop-shop for all roadie needs"
}

const RootLayout = ( {children} ) => {
  return (
    <html>
        <body>
            <main className="app">
                {children}
            </main>
        </body>
    </html>
    
  )
}

export default RootLayout;