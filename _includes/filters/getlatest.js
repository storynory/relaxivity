module.exports = function (collection, emptyFallbackDate) {
    if (!collection || !collection.length) {
        const fallbackDate = emptyFallbackDate || new Date();
        return fallbackDate.toUTCString(); // Format as RFC-822 date-time
    }

    const maxDate = new Date(Math.max(...collection.map(item => item.date)));
    return maxDate.toUTCString(); // Format as RFC-822 date-time
};