const wasm = require("./main.rs")

wasm.initialize({noExitRuntime: true}).then(module => {

})

if (module && module.hot) {
	module.hot.accept();
}