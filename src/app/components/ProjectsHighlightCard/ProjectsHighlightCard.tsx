import { ProjectsHighlightProps } from '@/Types';
import Image from 'next/image'

const ProjectsHighlightCard = ({project} :{project:ProjectsHighlightProps}) => {
    return (
        <div className='mb-[94px] mx-auto'>
            <Image
            src={project?.img}
            width={560}
            height={620}
            alt={project.title}
            />

            <div>
                <h1 className='font-syne font-semibold text-2xl my-[32px]'>{project.title}</h1>
                <p className='font-rubik'><span className='text-[#606060]'>Client:</span> &nbsp; {project.client}</p>

                <p className='font-rubik'><span className='text-[#606060]'>Work:</span> &nbsp; 
                {
                    project?.work.map(txt=>
                        <span key={txt} className=''>&nbsp; {txt}</span>
                    )
                }
                </p>
                
            </div>
        </div>
    );
};

export default ProjectsHighlightCard;