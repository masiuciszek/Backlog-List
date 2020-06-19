import { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '../../../lib/mongoose';
import Backlog from '../../../lib/models/Backlog';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const { method } = req;

  await connectDb();

  switch (method) {
    case 'GET':
      try {
        const backlogs = await Backlog.find(
          {},
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: backlogs });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const backlog = await Backlog.create(
          req.body,
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: backlog });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
