const boxs = document.getElementsByClassName('combobox');
const read = document.getElementById('read');
BindingData();

read.addEventListener('click', e => {
    let values = [];
    for (let box of boxs)
        values.push(box.value);
    
    const count = CountCircle(values);
    if (count == 4) {
        let circle1 = opts[values[0]].value;
        let circle2 = opts[values[1]].value;
        let factor = opts[values[2]].factor;
        let error = opts[values[2]].error;
        let result = parseInt(String(circle1) + String(circle2)) * factor;
        alert(`Trở kháng = ${result}Ω±${error}%`);
    } else if (count == 5) {
        let circle1 = opts[values[0]].value;
        let circle2 = opts[values[1]].value;
        let circle3 = opts[values[2]].value;
        let factor = opts[values[3]].factor;
        let error = opts[values[4]].error;
        let result = parseInt(String(circle1) + String(circle2) + String(circle3)) * factor;
        alert(`Trở kháng = ${result}Ω±${error}%`);
    } else {
        alert('Số vòng màu không hợp lệ.');
    }
});