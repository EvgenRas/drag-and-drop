const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', drop);
}


function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(
        () => {
            event.target.classList.add('hide');
            for (const placeholder of placeholders) {
                placeholder.classList.add('hovered');
            }
        } , 0);
    

}

function dragend(event) {
    event.target.classList.remove('hold', 'hide');
    for (const placeholder of placeholders) {
        placeholder.classList.remove('hovered');
    }
}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add('dragover');
    
}

function dragleave(event) {
    event.target.classList.remove('dragover');
}

function drop(event) {
    event.target.classList.remove('dragover');
    event.target.append(item);
}