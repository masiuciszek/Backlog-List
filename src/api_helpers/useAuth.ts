import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../lib/models/User';
import { HookNextFunction } from 'mongoose';

export interface AuthRequest extends NextApiRequest {
  user: typeof User;
}

const handleAuth = async (
  req: AuthRequest,
  res: NextApiResponse,
  next: HookNextFunction,
) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ success: false, msg: 'Auth error' });
  }

  try {
    const decoded = jwt.verify(token, 'secret');

    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    res.status(500).json({ success: false });
  }
};
