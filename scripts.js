const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaLista = []

function addNovaTarefa(){
   minhaLista.push({
    tarefa: input.value,
    concluida: false
   })
  
   input.value = ''

   mostrarTarefas()
}

function mostrarTarefas (){
 
    let novaLi = ''

    minhaLista.forEach((item, posicao) => {

        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
            <img src="img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
        </li> 
        `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaLista))
}

function concluirTarefa(posicao){
    minhaLista[posicao].concluida = !minhaLista[posicao].concluida

    mostrarTarefas()
}


function deletarItem(posicao){
    minhaLista.splice(posicao, 1)
    
    mostrarTarefas()
} 

function recaregarItens() {
   const tarefasLocalStorage = localStorage.getItem('lista')
  
   if(tarefasLocalStorage){
   minhaLista = JSON.parse(tarefasLocalStorage)
   }

   mostrarTarefas()
}

recaregarItens()
button.addEventListener('click', addNovaTarefa)
