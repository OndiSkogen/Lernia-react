import * as React from 'react';

const Filter = (props: any) => {
    return (
        <div>
            <input type="checkbox" name="buss" checked={props.buss} onChange={props.change} /> Buss &nbsp;
                <input type="checkbox" name="tunnelbana" checked={props.tunnelbana} onChange={props.change}/> T-Bana &nbsp;
                    <input type="checkbox" name="pendel" checked={props.pendel} onChange={props.change}/> Pendel
        </div>

    )
}
export default Filter;