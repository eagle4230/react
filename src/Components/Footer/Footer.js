import React from "react";

export class Footer extends React.Component {
    state = {
        name: 'Footer',
    };

    render() {
        return (
            <>
                <hr />
                <h2>Заголовок {this.state.name}</h2>
            </>
        )
    };
}
