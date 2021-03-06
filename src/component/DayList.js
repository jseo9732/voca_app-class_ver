import { Link } from "react-router-dom";
import UserFetch from "../hooks/userFetch";

function DayList(){
    const days = UserFetch("http://localhost:3001/days");

    if(days.length === 0) {
        return <span> loading...</span>;
    }

    return(
        <>
        <ul className="list_day"> 
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
        </>
    );
}


export default DayList;