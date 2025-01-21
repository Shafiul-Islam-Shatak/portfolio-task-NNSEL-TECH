import { AddModalProps } from "@/Types";
import axios from "axios";
import useProjects from "Hooks/ProjectData/useProjects";
import React from "react";
import toast from "react-hot-toast";
import { RxCross1 } from "react-icons/rx";



const AddModal: React.FC<AddModalProps> = ({ isOpen, onClose }) => {
    const [projectsList , refetch] = useProjects()
    const handelAddProject = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.currentTarget
        const title = form.projectName?.value;
        const img = form.image?.value;
        const client = form.client?.value;
        const project = { title, img, client }
        const res = await axios.post('/api/addProject', project)
        toast.success(res.data.massage)
        onClose()
        form.reset()
        refetch()
    }

    return (
        <div
            className={`${isOpen ? "visible" : "hidden"
                } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] flex items-center justify-center`}
        >
            <div
                className={`${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    } w-[90%] md:w-[80%] lg:w-[35%] bg-[#262A2C] rounded-lg transition-all duration-300`}
            >
                <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
                    <h1 className="text-[1.5rem] font-bold font-syne">Add New Project</h1>
                    <RxCross1
                        className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                        onClick={onClose}
                    />
                </div>
                {/* Form */}
                <form
                    onSubmit={handelAddProject}
                    className="flex flex-col gap-5 font-rubik text-black p-4">
                    <div>
                        <label htmlFor="projectName" className="text-[1rem] text-white font-[500]">
                            Project Name
                        </label>
                        <input
                            type="text"
                            name="projectName"
                            id="projectName"
                            placeholder="Enter project name"
                            className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                        />
                    </div>
                    <div>
                        <label htmlFor="projectName" className="text-[1rem] text-white font-[500]">
                            Add Client
                        </label>
                        <input
                            type="text"
                            name="client"
                            placeholder="Enter Client"
                            className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                        />
                    </div>
                    <div>
                        <label htmlFor="projectName" className="text-[1rem] text-white font-[500]">
                            Project Image
                        </label>
                        <input
                            type="url"
                            name="image"
                            placeholder="Enter project image URL"
                            className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                        />
                    </div>
                    {/* Additional Fields */}
                    <button
                        type="submit"
                        className="py-2 px-4 w-full hover:bg-orange-500 bg-[#FF9142] text-[#fff] rounded-md"
                    >
                        Add Project
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddModal;
