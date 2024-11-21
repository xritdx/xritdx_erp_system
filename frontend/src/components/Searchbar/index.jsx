import './style.css';

const Searchbar = ({ placeholder }) => {
    return (
        <div className="searchbar-container flex justify-center items-center">
            <div className="searchbar-wrapper flex items-center">

                <input
                    type="text"
                    className="searchbar-input"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default Searchbar;
