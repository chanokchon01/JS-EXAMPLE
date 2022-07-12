import './style.css';
import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()



const btnCoin = document.getElementById("btn-coin");
const btnBill = document.getElementById("btn-bill");
const WalletElement = document.getElementById("wallet");

const min = Math.ceil(300);
const max = Math.floor(500);
const targetRich = Math.floor(Math.random()*(max-min)+min);

function updateSavings(value){
  const savingsElement = document.getElementById("savings")
  const currentValue = parseInt(savingsElement.textContent);

  let newValue = currentValue+value;
  savingsElement.textContent = newValue;

  if(newValue > targetRich){
    jsConfetti.addConfetti()
    alert("คุณรวยแล้ว")
  }
}

btnCoin.addEventListener("click",function(){
  const coinElement = document.createElement('img')
  coinElement.setAttribute('src',"https://i.ibb.co/dLDhB15/Pngtree-cartoon-gold-coin-png-download-4463835.png")
  coinElement.setAttribute('width','70px')
  console.log(10)
  
  document.getElementById('wallet').appendChild(coinElement);
  updateSavings(10)
  
});
btnBill.addEventListener("click",function(){
  const billElement = document.createElement('img')
  billElement.setAttribute('src',"https://i.ibb.co/zNmpdCq/Pngtree-100-dollar-bill-7312202.png")
  billElement.setAttribute('width','100px')
  document.getElementById('wallet').appendChild(billElement);
  updateSavings(100)
});

