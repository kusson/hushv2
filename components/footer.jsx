import React from 'react'
import Image from 'next/image';
import "@styles/footer.css"


const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <footer className="footer">
        <div>Copyright©{year} | Hush Hush Mechanics</div>
        <div></div>
            <a href="https://www.instagram.com/hushhushmechanic" className="socialContainer" target="blank">
                <Image src="/instalogo.png" width={70} height={70}/>
            </a>
        <div className="footerSocials">
            
        </div>

    </footer>
  )
}

export default Footer