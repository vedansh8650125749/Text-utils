import React, { useState, useEffect } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        // props.showAlert("Uppercase","success")
    }
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        // props.showAlert("Lowercase","success")
    }
    const handleChange = (event) => {
        setText(event.target.value);

    }
    const handleClearclick = () => {
        let newtext = ''
        setText(newtext)
        // props.showAlert("Text Clear","success")
    }
    const handleCopy = () => {
        var cpytext = document.getElementById("exampleFormControlTextarea1")
        cpytext.select()
        document.execCommand('copy')
        setCopyStatus('Copied!')
    };
    const addEmoji = (emoji) => {
        const updatedText = text + emoji;
        setText(updatedText);
    };

    const checkBadWords = (text) => {
        const badwords = ['ass', 'fuck', 'motherfucker']
        let nt
        for (const word of badwords) {
            if (text.toLowerCase().includes(word.toLowerCase())) {
              alert('Bad word found!');
              nt = text.replace(new RegExp(word, 'gi'), ''); // Replace bad word with ***
              setText(nt)
            }
        }
        return false;
    };

    const handleExtraSpaces = () => {
        let spaceText = text.split(/[ ]+/)
        setText(spaceText.join(" "))
        props.showAlert("Spaces has been removed","success")
    }
    const [text, setText] = useState("");
    const [copyStatus, setCopyStatus] = useState('Copy Text');



    useEffect(() => {
        let timeout;
        if (copyStatus === 'Copied!') {
            timeout = setTimeout(() => {
                setCopyStatus('Copy Text');
            }, 1500);
        }
        return () => clearTimeout(timeout);
    }, [copyStatus]);

    return (
        <>

            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#6d6c6c96', color: props.mode === 'light' ? 'black' : 'white' }} id="exampleFormControlTextarea1" rows="3"></textarea>

            </div>
            <div className='container'>
                <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-warning mx-1' onClick={handleCopy}>{copyStatus}</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-danger mx-1' onClick={handleClearclick}>Clear</button>
                <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Space</button>


                <button className='btn btn-primary mx-1 my-1' onClick={() => addEmoji("🤗")}>🤗</button>
                <button className='btn btn-primary mx-1 my-1' onClick={() => addEmoji("🫥")}>🫥</button>
                <button className='btn btn-primary mx-1 my-1' onClick={() => addEmoji("🫠")}>🫠</button>
                <button className='btn btn-primary mx-1 my-1' onClick={() => addEmoji("🥹")}>🥹</button>
                <button className='btn btn-primary mx-1 my-1' onClick={() => addEmoji("🫳")}>🫳</button>
                <button className='btn btn-primary mx-1 my-1' onClick={() => addEmoji("🫴")}>🫴</button>
                <button className='btn btn-primary mx-1 my-1' onClick={() => addEmoji("🫰")}>🫰</button>
                <button className='btn btn-primary mx-1 my-1' onClick={() => addEmoji("🫶")}>🫶</button>
                <button className='btn btn-primary mx-1 my-1' onClick={() => addEmoji("😶‍🌫️")}>😶‍🌫️</button>

            </div>
            <h2>Summary</h2>
            <p>Total Words: {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} and Total Characters: {text.length}</p>
            <p>Reading Time: {text.split(" ").filter((element)=>{return element.length !== 0}).length * 0.008} min.</p>
            <p>Bad Words: {checkBadWords(text) ? 'Bad words found' : 'No bad words'}</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </>
    )
}
