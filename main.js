const btn = document.querySelector("[data-roll-dice]");
const id = document.querySelector("[data-id]");
const content = document.querySelector("[data-content");

btn.addEventListener("click", (e) => {
	newAdvice();
});

const newAdvice = () => {
	btn.classList.add("animate");
	fetch("https://api.adviceslip.com/advice")
		.then((res) => res.json())
		.then((data) => {
			btn.classList.remove("animate");
			id.innerHTML = `ADVICE ${data.slip.id}`;
			content.innerHTML = `"${data.slip.advice}"`;
		});
};
