import { Request, Response } from "express";

class ActivyController {
    async create( request:Request, response:Response){
        const activyData = request.body

        const createActivy = new CreateActivyService()

        const activy = await createActivy.execute(activyData);

        return response.json(activy);
    }
}

export {ActivyController};