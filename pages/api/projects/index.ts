import Projects from '@/modals/projectSchema';
import dbConnect from '@/utilits/db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Connect to the database
    await dbConnect();

    if (req.method === 'GET') {
      const projects = await Projects.find();
      res.status(200).json({ data: projects });
    } else {

      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {

    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Internal server error', error: error });
  }
}
