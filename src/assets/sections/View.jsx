import bgView from './images/view.webp'
const View = (props) => {
    return (
        <div style={{ backgroundImage: `url(${bgView})` }} className='bg-cover mb-10 viewPort flex items-center justify-center relative before:content-[""] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#ffffffbd]'>
            <div className="container" style={{ paddingBottom: '0' }}>
                <h1 className='font-bold mb-1 text-slate-900 text-center text-3xl md:text-5xl' data-aos="fade-up" data-aos-duration='1000'>{props.title}</h1>
            </div>
        </div>
    )
}
export default View;
