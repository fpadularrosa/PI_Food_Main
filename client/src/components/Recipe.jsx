import { React, Component } from 'react';
import s from '../css/landing&index.module.css';

export default class Recipe extends Component {
    render() {
        return(
        <div className={s.container}>
            <h3 className={s.details}>
                {this.props.name}
            </h3>
            <div className={s.details2}>
                    <p>Diets: {this.props.diets?.map((d, i) => {
                        if(i === 0) return ` ${d}`;
                        return `, ${d}`;
                    })}</p>
                    <p>
                    Dish Types: {this.props.dish}
                    </p>
                    <p>Healthy {this.props.healthScore}</p>
                    <p>Likes {this.props.score}</p>
            </div>
            <img className={s.image} src={this.props.img} alt="imgFood_notfound"/>
        </div>
    )}
}