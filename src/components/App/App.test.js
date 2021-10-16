const App = require("./App")

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Jean-Philippe", "Michael", "Anas"], ["Pierre Edouard", "Jean-Philippe", "Edmond"], ["Anas", "Michael", "Jean-Philippe"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
