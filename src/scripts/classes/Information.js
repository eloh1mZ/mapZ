export default class Information {
	constructor() {
		this.el = document.querySelector(".info")

		let child = ["heading", "picture", "description", "residents"]
		child.forEach(key => {
			this[key] = this.el.querySelector(`.info__${key}`)
		})

		this.fields = {}
		this.fieldsList = {
			heading: ["subtitle", "title"],
			coords: ["value--nether", "value--overworld"]
		}
		Object.keys(this.fieldsList).forEach(key => {
			this.fields[key] = {}
			this.fieldsList[key].forEach(cl => {
				let _key = cl.split("--").pop()
				this.fields[key][_key] = this.el.querySelector(`.${key}__${cl}`)
			})
		})
		this.el.querySelector(".info__btn").onclick = this.close.bind(this)
	}
	show(dot) {
		Object.keys(this.fields.heading).forEach(key => {
			if (!this.fields.heading[key]) return
			if (!dot[key])
				this.fields.heading[key].style.display = "none"
			else
				this.fields.heading[key].innerText = dot[key]
 		})

		console.log(dot);

		this.fields.coords.nether.innerText = `${dot.nether[0]} ${dot.nether[1]}`

		this.el.style.setProperty("--branch", "var(--" + dot.branch + ")")
		this.el.classList.add("info--opened")
	}
	close() {
		this.el.classList.remove("info--opened")
	}
}