import Database from "../../../database/db";
import {NextApiRequest,NextApiResponse} from 'next'

const getOneAvo = async (res: NextApiResponse,req: NextApiRequest) => {
    const db = new Database()
    let id = req.query.id;

    const entryOne = await db.getById(id as string)

    /*res.statusCode = 200;
    res.setHeader('Content-type','application/JSON')
    res.end(JSON.stringify({data: entryOne}))
    Otra forma de estar en el servidor.
    */

    res.status(200).json(entryOne);
}

export default getOneAvo