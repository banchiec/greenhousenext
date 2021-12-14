import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
    firstname: String
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ name: 'John Doe' })
}
