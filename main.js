const url = 'https://jsonplaceholder.org/users'

async function get() {
	try {
		const response = await fetch(url)
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		const data = await response.json()
		console.log(data)
		function setData(data) {}
	} catch (error) {
		console.error('Error:', error)
	}
}

get()

