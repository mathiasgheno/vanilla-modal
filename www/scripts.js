window.onload = () => {

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
    const modalNode = document.querySelector('#modal');
    modalNode.setAttribute('style', 'visibility: visible;')
    modalNode.setAttribute('class', 'dialog-wrapper');
  }

  const handleCloseModal = () => {
    const modalNode = document.querySelector('#modal');
    modalNode.setAttribute('class', 'dialog-wrapper dialog-wrapper__ease_in dialog-wrapper__closed')
    setTimeout(() => {
      modalNode.setAttribute('style', 'visibility: hidden;')
    }, 210);
  }

  document
    .querySelector('#abrir')
    .addEventListener('click', handleOpenModal);

  document
    .querySelector('#fechar')
    .addEventListener('click', handleCloseModal);

  document
    .addEventListener('keydown', handleEscape)
}