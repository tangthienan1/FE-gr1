import React from 'react'


export default function Datatable() {
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Avatar</th>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Falcuty</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>1</td>
                        <td>A</td>
                        <td>IT</td>
                        <td>Student</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>2</td>
                        <td>B</td>
                        <td>IT</td>
                        <td>Student</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>3</td>
                        <td>C</td>
                        <td>IT</td>
                        <td>Student</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
