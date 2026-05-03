const tbody = document.querySelector('tbody')
const createBtn = document.getElementById('create')
const createModal = document.getElementById('createModal')
const updateModal = document.getElementById('updateModal')
const createForm = document.getElementById('createForm')
const updateForm = document.getElementById('updateForm')
const searchInp = document.getElementById('search')
let selectedCompanyID;
let globalData = []

async function getData() {
    const res = await fetch("https://northwind.vercel.app/api/suppliers")
    const data = await res.json()
    globalData = data
    tbody.innerHTML = ''
    data.forEach(company => {
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
}
getData()

async function deleteCompany(id, btn) {
    btn.children[0].classList.remove('hidden')
    btn.disabled = true

    try {
        const res = await fetch(`https://northwind.vercel.app/api/suppliers/${id}`, {
            method: 'DELETE'
        })

        if (res.ok) {
            getData()
        }
    } catch (error) {
        console.log(error);
    } finally {
        btn.disabled = false
        btn.children[0].classList.add('hidden')
    }

}

createBtn.addEventListener('click', () => {
    createModal.classList.replace('hidden', 'flex')
})
// kenara click edende Modalin baglanmasi?
createModal.addEventListener('click', (e) => {
    if (e.target === createModal) {
        createModal.classList.replace('flex', 'hidden')
    }
})

// postRequest/CreateData
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
            phone: createForm.phone.value
        }
    }
    try {
        const res = await fetch('https://northwind.vercel.app/api/suppliers', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(newCompany)
        })

        if (res.ok) {
            getData()
            createModal.classList.replace('flex', 'hidden')
        }
    } catch (error) {
        console.log(error);
    }
})

// edit buttonDoClick
async function editCompany(id) {
    updateModal.classList.replace('hidden', 'flex')
    selectedCompanyID = id
    const res = await fetch(`https://northwind.vercel.app/api/suppliers/${id}`)
    const data = await res.json()
    updateForm.companyName.value = data.companyName || 'UnKnown';
    updateForm.contactName.value = data.contactName || 'UnKnown';
    updateForm.contactTitle.value = data.contactTitle || 'UnKnown';
    updateForm.city.value = data.address.city || 'UnKnown';
    updateForm.street.value = data.address.street || 'UnKnown';
    updateForm.region.value = data.address.region || 'UnKnown';
    updateForm.postalCode.value = data.address.postalCode || 'UnKnown';
    updateForm.country.value = data.address.country || 'UnKnown';
    updateForm.phone.value = data.address.phone || 'UnKnown';

}
// editModal  kenara click edende Modalin baglanmasi
updateModal.addEventListener('click', (e) => {
    if (e.target === updateModal) {
        updateModal.classList.replace('flex', 'hidden')
    }
})

// PuT method
updateForm.addEventListener('submit', async (e) => {
    e.preventDefault()
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
            phone: updateForm.phone.value
        }
    }
    try {
        const res = await fetch(`https://northwind.vercel.app/api/suppliers/${selectedCompanyID}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(companyData)
            }
        )
        if (res.ok) {
            getData()
            updateModal.classList.replace('flex', 'hidden')
        }
    } catch (error) {
        console.log(error);
    }
})

searchInp.addEventListener('input', (e) => {
    let value = e.target.value.trim().toLowerCase()
    let filteredList = globalData.filter(company => company.companyName.toLowerCase().includes(value))
    tbody.innerHTML = ''
    filteredList.forEach(company => {
        tbody.innerHTML += `
            <tr class="border-b hover:bg-gray-50">
                    <td class="p-4">${company.id}</td>
                    <td class="p-4">${company.companyName}</td>
                    <td class="p-4">${company.contactName}</td>
                    <td class="p-4">${company.contactTitle}</td>
                    <td class="p-4 flex gap-2 justify-center">
                        <button  onclick="editCompany(${company.id})" class="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600">
                            Editg
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