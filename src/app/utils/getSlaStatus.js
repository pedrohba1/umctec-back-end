export default function getSlaStatus(daysSinceCreated, sla) {
    let status;
    const percentage = daysSinceCreated * (sla / 100);
    if (percentage <= 0.75) status = 'OK';
    else if (percentage > 0.75 && percentage <= 1) status = 'WARNING';
    else if (percentage > 1) status = 'DELAYED';
    return status;
}
