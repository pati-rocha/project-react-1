import './section.css'

function Section({content, path}){
    return(
        <section className='section-container'>           
            <p className='section-paragraph'>{content}</p>
            <img className='section-img' src={path} alt="logo"/>
        </section>
    )
}
export default Section