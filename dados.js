
window.onload = () => {
    let nRandom1, nRandom2

    const randomItems = (t, n) => {
        let dado
        while (t.firstChild) t.removeChild(t.firstChild)
        for (let i = 0; i < n; i++) {
            dado = document.createElement("div")
            dado.className = "circleDado"
            t.appendChild(dado)
        }
        t.classList.add("scale")
        setTimeout(()=>t.classList.remove("scale"), 600)
    }

    document.getElementById("btn").onclick = () => {
        nRandom1 = Math.floor(Math.random() * 6) + 1
        nRandom2 = Math.floor(Math.random() * 6) + 1
        randomItems(document.getElementById("dado1"), nRandom1)
        randomItems(document.getElementById("dado2"), nRandom2)
    }

}