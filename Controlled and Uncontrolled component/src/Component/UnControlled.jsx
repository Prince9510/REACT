import React, { useRef } from 'react'

export default function UnControlled() {

    let inputRef = useRef()
    let inputRef2 = useRef()
  
    function submitForm(e) {
      e.preventDefault()
      console.log(inputRef.current.value)
     
    }
    return (
      <div>
        <h1>Uncontrolled Component</h1>
        <form onSubmit={submitForm} >
          <input ref={inputRef} type="text" /> <br /> <br />
          <button>Submit</button>
        </form>
      </div>
  )
}
