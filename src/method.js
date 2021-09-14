function BindingData()
{
    let optsHTML = '';
    for (let i = 1; i < opts.length; i++) {
        let option = `<option value='${i}'>${opts[i].color}</option>`;
        optsHTML += option;
    }
    for (let i = 0; i < boxs.length; i++) {
        let circleCaption = '<option value="0">Vòng ' + (i+1) + '</option>';
        boxs[i].innerHTML = circleCaption + optsHTML;
    }
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