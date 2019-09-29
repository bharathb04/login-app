import { useState } from 'react';

const CheckInputs = (callback) => {

    const [values, setValues] = useState({});

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
          callback();
        };

        return {
            handleSubmit,
            values,
        }

};

export default CheckInputs;