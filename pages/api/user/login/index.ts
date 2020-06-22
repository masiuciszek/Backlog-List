import { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '../../../../lib/mongoose';
import User from '../../../../lib/models/User';
import bcryptjs from 'bcryptjs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const { method } = req;

  await connectDb();

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, msg: 'email and password is required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, msg: 'No email registered' });
    }

    const isMatchedPassword = await bcryptjs.compare(password, user.password);

    if (!isMatchedPassword) {
      return res
        .status(401)
        .json({ success: false, msg: 'password does not match' });
    }

    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(400).json({ success: false });
  }
}
