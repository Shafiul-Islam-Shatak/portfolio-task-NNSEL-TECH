import Project from "@/modals/projectSchema";
import dbConnect from "@/utilits/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const projectId = req.query.projectId
    await dbConnect()

    if (req.method === 'GET') {
        try {
            const project = await Project.findById(projectId)

            res.status(200).json({ data: project })
        }
        catch (error) {
            res.status(500).json({ massage: 'error to find data', error: error })
        }
    }
    else {
        res.status(503).json({ massage: 'Method is not valid' })
    }
}