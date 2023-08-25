/* 
레시피 재료 추가하기
*/

const form = document.getElementById("ingredient-form")
const ingredient = document.querySelector('input[name="ingredient"]')
const weight = document.querySelector('input[name="weight"]')
const table = document.querySelector('table')
const trList = document.getElementsByClassName('thead')

form.addEventListener('submit',function(e){
    e.preventDefault()
    
        const ingredientInput = ingredient.value
        const weightInput = weight.value
        if (isIngredientExists(ingredientInput, table)) {
            alert('이미 존재하는 재료입니다.');
            return;
        }

        const newRow = document.createElement("tr")
        newRow.innerHTML = `
            <td>${ingredientInput}</td>
            <td>${weightInput}</td>
            <td><button class="delete-button">삭제</button></td>
            `
            table.appendChild(newRow)
        const deleteButton = newRow.querySelector(".delete-button")
        deleteButton.addEventListener('click',function(){
            table.deleteRow(newRow.rowIndex)
        })
    })

    function isIngredientExists(ingredient, table) {
        const existingIngredients = table.querySelectorAll("td:first-child");
    for (const existingIngredient of existingIngredients) {
        if (existingIngredient.textContent === ingredient) {
            return true;
        }
    }
    return false;
}
    


