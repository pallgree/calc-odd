const netBet = [0, 0, 0]
const payOut = [0, 0, 0]
const liquidity = 100000
const margin = 0.05
const multiplier = 1e6

const calculateOddwithMargin = (odds, margin, _amount) => {
    const totalProfit =
        netBet[0] +
        netBet[1] +
        netBet[2] +
        _amount[0] +
        +_amount[1] +
        +_amount[2]
    if (totalProfit === 0) {
        margin0 = margin / 3
        margin1 = margin / 3
        margin2 = margin / 3
    } else {
        margin0 = (margin * (netBet[0] + _amount[0])) / totalProfit
        margin1 = (margin * (netBet[1] + _amount[1])) / totalProfit
        margin2 = (margin * (netBet[2] + _amount[2])) / totalProfit
    }

    return [
        1 / (1 / odds[0] + margin0),
        1 / (1 / odds[1] + margin1),
        1 / (1 / odds[2] + margin2),
    ]
}

const calcInitFund = (liquidity, odds) => {
    const totalOdds = odds[0] + odds[1] + odds[2]
    const fund0 = (liquidity * (odds[1] + odds[2])) / (totalOdds * 2)
    const fund1 = (liquidity * (odds[0] + odds[2])) / (totalOdds * 2)
    const fund2 = (liquidity * (odds[1] + odds[0])) / (totalOdds * 2)
    return [fund0, fund1, fund2]
}

let odds = [1.314, 8.211, 8.534]
let fund = calcInitFund(liquidity, odds)
const initFund = fund
console.log()
console.log('init fund:', fund)
let fundBankX, fundBank1, fundBank2

const putBet = (amount, outcome) => {
    console.log('===================================')
    let _amount = amount[0] + amount[1] + amount[2]
    console.log('place bet amount :', _amount, 'and outcome :', outcome)
    fundBank1 =
        fund[0] +
        Math.min(netBet[2] - payOut[2], netBet[1] - payOut[1]) / 2 +
        amount[0]
    fundBankX =
        fund[1] +
        Math.min(netBet[0] - payOut[0], netBet[2] - payOut[2]) / 2 +
        amount[1]
    fundBank2 =
        fund[2] +
        Math.min(netBet[0] - payOut[0], netBet[1] - payOut[1]) / 2 +
        amount[2]

    let totalFund = fundBankX + fundBank1 + fundBank2

    let _newOdd1 = totalFund / fundBank1
    let _newOddx = totalFund / fundBankX
    let _newOdd2 = totalFund / fundBank2

    let odds = calculateOddwithMargin(
        [_newOdd1, _newOddx, _newOdd2],
        margin,
        amount
    )
    console.log('odd have margin :', odds)
    const _payOut = payOut
    console.log(' ==> 1 + m : ', 1 / odds[0] + 1 / odds[1] + 1 / odds[2])
    fund[outcome] += _amount
    netBet[outcome] += _amount
    payOut[outcome] += _amount * odds[outcome]
    console.log('fund :', fund)
    console.log('netBet :', netBet)
    console.log('payOut :', payOut)
}

const test = [
    {
        amount: [1000, 0, 0],
        outcome: 0,
    },
    {
        amount: [50000, 0, 0],
        outcome: 0,
    },
    {
        amount: [0, 5000, 0],
        outcome: 1,
    },
    {
        amount: [0, 0, 5000],
        outcome: 2,
    },
    {
        amount: [100, 0, 0],
        outcome: 0,
    },

    {
        amount: [0, 0, 0],
        outcome: 0,
    },
]

test.map((item) => {
    putBet(item.amount, item.outcome)
})

console.log('')
console.log('')
console.log('')
console.log('-----------------------------')
console.log('total net bet', netBet[0] + netBet[1] + netBet[2])
console.log('liquidity', liquidity)
