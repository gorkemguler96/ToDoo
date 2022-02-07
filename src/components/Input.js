import React from 'react';

function Input( { setCard, setText, text, card } ) {

    const addText = (item) => {
        if(text.length > 0){
            setCard(
                [...card, {id: Date.now(), baslik: text, tamamlandi: false}])
        }
        setText("")

    }

const keyPress = (key) => {
       if (key.code === "Enter"){
        addText();
       }
}

    return (
        <div >
            <div className="input-group mb-3 mt-3">
                <input onKeyUp={keyPress} value={text} onChange={(e) =>setText(e.target.value)} type="text" className="form-control" placeholder="Bugün ne yapacaksın?"
                       aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" onClick={()=>addText()} type="button" id="button-addon2">Ekle</button>
                    </div>
            </div>
        </div>


    );
}

export default Input;
