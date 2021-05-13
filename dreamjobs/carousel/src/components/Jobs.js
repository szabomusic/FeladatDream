

const Jobs = ({item,i}) => {

    return (
        <div className='cardSingle'>
            <div className='cardSingleContainer'>
                <h3>{item.title}</h3>
                <h4>Requirements:</h4>
                {item.technologies.map((jobDesc, i)=>{
                    return <div className='jobDesc'>
                                <p>{jobDesc}</p>
                        </div>
                })}
                <p id='companyName'>Company:{item.companyName}</p>
            </div>
            <button onClick={()=>alert('Created')}>Apply</button>
        </div>
    )
}

export default Jobs