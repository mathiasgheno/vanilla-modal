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
  const style = document.createElement('style');
  style.innerHTML = `
    body {
      overflow: hidden;
      overflow-y: hidden;
      padding-right: 0 !important;
    }
  `;
  if(remover) {
    document.head.removeChild(style);
  }
  document.head.appendChild(style);
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
