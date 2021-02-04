export function CalculateTotal(data) {
    if (data.length === 0)
        return;
    let sum = 0;
    data.forEach(element => {
        sum = sum + Number(element.amount);
    });
    return sum;
}
export function CalculteDailyInterest(p, r, n, t) {
    var amt = p * (Math.pow((1 + (r / n)), (n * t)));
   // const amount=Math.round((amt + Number.EPSILON) * 100) / 100
    const amount=amt;
    var i = amount - p;
    const interest=Math.round((i + Number.EPSILON) * 100) / 100
    return interest;
}
// export function gettransactions() {
//     this.setState({ loading: true });
//     axios.get('http://localhost:3333/transaction')
//         .then(data => {
//             const d = data.data;
//             this.setState({ transaction: d }, function () {
//                 this.setState({
//                     selectedtransaction: this.state.transaction
//                         .filter(x => x.accounttypeid === this.state
//                             .selectedaccounttype.accounttypeid &&
//                             x.accountid === this.state.selectedaccount
//                                 .accountid)
//                 }, function () {
//                     let res = fun.CalculateTotal(this.state.selectedtransaction)
//                     this.setState({ total: res })
//                     this.setState({ loading: false })
//                     let ci = fun.CalculteDailyInterest(res, .1, 365, 1 / 365)
//                     console.log(ci)
//                     //  var result = this.state.selectedtransaction.map(function(el) {
//                     //  var o = Object.assign({}, el);

//                     //     o.ci = fun.CalculteDailyInterest(parseFloat(el["amount"]),.10,365,1/365);
//                     //     return o;
//                     //   })
//                     // console.log(result);  

//                 })
//             })
//         })

