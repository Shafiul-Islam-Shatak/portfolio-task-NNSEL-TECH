import { ProjectsHighlightProps } from "@/Types";
import axios from "axios";
import { useEffect, useState } from "react";

const useProjects = (): [ProjectsHighlightProps[] , ()=>void] => {
    const [projectsList, setProjectsList] = useState<ProjectsHighlightProps[]>([])
    const [refetchTrigger, setRefetchTrigger] = useState<boolean>(false);

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
    }, [refetchTrigger])


    const refetch = () => setRefetchTrigger((prev) => !prev);
    console.log(projectsList)

    return [projectsList , refetch];
};

export default useProjects;