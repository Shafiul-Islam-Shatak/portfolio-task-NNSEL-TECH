import { NextPage } from "next";

const projetDetails: NextPage<{ params: { id: string } }> = async ({ params }) => {
const projectId = params.id
    return (
        <div>
            <h1> aaaaaaaaaaaaa {projectId}</h1>
        </div>
    );
};

export default projetDetails;