const calculateOdd1 = (kef) => {
    const obr_kef = 1 / (1 - 1 / kef)
    const a = (obr_kef - 1) / (kef - 1)
    return (4 * a) ** (1 / 2) / (2 * a) + 1
}

const calculateOdd = (kef, marginality) => {
    const obr_kef = 1 / (1 - 1 / kef)
    const margin_eur = 1 + marginality
    const a = (margin_eur * (obr_kef - 1)) / (kef - 1)
    const b = ((obr_kef - 1) / (kef - 1) + 1) * (margin_eur - 1)
    const c = 2 - margin_eur
    return (-1 * b + (b ** 2 + 4 * a * c) ** (1 / 2)) / (2 * a) + 1
}

const calculateOddwithMargin = (odds, margin) => {}

const calcFund = (liquidity, odds) => {
    const totalOdds = odds[0] + odds[1] + odds[2]
    const fund0 = (liquidity * (odds[1] + odds[2])) / (totalOdds * 2)
    const fund1 = (liquidity * (odds[0] + odds[2])) / (totalOdds * 2)
    const fund2 = (liquidity * (odds[1] + odds[0])) / (totalOdds * 2)
    return [fund0, fund1, fund2]
}

const netBet = [0, 0, 0]
const payout = [0, 0, 0]
const liquidity = 100000
const margin = (0.05 * 2) / 3

let odds = [1, 30, 3]
const fund = calcFund(liquidity, odds)
console.log()
console.log('init fund:', fund)

// bet out come 2
let amount = 200
let funbankx = fund[1] + (netBet[0] + netBet[2] - payout[0] - payout[2]) / 2
let funbank1 = fund[0] + (netBet[1] + netBet[2] - payout[1] - payout[2]) / 2
let funbank2 = fund[2] + (netBet[0] + netBet[1] - payout[0] - payout[1]) / 2

let totalFund = funbank1 + funbankx + funbank2 + amount
let newOdd1 = calculateOdd(totalFund / funbank1, margin)
let newOddx = calculateOdd(totalFund / funbankx, margin)
let newOdd2 = calculateOdd(totalFund / (funbank2 + amount), margin)
console.log('new odd :', newOdd1, newOddx, newOdd2)
console.log('1/x + 1/y + 1/z : ', 1 / newOdd1 + 1 / newOddx + 1 / newOdd2)

fund[2] += amount
netBet[2] += amount
payout[2] += amount * newOdd2

// bet out come 2
amount = 500
funbankx = fund[1] + (netBet[0] + netBet[2] - payout[0] - payout[2]) / 2
funbank1 = fund[0] + (netBet[1] + netBet[2] - payout[1] - payout[2]) / 2
funbank2 = fund[2] + (netBet[0] + netBet[1] - payout[0] - payout[1]) / 2

totalFund = funbank1 + funbankx + funbank2 + amount
newOdd1 = calculateOdd(totalFund / funbank1, margin)
newOddx = calculateOdd(totalFund / funbankx, margin)
newOdd2 = calculateOdd(totalFund / (funbank2 + amount), margin)
console.log('new odd :', newOdd1, newOddx, newOdd2)
console.log('1/x + 1/y + 1/z : ', 1 / newOdd1 + 1 / newOddx + 1 / newOdd2)

fund[2] += amount
netBet[2] += amount
payout[2] += amount * newOdd2

// bet out come 2
amount = 500
funbankx = fund[1] + (netBet[0] + netBet[2] - payout[0] - payout[2]) / 2
funbank1 = fund[0] + (netBet[1] + netBet[2] - payout[1] - payout[2]) / 2
funbank2 = fund[2] + (netBet[0] + netBet[1] - payout[0] - payout[1]) / 2

totalFund = funbank1 + funbankx + funbank2 + amount
newOdd1 = calculateOdd(totalFund / funbank1, margin)
newOddx = calculateOdd(totalFund / funbankx, margin)
newOdd2 = calculateOdd(totalFund / (funbank2 + amount), margin)
console.log('new odd :', newOdd1, newOddx, newOdd2)
console.log('1/x + 1/y + 1/z : ', 1 / newOdd1 + 1 / newOddx + 1 / newOdd2)

fund[2] += amount
netBet[2] += amount
payout[2] += amount * newOdd2

// bet out come 1
amount = 500
funbankx = fund[1] + (netBet[0] + netBet[2] - payout[0] - payout[2]) / 2
funbank1 = fund[0] + (netBet[1] + netBet[2] - payout[1] - payout[2]) / 2
funbank2 = fund[2] + (netBet[0] + netBet[1] - payout[0] - payout[1]) / 2

totalFund = funbank1 + funbankx + funbank2 + amount
newOdd1 = calculateOdd(totalFund / (funbank1 + amount), margin)
newOddx = calculateOdd(totalFund / funbankx, margin)
newOdd2 = calculateOdd(totalFund / funbank2, margin)
console.log('new odd :', newOdd1, newOddx, newOdd2)
console.log('1/x + 1/y + 1/z : ', 1 / newOdd1 + 1 / newOddx + 1 / newOdd2)

fund[0] += amount
netBet[0] += amount
payout[0] += amount * newOdd1

// bet out come x
amount = 29000
funbankx = fund[1] + (netBet[0] + netBet[2] - payout[0] - payout[2]) / 2
funbank1 = fund[0] + (netBet[1] + netBet[2] - payout[1] - payout[2]) / 2
funbank2 = fund[2] + (netBet[0] + netBet[1] - payout[0] - payout[1]) / 2

totalFund = funbank1 + funbankx + funbank2 + amount
newOdd1 = calculateOdd(totalFund / funbank1, margin)
newOddx = calculateOdd(totalFund / (funbankx + amount), margin)
newOdd2 = calculateOdd(totalFund / funbank2, margin)
console.log('new odd :', newOdd1, newOddx, newOdd2)
console.log('1/x + 1/y + 1/z : ', 1 / newOdd1 + 1 / newOddx + 1 / newOdd2)

fund[0] += amount
netBet[0] += amount
payout[0] += amount * newOddx

// bet out come 1
amount = 200
funbankx = fund[1] + (netBet[0] + netBet[2] - payout[0] - payout[2]) / 2
funbank1 = fund[0] + (netBet[1] + netBet[2] - payout[1] - payout[2]) / 2
funbank2 = fund[2] + (netBet[0] + netBet[1] - payout[0] - payout[1]) / 2

totalFund = funbank1 + funbankx + funbank2 + amount
newOdd1 = calculateOdd(totalFund / (funbank1 + amount), margin)
newOddx = calculateOdd(totalFund / funbankx, margin)
newOdd2 = calculateOdd(totalFund / funbank2, margin)
console.log('new odd :', newOdd1, newOddx, newOdd2)
console.log('1/x + 1/y + 1/z : ', 1 / newOdd1 + 1 / newOddx + 1 / newOdd2)

fund[0] += amount
netBet[0] += amount
payout[0] += amount * newOdd1

console.log('total net bet', netBet[0] + netBet[1] + netBet[2])
console.log('liquidity', liquidity)
console.log('payout', payout)
