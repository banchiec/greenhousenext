import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
    firstname: String
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json({ firstname: 'John Doe' })
}
