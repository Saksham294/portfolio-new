import React from 'react';
import { motion } from 'framer-motion';
import './CircularAnimation.css';
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGolang } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
const icons = [
    { src: FaReact, alt: 'GitHub' },
    { src: FaNodeJs, alt: 'Twitter' },
    { src: SiMongodb, alt: 'LinkedIn' },
    { src: SiExpress, alt: 'Medium' },
    { src: FaJava, alt: 'Java' },
    { src: FaPython, alt: 'Python' },
    { src: FaDocker, alt: 'Docker' },
    { src: BiLogoPostgresql, alt: 'PostgreSQL' },
    { src: FaGolang, alt: 'Golang' },
    { src: SiTypescript, alt: 'TypeScript' }
];

const CircularAnimation = () => {
    const circleVariants = {
        animate: {
            rotate: 360,
            transition: {
                repeat: Infinity,
                duration: 0.5,
                ease: "linear"
            }
        }
    };

    return (
        <div className="circle-container">
            <motion.div
                className="circle"
                variants={circleVariants}
                animate="animate"
            >
                {icons.map((icon, index) => (
                    <motion.div
                        key={index}
                        className="icon-wrapper"
                        style={{
                            transform: `rotate(${(index * 360) / icons.length}deg) translate(150px) rotate(-${(index * 360) / icons.length}deg)`
                        }}
                    >
                        {icon.src({
                            size: 40,
                            whileHover: { scale: 1.2 }
                        })}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default CircularAnimation;
