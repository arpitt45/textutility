import React , {useState} from 'react'
// import "../App.css"

export default function TextForm(props) {
    const handleupclick = () =>{
        console.log("uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        
        setText(newtext);
    }
    const handlelowclick = () =>{
        console.log("Lowercase was clicked" + text);
        let newtext = text.toLowerCase();
        
        setText(newtext);
    }

    const handleCopy = () =>{
      console.log("i am copy");
      var text = document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleClear = () =>{
      console.log("i am clear");
      let newText = '';
      setText(newText);

    }

    const handleExtraSpace = () =>{
      let newtext =text.split(/[ ]+/);
      setText(newtext.join(" "));

    }
    

    const handleonchange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }
    const[text,setText] = useState('Enter the text here');
  return (
    <>
    <div className='container my-4' style={{color:props.mode==='dark'?'white':'#032849'}}>
        <h3 className='my-6'>{props.heading}</h3>
    <div className='mb-3'>
      <label htmlFor="mybox" className="form-label"></label>
       <textarea className='form-control' id="mybox"  value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#032849'}} onChange={handleonchange} rows="8"></textarea>
    </div>
    <button className=" btn btn-primary mx-1 gap-3" onClick={handleupclick} >upgrade to uppercase</button>
    <button className=" btn btn-primary mx-1 gap-3" onClick={handlelowclick} >upgrade to lowercase</button>
    <button className=" btn btn-primary mx-1 gap-3" onClick={handleCopy} >Copy Text</button>
    <button className=" btn btn-primary mx-1 gap-3" onClick={handleClear} >Clear Text</button>
    <button className=" btn btn-primary mx-1 gap-3" onClick={handleExtraSpace} >Remove Extra Spaces</button>

    {/* <button className=" btn btn-primary mx-1" onClick={handlelangclick} >translate to hindi</button> */}
    </div>

    <div className="container my-5" style={{color:props.mode==='dark'?'white':'#032849'}}>
      <h3>Text Summary</h3>
      <p>{text.split(" ").length} wrods and {text.length} alphabets</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter the text above to display in preview"}</p>
    </div>
    </>
  )
}
