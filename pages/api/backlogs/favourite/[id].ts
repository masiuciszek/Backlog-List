import { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '../../../../lib/mongoose';
import Backlog from '../../../../lib/models/Backlog';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const {
    method,
    query: { id },
  } = req;

  await connectDb();
  try {
    const backlog = await Backlog.findById(id);

    if (!backlog) {
      return res
        .status(400)
        .json({ success: false, msg: 'no backlog with id ' + id });
    }
    const backlogToUpdate = await Backlog.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, data: backlogToUpdate });
  } catch (err) {
    res.status(400).json({ success: false });
  }
}
