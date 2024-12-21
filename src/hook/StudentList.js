
import React from "react";
import { useFetch } from "./useFetch";

export default function StudentList() {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Danh sách sinh viên</h1>
            <ul>
                {data.map((student) => (
                    <li key={student.id}>
                        {student.name} - {student.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}