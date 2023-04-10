import React, { Component } from 'react';
import Child_Comp from './Child_Comp';
import Child_Func_Comp from './Child_Func_Comp';

class Parent_Comp extends Component {
    // Constructor - khởi tạo state của component
    constructor(props) {
        super(props);
        this.state = {
            company: "Rikkei Academy",
            class: "JV230213"
        }
        // this.handleProps_State = this.handleProps_State.bind(this);
    }
    handleChange = () => {
        // Cập nhật state
        this.setState({
            company: "Rikkei"
        })
    }
    handleProps_State = () => {
        // Có sử dụng dữ liệu của props hoặc state
        console.log("Company--->", this.state.company);
    }
    handleParam = (studentName) => {
        console.log("Xin chào ", studentName);
    }
    // B1: Xây dựng function ở component cha
    recieveDataFromChild = (studentName, classRoom) => {
        console.log("Dữ liệu nhận được từ con: " + studentName + "-" + classRoom);
    }
    render() {
        return (
            <div>
                <h2>Parent Component</h2>
                {/* Định nghĩa các props: propsName = {value} */}
                {/* Bước 2: gủi function qua props */}
                <Child_Comp company={this.state.company} class={"JV230213"} recieveData={this.recieveDataFromChild}>Học vui vẻ</Child_Comp>
                <button onClick={this.handleChange}>Change Company</button>
                {/* Sự kiện có sử dụng props, state --> gọi function */}
                <button onClick={this.handleProps_State}>Event Props-State</button>
                {/* Sự kiện có tham số --> gọi theo kiểu arrow function */}
                <button onClick={() => this.handleParam("Mrs.Vân")}>Event Param</button>
                <Child_Func_Comp company={"Rikkeisoft"}></Child_Func_Comp>
            </div>
        );
    }
}

export default Parent_Comp;