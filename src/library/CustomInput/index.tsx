import { Controller } from "react-hook-form";

const CustomInput = (props: any) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={props.rules}
      defaultValue={
        !!props.defaultValue
          ? props.defaultValue.toString()
          : props.defaultValue
      }
      render={({ field: { onChange, onBlur, value } }) => (
        <div>
          <input
            placeholder={props.placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            type={props.type}
            className={props.className}
            style={{
              borderRadius: 37,
              // backgroundColor: "#F2F4F6",
            }}
          />
          <span style={{ color: "red" }}>
            {!!props.errors &&
              (props.errors[props.name] ? (
                <>
                  <div>
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {" " + props.errors[props.name].message.toString()}
                  </div>
                </>
              ) : (
                <></>
              ))}
          </span>
        </div>
      )}
    />
  );
};
export default CustomInput;
