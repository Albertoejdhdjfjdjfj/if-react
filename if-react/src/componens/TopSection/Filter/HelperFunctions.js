export function addSelect() {
  let selects = document.getElementById('selectBox');
  let select = document.createElement('select');
  select.innerHTML = ` 
        <option selected>0 years old</option>
        <option>1 years old</option>
        <option>2 years old</option>
        <option>3 years old</option>
        <option>4 years old</option>
        <option>5 yeaption>
        <option>6 years old</option>
        <option>7 years old</option>
        <option>8 years old</option>
        <option>9 years old</option>
        <option>10 years old</option>
        <option>11 years old</option>
        <option>12 years old</option>
        <option>13 years old</option>
        <option>14 years old</option>
        <option>15 years old</option>
        <option>16 years old</option>
        <option>17 years old</option>
         `;
  selects.appendChild(select);
}

export function deleteSelect() {
  let selects = document.getElementById('selectBox');
  selects.removeChild(selects.lastChild);
}

export function deleteAllSelects() {
  let selects = document.getElementById('selectBox');
  selects.innerHTML = '';
}
