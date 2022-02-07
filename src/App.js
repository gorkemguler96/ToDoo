import './App.css';
import Input from './components/Input'
import './style/style.css'
import {useState} from "react";
import 'antd/dist/antd.css';


function App() {
    const INITIAL_STATE= [
        { id: 1, baslik: "Arabayi Yika", tamamlandi: false},
        { id: 2, baslik: "Evi Temizle", tamamlandi: true}
    ];
    const [card,setCard] = useState(INITIAL_STATE)
    const [text,setText] = useState("")

    const removeCard = (item) => {
      const deleteCard = card.filter((i)=>i.id !== item.id)
        setCard(deleteCard)
    }

    const allRemove = (e) => {
      setCard([])
    }

  return (
      <div className="container d-flex justify-content-center ">
          <div className="row">
              <div className="col-12 ">
                  <h1 className={"d-flex justify-content-center"}>Todoo</h1>
                  <Input setCard={setCard} setText={setText} text={text} card={card}/>

                  {card.map(
                      (item) =>
                          <div key={item.id}>
                              <button
                                  onClick={()=>removeCard(item)}
                                  type="button"
                                  style={{"float":"right"}}
                                  className="btn btn-dlt btn-secondary btn-xl">
                                  Sil
                              </button>
                          <div key={item.id} onClick={() => {
                              setCard(card.map((el)=>el.id === item.id ? {...el, tamamlandi: !el.tamamlandi} : el))
                          }} className={item.tamamlandi ? "yapildi" : ""} >
                              <div className={"card mb-3"}  style={{width: "13.2rem"}}>
                                  <div className={"card-header"}>
                                  {item.baslik}

                                  </div>
                              </div>
                          </div>
                          </div>
                            )}
                  <button
                      onClick={allRemove}
                      type="button"
                      style={{"float":"right"}}
                      className="btn btn-dlt btn-secondary btn-sm">
                      Hepsini Sil
                  </button>
              </div>
          </div>
      </div>
  );
}

export default App;
