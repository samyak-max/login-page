import { ThunderboltTwoTone } from '@ant-design/icons';
import { Button } from 'antd';


function HeaderFile() {
  return (
    <>
        <ThunderboltTwoTone twoToneColor="#ff9700"/>
        <Button type="primary" className='header-btn'>Start Free Trial</Button>
        <Button type="primary" className='header-btn'>Login</Button>    
    </>
    
  )
}

export default HeaderFile