import FormInput from "./Field";
function Dimensions(props) {
  return (
    <div>
      <FormInput
        title={"size" + props.index}
        label={"Size " + props.heading}
        status="number"
        value={props.method}
        field={props.data[`size${props.index}`]}
      ></FormInput>
      <FormInput
        title={"sell" + props.index}
        label={"Selling Price " + props.heading}
        status="text"
        value={props.method}
        field={props.data[`sell${props.index}`]}
      ></FormInput>
      <FormInput
        title={"weight" + props.index}
        label={"Weight " + props.heading}
        status="number"
        value={props.method}
        field={props.data[`weight${props.index}`]}
      ></FormInput>
      <FormInput
        title={"price" + props.index}
        label={"Price " + props.heading}
        status="text"
        value={props.method}
        field={props.data[`price${props.index}`]}
      ></FormInput>
    </div>
  );
}

export default Dimensions;
