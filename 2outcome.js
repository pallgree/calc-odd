const calculateOdd = (kef, marginality) => {
    const obr_kef = 1 / (1 - 1 / kef)
    const margin_eur = 1 + marginality
    const a = (margin_eur * (obr_kef - 1)) / (kef - 1)
    const b = ((obr_kef - 1) / (kef - 1) + 1) * (margin_eur - 1)
    const c = 2 - margin_eur

    return (-1 * b + (b ** 2 + 4 * a * c) ** (1 / 2)) / (2 * a) + 1
}

const calcFund = (liquidity, odds) => {
    const totalOdds = odds[0] + odds[1]
    const fund0 = (liquidity * odds[1]) / totalOdds
    const fund1 = (liquidity * odds[0]) / totalOdds
    return [fund0, fund1]
}

const netBet = [0, 0]
const payout = [0, 0]
const margin = 0.05
const liquidity = 89000000000

let odds = [3.9, 1.2]
const fund = calcFund(liquidity, odds)
console.log()
console.log('init fund:', fund)
funbank1 = fund[1]
funbank0 = fund[0]

totalFund = funbank1 + funbank0
newOdd1 = calculateOdd(totalFund / funbank1, margin)
newOdd0 = calculateOdd(totalFund / funbank0, margin)
console.log('init odd :', newOdd0, newOdd1)
console.log('1/x + 1/y :', 1 / newOdd1 + 1 / newOdd0)

let amount = 50000
funbank1 = fund[1] + netBet[0] - payout[0]
funbank0 = fund[0] + netBet[1] - payout[1]

totalFund = funbank1 + funbank0
console.log(
    'odd no margin :',
    (totalFund + amount) / (funbank0 + amount),
    (totalFund + amount) / funbank1
)
newOdd0 = calculateOdd((totalFund + amount) / (funbank0 + amount), margin)
newOdd1 = calculateOdd((totalFund + amount) / funbank1, margin)
console.log('new odd :', newOdd0, newOdd1)
console.log('1/x + 1/y :', 1 / newOdd1 + 1 / newOdd0)



fund[0] += amount
netBet[0] += amount
payout[0] += amount * newOdd0
console.log('fund :', fund)
console.log('netBet :', netBet)
console.log('payut :', payout)
console.log('---------------------')

amount = 30000
funbank1 = fund[1] + netBet[0] - payout[0]
funbank0 = fund[0] + netBet[1] - payout[1]

totalFund = funbank1 + funbank0
console.log(
    'odd no margin :',
    (totalFund + amount) / (funbank0 + amount),
    (totalFund + amount) / funbank1
)
newOdd0 = calculateOdd((totalFund + amount) / (funbank0 + amount), margin)
newOdd1 = calculateOdd((totalFund + amount) / funbank1, margin)
console.log('new odd :', newOdd0, newOdd1)
console.log('1/x + 1/y :', 1 / newOdd1 + 1 / newOdd0)



fund[0] += amount
netBet[0] += amount
payout[0] += amount * newOdd0
console.log('fund :', fund)
console.log('netBet :', netBet)
console.log('payut :', payout)
console.log('---------------------')





funbank1 = fund[1] + netBet[0] - payout[0]
funbank0 = fund[0] + netBet[1] - payout[1]

totalFund = funbank1 + funbank0
newOdd1 = calculateOdd(totalFund / funbank1, margin)
newOdd0 = calculateOdd(totalFund / funbank0, margin)
console.log('init odd :', newOdd0, newOdd1)
console.log('1/x + 1/y :', 1 / newOdd1 + 1 / newOdd0)



// const fundbank0 =89378
// const fundbank1 =8447

// const rs0=  calculateOdd((fundbank0 + fundbank1 + 80000)/(fundbank0 + 80000),margin)
// const rs1=  calculateOdd((fundbank0 + fundbank1 + 80000)/(fundbank1),margin)
// console.log('1/x + 1/y :', 1 / rs0 + 1 / rs1)
// console.log("🚀 ~ file: 2outcome.js ~ line 112 ~ rs", rs0, rs1)
