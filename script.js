// DOM Elements
const tbody = document.getElementById('tbody')
const form = document.getElementById('form')
const validation = document.getElementById('validation')

// Event Listeners
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
	data.forEach((item) => {
		const id = item.id
		const tr = document.getElementById(id)

		tr.children[2].children[0].addEventListener('click', () => {
			subtract(id)
		})

		tr.children[2].children[2].addEventListener('click', () => {
			add(id)
		})

		tr.children[3].children[0].addEventListener('click', () => {
			deleteData(id)
		})
	})
}

// Functions

/**
 * Renders a table based on the data provided.
 *
 * @return {void} The table is rendered in the DOM.
 */
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

/**
 * Sorts the data array in descending order based on the score property of each object.
 *
 * @return {undefined} This function does not return a value.
 */
const sortData = () => {
	data.sort((o1, o2) => o2.score - o1.score)
}

/**
 * Validates the form by checking if all the required fields have been filled out.
 *
 * @return {boolean} Returns true if all required fields have been filled out, otherwise false.
 */
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

/**
 * Adds data to the data array and triggers a table render after a delay.
 *
 * @return {void} No return value.
 */
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

/**
 * Resets the form by clearing the values of all input elements.
 *
 * @param {object} form - The form element.
 */
const resetForm = () => {
	const elements = form.elements

	elements[0].value = ''
	elements[1].value = ''
	elements[2].value = ''
	elements[3].value = ''
}

/**
 * Updates the score of an item identified by the given id.
 *
 * @param {number} id - The id of the item to update.
 * @return {undefined} - This function does not return a value.
 */
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

/**
 * Delete data with the given ID from the data array.
 *
 * @param {number} id - The ID of the data to be deleted.
 * @return {undefined} This function does not return anything.
 */
const deleteData = (id) => {
	const index = data.findIndex((item) => item.id === id)

	if (index !== -1) {
		data.splice(index, 1)
	}

	renderTable()
}
