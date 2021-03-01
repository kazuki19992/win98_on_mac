const { ipcRenderer } = window

function Top (props) {
    const sectionMargin = {
        marginTop: 5
    }
    return (
        <div>
            <p>{props.text}</p>
            <button>Click me</button>
            <button disabled style={{"marginLeft": "3px"}}>I cannot be clicked</button>
            <div class="field-row" style={sectionMargin}>
                <input type="checkbox" id="example1" />
                <label for="example1">This is a checkbox</label>
            </div>
            <div class="field-row" style={sectionMargin}>
                <input checked type="checkbox" id="example2" />
                <label for="example2">I am checked</label>
            </div>
            <div class="field-row">
                <input disabled type="checkbox" id="example3" />
                <label for="example3">I am inactive</label>
            </div>
            <div class="field-row">
                <input checked disabled type="checkbox" id="example4" />
                <label for="example4">I am inactive but still checked</label>
            </div>

            <fieldset style={sectionMargin} style={{width: "50%"}}>
                <legend>Today's mood</legend>
                <div class="field-row">
                    <input id="radio13" type="radio" name="fieldset-example2" />
                    <label for="radio13">Claire Saffitz</label>
                </div>
                <div class="field-row">
                    <input id="radio14" type="radio" name="fieldset-example2" />
                    <label for="radio14">Brad Leone</label>
                </div>
                <div class="field-row">
                    <input id="radio15" type="radio" name="fieldset-example2" />
                    <label for="radio15">Chris Morocco</label>
                </div>
                <div class="field-row">
                    <input id="radio16" type="radio" name="fieldset-example2" />
                    <label for="radio16">Carla Lalli Music</label>
                </div>
            </fieldset>

            <ul class="tree-view" style={{width: "80%"}}>
                <li>Table of Contents</li>
                <li>What is web development?</li>
                <li>
                    CSS
                    <ul>
                    <li>Selectors</li>
                    <li>Specificity</li>
                    <li>Properties</li>
                    </ul>
                </li>
                <li>
                    <details open>
                        <summary>JavaScript</summary>
                        <ul>
                            <li>Avoid at all costs</li>
                            <li>
                                <details>
                                    <summary>Unless</summary>
                                    <ul>
                                        <li>Avoid</li>
                                        <li>
                                            <details>
                                                <summary>At</summary>
                                                <ul>
                                                    <li>Avoid</li>
                                                    <li>At</li>
                                                    <li>All</li>
                                                    <li>Cost</li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li>All</li>
                                        <li>Cost</li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>HTML</li>
                <li>Special Thanks</li>
            </ul>
        </div>
    )
}

export default Top