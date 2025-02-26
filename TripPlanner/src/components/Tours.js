import Card from './Card';
function Tours({tours, removeTour}){
    return (
        <div className='container'>
            <div>
                <h1 className='title'>Plan Trips</h1>
                
            </div>
            <div className='cards'>
                {
                    tours.map( (tour)=>{
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}
export default Tours;