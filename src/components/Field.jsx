function FormInput(props) {
    return (
      <div>
        <div>
          <label htmlFor={props.title}>{props.label}</label>
        </div>
        <input
          autoComplete="off"
          type={props.status}
          id={props.title}
          name={props.title}
          onChange={props.value}
          value={props.field}
        ></input>
      </div>
    );
  }
  export default FormInput;
  