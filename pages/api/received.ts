// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  const obj = { success: true, message: "RECEIVEDDDD" };
  console.log(`${new Date().getTime().toFixed(0).substr(-4)}: `, { obj });
  res.json(obj);
}
