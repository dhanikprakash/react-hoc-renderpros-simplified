
function RenderPropsSpeaker(props) {
    const speakers = [
        {
            imageSrc: 'images/speaker_1.jpeg',
            name: 'John Smith'
        },
        {
            imageSrc: 'images/speaker_2.jpeg',
            name: 'Tony Mathews'
        },
        {
            imageSrc: 'images/speaker_3.jpeg',
            name: 'Bob Godston'
        },
    ];
    return props.children({ 
        speakers: speakers 
    });
};
export default RenderPropsSpeaker;