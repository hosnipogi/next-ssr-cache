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
  const hostname = req.headers.host;
  console.log(`${new Date().getTime().toFixed(0).substr(-4)}: `, { hostname });

  sleep(5).then(async () => {
    const data = await fetch(hostname + "/api/received", { method: "GET" });
    const d = await data.json();
    console.log(`${new Date().getTime().toFixed(0).substr(-4)}: `, { d });
  });

  res.json({ success: true, message: "Done" });
}
