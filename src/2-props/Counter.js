import React, { Component } from 'react';
import PropTypes from 'prop-types';

const buttonStyle = {
    margin: '10px'
}

class Counter extends Component {

    constructor (props) {
        console.log('enter constructor ' + props.caption);
        super(props);

        this.state = {
            count: props.initValue
        };

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    }

    // 决定是否需要渲染
    shouldComponentUpdate (nextProps, nextState) {
        console.log('enter shouldComponentUpdata');
        return ( nextProps.caption !== this.props.caption ) || ( nextState.count !== this.state.count );
    }

    // 父组件render中渲染的子组件就会触发这个函数，并且经历更新过程
    componentWillReceiveProps (nextProps) {
        console.log(nextProps);
        console.log('enter componentWillReceiveProps ' + this.props.caption);
    }

    // render前执行
    componentWillMount () {
        console.log('enter componentWillMount ' + this.props.caption);
    }
    
    componentWillUpdate () {
        console.log('enter componentWillUpdate ' + this.props.caption);
    }
    
    componentDidUpdate () {
        console.log('enter componentDidUpdate ' + this.props.caption);
    }

    // dom节点挂载之后执行
    componentDidMount () {
        console.log('enter componentDidMount ' + this.props.caption);
    }

    onClickIncrementButton () {
        this.updateCount(true);
    }

    onClickDecrementButton () {
        this.updateCount(false);
    }

    updateCount (isIncrement) {
        const previousValue = this.state.count;
        const newValue = isIncrement ? previousValue + 1 : previousValue - 1;
        this.setState({count: newValue});
        this.props.onUpdate(newValue, previousValue);
    }

    render () {
        console.log('enter render ' + this.props.caption);
        const { caption } = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>    
        )
    }
}

// 定义Counter组件props规范
Counter.propTypes = {
    caption: PropTypes.string.isRequired, // isRequired表示必须指定caption
    initValue: PropTypes.number,
    onUpdate: PropTypes.func
};

Counter.defaultProps = {
    initValue: 0,
    onUpdate: f => f
};

export default Counter;