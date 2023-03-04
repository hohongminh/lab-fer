import { Button, Container, Icon, Select, TextInput } from "react-materialize"
import "./Contact.css"

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="Contact" >
            <Container>
                <h3>Contact us</h3>
                <form onSubmit={handleSubmit}>
                    <TextInput id="TextInput-38" label="Your Name" />
                    <TextInput id="TextInput-39" label="Your Phone" />
                    <TextInput email id="TextInput-41" label="Email" validate />

                    <Select
                        id="Select-46"
                        multiple={false}
                        onChange={function noRefCheck() { }}
                        value=""
                    >
                        <option disabled value="">
                            Choose your favorite nation
                        </option>
                        <option value="1">England</option>
                        <option value="2">France</option>
                        <option value="3">Spain</option>
                    </Select>


                    <TextInput
                        icon=<Icon>mode_edit</Icon>
                        id="TextInput-28"
                        label="Your content"
                    />

                    <Button>
                        Submit

                    </Button>
                </form>
            </Container>
        </div>
    )

}
export default Contact