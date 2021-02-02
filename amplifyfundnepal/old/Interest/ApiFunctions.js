import axios from 'axios'
export async function getaccounttypes() {
   
  const data= await axios.get('https://nxopo5t28l.execute-api.us-east-1.amazonaws.com/Prod/api/accounttype')
       return data;
   
}
export async function getaccounts() {
   
  const data=  axios.get('https://nxopo5t28l.execute-api.us-east-1.amazonaws.com/Prod/api/account')
        return data;      
   
}
export async function gettransactions() {
   
    const data= await axios.get('https://nxopo5t28l.execute-api.us-east-1.amazonaws.com/Prod/api/transaction')
       return data;
}
export function posttransaction(accountid, accounttypeid, date, amount, type, entry) {
    var d = date === null ? new Date().toDateString() : date;
    axios.post('https://nxopo5t28l.execute-api.us-east-1.amazonaws.com/Prod/api/transaction', {
        accountid: accountid,
        date: d,
        accounttypeid: accounttypeid,
        amount: amount,
        type: type,
        entry: entry
    })
        .then(() => alert("success"))
        .catch(err => {
            if (err.response) {
                // client received an error response (5xx, 4xx)
                alert(err)
            } else if (err.request) {
                // client never received a response, or request never left
                alert(err)
            } else {
                // anything else
                alert(err)
            }
        })
}