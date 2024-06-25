import React from 'react'
import './ProjectCard.css'
import { Typography } from '@mui/material';
import { FaGithub } from "react-icons/fa";

const ProjectCard = (
    {
        url,
        desc,
        title,
        logoUrl,
        tools
    }
) => {
    return (
        <div className='card-container'>
            <div className="job-header">

                <div className="job-title">
                    <div className="company-name">
                        <Typography variant="h6">{
                            title != null ? title : "Demo"
                        }</Typography>
                    </div>
                </div>
            </div>
            <div className="job-desc">
                <div className="about-company">
                    <img src={logoUrl} alt="logo" />
                    <div className="about-us">
                        <Typography variant='h6'>
                            {desc != null ? desc : "timepass"}
                        </Typography>
                    </div>
                    <div className='tools'>
                        <Typography variant='h6'>Tools used</Typography>
                        <p>
                            {tools != null ? tools : "timepass"}
                        </p>
                    </div>
                </div>
            </div>
            <div className="referral-btn">
                {/* //bg color-#4d46da, color-white */}
                <button>
                    <a href={url} target="_blank">
                        <FaGithub size='3vh' color='white' style={{ marginRight: '8px', background: "black" }} />
                        GitHub
                    </a>
                </button>
            </div>
        </div>
    )
}

export default ProjectCard