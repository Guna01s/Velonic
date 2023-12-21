const fetchData = async () => {
	const apiUrl = 'http://192.168.1.9/P'
	try {
		const response = await fetch(apiUrl)
		console.log('resp', response)
		if (!response.ok) {
			throw new Error('Network response was not ok')
		}
		const data = await response.json()
		setObjectData(data) // Update state with fetched object
		console.log('res', response)
		console.log('data', data)
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}
