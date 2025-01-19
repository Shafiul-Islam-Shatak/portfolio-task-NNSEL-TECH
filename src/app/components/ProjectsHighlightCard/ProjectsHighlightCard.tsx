import { ProjectsHighlightProps } from '@/Types';
import Image from 'next/image'

const ProjectsHighlightCard = ({project} :{project:ProjectsHighlightProps}) => {
    return (
        <div>
            <Image
            src={project?.img}
            width={560}
            height={620}
            alt={project.title}
            />

            <div>
                <h1 className='font-syne font-semibold text-2xl my-[32px]'>{project.title}</h1>
                <p><span className='text-[#606060]'>Client:</span> &nbsp; {project.client}</p>
                
            </div>
        </div>
    );
};

export default ProjectsHighlightCard;