

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '2ab020db8cmsh21324bfdaa7b502p1595a2jsnbe0be0637a64',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers:headers});
    const result = await response.json()

    return result

}