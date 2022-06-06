import { Nav } from "../Nav/Nav";

export const Header = (props) => {
    return (
        <header>
            <h1>{props.data.sitename}</h1>
            <h2>{props.data.title}</h2>
            <Nav nav={props.data.nav} />
            <hr />
        </header>
    );
}

