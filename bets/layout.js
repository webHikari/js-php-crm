
const hiderButton = document.getElementById('hider');
const sidebarItems = document.querySelectorAll(
    '.sidebar__item-text'
);
const sidebar = document.querySelector('.sidebar');
const sidebarLogo = document.getElementById('sidebar__logo');
const header = document.querySelector('header');
const main = document.querySelector('main');
const first = document.querySelector('.sidebar__item-first');
hiderButton.addEventListener('click', function () {
    sidebarItems.forEach((item) => {
        if (item.style.display === 'none') {
            item.style.display = 'inline';
        } else {
            item.style.display = 'none';
        }
    });

    if (sidebarItems[0].style.display === 'none') {
        sidebar.style.width = '56px';
        main.style.marginLeft = '56px';
        header.style.marginLeft = '56px';
        sidebarLogo.style.display = 'none';
        first.style.marginTop = '56px';
        hiderButton.style.transform = 'rotate(180deg)';
    } else {
        setTimeout(() => {
            sidebarLogo.style.display = 'block';
            first.style.marginTop = '0px';
        }, 300);
        sidebar.style.width = '240px';
        main.style.marginLeft = '240px';
        header.style.marginLeft = '240px';
        hiderButton.style.transform = 'rotate(360deg)';
    }
});


const tableRows = document.querySelectorAll('.main__table-row');
let modalOpen = false;

tableRows.forEach((row) => {
    row.addEventListener('click', function () {
        if (!modalOpen) {
            console.log('Change-Modal opened.');

            const modalOverlay = document.createElement('div');
            modalOverlay.classList.add('main__table-modal-overlay');

            const modal = document.createElement('div');
            modal.classList.add('main__table-modal');

            const modalChild = document.createElement('div');
            modalChild.classList.add('main__table-modal__child');

            const closeButton = document.createElement('button');
            closeButton.classList.add('main__table-modal-close');
            closeButton.innerHTML = '&times;';
            
            const form = document.createElement('form');
            form.action = 'change.php';
            form.innerHTML = 'Change bet info';

            const items = this.querySelectorAll('.main__table-item');
            for(let i = 0; i < items.length; i++) {

                const input = document.createElement('input');
                input.type = 'text';
                input.name = 'inputName' + i;
                input.value = items[i].innerHTML;
                if (i == 0) {
                    input.placeholder = 'Ставка'
                } else if (i == 1) {
                    input.placeholder = 'Норма';
                } else if (i == 2) {
                    input.placeholder = 'Комментарий';
                }
                form.appendChild(input);

                const hiddenInput = document.createElement('input');
                hiddenInput.type = 'hidden';
                hiddenInput.name = 'hiddenInputName' + i;
                hiddenInput.value = items[i].innerHTML;
                form.appendChild(hiddenInput);
            }

            const submitButton = document.createElement('button');
            submitButton.innerHTML = "Change element";
            submitButton.type = 'submit';
            form.appendChild(submitButton);

            modalChild.appendChild(closeButton);
            modalChild.appendChild(form);
            modal.appendChild(modalChild);
            document.body.appendChild(modalOverlay);
            document.body.appendChild(modal);

            modalOpen = true;

            modalOverlay.addEventListener('click', closeModal);
            closeButton.addEventListener('click', closeModal);
        }
    });
});

function closeModal() {
    const modal = document.querySelector('.main__table-modal');
    const modalOverlay = document.querySelector(
        '.main__table-modal-overlay'
    );

    document.body.removeChild(modalOverlay);
    document.body.removeChild(modal);

    console.log('Change-Modal closed.');
    modalOpen = false;
}


const addButton = document.getElementById('header_add-button');

addButton.addEventListener('click', function () {
    if (!modalOpen) {
        console.log('Create-Modal opened.');

        const modalOverlay = document.createElement('div');
        modalOverlay.classList.add('main__table-modal-overlay');

        const modal = document.createElement('div');
        modal.classList.add('main__table-modal');

        const modalChild = document.createElement('div');
        modalChild.classList.add('main__table-modal__child');

        const closeButton = document.createElement('button');
        closeButton.classList.add('main__table-modal-close');
        closeButton.innerHTML = '&times;';

        const form = document.createElement('form');
        form.action = 'send.php';
        // form.method = 'POST';
        form.innerHTML = 'Add new bet.';
        for (let i = 0; i < 3; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.name = 'inputName' + i;
            if (i == 0) {
                input.placeholder = 'Ставка'
            } else if (i == 1) {
                input.placeholder = 'Норма';
            } else if (i == 2) {
                input.placeholder = 'Комментарий'
            }
            form.appendChild(input);
        }

        const submitButton = document.createElement('button');
        submitButton.innerHTML = "Create element.";
        submitButton.type = 'submit';
        submitButton.value = 'Submit';
        form.appendChild(submitButton);


        closeButton.classList.add('main__table-modal-close');
        closeButton.innerHTML = '&times;';


        modalChild.appendChild(form);
        modalChild.appendChild(closeButton);
        modal.appendChild(modalChild);
        document.body.appendChild(modalOverlay);
        document.body.appendChild(modal);
        modalOpen = true;
        
        modalOverlay.addEventListener('click', closeModal);
        closeButton.addEventListener('click', closeModal);
    }
    function closeModal() {
        const modalOverlay = document.querySelector(
            '.main__table-modal-overlay'
        );
        const modal = document.querySelector('.main__table-modal');

        document.body.removeChild(modalOverlay);
        document.body.removeChild(modal);
        console.log('Create-Modal closed.');
        modalOpen = false;
    }
});
