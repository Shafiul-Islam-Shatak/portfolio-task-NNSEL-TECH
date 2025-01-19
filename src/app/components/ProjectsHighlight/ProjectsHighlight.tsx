import React from 'react';
import Image from 'next/image'
import cloudShadow from '../../../../public/assets/Vector 8.svg'
import { ProjectsHighlightProps } from '@/Types';
import ProjectsHighlightCard from '../ProjectsHighlightCard/ProjectsHighlightCard';
import { GoArrowRight } from 'react-icons/go';

const ProjectsHighlight = () => {
    const projectsList: ProjectsHighlightProps[] = [
        {
            title: 'Brand Journey Improvements',
            img: 'https://i.ibb.co/F7N9wXz/Img.png',
            client: 'Organc',
            work: ['Branding', 'Logo design']
        },
        {
            title: 'Brand Grouping',
            img: 'https://i.ibb.co/BrHRNCD/Paste-Img-Here.png',
            client: 'FR',
            work: ['Branding', 'Logo design']
        },
        {
            title: 'NFT Glimps',
            img: 'https://i.ibb.co/5Kvtd0b/Paste-Img-Here-1.png',
            client: 'Rumanda',
            work: ['NFT Design']
        },
        {
            title: 'Brand Suggestions',
            img: 'https://i.ibb.co/K0jhCcD/Paste-Img-Here-2.png',
            client: 'T3d',
            work: ['NFT logo']
        },
    ]
    return (
        <div>
            <div className='relative mt-[270px]'>
                <div>
                    <h1 className="font-syne text-7xl font-semibold text-center">
                        My Projects Highlight
                    </h1>
                </div>
                <div className='absolute  top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2'>
                    <Image
                        src={cloudShadow}
                        alt='shadow'
                    />
                </div>
                <button className='flex items-center justify-center space-x-2 bg-transparent border border-[#FF9142] text-white py-4 px-10 rounded-[30px] mx-auto mt-[54px] mb-[80px]'>
                    <h1>Expolore Works</h1>
                    <GoArrowRight />
                </button>
            </div>

            <div className='grid grid-cols-2'>
                {
                    projectsList.map(project =>
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