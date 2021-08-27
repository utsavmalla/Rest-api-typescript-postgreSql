import  { Request, Response } from "express";

import { v4 as uuidv4 } from 'uuid';
import { StudentInstance } from "../model";

class StudentController {

    async create(req: Request, res: Response) {
        const id = uuidv4();
        try {
            const record = await StudentInstance.create({ ...req.body, id });
            return res.json({ record, msg: 'Successfuly created student' })
        } catch (e) {
            return res.json({ msg: 'fail to create', status: 500, route: '/create' });
            // console.log(e.message)

        }

    }

    async view(req: Request, res: Response) {
        try {
            const record = await StudentInstance.findAll({ where: {} });
            return res.json(record)
        } catch (e) {
            return res.json({ msg: 'fail to send', status: 500, route: '/view' })
            // console.log(e.message)
        }

    }

    async viewById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await StudentInstance.findOne({ where: { id } });
            return res.json(record);
        } catch (e) {
            return res.json({ msg: 'fail to read', status: 500, route: '/view/:id' });

        }

    }

    async updateByID(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const [updated] = await StudentInstance.update(req.body, { where: { id } });
            if (updated) {
                const updatedPost = await StudentInstance.findOne({ where: { id } });
                return res.json({ updatedPost, msg: 'Successfuly updated student' });
            }
            throw new Error('Post not found');

        } catch (e) {
            return res.json({ msg: 'fail to read', status: 500, route: '/update/:id' })
        }

    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deleted = await StudentInstance.destroy({ where: { id } });
            if (deleted) {
                return res.status(204).send("Student Deleted")
            }
            throw new Error('Post not found');

        } catch (e) {
            return res.status(500).send(e.message);


        }

    }


}

export default new StudentController