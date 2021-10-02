// Real
function converterReal() {
  var valorEmDolar = parseFloat(document.getElementById("valor").value);

  var valorEmReal = valorEmDolar * 5.37;

  var elementoConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em Real é R$ " + valorEmReal;
  elementoConvertido.innerHTML = valorConvertido;
}

// Euro
function converterEuro() {
  var valorEmDolar = parseFloat(document.getElementById("valor").value);

  var valorEmEuro = valorEmDolar * 0.86;

  var elementoConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em Euro é € " + valorEmEuro;
  elementoConvertido.innerHTML = valorConvertido;
}

// Bitcoin
function converterBitcoin() {
  var valorEmDolar = parseFloat(document.getElementById("valor").value);

  var valorEmBitcoin = valorEmDolar * 0.000021;

  var elementoConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em Bitcoin é BTC " + valorEmBitcoin;
  elementoConvertido.innerHTML = valorConvertido;
}

// Converter
function Converter() {
  var selecaoMoeda = document.getElementById("moedas").value;
  if (selecaoMoeda == "real") {
    converterReal();
  } else if (selecaoMoeda == "euro") {
    converterEuro();
  } else if (selecaoMoeda == "bitcoin") {
    converterBitcoin();
  }
}
