'use client';
import useProjects from "Hooks/ProjectData/useProjects";
import React, { useState } from "react";
import Image from "next/image";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import AddModal from "../components/AddModal/AddModal";
import EditModal from "../components/EditModal/EditModal";
import { RingLoader } from "react-spinners";

const Dashboard: React.FC = () => {
    // load data from custom hooks
    const projects = useProjects() || [];

    // add project modal controll state
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // add project modal controll state and set edit iteam id
    const [editId, setEditId] = useState<string>('');
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

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
                    console.log(res.data)
                    toast.success("Project Deleted");
                   
                } catch (err) {
                    console.log(err);
                }
            }
        });
    };
    // controll open and close the add project modal
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // controll open and close the edit project modal
    const openEditModal = () => setIsEditModalOpen(true);
    const closeEditModal = () => setIsEditModalOpen(false);

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between my-10 items-center w-full">
                <h1 className="text-2xl font-bold font-syne">My Projects</h1>
                <button
                    onClick={openModal}
                    className="flex items-center uppercase hover:bg-orange-500 justify-center space-x-2 bg-[#FF9142] text-white py-4 px-5 rounded-[30px]"
                >
                    <h1 className="font-rubik">Add Project</h1>
                    <FaPlus />
                </button>
            </div>

            {/* table of my existing project */}
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
                                    <button
                                        onClick={() => handleDelete(project._id)}
                                        className="hover:text-red-600"
                                    >
                                        <FaTrash className="hover:scale-125" />
                                    </button>
                                    <button
                                        onClick={() => { setEditId(project._id); openEditModal(); }}
                                        className="mt-5 md:mt-0 hover:text-blue-600"
                                    >
                                        <FaEdit className="hover:scale-125" />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5} className="text-center py-5">
                                {projects.length === 0 ? (
                                    <div>No Projects Found</div>
                                ) :
                                    (
                                        //show the loading spinner
                                        <div className="flex justify-center items-center">
                                            <RingLoader color="#ffffff" />
                                        </div>
                                    )}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Add Modal */}
            <AddModal
                isOpen={isModalOpen}
                onClose={closeModal}
            />
            {/* Edit Modal */}
            <EditModal
                id={editId}
                isOpen={isEditModalOpen}
                onClose={closeEditModal}
            />
        </div>
    );
};

export default Dashboard;
