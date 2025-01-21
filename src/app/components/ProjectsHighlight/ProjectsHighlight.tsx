'use client'
import Image from 'next/image'
import cloudShadow from '../../../../public/assets/Vector 8.svg'
import ProjectsHighlightCard from '../ProjectsHighlightCard/ProjectsHighlightCard';
import { GoArrowRight } from 'react-icons/go';
import { RingLoader } from 'react-spinners';
import useProjects from 'Hooks/ProjectData/useProjects';
import React from 'react';


const ProjectsHighlight = () => {
    const [projectsList , refetch] = useProjects()
  

    return (
        <div className=''>
            {
                projectsList ?
                    <div>

                        <div className='relative lg:mt-[270px] mt-32'>
                            <div>
                                <h1 className="font-syne text-3xl md:text-5xl lg:text-7xl font-semibold text-center">
                                    My Projects Highlight
                                </h1>
                            </div>
                            <div className='absolute  top-1/2 left-1/2 transform translate-x-11/12 -translate-y-[60%]'>
                                <Image
                                    className='hidden lg:block '
                                    src={cloudShadow}
                                    width={500}
                                    height={500}
                                    alt='shadow'
                                />
                            </div>
                            <button className='flex items-center uppercase hover:bg-orange-300 justify-center space-x-2 bg-transparent border border-[#FF9142] text-white py-4 px-10 rounded-[30px] mx-auto mt-[54px] mb-[80px]'>
                                <h1>Expolore Works</h1>
                                <GoArrowRight />
                            </button>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-1 mx-auto w-3/4 lg:w-full '>
                            {
                                projectsList?.map(project =>
                                    <ProjectsHighlightCard
                                        key={project.title}
                                        project={project}
                                    />
                                )
                            }
                        </div>
                    </div> :

                    <div className="h-screen flex justify-center items-center">
                        <RingLoader color="#ffffff" />
                    </div>
            }
        </div>
    );
};

export default ProjectsHighlight;