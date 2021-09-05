function getDaysBefore(nDays) {
    const date = new Date();
    date.setDate(date.getDate() - nDays);
    return date;
}

module.exports = getDaysBefore;
