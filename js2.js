function selectaaa(selector)
{
	console.log("aaaaaaa");

	let gyumolcs = fruits.find(obj => obj.id == selector.value)

	document.getElementById("title").innerText = gyumolcs.name;
	document.getElementById("description").innerText = gyumolcs.descr;
	document.getElementById("gyumolcskep").src = `img/${gyumolcs.image}`;
}