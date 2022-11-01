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
const liquidity = 10000

let odds = [1.82, 2.19]
const fund = calcFund(liquidity, odds)
console.log()
console.log('init fund:', fund)
funbank1 = fund[1] + netBet[0] - payout[0]
funbank0 = fund[0] + netBet[1] - payout[1]

totalFund = fund[0] + fund[1] 
newOdd1 = calculateOdd(totalFund / (fund[0] ), margin)
newOdd0 = calculateOdd(totalFund / fund[1], margin)
console.log('new odd :', newOdd1, newOdd0)
console.log('1/x + 1/y :', 1 / newOdd1 + 1 / newOdd0)

 let  amount = 500
funbank1 = fund[1] + netBet[0] - payout[0]
funbank0 = fund[0] + netBet[1] - payout[1]

totalFund = fund[0] + fund[1] + amount
newOdd1 = calculateOdd(totalFund / (fund[0] + amount), margin)
newOdd0 = calculateOdd(totalFund / fund[1], margin)
console.log('new odd :', newOdd1, newOdd0)
console.log('1/x + 1/y :', 1 / newOdd1 + 1 / newOdd0)

fund[0] += amount
netBet[0] += amount
payout[0] += amount * newOdd1

amount = 200
funbank1 = fund[1] + netBet[0] - payout[0]
funbank0 = fund[0] + netBet[1] - payout[1]

totalFund = fund[0] + fund[1] + amount
newOdd1 = calculateOdd(totalFund / (fund[0] + amount), margin)
newOdd0 = calculateOdd(totalFund / fund[1], margin)
console.log('new odd :', newOdd1, newOdd0)
console.log('1/x + 1/y :', 1 / newOdd1 + 1 / newOdd0)

fund[0] += amount
netBet[0] += amount
payout[0] += amount * newOdd1

amount = 500
funbank1 = fund[1] + netBet[0] - payout[0]
funbank0 = fund[0] + netBet[1] - payout[1]

totalFund = fund[0] + fund[1] + amount
newOdd1 = calculateOdd(totalFund / (fund[0] + amount), margin)
newOdd0 = calculateOdd(totalFund / fund[1], margin)
console.log('new odd :', newOdd1, newOdd0)
console.log('1/x + 1/y :', 1 / newOdd1 + 1 / newOdd0)

fund[0] += amount
netBet[0] += amount
payout[0] += amount * newOdd1



