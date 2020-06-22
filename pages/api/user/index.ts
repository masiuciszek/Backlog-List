import { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '../../../lib/mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../../../lib/models/User';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const { method } = req;

  await connectDb();

  try {
    const users = await User.find({});
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    res.status(400).json({ success: false });
    res.status(400).json({ success: false });
  }
}
