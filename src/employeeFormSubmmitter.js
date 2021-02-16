const form = document.querySelector('form');
const submitHandler = (event) => {
    event.preventDefault();
    const { currentTarget } = event;
    const id = window.location.search[window.location.search.length - 1];
    let data = { id };

    for (let i = 0; i < 10; i++) {
        const name = currentTarget[i].id;
        const value = currentTarget[i].value;
    
        Object.assign(data, {[name]: value});
    } 

    axios({
        method: 'PATCH',
        url: `http://localhost:8000/src/library/employeeController.php`,
        data
    });
}

form.addEventListener('submit', submitHandler);