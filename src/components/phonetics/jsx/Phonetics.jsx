const Phonetics = ({ phonetics }) => {
    return (
        <div className="phonetics mb-6">
            {phonetics.map((phonetic, index) => (
                <div key={index} className="phonetic-item mb-4">
                    {phonetic.text && <p className="text-lg text-lightText dark:text-darkText">{phonetic.text}</p>}
                    {phonetic.audio && (
                        <audio controls className="w-full mt-2">
                            <source src={phonetic.audio} type="audio/mp3" />
                            Your browser does not support the audio element.
                        </audio>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Phonetics;
