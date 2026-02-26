import imgBreak from "../assets/img/400x300.svg"

export default function Post({content,postImg}){
    return(
        <div className="col-xxl-4 col-lg-6 col-12 d-flex justify-content-center mb-4" >
            <div className="card h-100 flex-column" style={{maxWidth: "410px"}} >
                <img className="card-img-top post-img" src={postImg?postImg:imgBreak} alt="Card image cap"/>
                <div className="card-body d-flex flex-column">
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: content }}></p>
                    <a href="#" className="btn btn-primary read-btn mt-auto">READ MORE</a>
                </div>
            </div>
        </div>
    )
}

