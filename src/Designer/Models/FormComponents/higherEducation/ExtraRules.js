import React from "react"
import AvField from "availity-reactstrap-validation/lib/AvField"
const ExtrarulesInputs = (props) => {
  return (
    props.Rules.map((val, idx)=> {
      let ExtraruleId = `Rule-${idx}`;
      return (
        <div key={idx}>
          <AvField
          label={`Extra rule #${idx + 1}`}
          type="text"
            name={ExtraruleId}
            data-id={idx}
            id={ExtraruleId}
            value={props.Rules[idx].Rule} 
            className="Rule"
          />
        </div>
      )
    })
  )
}
export default ExtrarulesInputs