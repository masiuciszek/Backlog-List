import { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '../../../../lib/mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../../../../lib/models/User';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const { method } = req;

  await connectDb();

  try {
    const user = await User.create(req.body);

    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ success: false });
  }
}
