const netBet = [0, 0, 0]
const payOut = [0, 0, 0]
const liquidity = 100000
const margin = 0.05

const calculateOddwithMargin = (odds, margin) => {
    const profit0 = payOut[0] - netBet[0]
    const profit1 = payOut[1] - netBet[1]
    const profit2 = payOut[2] - netBet[2]
    const totalProfit = profit0 + profit1 + profit2
    if (totalProfit === 0) {
        margin0 = margin / 3
        margin1 = margin / 3
        margin2 = margin / 3
    } else {
        margin0 = (margin * profit0) / totalProfit
        margin1 = (margin * profit1) / totalProfit
        margin2 = (margin * profit2) / totalProfit
    }

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

let odds = [1.314, 8.211, 8.534]
let fund = calcFund(liquidity, odds)
const initFund = fund
console.log()
console.log('init fund:', fund)
let fundBankX, fundBank1, fundBank2

const putBet = (amount, outcome) => {
    console.log('===================================')
    let _amount = amount[0] + amount[1] + amount[2]
    console.log('place bet amount :', _amount, 'and outcome :', outcome)
    fundBankX =
        fund[1] + (netBet[0] + netBet[2] - payOut[0] - payOut[2] )/2 + amount[1]
    fundBank1 =
        fund[0] + (netBet[1] + netBet[2] - payOut[1] - payOut[2])/2 + amount[0]
    fundBank2 =
        fund[2] + (netBet[0] + netBet[1] - payOut[0] - payOut[1])/2 + amount[2]

    let totalFund =   fundBankX + fundBank1 + fundBank2 
     let _newOdd2 = totalFund / fundBank2
    let _newOdd1 = totalFund / fundBank1
    let _newOddx = totalFund / fundBankX
    console.log('odd no margin :', [_newOdd1, _newOddx, _newOdd2])
    let newodds = calculateOddwithMargin([_newOdd1, _newOddx, _newOdd2], margin)
    console.log('odd have margin :', newodds)
    console.log(
        ' ==> 1 + m : ',
        1 / newodds[0] + 1 / newodds[1] + 1 / newodds[2]
    )
    fund[outcome] += _amount
    netBet[outcome] += _amount
    payOut[outcome] += _amount * newodds[outcome]
    console.log('fund :', fund[0], fund[1], fund[2])
    console.log('netBet :', netBet[0], netBet[1], netBet[2])
    console.log('payOut :', payOut[0], payOut[1], payOut[2])
}

const test = [
    {
        amount: [1000, 0, 0],
        outcome: 0,
    },
    {
        amount: [90000, 0, 0],
        outcome: 0,
    },
    {
        amount: [100, 0, 0],
        outcome: 0,
    }
    ,
    {
        amount: [400, 0, 0],
        outcome: 0,
    }
    ,
    {
        amount: [100, 0, 0],
        outcome: 0,
    }
    ,
    {
        amount: [100, 0, 0],
        outcome: 0,
    }
    
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
