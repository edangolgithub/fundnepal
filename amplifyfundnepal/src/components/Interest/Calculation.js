export function CalculateTotal(data) {
    if (data.length === 0)
        return;
    let sum = 0;
    data.forEach(element => {
        sum = sum + Number(element.amount);
    });
    return sum;
}
export function CalculteDailyInterest(p, r, n,t) {
    const amt = p * (Math.pow((1 + (r / n)), (n * t)));
    const i=amt-p;
    console.log(amt);
    console.log(i);
    return i;
}
