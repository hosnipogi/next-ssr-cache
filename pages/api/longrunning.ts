// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const sleep = async (ms: number) => {
  return new Promise<string>((res) => {
    setInterval(() => {
      res("Done!");
    }, ms);
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  sleep(6).then(console.log);
  res.json({ success: true, message: "Done" });
}
