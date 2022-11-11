import './App.css';
import {useEffect, useState} from "react";

function App() {
    let [user, setUser] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/user')
            .then(res => res.json())
            .then(setUser)
            .catch(err => {
                console.error("An error occurred while fetching user.");
                console.error(err);
            });
    }, []);

    if (user != null) {
        return (<>
            <h1>{user.login}</h1>
            <br/>
            <img src={user.avatar_url} alt={'icon'}></img>
        </>)
    }

    return (
        <div className="App">
            <a href="/oauth2/authorization/github">Authorize Github</a>
            <br/>
        </div>
    );
}

export default App;
