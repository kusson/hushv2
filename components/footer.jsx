import React from 'react'
import Image from 'next/image';


const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <footer className="footer">
        <div>Copyright©{year}</div>
        <div>Hush Hush Mechanics</div>
            <a href="/" className="socialContainer">
                <Image src="/instalogo.png" width={70} height={70}/>
            </a>
        <div className="footerSocials">
            
        </div>

    </footer>
  )
}

export default Footer