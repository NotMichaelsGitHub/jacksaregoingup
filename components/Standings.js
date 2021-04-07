import React, {useState, useEffect} from "react";
import { Container, Table } from 'react-bootstrap';

const Standings = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const demo = () => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(items)
      return (
        <p>
          API connectioned!
        </p>
      );
    }
  }

  const headers = ['#','Team', 'PL', 'W', 'D', 'L', '+/-', 'GD', 'PTS'];

  const hardcoded =[
    ['1', 'Norwich', 35, 23, 7, 5, '51-25', 26, 76],
    ['2', 'Watford', 35, 19, 9, 7, '46-24', 22, 66],
    ['3', 'Swansea', 34, 19, 9, 6, '44-25', 19, 66],
    ['4', 'Brentford', 34, 18, 9, 7, '61-36', 26, 63],
    ['5', 'Reading', 35, 18, 6, 11, '49-37', 12, 60],
    ['6', 'Barnsley', 34, 17, 6, 11, '42-37', 5, 57],
  ];

  return(
    <Container>
      <Table responsive>
        <thead>
          <tr>
            {Array.from({ length: 9 }).map((_, index) => (
              <th key={'h' + index}>{ headers[index] }</th>
            ))}
          </tr>
        </thead>
        <tbody>

          {Array.from({ length: hardcoded.length }).map((_, index) => {
            if(hardcoded[index][1] == 'Swansea'){
              return(

                <tr key={'swans_row' + index} className="red">

                  {Array.from({ length: 9 }).map((_, stat) => {
                    return(
                       <td key={'swans' + stat}> { hardcoded[index][stat] } </td>
                    )
                  })}

                </tr>

              )
            }

            return (
              <tr key={'otherrow' + index}>
                {Array.from({ length: 9 }).map((_, stat) => {
                  return(
                    <td key={'team' + stat}> { hardcoded[index][stat] } </td>
                  )
                })}
              </tr>
            )
          })}

        </tbody>
      </Table>

        

      {demo()}

    </Container>
  )
};

export default Standings;
