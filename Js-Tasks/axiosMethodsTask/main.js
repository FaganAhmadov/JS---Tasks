const tbody = document.querySelector('tbody')
const createBtn = document.getElementById('create')
const modal = document.getElementById('createModal')
const createForm = document.getElementById('createForm')
const updateModal = document.getElementById('updateModal')
const updateForm = document.getElementById('updateForm')
const searchInp = document.getElementById('search')
let selectedCompany
let globalDAta = []


// axiosGet
async function getData() {
    try {
        const res = await axios('https://northwind.vercel.app/api/suppliers')
        globalDAta = res.data
        tbody.innerHTML = ''
        res.data.forEach((company) => {
            tbody.innerHTML += `
                <tr class="border-b hover:bg-gray-50">
                    <td class="p-4">${company.id}</td>
                    <td class="p-4">${company.companyName}</td>
                    <td class="p-4">${company.contactName}</td>
                    <td class="p-4">${company.contactTitle}</td>
                    <td class="p-4 flex gap-2 justify-center">
                        <button  onclick="editCompany(${company.id})" class="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600">
                            Edit
                        </button>
                        <button  onclick="deleteCompany(${company.id},this)"
                            class=" flex px-3 py-1 text-xs bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 disabled:bg-black/50">
                            Delete
                            <div class="hidden w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </button>
                    </td>
                </tr>
            `
        });
    } catch (error) {
        console.log('getData err', error);
    }
}
getData()

// AxiosDelete
async function deleteCompany(id) {
    try {
        const res = await axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`)
        if (res.status === 200) {
            getData()
        }
    } catch (error) {
        console.log('delete err', error);

    }
}

// edit edende hemin id-li datanin melumatlari form to display
async function editCompany(id) {
    try {
        updateModal.classList.replace('hidden', 'flex')
        selectedCompany = id
        const res = await axios(`https://northwind.vercel.app/api/suppliers/${id}`)
        updateForm.companyName.value = res.data.companyName || 'unKnown'
        updateForm.contactName.value = res.data.contactName || 'unKnown'
        updateForm.contactTitle.value = res.data.contactTitle || 'unKnown'
        updateForm.street.value = res.data.address.street || 'unKnown'
        updateForm.city.value = res.data.address.city || 'unKnown'
        updateForm.region.value = res.data.address.region || 'unKnown'
        updateForm.postalCode.value = res.data.address.postalCode || 'unKnown'
        updateForm.country.value = res.data.address.country || 'unKnown'
        updateForm.phone.value = res.data.address.phone || 'unKnown'

    } catch (error) {
        console.log(error);
    }
}

// createBtn do click OpenModal
createBtn.addEventListener('click', () => {
    modal.classList.replace('hidden', 'flex')
})


// kenara click edende modal baglansin modal
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.replace('flex', 'hidden')
    }
})


// kenara click edende modal baglansin updateModal
updateModal.addEventListener('click', (e) => {
    if (e.target === updateModal) {
        updateModal.classList.replace('flex', 'hidden')
    }
})


//  addDataDisplay && addDapi postMetods    
createForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    let newCompany = {
        companyName: createForm.companyName.value,
        contactName: createForm.contactName.value,
        contactTitle: createForm.contactTitle.value,
        address: {
            street: createForm.street.value,
            city: createForm.city.value,
            region: createForm.region.value,
            postalCode: createForm.postalCode.value,
            country: createForm.country.value,
            phone: createForm.phone.value,
        }
    }
    try {
        const res = await axios.post('https://northwind.vercel.app/api/suppliers', newCompany)
        if (res.status === 200 || res.status === 201) {
            getData()
            modal.classList.replace('flex', 'hidden')
            createForm.reset()
        }
    } catch (error) {
        console.log(error, 'createForm');
    }

})

// edit do click data changes && updateData
updateForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    try {
        let companyData = {
            companyName: updateForm.companyName.value,
            contactName: updateForm.contactName.value,
            contactTitle: updateForm.contactTitle.value,
            address: {
                street: updateForm.street.value,
                city: updateForm.city.value,
                region: updateForm.region.value,
                postalCode: updateForm.postalCode.value,
                country: updateForm.country.value,
                phone: updateForm.phone.value,
            }
        }
        const res = await axios.put(`https://northwind.vercel.app/api/suppliers/${selectedCompany}`, companyData)
        if (res.status === 200 || res.status === 201) {
            getData()
            updateModal.classList.replace('flex', 'hidden')
        }
    } catch (error) {
        console.log(error);
    }
})


searchInp.addEventListener('input', (e) => {
    let value = e.target.value.trim().toLowerCase();
    console.log(value);

    const filteredList = globalDAta.filter(company => company.companyName.toLowerCase().includes(value) || company.contactName.toLowerCase().includes(value))
    tbody.innerHTML = ''
    filteredList.forEach((company) => {
        tbody.innerHTML += `
                <tr class="border-b hover:bg-gray-50">
                    <td class="p-4">${company.id}</td>
                    <td class="p-4">${company.companyName}</td>
                    <td class="p-4">${company.contactName}</td>
                    <td class="p-4">${company.contactTitle}</td>
                    <td class="p-4 flex gap-2 justify-center">
                        <button  onclick="editCompany(${company.id})" class="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600">
                            Edit
                        </button>
                        <button  onclick="deleteCompany(${company.id},this)"
                            class=" flex px-3 py-1 text-xs bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 disabled:bg-black/50">
                            Delete
                            <div class="hidden w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </button>
                    </td>
                </tr>
            `
    });

})