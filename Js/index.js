const randomPhrase = document.getElementById("randomPhrase")
const randomPhraseId = document.getElementById("idPhrase")

const btnSearch = document.getElementById("btnSearch")

const fetchPhrase = async () => {
    const APIResponse = fetch(`https://api.adviceslip.com/advice`)
    const data = (await APIResponse).json()
    return data
}

const renderPhrase = async () => {
    const data = await fetchPhrase()

    randomPhrase.innerHTML = data.slip.advice
    randomPhraseId.innerHTML = data.slip.id
}

renderPhrase()

btnSearch.addEventListener("click", () => {
    renderPhrase()
})