

function Work(props) {
     const {image,title,filetype,time,date}=props
     let buttonText;
     

    
    return (
        <>
        <div class="cardsection">
                <div class="card">
                    <img src={image} class="card-img-top" alt="worka"></img>
                    <div class="card-body">
                        <h6 class="card-title">{title}</h6>
                        <p class="card-text">{filetype} . {time} . {date}</p>
                        <img class="icon" src="/images/profile_icon.png"></img>
                        <img class="icon" src="/images/iicon.png"></img>
                        <img class="icon" src="/images/tagicon.png"></img>
                    </div>
                    
                </div>
                <hr/>
                </div>


        </>
    );
}

export default Work;