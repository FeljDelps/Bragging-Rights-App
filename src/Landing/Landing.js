import React from 'react';
import './Landing.css';

class Landing extends React.Component {
    render() {
        return(
            <main className="Landing">
                <div className="Hero">
                    <h1>Landing page</h1>        
                </div>
                <section className="Landing_description">
                    <div>
                        Welcome to the Bragging Rights app.  This app takes registration and provides information for the upcoming national dance competition, Bragging Rights, which is currently in development.
                    </div>
                </section>
                <div className="Landing_button">
                    <button type='submit'>
                        Click here
                    </button>
                </div>
            </main>
        )
    }
}

export default Landing;