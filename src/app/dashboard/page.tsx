'use client';
import useProjects from "Hooks/ProjectData/useProjects";
import React from "react";
import Image from "next/image";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Dashboard: React.FC = () => {
    const projects = useProjects();

    const handleDelete = async (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axios.delete(`/api/deleteProject/${id}`)
                if (res.data.massage === 'Project Deleted') {
                    toast.success(res.data.massage)
                }
                else {
                    toast.error(res.data.massage)
                }
            }
        });


    }

    return (
        <div className="">
            <div className="flex justify-between my-10 items-center w-full">
                <h1 className="text-2xl font-bold ">My Projects</h1>
                <button className='flex items-center uppercase hover:bg-orange-500 justify-center space-x-2 bg-[#FF9142]  text-white py-4 px-10 rounded-[30px]'>
                    <h1>Add Project</h1>
                    <FaPlus />
                </button>

            </div>
            <table className=" w-full text-left">
                <thead className="">

                    <th className="border-b">No</th>
                    <th className="border-b">Project</th>
                    <th className="border-b">Title</th>
                    <th className="border-b">Client</th>
                    <th className="border-b">Action</th>

                </thead>
                <tbody >
                    {projects.map((project, index) => (
                        <tr key={project._id} className="hover:bg-slate-600">
                            <td className="pl-5">{index + 1}</td>
                            <td className="py-2">
                                <Image
                                    src={project.img}
                                    width={50}
                                    height={50}
                                    alt={project.title}
                                ></Image>
                            </td>
                            <td className=" ">{project.title}</td>
                            <td className="">{project.client}</td>
                            <td className="flex flex-col md:flex-row items-center py-5  space-x-2 ">
                                <button onClick={() => handleDelete(project._id)}>
                                    <FaTrash />
                                </button>
                                <button>
                                    <FaEdit />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
