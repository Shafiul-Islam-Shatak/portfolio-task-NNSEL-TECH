'use client';
import useProjects from "Hooks/ProjectData/useProjects";
import React, { useState } from "react";
import Image from "next/image";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import AddModal from "../components/AddModal/AddModal";

const Dashboard: React.FC = () => {
    const projects = useProjects() || []; 
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleDelete = async (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.delete(`/api/deleteProject/${id}`);
                    if (res.data.message === "Project Deleted") {
                        toast.success(res.data.message);
                    } else {
                        toast.error(res.data.message);
                    }
                } catch (err) {
                    toast.error(err );
                }
            }
        });
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <div className="flex justify-between my-10 items-center w-full">
                <h1 className="text-2xl font-bold">My Projects</h1>
                <button
                    onClick={openModal}
                    className="flex items-center uppercase hover:bg-orange-500 justify-center space-x-2 bg-[#FF9142] text-white py-4 px-10 rounded-[30px]"
                >
                    <h1>Add Project</h1>
                    <FaPlus />
                </button>
            </div>
            <table className="w-full text-left">
                <thead>
                    <tr>
                        <th className="border-b">No</th>
                        <th className="border-b">Project</th>
                        <th className="border-b">Title</th>
                        <th className="border-b">Client</th>
                        <th className="border-b">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.length > 0 ? (
                        projects.map((project, index) => (
                            <tr key={project._id} className="hover:bg-slate-600">
                                <td className="pl-5">{index + 1}</td>
                                <td className="py-2">
                                    <Image
                                        src={project.img}
                                        width={50}
                                        height={50}
                                        alt={project.title}
                                    />
                                </td>
                                <td>{project.title}</td>
                                <td>{project.client}</td>
                                <td className="flex flex-col md:flex-row items-center py-5 space-x-2">
                                    <button onClick={() => handleDelete(project._id)}>
                                        <FaTrash />
                                    </button>
                                    <button>
                                        <FaEdit />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5} className="text-center py-5">
                                No projects found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Add Modal */}
            <AddModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Dashboard;
