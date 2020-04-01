import React from "react";

function DataBody({users}) {
    function DateFormat(date) {
        const DateArr = date.split("-");
        const year = DateArr[0];
        const month = DateArr[1];
        const dayArr = DateArr[2].split("T");
        const day = dayArr[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate;
    }

    return (
  <tbody>
      {users[0]!== undefined && users[0].name!== undefined ? (
          users.map(({login, picture, name, phone, email, dob}) => {
              return (
                <tr key={login.uuid}>
                   <td data-th="Image" className="align-middle">
                       <img 
                        src={picture.medium}
                        alt={"profile image for " + name.first + " " + name.last}
                        className="img-responsive"
                        />
                   </td> 
                   <td data-th="Name" className="name-cell align-middle">{name.first} {name.last}</td>
                   <td data-th="Phone" className="align-middle">{phone}</td>
                   <td data-th="Email" className="align-middle">
                       <a href={"mailto:" + email} target="__blank">
                          {email} 
                       </a> 
                    </td>
                   <td data-th="DOB" className="align-middle">{DateFormat(dob.date)}</td>
                </tr>
              );
          })
      ) : (
          <>
            <h3>
                No Results Found
            </h3>
        </>
      )} 
  </tbody>
    )
}

export default DataBody;