import Card from '../models/Card';
import getSlaStatus from '../utils/getSlaStatus';
import Activity from '../models/Activity';

class SummaryController {
    async show(req, res) {
        const { activityId } = req.params;
        const cards = await Card.findAll({
            where: {
                activity_id: activityId,
            },
        });

        const activity = await Activity.findByPk(activityId);
        const { sla } = activity;

        const parsedCards = cards.map(card => {
            const { daysSinceCreated } = card;
            card.dataValues.slaStatus = getSlaStatus(daysSinceCreated, sla);
            return card;
        });

        let totalCardsOk = 0;
        let totalCardsWarning = 0;
        let totalCardsDelayed = 0;

        parsedCards.forEach(card => {
            switch (card.dataValues.slaStatus) {
                case 'OK':
                    totalCardsOk += 1;
                    break;
                case 'WARNING':
                    totalCardsWarning += 1;
                    break;
                case 'DELAYED':
                    totalCardsDelayed += 1;
                    break;
                default:
                    break;
            }
        });

        return res.json({ totalCardsOk, totalCardsWarning, totalCardsDelayed });
    }
}

export default new SummaryController();
