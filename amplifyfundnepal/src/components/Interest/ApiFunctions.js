import axios from 'axios'
import { resolveaccounttype } from './Calculation'
import { assert, presence, email } from 'property-validator';
export async function getaccounttypes() {

  const data = await axios.get('https://nxopo5t28l.execute-api.us-east-1.amazonaws.com/Prod/api/accounttype')
  return data;

}
export async function getaccounts() {

  const data = axios.get('https://nxopo5t28l.execute-api.us-east-1.amazonaws.com/Prod/api/account')
  return data;

}
export async function gettransactions() {

  const data = await axios.get('https://nxopo5t28l.execute-api.us-east-1.amazonaws.com/Prod/api/transaction')
  return data;
}
export function postnewaccount(newaccount) {
  //.log(newaccount)
  //console.log(resolveaccounttype(newaccount.accounttypeid))
  let user = {
    username: 'nettofarah',
    email_address: 'invalid@email'
  }
  var res = assert(newaccount, [
    presence('accountnumber'),
    email('email'),
    presence('amount'),
    presence('accounttypeid')
  ]);
  if (!res.valid) {
    return;
  } else {
    alert("form is ok")
  }



  var rt = resolveaccounttype(newaccount.accounttypeid);
  var d = new Date().toISOString();



  axios.post('https://nxopo5t28l.execute-api.us-east-1.amazonaws.com/Prod/api/account', {
    created: d,
    interest: 0,
    isenabled: "1",
    address: newaccount.address,
    accountid: newaccount.accountid,
    accounttypeid: newaccount.accounttypeid,
    amount: parseFloat(newaccount.amount),
    accountname: newaccount.accountname,
    balance: parseFloat(newaccount.amount),
    phone: newaccount.phone,
    email: newaccount.email,
    citizenshipno: "110892",
    addressline1: "Dathu Sadak , Khusibu",
    addressline2: "hehe",
    city: "Kathmandu",
    country: "Nepal",
    mobile: "9849178036",
    phone1: "9849178036",
    accountnumber: "b9dab5a0-d765-4ede-bb0f-b1adbebdb800"

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