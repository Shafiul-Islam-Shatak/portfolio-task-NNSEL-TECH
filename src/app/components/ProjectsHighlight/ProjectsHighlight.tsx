'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import cloudShadow from '../../../../public/assets/Vector 8.svg'
import ProjectsHighlightCard from '../ProjectsHighlightCard/ProjectsHighlightCard';
import { GoArrowRight } from 'react-icons/go';
import axios from 'axios';
import { ProjectsHighlightProps } from '@/Types';


const ProjectsHighlight = () => {
    const [projectsList, setProjectsList] = useState<ProjectsHighlightProps[]>([])
   
    // load the data from DB
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/projects');
                const data = res.data;
                setProjectsList(data?.data) //set loaded data to state
                
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData();
    }, [])
    
    return (
        <div>
            <div className='relative mt-[270px]'>
                <div>
                    <h1 className="font-syne text-7xl font-semibold text-center">
                        My Projects Highlight
                    </h1>
                </div>
                <div className='absolute  top-1/2 left-1/2 transform translate-x-11/12 -translate-y-[60%]'>
                    <Image
                        src={cloudShadow}
                        width={500}
                        height={500}
                        alt='shadow'
                    />
                </div>
                <button className='flex items-center justify-center space-x-2 bg-transparent border border-[#FF9142] text-white py-4 px-10 rounded-[30px] mx-auto mt-[54px] mb-[80px]'>
                    <h1>Expolore Works</h1>
                    <GoArrowRight />
                </button>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-9 '>
                {
                    projectsList?.map(project =>
                        <ProjectsHighlightCard
                            key={project.title}
                            project={project}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default ProjectsHighlight;