import { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '../../lib/mongoose';
import Backlog from '../../lib/models/Backlog';

interface Backlog {
  text: string;
  completed: boolean;
  important: boolean;
}
const backlogs: Array<Backlog> = [
  {
    text: 'Learn Rust',
    completed: false,
    important: false,
  },
  {
    text: 'Learn to test applications',
    completed: false,
    important: true,
  },
  {
    text: 'Learn C',
    completed: false,
    important: true,
  },
];
export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDb();
  try {
    const backlogs = await Backlog.find();
    res.status(200).json({ success: true, data: backlogs });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  }
};
