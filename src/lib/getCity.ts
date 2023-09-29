import type City from "./types";
import { PUBLIC_API_KEY } from "$env/static/public";

const CITIES = [
	{
		city: "Hong Kong",
		country: "China",
		image:
			"https://images.unsplash.com/photo-1576788369575-4ab045b9287e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1344&q=80"
	},
	{
		city: "Bangkok",
		country: "Thailand",
		image: "https://cdn.pixabay.com/photo/2016/11/06/01/16/thailand-1802055_1280.jpg"
	},
	{
		city: "London",
		country: "UK",
		image:
			"https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80"
	},
	{
		city: "Singapore",
		country: "Singapore",
		image:
			"https://images.unsplash.com/photo-1602010143890-8dbfa316b5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
	},
	{
		city: "Macau",
		country: "China",
		image: "https://cdn.pixabay.com/photo/2018/10/22/19/34/macau-3766162_1280.jpg"
	},
	{
		city: "Paris",
		country: "France",
		image:
			"https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
	},
	{
		city: "Dubai",
		country: "UAE",
		image:
			"https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80"
	},
	{
		city: "New York City",
		country: "US",
		image:
			"https://images.unsplash.com/photo-1585155967849-91c736589c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80"
	},
	{
		city: "Kuala Lumpur",
		country: "Malaysia",
		image:
			"https://images.unsplash.com/photo-1506320775314-84c60bff00ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
	},
	{
		city: "Shenzhen",
		country: "China",
		image:
			"https://images.unsplash.com/photo-1634647626782-f5fffa9fd9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
	},
	{
		city: "Phuket",
		country: "Thailand",
		image:
			"https://images.unsplash.com/photo-1586820672103-2272d8490ade?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1347&q=80"
	},
	{
		city: "Istanbul",
		country: "Turkey",
		image:
			"https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1298&q=80"
	},
	{
		city: "Delhi",
		country: "India",
		image:
			"https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
	},
	{
		city: "Tokyo",
		country: "Japan",
		image:
			"https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
	},
	{
		city: "Rome",
		country: "Italy",
		image:
			"https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1396&q=80"
	},
	{
		city: "Antalya",
		country: "Turkey",
		image:
			"https://images.unsplash.com/photo-1587635877415-6a5ca38782b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80"
	},
	{
		city: "Taipei",
		country: "Taiwan",
		image:
			"https://images.unsplash.com/photo-1601534622119-e9b3aa7c7bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
	},
	{
		city: "Guangzhou",
		country: "China",
		image:
			"https://images.unsplash.com/photo-1563090162-6b4c2a20d658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1282&q=80"
	},
	{
		city: "Mumbai",
		country: "India",
		image:
			"https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80"
	},
	{
		city: "Prague",
		country: "Czechia",
		image:
			"https://images.unsplash.com/photo-1571778200037-250828fe3eee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
	},
	{
		city: "Mecca",
		country: "Saudi Arabia",
		image:
			"https://images.unsplash.com/photo-1592326871020-04f58c1a52f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80"
	},
	{
		city: "Miami",
		country: "US",
		image: "https://cdn.pixabay.com/photo/2017/08/28/16/11/miami-2690191_1280.jpg"
	},
	{
		city: "Amsterdam",
		country: "Netherlands",
		image:
			"https://images.unsplash.com/photo-1558551649-e44c8f992010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1334&q=80"
	},
	{
		city: "Seoul",
		country: "South Korea",
		image:
			"https://images.unsplash.com/photo-1538485399081-7191377e8241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1348&q=80"
	},
	{
		city: "Pattaya",
		country: "Thailand",
		image:
			"https://images.unsplash.com/photo-1599851245208-c1e43c053710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80"
	},
	{
		city: "Shanghai",
		country: "China",
		image:
			"https://images.unsplash.com/photo-1535356795203-50b2eb73f96c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1343&q=80"
	},
	{
		city: "Los Angeles",
		country: "US",
		image:
			"https://images.unsplash.com/photo-1544413660-299165566b1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
	},
	{
		city: "Las Vegas",
		country: "US",
		image:
			"https://images.unsplash.com/photo-1634400139456-292e44ca5327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
	},
	{
		city: "Agra",
		country: "India",
		image:
			"https://images.unsplash.com/photo-1616368309964-3a686de13b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
	},
	{
		city: "Osaka",
		country: "Japan",
		image:
			"https://images.unsplash.com/photo-1590559899731-a382839e5549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
	},
	{
		city: "Barcelona",
		country: "Spain",
		image:
			"https://images.unsplash.com/photo-1558642084-fd07fae5282e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80"
	},
	{
		city: "Milan",
		country: "Italy",
		image:
			"https://images.unsplash.com/photo-1594755260889-29d5fb8e2d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80"
	},
	{
		city: "Denpasar",
		country: "Indonesia",
		image:
			"https://images.unsplash.com/photo-1593332918742-00df7074ca05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
	},
	{
		city: "Vienna",
		country: "Austria",
		image:
			"https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1340&q=80"
	}
];

const generateRandomCity = (history: string[]) => {
	let randomCity;
	do {
		const randomIndex = Math.floor(Math.random() * CITIES.length);
		randomCity = CITIES[randomIndex];
	} while (history.includes(randomCity.city));
	return randomCity;
};

const fetchTemperature = async (city: string) => {
	const response = await fetch(
		`http://api.weatherapi.com/v1/current.json?key=${PUBLIC_API_KEY}&q=${city}`
	);
	if (!response.ok) return alert("Whoops! Something went wrong.");

	const data = await response.json();
	const temperature = {
		celsius: data.current.temp_c as number,
		fahrenheit: data.current.temp_f as number
	};
	return temperature;
};

const updateHistory = (history: string[], city: string) => {
	for (let i = history.length - 1; i > 0; i--) {
		history[i] = history[i - 1];
	}
	history[0] = city;
};

const getCity = async (history: string[]) => {
	const randomCity = generateRandomCity(history);

	const temperature = await fetchTemperature(randomCity.city);
	if (!temperature) return null;

	updateHistory(history, randomCity.city);

	const city: City = {
		...randomCity,
		...temperature
	};
	return city;
};

export default getCity;
