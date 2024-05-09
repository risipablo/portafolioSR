    import React from "react";

    class Volver extends React.Component {
    Volver = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    };

    render() {
        return (
        <button onClick={this.Volver} style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "1000" }}>
            Ir arriba
        </button>
        );
    }
    }

    export default Volver;
