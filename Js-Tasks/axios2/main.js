const elems = document.getElementById('elements')
const addFormBtn = document.getElementById('addForm');
const companyNameinp = document.getElementById('companyName');
const contactTitleinp = document.getElementById('contactTitle');
const url = 'https://northwind.vercel.app/api/suppliers/'

async function getData() {
    const res = await axios(url)
    elems.innerHTML = ''
    res.data.forEach(element => {
        elems.innerHTML += `
    <div class="bg-white  rounded-2xl shadow-lg p-5 flex flex-col gap-3 hover:scale-[1.02] transition">
        <div class="text-sm text-gray-400">
            ID: ${element.id}
        </div>
        <h2 class="text-lg font-semibold text-gray-800">
            ${element.companyName}
        </h2>
        <p class="text-gray-600 text-sm">
            ${element.contactTitle}
        </p>
        <button  onclick='deleteCrop(${element.id})'
            class="mt-3 bg-red-500 hover:bg-red-700 text-white rounded-xl py-2 transition">
            Delete
        </button>
        <button   onclick='editCrop(${element.id})'
            class="mt-3 bg-red-500 hover:bg-red-700 text-white rounded-xl py-2 transition">
            Edit
        </button>
    </div>
        `
    });
}

getData()
// AXIOS.DELETE deleteCrop
const deleteCrop = (id) => {
    const isAgree = confirm('deqiq silmek isteyirsen')
    if (isAgree) {
        axios.delete(url + id).then(({ status }) => {
            if (status === 200) {
                getData()
            }
        })
    }
}
getData()


// AXIOS.Post addCrop
addFormBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
        companyName: companyNameinp.value,
        contactTitle: contactTitleinp.value,
    };
    axios.post(url, data).then((res) => {
        getData()
        companyNameinp.value = ''
        contactTitleinp.value = ''
    })
})


async function editCrop(id) {
    const res = await axios(url + id)

}