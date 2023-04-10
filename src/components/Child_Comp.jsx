import React, { Component } from 'react';

class Child_Comp extends Component {
    handleSendData = () => {
        // B3. Gọi function theo props --> dữ liệu từ con lên cha
        this.props.recieveData("Nguyễn Văn A", "JV230213");
    }
    render() {
        return (
            <div>
                <h2>Children Component</h2>
                {/* Lấy dữ liệu props truyền từ cha sang và hiển thị */}
                <p>Tên công ty: {this.props.company} - Lớp: {this.props.class} - {this.props.children}</p>
                <button onClick={this.handleSendData}>Send Data to Parent</button>
            </div>
        );
    }
}

export default Child_Comp;