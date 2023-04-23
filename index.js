const searchForm = document.querySelector('#searchForm');
const ul = document.querySelector('#ul');

searchForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    while (ul.firstChild) {                       //removing appended elements to div so that each time we can get fresh output
        ul.removeChild(ul.firstChild);
    }
    const id = searchForm.elements.id.value;
    const username = searchForm.elements.username.value;
    const password = searchForm.elements.password.value;
    let li = document.createElement('li');

    try {
        const res = await axios.post(`http://192.168.137.129:5000/login/${id}?username=${username}&password=${password}`);
        console.log(res.data);
        let token = res.data.token;
        try {
            const tokenVarification = await axios.get(`http://192.168.137.129:5000/protected/${token}`);
            console.log(tokenVarification);
            if (tokenVarification.status == 200) {
                localStorage.setItem('agent_id', id);
                window.location.href = `index.html`;                //redirect
                // li.innerText = tokenVarification.data.message;
            }
        }
        catch (e) {
            console.log("wrong token");
            li.innerText = 'Invalid token';
        }
    }
    catch (e) {
        console.log("Incorrect");
        li.innerText = 'Invalid Credentials ';
    }
    ul.appendChild(li);


});