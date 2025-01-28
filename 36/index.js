const Ctable = document.querySelector(".table");

const createT = document.createElement("table");
Ctable.append(createT)

const table = document.querySelector("table");

const click = document.querySelector(".create");

click.addEventListener('click', () => {
    createT.innerHTML = '';
    tab();
  });


const tab = () => {
    const rows = parseInt(document.getElementById('row').value);
    const col = parseInt(document.getElementById('col').value);

    if (rows < 0 || col < 0){
        alert("Numbers cant be negative");
        return;
    }

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < col; j++) {
          const td = document.createElement('td');
          tr.append(td);
        }
        table.append(tr);
      }
      
}
