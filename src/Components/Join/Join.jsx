import './Join.css';

const Join = () => {
    return (
        <div className='join-container'>
            <div className='join'>
                <h2>Join the club and get the benefits</h2>
                <div>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</div>
                <div className='email'>
                    <input type="email" placeholder="your@email.com"/>
                    <div className='sign-btn'>Sign up</div>
                </div>
            </div>
        </div>
    )
}

export default Join;