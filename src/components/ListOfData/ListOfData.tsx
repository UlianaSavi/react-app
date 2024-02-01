import './ListOfData.css';

export const ListOfData = () => {
    const data = [];

    if (!data.length) return (
        <div className="list">
            <p>No data. Find something to see results.
            </p>
        </div>
    );

    return (
        <div className="list">
            <p>Dataaaaaaaaa</p>
        </div>
    );
}