import { ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "success" | "warning" | "danger";

type TButton = ComponentProps<"button"> & {
  variant?: TVariant;
};

function Button({ children, variant, style, ...rest }: TButton) {
  return (
    <button
      {...rest}
      style={{
        padding: "12px",
        width: "70%",
        fontSize: "14px",
        fontWeight: "500",
        borderRadius: "6px",
        ...style,
        ...checkVariant(variant),
      }}
    >
      {children}
    </button>
  );
}

export default Button;

function checkVariant(variant?: TVariant) {
  if (variant === "danger") {
    return { backgroundColor: "#a70202", color: "var(--gray)" };
  } else if (variant === "primary") {
    return {
      backgroundColor: "var(--mediume-green-blue)",
      color: "var(--gray)",
    };
  } else if (variant === "secondary") {
    return { backgroundColor: "var(--dark-green-blue)", color: "var(--gray)" };
  } else if (variant === "success") {
    return {
      backgroundColor: "var(--mediume-green-blue)",
      color: "var(--light-green)",
    };
  } else if (variant === "warning") {
    return { color: "var(--mediume-green-blue)" };
  }
}
