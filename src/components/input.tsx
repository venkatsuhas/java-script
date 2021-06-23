
export default function Input(props:any){


    return(
        <div className="book-form">
        
  <form className="form-area">
    <div>
        <label >{props.label}</label>
        <input value={props.value} type="text"  onChange={(e)=>props.Change(e.target.value)}   required/>
        
    </div><br/>
  </form>
      </div>
    )
}