// DOM Elements
const tbody = document.getElementById('tbody')
const form = document.getElementById('form')
const validation = document.getElementById('validation')

// Event Listener
document.addEventListener('DOMContentLoaded', () => {
	renderTable()
})

form.addEventListener('submit', (e) => {
	e.preventDefault()
	if (validateForm()) {
		validation.style.opacity = '0'
	} else {
		validation.style.opacity = '1'
	}
})

// Functions
const renderTable = () => {
	const fragment = document.createDocumentFragment()
	tbody.innerHTML = ''
	sortData()

	data.forEach((item) => {
		const tr = document.createElement('tr')

		const trData = `<td>${item.fName} ${item.lName}</td>
                        <td>${item.country}</td>
                        <td class="flex gap-x-4 items-center justify-center">
                            <button class="btn btn-info btn-sm w-12 subtract5">-5</button>
                            <span>${item.score}</span>
                            <button class="btn btn-info btn-sm w-12 add5">+5</button>
                        </td>
                        <td>
                            <i
                                class="fa-solid fa-trash hover:text-red-600 duration-200 cursor-pointer"
                            ></i>
                        </td>
                        `

		tr.id = item.id
		tr.innerHTML = trData
		fragment.appendChild(tr)
	})

	tbody.appendChild(fragment)
}

const sortData = () => {
	data.sort((o1, o2) => o2.score - o1.score)
}

const validateForm = () => {
	const elements = form.elements

	if (
		elements[0].value === '' ||
		elements[1].value === '' ||
		elements[2].value === '' ||
		elements[3].value === ''
	) {
		return false
	}
}
