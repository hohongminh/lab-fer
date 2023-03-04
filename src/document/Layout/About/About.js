import { Button, Caption, Collapsible, CollapsibleItem, Container, Icon, Section, Select, Slide, Slider, TextInput } from "react-materialize"
import "./About.css"

function Contact() {
    return (
        <div className="Contact1" >
            <Container id="about">
                <Section
                    className="contact-container1"
                >
                    <Collapsible accordion popout>
                        <CollapsibleItem
                            expanded={true}
                            header="The Team"
                            icon={<Icon>group</Icon>}
                            node="div"
                        >
                            From the hunble beginning of just the venerable Sir Alt
                            and his cohorts, we have since grown into legion,
                            comprising of dwellers of all realms.
                        </CollapsibleItem>
                        <CollapsibleItem
                            expanded={false}
                            header="Our Mission"
                            icon={<Icon>location_on</Icon>}
                            node="div"
                        >
                            To mend the schism that had torn our community - the
                            community of movie geeks - apart. And from it we shall
                            rise anew.
                        </CollapsibleItem>
                        <CollapsibleItem
                            expanded={false}
                            header="Wanna join us?"
                            icon={<Icon>whatshot</Icon>}
                            node="div"
                        >
                            Bewarn! Abandon all hope ye who enter here; once a geek,
                            always a geek, there is no going back... But if you're
                            up for it, just send us an email.
                        </CollapsibleItem>
                    </Collapsible>
                </Section>
            </Container>
        </div>
    )

}
export default Contact