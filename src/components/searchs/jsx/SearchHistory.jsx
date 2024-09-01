const SearchHistory = () => {

    return (
        <div className="search-history">
        History
            {/* <input
                type="text"
                placeholder="Buscar en historial..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="search-input"
            />
            <ul className="history-list">
                {filteredHistory.map((entry, index) => (
                    <li key={index}>
                        <div className="history-item">
                            <strong>{entry.word}</strong> - {entry.translation}
                            <span>{new Date(entry.date).toLocaleDateString()}</span>
                        </div>
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default SearchHistory;
