const Phonetics = ({ phonetics }) => {
    // Filtrar por los elementos que tienen tanto audio como texto
    const phoneticsWithTextAndAudio = phonetics.filter(phonetic => phonetic.audio && phonetic.text);

    // Priorizar los que contienen "us" en el audio
    const usPhonetics = phoneticsWithTextAndAudio.filter(phonetic => phonetic.audio.includes('us'));

    // Si no se encuentra un audio con "us", usar el primer elemento que tenga audio y texto
    const selectedPhonetic = usPhonetics.length > 0 ? usPhonetics[0] : phoneticsWithTextAndAudio[0];

    return (
        <div className="phonetics mt-6 p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl sm:text-2xl font-semibold text-lightText dark:text-darkText mb-4">Phonetics</h2>
            {selectedPhonetic && (
                <div className="phonetic-item mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-inner border border-gray-300 dark:border-gray-600">
                    {selectedPhonetic.text && (
                        <div className="phonetic-text mb-4">
                            <p className="text-base sm:text-lg text-lightText dark:text-darkText font-semibold">
                                Phonetic Text:
                            </p>
                            <p className="text-base sm:text-lg text-lightText dark:text-darkText">
                                {selectedPhonetic.text}
                            </p>
                        </div>
                    )}
                    {selectedPhonetic.audio && (
                        <div className="phonetic-audio flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <p className="text-base sm:text-lg text-lightText dark:text-darkText font-semibold">
                                Audio:
                            </p>
                            <audio controls className="w-full">
                                <source src={selectedPhonetic.audio} type="audio/mp3" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Phonetics;
