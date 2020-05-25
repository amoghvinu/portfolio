import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div>
                <button type="button" class="btn btn-danger" >
    <a className="button text-white" href="About">About <i class="fas fa-hand-point-right"></i></a>
</button>
            </div>
        );
    }
}

export default Button;