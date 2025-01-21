import Project from "@/modals/projectSchema";
import dbConnect from "@/utilits/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const projectId = req.query.id
    await dbConnect()

    if (req.method === 'PATCH') {
        try {
            const newData = req.body
            const result = await Project.findByIdAndUpdate(projectId , newData)
            res.status(200).json({ massage:'Project Updated' , result })
        }
        catch (error) {
            res.status(500).json({ massage: 'error to update', error: error })
        }
    }
    else {
        res.status(503).json({ massage: 'Method is not valid' })
    }
}