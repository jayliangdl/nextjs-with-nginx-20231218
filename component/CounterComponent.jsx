// components/Counter.js in Next.js project
import React, { useState } from 'react';


const CounterComponent = (props) => {
    const [count, setCount] = useState(0);
    console.log('it is loading from next.js');
    return (
        <div>
            <div>Provided by RemoteNextjsTs Project - {props.componentName?props.componentName:"Counter.js"}</div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default CounterComponent;
