import { ProjectsHighlightProps } from "@/Types";
import axios from "axios";
import { useEffect, useState } from "react";

const useProjects = () => {
    const [projectsList, setProjectsList] = useState<ProjectsHighlightProps[]>([])
    
    // load the data from DB
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/projects');
                const data = res.data;
                setProjectsList(data?.data) //set loaded data to state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])

    return projectsList;
};

export default useProjects;