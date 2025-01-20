import React from 'react';
import Image from 'next/image'
import { WorkCardProps } from '@/Types';

const WorkCard: React.FC<WorkCardProps> = ({ img, title, color }) => {
    return (
        <div>
            <Image
                src={img}
                alt={title}
               
            />
            <div className='text-center font-inter font-semibold space-y-3 mt-8 mb-14'>
                <p className='uppercase text-[13px] tracking-[1.63]'>{color}</p>
                <h1 className='text-2xl -tracking-[0.5]'>{title}</h1>
            </div>
        </div>
    );
};

export default WorkCard;