const Phonetics = ({ phonetics }) => {
    return (
        <div className="phonetics mt-6 p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-lightText dark:text-darkText mb-4">Phonetics</h2>
            {phonetics
                .filter(phonetic => phonetic.audio && phonetic.audio.includes('us')) // Filtrar por audio de "US"
                .map((phonetic, index) => (
                    <div key={index} className="phonetic-item mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-inner border border-gray-300 dark:border-gray-600">
                        {phonetic.text && (
                            <div className="phonetic-text mb-4">
                                <p className="text-lg text-lightText dark:text-darkText font-semibold">
                                    Phonetic Text:
                                </p>
                                <p className="text-lg text-lightText dark:text-darkText">
                                    {phonetic.text}
                                </p>
                            </div>
                        )}
                        {phonetic.audio && (
                            <div className="phonetic-audio flex items-center space-x-4">
                                <p className="text-lg text-lightText dark:text-darkText font-semibold">
                                    Audio:
                                </p>
                                <audio controls className="w-full">
                                    <source src={phonetic.audio} type="audio/mp3" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                        )}
                    </div>
                ))}
        </div>
    );
};

export default Phonetics;
