import { Component } from "react";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';
import ComicsList from "../comicsList/ComicsList";

class App extends Component{
    state = {
        choicedChar: null
    }

    onCharChoiced = (id) => {
        this.setState({
            choicedChar: id
        })
    }

   render() {
    return (
        <div className="app">
            <AppHeader/>
            <main>
                <ErrorBoundary>
                    <RandomChar/>
                </ErrorBoundary>
                <div className="char__content">
                    <ErrorBoundary>
                        <CharList onCharChoiced={this.onCharChoiced}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharInfo charId={this.state.choicedChar}/>
                    </ErrorBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
   }
}

export default App;