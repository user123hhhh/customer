const modal = [...document.querySelectorAll('.modal')];
const arrowIcon = [...document.querySelectorAll('i')];
const modalContent = [...document.querySelectorAll('.modal-content')];

modal.forEach(function (item, index) {
    item.addEventListener('click', function (e) {
        const currentModal = e.currentTarget.nextElementSibling;
        /* currentModal.style.height = `${contentHeight}px`; */
        currentModal.classList.toggle('display-content');

        arrowIcon[index].classList.toggle('rotate-arrow');
        modal.forEach(function (modal) {
            if (item !== modal) {
                modal.nextElementSibling.classList.remove('display-content');
                modal.querySelector('i').classList.remove('rotate-arrow');
            }
        });

        modalContent.forEach(function (item) {
            const contentHeight = item.querySelector('ul').offsetHeight;
            console.log(contentHeight);
            if (!item.classList.contains('display-content')) {
                item.style.height = `0px`;
            } else {
                item.style.height = `${contentHeight}px`;
            }
        });
    });
});
