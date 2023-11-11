// DOM Elements
const tbody = document.getElementById('tbody')

// Event Listener
document.addEventListener('DOMContentLoaded', () => {
	renderTable()
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
