import { Request, Response } from "express";

class CourseUnitController {
    async create( request:Request, response:Response){
        const courseUnitData = request.body

        const createCourseUnit = new CreateCourseUnitService()

        const courseUnit = await createCourseUnit.execute(courseUnitData);

        return response.json(courseUnit);
    }
}

export {CourseUnitController};