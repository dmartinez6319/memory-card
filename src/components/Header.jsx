import "../styles/header.css"

const Header = ({score, highScore}) => {

    return (
        <header>
            <h1 className="header-title">Memory Game</h1>
            <div className="game-info">
                <p>Score: {score}</p>
                <p>High Score: {highScore}</p>
            </div>
        </header>
    )
}

export default Header;