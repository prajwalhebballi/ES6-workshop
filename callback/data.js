let employees=[{ id: 101, name: "Rahul", sal: 45000},
{id:102, name: "sonia", sal: 55000}]

let createEmployees = (emp, callback) => {
    setTimeout(() => {
        employees.push(emp)
        callback()

    }, 4000);
}

let getemployees = () => {
    setTimeout(()=> {
        let rows = ""
        for(emp of employees){
            rows = rows + `<tr>
                           <td>${emp.id}</td>

                           <td>${emp.name}</td>
                           <td>${emp.sal}</td>
                           </tr>`
        }
        document.getElementById('abc').innerHTML = rows
    },1000)
}
createEmployees({id: 103, name: 'priya', sal: 65000},getemployees)
