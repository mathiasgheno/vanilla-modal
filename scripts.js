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
    document
      .querySelector('#modal')
      .setAttribute('class', 'dialog-wrapper');
  }

  const handleCloseModal = () => {
    document
      .querySelector('#modal')
      .setAttribute('class', 'dialog-wrapper dialog-wrapper__ease_in dialog-wrapper__closed')
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
