function BindingData()
{
    let optsHTML = '';
    for (let i = 0; i < opts.length; i++) {
        let option = `<option value='${i}'>${opts[i].color}</option>`;
        optsHTML += option;
    }
    for (let box of boxs)
        box.innerHTML = optsHTML;
}

function CountCircle(values = [])
{
    let count = 0;
    for (let i = 0; i < values.length; i++) {
        let idx = values[i];
        if (opts[idx].value != null)
            count++;
    }
    return count;
}