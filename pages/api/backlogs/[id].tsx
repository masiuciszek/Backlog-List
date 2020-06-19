import { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '../../../lib/mongoose';
import Backlog from '../../../lib/models/Backlog';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const {
    query: { id },
    method,
  } = req;

  await connectDb();

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const backlog = await Backlog.findById(id);
        if (!backlog) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: backlog });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT' /* Edit a model by its ID */:
      try {
        const backlog = await Backlog.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!backlog) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: backlog });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const backlog = await Backlog.findById(id);
        if (!backlog) {
          return res.status(400).json({ success: false });
        }
        const deletedPet = await Backlog.deleteOne({ _id: id });
        if (!deletedPet) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
