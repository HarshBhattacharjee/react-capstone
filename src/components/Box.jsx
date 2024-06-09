export default function Box ({data, selectedMovie, setSelectedMovie}) {
    function handlsSelection() {
        if (selectedMovie.includes(data.category)) {
            setSelectedMovie((prev) => prev.filter((item) => item !== data.category))
        } else {
            setSelectedMovie((prev) =>  [...prev, data.category])
        }
    }
    return (
        <div style={{
            border: `5px solid ${selectedMovie.includes(data.category)? 'green':'black'}`,
            borderRadius: '5px',
            padding: '10px',
            margin: '10px',
            width: '100px',
            height: '100px',
            display: 'inline-block',
        }}
        onClick={handlsSelection} >{ data.category }</div>
    )
}