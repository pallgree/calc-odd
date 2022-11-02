const calculateOdd = (kef) => {
    const obr_kef = 1 / (1 - 1 / kef)
    const a = (obr_kef - 1) / (kef - 1)
    return (4 * a) ** (1 / 2) / (2 * a) + 1
}

const calculateOddwithMargin = (odds, margin, fund) => {
    const totalFund = fund[0] + fund[1] + fund[2]
    const margin0 = margin * fund[0] /totalFund
    const margin1 = margin * fund[1] / totalFund
    const margin2 = margin * fund[2] /totalFund
    return [
        1 / (1 / odds[0] + margin0),
        1 / (1 / odds[1] + margin1),
        1 / (1 / odds[2] + margin2),
    ]
}

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
const margin = 0.05

let odds = [1, 30, 3]
const fund = calcFund(liquidity, odds)
const initFund = fund
console.log()
console.log('init fund:', fund)

let funbankx = fund[1] + netBet[0] + netBet[2] - payout[0] - payout[2]
let funbank1 = fund[0] + netBet[1] + netBet[2] - payout[1] - payout[2]
let funbank2 = fund[2] + netBet[0] + netBet[1] - payout[0] - payout[1]

let totalFund = funbank1 + funbankx + funbank2
newOdd2 = calculateOdd(totalFund / funbank2)
newOdd1 = calculateOdd(totalFund / funbank1)
newOddx = calculateOdd(totalFund / funbankx)
odds = [newOdd1, newOddx, newOdd2]
console.log('init odd :', odds)
console.log(' ==> 1 + m : ', 1 / newOdd1 + 1 / newOddx + 1 / newOdd2)



console.log('===================================')
let amount = 200
console.log('bet outcome 2 amount :', amount)
funbankx = fund[1] + netBet[0] + netBet[2] - payout[0] - payout[2]
funbank1 = fund[0] + netBet[1] + netBet[2] - payout[1] - payout[2]
funbank2 = fund[2] + netBet[0] + netBet[1] - payout[0] - payout[1]

totalFund = funbank1 + funbankx + funbank2 + amount 
newOdd2 = calculateOdd(totalFund / (funbank2 + amount))
newOdd1 = calculateOdd(totalFund / funbank1)
newOddx = calculateOdd(totalFund / funbankx)
odds = calculateOddwithMargin([newOdd1, newOddx, newOdd2], margin, initFund)
console.log('new odd :', odds)
console.log(' ==> 1 + m : ', 1 / odds[0] + 1 / odds[1] + 1 / odds[2])

fund[2] += amount
netBet[2] += amount
payout[2] += amount * odds[2]
console.log('funbank 0',fund[0],netBet[0], payout[0])
console.log('funbank 1',fund[1],netBet[1], payout[1])
console.log('funbank 2',fund[2],netBet[2], payout[2])


console.log('===================================')
amount = 100
console.log('bet outcome 2 amount :', amount)
funbankx = fund[1] + netBet[0] + netBet[2] - payout[0] - payout[2]
funbank1 = fund[0] + netBet[1] + netBet[2] - payout[1] - payout[2]
funbank2 = fund[2] + netBet[0] + netBet[1] - payout[0] - payout[1]

totalFund = funbank1 + funbankx + funbank2 + amount 
newOdd2 = calculateOdd(totalFund / (funbank2 + amount))
newOdd1 = calculateOdd(totalFund / funbank1)
newOddx =calculateOdd( totalFund / funbankx)
odds = calculateOddwithMargin([newOdd1, newOddx, newOdd2], margin, initFund)
console.log('new odd :', odds)
console.log(' ==> 1 + m : ', 1 / odds[0] + 1 / odds[1] + 1 / odds[2])

fund[2] += amount
netBet[2] += amount
payout[2] += amount * odds[2]
console.log('funbank 0',fund[0],netBet[0], payout[0])
console.log('funbank 1',fund[1],netBet[1], payout[1])
console.log('funbank 2',fund[2],netBet[2], payout[2])


console.log('===================================')
amount = 1000
console.log('bet outcome 2 amount :', amount)
funbankx = fund[1] + netBet[0] + netBet[2] - payout[0] - payout[2]
funbank1 = fund[0] + netBet[1] + netBet[2] - payout[1] - payout[2]
funbank2 = fund[2] + netBet[0] + netBet[1] - payout[0] - payout[1]

totalFund = funbank1 + funbankx + funbank2 + amount 
newOdd2 = calculateOdd(totalFund / (funbank2 + amount))
newOdd1 = calculateOdd(totalFund / funbank1)
newOddx =calculateOdd( totalFund / funbankx)
odds = calculateOddwithMargin([newOdd1, newOddx, newOdd2], margin, initFund)
console.log('new odd :', odds)
console.log(' ==> 1 + m : ', 1 / odds[0] + 1 / odds[1] + 1 / odds[2])

fund[2] += amount
netBet[2] += amount
payout[2] += amount * odds[2]
console.log('funbank 0',fund[0],netBet[0], payout[0])
console.log('funbank 1',fund[1],netBet[1], payout[1])
console.log('funbank 2',fund[2],netBet[2], payout[2])

console.log('===================================')
amount = 1000
console.log('bet outcome 1 amount :', amount)
funbankx = fund[1] + netBet[0] + netBet[2] - payout[0] - payout[2]
funbank1 = fund[0] + netBet[1] + netBet[2] - payout[1] - payout[2]
funbank2 = fund[2] + netBet[0] + netBet[1] - payout[0] - payout[1]

totalFund = funbank1 + funbankx + funbank2 + amount 
newOdd2 = calculateOdd(totalFund / funbank2 )
newOdd1 = calculateOdd(totalFund / (funbank1+amount))
newOddx =calculateOdd( totalFund / funbankx)
odds = calculateOddwithMargin([newOdd1, newOddx, newOdd2], margin, initFund)
console.log('new odd :', odds)
console.log(' ==> 1 + m : ', 1 / odds[0] + 1 / odds[1] + 1 / odds[2])

fund[0] += amount
netBet[0] += amount
payout[0] += amount * odds[0]

console.log('funbank 0',fund[0],netBet[0], payout[0])
console.log('funbank 1',fund[1],netBet[1], payout[1])
console.log('funbank 2',fund[2],netBet[2], payout[2])


console.log('===================================')
amount = 200
console.log('bet outcome 1 amount :', amount)
funbankx = fund[1] + netBet[0] + netBet[2] - payout[0] - payout[2]
funbank1 = fund[0] + netBet[1] + netBet[2] - payout[1] - payout[2]
funbank2 = fund[2] + netBet[0] + netBet[1] - payout[0] - payout[1]

totalFund = funbank1 + funbankx + funbank2 + amount 
newOdd2 = calculateOdd(totalFund / funbank2 )
newOdd1 = calculateOdd(totalFund / (funbank1+amount))
newOddx =calculateOdd( totalFund / funbankx)
odds = calculateOddwithMargin([newOdd1, newOddx, newOdd2], margin, initFund)
console.log('new odd :', odds)
console.log(' ==> 1 + m : ', 1 / odds[0] + 1 / odds[1] + 1 / odds[2])

fund[0] += amount
netBet[0] += amount
payout[0] += amount * odds[0]


console.log('funbank 0',fund[0],netBet[0], payout[0])
console.log('funbank 1',fund[1],netBet[1], payout[1])
console.log('funbank 2',fund[2],netBet[2], payout[2])



console.log('===================================')
console.log('total net bet', netBet[0] + netBet[1] + netBet[2])
console.log('liquidity', liquidity)
console.log('fund',funbank1, funbankx, funbank2)

