'use client';
import PageHeader from "@/app/components/PageHeader/PageHeader";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import Image from "next/image";
import projectImg from "../../../../public/Rectangle 6.png";
import projectImg2 from "../../../../public//Rectangle 6473.png";
import projectImg3 from "../../../../public/Rectangle 6474.png";
import arrowRight from "../../../../public/Arrow right.png";
import arrowLeft from "../../../../public/Arrow left.png";
import { ParamsProps, Projcet, } from "@/Types";
import OtherProjects from "@/app/components/OtherProjects/OtherProjects";

interface ProjcetDetailsProps {
    params: ParamsProps
}

const ProjectDetails: React.FC<ProjcetDetailsProps> = ({ params }) => {

    const { id: projectId } = React.use(params);
    console.log( params)

    const [projectData, setProjectData] = useState<Projcet | null>(null);

    // Load the data from the database
    useEffect(() => {
        const fetchData = async () => {

            try {
                const res = await axios.get(`/api/projects/${projectId}`);
                setProjectData(res?.data?.data); // Set loaded data to state
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();

    }, []);

    return (
        <div>
            {projectData ? (
                <div>
                    {/* Common page header section */}
                    <PageHeader
                        title="Project Detail"
                        desciption="Details About The Project"
                    />
                    <Image
                        src={projectImg}
                        alt={projectData.title}
                    />

                    {/* text content */}
                    <div className="w-[65%] mx-auto">
                        <h1 className="font-syne font-semibold text-4xl lg:mt-[70px] mt-20 ">Project Story</h1>
                        <p className="font-rubik text-[#9CA7B8] text-[16px] mt-[30px]">
                            The fact that photography has different meanings to different people is one of
                            the many components of its appeal. Photography is such an important part of our
                            life that it is now very difficult to imagine the world without it.
                            <br />
                            <br />
                            We cannot imagine a wedding without the opportunity to capture it on film; we
                            would not be able to remember the growing up of children or the holidays if we
                            did not have pictures.
                        </p>
                    </div>

                    <div className="grid  grid-cols-1 gap-7 lg:grid-cols-2 mt-[88px]">
                        <Image
                            className="mx-auto"
                            src={projectImg2}
                            alt={projectData.title} />
                        <Image
                            className="mx-auto"
                            src={projectImg3}
                            alt={projectData.title} />
                    </div>

                    {/* text content */}
                    <div className="w-[65%] mx-auto">
                        <h1 className="font-syne font-semibold text-4xl mt-[70px]">Day One</h1>
                        <p className="font-rubik text-[#9CA7B8] text-[16px] mt-[30px]">
                            Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more.
                            <br /><br />
                            And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills
                        </p>
                    </div>

                    <div className="flex justify-between items-center mt-20 xl:px-0 px-5 lg:mt-[150px]">
                        {/* Prvious btn  */}
                        <button>
                            <div className="flex items-center  space-x-2">
                                <Image
                                    className="mt-2"
                                    src={arrowLeft}
                                    alt="arrowLeft"
                                />
                                <h1 className="font-rubik text-[16px] uppercase font-bold hidden md:block">Previous work</h1>
                            </div>
                        </button>
                        {/* Next btn  */}
                        <button>
                            <div className="flex items-center  space-x-2">
                                <h1 className="font-rubik text-[16px] uppercase font-bold hidden md:block">next work</h1>
                                <Image
                                    className="mb-2"
                                    src={arrowRight}
                                    alt="arrowRight"
                                />
                            </div>
                        </button>

                    </div>
                    <OtherProjects />
                </div>
            ) : (
                <div className="h-screen flex justify-center items-center">
                    <RingLoader color="#ffffff" />
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;
