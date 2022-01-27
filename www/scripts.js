const handleEscape = (event) => {
  const isScape = event.keyCode === 27;

  if(!isScape) {
    return;
  }

  const isModalOpen = document
    .querySelector('#modal')
    .getAttribute('class') === 'dialog-wrapper';

  if(isModalOpen) {
    handleCloseModal();
  }
}

const handleOpenModal = () => {
  blockScrollInProjectKeepInModal();

  const modalNode = document.querySelector('#modal');
  modalNode.setAttribute('style', 'visibility: visible;')
  modalNode.setAttribute('class', 'dialog-wrapper');

  const modalMaskNode = document.querySelector('#dialog_mask');
  modalMaskNode.setAttribute('class', 'dialog-mask dialog-mask__open');
}

const handleCloseModal = () => {
  blockScrollInProjectKeepInModal(true);

  const modalNode = document.querySelector('#modal');
  modalNode.setAttribute('class', 'dialog-wrapper dialog-wrapper__closed')

  const modalMaskNode = document.querySelector('#dialog_mask');
  modalMaskNode.setAttribute('class', 'dialog-mask dialog-mask__closed');

  setTimeout(() => {
    modalNode.setAttribute('style', 'visibility: hidden;')
  }, 210);
}

const blockScrollInProjectKeepInModal = (remover = false) => {
  const styleScriptId = 'style_script_scroll'
  let styleScript;

  if(remover) {
    // wait for animation, so modal does not get extra padding from scroll
    setTimeout(() => {
      styleScript = document.querySelector(`#${styleScriptId}`);
      styleScript.parentNode.removeChild(styleScript);
    }, 300);
    return;
  }

  styleScript = document.createElement('style');
  styleScript.setAttribute('type', 'text/css');
  styleScript.setAttribute('id', styleScriptId);
  styleScript.innerHTML = `
    body {
      overflow: hidden;
      overflow-y: hidden;
      padding-right: 0 !important;
    }
  `;
  document.head.appendChild(styleScript);
}

document
  .querySelector('#abrir')
  .addEventListener('click', handleOpenModal);

document
  .querySelector('#fechar')
  .addEventListener('click', handleCloseModal);

document
  .addEventListener('keydown', handleEscape)

document
  .querySelector('#dialog_mask')
  .addEventListener('click', handleCloseModal)
