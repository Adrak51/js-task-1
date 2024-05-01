const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

function updateNameOutput() {
    nameOutput.textContent = nameInput.value.trim() !== '' ? nameInput.value : 'Anonymous';
}

nameInput.addEventListener('input', updateNameOutput);

updateNameOutput();