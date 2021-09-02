import * as Yup from 'yup';
import { Op, Sequelize } from 'sequelize';
import Patient from '../models/Patient';
import Insurance from '../models/Insurance';

import Card from '../models/Card';
import Activity from '../models/Activity';
import getSlaStatus from '../utils/getSlaStatus';

class CardController {
    async store(req, res) {
        const schema = Yup.object().shape({
            activityId: Yup.number()
                .required()
                .positive()
                .moreThan(0),
            patientName: Yup.string().required(),
            insuranceName: Yup.string().required(),
            visitId: Yup.string().required(),
            billId: Yup.string().required(),
            bilType: Yup.string().oneOf(['HOSPITALAR', 'AMBULATORIAL']),
            totalAmount: Yup.number().required(),
            numberOfPendencies: Yup.number().required(),
            numberOfOpenPendencies: Yup.number().required(),
            numberOfDocuments: Yup.number().required(),
            numberOfNotReceivedDocuments: Yup.number().required(),
            numberOfChecklistItems: Yup.number().required(),
            numberOfDoneChecklistItems: Yup.number().required(),
        });
        await schema.validate(req.body);

        try {
            const {
                patientName,
                insuranceName,
                activityId,
                ...rest
            } = req.body;
            const patient = await Patient.create({ name: patientName });
            const insurance = await Insurance.create({
                name: insuranceName,
            });

            const card = await Card.create({
                activityId,
                patientId: patient.id,
                insuranceId: insurance.id,
                ...rest,
            });

            return res.json({ patient, insurance, card });
        } catch (e) {
            return res.status(400).json(e);
        }
    }

    async index(req, res) {
        const { activityId } = req.params;
        const { filter, page = 1, perPage = 12 } = req.query;

        const validFilter = [
            'TO_SEND',
            'PRIORITY',
            'TO_RECEIVE',
            undefined,
            '',
        ].some(filterType => filterType === filter);

        if (!validFilter)
            return res.status(400).json({ message: 'invalid filter' });

        let whereStatement = {};
        switch (filter) {
            case 'TO_RECEIVE':
                whereStatement = {
                    activityId,
                    numberOfNotReceivedDocuments: { [Op.gt]: 0 },
                };
                break;
            case 'TO_SEND':
                whereStatement = {
                    activityId,
                    [Op.and]: [
                        { numberOfNotReceivedDocuments: { [Op.eq]: 0 } },
                        {
                            numberOfChecklistItems: {
                                [Op.eq]: Sequelize.col(
                                    'number_of_done_checklist_items'
                                ),
                            },
                        },
                    ],
                };
                break;
            default:
                whereStatement = { activityId };
                break;
        }

        const cards = await Card.findAll({
            offset: (page - 1) * perPage,
            limit: perPage,
            attributes: {
                exclude: ['patient_id', 'insurance_id'],
            },
            where: whereStatement,
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

        const activity = await Activity.findByPk(activityId);
        const { sla } = activity;

        const parsedCards = cards.map(card => {
            const { daysSinceCreated } = card;
            card.dataValues.slaStatus = getSlaStatus(daysSinceCreated, sla);
            return card;
        });

        return res.json({
            cards: parsedCards,
            pageInfo: {
                page: Number(page),
                perPage: Number(perPage),
            },
        });
    }
}

export default new CardController();
