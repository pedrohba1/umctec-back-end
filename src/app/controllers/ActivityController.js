import * as Yup from 'yup';
import Activity from '../models/Activity';

class ActivityController {
    async store(req, res) {
        const schema = Yup.object().shape({
            title: Yup.string().required(),
            subtitle: Yup.string().required(),
            sla: Yup.number()
                .positive()
                .moreThan(0)
                .required(),
        });
        await schema.validate(req.body);
        const result = await Activity.create(req.body);
        return res.json(result);
    }

    async index(req, res) {
        const schema = Yup.object().shape({
            page: Yup.number()
                .positive()
                .moreThan(0),

            pageSize: Yup.number()
                .positive()
                .moreThan(0),
        });
        await schema.validate(req.query);
        const { page = 1, pageSize = 10 } = req.query;
        return res.json(
            await Activity.findAll({
                limit: pageSize,
                offset: (page - 1) * 20,
            })
        );
    }
}

export default new ActivityController();
