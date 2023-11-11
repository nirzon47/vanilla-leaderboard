// DOM Elements
const tbody = document.getElementById('tbody')
const form = document.getElementById('form')
const validation = document.getElementById('validation')
const addFive = document.getElementsByClassName('add5')
const subtractFive = document.getElementsByClassName('subtract5')

// Event Listener
document.addEventListener('DOMContentLoaded', () => {
	setTimeout(renderTable(), 300)
	addButtons()
})

form.addEventListener('submit', (e) => {
	e.preventDefault()
	if (validateForm()) {
		addData()

		setTimeout(() => {
			validation.style.opacity = '0'
		}, 100)

		resetForm()
	} else {
		setTimeout(() => {
			validation.style.opacity = '1'
		}, 100)
	}
})

const addButtons = () => {
	Array.from(addFive).forEach((item) => {
		item.addEventListener('click', (e) => {
			add(parseInt(e.target.parentElement.parentElement.id))
		})
	})

	Array.from(subtractFive).forEach((item) => {
		item.addEventListener('click', (e) => {
			subtract(parseInt(e.target.parentElement.parentElement.id))
		})
	})
}

// Functions
const renderTable = () => {
	const fragment = document.createDocumentFragment()
	tbody.innerHTML = ''
	tbody.style.opacity = '1'
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

	addButtons()
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
	} else {
		return true
	}
}

const addData = () => {
	const elements = form.elements

	data.push({
		id: Date.now(),
		fName: elements[0].value,
		lName: elements[1].value,
		country: elements[2].value,
		score: elements[3].value,
	})

	setTimeout(renderTable(), 300)
}

const resetForm = () => {
	const elements = form.elements

	elements[0].value = ''
	elements[1].value = ''
	elements[2].value = ''
	elements[3].value = ''
}

const add = (id) => {
	const item = data.find((item) => item.id === id)

	item.score = parseInt(item.score) + 5

	renderTable()
}

const subtract = (id) => {
	const item = data.find((item) => item.id === id)

	item.score -= 5

	renderTable()
}
