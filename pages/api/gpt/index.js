import { getResponse } from "../../../lib/gptQueries"

const handler = async (req, res) => {
  try {
    const data = await getResponse();
    return res.status(200).json({ ...data });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
};

export default handler;
