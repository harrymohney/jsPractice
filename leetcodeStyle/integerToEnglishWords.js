function numberToWords(num) {
  if (num === 0) return 'Zero';

  const ones = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const teens = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const thousands = ['', 'Thousand', 'Million', 'Billion'];

  function toWords(num) {
      if (num === 0) return '';

      let result = '';
      for (let i = 0; i < thousands.length && num > 0; i++) {
          if (num % 1000 !== 0) {
              result = helper(num % 1000) + thousands[i] + ' ' + result;
          }
          num = Math.floor(num / 1000);
      }
      return result.trim();
  }

  function helper(num) {
      if (num === 0) return '';
      if (num < 10) return ones[num - 1] + ' ';
      else if (num < 20) return teens[num - 11] + ' ';
      else if (num < 100) return tens[Math.floor(num / 10) - 1] + ' ' + helper(num % 10);
      else return ones[Math.floor(num / 100) - 1] + ' Hundred ' + helper(num % 100);
  }

  return toWords(num);
}
