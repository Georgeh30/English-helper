const Meanings = ({ meanings }) => {
    return (
        <div className="meanings">
            {meanings.map((meaning, index) => (
                <div key={index} className="meaning-item mb-6">
                    <h3 className="text-xl font-semibold text-lightText dark:text-darkText mb-2">{meaning.partOfSpeech}</h3>
                    <ul>
                        {meaning.definitions.map((def, i) => (
                            <li key={i} className="mb-4">
                                <p className="definition text-lg text-lightText dark:text-darkText">{def.definition}</p>
                                {def.example && (
                                    <p className="example text-sm italic text-lightText dark:text-darkText mt-1">Example: {def.example}</p>
                                )}
                            </li>
                        ))}
                    </ul>
                    {meaning.synonyms.length > 0 && (
                        <p className="synonyms text-lightText dark:text-darkText">Synonyms: {meaning.synonyms.join(', ')}</p>
                    )}
                    {meaning.antonyms.length > 0 && (
                        <p className="antonyms text-lightText dark:text-darkText">Antonyms: {meaning.antonyms.join(', ')}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Meanings;
