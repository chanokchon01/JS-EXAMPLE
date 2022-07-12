import './style.css';
import coinicon from './assets/coin.png'


const btnCoin = document.getElementById("btn-coin");
const btnBill = document.getElementById("btn-bill");
const WalletElement = document.getElementById("wallet");

/*
btnCoin.addEventListener("click",function(){
  let iconElemetHtml = <img src="$(iconCoinUrl)"/>;
  WalletElement.insertAdjacentElement("beforeend",iconElemetHtml);
});

btnBill.addEventListener("click",function(){
  let iconElemetHtml = <img src="$(iconBillUrl)"/>;
  WalletElement.insertAdjacentElement("beforeend",iconElemetHtml);
});*/

btnCoin.addEventListener("click",function(){
  const coinElement = document.createElement('img')
  coinElement.setAttribute('src',"https://i.ibb.co/zNmpdCq/Pngtree-100-dollar-bill-7312202.png")
  //document.body.appendChild(coinElement);
  document.getElementById(wallet).appendChild(coinElement);
});

