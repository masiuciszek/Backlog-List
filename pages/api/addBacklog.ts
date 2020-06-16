import { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '../../lib/mongoose';
import Backlog from '../../lib/models/Backlog';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDb();
  try {
    const newBacklog = await Backlog.create(req.body);
    res.status(201).json({ success: true, data: newBacklog });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  }
};
