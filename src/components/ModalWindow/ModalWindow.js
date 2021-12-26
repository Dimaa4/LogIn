import "./ModalWindow.scss";
import { store } from "../../redux/store";
export const ModalWindow = ()=>{
    const closeModal = (e)=>{
        const overlay = document.querySelector("#root > div.overlay");
        const closeButton = document.querySelector("#root > div.overlay > div > div.header > button")
        if(e.target === overlay || e.target === closeButton){
            store.dispatch({type:"CLOSE"})
        }
        
    }
    return(
        <div className="overlay" onClick={closeModal}>
            <div className="modal" style={{boxShadow: `0px 10px 75px 2px ${store.getState().mWindow.color}`}}>
            <div class="header">
                <h3 class="title">{store.getState().mWindow.title}</h3>
                <button class="close-modal" onClick={closeModal}>&times;</button>
            </div>
            <div class="info">
                {store.getState().mWindow.content}
            </div>
            </div>
            
        </div>
    )
}