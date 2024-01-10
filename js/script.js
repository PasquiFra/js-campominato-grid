console.log("JS OK");

// prelevo elementi del DOM 

const difficultyChoice = document.getElementById("difficulty");
const startButton = document.getElementById("start");
const grid = document.getElementById("grid");

//imposto la variabile per il num di celle per riga/colonna
let cellsNum;
let cellSize;

startButton.addEventListener ("click", function() {
    
    //se avevo già cliccato il bottone svuoto il contenuto precedentemente inserito
    grid.innerHTML = "";
    cellsNum = "";
    
    console.log("cliccato");
    
    //controllo la difficoltà selezionata
    const difficulty = difficultyChoice.value;
    
    if (difficulty === "easy") {
        cellsNum = 7;
        cellSize = " cells-easy";
    } else if (difficulty === "medium") {
        cellsNum = 9;
        cellSize = " cells-medium";
    } else {
        cellsNum = 10;
        cellSize = " cells-hard";
    }
    
    // definisco la variabile per le rige e per le colonne
    const rows = cellsNum;
    const cols = cellsNum;
    const totalCells = rows * cols;

    console.log("numero celle (riga/colonna)", cellsNum, "totale celle", totalCells);
    
    // Genero la griglia con il numero di celle richieste
    for ( i=1 ; i <= totalCells ; i++) {
        
        //inserisco la funzione che genera una singola griglia
        const cell = generateGrid(rows, cols);

        //inserisco la classe che definisce la dimensione delle celle
        cell.className += cellSize

        //inserisco l'event listener che mi permette di applicare uno sfondo quando clicco
        cell.addEventListener("click", function() {
            cell.classList.toggle("clicked");
        })
        
        // inserisco la singola griglia nel documento
        grid.appendChild(cell);
    }
    
})