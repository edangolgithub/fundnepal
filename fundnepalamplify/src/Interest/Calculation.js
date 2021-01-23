    export function CalculateTotal(data) {        
        if (data.length === 0)
            return;
        let sum = 0;
        data.forEach(element => {
            sum = sum + Number(element.amount);
        });
      return sum;
    }
    