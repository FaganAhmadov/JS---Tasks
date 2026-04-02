const tbody = document.querySelector('tbody')
const createBtn = document.getElementById('create')
const createModal = document.getElementById('createModal')
const createForm = document.getElementById('createForm')
const updateModal = document.getElementById('updateModal')
const updateForm = document.getElementById('updateForm')
const search = document.getElementById('search')
let selectedCompany;
let globalData = []



async function getAllCompanies() {
    try {
        const res = await fetch('https://northwind.vercel.app/api/suppliers')
        const data = await res.json()
        globalData = data
        tbody.innerHTML = ''
        data.forEach((company) => {
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
        console.log('get All Companies', error);
    }
}

getAllCompanies()

async function deleteCompany(id, btn) {
    btn.disabled = true
    btn.children[0].classList.remove('hidden')

    try {
        const res = await fetch(`https://northwind.vercel.app/api/suppliers/${id}`, {
            method: 'DELETE'
        })
        if (res.ok) {
            getAllCompanies()
        }

    } catch (error) {
        console.log('delete company errror id', error);
    } finally {
        btn.disabled = false
        btn.children[0].classList.add('hidden')
    }
}

async function editCompany(id) {
    try {
        updateModal.classList.replace('hidden', 'flex')
        selectedCompany = id
        const res = await fetch(`https://northwind.vercel.app/api/suppliers/${id}`)
        const data = await res.json()
        updateForm.companyName.value = data.companyName;
        updateForm.contactName.value = data.contactName;
        updateForm.contactTitle.value = data.contactTitle;
        updateForm.street.value = data.address.street;
        updateForm.city.value = data.address.city;
        updateForm.region.value = data.address.region;
        updateForm.postalCode.value = data.address.postalCode;
        updateForm.country.value = data.address.country;
        updateForm.phone.value = data.address.phone;
    } catch (error) {
        console.log('get single company for update err', error);
    }
}

    
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
        const res = await fetch(`https://northwind.vercel.app/api/suppliers/${selectedCompany}`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(companyData)
        })
        if (res.ok) {
            getAllCompanies();
            updateModal.classList.replace('flex', 'hidden')
            updateForm.reset()
        }

    } catch (error) {
        console.log('update Company EER', error);
    }
})

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
        const res = await fetch('https://northwind.vercel.app/api/suppliers', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newCompany)
        })
        if (res.ok) {
            getAllCompanies()
            createModal.classList.replace('flex', 'hidden')
        }

    } catch (error) {
        console.log('create new Company Err', error);
    }
})


createBtn.addEventListener('click', () => {
    createModal.classList.replace("hidden", 'flex')
})

createModal.addEventListener('click', (e) => {
    if (e.target === createModal) {
        createModal.classList.replace('flex', 'hidden')
    }
})

updateModal.addEventListener('click', (e) => {
    if (e.target === updateModal) {
        updateModal.classList.replace('flex', 'hidden')
        updateForm.reset()
    }
})

search.addEventListener('input', (e) => {
    let value = e.target.value.trim().toLowerCase();

    const filteredList = globalData.filter(company =>
        company.companyName?.toLowerCase().includes(value) ||
        company.contactName?.toLowerCase().includes(value) ||
        company.contactTitle?.toLowerCase().includes(value)
    );

    tbody.innerHTML = "";

    filteredList.forEach((company) => {
        tbody.innerHTML += `
            <tr class="border-b hover:bg-gray-50">
                <td class="p-4">${company.id}</td>
                <td class="p-4">${company.companyName}</td>
                <td class="p-4">${company.contactName}</td>
                <td class="p-4">${company.contactTitle}</td>

                <td class="p-4 flex gap-2 justify-center">
                    <button onclick="editCompany(${company.id})"
                        class="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600">
                        Edit
                    </button>
                    <button onclick="deleteCompany(${company.id},this)"
                        class="flex px-3 py-1 text-xs bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-black/50">
                        Delete
                        <div class="hidden w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </button>
                </td>
            </tr>
        `;
    });
});

