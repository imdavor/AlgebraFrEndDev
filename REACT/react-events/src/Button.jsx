const Button = ({ children, clickListener }) => {
    return <button onClick={clickListener}>{children}</button>;
};

export default Button;
