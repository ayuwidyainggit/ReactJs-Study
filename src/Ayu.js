import React from 'react';
import './Ayu.css';

const Card = (props) => {
    //props untuk membuat komponen card mnj dinamis
    return(
    <div className="card">
    <p class="title">{props.name}</p>
    <p>{props.job}</p>
    </div>
    )
  }
  const Ayu = () => {
    return (
    <div>
        <Card name="Ayu" job="Back end"/>
        <Card name="Cicil" job="Front End "/>
        <Card name="Momo" job="UI/UX"/>
    </div>
    )
  }

export default Ayu;
