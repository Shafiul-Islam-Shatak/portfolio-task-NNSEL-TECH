import Project from "@/modals/projectSchema";
import dbConnect from "@/utilits/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect()

    if (req.method === 'POST') {
        try {
            const newProject = req.body
            const result = await Project.create(newProject)
            res.status(200).json({ massage: 'New Project Added', result })
        }
        catch (error) {
            res.status(500).json({ massage: 'error to post in database', error: error })
        }
    }
    else {
        res.status(503).json({ massage: 'Method is not valid' })
    }
}