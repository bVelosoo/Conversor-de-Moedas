const USD = 5.54
const EUR = 6.21
const GBP = 7.33

const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const description = document.getElementById("description")
const result = document.getElementById("result")
const form = document.querySelector("form")
const footer = document.querySelector("footer")

amount.addEventListener("input", () => notIncludeLetters())
form.addEventListener("submit", () => calcResult(event))

function notIncludeLetters() {
  const hasLettersRegex = /\D+/g
  amount.value = amount.value.replace(hasLettersRegex, "")
}

function calcResult(event) {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      ModalToConversion(amount.value, USD, "US$")
      break
    case "EUR":
      ModalToConversion(amount.value, EUR, "€")
      break
    case "GBP":
      ModalToConversion(amount.value, GBP, "£")
  }
}

function ModalToConversion(price, amount, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(amount)}`

    footer.classList.add("show-result")
  } catch (error) {
    footer.classList.remove("show-result")

    console.log(error)
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }
  result.innerText = formatCurrencyBRL(price * amount)
}

function formatCurrencyBRL(result) {
  return result.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}