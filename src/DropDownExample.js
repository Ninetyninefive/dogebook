/***Html:***/
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

var colors = [{ Name: 'Red' }, { Name: 'Green' }, { Name: 'Blue' }];
var selectedColor = 'Green';

ReactDOM.render(<Container></Container>, document.getElementById("root"));

var Container = React.createClass({
    render: function () {
        return (
        <div>            
            <DropDown1 data={colors} Selected={selectedColor}/>
            <DropDown2 data={colors} Selected={selectedColor}/>
            <DropDown3 data={colors} Selected={selectedColor}/>
        </div>);
    }
});

/***Option 1:***/
var DropDown1 = React.createClass(
{
    render: function () {
        var items = this.props.data;
        return (
        <select value={this.props.Selected}>
            {
                items.map(function (item) {
                    return <option value={item.Name }>{item.Name}</option>;
                })
            }
        </select>);
    }
});

/***Option 2:***/
var DropDown2 = React.createClass(
{
    render: function () {
        var items = this.props.data;
        return (
        <select>
            {
                items.map(function (item) {
                    return <option value={item.Name} selected={selectedItem == item.Name}>{item.Name}</option>;
                })
            }
        </select>);
    }
});

/***Option 3:***/
var DropDown3 = React.createClass(
    {
        render: function () {
            var items = this.props.data;
            return (
            <select>
                {
                    items.map(function (item) {

                                            if (selectedItem == item.Name)
                    return <option value={item.Name } selected>{item.Name}</option>;
                else
                    return <option value={item.Name }>{item.Name}</option>;
                    })
                }
            </select>);
        }
    });

    export default {DropDown1}