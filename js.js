function generateSelection()
{
	let selector = document.getElementById("gyumolcs")

	fruits.forEach(fruit => {
		
		selector.innerHTML += `<option value="${fruit.id}">${fruit.name}</option>`

	});
}

generateSelection()
