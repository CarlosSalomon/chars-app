
const ItemListContainer = ({ greeting }) => {
    const containerStyle = {
        margin: '40px',
        padding: '5px',
        border: '2px solid #4e4e4e',
        borderRadius: '20px',
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#ab554b',
        height: '100px',
        width: '300px',
    };
    return (
        <div style={containerStyle}>
            <h2>Bienvenidos</h2>
            <p>{greeting}</p>
        </div>
    );
};

export default ItemListContainer;
