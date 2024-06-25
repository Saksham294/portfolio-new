import React from 'react'
import './Contact.css'
import { Typography } from '@mui/material'
import GitHubIcon from '../../assets/github.png'
import XIcon from '../../assets/twitter.png'
import LinkedInIcon from '../../assets/linkedin.png'
import MediumIcon from '../../assets/medium.png'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Contact = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false });

    React.useEffect(() => {
        if (inView) {
            controls.start(i => ({
                y: [0, -20, 0],
                opacity: 1,
                transition: {
                    duration: 0.5,
                    delay: i * 0.2,
                    ease: "easeInOut"
                }
            }));
        }
    }, [controls, inView]);
    const icons = [
        { src: GitHubIcon, alt: 'GitHub', href: 'https://github.com/Saksham294' },
        { src: XIcon, alt: 'Twitter', href: 'https://twitter.com/sakshams294' },
        { src: LinkedInIcon, alt: 'LinkedIn', href: 'https://www.linkedin.com/in/sakshamsingh5001' },
        { src: MediumIcon, alt: 'Medium', href: 'https://medium.com/@sakshamsingh5001' }
    ];

    return (
        <div id='contact' className="contact-container">
            <Typography variant='h2'>  If you're building something cool, or just want to chat, feel free to connect with me on</Typography>
            <div ref={ref} style={{ display: 'flex', gap: '10px' }}>
                {icons.map((icon, index) => (
                    <motion.a
                        key={index}
                        custom={index}
                        initial={{ y: 50, opacity: 0 }}
                        animate={controls}
                        target='blank'
                        href={icon.href}
                        style={{ display: 'inline-block' }}
                        whileHover={{ scale: 1.1 }}

                    >
                        <img src={icon.src} alt={icon.alt} />
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Contact
