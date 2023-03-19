let employees=[{"id":1,"first_name":"Elyse","email":"eloyley0@unblog.fr","gender":"Female"},
{"id":2,"first_name":"Woodrow","email":"wkick1@chicagotribune.com","gender":"Male"},
{"id":3,"first_name":"Mike","email":"mvernay2@archive.org","gender":"Non-binary"},
{"id":4,"first_name":"Kitti","email":"kmcbain3@soundcloud.com","gender":"Female"},
{"id":5,"first_name":"Darsey","email":"dtayt4@opensource.org","gender":"Female"},
{"id":6,"first_name":"Morry","email":"mglastonbury5@nhs.uk","gender":"Male"},
{"id":7,"first_name":"Nyssa","email":"nflorentine6@senate.gov","gender":"Agender"},
{"id":8,"first_name":"Marquita","email":"mmerkle7@uol.com.br","gender":"Polygender"},
{"id":9,"first_name":"Carlina","email":"ccamilli8@de.vu","gender":"Female"},
{"id":10,"first_name":"Ilene","email":"ibresnahan9@hud.gov","gender":"Female"},
{"id":11,"first_name":"Devin","email":"dcanningsa@aol.com","gender":"Female"},
{"id":12,"first_name":"Ivor","email":"iwallenb@creativecommons.org","gender":"Male"},
{"id":13,"first_name":"Harlie","email":"hbriskeyc@ed.gov","gender":"Female"},
{"id":14,"first_name":"Inger","email":"isongerd@cnbc.com","gender":"Female"},
{"id":15,"first_name":"Tuck","email":"tbissikere@walmart.com","gender":"Male"},
{"id":16,"first_name":"Nickie","email":"nbrandsf@tamu.edu","gender":"Male"},
{"id":17,"first_name":"Donia","email":"dnannig@independent.co.uk","gender":"Female"},
{"id":18,"first_name":"Darelle","email":"dcordleh@ft.com","gender":"Female"},
{"id":19,"first_name":"Damaris","email":"dhurrioni@seattletimes.com","gender":"Female"},
{"id":20,"first_name":"Tana","email":"ttilerj@eepurl.com","gender":"Female"}]

let display_Data = () => {
    let rows = "";
    employees.forEach((employee) => {
        rows = rows + `<tr>
                       <td> ${employee.id}</td>
                       <td> ${employee.first_name}</td>
                       <td> ${employee.email}</td>
                       <td> ${employee.gender}</td>
                       </tr>`
    })
    document.getElementById(`tbody_Data`).innerHTML = rows
}