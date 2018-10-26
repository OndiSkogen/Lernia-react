import * as React from 'react';
import { Component } from 'react';

const Filter = (props: any) => {
    return (
        <div>
            <input type="checkbox" name="vehicle1" value="Buss" /> Buss &nbsp;
                <input type="checkbox" name="vehicle2" value="T-Bana" /> T-Bana &nbsp;
                    <input type="checkbox" name="vehicle3" value="Pendel" /> Pendel
        </div>

    )
}
export default Filter;