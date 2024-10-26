function fromDollarToYen(dollar_value) {
    return 152.28 * dollar_value
}

function fromEuroToDollar(euro_value) {
    return 1.08 * euro_value
}

function fromYenToPound(yen_value) {
    return 0.01 * yen_value
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };