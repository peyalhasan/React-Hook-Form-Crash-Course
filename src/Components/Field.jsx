import React from "react";

const Field = ({label, children, htmlFor, error}) => {
    const id = htmlFor || getChildId(children)
    return (
        <div className=" justify-start flex flex-col items-start w-full mt-2 mr-2 p-0  ">
            {label && <label htmlFor={id} > {label} </label>}
            {children}
            {!!error && <div> {error.message} </div> }
        </div>
    );
};


const getChildId = (children) =>{
    const child = React.Children.only(children);
    
    if("id" in child?.props){
        return child.props.id;
    }
}
export default Field;