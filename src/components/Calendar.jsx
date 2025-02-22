import React from 'react';
import Event from './Event';

const Calendar = () => {
    return (
        <div className='Calendar'>
            <table>
                <thead>
                    <tr>
                        <th> Time </th>
                        <th> Sunday </th>
                        <th> Monday </th>
                        <th> Tuesday </th>
                        <th> Wednesday </th>
                        <th> Thursday </th>
                        <th> Friday </th>
                        <th> Saturday </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> 8 am </td>
                        <Event event='Wake up' color='red' />
                        <Event event='Wake up' color='red' />
                        <Event event='Wake up' color='red' />
                        <td></td>
                        <Event event='Wake up' color='red' />
                        <td></td>
                        <Event event='Wake up' color='red' />
                    </tr>
                    <tr>
                        <td> 9 am </td>
                        <Event event='Breakfast' color='green' />
                        <td></td>
                        <Event event='Breakfast' color='green' />
                        <td></td>
                        <td></td>
                        <Event event='Breakfast' color='green' />
                        <td></td>
                    </tr>
                    <tr>
                        <td> 10 am </td>
                        <td></td>
                        <Event event='Times Square' color='blue' />
                        <td></td>
                        <td></td>
                        <Event event='Empire State' color='blue' />
                        <td></td>
                        <Event event='Wall Street' color='blue' />
                    </tr>
                    <tr>
                        <td> 11 am </td>
                        <Event event='Brooklyn Bridge' color='blue' />
                        <td></td>
                        <Event event='Lunch' color='green' />
                        <td></td>
                        <td></td>
                        <Event event='High Line' color='blue' />
                        <td></td>
                    </tr>
                    <tr>
                        <td> 12 pm </td>
                        <Event event='Lunch' color='green' />
                        <Event event='The Met' color='blue' />
                        <td></td>
                        <Event event='Lunch' color='green' />
                        <td></td>
                        <td></td>
                        <Event event='Lunch' color='green' />
                    </tr>
                    <tr>
                        <td> 1 pm </td>
                        <td></td>
                        <td></td>
                        <Event event='Broadway Show' color='blue' />
                        <Event event='Museum of N.H.' color='blue' />
                        <td></td>
                        <Event event='Statue of Liberty' color='blue' />
                        <td></td>
                    </tr>
                    <tr>
                        <td> 2 pm </td>
                        <td></td>
                        <Event event='Explore Soho' color='blue' />
                        <td></td>
                        <td></td>
                        <Event event='Hudson Yards' color='blue' />
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td> 3 pm </td>
                        <td></td>
                        <td></td>
                        <Event event='Statue of Liberty' color='blue' />
                        <td></td>
                        <td></td>
                        <Event event='Visit a Speakeasy' color='blue' />
                        <td></td>
                    </tr>
                    <tr>
                        <td> 4 pm </td>
                        <Event event='Madison Sq. Park' color='blue' />
                        <td></td>
                        <td></td>
                        <Event event='Rooftop bar' color='blue' />
                        <td></td>
                        <td></td>
                        <Event event='High Line' color='blue' />
                    </tr>
                    <tr>
                        <td> 5 pm </td>
                        <Event event='Dinner' color='green' />
                        <td></td>
                        <Event event='Dinner' color='green' />
                        <td></td>
                        <td></td>
                        <Event event='Dinner' color='green' />
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;