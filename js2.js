function selectaaa(selector)
{
	let gyumolcs = fruits.find(obj => obj.id == selector.value)

	if (gyumolcs == null)
	{
		document.getElementById("gyumolcs_content").classList.add("hidden") // aaaaaa
		return
	}

	document.getElementById("gyumolcs_content").classList.remove("hidden")

	document.getElementById("title").innerText = gyumolcs.name;
	document.getElementById("description").innerText = gyumolcs.descr;
	document.getElementById("gyumolcskep").src = `img/${gyumolcs.image}`;
}