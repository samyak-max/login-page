// import { TrophyTwoTone } from '@ant-design/icons';
import { Button } from 'antd';


function HeaderFile() {
  return (
    <>
        {/* <TrophyTwoTone twoToneColor="#023047"/> */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGQNGeCib9ix4TtXhItXKkNvKtttxh5wVIVQ&usqp=CAU" className='logo' alt="" />
        <Button type="primary" className='login-header-btn'>Login</Button>
        <Button type="primary" className='header-btn'>Start Free Trial</Button>    
    </>
  )
}

export default HeaderFile