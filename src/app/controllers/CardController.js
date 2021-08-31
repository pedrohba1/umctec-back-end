import * as Yup from 'yup';
import Patient from '../models/Patient';
import Insurance from '../models/Insurance';

import Card from '../models/Card';
// import Activity from '../models/Activity';

class CardController {
    async store(req, res) {
        const schema = Yup.object().shape({
            activity_id: Yup.number()
                .required()
                .positive()
                .moreThan(0),
            patient_name: Yup.string().required(),
            insurance_name: Yup.string().required(),
            visity_id: Yup.string().required(),
            bill_id: Yup.string().required(),
            bill_type: Yup.string().oneOf(['HOSPITALAR', 'AMBULATORIAL']),
            total_amount: Yup.number().required(),
            number_of_pendencies: Yup.number().required(),
            number_of_open_pendencies: Yup.number().required(),
            number_of_documents: Yup.number().required(),
            number_of_not_recieved_documents: Yup.number().required(),
            number_of_checklist_items: Yup.number().required(),
            number_of_done_checklist_items: Yup.number().required(),
        });
        await schema.validate(req.body);

        try {
            const { patient_name, insurance_name, ...rest } = req.body;
            const patient = await Patient.create({ name: patient_name });
            const insurance = await Insurance.create({
                name: insurance_name,
            });

            const card = await Card.create({
                patient_id: patient.id,
                insurance_id: insurance.id,
                ...rest,
            });

            return res.json({ patient, insurance, card });
        } catch (e) {
            return res.json(...e);
        }
    }

    async index(req, res) {
        const { activityId } = req.params;

        const cards = await Card.findAll({
            raw: true,
            nest: true,
            attributes: {
                exclude: ['patient_id', 'insurance_id'],
            },
            where: {
                activity_id: activityId,
            },
            include: [
                {
                    model: Patient,
                    as: 'patient',
                },
                {
                    model: Insurance,
                    as: 'insurance',
                },
            ],
        });

        // TODO: aplicar lógica do slaStatus
        /*   
        const activity = await Activity.findByPk(activityId); 
        const parsedCards = cards.map(card => {
            const date = card.createdAt;
        }); */
        return res.json({ cards });
    }
}

export default new CardController();
