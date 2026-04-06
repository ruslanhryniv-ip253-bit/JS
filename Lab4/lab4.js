/**
 * @param {Array} collection
 * @param {...Function} operations
 */
function query(collection, ...operations) {
    // 1. Якщо передана лише колекція, повертаємо її копію
    let result = [...collection];

    // 2. Сортуємо операції: спочатку filterIn, потім select
    // Це важливо для виконання вимоги про порядок
    const sortedOperations = operations.sort((a, b) => {
        return a.name === 'filterIn' ? -1 : 1;
    });

    // 3. Послідовно застосовуємо всі операції
    for (let operation of sortedOperations) {
        result = operation(result);
    }

    return result;
}

/**
 * @param {...String} fields
 */
function select(...fields) {
    return function select(collection) {
        // Логіка перетину (intersection) для декількох select
        // У кожній операції ми знаємо лише поточні поля
        return collection.map(item => {
            let newItem = {};
            fields.forEach(field => {
                if (item.hasOwnProperty(field)) {
                    newItem[field] = item[field];
                }
            });
            return newItem;
        });
    };
}

/**
 * @param {String} property
 * @param {Array} values
 */
function filterIn(property, values) {
    return function filterIn(collection) {
        // Залишаємо лише ті об'єкти, значення поля яких є у списку values
        return collection.filter(item => {
            return values.includes(item[property]);
        });
    };
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};