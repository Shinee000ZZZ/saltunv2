import React from 'react'
import { ReactComponent as Up } from '../images/up.svg'

const Contact = ({ onCursor }) => {
    return (
        <>
            <footer id="contact" className="footer container maxwidth">
                <h1>Get </h1>
                <h1 className="footer__second">in touch</h1>
                <div className="footer__inner">
                    <a className="top" href="#hero"
                        onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")}
                    >
                        BACK TO TOP
                        <Up />
                    </a>
                    <div className="social">
                        <a onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")}
                            className="email" href="mailto:shineggod@gmail.com">shineggod@gmail.com</a>
                        <div className="social__icons">
                            <a onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sultan-syaeful-millah-840540317">LN</a>
                            <a onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")} target="_blank" rel="noopener noreferrer" href="https://x.com/OkeShinee">TW</a>
                            <a onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kesaltunan">IG</a>
                        </div>
                    </div>
                </div>
                <p>© 2024 - Sultan Syaeful Millah</p>
            </footer>
        </>
    )
}

export default Contact
