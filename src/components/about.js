import React from 'react'
import {
    useViewportScroll,
    motion,
    useTransform,
    useAnimation,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactComponent as Arrow1 } from '../images/Arrow 1.svg'
import resume from '../images/CV_ATS_SultanSM.pdf'


const transition = { duration: 1.5, ease: [.6, -.05, .01, .9] }

const About = ({ onCursor }) => {
    const { scrollY } = useViewportScroll();

    const y1 = useTransform(scrollY, [0, 4000], [0, -650])

    const animation = useAnimation()

    const [ref, inView] = useInView({
        triggerOnce: true
    })

    const [ref2, inView2] = useInView({
        triggerOnce: true
    })

    React.useEffect(() => {

        inView && animation.start('visible')
        inView2 && animation.start('visible2')

    }, [animation, inView, inView2])


    return (
        <>
            <section className="about maxwidth">
                <div id="about" className="about__main">
                    <motion.div className="me" alt="saltun" style={{ y: y1 }} />
                    <div className="text">
                        <h1>SULTAN</h1>
                        <h1 className="text__second">Fullstack Dev</h1>
                        <motion.div className="text__inner"
                            ref={ref}
                            animate={animation}
                            initial='hidden'
                            variants={{
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: transition
                                },
                                hidden: {
                                    opacity: 0,
                                    y: 72
                                }
                            }}
                        >
                            <p>My name is Sultan Syaeful Millah (AKA Saltun). I am a Fullstack Web Developer.
                                I am currently studying at SMKN 1 Banjar, West Java, Indonesia.
                                I am recently intern at Inovindo Digital Media as a Fullstack Developer.
                            </p>

                            <p className="interest">
                                Apart from building websites
                                and designing, I spend my time watching Anime and Listening to Music.
                            </p>

                            <button className="btn" onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")}>
                                <div className="arrow">
                                    <Arrow1 className="a1" />
                                </div>
                                <a href={resume} download>Resume</a>
                            </button>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    ref={ref2}
                    animate={animation}
                    initial='hidden'
                    variants={{
                        visible2: {
                            opacity: 1,
                            y: 0,
                            transition: transition
                        },
                        hidden: {
                            opacity: 0,
                            y: 72
                        }
                    }}
                    className="tech-stack container">
                    <h3>tech - stack</h3>
                    <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>Tailwind</li>
                        <li>Bootstrap</li>
                        <li>ReactJs</li>
                        <li>PHP</li>
                        <li>Laravel</li>
                        <li>Figma</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>MySQL</li>
                        <li>Nodejs</li>
                        
                    </ul>
                </motion.div>
            </section>
        </>
    )
}

export default About
