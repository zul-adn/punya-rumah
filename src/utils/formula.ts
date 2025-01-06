export const kpr = (price: number) => {
    const month = 180;
    const year = 15;
    const bank_interest = 0.05; //5%

    const mainPerMonth = price/month;
    const bankInterestPerMonth = price*bank_interest*year/month;
    const totalPerMonth = mainPerMonth+bankInterestPerMonth

    return Math.ceil(totalPerMonth);
}