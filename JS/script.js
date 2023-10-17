for ( let i = 5; i > 0; i--) {
    for ( let k = 0; k < i; k++) {
        document.write('*')
    } document.write ('<br>')
}


let companies = [
    {
        id: 1,
        name: 'baxtMen',
        budget: 200000,
        tax: 19,
        expenses: [10000, 2000, 60000]
    },
    {
        id: 2,
        name: 'nosfrush',
        budget: 1000,
        tax: 0,
        expenses: [50, 100, 10]
    },
    {
        id: 3,
        name: 'artyomida',
        budget: 400000,
        tax: 23,
        expenses: [5000,14000,3000]
    },
    {
        id: 4,
        name: 'azizas',
        budget: 150000,
        tax: 0,
        expenses: [5000,6000,4000]
    },
    {
        id: 5,
        name: 'openBobur',
        budget: 500,
        tax: 12,
        expenses: [10,30,5]
    },
    {
        id: 6,
        name: 'IS_buildings',
        budget: 1000000,
        tax: 21,
        expenses: [500000, 25000, 10000]
    },
    {
        id: 7,
        name: 'XOJIK_RADAR',
        budget: 40000,
        tax: 12,
        expenses: [500, 2500, 1000]
    },
]
// 1. Посчитать общие расходы каждой компании 
// 2. Показать чистую прибыль каждой компании вычитав расходы и налоги

let total_exp = companies.reduce((total, company) => {
  let company_exp = company.expenses.reduce((sum, expense) => sum + expense, 0);
  return { ...total, [company.name]: company_exp };
}, {});

console.table(total_exp);


let income = companies.reduce((profits, company) => {
  let expenses_1 = company.expenses.reduce((sum, expense) => sum + expense, 0);
  let inc = company.budget - (company.tax * company.budget / 100) - expenses_1;
  return { ...profits, [company.name]: inc};
}, {});

console.table(income);



for (let item of companies) {
    let summa = 0
    for (let a = 0; a < item.expenses.length; a++) {
        summa = summa + item.expenses[a]
    }
    console.log(summa);
    item.budget = item.budget - (item.tax * item.budget / 100) - summa;
    console.log(item);
}


