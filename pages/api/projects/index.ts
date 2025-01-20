import Projects from '@/modals/projectSchema'; 
import dbConnect from '@/utilits/db'; 
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Connect to the database
    await dbConnect();

    if (req.method === 'GET') {
      // Fetch all documents from the 'Projects' collection
      const projects = await Projects.find();
      console.log('Fetched projects:', projects);

      // Send the response with the fetched data
      res.status(200).json({ data: projects });
    } else {
      // Handle unsupported methods
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    // Log and send error details
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Internal server error', error: error });
  }
}
