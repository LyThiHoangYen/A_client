function StudentRow ({number, name, result}) {
    return (
        <tr>
            <td className="border px-4 py-2">{number}</td>
            <td className="border px-4 py-2">{name}</td>
            <td className="border px-4 py-2">{result}</td>
        </tr>
    );
}

