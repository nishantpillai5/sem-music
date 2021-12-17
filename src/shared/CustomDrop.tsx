import React from "react";
import FormControl from "react-bootstrap/esm/FormControl";

export const CustomDrop = React.forwardRef<any, any>(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = React.useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value ||
              // @ts-ignore
              child.props.children.toLowerCase().startsWith(value.toLowerCase())
          )}
        </ul>
      </div>
    );
  }
);
