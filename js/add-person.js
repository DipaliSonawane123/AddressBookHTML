window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).fullname = name.value;;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const phone = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    phone.addEventListener('input', function () {
        if (phone.value.length == 0) {
            phoneError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).phone = phone.value;;
            phoneError.textContent = "";
        } catch (e) {
            phoneError.textContent = e;
        }
    });

    const address = document.querySelector('#address');
    const addressError = document.querySelector('.add-error');
    address.addEventListener('input', function () {
        if (address.value.length == 0) {
            adddressError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).address = address.value;;
            addressError.textContent = "";
        } catch (e) {
            addressError.textContent = e;
        }
    });

    const zip = document.querySelector('#zip');
    const zipError = document.querySelector('.zip-error');
    zip.addEventListener('input', function () {
        if (zip.value.length == 0) {
            zipError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).zip = zip.value;;
            zipError.textContent = "";
        } catch (e) {
            zipError.textContent = e;
        }
    });
});

// UC-6
const save = () => {
    try{
        let addressBookData = createAddressBook();
    }catch (e) {
        return;
    }
}

//UC-6
const createAddressBook = () => {
    let addressBookData = new AddressBookData();
    try{
        addressBookData.fullname = getInputValuesById('#name');
    }catch(e){
        setTextValue('.test-error', e);
        throw e;
    }
    addressBookData.phone = getInputValuesById('#phone');
    addressBookData.address = getInputValuesById('#address');
    addressBookData.city = getInputValuesById('[name=city]');
    addressBookData.state = getInputValuesById('[name=state]');
    addressBookData.zip = getInputValuesById('#zip');
    alert(addressBookData.toString());
    return addressBookData;
}

const getInputValuesById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}