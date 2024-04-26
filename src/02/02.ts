type cityType = {
	title: string
	countyTitle: string
}
type addressType = {
	streetTitle: string
	city: cityType
}

type TechType = {
	id: number
	title: string
}

type studentType = {
	id: number
	name: string
	age: number
	isActive: boolean
	address: addressType
	technologies: Array<TechType>
}

const student: studentType = {
	id: 1,
	name: 'Dimych',
	age: 32,
	isActive: false,
	address: {
		streetTitle: 'Surganova 2',
		city: {
			title: 'Minsk',
			countyTitle: 'Belarus',
		},
	},
	technologies: [
		{
			id: 1,
			title: 'HTML',
		},
		{
			id: 2,
			title: 'CSS',
		},
		{
			id: 3,
			title: 'React',
		},
	],
}

console.log(student.address)
console.log(student.technologies[2])
